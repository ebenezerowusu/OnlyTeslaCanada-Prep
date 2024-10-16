import { Component } from '@angular/core';
import { ListingFooterComponent } from '../../components/listing-footer/listing-footer.component';
import { ListingNavbarComponent } from '../../components/listing-navbar/listing-navbar.component';
import { ListingHeaderComponent } from '../../components/listing-header/listing-header.component';

@Component({
  selector: 'app-location-listing',
  standalone: true,
  imports: [ListingFooterComponent, ListingNavbarComponent, ListingHeaderComponent],
  templateUrl: './location-listing.component.html',
  styleUrl: './location-listing.component.css'
})
export class LocationListingComponent {

}
