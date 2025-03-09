import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../common/services/storage.service';
import { IUserInfo } from '../../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private readonly storageService: StorageService) {}

  userInfo!: IUserInfo;

  getUserInfo() {
    this.userInfo = this.storageService.getItem('userInfo') as IUserInfo;
  }

  ngOnInit(): void {
    this.getUserInfo();
  }
}
