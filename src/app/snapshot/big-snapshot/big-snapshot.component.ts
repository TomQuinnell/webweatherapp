import {Component, Input, OnInit} from '@angular/core';
import {ForecastAtTime} from "../../forecast/ForecastAtTime";
import {WeatherLocation} from "../../forecast/WeatherLocation";

@Component({
  selector: 'app-big-snapshot',
  templateUrl: './big-snapshot.component.html',
  styleUrls: ['./big-snapshot.component.css']
})
export class BigSnapshotComponent implements OnInit {
  @Input() location!: WeatherLocation;
  constructor() {
  }

  public get currentForecast(): ForecastAtTime {
    return this.location.currentForecast;
  }

  ngOnInit(): void {
  }

}
