import { HttpParamsOptions } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { CityWeather } from '../shared/models/city-weather.model';
import { CityWeatherForecast } from './../shared/models/city-weather-forecast.model';

export const fetchCitiesWeather = createAction('[Cities List/API] Fetch Cities and their Weather');

export const fetchCitiesWeatherSuccess = createAction(
  '[Cities List/API] Fetch Cities and their Weather Success',
  props<{ citiesWeatherList: CityWeather[] }>(),
);

export const fetchCitiesWeatherFail = createAction(
  '[Cities List/API] Fetch Cities and their Weather Fail',
  props<{ error: Error }>(),
);

export const fetchCityWeatherForecast = createAction(
  '[Cities List/API] Fetch City Weather Forecast',
  props<{ forecastCityName: string }>(),
);

export const fetchCityWeatherForecastSuccess = createAction(
  '[Cities List/API] Fetch City Weather Forecast Success',
  props<{ cityWeatherForecast: CityWeatherForecast }>(),
);

export const fetchCityWeatherForecastFail = createAction(
  '[Cities List/API] Fetch City Weather Forecast Fail',
  props<{ error: Error }>(),
);
