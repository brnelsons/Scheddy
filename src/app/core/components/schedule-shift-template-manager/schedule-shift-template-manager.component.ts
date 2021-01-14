import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DayOfTheWeek} from '../../../../../model/dayOfTheWeek';
import {ShiftTemplate} from "../../../../../model/scheduleTemplate";
import {Role} from "../../../../../model/role";

@Component({
  selector: 'app-schedule-shift-template-manager',
  templateUrl: './schedule-shift-template-manager.component.html',
  styleUrls: ['./schedule-shift-template-manager.component.scss']
})
export class ScheduleShiftTemplateManagerComponent implements OnInit {

  @Input() day: DayOfTheWeek;
  @Input() shiftTemplates: ShiftTemplate[];
  @Output() shiftTemplatesChange: EventEmitter<ShiftTemplate[]> = new EventEmitter<ShiftTemplate[]>();
  readonly availableRoles: Role[] = [
    'Supervisor',
    'Employee',
    'any'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addShiftTemplate(): void {
    this.shiftTemplates.push(new ShiftTemplate(true, '08:00', '20:00', 'any'));
    this.shiftTemplatesChange.emit(this.shiftTemplates);
  }

  removeShiftTemplate(shiftTemplate: ShiftTemplate): void {
    this.shiftTemplates = this.shiftTemplates.filter(s => s !== shiftTemplate);
    this.shiftTemplatesChange.emit(this.shiftTemplates);
  }
}
