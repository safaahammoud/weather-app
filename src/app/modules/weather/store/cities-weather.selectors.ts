import { createSelector } from "@ngrx/store";

import { CityWeather } from './../models/city-weather.model';
import { AppState } from './../../../store/app.state';

export const selectCitiesWeatherList = createSelector(
  (state: AppState) => state.citiesWeatherList,
  (citiesWeatherList: CityWeather[]) => citiesWeatherList
);

export const selectIsLoading = createSelector(
  (state: AppState) => state.isLoading,
  (isLoading: boolean) => isLoading
)
