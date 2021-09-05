import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { CityWeatherDetails } from './../models/cities-weather-api.model';
import { WeatherService } from './../services/weather.service';
import { MeasurementUnits } from './../enums/units.enum';

@Injectable()
export class CitiesWeatherEffects {

  loadCitiesWeather$ = createEffect(() => this.actions$.pipe(
    ofType('[Cities Weather List Page] Load Cities Weather'),
    mergeMap(() => this.weatherService.fetchCitiesWeather()
      .pipe(
        map((citiesWeatherList) => ({
          type: '[Cities List/API] Fetch Cities and their Weather Success',
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
        catchError(()=> EMPTY)
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
  ) {}
}
