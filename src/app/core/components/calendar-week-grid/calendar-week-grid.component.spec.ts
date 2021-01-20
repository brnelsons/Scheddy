import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWeekGridComponent } from './calendar-week-grid.component';

describe('CalendarWeekGridComponent', () => {
  let component: CalendarWeekGridComponent;
  let fixture: ComponentFixture<CalendarWeekGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarWeekGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWeekGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
