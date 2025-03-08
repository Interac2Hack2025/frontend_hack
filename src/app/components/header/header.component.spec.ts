import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="user-info">
        <div class="avatar">MB</div>
        <h1>Hola Mike 👋</h1>
      </div>
      <div class="actions">
        <button class="icon-button">
          <span class="notification-badge"></span>
          🔔
        </button>
        <button class="icon-button">🎧</button>
      </div>
    </header>
  `,
  styles: [
    `
      .header {
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .user-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #e0e0ff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }
      .actions {
        display: flex;
        gap: 12px;
      }
      .icon-button {
        position: relative;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
      }
      .notification-badge {
        position: absolute;
        top: 0;
        right: 0;
        width: 8px;
        height: 8px;
        background-color: red;
        border-radius: 50%;
      }
    `,
  ],
})
export class HeaderComponent {}
