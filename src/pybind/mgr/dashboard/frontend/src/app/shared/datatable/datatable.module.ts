import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPipeFunctionModule } from 'ngx-pipe-function';

import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { CRUDTableComponent } from './crud-table/crud-table.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { TableKeyValueComponent } from './table-key-value/table-key-value.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableComponent } from './table/table.component';
import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { CrudFormComponent } from './crud-table/crud-form/crud-form.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    NgxPipeFunctionModule,
    FormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    PipesModule,
    ComponentsModule,
    RouterModule,
    Bootstrap4FrameworkModule
  ],
  declarations: [
    TableComponent,
    TableKeyValueComponent,
    TableActionsComponent,
    CRUDTableComponent,
    TablePaginationComponent,
    CrudFormComponent
  ],
  exports: [
    TableComponent,
    NgxDatatableModule,
    TableKeyValueComponent,
    TableActionsComponent,
    CRUDTableComponent,
    TablePaginationComponent
  ]
})
export class DataTableModule {}
