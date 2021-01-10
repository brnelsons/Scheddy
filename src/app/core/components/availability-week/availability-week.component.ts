import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Availability} from '../../../../../services/availability';
import {MatFormFieldAppearance} from '@angular/material/form-field';

@Component({
  selector: 'app-availability-week',
  templateUrl: './availability-week.component.html',
  styleUrls: ['./availability-week.component.scss']
})
export class AvailabilityWeekComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() sundayEnabled: boolean = false;
  @Input() availability: Availability;
  @Output() availabilityChange: EventEmitter<Availability> = new EventEmitter<Availability>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
