import { Component, Input, Output, EventEmitter } from '@angular/core';

interface SelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-atom-select',
  standalone: true,
  imports: [],
  templateUrl: './atom-select.component.html',
  styleUrl: './atom-select.component.css'
})
export class AtomSelectComponent {
  @Input() options: SelectOption[] = []; // Array of select options (label-value pairs)
  @Input() selectedValue: any = null;    // Currently selected value

  @Output() selectChange = new EventEmitter<any>(); // Emit the selected value when changed

  // Triggered when user changes selection
  onChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectChange.emit(value); // Emit selected value
  }
}
