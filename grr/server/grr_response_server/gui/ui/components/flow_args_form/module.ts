import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ByteComponentsModule} from '@app/components/form/byte_input/module';
import {GlobExpressionExplanationModule} from '@app/components/form/glob_expression_form_field/module';

import {FallbackFlowArgsForm} from './fallback_flow_args_form';

import {CollectBrowserHistoryForm} from '@app/components/flow_args_form/collect_browser_history_form';
import {CollectMultipleFilesForm} from '@app/components/flow_args_form/collect_multiple_files_form';
import {CollectSingleFileForm} from '@app/components/flow_args_form/collect_single_file_form';
import {FlowArgsForm} from './flow_args_form';
import {OsqueryForm} from './osquery_form';

/** Module for the FlowArgsForm component. */
@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTooltipModule,
    ByteComponentsModule,
    GlobExpressionExplanationModule,
  ],
  declarations: [
    FlowArgsForm,
    CollectBrowserHistoryForm,
    CollectSingleFileForm,
    CollectMultipleFilesForm,
    OsqueryForm,
    FallbackFlowArgsForm,
  ],
  entryComponents: [
    CollectBrowserHistoryForm,
    CollectSingleFileForm,
    CollectMultipleFilesForm,
    OsqueryForm,
    FallbackFlowArgsForm,
  ],
  exports: [
    FlowArgsForm,
  ],
})
export class FlowArgsFormModule {
}
