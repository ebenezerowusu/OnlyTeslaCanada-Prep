import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  options = {
    model: ['Model S', 'Model X', 'Model 3', 'Model Y'],
    year: ['2020', '2021', '2022', '2023'],
    location: ['New York', 'California', 'Texas', 'Florida'],
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      model: ['ALL_OPTIONS'],
      year: ['ALL_OPTIONS'],
      location: ['ALL_OPTIONS'],
    });
  }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  goToSearchUrl(): void {
    const { model, year, location } = this.searchForm.value;
    const params = new URLSearchParams();

    if (model !== 'ALL_OPTIONS') params.set('model', model);
    if (year !== 'ALL_OPTIONS') params.set('year', year);
    if (location !== 'ALL_OPTIONS') params.set('location', location);

    this.router.navigate(['/listings'], { queryParams: params });
  }
}
