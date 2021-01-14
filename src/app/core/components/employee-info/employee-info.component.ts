import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../../../../../model/employee';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {Role} from "../../../../../model/role";

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  @Input() employee: Employee;
  @Input() hideLock = false;
  @Input() hideSave = false;
  @Input() hideRemove = false;
  @Input() lockFields = true;
  @Output() employeeChange: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() employeeRemove: EventEmitter<Employee> = new EventEmitter<Employee>();
  readonly fieldAppearance: MatFormFieldAppearance = 'standard';
  readonly availableRoles: Role[] = [
    'Supervisor',
    'Employee',
    'any'
  ];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.employee)
  }

  public save(): void {
    this.lockFields = true;
    this.employeeChange.emit(this.employee);
  }

  public remove(): void {
    this.employeeRemove.emit(this.employee);
  }
}
