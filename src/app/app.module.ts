import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CitiesWeatherEffects } from './modules/weather/store/cities-weather.effects';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { environment } from './../environments/environment';
import { MaterialModule } from './shared/modules/material.module';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import appReducers from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    EffectsModule.forRoot([CitiesWeatherEffects]),
    StoreModule.forRoot(appReducers),
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
