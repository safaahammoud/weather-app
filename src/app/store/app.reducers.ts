import { citiesWeatherReducer, loadingReducer } from './../modules/weather/store/cities-weather.reducers';

export default {
  isLoading: loadingReducer,
  citiesWeatherList: citiesWeatherReducer,
}
