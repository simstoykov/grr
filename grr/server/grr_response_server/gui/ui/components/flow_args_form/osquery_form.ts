import {ChangeDetectionStrategy, Component, OnInit, Output, Input, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {FlowArgumentForm} from '@app/components/flow_args_form/form_interface';

import {OsqueryArgs} from '../../lib/api/api_interfaces';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {shareReplay, startWith, map, debounceTime} from 'rxjs/operators';

import * as CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';

import {Observable} from 'rxjs';

import tables from '../../../static/osquery_tables_reference.json';

const INPUT_DEVOUNCE_TIME_MS = 200;

interface Column {
  name: string,
  required: boolean,
}

interface Table {
  name: string,
  description: string,
  columns: ReadonlyArray<Column>,
  platforms: ReadonlyArray<string>,
}

function nameToTable(name: string) {
  return tables.filter(fullInfo => fullInfo.name === name)[0];
}

function constructFromClause(table: Table): string {
  return `FROM ${table.name}`
}

function constructSelectClause(table: Table): string {
  const allColumnNames = table.columns.map(column => column.name);
  const columnsWithSeparator = allColumnNames.join(',\n\t');
  return `SELECT\n\t${columnsWithSeparator}`;
}

function constructWhereClause(table: Table): string {
  const requiredColumnNames = table.columns
    .filter(column => column.required)
    .map(column => column.name);
  if (requiredColumnNames.length === 0) {
    return '';
  }

  const comment = 'TODO: Set required field as appropriate.'
  const columnConstraints = requiredColumnNames.map(colName => `${colName} LIKE "" -- ${comment}`);
  const whereClauseArgs = columnConstraints.join('\nAND\n\t');

  return `WHERE\n\t${whereClauseArgs}`;
}

function constructQueryFromTable(table: Table): string {
  const selectClause = constructSelectClause(table);
  const fromClause = constructFromClause(table);
  const whereClause = constructWhereClause(table);

  return [selectClause, fromClause, whereClause, ';']
    .filter(clause => clause !== '')
    .join('\n');
}

function getTablesMatching(keyword: string): ReadonlyArray<Table> {
  const matchingNames = tables.filter(table => table.name.includes(keyword));

  const notMatchingNamesButColumns = tables.filter(table =>
    !table.name.includes(keyword) &&
    table.columns.some(column => column.name.startsWith(keyword)) // TODO: This is different than table name logic. Check.
  );

  return [...matchingNames, ...notMatchingNamesButColumns];
}

/** Form that configures an Osquery flow. */
@Component({
  selector: 'osquery-form',
  templateUrl: './osquery_form.ng.html',
  styleUrls: ['./osquery_form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OsqueryForm extends FlowArgumentForm<OsqueryArgs> implements OnInit, AfterViewInit {
  readonly templateTableControl = new FormControl(null);

  readonly filteredTables$ = this.templateTableControl.valueChanges.pipe(
    debounceTime(INPUT_DEVOUNCE_TIME_MS),
    startWith(''),
    map(keyword => getTablesMatching(keyword)),
  );

  readonly selectedTemplateTable$: Observable<Table | undefined> = this.templateTableControl.valueChanges.pipe(
    debounceTime(INPUT_DEVOUNCE_TIME_MS),
    map(nameToTable),
  );

  readonly form = new FormGroup({
    query: new FormControl(null, Validators.required),
    timeoutMillis: new FormControl(null, Validators.required),
    ignoreStderrErrors: new FormControl(null),
  });

  @Output() readonly formValues$ = this.form.valueChanges.pipe(shareReplay(1));
  @Output() readonly status$ = this.form.statusChanges.pipe(shareReplay(1));

  @ViewChild('editorTarget')
  readonly editorTarget!: ElementRef;
  private editor?: CodeMirror.Editor;

  onSubmit(selectedTable: Table): void {
    const query = constructQueryFromTable(selectedTable);
    this.editor?.setValue(query);
  }

  ngOnInit() {
    this.form.patchValue(this.defaultFlowArgs);
  }

  ngAfterViewInit(): void {
    this.editor = this.initializeEditor();
  }

  allColumnsString(table: Table): string {
    return table.columns.map(column => column.name).join(', ');
  }

  trackByTableName(_: number, table: Table): string {
    return table.name;
  }

  private initializeEditor(): CodeMirror.Editor {
    const editor = CodeMirror.fromTextArea(this.editorTarget.nativeElement, {
      value: '',
      mode: 'text/x-sqlite',
      theme: 'idea',
      extraKeys: {'Ctrl-Space': 'autocomplete'},
      lineNumbers: true,
      lineWrapping: true,
    });

    editor.on('change', () => {
      this.form.patchValue({
        query: editor.getValue(),
      });
    });

    return editor;
  }
}
