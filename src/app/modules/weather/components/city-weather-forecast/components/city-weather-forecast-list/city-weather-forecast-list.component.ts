import { Component, Input } from '@angular/core';

import { Forecast } from 'src/app/modules/weather/models/city-weather-forecast.model';

@Component({
  selector: 'app-city-weather-forecast-list',
  templateUrl: './city-weather-forecast-list.component.html',
  styleUrls: ['./city-weather-forecast-list.component.scss']
})
export class CityWeatherForecastListComponent {
  private _list: Forecast[] = [];
  @Input() public set list(list: Forecast[]) {
    this._list = list;
  }
  public get list(): Forecast[] {
    return this._list;
  }
}
