import { CityWeather } from 'app/modules/weather/shared/models/city-weather.model';
import { MeasurementUnits } from '../../app/modules/weather/shared/enums/units.enum';

export const MOCKED_CITIES: CityWeather[] = [
  {
    id: 1,
    cityName: 'Amsterdam',
    windSpeed: 2 + MeasurementUnits.MeterPerSecond,
    temperature: {
      value: 20 + MeasurementUnits.Celsius,
      description: 'cloudy',
      image: `http://example.com/img.png`
    },
  },
  {
    id: 2,
    cityName: 'London',
    windSpeed: 2 + MeasurementUnits.MeterPerSecond,
    temperature: {
      value: 20 + MeasurementUnits.Celsius,
      description: 'rainy',
      image: `http://example.com/img.png`
    },
  }
];
