import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DayOfTheWeek} from '../../../../../services/dayOfTheWeek';
import {TimeRange} from '../../../../../services/TimeRange';

@Component({
  selector: 'app-availability-day',
  templateUrl: './availability-day.component.html',
  styleUrls: ['./availability-day.component.scss']
})
export class AvailabilityDayComponent implements OnInit {

  @Input() day: DayOfTheWeek;
  @Input() disabled: boolean = false;
  @Input() timeRange: TimeRange = {
    enabled: false,
    startTime: '08:00',
    endTime: '17:00',
  };
  @Output() timeRangeChange: EventEmitter<TimeRange> = new EventEmitter<TimeRange>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public dateRangeChanged(timeRange: TimeRange): void {
    this.timeRangeChange.emit(timeRange);
  }
}
