import { createReducer, on } from '@ngrx/store';

import { fetchCitiesWeather, showLoader } from './cities-weather.actions';
import { CityWeather } from '../models/city-weather.model';
import { CityWeatherForecast } from './../models/city-weather-forecast.model';

export const initialCitiesWeatherState:CityWeather[] = [];
export const initialCityWeatherForecastState:CityWeatherForecast[] = [];
export const initialLoaderState:boolean = false;

export const citiesWeatherReducer = createReducer(
  initialCitiesWeatherState,
  on(fetchCitiesWeather, (_state, { citiesWeatherList }) => [...citiesWeatherList]),
);

export const loadingReducer = createReducer(
  initialLoaderState,
  on(showLoader, (_state, { isLoading }) => isLoading),
)
