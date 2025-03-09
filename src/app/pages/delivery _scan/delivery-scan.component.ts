import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FooterNavComponent } from '../shared/footer-nav/footer-nav.component';
import { QrScannerComponent } from "./components/qr_scanner/qr_scanner.component";

@Component({
  selector: 'app-delivery-scan',
  standalone: true,
  imports: [
    CommonModule,
    FooterNavComponent,
    QrScannerComponent
],
  templateUrl: './delivery-scan.component.html',
})
export class DeliveryScanComponent { }
