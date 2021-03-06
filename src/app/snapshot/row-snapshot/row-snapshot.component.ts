import {Component, Input, OnInit} from '@angular/core';
import {ForecastAtTime} from "../../forecast/ForecastAtTime";
import {Snapshot} from "../snapshot";

@Component({
  selector: 'app-row-snapshot',
  templateUrl: './row-snapshot.component.html',
  styleUrls: ['./row-snapshot.component.css']
})
/*
  A GUI element to display a smaller Forecast in a Row
 */
export class RowSnapshotComponent extends Snapshot implements OnInit {
  @Input() forecast!: ForecastAtTime;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  round(x: number) {
    return Math.round(x);
  }

}
