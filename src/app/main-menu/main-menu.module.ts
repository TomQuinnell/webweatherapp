import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import {BigSnapshotModule} from "../snapshot/big-snapshot/big-snapshot.module";



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    BigSnapshotModule
  ]
})
export class MainMenuModule { }
