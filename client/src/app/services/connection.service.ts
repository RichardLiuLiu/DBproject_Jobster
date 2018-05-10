import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class ConnectionService {

  constructor(private httpClient: HttpClient) { }

  sendFriendRequest(sender: string, receiver: string): Promise<any> {
    const body = {
      sender: sender,
      receiver: receiver,
      status: "awaiting"
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/invitations`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  handleFriendRequest(sender: string, receiver: string, status: string): Promise<any> {
    const body = {
      sender: sender,
      receiver: receiver,
      status: status
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/invitations`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  followCompany(sid: string, cid: string): Promise<any> {
    const body = {
      sid: sid,
      cid: cid
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/followings`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getFriendList(sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/friends/${sid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getInvitationList(sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/invitations/${sid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getFollowingList(sid: string): Promise<any> {
    return this.httpClient.get(`api/v1/followings/${sid}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  unfollowCompany(sid: string, cid: string): Promise<any> {
    const body = {
      sid: sid,
      cid: cid
    };
    const options = { headers: new HttpHeaders({'Connect-Type': 'application/json'}) };
    return this.httpClient.patch(`api/v1/followings`, body, options)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
