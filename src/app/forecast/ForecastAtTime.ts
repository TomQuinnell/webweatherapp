import {Forecast} from "./Forecast";


/*
  A Forecast at a certain time
  Holds a bunch of weather data
 */
export class ForecastAtTime extends Forecast{
  private _temp: number | undefined;
  private _cloudCoverage: number | undefined;
  private _rain: number | undefined;
  private _humidity: number | undefined;
  private _windSpeed: number | undefined;
  private _timeOfForecast: Date | undefined;
  private readonly _timeFormat;  // A string describing which format the datetime should be displayed
  private isLoading: boolean;

  constructor(timeFormat: string = "current") {
    super();
    this._timeFormat = timeFormat;
    this.isLoading = true;
  }

  public update(temp: number, cloudCoverage: number, rain: number, humidity: number, windSpeed: number, time: Date) {
    this._temp = temp;
    this._cloudCoverage = cloudCoverage;
    this._rain = rain;
    this._humidity = humidity;
    this._windSpeed = windSpeed;
    this._timeOfForecast = time;
  }

  public getTimeString() {
    if (this.timeOfForecast === undefined) {
      return "";
    }
    if (this._timeFormat === "current") {
      return this.timeOfForecast.toTimeString();
    } else if (this._timeFormat === "hour") {
      return this.timeOfForecast.getHours() + ":00";
    } else {
      return this.timeOfForecast.toDateString();
    }
  }

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
}
