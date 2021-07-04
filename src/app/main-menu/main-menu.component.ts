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
  }


  get currentLocation(): WeatherLocation {
    return this._currentLocation;
  }

  get recent(): Array<WeatherLocation> {
    return this._recent;
  }
}
