import { Component, OnInit } from '@angular/core';
import {WeatherLocation} from "../location/WeatherLocation";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public london: WeatherLocation;
  constructor() {
    this.london = new WeatherLocation("London", 42, 42);
    this.london.currentForecast.update(42, 42, 42, 42, 42, new Date());
  }

  ngOnInit(): void {
  }

}
