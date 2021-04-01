import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TimeRange} from '../../../../../model/TimeRange';
import {Employee} from '../../../schedule/schedule.component';

export class TimeWithDisplay {
  time: string;
  display: string;
}

@Component({
  selector: 'app-time-range-selector',
  templateUrl: './time-range-selector.component.html',
  styleUrls: ['./time-range-selector.component.scss']
})
export class TimeRangeSelectorComponent implements OnInit {

  @Input() timeRange: TimeRange;
  @Output() timeRangeChange = new EventEmitter<TimeRange>();
  @Input() employee: Employee;

  times: TimeWithDisplay[];

  constructor() {
  }

  ngOnInit(): void {
    this.times = [];
    for (let hour = 7; hour < 21; hour++) {
      for (let minuteStep = 0; minuteStep < 60; minuteStep += 30) {
        const formattedMinute = minuteStep === 0 ? "00" : minuteStep;

        this.times.push(
          {
            time: `${hour}:${formattedMinute}`,
            display: `${hour <= 12 ? hour : hour - 12}:${formattedMinute} ${hour <= 12 ? 'AM' : 'PM'}`,
          }
        );
      }
    }
  }

  calculate(): void {
    if (this.timeRange.endTime === "" && this.timeRange.startTime !== null && this.timeRange.startTime !== "") {
      // update end time to be starttime + 8 hours;
      const startSplit = this.timeRange.startTime.split(":");
      this.timeRange.endTime = `${Math.min(Number.parseInt(startSplit[0]) + 8, 20)}:${startSplit[1]}`;
      this.timeRangeChange.emit(this.timeRange);
    }
    this.employee.calculate();
  }
}
