import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MinuteOfDayRange} from '../../../../../services/minuteOfDayRange';

export interface TimeRange {
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-minute-range-slider',
  templateUrl: './minute-range-slider.component.html',
  styleUrls: ['./minute-range-slider.component.scss']
})
export class MinuteRangeSliderComponent implements OnInit {
  // slidersRefresh: EventEmitter<void> = new EventEmitter<void>();
  range: MinuteOfDayRange = {start: 0, end: 1440};
  @Input() disabled: boolean;
  @Input() dateRange: TimeRange;
  @Output() dateRangeChange: EventEmitter<TimeRange> = new EventEmitter<TimeRange>();

  constructor() {
  }

  ngOnInit(): void {
  }


  public updateStart(value: number): void {
    this.dateRangeChange.emit(this.dateRange);
  }

  public updateEnd(value: number): void {
    this.dateRangeChange.emit(this.dateRange);
  }
}
