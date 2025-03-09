import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../common/services/storage.service';
import { IUserInfo } from '../../login/login.component';
import { HttpService } from '../../../common/services/http.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  providers: [HttpService, HttpClient],
})
export class HeaderComponent implements OnInit {
  constructor(
    private readonly storageService: StorageService,
    private readonly httpService: HttpService,
    private readonly router: Router
  ) {}

  userInfo!: IUserInfo;

  getUserInfoName() {
    setTimeout(() => {
      this.userInfo = this.storageService.getItem('userinfo') as IUserInfo;
    }, 200);
    console.log('user info header newew', this.userInfo);
  }

  logout() {
    console.log('Cerrando sesión');
    this.storageService.removeItem('token');
    this.storageService.removeItem('userinfo');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.getUserInfoName();
  }
}
