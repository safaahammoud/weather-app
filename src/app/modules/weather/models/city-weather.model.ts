export interface CityWeather {
  id: number | null;
  cityName: string | null;
  windSpeed: string| null;
  temperature: {
    image: string | null;
    value: string | null;
    description: string | null;
  } | null;
}
