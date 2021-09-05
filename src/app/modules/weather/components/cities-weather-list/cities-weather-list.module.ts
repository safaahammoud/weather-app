import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesWeatherListComponent } from './cities-weather-list.component';
import { CitiesWeatherListRoutingModule } from './cities-weather-list-routing.module';

import { MaterialModule } from './../../../../shared/modules/material.module';
import { ComponentModule } from './../../../../shared/components/component.module';

@NgModule({
  declarations: [
    CitiesWeatherListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentModule,
    CitiesWeatherListRoutingModule
  ]
})
export class CitiesWeatherListModule { }
