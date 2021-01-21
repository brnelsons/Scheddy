import {Component, Input, OnInit} from '@angular/core';
import {CalendarDate} from "../../../../../model/calendar-date";
import * as moment from "moment";
import {Moment} from "moment";
import {ScheduleTemplate} from "../../../../../model/scheduleTemplate";
import {ScheduleTemplateService} from "../../services/schedule-template.service";
import {Employee} from "../../../../../model/employee";
import {EmployeeService} from "../../services/employee.service";

export class CalendarGridConfig {
  datetime: Moment;
}

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {

  @Input() datetime: Moment;
  calendarDates: CalendarDate[] = [];
  defaultTemplate: ScheduleTemplate;
  availableTemplates: ScheduleTemplate[];
  employees: Employee[];

  constructor(private scheduleTemplateService: ScheduleTemplateService,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.calendarDates = this.getDaysInMonth(this.datetime);
    this.scheduleTemplateService.getScheduleTemplates()
      .subscribe(templates => {
        this.availableTemplates = templates;
        this.defaultTemplate = this.scheduleTemplateService.getDefaultTemplate(templates);
      });

    this.employeeService.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
      });
  }

  getDaysInMonth(moment: Moment): CalendarDate[] {
    const startingSunday = moment.clone().startOf('month').startOf('week');
    const endingSaturday = moment.clone().endOf('month').endOf('week');
    const result: CalendarDate[] = [];
    let i = startingSunday.clone();
    while (i.isSameOrBefore(endingSaturday)) {
      const calendarDate: CalendarDate = {
        date: `${i.format('YYYY-MM-DD')}`,
        display: `${i.format('D')}`,
        shifts: []
      };
      result.push(calendarDate);
      i = i.add(1, 'days');
    }
    return result;
  }
}
