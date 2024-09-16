import { Routes } from '@angular/router';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'dashboard', component:DashbaordComponent},
  {path:'home', component:HomeComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'},
];
