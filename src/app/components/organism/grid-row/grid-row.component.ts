import { Component, Input } from '@angular/core';
import { spacingValidator } from '../../prop-validators';
import  defaultTo  from "lodash/defaultTo";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-row.component.html',
  styleUrl: './grid-row.component.scss'
})
export class GridRowComponent {
   // Injected values from parent (simulate Vue's inject with @Input())
   @Input() gridVerticalSpace: string | null = null;
   @Input() gridHorizontalSpace: string | null = null;
   @Input() gridTextAlign: string | null = null;

   // Props with default values and validators
   private _verticalSpace: string | null = null;
   private _horizontalSpace: string | null = null;
   @Input() alignItems: string = 'center';
   @Input() textAlign: string | null = null;
   @Input() justifyContent: string | null = null;
   @Input() flexWrap: string = 'wrap';

   // Input for verticalSpace with validator
   @Input()
   set verticalSpace(value: string | null) {
     this._verticalSpace = value && spacingValidator(value) ? value : null;
   }

   get verticalSpace(): string | null {
     return this._verticalSpace;
   }

   // Input for horizontalSpace with validator
   @Input()
   set horizontalSpace(value: string | null) {
     this._horizontalSpace = value && spacingValidator(value) ? value : null;
   }

   get horizontalSpace(): string | null {
     return this._horizontalSpace;
   }

   // Computed properties for rowVerticalSpace and rowHorizontalSpace
   get rowVerticalSpace(): string | null {
     return defaultTo(this.verticalSpace, this.gridVerticalSpace);
   }

   get rowHorizontalSpace(): string | null {
     return defaultTo(this.horizontalSpace, this.gridHorizontalSpace);
   }

   get rowTextAlign(): string | null {
     return defaultTo(this.textAlign, this.gridTextAlign);
   }

   constructor() {
     // Equivalent of provide
   }
}
