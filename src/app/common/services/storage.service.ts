import { Injectable } from '@angular/core';
import { IUserInfo } from '../../pages/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setItemUserInfo(key: string, value: IUserInfo): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  setItemToken(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    console.log('data', data);
    return data ? (JSON.parse(data) as T) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
