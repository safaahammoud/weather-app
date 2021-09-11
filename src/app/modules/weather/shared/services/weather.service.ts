import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  citiesAreaCoordinates,
  weatherMeasurementUnit,
} from '../consts/cities-coordinates-and-unit.const';
import { MeasurementUnits } from '../enums/units.enum';
import { CityWeather } from '../models/city-weather-forecast-api.model';
import { CityWeatherForecast } from '../models/city-weather-forecast.model';
import { CitiesWeatherApi, CityWeatherDetails } from '../models/cities-weather-api.model';
import { CityWeatherForecastApi } from '../models/city-weather-forecast-api.model';
import { environment } from './../../../../../environments/environment';
import { DateUtilPipe } from './../../../../shared/pipes/date-util.pipe';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly citiesWeatherUrl = environment.appApiUrl;
  private readonly apiParams = {
    cnt: 5,
    units: weatherMeasurementUnit,
    appid: environment.appApiKey,
  };

  public constructor(private httpClient: HttpClient) { }

  public fetchCitiesWeather(): Observable<CityWeatherDetails[]> {
    const options = {
      params: new HttpParams({
        fromObject: {
          ...this.apiParams,
          lat: citiesAreaCoordinates.latitude,
          lon: citiesAreaCoordinates.longitude,
        }
      } as HttpParamsOptions)
    };

    return this.httpClient.get<CitiesWeatherApi>(`${this.citiesWeatherUrl}/find`, options)
      .pipe(map((response) => (
        response.list || []
      )));
  }

  public fetchCityWeatherForecast(cityName: string): Observable<CityWeatherForecast> {
    const options = {
      params: new HttpParams({
        fromObject: {
          ...this.apiParams,
          q: cityName,
        }
      } as HttpParamsOptions)
    };

    return this.httpClient.get<CityWeatherForecastApi>(`${this.citiesWeatherUrl}/forecast`, options)
      .pipe(
        map((response) => ({
          cityName: response?.city?.name,
          forecast: response.list?.map((cityWeather: CityWeather) => ({
            date: new DateUtilPipe().transform(
              cityWeather?.dt_txt,
              'shortTime',
              response.city.timezone?.toString() || ''
            ),
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
