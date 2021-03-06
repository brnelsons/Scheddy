import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../../../../model/employee';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this.employeeService.employeesSubject;
    this.employeeService.getEmployees();
  }

  save(employee: Employee): void {
    this.employeeService.updateEmployee(employee);
  }

  remove(employee: Employee): void {
    this.employeeService.removeEmployee(employee);
  }

}
