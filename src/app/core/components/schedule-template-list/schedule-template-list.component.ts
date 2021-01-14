import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ScheduleTemplate} from "../../../../../model/scheduleTemplate";
import {ScheduleTemplateService} from "../../services/schedule-template.service";

@Component({
  selector: 'app-schedule-template-list',
  templateUrl: './schedule-template-list.component.html',
  styleUrls: ['./schedule-template-list.component.scss']
})
export class ScheduleTemplateListComponent implements OnInit {

  templates: Observable<ScheduleTemplate[]>;

  constructor(private scheduleTemplateService: ScheduleTemplateService) {
  }

  ngOnInit(): void {
    this.templates = this.scheduleTemplateService.getScheduleTemplates();
  }

}
