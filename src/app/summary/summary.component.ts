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
  }

  public swapComposite() {
    this._compositeForecast = this.isTwelve ? this.location.sevenDay : this.location.twelveHour;
    this._isTwelve = !this.isTwelve;
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
