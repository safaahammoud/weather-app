import { createAction, props } from '@ngrx/store';

export const fetchCitiesWeather = createAction(
  '[Cities List/API] Fetch Cities and their Weather Success',
  props<{ citiesWeatherList: any }>()
);
