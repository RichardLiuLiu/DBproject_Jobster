import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
    // this.authenticateUser('stoken', 's0001');
  }

  authenticateUser(token: string, sid: string) {
    localStorage.setItem('stoken', token);
    localStorage.setItem('sid', sid);
  }

  isUserAuthenticated(): boolean {
      return localStorage.getItem('stoken') !== null;
  }

  deauthenticateUser() {
      localStorage.removeItem('stoken');
      localStorage.removeItem('sid');
  }

  getToken(): string {
      return localStorage.getItem('stoken');
  }

  getSid(): string {
      return localStorage.getItem('sid');
    //   return 's0001';
  }

  signUp(sname: string, password: string) {
    const body = {
        name: sname,
        password: password,
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/student-signup`, body, options)
        .toPromise()
        .then((res: any) => res)
        .catch(this.handleError);
  }

  logIn(sid: string, password: string) {
    const body = {
        sid: sid,
        password: password,
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/student-login`, body, options)
        .toPromise()
        .then((res: any) => res)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}