import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class JobService {

  constructor(private httpClient: HttpClient) { }

  getJobList(cid: string): Promise<any> {
    return this.httpClient.get(`api/v1/jobs-of-company/${cid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getApplicationList(jid: string): Promise<any> {
    return this.httpClient.get(`api/v1/applications-of-job/${jid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getApplication(jid: string, sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/applications/${jid}/${sid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  handleApplication(jid: string, sid: string, status: string): Promise<any> {
    const body = {
      jid: jid,
      sid: sid,
      status: status
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.patch(`api/v1/applications`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  postJob(jobInfo: any): Promise<any> {
    const body = {
      cid: jobInfo.cid,
      jlocation: jobInfo.jlocation,
      title: jobInfo.title,
      salary: jobInfo.salary,
      academicbar: jobInfo.academicbar,
      majorbar: jobInfo.majorbar,
      desc: jobInfo.desc
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/jobs`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  updateJobInfo(jobInfo: any): Promise<any> {
    const body = {
      jid: jobInfo.jid,
      jlocation: jobInfo.jlocation,
      title: jobInfo.title,
      salary: jobInfo.salary,
      academicbar: jobInfo.academicbar,
      majorbar: jobInfo.majorbar,
      desc: jobInfo.desc
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.patch(`api/v1/jobs`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  sendJobNotifications(jid: string, filter: any): Promise<any> {
    const body = {
      jid: jid,
      university: filter.university,
      degree: filter.degree,
      major: filter.major,
      gpa: filter.gpa,
      skill: filter.skill,
      keyword: filter.keyword
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/job-notifications`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  checkApplicant(sid: string, cid: string): Promise<any> {
    return this.httpClient.get(`api/v1/check-applicant/${sid}/${cid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
