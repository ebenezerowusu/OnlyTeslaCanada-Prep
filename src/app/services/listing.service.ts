import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private listingsFilter = new BehaviorSubject<any>({
    current: {
      model: null,
      year: null,
      location: null,
    },
    filter: {
      model: ['Sedan', 'SUV', 'Truck'],
      year: [2020, 2021, 2022],
      location: ['New York', 'Los Angeles', 'Chicago'],
    },
  });

  get listingsFilter$() {
    return this.listingsFilter.asObservable();
  }

  fetchFilters(filters: any) {
    // Simulate an API call
    const newFilters = {
      ...this.listingsFilter.value,
      current: { ...this.listingsFilter.value.current, ...filters },
    };
    this.listingsFilter.next(newFilters);
  }

  updateFilterCache(filterName: string, options: any) {
    this.listingsFilter.next({
      ...this.listingsFilter.value,
      filter: {
        ...this.listingsFilter.value.filter,
        [filterName]: options,
      },
    });
  }
}

