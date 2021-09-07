import { CityWeather } from './../modules/weather/models/city-weather.model';

export interface AppState {
  isLoading: boolean;
  citiesWeatherList: CityWeather[];
}
