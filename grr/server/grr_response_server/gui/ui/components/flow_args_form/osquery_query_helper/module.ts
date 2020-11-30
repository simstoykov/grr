import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {OsqueryQueryHelper} from './osquery_query_helper';


/** Module for the OsqueryQueryHelper component. */
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  declarations: [
    OsqueryQueryHelper,
  ],
  exports: [
    OsqueryQueryHelper,
  ],
})
export class OsqueryQueryHelperModule {
}
