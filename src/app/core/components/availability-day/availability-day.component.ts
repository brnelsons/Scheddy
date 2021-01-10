import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DayOfTheWeek} from '../../../../../services/dayOfTheWeek';
import {Moment} from 'moment';
import {TimeRange} from '../minute-range-slider/minute-range-slider.component';

@Component({
  selector: 'app-availability-day',
  templateUrl: './availability-day.component.html',
  styleUrls: ['./availability-day.component.scss']
})
export class AvailabilityDayComponent implements OnInit {

  @Input() day: DayOfTheWeek;
  @Input() enabled: boolean = false;
  @Input() dateRange: TimeRange;
  @Output() dateRangeChange: EventEmitter<TimeRange> = new EventEmitter<TimeRange>();

  constructor() { }

  ngOnInit(): void {
  }

}
