import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterNavComponent } from '../shared/footer-nav/footer-nav.component';

@Component({
  selector: 'app-delivery-create',
  standalone: true,
  imports: [
    CommonModule,
    FooterNavComponent,
  ],
  templateUrl: './delivery-create.component.html',
})
export class DeliveryCreateComponent {
  abrirNuevaPagina() {
    const url = "https://deuna.app/mapa?ubicacion=-0.208903,-78.501191,19z";
    window.open(url, '_self');
  }
}
