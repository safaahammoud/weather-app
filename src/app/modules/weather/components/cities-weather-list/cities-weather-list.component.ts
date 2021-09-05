import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CityWeather } from './../../models/city-weather.model';
import { selectCitiesWeatherList } from './../../store/cities-weather.selectors';

@Component({
  selector: 'app-cities-weather-list',
  templateUrl: './cities-weather-list.component.html',
  styleUrls: ['./cities-weather-list.component.scss']
})
export class CitiesWeatherListComponent implements OnInit {
  cityWeatherIcons:{[key: string]:string} = { bottomSubtitle: 'air', title: 'location_city' };
  citiesWeatherList$ = this.store.select(selectCitiesWeatherList);

  constructor(private store: Store<{citiesWeatherList: CityWeather[]}>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[Cities Weather List Page] Load Cities Weather' });
  }
}
