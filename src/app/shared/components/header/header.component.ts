import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public auth: AuthService) { }

}
