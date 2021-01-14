import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../../../../../model/employee';
import {MatFormFieldAppearance} from '@angular/material/form-field';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  @Input() employee: Employee;
  @Input() hideLock: boolean = false;
  @Input() hideSave: boolean = false;
  @Input() hideRemove: boolean = false;
  @Input() lockFields: boolean = true;
  @Output() employeeChange: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() employeeRemove: EventEmitter<Employee> = new EventEmitter<Employee>();
  readonly fieldAppearance: MatFormFieldAppearance = 'standard';

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
