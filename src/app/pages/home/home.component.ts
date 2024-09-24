import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) {}

}
