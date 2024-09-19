import { Component } from '@angular/core';
import { DesktopCardComponent } from '../../shared/components/desktop-card/desktop-card.component';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { MobileFilterComponent } from '../../shared/components/mobile-filter/mobile-filter.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-used-tesla-for-sale',
  standalone: true,
  imports: [DesktopCardComponent, FilterComponent, MobileFilterComponent, SkeletonComponent],
  templateUrl: './used-tesla-for-sale.component.html',
  styleUrl: './used-tesla-for-sale.component.css'
})
export class UsedTeslaForSaleComponent {

}
