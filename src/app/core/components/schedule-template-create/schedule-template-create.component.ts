import { Component, OnInit } from '@angular/core';
import {ShiftTemplate} from '../../../../../services/scheduleTemplate';

@Component({
  selector: 'app-schedule-template-create',
  templateUrl: './schedule-template-create.component.html',
  styleUrls: ['./schedule-template-create.component.scss']
})
export class ScheduleTemplateCreateComponent implements OnInit {

  SundayShiftTemplates: ShiftTemplate[] = [];
  MondayShiftTemplates: ShiftTemplate[] = [];
  TuesdayShiftTemplates: ShiftTemplate[] = [];
  WednesdayShiftTemplates: ShiftTemplate[] = [];
  ThursdayShiftTemplates: ShiftTemplate[] = [];
  FridayShiftTemplates: ShiftTemplate[] = [];
  SaturdayShiftTemplates: ShiftTemplate[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
