import { Component, Input, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, LoaderComponent, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements AfterViewInit {
  @Input() disabled = false;
  @Input() block = false;
  @Input() color = 'default';
  @Input() loading = false;
  @Input() ghost = false;
  @Input() elementType: 'button' | 'a' | 'routerLink' = 'button';
  @Input() href: string | null = null;

  @Output() click = new EventEmitter<Event>();

  @ViewChild('buttonRefButton') buttonRef!: ElementRef;


  ngAfterViewInit() {
    console.log('Button component initialized');
  }

  get actualWidth(): string | null {
    const buttonElement = this.buttonRef?.nativeElement;
    return this.loading && buttonElement ? `${buttonElement.getBoundingClientRect().width}px` : null;
  }

  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  get isRouterLink(): boolean {
    return this.elementType === 'routerLink';
  }

  get isRegularLink(): boolean {
    return this.elementType === 'a';
  }

  onClick(event: Event): void {
    if (this.isRegularLink && this.isDisabled) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!this.isDisabled) {
      this.click.emit(event);
    }
  }
}
