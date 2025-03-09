import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="footer-nav">
      <button class="nav-item active">
        <span class="icon">🏠</span>
        Inicio
      </button>
      <button class="nav-item">
        <span class="icon">🏷️</span>
        Promos
      </button>
      <button class="nav-item">
        <span class="icon">💳</span>
        Billetera
      </button>
      <button class="nav-item">
        <span class="icon">👤</span>
        Tú
      </button>
    </nav>
  `,
  styles: [
    `
      .footer-nav {
        display: flex;
        justify-content: space-around;
        background-color: white;
        padding: 12px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
      }
      .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        background: none;
        border: none;
        color: #666;
        font-size: 12px;
        cursor: pointer;
      }
      .nav-item.active {
        color: #5829bd;
      }
      .icon {
        font-size: 24px;
      }
    `,
  ],
})
export class FooterNavComponent {}
