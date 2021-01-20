import {AssignedShift} from "./assignedShifts";

export class CalendarDate {
  date: string;
  display: string;
  shifts: AssignedShift[];

  constructor(date: string, display: string, shifts: AssignedShift[]) {
    this.date = date;
    this.display = display;
    this.shifts = shifts;
  }
}
