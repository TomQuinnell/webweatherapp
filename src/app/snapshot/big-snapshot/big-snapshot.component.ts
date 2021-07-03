import {Component, Input, OnInit} from '@angular/core';
import {ForecastAtTime} from "../../forecast/ForecastAtTime";
import {WeatherLocation} from "../../forecast/WeatherLocation";

@Component({
  selector: 'app-big-snapshot',
  templateUrl: './big-snapshot.component.html',
  styleUrls: ['./big-snapshot.component.css']
})
export class BigSnapshotComponent implements OnInit {
  getPictureURL(forecast: ForecastAtTime) {
    let pictureDir = "/assets/";
    if (forecast.temp === undefined || forecast.cloudCoverage === undefined || forecast.rain === undefined) {
      return pictureDir + "Load.gif"
    }
    let warmLevel: number = 10.0;
    let isWarm: boolean = forecast.temp > warmLevel;

    let cloudyLevel: number = 40.0;
    let isCloudy: boolean = forecast.cloudCoverage > cloudyLevel;

    let rainyLevel: number = 0.0;
    let isRainy:boolean = forecast.rain > rainyLevel;

    if (isRainy) {
      if (isWarm) {
        return pictureDir + "Sunraincloud.png";
      } else {
        return pictureDir + "Rain.png";
      }
    } else {
      if (!isWarm && !isCloudy) {
        return pictureDir + "Cold.png";
      } else if (!isWarm) {
        return pictureDir + "Cloud.png";
      } else if (!isCloudy) {
        return pictureDir + "Warm.png";
      } else {
        return pictureDir + "Suncloud.png";
      }
    }
  }

  @Input() location!: WeatherLocation;
  constructor() {
  }

  public get currentForecast(): ForecastAtTime {
    return this.location.currentForecast;
  }

  ngOnInit(): void {
  }

}
