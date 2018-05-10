import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  sender: string = this.auth.getSid();
  receiver: string = "";

  studentInfo: any;
  resume: any;

  isFriend: boolean = false;

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private auth: AuthService,
              private connectionService: ConnectionService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.receiver = params['sid'];
      this.getStudentInfo(this.receiver);
      this.getResume(this.receiver);
      this.checkFriend(this.sender, this.receiver);
    });
  }

  getStudentInfo(sid: string) {
    this.searchService.findStudentById(sid)
      .then(studentInfo => {
        this.studentInfo = studentInfo;
      });
  }

  getResume(sid: string) {
    this.searchService.getResumeById(sid).then(
      resume => this.resume = resume
    );
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
      });
  }
  
  sendFriendRequest(sender: string, receiver: string) {
    this.connectionService.sendFriendRequest(sender, receiver)
      .then(res => window.location.reload());
  }

  backToLastPage() {
    this._location.back();
  }

}
