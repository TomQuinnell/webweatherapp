import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigWeatherSummaryComponent } from './big-weather-summary.component';



@NgModule({
    declarations: [
        BigWeatherSummaryComponent
    ],
    exports: [
        BigWeatherSummaryComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BigWeatherSummaryModule { }
