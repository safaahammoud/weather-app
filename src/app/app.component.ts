import {
  OnInit,
  Component,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectPending } from './modules/weather/store/cities-weather.selectors';
import { AppState } from './store/app.state';
import { AlertService } from './shared/services/alert.service';

@Component({
  selector: 'wa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  public readonly title: string = 'Weather Forecast';
  public readonly isLoading$: Observable<boolean> = this.store.select(selectPending);

  public constructor(
    private snackBar: MatSnackBar,
    private store: Store<AppState>,
    private alertService: AlertService,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.changeDetectorRef.detectChanges();

    this.alertService.notification$.subscribe((message: string) => {
      this.snackBar.open(message, 'x', {
          duration: 3000
      });
    });
  }

  public ngOnDestroy(): void {
    this.alertService.notification$.unsubscribe();
  }
}
