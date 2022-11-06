import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  Autenticar(user: IUser){
    return this.httpClient.post<IUser>(`${API_PATH}user/login`, user).toPromise();
  }
}
