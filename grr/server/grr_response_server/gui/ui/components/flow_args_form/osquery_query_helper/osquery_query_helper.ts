import {Component, Output, EventEmitter, ViewChild} from '@angular/core';
import {allTableSpecs, OsqueryTableSpec, OsqueryColumnSpec, nameToTable} from './osquery_table_specs';
import {debounceTime, startWith, map, filter} from 'rxjs/operators';
import {isNonNull} from '@app/lib/preconditions';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

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
    tableSpecs: ReadonlyArray<OsqueryTableSpec>,
    keyword: string,
): ReadonlyArray<OsqueryTableSpec> {
  return tableSpecs.filter(table =>
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
  private static readonly INPUT_DEVOUNCE_TIME_MS = 200;

  @Output()
  overwriteWithQuery: EventEmitter<string> = new EventEmitter();

  readonly searchControl = new FormControl('');

  private readonly suggestedTablesList = ['users', 'file'].map(nameToTable);
  readonly suggestedTables$ = this.searchControl.valueChanges.pipe(
    filter(isNonNull),
    debounceTime(OsqueryQueryHelper.INPUT_DEVOUNCE_TIME_MS),
    startWith(''),
    map(keyword => filterTablesBy(this.suggestedTablesList, keyword)),
  );

  readonly allTables$ = this.searchControl.valueChanges.pipe(
    filter(isNonNull),
    debounceTime(OsqueryQueryHelper.INPUT_DEVOUNCE_TIME_MS),
    startWith(''),
    map(keyword => filterTablesBy(allTableSpecs, keyword)),
  );

  trackByTableName(_: number, table: OsqueryTableSpec): string {
    return table.name;
  }

  tableSelected(event: MatAutocompleteSelectedEvent): void {
    const tableName = event.option.value;
    const table = nameToTable(tableName);
    const query = QueryComposer.constructSelectAllFromTable(table);

    this.overwriteWithQuery?.emit(query);
  }
}
