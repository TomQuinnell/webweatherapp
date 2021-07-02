import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavContainerComponent } from './nav-container.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        NavContainerComponent
    ],
    exports: [
        NavContainerComponent
    ],
  imports: [

    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class NavContainerModule { }
