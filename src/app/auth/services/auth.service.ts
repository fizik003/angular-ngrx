import { LoginRequestInterface } from './../types/loginRequest.interface';
import { AuthResponseInterface } from './../types/authResponse.interface';
import { CurentUserInterface } from './../../shared/types/currentUser.interface';
import { Observable } from 'rxjs';
import { RegisterRequestInterface } from './../types/registerRequest.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser));
  }
}
