import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleShiftTemplateManagerComponent } from './schedule-shift-template-manager.component';

describe('ScheduleShiftTemplateManagerComponent', () => {
  let component: ScheduleShiftTemplateManagerComponent;
  let fixture: ComponentFixture<ScheduleShiftTemplateManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleShiftTemplateManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleShiftTemplateManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
