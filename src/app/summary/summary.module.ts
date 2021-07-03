import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import {SummaryRoutingModule} from "./summary-routing.module";
import {RowSnapshotModule} from "../snapshot/row-snapshot/row-snapshot.module";



@NgModule({
  declarations: [
    SummaryComponent
  ],
    imports: [
        CommonModule,
        SummaryRoutingModule,
        RowSnapshotModule
    ]
})
export class SummaryModule { }
