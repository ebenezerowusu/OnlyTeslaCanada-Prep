import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
  locations = [
    {
      name: 'Alberta',
      url: '/'
    },
    {
      name: 'British Columbia',
      url: '/'
    },
    {
      name: 'Manitoba',
      url: '/'
    },
    {
      name: 'New Brunswick',
      url: '/'
    },
    {
      name: 'Newfoundland and Hampshire',
      url: '/'
    },
    {
      name: 'Northwest Territories',
      url: '/'
    },
    {
      name: 'Nova Scotia',
      url: '/'
    },
    {
      name: 'Nunavut',
      url: '/'
    },
    {
      name: 'Prince Edward Island',
      url: '/'
    },
    {
      name: 'Quebec',
      url: '/'
    },
    {
      name: 'Saskatchewan',
      url: '/'
    },
    {
      name: 'Yukon Territory',
      url: '/'
    }
  ]
}
