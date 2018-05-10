import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { send } from 'q';

@Injectable()
export class JobService {

  constructor(private httpClient: HttpClient) { }

  getApplicationList(sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/applications-of-student/${sid}`)
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

  applyForJob(jid: string, sid: string): Promise<any> {
    const body = {
      jid: jid,
      sid: sid
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/applications`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getJobNotifications(sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/job-notifications/${sid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getJobForwards(sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/job-forwards/${sid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  updateJobNotificationStatus(jid: string, sid: string, jntime: string): Promise<any> {
    const body = {
      jid: jid,
      sid: sid,
      jntime: jntime
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.patch(`api/v1/job-notifications`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  updateJobForwardStatus(jid: string, sender: string, receiver: string, jftime: string): Promise<any> {
    const body = {
      jid: jid,
      sender: sender,
      receiver: receiver,
      jftime: jftime
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.patch(`api/v1/job-forwards`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  forwardJob(jid: string, sender: string, receiver: string): Promise<any> {
    const body = {
      jid: jid,
      sender: sender,
      receiver: receiver
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/job-forwards`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
