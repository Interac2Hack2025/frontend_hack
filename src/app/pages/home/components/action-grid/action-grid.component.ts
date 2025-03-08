import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-grid.component.html',
  styleUrl: './action-grid.component.scss',
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
