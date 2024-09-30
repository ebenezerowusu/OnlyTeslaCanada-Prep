import { Component } from '@angular/core';
import { ListingCardComponent } from '../../shared/components/listing-card/listing-card.component'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
