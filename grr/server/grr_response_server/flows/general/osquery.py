#!/usr/bin/env python
# Lint as: python3
"""A module with flow class calling the osquery client action."""
from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals
from typing import Iterator
from typing import List
from typing import Dict

from grr_response_core.lib.util import compatibility
from grr_response_core.lib.rdfvalues import paths as rdf_paths
from grr_response_core.lib.rdfvalues import client_fs as rdf_client_fs
from grr_response_core.lib.rdfvalues import osquery as rdf_osquery
from grr_response_core.lib.rdfvalues import client_action as rdf_client_action
from grr_response_server.rdfvalues import flow_objects as rdf_flow_objects
from grr_response_server.rdfvalues import objects as rdf_objects
from grr_response_server.rdfvalues import osquery as rdf_server_osquery
from grr_response_server.flows.general import transfer
from grr_response_server import flow_base
from grr_response_server import flow_responses
from grr_response_server import server_stubs
from grr_response_server.databases import db


TRUNCATED_ROW_COUNT = 10

FILE_COLLECTION_MAX_COLUMNS = 5
FILE_COLLECTION_MAX_ROWS = 1000
FILE_COLLECTION_MAX_SINGLE_FILE_BYTES = 2**30 // 2  # 1/2 GiB
FILE_COLLECTION_MAX_TOTAL_BYTES = 2**30  # 1 GiB


def _GetTotalRowCount(
    responses: flow_responses.Responses[rdf_osquery.OsqueryResult],) -> int:
  get_row_lengths = lambda response: len(response.table.rows)
  row_lengths = map(get_row_lengths, responses)
  return sum(row_lengths)


def _GetTruncatedTable(
    responses: flow_responses.Responses[rdf_osquery.OsqueryResult],
) -> rdf_osquery.OsqueryTable:
  """Constructs a truncated OsqueryTable.

  Constructs an OsqueryTable by extracting the first TRUNCATED_ROW_COUNT rows
  from the tables contained in the given OsqueryResult list.

  Args:
    responses: List of OsqueryResult elements from which to construct the
      truncated table.

  Returns:
    A truncated OsqueryTable.
  """
  tables = [response.table for response in responses]

  result = tables[0].Truncated(TRUNCATED_ROW_COUNT)

  for table in tables[1:]:
    to_add = TRUNCATED_ROW_COUNT - len(result.rows)
    if to_add == 0:
      break

    result.rows.Extend(table.rows[:to_add])
  return result


def _ExtractFileInfo(
    result: rdf_flow_objects.FlowResult,
) -> rdf_server_osquery.OsqueryCollectedFile:
  if not isinstance(result.payload, rdf_client_fs.StatEntry):
    raise _ResultNotRelevantError

  stat_entry = result.payload
  return rdf_server_osquery.OsqueryCollectedFile(stat_entry=stat_entry)


class _ResultNotRelevantError(ValueError):
  pass


class FileCollectionLimitsExceeded(flow_base.FlowError):
  pass


class OsqueryFlow(transfer.MultiGetFileLogic, flow_base.FlowBase):
  """A flow mixin wrapping the osquery client action."""

  friendly_name = "Osquery"
  category = "/Collectors/"
  behaviours = flow_base.BEHAVIOUR_BASIC

  args_type = rdf_server_osquery.OsqueryFlowArgs
  progress_type = rdf_osquery.OsqueryProgress

  def _UpdateProgress(
      self,
      responses: flow_responses.Responses[rdf_osquery.OsqueryResult],
  ) -> None:
    self.state.progress.partial_table = _GetTruncatedTable(responses)
    self.state.progress.total_row_count = _GetTotalRowCount(responses)

  def _GetPathSpecsToCollect(
      self,
      responses: flow_responses.Responses[rdf_osquery.OsqueryResult],
  ) -> List[rdf_paths.PathSpec]:
    if not self.args.file_collect_columns:
      return []

    total_row_count = _GetTotalRowCount(responses)
    if total_row_count > FILE_COLLECTION_MAX_ROWS:
      message = (f"Requested file collection on a table with {total_row_count} "
          f"rows, but the limit is {FILE_COLLECTION_MAX_ROWS} rows")
      raise FileCollectionLimitsExceeded(message)

    file_names = []
    for osquery_result in responses:
      for column in self.args.file_collect_columns:
        file_names.extend(osquery_result.table.Column(column))

    return [rdf_paths.PathSpec.OS(path=file_name) for file_name in file_names]

  def _FileCollectionFromColumns(
      self,
      responses: flow_responses.Responses[rdf_osquery.OsqueryResult],
  ) -> None:
    pathspecs = self._GetPathSpecsToCollect(responses)

    stub = server_stubs.GetFileStat
    for pathspec in pathspecs:
      request = rdf_client_action.GetFileStatRequest(pathspec=pathspec)
      self.CallClient(
          stub,
          request,
          next_state=compatibility.GetName(self._StatForFileArrived))

  def _StatForFileArrived(
      self,
      responses: flow_responses.Responses[rdf_client_fs.StatEntry],
  ) -> None:
    if not responses.success:
      # TODO(simstoykov): Take note of this and report to the user with other
      # flow results, instead of failing the flow.
      raise flow_base.FlowError(
        f"Error when attempted to stat file: {responses.status}")

    if len(responses) != 1:
      raise ValueError(
          f"Response from stat has length {len(responses)}, instead of 1.")

    stat_entry = list(responses)[0]

    if stat_entry.st_size > FILE_COLLECTION_MAX_SINGLE_FILE_BYTES:
      # TODO(simstoykov): Report to the user with other flow results instead of
      # failing the flow.
      file_path = stat_entry.pathspec.CollapsePath()
      raise flow_base.FlowError(
          f"File with path {file_path} is too big: {stat_entry.st_size} bytes "
          f"when the limit is {FILE_COLLECTION_MAX_SINGLE_FILE_BYTES} bytes")

    next_total_size = self.state.total_collected_bytes + stat_entry.st_size
    if next_total_size > FILE_COLLECTION_MAX_TOTAL_BYTES:
      # TODO(simstoykov): Consider reporting to the user and giving the
      # collected files so far and the other results.
      raise flow_base.FlowError("Files for collection exceed the total size "
          f"limit of ${FILE_COLLECTION_MAX_SINGLE_FILE_BYTES} bytes")

    self.StartFileFetch(stat_entry.pathspec)

  def Start(self):
    super(OsqueryFlow, self).Start(
        file_size=FILE_COLLECTION_MAX_SINGLE_FILE_BYTES)

    if len(self.args.file_collect_columns) > FILE_COLLECTION_MAX_COLUMNS:
      message = (f"Requested file collection for "
          f"{len(self.args.file_collect_columns)} columns, but the limit is"
          f"{FILE_COLLECTION_MAX_COLUMNS} columns")
      raise FileCollectionLimitsExceeded(message)

    self.state.progress = rdf_osquery.OsqueryProgress()
    self.state.path_to_count = {}
    self.state.total_collected_bytes = 0

    action_args = rdf_osquery.OsqueryArgs(
        query=self.args.query,
        timeout_millis=self.args.timeout_millis,
        ignore_stderr_errors=self.args.ignore_stderr_errors)
    self.CallClient(
        server_stubs.Osquery,
        request=action_args,
        next_state=compatibility.GetName(self.Process))

  def Process(
      self,
      responses: flow_responses.Responses[rdf_osquery.OsqueryResult],
  ) -> None:
    if not responses.success:
      raise flow_base.FlowError(responses.status)

    self._UpdateProgress(responses)

    # Make Osquery results available before files are collected
    for response in responses:
      self.SendReply(response)

    self._FileCollectionFromColumns(responses)

  def GetProgress(self) -> rdf_osquery.OsqueryProgress:
    return self.state.progress

  def ReceiveFetchedFile(self,
                         stat_entry,
                         file_hash,
                         request_data=None,
                         is_duplicate=False) -> None:
    self.SendReply(stat_entry)

  def GetFilesArchiveMappings(
      self,
      flow_results: Iterator[rdf_flow_objects.FlowResult],
  ) -> Iterator[flow_base.ClientPathArchiveMapping]:
    def _GetUniqueSuffixFor(target_path_so_far: str) -> str:
      times_used_before = self.state.path_to_count.get(target_path_so_far, 0)
      self.state.path_to_count[target_path_so_far] = times_used_before + 1

      if times_used_before > 0:
        return f"-{times_used_before}"
      else:
        return ""

    def GenerateTargetPath(pathspec: rdf_paths.PathSpec) -> str:
      path_info = rdf_objects.PathInfo.FromPathSpec(pathspec)
      client_string_path = "/".join(path_info.components)

      target_path = f"osquery_collected_files/{client_string_path}"
      target_path += _GetUniqueSuffixFor(target_path)
      return target_path

    for result in flow_results:
      try:
        osquery_file = _ExtractFileInfo(result)
      except _ResultNotRelevantError:
        continue

      client_path = db.ClientPath.FromPathSpec(
          self.client_id, osquery_file.stat_entry.pathspec)
      target_path = GenerateTargetPath(osquery_file.stat_entry.pathspec)

      yield flow_base.ClientPathArchiveMapping(client_path, target_path)
