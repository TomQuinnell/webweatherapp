import { Component, OnInit } from '@angular/core';
import {ForecastAtTime} from "../forecast/ForecastAtTime";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  test: ForecastAtTime;
  constructor() {
    this.test = new ForecastAtTime();
    this.test.update(42, 42, 42, 42, 42, new Date())
  }

  ngOnInit(): void {
  }

}
