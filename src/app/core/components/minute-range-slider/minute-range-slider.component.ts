import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContextualTimeRange} from '../../../../../model/contextualTimeRange';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {TimeRange} from "../../../../../model/timeRange";


@Component({
  selector: 'app-minute-range-slider',
  templateUrl: './minute-range-slider.component.html',
  styleUrls: ['./minute-range-slider.component.scss']
})
export class MinuteRangeSliderComponent implements OnInit {
  readonly fieldAppearance: MatFormFieldAppearance = 'standard';
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
