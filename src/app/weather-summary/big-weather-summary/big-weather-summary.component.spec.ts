import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigWeatherSummaryComponent } from './big-weather-summary.component';

describe('BigWeatherSummaryComponent', () => {
  let component: BigWeatherSummaryComponent;
  let fixture: ComponentFixture<BigWeatherSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigWeatherSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigWeatherSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
