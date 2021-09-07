import { createAction, props } from '@ngrx/store';

import { CityWeather } from './../models/city-weather.model';

export const fetchCitiesWeather = createAction(
  '[Cities List/API] Fetch Cities and their Weather Success',
  props<{ citiesWeatherList: CityWeather[] }>()
);

export const showLoader = createAction(
  '[Main Layout Page] Manage Loader visibility',
  props<{ isLoading: boolean }>()
);
