import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  sid: string = this.auth.getSid();

  students: any;

  constructor(private auth: AuthService,
              private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getFriendList(this.sid);
  }

  getFriendList(sid: string) {
    this.connectionService.getFriendList(sid)
      .then(students => {
        this.students = students;
      });
  }

}
