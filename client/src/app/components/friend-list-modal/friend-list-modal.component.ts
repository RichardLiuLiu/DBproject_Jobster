import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ConnectionService } from '../../services/connection.service';
import { JobService } from '../../services/job.service';

declare var $: any;

@Component({
  selector: 'app-friend-list-modal',
  templateUrl: './friend-list-modal.component.html',
  styleUrls: ['./friend-list-modal.component.css']
})
export class FriendListModalComponent implements OnInit {

  @Input() jid: string;

  sender: string = this.auth.getSid();

  students: any;

  constructor(private auth: AuthService,
              private connectionService: ConnectionService,
              private jobService: JobService) { }

  ngOnInit() {
    this.getFriendList(this.sender);
  }

  getFriendList(sid: string) {
    this.connectionService.getFriendList(sid)
      .then(students => {
        this.students = students;
      });
  }

  forwardJob(jid: string, sender: string, receiver: string) {
    this.jobService.forwardJob(jid, sender, receiver)
      .then(res => $('#friend-list-modal').modal('toggle'));
  }

}
