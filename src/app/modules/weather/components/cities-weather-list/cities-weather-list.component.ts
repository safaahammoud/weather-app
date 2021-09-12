import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AppState } from './../../../../store/app.state';
import { fetchCityWeatherForecast } from './../../store/cities-weather.actions';
import { selectCitiesWeatherList } from './../../store/cities-weather.selectors';
import { CityWeather } from '../../shared/models/city-weather.model';

@Component({
  selector: 'wa-cities-weather-list',
  templateUrl: './cities-weather-list.component.html',
  styleUrls: ['./cities-weather-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesWeatherListComponent implements OnInit {
  public citiesWeatherList$: Observable<CityWeather[]> = this.store.select(selectCitiesWeatherList);
  public readonly cityWeatherIcons: { [key: string]: string } = {
    bottomSubtitle: 'air',
    title: 'location_city',
  };

  public constructor(
    private router: Router,
    private readonly store: Store<AppState>,
  ) {}

  public ngOnInit(): void {
    this.store.dispatch({ type: '[Cities List/API] Fetch Cities and their Weather' });
  }

  public onCitySelect(cityName: string): void {
    this.store.dispatch(fetchCityWeatherForecast({ forecastCityName: cityName }));

    this.router.navigate(['/weather/weather-forecast'], {
      queryParams: {
        params: JSON.stringify({ cityName }),
      }
    });
  }
}
