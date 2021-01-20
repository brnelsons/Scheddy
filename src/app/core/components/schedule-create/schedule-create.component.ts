import {Component, OnInit} from '@angular/core';
import {ScheduleTemplateService} from "../../services/schedule-template.service";
import {Observable} from "rxjs";
import {ScheduleTemplate} from "../../../../../model/scheduleTemplate";
import * as moment from "moment";
import {Moment} from "moment";

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.scss']
})
export class ScheduleCreateComponent implements OnInit {

  scheduleTemplates: Observable<ScheduleTemplate[]>;
  defaultTemplate: ScheduleTemplate;
  datetime: Moment = moment().add(1, 'month');

  constructor(private templateService: ScheduleTemplateService) {
  }

  ngOnInit(): void {
    this.scheduleTemplates = this.templateService.getScheduleTemplates();
    this.scheduleTemplates.subscribe(templates => {
      if (templates.length > 0) {
        let activeTemplate = templates[0];
        for (const template of templates) {
          if (template.isDefault) {
            activeTemplate = template;
          }
        }
        this.defaultTemplate = activeTemplate;
      }
    });
  }

}
