import {Component, Input, OnInit} from '@angular/core';
import {ForecastAtTime} from "../../forecast/ForecastAtTime";
import {WeatherLocation} from "../../location/WeatherLocation";
import {Snapshot} from "../snapshot";

@Component({
  selector: 'app-big-snapshot',
  templateUrl: './big-snapshot.component.html',
  styleUrls: ['./big-snapshot.component.css']
})
export class BigSnapshotComponent extends Snapshot implements OnInit {
  @Input() location!: WeatherLocation;
  constructor() {
    super();
  }

  public get currentForecast(): ForecastAtTime {
    return this.location.currentForecast;
  }

  ngOnInit(): void {
  }

}
