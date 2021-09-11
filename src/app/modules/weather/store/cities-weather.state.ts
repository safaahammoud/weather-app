import { CityWeather } from './../shared/models/city-weather.model';
import {
  CityWeatherForecast,
  initialCityWeatherForecast,
} from './../shared/models/city-weather-forecast.model';

export interface CitiesWeatherState {
  pending: boolean;
  forecastCityName: string;
  citiesWeatherList: CityWeather[];
  cityWeatherForecast: CityWeatherForecast;
};

export const initialCitiesWeatherState = {
  pending: true,
  forecastCityName: '',
  citiesWeatherList: [] as CityWeather[],
  cityWeatherForecast: initialCityWeatherForecast as CityWeatherForecast,
} as CitiesWeatherState;
