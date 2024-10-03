import { Component, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class VueGridComponent implements OnInit {
  @Input() verticalSpace: 'sm' | 'md' | 'lg' = 'md';
  @Input() horizontalSpace: 'sm' | 'md' | 'lg' = 'md';
  @Input() textAlign: string = 'left';
  @Input() fluid: boolean = false;

  gridClasses: string = '';

  ngOnInit(): void {
    this.gridClasses = this.computeGridClasses();
  }

  private computeGridClasses(): string {
    return `
      v${this.verticalSpace} h${this.horizontalSpace} ${this.fluid ? 'fluid' : ''}
    `;
  }
}
