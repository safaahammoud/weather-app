import { createReducer, on } from '@ngrx/store';

import { fetchCitiesWeather } from './cities-weather.actions';
import { CityWeather } from '../models/city-weather.model';

export const initialCitiesWeatherState:CityWeather[] = [];

export const citiesWeatherReducer = createReducer(
  initialCitiesWeatherState,
  on(fetchCitiesWeather, (_state, { citiesWeatherList }) => [...citiesWeatherList]),
);
