import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent,
    children: [
      {
        path: 'cities-weather',
        loadChildren: () => import('../weather/components/cities-weather-list/cities-weather-list.module')
            .then(m => m.CitiesWeatherListModule)
      },
      { path: 'weather-forecast', loadChildren: () => import('./components/city-weather-forecast/city-weather-forecast.module').then(m => m.CityWeatherForecastModule) }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
