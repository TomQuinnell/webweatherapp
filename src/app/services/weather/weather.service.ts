import { Injectable } from '@angular/core';
import {LocationCache} from "../../location/location-cache";
import {WeatherLocation} from "../../location/WeatherLocation";
import {ForecastAtTime} from "../../forecast/ForecastAtTime";
import {ForecastComposite} from "../../forecast/ForecastComposite";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {SearchItem} from "../../searcher/searcher.component";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _locationCache: LocationCache;
  private readonly _currentLocation: WeatherLocation;
  private _summaryLocation: WeatherLocation;
  private _searchAPIKey!: string;
  private _weatherAPIKey!: string;
  private _searchURL: string = "http://api.weatherapi.com/v1/";
  private _weatherURL: string = "https://api.openweathermap.org/data/2.5/";

  constructor(
    private http: HttpClient
  ) {
    this._locationCache = new LocationCache();
    this._currentLocation = this._locationCache.findLocation("52.56_0.24", "Peterborough", true);
    this._locationCache.add("51.5_0.13", "London");
    this._locationCache.add("48.86_2.35", "Paris");
    this._locationCache.add("41.9_12.50", "Rome");
    this._locationCache.add("40.42_3.7", "Madrid");
    this._summaryLocation = this.recent[0];

    this.getAPIKeys()
      .then(() => this.updateForecast(this.currentLocation))
      .then(() => this.updateRecent());
  }

  private loadFile(fileName: string): Promise<string> {
    return new Promise<string>((resolve) =>
      fetch("/assets/" + fileName + ".txt")
      .then(response => response.text())
      .then(data => {
        resolve(data);
      })
    );
  }

  private async getAPIKeys() {
    this._searchAPIKey = await this.loadFile("search");
    this._weatherAPIKey = await this.loadFile("weather");
  }

  public getFirstK(k: number) {
    let firstKPlusOne = this._locationCache.getTopK(k + 1);
    return firstKPlusOne.filter(item => item !== this._currentLocation).slice(0, k);
  }

  public addLocation(name: string, lat: number, lon: number) {
    return this._locationCache.add(lat.toString() + "_" + lon.toString(), name.split(',')[0]);
  }

  private static dtToDate(dt: string): Date {
    return new Date(Number.parseInt(dt) * 1000);
  }

  public async updateForecast(location: WeatherLocation) {
    let forecast: ForecastAtTime = location.currentForecast;
    if (forecast.timeOfForecast === undefined || forecast.isOld()) {
      this.http.get(this._weatherURL + "onecall?lat=" + location.lat + "&lon=" + location.lon
        + "&exclude=minutely,hourly,daily" + "&appid=" + this._weatherAPIKey)
        .subscribe((data: any) => {
          let current = data.current;
          // TODO rain!
          forecast.update(Math.round(current.temp - 273), current.clouds, 0, current.humidity,
            current.wind_speed, WeatherService.dtToDate(current.dt))
        });
    }
  }

  public async updateTwelveHour(location: WeatherLocation) {
    let twelveHour: ForecastComposite = location.twelveHour;
    if (twelveHour.timeOfQuery === undefined || twelveHour.isOld() || twelveHour.isDifferentDay()) {
      this.http.get(this._weatherURL + "onecall?lat=" + location.lat + "&lon=" + location.lon
        + "&exclude=current,minutely,daily" + "&appid=" + this._weatherAPIKey)
        .subscribe((data: any) => {
          let hourly = data.hourly;
          let temps: Array<number> = [];
          let clouds: Array<number> = [];
          let rains: Array<number> = [];
          let humiditys: Array<number> = [];
          let windSpeeds: Array<number> = [];
          let times: Array<Date> = [];
          for (let i = 0; i < 12; i++) {
            let hourForecast = hourly[i + 1];
            temps.push(Math.round(hourForecast.temp - 273));
            clouds.push(hourForecast.clouds ? hourForecast.clouds : 0.0001);
            rains.push(hourForecast.rain ? hourForecast.rain : 0.0001);
            humiditys.push(hourForecast.humidity);
            windSpeeds.push(hourForecast.wind_speed);
            times.push(WeatherService.dtToDate(hourForecast.dt));
          }
          twelveHour.update(temps, clouds, rains, humiditys, windSpeeds, times);
        });
    }
  }

  public async updateSevenDay(location: WeatherLocation) {
    let sevenDay: ForecastComposite = location.sevenDay;
    if (sevenDay.timeOfQuery === undefined || sevenDay.isOld() || sevenDay.isDifferentDay()) {
      this.http.get(this._weatherURL + "onecall?lat=" + location.lat + "&lon=" + location.lon
        + "&exclude=current,minutely,hourly" + "&appid=" + this._weatherAPIKey)
        .subscribe((data: any) => {
          let daily = data.daily;
          let temps: Array<number> = [];
          let clouds: Array<number> = [];
          let rains: Array<number> = [];
          let humiditys: Array<number> = [];
          let windSpeeds: Array<number> = [];
          let times: Array<Date> = [];
          for (let i = 0; i < 7; i++) {
            let dayForecast = daily[i + 1];
            temps.push(Math.round(dayForecast.temp.day - 273));
            clouds.push(dayForecast.clouds ? dayForecast.clouds : 0.0001);
            rains.push(dayForecast.rain ? dayForecast.rain : 0.0001);
            humiditys.push(dayForecast.humidity);
            windSpeeds.push(dayForecast.wind_speed);
            times.push(WeatherService.dtToDate(dayForecast.dt));
          }
          sevenDay.update(temps, clouds, rains, humiditys, windSpeeds, times);
        });
    }
  }

  private async updateRecent(): Promise<void> {
    return new Promise<void>(() => {
        for (let location of this.recent) {
          this.updateForecast(location);
        }
      }
    );
  }

  public async fetchSummary(location: WeatherLocation) {
    this._summaryLocation = location;
    await this.updateForecast(location);
    await this.updateTwelveHour(location);
  }

  public search(term: string) {
    if (term === "") {
      return of([]);
    }
    // TODO cleanQuery??
    return this.http.get<Array<SearchItem>>(this._searchURL + "search.json?key=" + this._searchAPIKey + "&q=" + term);
  }

  get summaryLocation(): WeatherLocation {
    return this._summaryLocation;
  }

  get currentLocation(): WeatherLocation {
    return this._currentLocation;
  }

  get recent(): Array<WeatherLocation> {
    return this.getFirstK(4);
  }
}
