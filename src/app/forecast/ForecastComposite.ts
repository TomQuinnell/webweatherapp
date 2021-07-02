import {ForecastAtTime} from "./ForecastAtTime";
import {Forecast} from "./Forecast";

export class ForecastComposite extends Forecast{
  private forecasts: Array<ForecastAtTime>;

  constructor(size: number) {
    super();
    this.forecasts = new Array<ForecastAtTime>();
    for (let i = 0; i < size; i++) {
      this.forecasts.push(new ForecastAtTime());
    }
  }

  public update (temps: Array<number>, clouds: Array<number>, rains: Array<number>, humiditys: Array<number>,
                 windSpeeds: Array<number>, times: Array<Date>): void {
    this.timeOfQuery = new Date();
    for (let i = 0; i < this.forecasts.length; i++) {
      this.forecasts[i].update(temps[i], clouds[i], rains[i], humiditys[i], windSpeeds[i], times[i]);
    }
  }
}
