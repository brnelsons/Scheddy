import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import * as moment from "moment";
import {Moment} from "moment";

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.scss']
})
export class ScheduleCreateComponent implements OnInit {

  datetime: Moment = moment().add(1, 'month');
  dateDisplay = 'January';

  constructor() {
  }

  ngOnInit(): void {
    // this.datetime.subscribe(date => {
    //   this.dateDisplay = date.format("MMMM YY");
    // });
  }

}
