import {
  CitiesWeatherState,
  initialCitiesWeatherState,
} from './../modules/weather/store/cities-weather.state';

export interface AppState {
  citiesWeather: CitiesWeatherState;
}

export default {
  citiesWeather: initialCitiesWeatherState,
} as AppState;
