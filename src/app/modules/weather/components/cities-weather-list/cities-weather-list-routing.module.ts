import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesWeatherListComponent } from './cities-weather-list.component';

const routes: Routes = [{ path: '', component: CitiesWeatherListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesWeatherListRoutingModule { }
