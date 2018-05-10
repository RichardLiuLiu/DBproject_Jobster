import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  sid: string = this.auth.getSid();

  notifications: any;
  forwards: any;

  constructor(private router: Router,
              private auth: AuthService,
              private jobService: JobService) { }

  ngOnInit() {
    this.getJobNotifications(this.sid);
    this.getJobNoForwards(this.sid);
  }

  getJobNotifications(sid: string) {
    this.jobService.getJobNotifications(sid)
      .then(notifications => {
        this.notifications = notifications;
      });
  }

  getJobNoForwards(sid: string) {
    this.jobService.getJobForwards(sid)
      .then(forwards => {
        this.forwards = forwards;
      });
  }

  showNotificationDetail(jid: string, sid: string, time: string) {
    this.jobService.updateJobNotificationStatus(jid, sid, time)
      .then(res => {
        this.router.navigateByUrl('/job-detail/' + jid);
      });
  }

  showForwardDetail(jid: string, sender: string, receiver: string, time: string) {
    this.jobService.updateJobForwardStatus(jid, sender, receiver, time)
      .then(res => {
        this.router.navigateByUrl('/job-detail/' + jid);
      });
  }

}
