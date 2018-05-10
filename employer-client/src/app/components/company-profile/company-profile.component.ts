import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  cid: string = this.auth.getCid();

  companyInfo = {
    cid: "",
    cname: "",
    clocation: "",
    industry: ""
  };

  constructor(private _location: Location,
              private auth: AuthService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.getCompanyProfile(this.cid);
  }

  getCompanyProfile(cid: string) {
    this.searchService.findCompanyById(cid)
      .then(companyInfo => {
        this.companyInfo.cid = companyInfo[0]['cid'];
        this.companyInfo.cname = companyInfo[0]['cname'];
        this.companyInfo.clocation = companyInfo[0]['clocation'];
        this.companyInfo.industry = companyInfo[0]['industry'];
      });
  }

  updateCompanyProfile(companyInfo: any) {
    this.searchService.updateCompanyProfile(companyInfo)
      .then(res => window.location.reload());
  }

}
