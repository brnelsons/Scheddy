import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarShiftPanelComponent } from './calendar-shift-panel.component';

describe('CalendarShiftPanelComponent', () => {
  let component: CalendarShiftPanelComponent;
  let fixture: ComponentFixture<CalendarShiftPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarShiftPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarShiftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
