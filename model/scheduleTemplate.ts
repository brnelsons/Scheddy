import {Availability} from './availability';
import {TimeRange} from './TimeRange';
import {v4 as uuidv4} from 'uuid';
import {Role} from "./role";

export class ShiftTemplate extends TimeRange {
  id: string;
  requiredRole: Role;

  constructor(enabled: boolean, startTime: string, endTime: string, requiredRole: "Supervisor" | "Employee" | "any") {
    super(enabled, startTime, endTime);
    this.id = uuidv4();
    this.requiredRole = requiredRole;
  }

  public static defaultShiftTemplate(): ShiftTemplate {
    const timeRange = TimeRange.defaultTimeRange();
    return new ShiftTemplate(
      true,
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

  public static defaultAvailableShiftTemplates(): AvailableShiftTemplates {
    return new AvailableShiftTemplates(
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    );
  }
}

export class ScheduleTemplate {
  id: string;
  name: string;
  isDefault: boolean;
  storeAvailability: Availability;
  shiftAvailability: AvailableShiftTemplates;


  constructor(name: string, isDefault: boolean, storeAvailability: Availability, shiftAvailability: AvailableShiftTemplates) {
    this.name = name;
    this.isDefault = isDefault;
    this.storeAvailability = storeAvailability;
    this.shiftAvailability = shiftAvailability;
  }

  public static defaultScheduleTemplate(): ScheduleTemplate {
    return new ScheduleTemplate(
      "Schedule Template Name",
      false,
      Availability.defaultAvailability(),
      AvailableShiftTemplates.defaultAvailableShiftTemplates(),
    );
  }
}
