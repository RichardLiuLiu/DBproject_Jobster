import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  sid: string = this.auth.getSid();

  applications: any;

  constructor(private auth: AuthService,
              private jobhService: JobService) { }

  ngOnInit() {
    this.getApplicationList(this.sid);
  }

  getApplicationList(sid: string) {
    this.jobhService.getApplicationList(sid)
      .then(applications => {
        this.applications = applications;
      });
  }

}
