import {Component, Input} from '@angular/core';
import { OsqueryTableSpec } from '../osquery_table_specs';


/** An item containing table info to display in the query helper menu */
@Component({
  selector: 'table-info-item',
  templateUrl: './table_info_item.ng.html',
  styleUrls: ['./table_info_item.scss'],
})
export class TableInfoItem {
  @Input()
  tableSpec?: OsqueryTableSpec;

  allColumnsString(table: OsqueryTableSpec): string {
    return table.columns.map(column => column.name).join(', ');
  }
}
