import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FooterNavComponent } from '../shared/footer-nav/footer-nav.component';

@Component({
  selector: 'app-delivery-create',
  standalone: true,
  imports: [
    CommonModule,
    FooterNavComponent,
],
  templateUrl: './delivery-create.component.html',
})
export class DeliveryCreateComponent { }
