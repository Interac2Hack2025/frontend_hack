import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qr_scanner.component.html',
})
export class QrScannerComponent {
  constructor(private readonly router: Router) {}

  scannedCode: string | null = null;

  goToDeliveryDetails() {
    this.router.navigate(['/delivery/details']);
  }
}
