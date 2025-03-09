import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Action {
  name: string;
  icon: string;
  color: string;
  click?: () => void;
}

@Component({
  selector: 'app-action-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'action-grid.component.html',
})
export class ActionGridComponent {
  constructor(private readonly router: Router) {}

  actions: Action[] = [
    { name: 'Transferir', icon: 'payments', color: '#4A90E2' },
    { name: 'Recargar', icon: 'credit_card', color: '#50C878' },
    { name: 'Cobrar', icon: 'calculate', color: '#FF5733' },
    { name: 'Metro de Quito', icon: 'train', color: '#FFD700' },
    { name: 'Invita y Gana', icon: 'celebration', color: '#8A2BE2' },
    { name: 'Deuna Jóvenes', icon: 'group', color: '#FF69B4' },
    { name: 'Verificar pago', icon: 'verified', color: '#32CD32' },
    {
      name: 'Contraentrega',
      icon: 'local_shipping',
      color: '#FF8C00',
    },
  ];

  onActionClick(action: Action) {
    console.log('Acción seleccionada:', action.name);
    if (action.name === 'Contraentrega') {
      this.router.navigate(['/delivery/details']);
    }
  }
}
