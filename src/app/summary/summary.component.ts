import { Component, OnInit } from '@angular/core';
import {ForecastAtTime} from "../forecast/ForecastAtTime";
import {WeatherLocation} from "../location/WeatherLocation";
import {WeatherService} from "../services/weather/weather.service";
import {ForecastComposite} from "../forecast/ForecastComposite";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
/*
  The Summary screen for a particular Location
  Holds a Snapshot of the current Forecast
  And a Forecast Composite (12 hour or 7 day)
  And a button to switch between the 2 Composites
 */
export class SummaryComponent implements OnInit {
  private _location!: WeatherLocation;
  private _currentForecast!: ForecastAtTime;
  private _compositeForecast!: ForecastComposite;
  private _isTwelve!: boolean;
  constructor(
    private readonly weatherService: WeatherService,
  ) {
  }

  ngOnInit(): void {
    this._location = this.weatherService.summaryLocation;
    this._currentForecast = this.location.currentForecast;
    this._compositeForecast = this.location.twelveHour;
    this._isTwelve = true;
    this.weatherService.fetchSummary(this.location).then();
  }

  public swapComposite() {
    this._compositeForecast = this.isTwelve ? this.location.sevenDay : this.location.twelveHour;
    this._isTwelve = !this.isTwelve;
    if (this.isTwelve) {
      this.weatherService.updateTwelveHour(this.location).then();
    } else {
      this.weatherService.updateSevenDay(this.location).then();
    }
  }

  get location(): WeatherLocation {
    return this._location;
  }

  get currentForecast(): ForecastAtTime {
    return this._currentForecast;
  }

  get compositeForecast(): ForecastComposite {
    return this._compositeForecast;
  }

  get isTwelve(): boolean {
    return this._isTwelve;
  }
}
