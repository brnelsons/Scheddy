import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinuteRangeSliderComponent } from './minute-range-slider.component';

describe('MinuteRangeSliderComponent', () => {
  let component: MinuteRangeSliderComponent;
  let fixture: ComponentFixture<MinuteRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinuteRangeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinuteRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
