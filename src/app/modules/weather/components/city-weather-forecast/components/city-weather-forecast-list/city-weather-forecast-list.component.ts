import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Forecast } from 'app/modules/weather/shared/models/city-weather-forecast.model';

@Component({
  selector: 'wa-city-weather-forecast-list',
  templateUrl: './city-weather-forecast-list.component.html',
  styleUrls: ['./city-weather-forecast-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
