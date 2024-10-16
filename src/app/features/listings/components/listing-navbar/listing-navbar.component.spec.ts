import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingNavbarComponent } from './listing-navbar.component';

describe('ListingNavbarComponent', () => {
  let component: ListingNavbarComponent;
  let fixture: ComponentFixture<ListingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
