import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherForecastComponent } from './city-weather-forecast.component';

const routes: Routes = [{ path: '', component: CityWeatherForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityWeatherForecastRoutingModule { }
