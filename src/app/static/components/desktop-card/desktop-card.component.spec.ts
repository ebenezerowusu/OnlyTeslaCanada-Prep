import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCardComponent } from './desktop-card.component';

describe('DesktopCardComponent', () => {
  let component: DesktopCardComponent;
  let fixture: ComponentFixture<DesktopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
