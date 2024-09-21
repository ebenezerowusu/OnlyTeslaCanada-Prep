import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ListingCardComponent } from '../../../features/listings/components/listing-card/listing-card.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) {}

}
