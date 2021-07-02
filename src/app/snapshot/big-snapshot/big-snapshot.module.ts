import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigSnapshotComponent } from './big-snapshot.component';



@NgModule({
    declarations: [
        BigSnapshotComponent
    ],
    exports: [
        BigSnapshotComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BigSnapshotModule { }
