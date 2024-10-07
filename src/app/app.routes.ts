import { Routes } from '@angular/router';
import { HomeComponent } from './static/pages/home/home.component';
import { DashbaordComponent } from './features/dashbaord/dashbaord.component';
import { UsedTeslaForSaleComponent } from './features/listings/pages/used-tesla-for-sale/used-tesla-for-sale.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component:AboutComponent},
  {path:'used-tesla-for-sale', component:UsedTeslaForSaleComponent},
  {path:'dashboard', component:DashbaordComponent},
  {path:'home', component:HomeComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'},
];
