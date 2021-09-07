export interface CityWeatherForecast {
  cityName: string | null;
  forecast: Forecast[];
}

export interface Forecast {
  date: string | null;
  humidity: number | null;
  windSpeed: number | null;
  imageUrl: string | null;
  temperature: string | null;
  maxTemperature: string | null;
  minTemperature: string | null;
  description: string | null;
}

export const initialCityWeatherForecast = {
  cityName: '',
  forecast: [],
} as CityWeatherForecast;
