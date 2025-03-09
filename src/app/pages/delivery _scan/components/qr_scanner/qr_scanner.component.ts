import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./qr_scanner.component.html"
})
export class QrScannerComponent {
  scannedCode: string | null = null;

  simulateScan() {
    this.scannedCode = 'QR123456789'; 
  }
}
