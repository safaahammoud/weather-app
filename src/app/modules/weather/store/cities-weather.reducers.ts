import { createReducer, on, Action } from '@ngrx/store';

import { initialCitiesWeatherState, CitiesWeatherState } from './cities-weather.state';
import {
  fetchCitiesWeather,
  fetchCitiesWeatherSuccess,
  fetchCitiesWeatherFail,
  fetchCityWeatherForecast,
  fetchCityWeatherForecastSuccess,
  fetchCityWeatherForecastFail,
} from './cities-weather.actions';

export const citiesWeatherReducer = createReducer(
  initialCitiesWeatherState,
  on(fetchCitiesWeather, state => ({
    ...state,
    pending: true,
  })),
  on(fetchCitiesWeatherSuccess, (state, { citiesWeatherList }) => ({
    ...state,
    pending: false,
    citiesWeatherList: [...citiesWeatherList],
  })),
  on(fetchCitiesWeatherFail, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  })),
  on(fetchCityWeatherForecast, (state, { forecastCityName }) => ({
    ...state,
    pending: true,
    forecastCityName,
  })),
  on(fetchCityWeatherForecastSuccess, (state, { cityWeatherForecast }) => ({
    ...state,
    pending: false,
    cityWeatherForecast,
  })),
  on(fetchCityWeatherForecastFail, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  })),
);

export function reducer(state: CitiesWeatherState | undefined, action: Action) {
  return citiesWeatherReducer(state, action);
}
