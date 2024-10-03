import { Component } from '@angular/core';
import { GridColumnComponent } from '../grid-column/grid-column.component';
import { GridRowComponent } from '../grid-row/grid-row.component';
import { GridComponent } from '../grid/grid.component';
import { SelectComponent } from '../select/select.component';
import { ButtonComponent } from '../button/button.component';
import { cleanObject } from '../../../../utilities/clean-object';
import setUrlParams from '../../../composables/set-url-params';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ListingService } from '../../../services/listing.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { delay, map } from 'rxjs/operators';


@Component({
  selector: 'app-search-vue-v',
  standalone: true,
  imports: [GridComponent, GridRowComponent, GridColumnComponent, SelectComponent, ButtonComponent, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  isLoading = new BehaviorSubject<boolean>(false);
  searchUrl = '';
  selected: any = {
    model: 'ALL_OPTIONS',
    year: 'ALL_OPTIONS',
    location: 'ALL_OPTIONS',
  };
  filterOptions$!: Observable<any>;
  cachedOptions: any = { name: null, options: [] };
  options: any = []

  constructor(private listingService: ListingService) {}

  ngOnInit() {
    // Subscribe to filter options from the service (store equivalent)
    this.filterOptions$ = this.listingService.listingsFilter$;

    this.options = {
      model: this.filterOptions$.pipe(map(options => this.loadOptions('model', options))),
      year: this.filterOptions$.pipe(map(options => this.loadOptions('year', options))),
      location: this.filterOptions$.pipe(map(options => this.loadOptions('location', options))),
    };

    // Fetch initial filter data
    this.listingService.fetchFilters({
      listingType: ['!Sold'],
      dealer: ['Individual Seller'],
    });
  }

  loadOptions(name: string, options: any) {
    const isCached = this.cachedOptions.name === name;
    let filterOptions;

    if (isCached) {
      filterOptions = this.cachedOptions.options;
    } else {
      filterOptions = options.filter[name];
    }

    return [{ label: 'All', value: 'ALL_OPTIONS' }].concat(filterOptions);
  }

  goToSearchUrl() {
    window.location.href = `${window.location.origin}/listings/${this.searchUrl}`;
  }

  replaceState() {
    const params = cleanObject({
      model: this.selected.model,
      year: this.selected.year,
      location: this.selected.location,
      listingType: '!Sold',
      dealer: 'Individual Seller',
    });

    this.searchUrl = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
  }

  onChange(key?: { name: string; change: string }) {
    this.isLoading.next(true);

    if (key) {
      // Update selected filters
      this.selected[key.name] = key.change;
    } else {
      // Reset all filters
      Object.keys(this.selected).forEach(k => (this.selected[k] = 'ALL_OPTIONS'));
    }

    const cleanedFilter = cleanObject(this.selected, ['ALL_OPTIONS', null, 0]);

    if (key && this.cachedOptions.name !== key.name) {
      this.cachedOptions = {
        name: key.name,
        options: this.filterOptions$.pipe(map(o => o.filter[key.name])),
      };
    }

    this.listingService.fetchFilters(cleanedFilter);
    this.isLoading.next(false);
    this.replaceState();
  }
}