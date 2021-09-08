import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

import { selectIsLoading } from './modules/weather/store/cities-weather.selectors';
import { AppState } from './store/app.state';
import { AlertService } from './shared/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Weather Forecast';
  isLoading$ = this.store.select(selectIsLoading);

  constructor(
    private snackBar: MatSnackBar,
    private store: Store<AppState>,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.alertService.notification$.subscribe((message: string) => {
      this.snackBar.open(message, 'x', {
          duration: 3000
      });
    });
  }

  ngOnDestroy(): void {
    this.alertService.notification$.unsubscribe();
  }
}
