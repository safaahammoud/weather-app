import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CityWeatherForecast, Forecast, initialCityWeatherForecast } from './../../models/city-weather-forecast.model';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.scss']
})
export class CityWeatherForecastComponent implements OnInit, OnDestroy {
  _routeParamSubscription: Subscription = new Subscription();
  cityWeatherForecast: CityWeatherForecast = initialCityWeatherForecast;
  cityWeatherForecastList: Forecast[] = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this._routeParamSubscription = this.route.queryParamMap.subscribe((param) => {
      const routeParams = JSON.parse(param.get('params') || '') || null;

      if (routeParams) {
        this.weatherService.fetchCityWeatherForecast(routeParams?.cityName).subscribe(response => {
          this.cityWeatherForecast = response;
          this.cityWeatherForecastList = response.forecast;
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this._routeParamSubscription.unsubscribe();
  }
}
