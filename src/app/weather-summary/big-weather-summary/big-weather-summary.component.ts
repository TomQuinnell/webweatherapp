import {Component, Input, OnInit} from '@angular/core';
import {ForecastAtTime} from "../../forecast/ForecastAtTime";
import {WeatherLocation} from "../../forecast/WeatherLocation";

@Component({
  selector: 'app-big-weather-summary',
  templateUrl: './big-weather-summary.component.html',
  styleUrls: ['./big-weather-summary.component.css']
})
export class BigWeatherSummaryComponent implements OnInit {
  @Input() location!: WeatherLocation;
  constructor() {
  }

  public get currentForecast(): ForecastAtTime {
    return this.location.currentForecast;
  }

  ngOnInit(): void {
  }

}
