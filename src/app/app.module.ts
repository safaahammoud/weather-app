import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CitiesWeatherEffects } from './modules/weather/store/cities-weather.effects';
import { citiesWeatherReducer } from './modules/weather/store/cities-weather.reducers';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    EffectsModule.forRoot([CitiesWeatherEffects]),
    StoreModule.forRoot({ citiesWeatherList: citiesWeatherReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
