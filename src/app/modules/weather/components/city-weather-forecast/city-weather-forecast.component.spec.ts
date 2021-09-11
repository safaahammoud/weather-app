import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherService } from '../../shared/services/weather.service';
import { CityWeatherForecastComponent } from './city-weather-forecast.component';
import appReducers from 'app/store/app.reducers';

class MockWeatherService {
  // TODO: adding values
}

describe('CityWeatherForecastComponent', () => {
  let component: CityWeatherForecastComponent;
  let fixture: ComponentFixture<CityWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CityWeatherForecastComponent,
      ],
      providers: [
        CityWeatherForecastComponent,
        {
          provide: WeatherService,
          useClass: MockWeatherService,
        },
      ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(appReducers),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
