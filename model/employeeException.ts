import {Employee} from "./employee";
import {MinuteOfDayRange} from "./minuteOfDayRange";

export interface EmployeeException {
  id: string;
  employee: Employee;
  reason: string;
  date: Date;
  availableRanges: MinuteOfDayRange;
}
