import { Injectable } from '@angular/core';
import {LocationCache} from "../../location/location-cache";
import {WeatherLocation} from "../../location/WeatherLocation";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _locationCache: LocationCache;
  private readonly _currentLocation: WeatherLocation;


  constructor() {
    this._locationCache = new LocationCache();
    this._currentLocation = this._locationCache.findLocation("42_42", "Peterborough", true);
    this._locationCache.add("1_1", "London");
    this._locationCache.add("2_2", "Paris");
    this._locationCache.add("3_3", "Rome");
    this._locationCache.add("4_4", "Madrid");
  }

  public getFirstK(k: number) {
    let firstKPlusOne = this._locationCache.getTopK(k + 1);
    return firstKPlusOne.filter(item => item !== this._currentLocation).slice(0, k);
  }

  public addLocation(name: string, lat: number, lon: number) {
    this._locationCache.add(lat.toString() + "_" + lon.toString(), name);
  }

  get currentLocation(): WeatherLocation {
    return this._currentLocation;
  }

  get recent(): Array<WeatherLocation> {
    return this.getFirstK(4);
  }
}
