import {Availability} from './availability';
import {ContextualTimeRange} from './contextualTimeRange';
import {v4 as uuidv4} from 'uuid';
import {Role} from "./role";
import {TimeRange} from "./timeRange";

export class ShiftTemplate extends TimeRange {
  id: string;
  requiredRole: Role;

  constructor(startTime: string, endTime: string, requiredRole: "Supervisor" | "Employee" | "any") {
    super(startTime, endTime);
    this.id = uuidv4();
    this.requiredRole = requiredRole;
  }

  public static defaultShiftTemplate(): ShiftTemplate {
    const timeRange = TimeRange.defaultTimeRange();
    return new ShiftTemplate(
      timeRange.startTime,
      timeRange.endTime,
      'any'
    );
  }
}

export class AvailableShiftTemplates {
  Sunday: ShiftTemplate[];
  Monday: ShiftTemplate[];
  Tuesday: ShiftTemplate[];
  Wednesday: ShiftTemplate[];
  Thursday: ShiftTemplate[];
  Friday: ShiftTemplate[];
  Saturday: ShiftTemplate[];


  constructor(Sunday: ShiftTemplate[],
              Monday: ShiftTemplate[],
              Tuesday: ShiftTemplate[],
              Wednesday: ShiftTemplate[],
              Thursday: ShiftTemplate[],
              Friday: ShiftTemplate[],
              Saturday: ShiftTemplate[]) {
    this.Sunday = Sunday;
    this.Monday = Monday;
    this.Tuesday = Tuesday;
    this.Wednesday = Wednesday;
    this.Thursday = Thursday;
    this.Friday = Friday;
    this.Saturday = Saturday;
  }
}

export class ScheduleTemplate {
  id: string;
  name: string;
  isDefault: boolean;
  storeAvailability: Availability;
  shifts: ShiftTemplate[];


  constructor(name: string, isDefault: boolean, storeAvailability: Availability, shifts: ShiftTemplate[]) {
    this.name = name;
    this.isDefault = isDefault;
    this.storeAvailability = storeAvailability;
    this.shifts = shifts;
  }

  public static defaultScheduleTemplate(timeRangeEnabled = false): ScheduleTemplate {
    return new ScheduleTemplate(
      "Template",
      false,
      Availability.defaultAvailability(timeRangeEnabled),
      [],
    );
  }
}
