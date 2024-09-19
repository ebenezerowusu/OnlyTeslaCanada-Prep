import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { UsedTeslaForSaleComponent } from './Pages/used-tesla-for-sale/used-tesla-for-sale.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'used-tesla-for-sale', component:UsedTeslaForSaleComponent},
  {path:'dashboard', component:DashbaordComponent},
  {path:'home', component:HomeComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'},
];
