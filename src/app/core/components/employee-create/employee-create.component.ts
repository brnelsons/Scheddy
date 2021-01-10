import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../../../services/employee';
import {Availability} from '../../../../../services/availability';
import {EmployeeService} from '../../services/employee/employee.service';

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
    position: "",
    availability: new Availability()
  }

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
      position: "",
      availability: new Availability()
    }
  }
}
