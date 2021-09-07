import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityWeatherForecastRoutingModule } from './city-weather-forecast-routing.module';
import { CityWeatherForecastComponent } from './city-weather-forecast.component';

import { MaterialModule } from './../../../../shared/modules/material.module';

@NgModule({
  declarations: [
    CityWeatherForecastComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CityWeatherForecastRoutingModule
  ]
})
export class CityWeatherForecastModule { }
