import { Component } from '@angular/core';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ActionGridComponent } from './components/action-grid/action-grid.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { PagosComponent } from './components/action-pagos/action-pagos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BalanceCardComponent,
    ActionGridComponent,
    ActionButtonsComponent,
    FooterNavComponent,
    PagosComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
