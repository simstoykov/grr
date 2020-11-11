import {ChangeDetectionStrategy, Component, OnInit, Output, Input, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {FlowArgumentForm} from '@app/components/flow_args_form/form_interface';

import {OsqueryArgs} from '../../lib/api/api_interfaces';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {shareReplay} from 'rxjs/operators';

import * as CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';


/** Form that configures an Osquery flow. */
@Component({
  selector: 'osquery-form',
  templateUrl: './osquery_form.ng.html',
  styleUrls: ['./osquery_form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OsqueryForm extends FlowArgumentForm<OsqueryArgs> implements OnInit, AfterViewInit {
  readonly form = new FormGroup({
    query: new FormControl(null, Validators.required),
    timeoutMillis: new FormControl(null, Validators.required),
    ignoreStderrErrors: new FormControl(null),
  });

  @ViewChild('editorTarget') readonly editorTarget!: ElementRef;

  @Output() readonly formValues$ = this.form.valueChanges.pipe(shareReplay(1));
  @Output() readonly status$ = this.form.statusChanges.pipe(shareReplay(1));

  ngOnInit() {
    this.form.patchValue(this.defaultFlowArgs);
  }

  ngAfterViewInit(): void {
    CodeMirror.fromTextArea(this.editorTarget.nativeElement, {
      value: '',
      mode: 'text/x-sqlite',
      theme: 'idea',
      extraKeys: {'Ctrl-Space': 'autocomplete'},
      lineNumbers: true,
    });
  }
}
