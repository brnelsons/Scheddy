import {Component, Input, OnInit} from '@angular/core';
import {ShiftTemplate} from "../../../../../model/scheduleTemplate";

@Component({
  selector: 'app-calendar-shift-panel',
  templateUrl: './calendar-shift-panel.component.html',
  styleUrls: ['./calendar-shift-panel.component.scss']
})
export class CalendarShiftPanelComponent implements OnInit {

  @Input() shiftTemplates: ShiftTemplate[];

  constructor() { }

  ngOnInit(): void {
  }

}
