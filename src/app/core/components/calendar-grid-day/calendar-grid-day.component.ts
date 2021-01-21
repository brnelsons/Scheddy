import {Component, Input, OnInit} from '@angular/core';
import {CalendarDate} from "../../../../../model/calendar-date";
import {ScheduleTemplate, ShiftTemplate} from "../../../../../model/scheduleTemplate";
import {AssignedShift} from "../../../../../model/assignedShifts";
import {Employee} from "../../../../../model/employee";

@Component({
  selector: 'app-calendar-grid-day',
  templateUrl: './calendar-grid-day.component.html',
  styleUrls: ['./calendar-grid-day.component.scss']
})
export class CalendarGridDayComponent implements OnInit {

  @Input() calendarDate: CalendarDate;
  @Input() selectedTemplate: ScheduleTemplate;
  @Input() availableTemplates: ScheduleTemplate[];
  @Input() employees: Employee[];

  constructor() {
  }

  ngOnInit(): void {
    this.calendarDate.shifts = CalendarGridDayComponent.createShifts(this.selectedTemplate.shifts);
  }

  setTemplate(template: ScheduleTemplate): void {
    this.selectedTemplate = template;
    this.calendarDate.shifts = CalendarGridDayComponent.createShifts(this.selectedTemplate.shifts);
  }

  private static createShifts(shiftTemplates: ShiftTemplate[]): AssignedShift[] {
    if (!shiftTemplates) return [];
    const shifts: AssignedShift[] = [];
    for (const template of shiftTemplates) {
      shifts.push(new AssignedShift(template.startTime, template.endTime, template.id, template.requiredRole, null));
    }
    return shifts;
  }

  updateShift(shift: AssignedShift, employee: Employee) {
    shift.employeeId = employee.id;
  }
}
