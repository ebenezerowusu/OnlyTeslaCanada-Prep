import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AuthService } from '@auth0/auth0-angular';
import { SearchComponent } from '../../components/search/search.component';
import { of } from 'rxjs';
import { DOCUMENT } from '@angular/common';

// Mock AuthService
const authServiceMock = {
  isAuthenticated$: of(true), // Mock the observable for authentication status
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent], // Import the standalone component here
      providers: [
        { provide: AuthService, useValue: authServiceMock }, // Provide the mock AuthService
        { provide: DOCUMENT, useValue: document } // Mock DOCUMENT if needed
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the search component loaded', () => {
    const searchComponent = fixture.nativeElement.querySelector('app-search');
    expect(searchComponent).not.toBeNull();
  });

  it('should render the template correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Used TESLA For Sale');
  });
});
