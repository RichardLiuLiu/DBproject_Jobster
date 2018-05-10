import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';
import { SearchService } from '../../services/search.service';

declare var $: any;

const DEFAULT_JOBINFO = Object.freeze({
  cid: "",
  jlocation: "",
  title: "",
  salary: "0",
  academicbar: "BS, MS, PhD",
  majorbar: "",
  desc: ""
});

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {

  error: string = "";
  degrees: string[] = ['BS, MS, PhD', 'MS, PhD', 'PhD'];

  cid: string = this.auth.getCid();
  jid: string = "";

  // jobInfo = {
  //   cid: "",
  //   jlocation: "",
  //   title: "",
  //   salary: "",
  //   academicbar: "",
  //   majorbar: "",
  //   desc: ""
  // };

  jobInfo = Object.assign({}, DEFAULT_JOBINFO);

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private auth: AuthService,
              private searchService: SearchService,
              private jobService: JobService) { }

  ngOnInit() {
  }

  postJob(jobInfo: any) {
    jobInfo.cid = this.cid;
    this.jobService.postJob(jobInfo)
      .then(res => {
        if (res.error) {
          this.error = res.error;
        } else {
          this.jid = res.jid;
        }
        if (!this.error) { 
          $('#new-job-success').modal('show');
        }
      });
    this.jobInfo = Object.assign({}, DEFAULT_JOBINFO);
  }

  backToLastPage() {
    this._location.back();
  }

}
