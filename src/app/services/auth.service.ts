import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';

@Injectable()
export class AuthService {

  private BASE_URL = 'http://localhost:5000/auth';
  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) { }

  login(user: User): Promise<any> {
    const url = `${this.BASE_URL}`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

}
