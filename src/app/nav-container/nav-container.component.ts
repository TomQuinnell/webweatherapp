import {Component, OnDestroy} from '@angular/core';
import {PageTitleService} from "../services/page-title/page-title.service";
import {WeatherService} from "../services/weather/weather.service";

@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css']
})
export class NavContainerComponent implements OnDestroy {
  readonly title$ = this.pageTitleService.title$;
  constructor(private readonly pageTitleService: PageTitleService,
              readonly weatherService: WeatherService) { }

  ngOnDestroy(): void { }

}
