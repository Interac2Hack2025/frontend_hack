import { Component, OnInit } from '@angular/core';
import { FooterNavComponent } from '../shared/footer-nav/footer-nav.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ActionGridComponent } from './components/action-grid/action-grid.component';
import { PagosComponent } from './components/action-pagos/action-pagos.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { IUserInfo } from '../login/login.component';
import { StorageService } from '../../common/services/storage.service';
import { map } from 'rxjs';
import { HttpService } from '../../common/services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BalanceCardComponent,
    ActionGridComponent,
    ActionButtonsComponent,
    FooterNavComponent,
    PagosComponent,
  ],
  providers: [HttpService, HttpClient],

  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private readonly storageService: StorageService,
    private readonly httpService: HttpService
  ) {}
}
