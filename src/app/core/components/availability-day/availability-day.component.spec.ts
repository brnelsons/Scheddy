import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityDayComponent } from './availability-day.component';

describe('AvailabilityDayComponent', () => {
  let component: AvailabilityDayComponent;
  let fixture: ComponentFixture<AvailabilityDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilityDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
