import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AtomSelectComponent } from '../atom-select/atom-select.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AtomSelectComponent // Ensure it's imported here
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  options = {
    model: [
      { label: 'All', value: 'ALL_OPTIONS' }, // Default option
      { label: 'Model S', value: 'Model S' },
      { label: 'Model X', value: 'Model X' },
      { label: 'Model 3', value: 'Model 3' },
      { label: 'Model Y', value: 'Model Y' }
    ],
    year: [
      { label: 'All', value: 'ALL_OPTIONS' }, // Default option
      { label: '2020', value: '2020' },
      { label: '2021', value: '2021' },
      { label: '2022', value: '2022' },
      { label: '2023', value: '2023' }
    ],
    location: [
      { label: 'All', value: 'ALL_OPTIONS' }, // Default option
      { label: 'New York', value: 'New York' },
      { label: 'California', value: 'California' },
      { label: 'Texas', value: 'Texas' },
      { label: 'Florida', value: 'Florida' }
    ]
  };


  constructor(private fb: FormBuilder, private router: Router) {

    this.searchForm = this.fb.group({
      model: ['ALL_OPTIONS'],
      year: ['ALL_OPTIONS'],
      location: ['ALL_OPTIONS'],
    });

  }

  ngOnInit(): void {

  }

  onSelectChange(value: any): void {
    console.log('Selected value:', value);
  }

  goToSearchUrl(): void {
    console.log('helolo')
    const { model, year, location } = this.searchForm.value;
    const queryParams: any = {};

    if (model !== 'ALL_OPTIONS') queryParams.model = model;
    if (year !== 'ALL_OPTIONS') queryParams.year = year;
    if (location !== 'ALL_OPTIONS') queryParams.location = location;

    this.router.navigate(['/listings'], { queryParams });
  }
}
