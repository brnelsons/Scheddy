import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../../../model/employee';
import {Availability} from '../../../../../model/availability';
import {EmployeeService} from "../../services/employee.service";
import {TimeRange} from "../../../../../model/TimeRange";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = {
    id: null,
    firstName: "",
    lastName: "",
    maxHoursPerWeek: 32,
    minHoursPerWeek: 32,
    role: 'any',
    availability: Availability.defaultAvailability()
  };

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  save(employee: Employee): void {
    this.employeeService.addEmployee(employee);
    this.employee = {
      id: null,
      firstName: "",
      lastName: "",
      maxHoursPerWeek: 32,
      minHoursPerWeek: 32,
      role: 'any',
      availability: Availability.defaultAvailability()
    };
  }
}
