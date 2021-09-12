import { CityWeather } from './../shared/models/city-weather.model';
import {
  CityWeatherForecast,
  initialCityWeatherForecast,
} from './../shared/models/city-weather-forecast.model';

export interface CitiesWeatherState {
  pending: boolean;
  error: Error | null;
  forecastCityName: string;
  citiesWeatherList: CityWeather[];
  cityWeatherForecast: CityWeatherForecast;
};

export const initialCitiesWeatherState = {
  error: null,
  pending: true,
  forecastCityName: '',
  citiesWeatherList: [] as CityWeather[],
  cityWeatherForecast: initialCityWeatherForecast as CityWeatherForecast,
} as CitiesWeatherState;
