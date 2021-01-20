import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DayOfTheWeek} from '../../../../../model/dayOfTheWeek';
import {ContextualTimeRange} from '../../../../../model/contextualTimeRange';

@Component({
  selector: 'app-availability-day',
  templateUrl: './availability-day.component.html',
  styleUrls: ['./availability-day.component.scss']
})
export class AvailabilityDayComponent implements OnInit {

  @Input() day: DayOfTheWeek;
  @Input() disabled: boolean = false;
  @Input() timeRange: ContextualTimeRange = {
    enabled: false,
    startTime: '08:00',
    endTime: '17:00',
  };
  @Output() timeRangeChange: EventEmitter<ContextualTimeRange> = new EventEmitter<ContextualTimeRange>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public dateRangeChanged(timeRange: ContextualTimeRange): void {
    this.timeRangeChange.emit(timeRange);
  }
}
