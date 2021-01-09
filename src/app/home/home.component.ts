import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../core/services/employee/employee.service';
import {Observable} from 'rxjs';
import {Employee} from '../../../services/employeeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private router: Router,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}
