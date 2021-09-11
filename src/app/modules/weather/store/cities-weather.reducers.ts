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
    citiesWeatherList: [...state.citiesWeatherList],
  })),
  on(fetchCitiesWeatherSuccess, (state, { citiesWeatherList, pending }) => ({
    ...state,
    pending,
    citiesWeatherList: [...citiesWeatherList],
  })),
  on(fetchCitiesWeatherFail, (state, { citiesWeatherList, pending }) => ({
    ...state,
    pending,
    citiesWeatherList,
  })),
  on(fetchCityWeatherForecast, (state, { pending, forecastCityName }) => ({
    ...state,
    pending,
    forecastCityName,
  })),
  on(fetchCityWeatherForecastSuccess, (state, { pending, cityWeatherForecast }) => ({
    ...state,
    pending,
    cityWeatherForecast,
  })),
  on(fetchCityWeatherForecastFail, (state, { pending, cityWeatherForecast }) => ({
    ...state,
    pending,
    cityWeatherForecast,
  })),
);

export function reducer(state: CitiesWeatherState | undefined, action: Action) {
  return citiesWeatherReducer(state, action);
}
