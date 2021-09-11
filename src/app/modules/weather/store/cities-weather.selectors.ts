import { createSelector } from "@ngrx/store";

import { CitiesWeatherState } from './cities-weather.state';
import { AppState } from './../../../store/app.state';

export const selectCitiesWeatherList = createSelector(
  (state: AppState) => state.citiesWeather,
  (state: CitiesWeatherState) => state.citiesWeatherList,
);

export const selectPending = createSelector(
  (state: AppState) => state.citiesWeather,
  (state: CitiesWeatherState) => state.pending,
);
