import {Component} from '@angular/core';
import {allTableSpecs, OsqueryTableSpec, OsqueryColumnSpec, nameToTable} from './osquery_table_specs';

/** Provides functionality for composing SQL queries from Osquery table spces */
export class QueryComposer {
  static constructFromClause(table: OsqueryTableSpec): string {
    return `FROM ${table.name}`
  }

  static constructSelectClause(table: OsqueryTableSpec): string {
    const allColumnNames = table.columns.map(column => column.name);
    const columnsWithSeparator = allColumnNames.join(',\n\t');
    return `SELECT\n\t${columnsWithSeparator}`;
  }

  static constructWhereClause(table: OsqueryTableSpec): string {
    const requiredColumnNames = table.columns
      .filter(column => column.required)
      .map(column => column.name);
    if (requiredColumnNames.length === 0) {
      return '';
    }

    const comment = 'TODO: Set required field as appropriate.'
    const columnConstraints = requiredColumnNames.map(
        colName => `${colName} LIKE "" -- ${comment}`);
    const whereClauseArgs = columnConstraints.join('\nAND\n\t');

    return `WHERE\n\t${whereClauseArgs}`;
  }

  static constructSelectAllFromTable(table: OsqueryTableSpec): string {
    const selectClause = QueryComposer.constructSelectClause(table);
    const fromClause = QueryComposer.constructFromClause(table);
    const whereClause = QueryComposer.constructWhereClause(table);

    return [selectClause, fromClause, whereClause, ';']
      .filter(clause => clause !== '')
      .join('\n');
  }
}


function columnMatchesSearch(
    columnSpec: OsqueryColumnSpec, keyword: string
): boolean {
  return columnSpec.name.startsWith(keyword); // TODO: Check. This is different
}

function tableMatchesSearch(
    tableSpec: OsqueryTableSpec, keyword: string
): boolean {
  return tableSpec.name.includes(keyword);
}

/** Returns a list of tables matching the supplied search criteria. */
export function filterTablesBy(
    keyword: string
): ReadonlyArray<OsqueryTableSpec> {
  return allTableSpecs.filter(table =>
      tableMatchesSearch(table, keyword) ||
      table.columns.some(column => columnMatchesSearch(column, keyword)));
}


/** A helper component for the OsqueryForm to aid in writing the query */
@Component({
  selector: 'osquery-query-helper',
  templateUrl: './osquery_query_helper.ng.html',
  styleUrls: ['./osquery_query_helper.scss'],
})
export class OsqueryQueryHelper {
  readonly names = allTableSpecs.map(tableSpec => tableSpec.name);
  readonly query = QueryComposer.constructSelectAllFromTable(nameToTable('users'));
}
