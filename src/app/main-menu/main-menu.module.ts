import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import {BigWeatherSummaryModule} from "../weather-summary/big-weather-summary/big-weather-summary.module";



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    BigWeatherSummaryModule
  ]
})
export class MainMenuModule { }
