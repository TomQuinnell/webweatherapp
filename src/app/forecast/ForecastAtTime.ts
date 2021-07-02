import {Forecast} from "./Forecast";

export class ForecastAtTime extends Forecast{
  get temp(): number | undefined {
    return this._temp;
  }

  set temp(value: number | undefined) {
    this._temp = value;
  }

  get cloudCoverage(): number | undefined {
    return this._cloudCoverage;
  }

  set cloudCoverage(value: number | undefined) {
    this._cloudCoverage = value;
  }

  get rain(): number | undefined {
    return this._rain;
  }

  set rain(value: number | undefined) {
    this._rain = value;
  }

  get humidity(): number | undefined {
    return this._humidity;
  }

  set humidity(value: number | undefined) {
    this._humidity = value;
  }

  get windSpeed(): number | undefined {
    return this._windSpeed;
  }

  set windSpeed(value: number | undefined) {
    this._windSpeed = value;
  }

  get timeOfForecast(): Date | undefined {
    return this._timeOfForecast;
  }

  set timeOfForecast(value: Date | undefined) {
    this._timeOfForecast = value;
  }
  private _temp: number | undefined;
  private _cloudCoverage: number | undefined;
  private _rain: number | undefined;
  private _humidity: number | undefined;
  private _windSpeed: number | undefined;
  private _timeOfForecast: Date | undefined;
  private isLoading: boolean;

  constructor() {
    super();
    this.isLoading = true;
  }

  public update(temp: number, cloudCoverage: number, rain: number, humidity: number, windSpeed: number, time: Date) {
    this._temp = temp;
    this._cloudCoverage = temp;
    this._rain = rain;
    this._humidity = humidity;
    this._windSpeed = windSpeed;
    this._timeOfForecast = time;
  }

}
