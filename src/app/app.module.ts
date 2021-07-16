import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavContainerModule} from "./nav-container/nav-container.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NavContainerModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
