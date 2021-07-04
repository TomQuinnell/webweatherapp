import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import {BigSnapshotModule} from "../snapshot/big-snapshot/big-snapshot.module";
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    BigSnapshotModule,
    MatGridListModule
  ]
})
export class MainMenuModule { }
