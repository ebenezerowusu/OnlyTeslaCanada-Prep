import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { MobileSidebarComponent } from '../mobile-sidebar/mobile-sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MobileSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  NavLinks = [
    { name: "Used Tesla For Sale", link: "/used-tesla-for-sale" },
    { name: "FAQ", link: "/faq" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "Sell My Tesla", link: "/sell-my-tesla" },
    { name: "Log In", link: "/login" },
    { name: "Register", link: "/register" }
  ]
}
