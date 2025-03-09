import { Routes } from '@angular/router';
import { DeliveryComponent } from './app/pages/delivery/delivery.component';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { DeliveryScanComponent } from './app/pages/delivery _scan/delivery-scan.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { 
    path: 'delivery', 
    children: [
      { path: '', component: DeliveryScanComponent },
      { path: 'details', component: DeliveryComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
