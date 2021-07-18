import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {WeatherService} from "../services/weather/weather.service";
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {WeatherLocation} from "../location/WeatherLocation";
import {Router} from "@angular/router";

export type SearchItem = {
  name: string;
  lat: number;
  lon: number;
}

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  model: any;
  formatter = (result: SearchItem) => result.name;
  constructor(private service: WeatherService,
              private router: Router) { }

  search: OperatorFunction<string, readonly SearchItem[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term =>
        this.service.search(term).pipe(

        )
      )
    );

  itemSelected($event: NgbTypeaheadSelectItemEvent) {
    let item: SearchItem = $event.item;
    let newLocation: WeatherLocation = this.service.addLocation(item.name, item.lat, item.lon);
    this.service.fetchSummary(newLocation);
    this.service.isMainMenu = false;
    this.router.navigate(["/summary"]).then();
  }

  ngOnInit(): void {
  }

}
