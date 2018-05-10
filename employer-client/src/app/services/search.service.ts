import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  findCompanyById(cid: string): Promise<any> {
    return this.httpClient.get(`api/v1/companies/${cid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  findStudentById(sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/students/${sid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  findStudentsByKeyword(keyword: string): Promise<any> {
    const body = { keyword : keyword };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/students/keywords`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  findJobById(jid: string): Promise<any> {
    return this.httpClient.get(`api/v1/jobs/${jid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  updateCompanyProfile(companyInfo: any): Promise<any> {
    const body = {
      cid: companyInfo.cid,
      cname: companyInfo.cname,
      clocation: companyInfo.clocation,
      industry: companyInfo.industry
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/companies`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getResumeById(sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/resumes/${sid}`, {'responseType': 'text'})
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
