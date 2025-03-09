import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from '../../../../common/services/storage.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { HttpService } from '../../../../common/services/http.service';

interface Action {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-action-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'action-grid.component.html',
  providers: [HttpService, HttpClient],
})
export class ActionGridComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly httpService: HttpService
  ) {}

  buttonName!: string;
  actions: Action[] = [];

  getNameButton() {
    console.log('action grid', this.storageService.getItem('userinfo'));

    if (
      (this.storageService.getItem('userinfo') as { role: number }).role === 1
    ) {
      this.buttonName = 'Contrapago';
    } else if (
      (this.storageService.getItem('userinfo') as { role: number }).role === 2
    ) {
      this.buttonName = 'Generar contrapago';
    } else if (
      (this.storageService.getItem('userinfo') as { role: number }).role === 3
    ) {
      this.buttonName = 'Verificar contrapago';
    }

    this.actions = [
      { name: 'Transferir', icon: 'payments', color: '#4A90E2' },
      { name: 'Recargar', icon: 'credit_card', color: '#50C878' },
      { name: 'Cobrar', icon: 'calculate', color: '#FF5733' },
      { name: 'Metro de Quito', icon: 'train', color: '#FFD700' },
      { name: 'Invita y Gana', icon: 'celebration', color: '#8A2BE2' },
      { name: 'Deuna Jóvenes', icon: 'group', color: '#FF69B4' },
      { name: 'Verificar pago', icon: 'verified', color: '#32CD32' },
      {
        name: this.buttonName,
        icon: 'local_shipping',
        color: '#FF8C00',
      },
    ];
    return '';
  }

  onActionClick(action: Action) {
    console.log(
      'Acción seleccionada:',
      this.storageService.getItem('userinfo')
    );

    if (
      action.name === 'Contrapago' &&
      (this.storageService.getItem('userinfo') as { role: number })?.role === 1
    ) {
      this.router.navigate(['/delivery/details']);
    }

    if (
      action.name === 'Generar contrapago' &&
      (this.storageService.getItem('userinfo') as { role: number })?.role === 2
    ) {
      this.router.navigate(['/delivery/create']);
    }

    if (
      action.name === 'Verificar contrapago' &&
      (this.storageService.getItem('userinfo') as { role: number })?.role === 3
    ) {
      this.router.navigate(['/delivery']);
    }
  }

  getUserInfo() {
    this.httpService
      .get('user/me')
      .pipe(map((response: any) => response))
      .subscribe((data) => {
        if (data) {
          console.log('User info header:', data);
          this.storageService.setItemUserInfo('userinfo', data);
          const name = this.storageService.getItem('userinfo');
          if (name) {
            this.getNameButton();
          }
        }
      });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }
}
