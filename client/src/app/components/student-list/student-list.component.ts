import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  sid: string = this.auth.getSid();

  students: any;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getStudentSearchList(params['keyword']);
    });
  }

  getStudentSearchList(keyword: string) {
    this.searchService.findStudentsByKeyword(keyword)
      .then(students => {
        this.students = students;
      });
  }

}
