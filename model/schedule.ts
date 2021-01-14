import {AssignedShifts} from "./assignedShifts";

export class Schedule {
  id: string;
  startDate: string;
  endDate: string;
  shiftAvailability: AssignedShifts;
}
