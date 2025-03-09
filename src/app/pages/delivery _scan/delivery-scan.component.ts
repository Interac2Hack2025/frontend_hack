import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../shared/header/header.component';
import { FooterNavComponent } from '../shared/footer-nav/footer-nav.component';

@Component({
  selector: 'app-delivery-scan',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    FooterNavComponent,
  ],
  templateUrl: './delivery-scan.component.html',
})
export class DeliveryScanComponent { }
