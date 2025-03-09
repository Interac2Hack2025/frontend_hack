import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../../common/services/storage.service';

@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-card.component.html',
})
export class BalanceCardComponent {
  constructor(private readonly storageService: StorageService) {}
}
