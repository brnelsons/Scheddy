import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../../../services/employee';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {DayOfTheWeek} from '../../../../../services/dayOfTheWeek';
import {Moment} from 'moment';
import * as moment from 'moment';
import {TimeRange} from '../minute-range-slider/minute-range-slider.component';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  @Input() employee: Employee;
  readonly fieldAppearance: MatFormFieldAppearance = 'standard';
  lockFields: boolean = true;
  defaultDateRange: TimeRange = {
    startTime: '08:00',
    endTime: '17:00',
  }
  readonly daysOfTheWeek: DayOfTheWeek[] = [
    DayOfTheWeek.Sunday,
    DayOfTheWeek.Monday,
    DayOfTheWeek.Tuesday,
    DayOfTheWeek.Wednesday,
    DayOfTheWeek.Thursday,
    DayOfTheWeek.Friday,
    DayOfTheWeek.Saturday,
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.lockFields = true;
    //TODO save employee
  }
}
