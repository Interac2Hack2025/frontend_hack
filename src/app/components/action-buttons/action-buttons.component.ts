import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="action-buttons">
      <button class="transfer-btn">
        <span class="icon">✉️</span>
        Transferir
      </button>
      <button class="qr-btn">
        <span class="icon">📱</span>
        Pagar a QR
      </button>
    </div>
  `,
  styles: [
    `
      .action-buttons {
        display: flex;
        gap: 16px;
        padding: 16px;
        position: fixed;
        bottom: 80px;
        left: 0;
        right: 0;
      }
      button {
        flex: 1;
        padding: 16px;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
      }
      .transfer-btn {
        background-color: white;
        color: #5829bd;
        border: 2px solid #5829bd;
      }
      .qr-btn {
        background-color: #5829bd;
        color: white;
      }
    `,
  ],
})
export class ActionButtonsComponent {}
