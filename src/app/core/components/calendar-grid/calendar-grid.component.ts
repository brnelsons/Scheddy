import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CalendarDate} from "../../../../../model/calendar-date";
import * as moment from "moment";
import {Moment} from "moment";
import {ScheduleTemplate, ShiftTemplate} from "../../../../../model/scheduleTemplate";
import {AssignedShift} from "../../../../../model/assignedShifts";

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {

  @Input() template: ScheduleTemplate = ScheduleTemplate.defaultScheduleTemplate(false);
  @Input() datetime: Moment = moment().add(1, 'month');
  calendarDates: BehaviorSubject<CalendarDate[]> = new BehaviorSubject<CalendarDate[]>([]);
  startingDay = 'sunday';

  constructor() {
  }

  ngOnInit(): void {
    this.calendarDates.next(this.getDaysInMonth(this.datetime));
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
        shifts: CalendarGridComponent.createShifts(this.template.shiftAvailability[i.format('dddd')])
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
