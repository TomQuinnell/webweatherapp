import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { MainMenuRoutingModule } from './main-menu-routing.module';



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule
  ]
})
export class MainMenuModule { }
