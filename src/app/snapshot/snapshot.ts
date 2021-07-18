import {ForecastAtTime} from "../forecast/ForecastAtTime";

/*
  A Superclass for the Snapshot Components
 */
export class Snapshot {
  private static insertSmallness(resource: string, isSmall: boolean) {
    // insert the string Small if isSmall into the resource URL
    let split = resource.split('.');
    return split[0] + (isSmall ? "Small" : "") + '.' + split[1];
  }

  getPictureURL(forecast: ForecastAtTime, isSmall: boolean) {
    // get Picture URL from /assets/ depending on Forecast's weather
    let pictureDir = "/assets/";
    let picture;
    if (forecast.temp === undefined || forecast.cloudCoverage === undefined || forecast.rain === undefined) {
      picture = "Load.gif";
    } else {
      let warmLevel: number = 10.0;
      let isWarm: boolean = forecast.temp > warmLevel;

      let cloudyLevel: number = 40.0;
      let isCloudy: boolean = forecast.cloudCoverage > cloudyLevel;

      let rainyLevel: number = 0.1;
      let isRainy: boolean = forecast.rain > rainyLevel;

      if (isRainy) {
        if (isWarm) {
          picture = "Sunraincloud.png";
        } else {
          picture = "Rain.png";
        }
      } else {
        if (!isWarm && !isCloudy) {
          picture = "Cold.png";
        } else if (!isWarm) {
          picture = "Cloud.png";
        } else if (!isCloudy) {
          picture = "Warm.png";
        } else {
          picture = "Suncloud.png";
        }
      }
    }

    return pictureDir + Snapshot.insertSmallness(picture, isSmall);
  }
}
