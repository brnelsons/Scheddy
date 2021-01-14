import { TestBed } from '@angular/core/testing';

import { ScheduleTemplateService } from './schedule-template.service';

describe('ScheduleTemplateService', () => {
  let service: ScheduleTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
