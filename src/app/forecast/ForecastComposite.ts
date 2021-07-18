import {ForecastAtTime} from "./ForecastAtTime";
import {Forecast} from "./Forecast";

/*
  A Composite of Forecasts
 */
export class ForecastComposite extends Forecast{
  private readonly _forecasts: Array<ForecastAtTime>;

  constructor(size: number) {
    super();
    this._forecasts = new Array<ForecastAtTime>();
    for (let i = 0; i < size; i++) {
      this._forecasts.push(new ForecastAtTime(size === 12 ? "hour" : "day"));
    }
  }

  public update (temps: Array<number>, clouds: Array<number>, rains: Array<number>, humiditys: Array<number>,
                 windSpeeds: Array<number>, times: Array<Date>): void {
    this.timeOfQuery = new Date();
    for (let i = 0; i < this._forecasts.length; i++) {
      this._forecasts[i].update(temps[i], clouds[i], rains[i], humiditys[i], windSpeeds[i], times[i]);
    }
  }

  get forecasts(): Array<ForecastAtTime> {
    return this._forecasts;
  }
}
