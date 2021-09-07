import { DateUtils } from './../../../shared/pipes/dateUtil';
import { Injectable } from '@angular/core';
import { HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

import { citiesAreaCoordinates, weatherMeasurementUnit } from './../constants/cities-coordinates-and-unit.const';
import { MeasurementUnits } from './../enums/units.enum';
import { CityWeather } from './../models/city-weather-forecast-api.model';
import { CityWeatherForecast } from './../models/city-weather-forecast.model';
import { CitiesWeatherApi, CityWeatherDetails } from './../models/cities-weather-api.model';
import { CityWeatherForecastApi } from './../models/city-weather-forecast-api.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiParams = {
    cnt: 5,
    units: weatherMeasurementUnit,
    appid: environment.appApiKey,
  };

  constructor(private apiService: ApiService) { }

  fetchCitiesWeather(): Observable<CityWeatherDetails[]> {
    const options = {
      params: new HttpParams({
        fromObject: {
          ...this.apiParams,
          lat: citiesAreaCoordinates.latitude,
          lon: citiesAreaCoordinates.longitude,
        }
      } as HttpParamsOptions)
    };

    return this.apiService.get<CitiesWeatherApi>('find', options).pipe(map((response) => (
      response.list || []
    )));
  }

  fetchCityWeatherForecast(cityName: string): Observable<CityWeatherForecast> {
    const options = {
      params: new HttpParams({
        fromObject: {
          ...this.apiParams,
          q: cityName,
        }
      } as HttpParamsOptions)
    };

    return this.apiService.get<CityWeatherForecastApi>('forecast', options)
      .pipe(
        map((response) => ({
          cityName: response?.city?.name,
          forecast: response.list?.map((cityWeather: CityWeather) => ({
            date: DateUtils.format(cityWeather?.dt_txt, 'shortTime', response.city.timezone?.toString() || ''),
            humidity: cityWeather?.main?.humidity,
            windSpeed: cityWeather?.wind?.speed,
            description: cityWeather.weather[0].description,
            imageUrl: `http://openweathermap.org/img/wn/${cityWeather?.weather[0]?.icon}@2x.png`,
            temperature: cityWeather?.main?.temp + MeasurementUnits.Celsius,
            maxTemperature: cityWeather?.main?.temp_max + MeasurementUnits.Celsius,
            minTemperature: cityWeather?.main?.temp_min + MeasurementUnits.Celsius,
          }))
        })
      ));
  }
}
