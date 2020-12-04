import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {debounceTime, startWith, map, filter} from 'rxjs/operators';

import {allTableSpecs, OsqueryTableSpec, nameToTable} from './osquery_table_specs';
import {isNonNull} from '@app/lib/preconditions';
import { SingleElementFuzzyMatcher, Match } from '@app/lib/fuzzy_matcher';
import { MatchResultForTable } from './table_info_item/table_info_item';

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

/**
 * Data structure which holds a table category name and the Osquery tables specs inside.
 */
class TableCategory {
  protected constructor(
      public name: string,
      public tableSpecs: ReadonlyArray<OsqueryTableSpec>,
  ) { }

  static fromTableSpecs(
    name: string,
    tableSpecs: ReadonlyArray<OsqueryTableSpec>,
  ): TableCategory {
    return new TableCategory(name, tableSpecs);
  }

  static fromTableNames(
    categoryName: string,
    tableNames: ReadonlyArray<string>,
  ): TableCategory {
    const tableSpecs = tableNames.map(tableName => {
      const tableSpec = nameToTable(tableName);
      if (!isNonNull(tableSpec)) {
        throw Error(`Table not found: ${tableName} (category ${categoryName})`);
      }
      return tableSpec;
    });

    return new TableCategory(categoryName, tableSpecs);
  }
}

class ValueWithMatcher {
  constructor(
      public value: string,
      public matcher: SingleElementFuzzyMatcher,
  ) { }

  static fromValue(value: string): ValueWithMatcher {
    const matcher = new SingleElementFuzzyMatcher(value);
    return new ValueWithMatcher(value, matcher);
  }
}

export class ValueWithMatchResult {
  constructor(
      public value: string,
      public matchResult: Match | null,
  ) { }
}

/** Decorates {@link OsqueryTableSpec} elements with {@link FuzzyMatcher} functionality */
class TableSpecWithMatchers implements OsqueryTableSpec {
  tableNameMatcher: ValueWithMatcher;
  tableDescriptionMatcher: ValueWithMatcher;
  columNameMatchers: ReadonlyArray<ValueWithMatcher>;

  // OsqueryTableSpec properties below taken directly from our instance
  get name() {
    return this.tableSpec.name;
  }
  get description() {
    return this.tableSpec.description;
  }
  get columns() {
    return this.tableSpec.columns;
  }
  get platforms() {
    return this.tableSpec.platforms;
  }

  constructor(private tableSpec: OsqueryTableSpec) {
    this.tableNameMatcher = ValueWithMatcher.fromValue(tableSpec.name);
    this.tableDescriptionMatcher = ValueWithMatcher.fromValue(
        tableSpec.description
    );

    this.columNameMatchers = tableSpec.columns.map(
        column => ValueWithMatcher.fromValue(column.name)
    );
  }
}


class CategoryWithMatchers {
  constructor(
      public name: string,
      public tableSpecsWithMatchers: ReadonlyArray<TableSpecWithMatchers>,
  ) { }

  static fromTableCategory(tableCategory: TableCategory) {
    const tableSpecsWithMatchers = tableCategory.tableSpecs.map(
      tableSpec => new TableSpecWithMatchers(tableSpec),
    );

    return new CategoryWithMatchers(
        tableCategory.name,
        tableSpecsWithMatchers,
    );
  }
}

class CategoryWithMatchResults {
  constructor(
      public name: string,
      public tablesMatchResults: ReadonlyArray<MatchResultForTable>,
  ) { }
}

/** A helper component for the OsqueryForm to aid in writing the query */
@Component({
  selector: 'osquery-query-helper',
  templateUrl: './osquery_query_helper.ng.html',
  styleUrls: ['./osquery_query_helper.scss'],

  // This makes all styles effectively global.
  encapsulation: ViewEncapsulation.None,
})
export class OsqueryQueryHelper {
  private static readonly INPUT_DEVOUNCE_TIME_MS = 500;

  queryToReturn?: string;

  readonly searchControl = new FormControl('');

  readonly searchValues$ = this.searchControl.valueChanges.pipe(
    filter(isNonNull),
    debounceTime(OsqueryQueryHelper.INPUT_DEVOUNCE_TIME_MS),
    startWith(''),
  );

  readonly queryToReturn$ = this.searchValues$.pipe(
      map((tableName) => {
        const tableSpec = nameToTable(tableName);

        if (isNonNull(tableSpec)) {
          return QueryComposer.constructSelectAllFromTable(tableSpec);
        } else {
          return null;
        }
      }),
  );

  private readonly tableCategories = [
      TableCategory.fromTableNames('Suggested', ['users', 'file']),
      TableCategory.fromTableSpecs('All tables', allTableSpecs),
  ];

  private readonly categoriesWithMatchers = this.tableCategories.map(
      tableCategory => CategoryWithMatchers.fromTableCategory(tableCategory),
  );

  readonly filteredCategories: ReadonlyArray<
      Observable<CategoryWithMatchResults>
  > = this.categoriesWithMatchers.map(
      (categoryWithMatchers: CategoryWithMatchers) => {
        return this.searchValues$.pipe(
            map(keyword => {
              return this.getMatchingTablesInCategory(
                  categoryWithMatchers,
                  keyword,
              );
            }),
        );
      }
  );

  private getMatchingTablesInCategory(
      categoryWithMatchers: CategoryWithMatchers,
      keyword: string,
  ): CategoryWithMatchResults {
    const tablesMatchResults = categoryWithMatchers.tableSpecsWithMatchers.map(
        tableWithMatchers => {
          const nameMatchResult = this.getMatchResult(
              tableWithMatchers.tableNameMatcher,
              keyword,
          );
          const descMatchResult = this.getMatchResult(
              tableWithMatchers.tableDescriptionMatcher,
              keyword,
          );
          const columnMatchResults = tableWithMatchers.columNameMatchers.map(
              columnMatcher => this.getMatchResult(columnMatcher, keyword)
          );

          return this.getMatchResultForTable(
              nameMatchResult,
              descMatchResult,
              columnMatchResults,
              keyword !== '',
          );
        }).filter(
            isNonNull
        );

    return new CategoryWithMatchResults(
        categoryWithMatchers.name,
        tablesMatchResults,
    );
  }

  private getMatchResult(
      valueWithMatcher: ValueWithMatcher,
      keyword: string,
  ): ValueWithMatchResult {
    if (keyword === '') {
      return new ValueWithMatchResult(valueWithMatcher.value, null);
    }

    const matchResult = valueWithMatcher.matcher.matchSingle(keyword);
    return new ValueWithMatchResult(valueWithMatcher.value, matchResult);
  }

  private getMatchResultForTable(
      nameMatch: ValueWithMatchResult,
      descriptionMatch: ValueWithMatchResult,
      columnMatches: ReadonlyArray<ValueWithMatchResult>,
      discardIfNothingMatches: boolean,
  ): MatchResultForTable | null {
    if (discardIfNothingMatches) {
      const noMatchInName = !isNonNull(nameMatch.matchResult);
      const noMatchInDescription = !isNonNull(descriptionMatch.matchResult);
      const noMatchInColumns = columnMatches.every(
          columnMatch => !isNonNull(columnMatch.matchResult),
      );

      if (noMatchInName && noMatchInDescription && noMatchInColumns) {
        return null;
      }
    }

    return {
      name: nameMatch,
      description: descriptionMatch,
      columns: columnMatches,
    };
  }

  trackCategoryWithResultsByName(
      _index: number,
      category: CategoryWithMatchResults,
  ): string {
    return category.name;
  }

  trackMatchResultByTableName(
      _index: number,
      matchResult: MatchResultForTable,
  ): string {
    return matchResult.name.value;
  }

  trackByIndex(index: number, _element: unknown): number {
    return index;
  }
}
