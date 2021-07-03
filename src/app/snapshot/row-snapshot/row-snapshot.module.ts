import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowSnapshotComponent } from './row-snapshot.component';



@NgModule({
    declarations: [
        RowSnapshotComponent
    ],
    exports: [
        RowSnapshotComponent
    ],
    imports: [
        CommonModule
    ]
})
export class RowSnapshotModule { }
