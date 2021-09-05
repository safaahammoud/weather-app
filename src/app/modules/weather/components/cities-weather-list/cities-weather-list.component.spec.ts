import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesWeatherListComponent } from './cities-weather-list.component';

describe('CitiesWeatherListComponent', () => {
  let component: CitiesWeatherListComponent;
  let fixture: ComponentFixture<CitiesWeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesWeatherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesWeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
