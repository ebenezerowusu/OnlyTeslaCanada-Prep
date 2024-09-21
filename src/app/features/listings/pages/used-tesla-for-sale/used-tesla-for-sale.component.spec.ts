import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedTeslaForSaleComponent } from './used-tesla-for-sale.component';

describe('UsedTeslaForSaleComponent', () => {
  let component: UsedTeslaForSaleComponent;
  let fixture: ComponentFixture<UsedTeslaForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedTeslaForSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsedTeslaForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
