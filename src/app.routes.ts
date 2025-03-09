import { Routes } from '@angular/router';
import { DeliveryComponent } from './app/pages/delivery/delivery.component';
import { LoginComponent } from './app/pages/login/login.component';
import { HomeComponent } from './app/pages/home/home.component';
import { DeliveryCreateComponent } from './app/pages/delivery _creacion/delivery-create.component';
import { DeliveryScanComponent } from './app/pages/delivery _scan/delivery-scan.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'delivery',
    children: [
      { path: '', component: DeliveryScanComponent },
      { path: 'details', component: DeliveryComponent },
      { path: 'create', component: DeliveryCreateComponent }
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];