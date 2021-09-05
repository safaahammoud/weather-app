import { Injectable } from '@angular/core';
import { HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiRepository } from 'src/app/common/services/api.service';
import { environment } from 'src/environments/environment';

import { citiesAreaCoordinates, weatherMeasurementUnit } from './../constants/cities-coordinates-and-unit.const';
import { CitiesWeatherApi, CityWeatherDetails } from './../models/cities-weather-api.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private apiRepository: ApiRepository) { }

  fetchCitiesWeather(): Observable<CityWeatherDetails[]> {
    const options = {
      params: new HttpParams({
        fromObject: {
          units: weatherMeasurementUnit,
          lat: citiesAreaCoordinates.latitude,
          lon: citiesAreaCoordinates.longitude,
          appid: environment.appApiKey,
        }
      } as HttpParamsOptions)
    };

    return this.apiRepository.get<CitiesWeatherApi>('find', options).pipe(map((response) => (
      response.list || []
    )));
  }
}
