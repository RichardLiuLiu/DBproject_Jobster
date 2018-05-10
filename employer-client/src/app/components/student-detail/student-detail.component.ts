import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  cid: string = this.auth.getCid();
  sid: string = "";

  studentInfo: any;
  resume: any;

  isApplicant: boolean = false;

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private auth: AuthService,
              private searchService: SearchService,
              private jobService: JobService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sid = params['sid'];
      this.getStudentInfo(this.sid);
      this.getResume(this.sid);
      this.checkApplicant(this.cid, this.sid);
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

  checkApplicant(cid: string, sid: string) {
    this.jobService.checkApplicant(sid, cid)
      .then(res => {
        if (res[0].cnt != 0) {
          this.isApplicant = true;
        }      
      });
  }

  backToLastPage() {
    this._location.back();
  }

}
