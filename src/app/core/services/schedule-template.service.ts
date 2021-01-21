import {Injectable, OnInit} from '@angular/core';
import {ElectronService} from "./electron.service";
import {BehaviorSubject, Observable} from "rxjs";
import {ScheduleTemplate} from "../../../../model/scheduleTemplate";
import {Employee} from "../../../../model/employee";
import {Servlets} from "../../../../servlet/servletConstants";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ScheduleTemplateService implements OnInit {
  public readonly scheduleTemplates = new BehaviorSubject<ScheduleTemplate[]>([]);

  constructor(private electronService: ElectronService) {
  }

  ngOnInit(): void {
    this.getScheduleTemplates();
  }

  public getScheduleTemplates(): Observable<ScheduleTemplate[]> {
    this.electronService.invoke(Servlets.SCHEDULE_TEMPLATE_GET_ALL)
      .subscribe((e: ScheduleTemplate[]) => this.scheduleTemplates.next(e));
    return this.scheduleTemplates;
  }

  public add(scheduleTemplate: ScheduleTemplate): void {
    this.electronService.invoke(Servlets.SCHEDULE_TEMPLATE_ADD, scheduleTemplate)
      .subscribe(() => this.getScheduleTemplates());
  }

  public update(scheduleTemplate: ScheduleTemplate): void {
    this.electronService.invoke(Servlets.SCHEDULE_TEMPLATE_UPDATE, scheduleTemplate)
      .subscribe(() => this.getScheduleTemplates());
  }

  public remove(scheduleTemplate: Employee): void {
    this.electronService.invoke(Servlets.SCHEDULE_TEMPLATE_REMOVE, scheduleTemplate)
      .subscribe(() => this.getScheduleTemplates());
  }

  getDefaultTemplate(templates: ScheduleTemplate[]): ScheduleTemplate {
    for (const template of templates) {
      if (template.isDefault) {
        return template;
      }
    }
    return templates[0];
  }
}
