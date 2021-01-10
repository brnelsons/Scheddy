import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityWeekComponent } from './availability-week.component';

describe('AvailabilityWeekComponent', () => {
  let component: AvailabilityWeekComponent;
  let fixture: ComponentFixture<AvailabilityWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilityWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
