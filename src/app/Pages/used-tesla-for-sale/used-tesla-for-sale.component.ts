import { Component } from '@angular/core';
import { DesktopCardComponent } from '../../shared/components/desktop-card/desktop-card.component';
import { FilterComponent } from '../../shared/components/filter/filter.component';

@Component({
  selector: 'app-used-tesla-for-sale',
  standalone: true,
  imports: [DesktopCardComponent, FilterComponent],
  templateUrl: './used-tesla-for-sale.component.html',
  styleUrl: './used-tesla-for-sale.component.css'
})
export class UsedTeslaForSaleComponent {

}
