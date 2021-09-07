import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectIsLoading } from './modules/weather/store/cities-weather.selectors';
import { CityWeather } from './modules/weather/models/city-weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private store: Store<{
    citiesWeatherList: CityWeather[],
    isLoading: boolean,
  }>) {}
}
