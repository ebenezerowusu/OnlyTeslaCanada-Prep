import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mobile-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-filter.component.html',
  styleUrl: './mobile-filter.component.css'
})
export class MobileFilterComponent {
  isFilterVisible: boolean = false;

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }
}
