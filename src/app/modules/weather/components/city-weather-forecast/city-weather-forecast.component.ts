import {
  OnInit,
  Component,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { fetchCityWeatherForecastFail } from './../../store/cities-weather.actions';
import { WeatherService } from '../../shared/services/weather.service';
import { fetchCityWeatherForecastSuccess } from '../../store/cities-weather.actions';
import { AppState } from 'app/store/app.state';
import { CityWeatherForecast } from '../../shared/models/city-weather-forecast.model';
import { initialCityWeatherForecast } from './../../shared/models/city-weather-forecast.model';

@Component({
  selector: 'wa-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherForecastComponent implements OnInit, OnDestroy {
  private routeParamSubscription$: Subscription = new Subscription();
  public cityWeatherForecast: CityWeatherForecast = initialCityWeatherForecast;

  constructor(
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    private readonly weatherService: WeatherService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.routeParamSubscription$ = this.route.queryParamMap.subscribe((param) => {
      const routeParams = JSON.parse(param.get('params') || '') || null;

      if (routeParams) {
        this.weatherService.fetchCityWeatherForecast(routeParams?.cityName).subscribe(response => {
          this.store.dispatch(fetchCityWeatherForecastSuccess({ cityWeatherForecast: response }));

          this.cityWeatherForecast = response;

          this.changeDetectorRef.detectChanges();
        });
      } else {
        this.store.dispatch(fetchCityWeatherForecastFail({ error: new Error() }))
      }
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public ngOnDestroy(): void {
    this.routeParamSubscription$.unsubscribe();
  }
}
