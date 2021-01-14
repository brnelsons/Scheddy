import {MinuteOfDayRange} from '../model/minuteOfDayRange';
import {Employee} from '../model/employee';

export interface EmployeeException {
  id: number;
  employee: Employee;
  reason: string;
  date: Date;
  availableRanges: MinuteOfDayRange;
}

export class EmployeeExceptionServlet {

  employeeExceptions: EmployeeException[];

  constructor() {
    this.employeeExceptions = [];
  }

  public getEmployeeExceptions(): EmployeeException[] {
    return this.employeeExceptions;
  }

  public addEmployee(employeeException: EmployeeException): void {
    this.employeeExceptions.push(employeeException);
  }

  public removeEmployeeException(employeeException: EmployeeException): void {
    // TODO remove employee
  }

}
