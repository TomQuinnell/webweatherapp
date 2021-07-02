import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnapshotComponent } from './snapshot.component';
import {SnapshotRoutingModule} from "./snapshot-routing.module";



@NgModule({
  declarations: [
    SnapshotComponent
  ],
  imports: [
    CommonModule,
    SnapshotRoutingModule
  ]
})
export class SnapshotModule { }
