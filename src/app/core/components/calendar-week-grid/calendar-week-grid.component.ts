import {Component, Input, OnInit} from '@angular/core';
import {ShiftTemplate} from "../../../../../model/scheduleTemplate";

@Component({
  selector: 'app-calendar-week-grid',
  templateUrl: './calendar-week-grid.component.html',
  styleUrls: ['./calendar-week-grid.component.scss']
})
export class CalendarWeekGridComponent implements OnInit {

  @Input() shifts: ShiftTemplate[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
