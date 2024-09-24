import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let routerMock: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchComponent, // Import the standalone component
        ReactiveFormsModule,
        CommonModule,
        RouterTestingModule.withRoutes([]), // Use RouterTestingModule to mock Router
      ],
      providers: [
        FormBuilder, // Provide FormBuilder for the component's form
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    routerMock = TestBed.inject(Router); // Get the Router instance
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const form = component.searchForm;
    expect(form.value).toEqual({
      model: 'ALL_OPTIONS',
      year: 'ALL_OPTIONS',
      location: 'ALL_OPTIONS',
    });
  });

  it('should navigate with query params when goToSearchUrl is called', () => {
    const routerSpy = spyOn(routerMock, 'navigate'); // Spy on the navigate method

    component.searchForm.setValue({
      model: 'Model 3',
      year: '2022',
      location: 'Texas',
    });

    component.goToSearchUrl();

    const expectedParams = {
      model: 'Model 3',
      year: '2022',
      location: 'Texas'
    };

    expect(routerSpy).toHaveBeenCalledWith(['/listings'], {
      queryParams: expectedParams,
    });
  });

  it('should not include "ALL_OPTIONS" in the query params', () => {
    const routerSpy = spyOn(routerMock, 'navigate');

    component.searchForm.setValue({
      model: 'ALL_OPTIONS',
      year: '2022',
      location: 'ALL_OPTIONS',
    });

    component.goToSearchUrl();

    const expectedParams = {
      year: '2022'
    };

    expect(routerSpy).toHaveBeenCalledWith(['/listings'], {
      queryParams: expectedParams,
    });
  });
});
