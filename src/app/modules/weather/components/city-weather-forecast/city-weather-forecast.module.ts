import { CityWeatherForecastListComponent } from './components/city-weather-forecast-list/city-weather-forecast-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityWeatherForecastComponent } from './city-weather-forecast.component';
import { CityWeatherForecastRoutingModule } from './city-weather-forecast-routing.module';

import { MaterialModule } from './../../../../shared/modules/material.module';

@NgModule({
  declarations: [
    CityWeatherForecastComponent,
    CityWeatherForecastListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CityWeatherForecastRoutingModule
  ]
})
export class CityWeatherForecastModule { }
