import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) { }

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

  findCompanyById(cid: string): Promise<any> {
    return this.httpClient.get(`api/v1/companies/${cid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  findCompaniesByKeyword(keyword: string): Promise<any> {
    const body = { keyword : keyword };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/companies/keywords`, body, options)
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

  findJobsByKeyword(keyword: string): Promise<any> {
    const body = { keyword : keyword };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/jobs/keywords`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  updateStudentProfile(studentInfo: any): Promise<any> {
    const body = {
      sid: studentInfo.sid,
      sname: studentInfo.sname,
      university: studentInfo.university,
      degree: studentInfo.degree,
      major: studentInfo.major,
      gpa: studentInfo.gpa,
      skill: studentInfo.skill,
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/students`, body, options)
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

  updateResume(sid: string, resume: any): Promise<any> {
    const body = {
      resume: resume
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/resumes/${sid}`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getJobList(cid: string): Promise<any> {
    return this.httpClient.get(`api/v1/jobs-of-company/${cid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
