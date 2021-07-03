import {WeatherLocation} from "./WeatherLocation";

export class LocationCache {
  private _cache: Map<string, WeatherLocation> = new Map<string, WeatherLocation>();
  private _recent: Array<WeatherLocation> = new Array<WeatherLocation>();
  private capacity: number = 50;

  constructor() { }

  private cons(location: WeatherLocation, inRecents: boolean, toHead: boolean) {
    // add to head or end
    if (toHead) {
      this.recent.unshift(location);
    } else {
      if (this.recent.length < this.capacity) {
        this.recent.push(location);
      }
    }

    // remove duplicates
    if (inRecents) {
      this.recent.filter(item => item !== location || this.recent.indexOf(item) !== this.recent.lastIndexOf(item));
    }

    // chop down to capacity
    while (this.recent.length > this.capacity) {
      let lastLocation: WeatherLocation | undefined = this.recent.pop();
      if (lastLocation === undefined) {
        break;
      }
      this.cache.delete(lastLocation.latlon);
    }
  }

  public add(latlon: string, locationName: string) {
    // first check cache
    if (this.cache.has(latlon)) {
      // must also be in recent, get and move to front
      let location: WeatherLocation | undefined = this.cache.get(latlon);
      if (location === undefined) {
        throw new Error("Not in cache but in cache adding " + locationName + " at " + latlon);
      }
      this.cons(location,true,true);
    } else {
      // not in cache or recent, create new from latlon
      let split: Array<string> = latlon.split('_');
      let lat = Number.parseFloat(split[0]);
      let lon = Number.parseFloat(split[1]);
      let location: WeatherLocation = new WeatherLocation(locationName, lat, lon);

      // add to cache and recent
      this.cache.set(latlon, location);

      // add to recents
      this.cons(location, false, true);
    }
  }

  public findLocation(latlon: string, locationName: string, addToHead: boolean): WeatherLocation {
    // first check cache
    if (this.cache.has(latlon)) {
      let location: WeatherLocation | undefined = this.cache.get(latlon);
      if (location === undefined) {
        throw new Error("Cache but not in cache finding location " + locationName + " at " + latlon);
      }
      if (addToHead) {
        this.cons(location,true,true);
      }

      return location;
    } else {
      let split: Array<string> = latlon.split('_');
      let lat = Number.parseFloat(split[0]);
      let lon = Number.parseFloat(split[1]);
      let location: WeatherLocation = new WeatherLocation(locationName, lat, lon);

      this.cons(location,false,addToHead);
      this.cache.set(latlon, location);

      return location;
    }
  }

  public getTopK(k: number): Array<WeatherLocation> {
    k = Math.min(k, this.capacity);
    return this.recent.slice(0, k);
  }

  get cache(): Map<string, WeatherLocation> {
    return this._cache;
  }

  get recent(): Array<WeatherLocation> {
    return this._recent;
  }
}
