import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: any;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJobSearchList(params['keyword']);
    });
  }

  getJobSearchList(keyword: string) {
    this.searchService.findJobsByKeyword(keyword)
      .then(jobs => {
        this.jobs = jobs;
      });
  }

}
