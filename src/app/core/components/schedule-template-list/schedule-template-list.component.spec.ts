import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleTemplateListComponent} from './schedule-template-list.component';

describe('ScheduleTemplateListComponent', () => {
  let component: ScheduleTemplateListComponent;
  let fixture: ComponentFixture<ScheduleTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleTemplateListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
