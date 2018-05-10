import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';

declare var $: any;

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  cid: string = this.auth.getCid();
  jid: string = "";

  jobs: any;

  constructor(private auth: AuthService,
              private jobService: JobService) { }

  ngOnInit() {
    this.getJobList(this.cid);
  }

  getJobList(cid: string) {
    this.jobService.getJobList(cid)
      .then(jobs => {
        this.jobs = jobs;
      });
  }

  showFilterModal(jid: string) {
    this.jid = jid;
    $('#push-filter-modal').modal('show');
  }

}
