import {ChangeDetectionStrategy, Component, OnInit, Output, Input, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {FlowArgumentForm} from '@app/components/flow_args_form/form_interface';

import {OsqueryArgs} from '../../lib/api/api_interfaces';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {shareReplay, startWith, map, filter, debounceTime, tap} from 'rxjs/operators';

import * as CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';

import {tables} from './temporary_list_of_osquery_tables';
import { Observable } from 'rxjs';

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
  if (!requiredColumnNames) {
    return '';
  }

  const comment = 'TODO: Set required filed as appropriate.'
  const columnConstraints = requiredColumnNames.map(colName => `${colName} LIKE "" -- ${comment}`);
  const whereClauseArgs = columnConstraints.join('\nAND\n\t');

  return `WHERE\n\t${whereClauseArgs}`;
}

function constructQueryFromTable(table: Table): string {
  const selectClause = constructSelectClause(table);
  const fromClause = constructFromClause(table);
  const whereClause = constructWhereClause(table);
  return [selectClause, fromClause, whereClause, ';'].join('\n');
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
    map(keyword => tables.filter(table => table.name.includes(keyword))),
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

  ngOnInit() {
    this.form.patchValue(this.defaultFlowArgs);
  }

  ngAfterViewInit(): void {
    this.editor = this.initializeEditor();
  }

  onSubmit(selectedTable: Table): void {
    const query = constructQueryFromTable(selectedTable);
    this.editor?.setValue(query);
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
    });

    editor.on('change', () => {
      this.form.patchValue({
        query: editor.getValue(),
      });
    });

    return editor;
  }
}
