import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="balance-card">
      <h2>Saldo disponible</h2>
      <div class="balance-amount">
        <span>$0,00</span>
        <button class="visibility-toggle">👁️</button>
      </div>
      <button class="more-info">›</button>
    </div>
  `,
  styles: [
    `
      .balance-card {
        background: white;
        border-radius: 16px;
        padding: 20px;
        margin: 16px 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .balance-amount {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 32px;
        font-weight: bold;
        margin: 12px 0;
      }
      .visibility-toggle {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
      }
      .more-info {
        background: none;
        border: none;
        font-size: 24px;
        float: right;
        cursor: pointer;
      }
    `,
  ],
})
export class BalanceCardComponent {}
