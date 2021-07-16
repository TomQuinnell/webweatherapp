import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './searcher.component';
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SearcherComponent
  ],
  exports: [
    SearcherComponent
  ],
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    FormsModule
  ]
})
export class SearcherModule { }
