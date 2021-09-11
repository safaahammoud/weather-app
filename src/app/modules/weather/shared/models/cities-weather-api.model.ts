export interface CitiesWeatherApi {
  cod: number;
  count: number;
  message: string;
  list: CityWeatherDetails[];
}

export interface CityWeatherDetails {
  id: number | null;
  name: string | null;
  coord: {
    lat: number | null;
    lon: number | null;
  } | null,
  main: {
    temp: number | null;
    temp_min: number | null;
    temp_max: number | null;
    pressure: number | null;
    humidity: number | null;
    feels_like: number | null;
  } | null,
  dt: number | null;
  wind: {
    deg: number | null;
    speed: number | null;
  } | null,
  sys: {
    country: string | null;
  },
  rain: {
    '1h': number | null;
  } | null,
  snow: {
    '1h': number | null;
  } | null;
  clouds: {
    all: number | null;
  } | null,
  weather: [
    {
      id: number | null;
      icon: string | null;
      main: string | null;
      description: string | null;
    }
  ]
}
