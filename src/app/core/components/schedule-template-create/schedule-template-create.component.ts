import { Component, OnInit } from '@angular/core';
import {AvailableShiftTemplates, ScheduleTemplate, ShiftTemplate} from "../../../../../model/scheduleTemplate";
import {ScheduleTemplateService} from "../../services/schedule-template.service";

@Component({
  selector: 'app-schedule-template-create',
  templateUrl: './schedule-template-create.component.html',
  styleUrls: ['./schedule-template-create.component.scss']
})
export class ScheduleTemplateCreateComponent implements OnInit {

  scheduleTemplate: ScheduleTemplate = ScheduleTemplate.defaultScheduleTemplate();

  constructor(private scheduleTemplateService: ScheduleTemplateService) { }

  ngOnInit(): void {

  }

  createScheduleTemplate(): void {
    this.scheduleTemplateService.add(this.scheduleTemplate);
    this.scheduleTemplate = ScheduleTemplate.defaultScheduleTemplate();
  }

}
