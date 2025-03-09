import { Component, Inject, inject, OnInit, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../common/services/http.service';
import { Router } from '@angular/router';
import { StorageService } from '../../common/services/storage.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface IUserInfo {
  name: string;
  email: string;
  role: number;
}

export interface IUserToken {
  access_token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  providers: [HttpService, HttpClient],
  imports: [ReactiveFormsModule, FormsModule],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private httpService: HttpService = inject(HttpService),
    private router: Router = inject(Router),
    private storageService: StorageService = inject(StorageService),
    private snackBar: MatSnackBar = inject(MatSnackBar)
  ) {}

  buildForm() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  getAuth() {
    this.httpService
      .post<{ access_token: string; token_type: string }>(
        'user/auth',
        this.formLogin.value
      )
      .pipe(map((response) => response))
      .subscribe(({ access_token }) => {
        if (access_token) {
          this.storageService.setItemToken('token', access_token);
          this.feedbackUserAuth();
          this.router.navigate(['/home']);
        }
      });
  }

  getUserInfo() {
    this.httpService
      .get('user/me')
      .pipe(map((response: any) => response))
      .subscribe((data) => {
        if (data) {
          console.log('User info header:', data);
          this.storageService.setItemUserInfo('userinfo', data);
        }
      });
  }

  feedbackUserAuthError() {
    this.snackBar.open('Autenticación fallida!', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  feedbackUserAuth() {
    this.snackBar.open('Autenticación exitosa!', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }
}
