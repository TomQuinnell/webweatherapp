import { Injectable } from '@angular/core';
import {LocationCache} from "../../location/location-cache";
import {WeatherLocation} from "../../location/WeatherLocation";
import {ForecastAtTime} from "../../forecast/ForecastAtTime";
import {ForecastComposite} from "../../forecast/ForecastComposite";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _locationCache: LocationCache;
  private readonly _currentLocation: WeatherLocation;
  private _summaryLocation: WeatherLocation;
  private _searchAPIKey!: string;
  private _weatherAPIKey!: string;
  private _searchURL: string = "";
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
      .then(() => this.updateForecast(this.currentLocation, this.currentLocation.currentForecast))
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
    this._locationCache.add(lat.toString() + "_" + lon.toString(), name);
  }

  private static dtToDate(dt: string): Date {
    return new Date(dt);
  }

  public async updateForecast(location: WeatherLocation, forecast: ForecastAtTime) {
    // TODO freshness
    this.http.get(this._weatherURL + "onecall?lat=" + location.lat + "&lon=" + location.lon
    + "&exclude=minutely,hourly,daily" + "&appid=" + this._weatherAPIKey)
      .subscribe((data: any) => {
        let current = data.current;
        // TODO rain!
        forecast.update(Math.round(current.temp - 273), current.clouds, 0, current.humidity,
          current.wind_speed, WeatherService.dtToDate(current.dt))
      });
  }

  public async updateTwelveHour(twelveHour: ForecastComposite) {

  }

  public async updateSevenDay(sevenDay: ForecastComposite) {

  }

  private async updateRecent(): Promise<void> {
    return new Promise<void>(() => {
        for (let location of this.recent) {
          console.log(location.name);
          this.updateForecast(location, location.currentForecast);
        }
      }
    );
  }

  public async fetchSummary(location: WeatherLocation) {
    this._summaryLocation = location;
    await this.updateForecast(location, location.currentForecast);
    await this.updateTwelveHour(location.twelveHour);
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
