import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.css']
})
export class InvitationListComponent implements OnInit {

  receiver: string = this.auth.getSid();

  invitations: any;

  isFriend: boolean = false;

  constructor(private auth: AuthService,
              private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getInvitationList(this.receiver);
  }

  getInvitationList(sid: string) {
    this.connectionService.getInvitationList(sid)
      .then(invitations => {
        this.invitations = invitations;
      });
  }

  checkFriend(sender: string, receiver: string) {
    this.connectionService.getFriendList(sender)
      .then(friends => {
        for (let friend of friends) {
          if (friend['sid'] === receiver) {
            this.isFriend = true;
            break;
          }
        }
        this.isFriend = false;
      });
  }

  handleInvitation(sender: string, receiver: string, status: string) {
    this.checkFriend(sender, receiver);
    console.log(sender);
    if (this.isFriend) {
      window.alert("You are already connected!");
      this.connectionService.handleFriendRequest(sender, receiver, 'declined')
        .then(res => window.location.reload());
    } else {
      this.connectionService.handleFriendRequest(sender, receiver, status)
        .then(res => window.location.reload());
    }
  }

}
