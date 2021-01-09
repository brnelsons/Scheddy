import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExceptionsComponent} from './components/exceptions/exceptions.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeCreateComponent} from './components/employee-create/employee-create.component';
import {EmployeeInfoComponent} from './components/employee-info/employee-info.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from './material/material.module';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    ExceptionsComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexModule
  ],
  exports: [
    ExceptionsComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeInfoComponent
  ]
})
export class CoreModule {
}
