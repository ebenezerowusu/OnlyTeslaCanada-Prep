import { Component, Input } from '@angular/core';
import defaultTo from 'lodash/defaultTo';
import { spacingValidator } from '../../prop-validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-column.component.html',
  styleUrl: './grid-column.component.scss'
})
export class GridColumnComponent {
   // Injected values from parent (simulate Vue's inject with @Input())
   @Input() rowVerticalSpace: string | null = null;
   @Input() rowHorizontalSpace: string | null = null;
   @Input() rowTextAlign: string | null = null;
   @Input() rowJustifyContent: string | null = null;

   // Props with default values and validators
   private _verticalSpace: string | null = null;
   private _horizontalSpace: string | null = null;
   @Input() width: string = '100%';
   @Input() tabletPortrait: string | null = null;
   @Input() tabletLandscape: string | null = null;
   @Input() smallDesktop: string | null = null;
   @Input() largeDesktop: string | null = null;
   @Input() height: string | null = null;
   @Input() textAlign: string | null = null;
   @Input() canGrow: boolean = true;
   @Input() canShrink: boolean = true;
   @Input() justifyContent: string | null = null;
   @Input() alignSelf: string | null = null;

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

   // Computed properties for columnVerticalSpace and columnHorizontalSpace
   get columnVerticalSpace(): string | null {
     return defaultTo(this.verticalSpace, this.rowVerticalSpace);
   }

   get columnHorizontalSpace(): string | null {
     return defaultTo(this.horizontalSpace, this.rowHorizontalSpace);
   }

   get columnTextAlign(): string | null {
     return defaultTo(this.textAlign, this.rowTextAlign);
   }

   get columnJustifyContent(): string | null {
     return defaultTo(this.justifyContent, this.rowJustifyContent);
   }

   get display(): string | null {
     return this.columnJustifyContent || this.alignSelf ? 'flex' : null;
   }

   // Responsive breakpoints
   get phone(): string {
     return this.width;
   }

   get tabletPortraitComputed(): string {
     return defaultTo(this.tabletPortrait, this.phone);
   }

   get tabletLandscapeComputed(): string {
     return defaultTo(this.tabletLandscape, this.tabletPortraitComputed);
   }

   get smallDesktopComputed(): string {
     return defaultTo(this.smallDesktop, this.tabletLandscapeComputed);
   }

   get largeDesktopComputed(): string {
     return defaultTo(this.largeDesktop, this.smallDesktopComputed);
   }

   // Styles object to pass to [ngStyle]
   get styles() {
     return {
       textAlign: this.columnTextAlign,
       flexGrow: this.canGrow ? '1' : '0',
       flexShrink: this.canShrink ? '1' : '0',
       display: this.display,
       justifyContent: this.columnJustifyContent,
       alignSelf: this.alignSelf,
       width: this.phone,
       '--phone': this.phone,
       '--tablet-portrait': this.tabletPortraitComputed,
       '--tablet-landscape': this.tabletLandscapeComputed,
       '--small-desktop': this.smallDesktopComputed,
       '--large-desktop': this.largeDesktopComputed,
     };
   }
}
