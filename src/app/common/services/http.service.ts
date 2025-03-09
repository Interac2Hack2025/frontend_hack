import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private apiUrl(path: string): string {
    return `https://hackaton-backend.azurewebsites.net/${path}`;
  }

  post<T>(apiPath: string, data: unknown = {}): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        responseType: 'json',
      }),
    };

    return this.http.post<T>(this.apiUrl(apiPath), data, options);
  }

  get<T>(apiPath: string): Observable<T> {
    const rawToken = localStorage.getItem('token');
    const token = rawToken ? rawToken.replace(/"/g, '') : null;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        responseType: 'json',
        Authorization: `Bearer ${token}`,
      }),
    };

    console.log('apiPath', this.apiUrl(apiPath));

    return this.http.get<T>(this.apiUrl(apiPath), options);
  }
}
