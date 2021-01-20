import {Component, OnInit} from '@angular/core';
import {ScheduleTemplateService} from "../../services/schedule-template.service";
import {Observable} from "rxjs";
import {ScheduleTemplate} from "../../../../../model/scheduleTemplate";

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.scss']
})
export class ScheduleCreateComponent implements OnInit {

  scheduleTemplates: Observable<ScheduleTemplate[]>;
  activeTemplate: ScheduleTemplate;

  constructor(private templateService: ScheduleTemplateService) {
  }

  ngOnInit(): void {
    this.scheduleTemplates = this.templateService.getScheduleTemplates();
    this.scheduleTemplates.subscribe(templates => {
      if (templates.length > 0) {
        this.activeTemplate = templates[0];
        for (const template of templates) {
          if (template.isDefault) {
            this.activeTemplate = template;
          }
        }
      }
    });
  }

}
