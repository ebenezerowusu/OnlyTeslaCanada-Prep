import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { UsedTeslaForSaleComponent } from './Pages/used-tesla-for-sale/used-tesla-for-sale.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'used-tesla-for-sale', component: UsedTeslaForSaleComponent },
];
