import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-company-job-list',
  templateUrl: './company-job-list.component.html',
  styleUrls: ['./company-job-list.component.css']
})
export class CompanyJobListComponent implements OnInit {

  jobs: any;
  cid: string = "";

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private auth: AuthService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cid = params['cid'];
      this.getCompanyJobList(this.cid);
    });
  }

  getCompanyJobList(cid: string) {
    this.searchService.getJobList(cid)
      .then(jobs => {
        this.jobs = jobs;
      });
  }

  backToLastPage() {
    this._location.back();
  }

}
