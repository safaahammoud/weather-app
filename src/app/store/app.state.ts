import { CityWeather } from './../modules/weather/models/city-weather.model';

export interface AppState {
  isLoading: boolean;
  citiesWeatherList: CityWeather[];
}

export default {
  isLoading: false,
  citiesWeatherList: [],
} as AppState;
