import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';
import { ConnectionService } from '../../services/connection.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: any;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCompanySearchList(params['keyword']);
    });
  }

  getCompanySearchList(keyword: string) {
    this.searchService.findCompaniesByKeyword(keyword)
      .then(companies => {
        this.companies = companies;
      });
  }

}
