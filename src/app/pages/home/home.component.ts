import { Component } from '@angular/core';
import { FooterNavComponent } from '../shared/footer-nav/footer-nav.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ActionGridComponent } from './components/action-grid/action-grid.component';
import { PagosComponent } from './components/action-pagos/action-pagos.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';


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
