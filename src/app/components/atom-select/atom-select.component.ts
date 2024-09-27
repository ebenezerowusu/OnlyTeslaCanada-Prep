import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

interface SelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'lib-atom-select',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './atom-select.component.html',
  styleUrls: ['./atom-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtomSelectComponent {
  @Input() options: { label: string, value: any }[] = [];
  @Input() formControlName: string = '';
  @Input() id: string = '';
  @Input() className: string = '';

  @Output() selectChange = new EventEmitter<any>();

  onChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectChange.emit(value);
  }
}
