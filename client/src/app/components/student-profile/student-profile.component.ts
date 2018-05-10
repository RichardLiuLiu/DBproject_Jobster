import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  degrees: string[] = ['BS', 'MS', 'PhD'];
  
  sid: string = this.auth.getSid();

  studentInfo = {
    sid: "",
    sname: "",
    university: "",
    degree: "",
    major: "",
    gpa: "",
    skill: "",
    resume: ""
  };

  resume: any;

  file: File;
  filestring: string;  

  constructor(private _location: Location,
              private auth: AuthService,
              private searchService: SearchService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.getStudentProfile(this.sid);
    this.getResume(this.sid);
  }

  getStudentProfile(sid: string) {
    this.searchService.findStudentById(sid)
      .then(studentInfo => {
        // this.studentInfo = Object.assign({}, studentInfo[0]);
        this.studentInfo.sid = studentInfo[0]['sid'];
        this.studentInfo.sname = studentInfo[0]['sname'];
        this.studentInfo.university = studentInfo[0]['university'];
        this.studentInfo.degree = studentInfo[0]['degree'];
        this.studentInfo.major = studentInfo[0]['major'];
        this.studentInfo.gpa = studentInfo[0]['gpa'];
        this.studentInfo.skill = studentInfo[0]['skill'];
        this.studentInfo.resume = studentInfo[0]['resume'];
      });
  }

  getFile(event){ 
    this.file = event.target.files[0];
    var reader = new FileReader(); 
    reader.onload = this._handleReaderLoaded.bind(this); 
    reader.readAsBinaryString(this.file);
  }

  _handleReaderLoaded(readerEvt) { 
    var binaryString = readerEvt.target.result;
    //this.filestring = btoa(binaryString);  // Converting binary string data.
     this.filestring = binaryString;  // Converting binary string data.
     this.updateResume(this.sid, this.filestring);
  }

  getResume(sid: string) {
    this.searchService.getResumeById(sid).then(
      resume => this.resume = resume
    );
  }

  updateStudentProfile(studentInfo: any) {
    this.searchService.updateStudentProfile(studentInfo)
      .then(res => window.location.reload());
  }

  updateResume(sid: string, filestring: string) {
    console.log(filestring);
    this.searchService.updateResume(sid, filestring)
      .then();
  }

}
