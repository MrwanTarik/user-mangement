import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  login(data: any): Observable<any> {
    return this._HttpClient.post('https://dummyjson.com/auth/login', data);
  }
}
