import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { WeatherService } from './modules/weather/shared/services/weather.service';
import { CitiesWeatherEffects } from './modules/weather/store/cities-weather.effects';
import appReducers from './store/app.reducers';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterTestingModule,
        MaterialModule,
        HttpClientModule,
        EffectsModule.forRoot([CitiesWeatherEffects]),
        StoreModule.forRoot(appReducers),
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        AppComponent,
      ]
    }).compileComponents();

    TestBed.inject(AppComponent);
    TestBed.inject(WeatherService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Weather Forecast'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Weather Forecast');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.wa-wrapper__main-toolbar .display-3')?.textContent).toContain('Weather Forecast');
  });
});
