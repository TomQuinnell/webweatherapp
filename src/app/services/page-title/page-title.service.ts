import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import {distinctUntilChanged} from "rxjs/operators";

type PageTitle = 'Main Menu' | 'Snapshot';


@Injectable({
  providedIn: 'root'
})
/*
  A service to get page titles
 */
export class PageTitleService {
  private readonly _title$ = new ReplaySubject<PageTitle>();
  readonly title$ = this._title$.pipe(distinctUntilChanged());

  update(currentPage: PageTitle): void {
    this._title$.next(currentPage);
  }
}


