import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {WeatherService} from "../services/weather/weather.service";
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {WeatherLocation} from "../location/WeatherLocation";
import {Router} from "@angular/router";

/*
  A type signature describing an Item from the Search results
 */
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
/*
  The search bar
  Uses NgbTypeahead for selection-style dropdown as the user types
 */
export class SearcherComponent implements OnInit {
  model: any;
  formatter = (result: SearchItem) => result.name;  // needed to convert SearchItem to a pretty string to display on bar
  constructor(private service: WeatherService,
              private router: Router) { }

  search: OperatorFunction<string, readonly SearchItem[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),  // time between requests
      distinctUntilChanged(),  // static until changed input
      switchMap(term =>
        this.service.search(term).pipe(
        )  // trigger the Service's search method on select
      )
    );

  itemSelected($event: NgbTypeaheadSelectItemEvent) {
    // Triggers on item selection
    // add item to cache
    let item: SearchItem = $event.item;
    let newLocation: WeatherLocation = this.service.addLocation(item.name, item.lat, item.lon);
    // Get ready and jump to Summary page
    this.service.fetchSummary(newLocation);
    this.service.isMainMenu = false;
    this.router.navigate(["/summary"]).then();
  }

  ngOnInit(): void {
  }

}
