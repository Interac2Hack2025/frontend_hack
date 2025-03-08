import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid-container">
      <div class="grid-item" *ngFor="let action of actions">
        <div class="icon-container">
          <img [src]="action.icon" [alt]="action.name" />
        </div>
        <span>{{ action.name }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        padding: 16px 0;
      }
      .grid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 8px;
      }
      .icon-container {
        width: 48px;
        height: 48px;
        background-color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      img {
        width: 24px;
        height: 24px;
      }
    `,
  ],
})
export class ActionGridComponent {
  actions = [
    { name: 'Transferir', icon: 'assets/transfer.svg' },
    { name: 'Recargar', icon: 'assets/recharge.svg' },
    { name: 'Cobrar', icon: 'assets/collect.svg' },
    { name: 'Metro de Quito', icon: 'assets/metro.svg' },
    { name: 'Invita y Gana', icon: 'assets/invite.svg' },
    { name: 'Deuna Jóvenes', icon: 'assets/youth.svg' },
    { name: 'Verificar pago', icon: 'assets/verify.svg' },
  ];
}
