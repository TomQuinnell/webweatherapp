import { Component, OnInit } from '@angular/core';
import {WeatherLocation} from "../location/WeatherLocation";
import {WeatherService} from "../services/weather/weather.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  private _currentLocation!: WeatherLocation;
  private _recent!: Array<WeatherLocation>;
  constructor(
    private readonly weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this._currentLocation = this.weatherService.currentLocation;
    this._recent = this.weatherService.recent;
    this.weatherService.addLocation("random", Math.round(Math.random() * 4), Math.round(Math.random() * 4));
    this.currentLocation.currentForecast.update(Math.random() * 80, 1, 1, 1, 1, new Date());
  }


  get currentLocation(): WeatherLocation {
    return this._currentLocation;
  }

  get recent(): Array<WeatherLocation> {
    return this._recent;
  }
}
