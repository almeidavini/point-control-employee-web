import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { SignInData } from '../interfaces/SignInData';
import { SignInDataResponse } from '../interfaces/SignInDataResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public login({ cpf, password }: SignInData): Observable<SignInDataResponse> {
    return this.http.post<SignInDataResponse>(`${API_PATH}user/login`, {
      cpf,
      password
    });
  }
}
