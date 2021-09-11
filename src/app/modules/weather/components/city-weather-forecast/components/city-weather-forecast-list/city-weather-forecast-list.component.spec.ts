import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherService } from './../../../../shared/services/weather.service';
import { CityWeatherForecastListComponent } from './city-weather-forecast-list.component';

class MockWeatherService {
  // TODO: adding values
}

describe('CityWeatherForecastListComponent', () => {
  let component: CityWeatherForecastListComponent;
  let fixture: ComponentFixture<CityWeatherForecastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CityWeatherForecastListComponent,
      ],
      providers: [
        CityWeatherForecastListComponent,
        {
          provide: WeatherService,
          useClass: MockWeatherService,
        },
      ],
      imports: [
        RouterTestingModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherForecastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
