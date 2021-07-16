import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import {BigSnapshotModule} from "../snapshot/big-snapshot/big-snapshot.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {SearcherModule} from "../searcher/searcher.module";



@NgModule({
  declarations: [
    MainMenuComponent
  ],
    imports: [
        CommonModule,
        MainMenuRoutingModule,
        BigSnapshotModule,
        MatGridListModule,
        SearcherModule
    ]
})
export class MainMenuModule { }
