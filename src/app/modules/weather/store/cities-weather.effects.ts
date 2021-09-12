import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { fetchCitiesWeatherFail } from './cities-weather.actions';
import { CityWeatherDetails } from '../shared/models/cities-weather-api.model';
import { WeatherService } from '../shared/services/weather.service';
import { MeasurementUnits } from '../shared/enums/units.enum';
import { AlertService } from './../../../shared/services/alert.service';

@Injectable()
export class CitiesWeatherEffects {
  public loadCitiesWeather$ = createEffect(() => this.actions$
    .pipe(
      ofType('[Cities List/API] Fetch Cities and their Weather'),
      switchMap(() => this.weatherService.fetchCitiesWeather()),
      map((citiesWeatherList) => ({
        type: '[Cities List/API] Fetch Cities and their Weather Success',
        pending: false,
        citiesWeatherList: citiesWeatherList.map((cityWeather: CityWeatherDetails) => ({
          id: cityWeather?.id,
          cityName: cityWeather?.name,
          windSpeed: cityWeather.wind?.speed + MeasurementUnits.MeterPerSecond,
          temperature: {
            value: cityWeather.main?.temp + MeasurementUnits.Celsius,
            description: cityWeather?.weather[0]?.description,
            image: `http://openweathermap.org/img/wn/${cityWeather?.weather[0]?.icon}@2x.png`
          },
        }))
      })),
      catchError((error: Error) => {
        this.alertService.notification$.next('Error Occurred');
        this.store.dispatch(fetchCitiesWeatherFail({ error }));

        return EMPTY;
      })
    ));

  public constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private alertService: AlertService,
    private store: Store,
  ) {}
}
