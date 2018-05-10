import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessageService {

  private _cnt = 0;
  private _newMessageCount = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) { }

  getMessageList(sid1: string, sid2: string): Promise<any> {
    return this.httpClient.get(`api/v1/messages/${sid1}/${sid2}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  sendMessage(sender: string, receiver: string, content: string): Promise<any> {
    const body = {
      sender: sender,
      receiver: receiver,
      content: content
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/messages`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  updateMessageStatus(sender: string, receiver: string, mtime: string): Promise<any> {
    const body = {
      sender: sender,
      receiver: receiver,
      mtime: mtime
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.patch(`api/v1/messages`, body, options)
      .toPromise()
      .then((res: any) => {
        this._cnt = this._cnt - 1;
        this._newMessageCount.next(this._cnt);
      })
      .catch(this.handleError);
  }

  getNewMessageList(receiver: string): Promise<any> {
    return this.httpClient.get(`api/v1/new-messages/${receiver}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);   
  }

  getNewMessageCount(receiver: string): Observable<any> {
    this.httpClient.get(`api/v1/new-messages/${receiver}`)
      .toPromise()
      .then((res: any) => {
        this._cnt = res.length;
        this._newMessageCount.next(this._cnt);
      })
      .catch(this.handleError);

    return this._newMessageCount.asObservable();    
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
