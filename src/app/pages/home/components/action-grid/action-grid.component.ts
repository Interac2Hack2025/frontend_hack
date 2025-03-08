import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Action {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-action-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-4 gap-2 py-4 max-w-[360px] mx-auto">
      <div *ngFor="let action of actions">
        <div
          class="w-10 h-10 bg-white rounded-xl items-center justify-center shadow-sm grid grid-cols-4"
        >
          <img
            width="100px"
            [src]="action.icon"
            [alt]="action.name"
            class="w-5 h-5 object-contain max-w-[20px] max-h-[20px]"
          />
        </div>
        <span class="text-xs">{{ action.name }}</span>
      </div>
    </div>
  `,
})
export class ActionGridComponent {
  actions: Action[] = [
    { name: 'Transferir', icon: 'assets/money.svg' },
    { name: 'Recargar', icon: 'assets/wallet.svg' },
    { name: 'Cobrar', icon: 'assets/calculator.svg' },
    { name: 'Metro de Quito', icon: 'assets/metro.svg' },
    { name: 'Invita y Gana', icon: 'assets/gift.svg' },
    { name: 'Deuna Jóvenes', icon: 'assets/man.svg' },
    { name: 'Verificar pago', icon: 'assets/shield-check.svg' },
  ];
}
