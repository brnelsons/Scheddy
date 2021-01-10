import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ElectronService} from '../electron/electron.service';
import {Employee} from '../../../../../services/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public readonly employeesSubject = new BehaviorSubject<Employee[]>([]);

  constructor(private electronService: ElectronService) {
  }

  public getEmployees(): Observable<Employee[]> {
    this.electronService.invoke('get-employees')
      .subscribe((e: Employee[]) => this.employeesSubject.next(e));
    return this.employeesSubject;
  }

  public updateEmployee(employee: Employee): void {
    this.electronService.invoke('update-employee', employee)
      .subscribe(() => this.getEmployees());
  }

  public addEmployee(employee: Employee): void {
    this.electronService.invoke('add-employee', employee)
      .subscribe(() => this.getEmployees());
  }
}
