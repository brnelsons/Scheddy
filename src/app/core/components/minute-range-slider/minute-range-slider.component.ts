import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContextualTimeRange} from '../../../../../model/ContextualTimeRange';
import {MatFormFieldAppearance} from '@angular/material/form-field';


@Component({
  selector: 'app-minute-range-slider',
  templateUrl: './minute-range-slider.component.html',
  styleUrls: ['./minute-range-slider.component.scss']
})
export class MinuteRangeSliderComponent implements OnInit {
  readonly fieldAppearance: MatFormFieldAppearance = 'standard';
  @Input() disabled: boolean;
  @Input() dateRange: ContextualTimeRange;
  @Output() dateRangeChange: EventEmitter<ContextualTimeRange> = new EventEmitter<ContextualTimeRange>();

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
