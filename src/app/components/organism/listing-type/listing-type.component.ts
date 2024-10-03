import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-type.component.html',
  styleUrl: './listing-type.component.scss'
})
export class ListingTypeComponent {
  @Input() type!: string; // use `!` for non-null assertion
  @Input() concise: boolean = false; // default value

  constructor() {}

  get dynamicClass() {
    return `listing-type__label--${this.type.toLowerCase().replace(/\s+/g, '-')}`;
  }
}
