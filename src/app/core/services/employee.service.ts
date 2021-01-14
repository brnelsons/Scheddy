import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from "../../../../model/employee";
import {ElectronService} from "./electron.service";
import {Servlets} from "../../../../servlet/servletConstants";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public readonly employeesSubject = new BehaviorSubject<Employee[]>([]);

  constructor(private electronService: ElectronService) {
  }

  public getEmployees(): Observable<Employee[]> {
    this.electronService.invoke(Servlets.EMPLOYEE_GET_ALL)
      .subscribe((e: Employee[]) => this.employeesSubject.next(e));
    return this.employeesSubject;
  }

  public updateEmployee(employee: Employee): void {
    this.electronService.invoke(Servlets.EMPLOYEE_UPDATE, employee)
      .subscribe(() => this.getEmployees());
  }

  public addEmployee(employee: Employee): void {
    this.electronService.invoke(Servlets.EMPLOYEE_ADD, employee)
      .subscribe(() => this.getEmployees());
  }

  public removeEmployee(employee: Employee): void {
    this.electronService.invoke(Servlets.EMPLOYEE_REMOVE, employee)
      .subscribe(() => this.getEmployees());
  }
}
