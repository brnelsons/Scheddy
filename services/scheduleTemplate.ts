import {Availability} from '../model/availability';
import {TimeRange} from '../model/TimeRange';

export class ShiftTemplate extends TimeRange{
}

export class AvailableShiftTemplates {
  Sunday: ShiftTemplate[];
  Monday: ShiftTemplate[];
  Tuesday: ShiftTemplate[];
  Wednesday: ShiftTemplate[];
  Thursday: ShiftTemplate[];
  Friday: ShiftTemplate[];
  Saturday: ShiftTemplate[];
}

export class ScheduleTemplate {
  storeAvailability: Availability;
  shiftAvailability: AvailableShiftTemplates;
}
