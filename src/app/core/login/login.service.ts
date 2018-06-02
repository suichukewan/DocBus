import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import  {Login}  from '../login/login'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  get serviceEndpoint() {
    return `${environment.serviceEndpoint}/Authorization`;
  }

  get clientId() {
    let clientId = undefined;

    if (environment.clientId) {
      clientId = environment.clientId;
    }

    return clientId;
  }

  constructor(
    private http: HttpClient,
  ) { }

  login(useraccount: string, password: string) {
    const params: { [param: string]: any } = {
      useraccount,
      password
    };

    if (this.clientId) {
      params.client_id = this.clientId;
    }

    return this.http.get<Login>(`${this.serviceEndpoint}/LoginUser`, {
      params: params

    });
  }
}
