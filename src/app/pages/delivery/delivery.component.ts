import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../shared/header/header.component';
import { FooterNavComponent } from '../shared/footer-nav/footer-nav.component';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    FooterNavComponent,
  ],
  templateUrl: './delivery.component.html',
})
export class DeliveryComponent { }
