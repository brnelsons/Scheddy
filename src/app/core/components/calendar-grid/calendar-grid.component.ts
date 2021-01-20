import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CalendarDate} from "../../../../../model/calendar-date";
import * as moment from "moment";
import {Moment} from "moment";
import {ScheduleTemplate, ShiftTemplate} from "../../../../../model/scheduleTemplate";
import {AssignedShift} from "../../../../../model/assignedShifts";

export class CalendarGridConfig {
  template: ScheduleTemplate;
  datetime: Moment;
}

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {

  @Input() datetime: Moment;
  @Input() scheduleTemplates: Observable<ScheduleTemplate[]>;
  @Input() selectedTemplate: ScheduleTemplate;
  date: Moment;
  config: CalendarGridConfig;
  calendarDates: BehaviorSubject<CalendarDate[]> = new BehaviorSubject<CalendarDate[]>([]);
  startingDay = 'sunday';

  constructor() {
  }

  ngOnInit(): void {
    if (!this.selectedTemplate || !this.date) return;
    this.calendarDates.next(this.getDaysInMonth(this.selectedTemplate, this.date));
  }

  changeTemplate(template: ScheduleTemplate): void {
    this.selectedTemplate = template;
    this.calendarDates.next(this.getDaysInMonth(template, this.date));
  }

  getDaysInMonth(template: ScheduleTemplate, moment: Moment): CalendarDate[] {
    const startingSunday = moment.clone().startOf('month').startOf('week');
    const endingSaturday = moment.clone().endOf('month').endOf('week');
    const result: CalendarDate[] = [];
    let i = startingSunday.clone();
    while (i.isSameOrBefore(endingSaturday)) {
      const calendarDate: CalendarDate = {
        date: `${i.format('YYYY-MM-DD')}`,
        display: `${i.format('D')}`,
        shifts: CalendarGridComponent.createShifts(template.shifts)
      };
      result.push(calendarDate);
      i = i.add(1, 'days');
    }
    return result;
  }

  private static createShifts(shiftTemplates: ShiftTemplate[]): AssignedShift[] {
    const shifts: AssignedShift[] = [];
    for (const template of shiftTemplates) {
      shifts.push(new AssignedShift(template.startTime, template.endTime, template.id, template.requiredRole, null));
    }
    return shifts;
  }

  newMoment(date: string): Moment {
    return moment(date, 'YYYY-MM-DD');
  }
}
