import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { CityWeather } from './../../models/city-weather.model';
import { selectCitiesWeatherList } from './../../store/cities-weather.selectors';

@Component({
  selector: 'app-cities-weather-list',
  templateUrl: './cities-weather-list.component.html',
  styleUrls: ['./cities-weather-list.component.scss']
})
export class CitiesWeatherListComponent implements OnInit {
  citiesWeatherList$ = this.store.select(selectCitiesWeatherList);
  cityWeatherIcons:{[key: string]:string} = { bottomSubtitle: 'air', title: 'location_city' };

  constructor(
    private router: Router,
    private store: Store<{
      citiesWeatherList: CityWeather[],
      cityName: string,
      isLoading: boolean,
    }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[Cities Weather List Page] Load Cities Weather' });
  }

  onCitySelect(cityName: string):void {
    this.router.navigate(['/weather/weather-forecast'], {
      queryParams: {
        params: JSON.stringify({cityName}),
      }
    });
  }
}
