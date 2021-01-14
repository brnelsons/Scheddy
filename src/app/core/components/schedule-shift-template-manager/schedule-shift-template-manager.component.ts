import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DayOfTheWeek} from '../../../../../model/dayOfTheWeek';
import {ShiftTemplate} from '../../../../../services/scheduleTemplate';

@Component({
  selector: 'app-schedule-shift-template-manager',
  templateUrl: './schedule-shift-template-manager.component.html',
  styleUrls: ['./schedule-shift-template-manager.component.scss']
})
export class ScheduleShiftTemplateManagerComponent implements OnInit {

  @Input() day: DayOfTheWeek;
  @Input() shiftTemplates: ShiftTemplate[];
  @Output() shiftTemplatesChange: EventEmitter<ShiftTemplate[]> = new EventEmitter<ShiftTemplate[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addShiftTemplate(): void {
    this.shiftTemplates.push({enabled: true, startTime: '08:00', endTime: '17:00'});
    this.shiftTemplatesChange.emit(this.shiftTemplates);
  }

  removeShiftTemplate(shiftTemplate: ShiftTemplate): void {
    this.shiftTemplates = this.shiftTemplates.filter(s => s === shiftTemplate);
    this.shiftTemplatesChange.emit(this.shiftTemplates);
  }
}
