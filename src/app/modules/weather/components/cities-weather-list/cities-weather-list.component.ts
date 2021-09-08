import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppState } from './../../../../store/app.state';
import { toggleLoaderVisibility } from './../../store/cities-weather.actions';
import { selectCitiesWeatherList } from './../../store/cities-weather.selectors';

@Component({
  selector: 'app-cities-weather-list',
  templateUrl: './cities-weather-list.component.html',
  styleUrls: ['./cities-weather-list.component.scss']
})
export class CitiesWeatherListComponent implements OnInit {
  citiesWeatherList$ = this.store.select(selectCitiesWeatherList);
  cityWeatherIcons: {[key: string]: string} = {
    bottomSubtitle: 'air',
    title: 'location_city',
  };

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(toggleLoaderVisibility({ isLoading: true }));
    this.store.dispatch({ type: '[Cities Weather List Page] Load Cities Weather' });
  }

  onCitySelect(cityName: string): void {
    this.router.navigate(['/weather/weather-forecast'], {
      queryParams: {
        params: JSON.stringify({ cityName }),
      }
    });
  }
}
