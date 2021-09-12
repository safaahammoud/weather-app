import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { CitiesWeatherListRoutingModule } from './cities-weather-list-routing.module';
import { CitiesWeatherListComponent } from './cities-weather-list.component';
import { ComponentModule } from './../../../../shared/components/component.module';
import { MaterialModule } from './../../../../shared/modules/material.module';
import appReducers from 'app/store/app.reducers';
import { Observable } from 'rxjs';
import { MOCKED_CITIES } from 'testing/models/mock-cities-weather';

export type Primitive = number | string | boolean | object;

export type Spied<T> = jasmine.SpyObj<T> & {
  // tslint:disable-next-line:no-any
  [key: string]: Primitive | Observable<any>;
};

describe('CitiesWeatherListComponent', () => {
  let component: CitiesWeatherListComponent;
  let fixture: ComponentFixture<CitiesWeatherListComponent>;
  let mockedRouter: Spied<Router>;

  beforeEach(waitForAsync((): void => {
    mockedRouter = jasmine.createSpyObj(Router, ['navigate']);

    TestBed.configureTestingModule({
      declarations: [
        CitiesWeatherListComponent,
      ],
      imports: [
        CommonModule,
        MaterialModule,
        ComponentModule,
        RouterTestingModule,
        CitiesWeatherListRoutingModule,
        StoreModule.forRoot(appReducers),
      ],
      providers: [{ provide: Router, useValue: mockedRouter }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesWeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display set cities weather list', () => {
    component.citiesWeatherList$ = of(MOCKED_CITIES);

    component.citiesWeatherList$.subscribe(response => {
      expect(response).toBe(MOCKED_CITIES);
    });

    fixture.detectChanges();
  });

  describe('onCitySelect', (): void => {
    it('should call router navigate', (): void => {
      let cityName = MOCKED_CITIES[0].cityName;

      component.onCitySelect(cityName || '');

      expect(mockedRouter.navigate).toHaveBeenCalledTimes(1);
      expect(mockedRouter.navigate).toHaveBeenCalledWith(['/weather/weather-forecast'], {
        queryParams: {
          params: JSON.stringify({ cityName }),
        }
      });
    });
  });
});
