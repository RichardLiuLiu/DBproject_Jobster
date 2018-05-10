import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  degrees: string[] = ['BS, MS, PhD', 'MS, PhD', 'PhD'];

  cid: string = this.auth.getCid();
  jid: string = "";

  jobInfo = {
    jid: "",
    cid: "",
    jlocation: "",
    title: "",
    salary: "",
    academicbar: "",
    majorbar: "",
    desc: ""
  };

  isJobPoster: boolean = false;

  constructor(private _location: Location,
              private router: Router,
              private route: ActivatedRoute,
              private auth: AuthService,
              private searchService: SearchService,
              private jobService: JobService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jid = params['jid'];
      this.getJobInfo(this.jid);
    });  
  }

  getJobInfo(jid: string) {
    this.searchService.findJobById(jid)
      .then(jobInfo => {
        this.jobInfo.jid = jobInfo[0]['jid'];
        this.jobInfo.cid = jobInfo[0]['cid'];
        this.jobInfo.jlocation = jobInfo[0]['jlocation'];
        this.jobInfo.title = jobInfo[0]['title'];
        this.jobInfo.salary = jobInfo[0]['salary'];
        this.jobInfo.academicbar = jobInfo[0]['academicbar'];
        this.jobInfo.majorbar = jobInfo[0]['majorbar'];
        this.jobInfo.desc = jobInfo[0]['desc'];

        if (this.cid === this.jobInfo.cid) {
          this.isJobPoster = true;
        }
      });  
  }

  updateJobInfo(jobInfo: any) {
    this.jobService.updateJobInfo(jobInfo)
      .then(res => window.location.reload());
  }

  backToLastPage() {
    this._location.back();
  }

}
