import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTemplateCreateComponent } from './schedule-template-create.component';

describe('ScheduleTemplateCreateComponent', () => {
  let component: ScheduleTemplateCreateComponent;
  let fixture: ComponentFixture<ScheduleTemplateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleTemplateCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTemplateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
