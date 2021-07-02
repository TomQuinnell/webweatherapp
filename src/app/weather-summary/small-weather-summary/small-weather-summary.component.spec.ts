import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallWeatherSummaryComponent } from './small-weather-summary.component';

describe('SmallWeatherSummaryComponent', () => {
  let component: SmallWeatherSummaryComponent;
  let fixture: ComponentFixture<SmallWeatherSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallWeatherSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallWeatherSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
