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
  //..
export class AtomSelectComponent {
  @Input() options: SelectOption[] = []; 
  @Input() selectedValue: any = null;   

  @Output() selectChange = new EventEmitter<any>(); 
  
  onChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectChange.emit(value); 
  }
}
