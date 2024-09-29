import { Component } from '@angular/core';
import { DesktopCardComponent } from '../../../../static/components/desktop-card/desktop-card.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { MobileFilterComponent } from '../../components/mobile-filter/mobile-filter.component';
import { SkeletonComponent } from '../../../../static/components/skeleton/skeleton.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-used-tesla-for-sale',
  standalone: true,
  imports: [DesktopCardComponent, FilterComponent, MobileFilterComponent, SkeletonComponent, PageHeaderComponent],
  templateUrl: './used-tesla-for-sale.component.html',
  styleUrl: './used-tesla-for-sale.component.css'
})
export class UsedTeslaForSaleComponent {

}
