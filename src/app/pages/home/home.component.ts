import { Component } from '@angular/core';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ActionGridComponent } from './components/action-grid/action-grid.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component.spec';
=======
import { HeaderComponent } from './components/header/header.component';
>>>>>>> 1e3d0bdf6bf43cf6615a73ba69f8bae1b06e984f

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BalanceCardComponent,
    ActionGridComponent,
    ActionButtonsComponent,
    FooterNavComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
