import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.component.html',
  styleUrls: ['./following-list.component.css']
})
export class FollowingListComponent implements OnInit {

  sid: string = this.auth.getSid();

  companies: any;

  constructor(private auth: AuthService,
              private connectionService: ConnectionService) { }

  ngOnInit() {
      this.getFollowingList(this.sid);
  }

  getFollowingList(sid: string) {
    this.connectionService.getFollowingList(sid)
      .then(companies => {
        this.companies = companies;
      });
  }

}
