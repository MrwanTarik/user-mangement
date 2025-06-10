import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _HttpClient: HttpClient) {}

  usersList(): Observable<any> {
    return this._HttpClient.get('https://dummyjson.com/users');
  }
  addUser(data: any): Observable<any> {
    return this._HttpClient.post('https://dummyjson.com/users/add', data);
  }
  getCurrentUser(): Observable<any> {
    return this._HttpClient.get(
      `https://dummyjson.com/users/${localStorage.getItem('id')}`
    );
  }
  getUserById(id: number): Observable<any> {
    return this._HttpClient.get(`https://dummyjson.com/users/${id}`);
  }
  deleteUser(id: number): Observable<any> {
    return this._HttpClient.delete(`https://dummyjson.com/users/${id}`);
  }
  updateUser(id: number, data: any): Observable<any> {
    return this._HttpClient.put(`https://dummyjson.com/users/${id}`, data);
  }
}
