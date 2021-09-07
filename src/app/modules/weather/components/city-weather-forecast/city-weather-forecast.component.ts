import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CityWeatherForecast, initialCityWeatherForecast } from './../../models/city-weather-forecast.model';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.scss']
})
export class CityWeatherForecastComponent implements OnInit {
  _routeParamSubscription: Subscription = new Subscription();
  cityWeatherForecast: CityWeatherForecast = initialCityWeatherForecast;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this._routeParamSubscription = this.route.queryParamMap.subscribe((param) => {
      const routeParams = JSON.parse(param.get('params') || '') || null;

      if (routeParams) {
        this.weatherService.fetchCityWeatherForecast(routeParams?.cityName).subscribe(response => {
          this.cityWeatherForecast = response;
        });
      }
    });
  }
}
