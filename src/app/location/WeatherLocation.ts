import {ForecastAtTime} from "../forecast/ForecastAtTime";
import {ForecastComposite} from "../forecast/ForecastComposite";

/*
  A Location
  With a latitude and longitude
 */
export class WeatherLocation {
  get lat(): number {
    return this._lat;
  }

  get lon(): number {
    return this._lon;
  }
  private readonly _name: string;
  private readonly _lat: number;
  private readonly _lon: number;
  private readonly _currentForecast: ForecastAtTime;
  private readonly _twelveHour: ForecastComposite;
  private readonly _sevenDay: ForecastComposite;

  constructor(name: string, lat: number, lon: number) {
    this._name = name;
    this._lat = lat;
    this._lon = lon;
    this._currentForecast = new ForecastAtTime();
    this._twelveHour = new ForecastComposite(12);
    this._sevenDay = new ForecastComposite(7);
  }

  public get latlon(): string {
    return this._lat.toString() + this._lon.toString();
  }

  public updateCurrent(temp: number, cloud: number, rain: number, humidity: number, windSpeed: number, time: Date) {
    this._currentForecast.update(temp, cloud, rain, humidity, windSpeed, time);
  }

  public updateTwelveHour(temps: Array<number>, clouds: Array<number>, rains: Array<number>, humiditys: Array<number>,
                          windSpeeds: Array<number>, times: Array<Date>) {
    this._twelveHour.update(temps, clouds, rains, humiditys, windSpeeds, times);
  }

  public updateSevenDay(temps: Array<number>, clouds: Array<number>, rains: Array<number>, humiditys: Array<number>,
                          windSpeeds: Array<number>, times: Array<Date>) {
    this._sevenDay.update(temps, clouds, rains, humiditys, windSpeeds, times);
  }

  get currentForecast(): ForecastAtTime {
    return this._currentForecast;
  }

  get twelveHour(): ForecastComposite {
    return this._twelveHour;
  }

  get sevenDay(): ForecastComposite {
    return this._sevenDay;
  }

  get name(): string {
    return this._name;
  }
}
