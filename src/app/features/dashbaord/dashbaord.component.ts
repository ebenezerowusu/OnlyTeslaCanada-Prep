import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.css'
})

export class DashbaordComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.auth.loginWithRedirect();
      } else {
        // Continue with authenticated flow
        this.auth.user$.subscribe((user) => {
          console.log(user);
        });
      }
    });
  }

}
