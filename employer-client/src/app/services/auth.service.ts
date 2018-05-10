import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  authenticateUser(token: string, cid: string) {
    localStorage.setItem('ctoken', token);
    localStorage.setItem('cid', cid);
  }

  isUserAuthenticated(): boolean {
      return localStorage.getItem('ctoken') !== null;
  }

  deauthenticateUser() {
      localStorage.removeItem('ctoken');
      localStorage.removeItem('cid');
  }

  getToken(): string {
      return localStorage.getItem('ctoken');
  }

  getCid(): string {
      return localStorage.getItem('cid');
  }

  signUp(cname: string, password: string) {
    const body = {
        name: cname,
        password: password,
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/company-signup`, body, options)
        .toPromise()
        .then((res: any) => res)
        .catch(this.handleError);
  }

  logIn(cid: string, password: string) {
    const body = {
        cid: cid,
        password: password,
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/company-login`, body, options)
        .toPromise()
        .then((res: any) => res)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}