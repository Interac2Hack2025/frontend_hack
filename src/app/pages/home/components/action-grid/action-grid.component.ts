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
  templateUrl: "action-grid.component.html"
})
export class ActionGridComponent {
  onActionClick(action: Action) {
    console.log('Acción seleccionada:', action.name);
  }
  
  actions: Action[] = [
    { name: 'Transferir', icon: 'payments' },
    { name: 'Recargar', icon: 'credit_card' },
    { name: 'Cobrar', icon: 'calculate' },
    { name: 'Metro de Quito', icon: 'train' },
    { name: 'Invita y Gana', icon: 'celebration' },
    { name: 'Deuna Jóvenes', icon: 'group' },
    { name: 'Verificar pago', icon: 'verified' },
    { name: 'Contraentrega', icon: 'local_shipping' }
  ];
  
}
