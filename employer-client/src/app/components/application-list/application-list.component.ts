import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  status: string[] = ['undecided', 'selected', 'rejected'];

  cid: string = this.auth.getCid();
  jid: string = "";

  students: any;

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private auth: AuthService,
              private searchService: SearchService,
              private jobService: JobService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jid = params['jid'];
      this.getApplicationList(this.jid);
    });    
  }

  getApplicationList(jid: string) {
    this.jobService.getApplicationList(jid)
      .then(students => {
        this.students = students;
      });
  }

  handleApplication(jid: string, sid: string, appstatus: string) {
    console.log(this.students)
    this.jobService.handleApplication(jid, sid, appstatus)
      .then(res => window.location.reload());  
  }

  backToLastPage() {
    this._location.back();
  }

}
