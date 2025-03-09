import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../common/services/http.service';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  constructor(private readonly httpService: HttpService) {}

  buildForm() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
    });
  }

  getUserInfo(event: any) {
    console.log('this.formGroup.value();', this.formLogin.value);
    console.log('getUserInfo', event);
    this.httpService.get('user/types').subscribe((data) => {
      console.log('data', data);
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }
}
