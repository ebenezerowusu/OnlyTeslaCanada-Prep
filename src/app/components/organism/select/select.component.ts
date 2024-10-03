import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

interface IItem {
  label: string;
  value: string | number | boolean;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FaIconComponent, FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  faExclamationTriangle = faExclamationTriangle;

  @Input() id!: string;
  @Input() name!: string;
  @Input() label?: string;
  @Input() inlinePlaceholder?: string;
  @Input() required: boolean = false;
  @Input() validation?: string | object;
  @Input() disabled: boolean = false;

  @Input() value: string | string[] = ''; // Default to an empty string
  @Input() items: IItem[] = []; // Default to an empty array
  @Input() multiSelect: boolean = false;

  @Output() valueChange = new EventEmitter<string | string[]>();

  currentValueAsArray: string[] = []; // Initialize as an empty array

  // Necessary for communicating with the parent form
  private onChange!: (value: string | string[]) => void;
  private onTouched!: () => void;

  ngOnInit(): void {
    this.initializeValue();
  }

  private initializeValue(): void {
    if (this.value) {
      this.currentValueAsArray = this.value.toString().split('|');
    }
  }

  writeValue(value: string | string[]): void {
    if (value) {
      this.currentValueAsArray = this.multiSelect ? (value as string[]) : value.toString().split('|');
    } else {
      this.currentValueAsArray = [];
    }
  }

  registerOnChange(fn: (value: string | string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValues: string[] = Array.from(target.selectedOptions).map(option => option.value);
    this.currentValueAsArray = selectedValues;

    // Emit the correct type
    const valueToEmit = this.multiSelect ? selectedValues : selectedValues.join('|');
    this.valueChange.emit(valueToEmit);

    // Call the change function
    if (this.onChange) {
      this.onChange(valueToEmit);
    }

    // Call the touched function
    if (this.onTouched) {
      this.onTouched();
    }
  }

  isValid(errors: any): boolean {
    return !errors || errors.length === 0;
  }

  isSelected(option: IItem): boolean {
    return this.currentValueAsArray.includes(option.value.toString());
  }

  messageOrError(errors: any): string {
    return this.isValid(errors) ? '' : 'Must select a valid option.';
  }
}
