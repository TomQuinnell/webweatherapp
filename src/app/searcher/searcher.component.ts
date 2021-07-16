import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {WeatherService} from "../services/weather/weather.service";

export class NamedObject {
  name: string;
  constructor() {
    this.name = "";
  }
}

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  model: any;
  constructor(private service: WeatherService) { }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term =>
        this.service.search(term).pipe(

        )
      )
    );

  ngOnInit(): void {
  }

}
