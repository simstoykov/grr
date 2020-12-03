import {ChangeDetectionStrategy, Component, OnInit, Output, ViewChild, ElementRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FlowArgumentForm} from '@app/components/flow_args_form/form_interface';
import {shareReplay} from 'rxjs/operators';

import {OsqueryArgs} from '../../lib/api/api_interfaces';
import { MatDialog } from '@angular/material/dialog';
import { OsqueryQueryHelper } from './osquery_query_helper/osquery_query_helper';


/** Form that configures an Osquery flow. */
@Component({
  selector: 'osquery-form',
  templateUrl: './osquery_form.ng.html',
  styleUrls: ['./osquery_form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsqueryForm extends FlowArgumentForm<OsqueryArgs> implements
    OnInit {
  private readonly defaultQueryDisplayed = 'SELECT * FROM users LIMIT 10;';

  readonly form = new FormGroup({
    query: new FormControl(this.defaultQueryDisplayed, Validators.required),
    timeoutMillis: new FormControl(null, Validators.required),
    ignoreStderrErrors: new FormControl(null),
  });

  settingsShown = false;

  @Output() readonly formValues$ = this.form.valueChanges.pipe(shareReplay(1));
  @Output() readonly status$ = this.form.statusChanges.pipe(shareReplay(1));

  constructor(private readonly dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.form.patchValue(this.defaultFlowArgs);
  }

  openSettings() {
    this.settingsShown = true;
  }

  closeSettings() {
    this.settingsShown = false;
  }

  browseTablesClicked(): void {
    const openedDialog = this.dialog.open(OsqueryQueryHelper);

    openedDialog.afterClosed().subscribe(newQueryReceived => {
      console.log(newQueryReceived);
      if (newQueryReceived) {
        this.overwriteQuery(newQueryReceived);
      }
    }); // No need to unsubscribe as it completes when the dialog is closed.
  }

  private overwriteQuery(newValue: string): void {
    this.form.patchValue({
      query: newValue,
    });
  }
}
