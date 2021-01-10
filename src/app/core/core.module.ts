import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExceptionsComponent} from './components/exceptions/exceptions.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeCreateComponent} from './components/employee-create/employee-create.component';
import {EmployeeInfoComponent} from './components/employee-info/employee-info.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from './material/material.module';
import {FlexModule} from '@angular/flex-layout';
import { MinuteRangeSliderComponent } from './components/minute-range-slider/minute-range-slider.component';
import {Ng5SliderModule} from 'ng5-slider';
import { AvailabilityDayComponent } from './components/availability-day/availability-day.component';

@NgModule({
  declarations: [
    ExceptionsComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeInfoComponent,
    MinuteRangeSliderComponent,
    AvailabilityDayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexModule,
    Ng5SliderModule,
  ],
  exports: [
    ExceptionsComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeInfoComponent,
    Ng5SliderModule,
  ]
})
export class CoreModule {
}
