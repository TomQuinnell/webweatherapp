/*
  A Superclass for Forecasts
  Holds the time of query
  And some logic for checking if Forecast is outdated
 */
export class Forecast {
  private _timeOfQuery!: Date | undefined;
  private static readonly maxMSBeforeNew: number = 60000;

  constructor() { }

  public get timeOfQuery(): Date | undefined { return this._timeOfQuery; }

  public set timeOfQuery(newTime: Date | undefined) { this._timeOfQuery = newTime; }

  public isOld(): boolean {
    return this.timeOfQuery != null && this.timeOfQuery.getTime() + Forecast.maxMSBeforeNew > new Date().getTime();
  }

  public isDifferentHour(): boolean {
    return this.timeOfQuery != null && this.timeOfQuery.getHours() != new Date().getHours();
  }

  public isDifferentDay(): boolean {
    return this.timeOfQuery != null && this.timeOfQuery.getDay() != new Date().getDay();
  }
}
