export interface CityWeatherForecastApi {
  cod: string | null;
  cnt: number | null;
  message: number | null;
  list: CityWeather[];
  city: {
    id: number | null;
    name: string | null;
    coord: {
      lat: number | null;
      lon: number | null;
    },
    country: string | null;
    population: number | null;
    timezone: number | null;
    sunrise: number | null;
    sunset: number | null;
  }
}

export interface CityWeather {
  dt: number | null;
  main: {
    temp: number | null;
    feels_like: number | null;
    temp_min: number | null;
    temp_max: number | null;
    pressure: number | null;
    sea_level: number | null;
    grnd_level: number | null;
    humidity: number | null;
    temp_kf: number | null;
  },
  weather: {
    id: number | null,
    main: string | null;
    description: string | null;
    icon: string | null;
  }[],
  clouds: {
    all: number | null;
  } | null,
  wind: {
    speed: number | null;
    deg: number | null;
    gust: number | null;
  },
  visibility: number | null;
  pop: number | null;
  sys: {
    pod: string | null;
  } | null,
  dt_txt: string | null;
}
