import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';
import { JobService } from '../../services/job.service';

declare var $: any;

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  sid: string = this.auth.getSid();
  jid: string = "";

  jobInfo: any;

  appStatus: string = "";
  hasApplied: boolean = false;

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private auth: AuthService,
              private jobService: JobService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jid = params['jid'];
      this.getJobInfo(this.jid);
      this.checkApplication(this.jid, this.sid);
    });
  }

  getJobInfo(jid: string) {
    this.searchService.findJobById(jid)
      .then(jobInfo => {
        this.jobInfo = jobInfo;
      });
  }

  checkApplication(jid: string, sid: string) {
    this.jobService.getApplicationList(sid)
      .then(applications => {
        for (let application of applications) {
          if (application['jid'] === jid) {
            this.hasApplied = true;
            this.getApplicationStatus(jid, sid);
            break;
          }
        }
      });
  }
  
  applyForJob(jid: string, sid: string) {
    this.jobService.applyForJob(jid, sid)
      .then(res => window.location.reload());
  }

  getApplicationStatus(jid: string, sid: string) {
    this.jobService.getApplication(jid, sid)
      .then(applications => {
        for (let application of applications) {
          this.appStatus = application['appstatus'];
        }
      });
  }

  showFriendList(jid: string) {
    $('#friend-list-modal').modal('show');
  }

  backToLastPage() {
    this._location.back();
  }

}
