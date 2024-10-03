import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/organism/search/search.component';
import { ButtonComponent } from './components/organism/button/button.component';
import { LoaderComponent } from './components/organism/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, SearchComponent, ButtonComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDisabled = false;
  isRegularLink = false;

  click = new EventEmitter<Event>();
  title = 'onytesCa';

  handleButtonClick() {
    console.log('Button clicked from parent');
  }
}
