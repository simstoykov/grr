#!/usr/bin/env python
# Lint as: python3
"""A module with flow class calling the osquery client action."""
from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals
from typing import Iterator
from typing import List
from typing import cast

from grr_response_core.lib.util import compatibility
from grr_response_core.lib.rdfvalues import osquery as rdf_osquery
from grr_response_core.lib.rdfvalues import file_finder as rdf_file_finder
from grr_response_server.rdfvalues import flow_objects as rdf_flow_objects
from grr_response_server.flows.general import file_finder
from grr_response_server import flow_base
from grr_response_server import flow_responses
from grr_response_server import server_stubs
from grr_response_server.databases import db


TRUNCATED_ROW_COUNT = 10


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
) -> rdf_osquery.OsqueryFileFetched:
  if not isinstance(result.payload, rdf_file_finder.FileFinderResult):
    raise NotAFileFinderResultError

  file_finder_result = result.payload
  return rdf_osquery.OsqueryFileFetched(
      stat_entry=file_finder_result.stat_entry,
      hash_entry=file_finder_result.hash_entry)


def _GetColumnsForFileCollection(
    table: rdf_osquery.OsqueryTable,
) -> Iterator[str]:
  FILE_COLLECTION_PREFIX = "GRR_COLLECT_FILES_"
  for column in table.header.columns:
    if column.name.startswith(FILE_COLLECTION_PREFIX):
      yield column.name


class OsqueryFlow(flow_base.FlowBase):
  """A flow mixin wrapping the osquery client action."""

  friendly_name = "Osquery"
  category = "/Collectors/"
  behaviours = flow_base.BEHAVIOUR_BASIC

  args_type = rdf_osquery.OsqueryArgs
  progress_type = rdf_osquery.OsqueryProgress

  def _UpdateProgress(
      self,
      responses: flow_responses.Responses[rdf_osquery.OsqueryResult],
  ) -> None:
    self.state.progress.partial_table = _GetTruncatedTable(responses)
    self.state.progress.total_row_count = _GetTotalRowCount(responses)

  def _GetFilenamesToFetch(
      self,
      responses: flow_responses.Responses[rdf_osquery.OsqueryResult],
  ) -> List[str]:
    file_names = []
    columns_for_collection = None

    for osquery_result in responses:
      table = osquery_result.table
      if columns_for_collection is None:
        columns_for_collection = list(_GetColumnsForFileCollection(table))

      for column in columns_for_collection:
        file_names.extend(table.Column(column))

    return file_names

  def Start(self):
    super(OsqueryFlow, self).Start()
    self.state.progress = rdf_osquery.OsqueryProgress()

    self.CallClient(
        server_stubs.Osquery,
        request=self.args,
        next_state=compatibility.GetName(self.Process))

  def Process(
      self,
      responses: flow_responses.Responses[rdf_osquery.OsqueryResult],
  ) -> None:
    if not responses.success:
      raise flow_base.FlowError(responses.status)

    self._UpdateProgress(responses)

    for response in responses:
      self.SendReply(response)

    # TODO(simstoykov): Set appropriate max_size
    action = rdf_file_finder.FileFinderAction.Download(max_size=100000000000)
    self.CallFlow(
        file_finder.FileFinder.__name__,
        paths=self._GetFilenamesToFetch(responses),
        action=action,
        next_state=compatibility.GetName(self.ProcessFileFinderResults))

  def ProcessFileFinderResults(
      self,
      responses: flow_responses.Responses[rdf_file_finder.FileFinderResult],
  ) -> None:
    for file_finder_result in responses:
      self.SendReply(file_finder_result)

  def GetFilesArchiveMappings(
      self,
      flow_results: Iterator[rdf_flow_objects.FlowResult],
  ) -> Iterator[flow_base.ClientPathArchiveMapping]:
    for result in flow_results:
      try:
        osquery_file = _ExtractFileInfo(result)
      except NotAFileFinderResultError:
        continue

      client_path = db.ClientPath.FromPathSpec(
          self.client_id, osquery_file.stat_entry.pathspec)

      # This approach keeps the client directory structure
      # TODO(simstoykov): Check whether we should really keep the tree structure
      # TODO(simstoykov): What checks need to be performed on the full_client_path?
      full_client_path = osquery_file.stat_entry.pathspec.path
      target_path = f"osquery_fetched_files{full_client_path}"

      yield flow_base.ClientPathArchiveMapping(client_path, target_path)
  
  def GetProgress(self) -> rdf_osquery.OsqueryProgress:
    return self.state.progress


class NotAFileFinderResultError(ValueError):
  pass
