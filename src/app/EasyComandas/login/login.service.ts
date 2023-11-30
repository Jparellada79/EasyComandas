import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../environments/endpoints';
import { Observable } from 'rxjs';

interface AuthToken {
  rol: number;
  token: string;
  foto:string;
  nombre:string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private urlComanda: string;
  constructor(private http: HttpClient) {
    this.urlComanda = 'http://localhost:8000' + endpoints.iniciarSesion;
    }

    login(usuario: string, password: string): Observable<AuthToken> {   
      return this.http.post<AuthToken>(this.urlComanda, { usuario, password })
   }
  }

