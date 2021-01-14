import {TimeRange} from "./ContextualTimeRange";
import {Role} from "./role";

export class AssignedShift extends TimeRange {
  id: string;
  requiredRole: Role;
  employeeId: string;


  constructor(startTime: string, endTime: string, id: string, requiredRole: "Supervisor" | "Employee" | "any" | string, employeeId: string) {
    super(startTime, endTime);
    this.id = id;
    this.requiredRole = requiredRole;
    this.employeeId = employeeId;
  }
}

export class AssignedShifts {
  Sunday: AssignedShift[];
  Monday: AssignedShift[];
  Tuesday: AssignedShift[];
  Wednesday: AssignedShift[];
  Thursday: AssignedShift[];
  Friday: AssignedShift[];
  Saturday: AssignedShift[];


  constructor(Sunday: AssignedShift[],
              Monday: AssignedShift[],
              Tuesday: AssignedShift[],
              Wednesday: AssignedShift[],
              Thursday: AssignedShift[],
              Friday: AssignedShift[],
              Saturday: AssignedShift[]) {
    this.Sunday = Sunday;
    this.Monday = Monday;
    this.Tuesday = Tuesday;
    this.Wednesday = Wednesday;
    this.Thursday = Thursday;
    this.Friday = Friday;
    this.Saturday = Saturday;
  }
}
