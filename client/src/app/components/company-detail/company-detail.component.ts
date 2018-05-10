import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  sid: string = this.auth.getSid();
  cid: string = "";

  companyInfo: any;

  isFollowing: boolean = false;

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private auth: AuthService,
              private connectionService: ConnectionService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cid = params['cid'];
      this.getCompanyInfo(this.cid);
      this.checkFollowing(this.sid, this.cid);
    });
  }

  getCompanyInfo(cid: string) {
    this.searchService.findCompanyById(cid)
      .then(companyInfo => {
        this.companyInfo = companyInfo;
      });
  }

  checkFollowing(sid: string, cid: string) {
    this.connectionService.getFollowingList(sid)
      .then(followings => {
        for (let company of followings) {
          if (company['cid'] === cid) {
            this.isFollowing = true;
            break;
          }
        }
      });
  }

  followCompany(sid: string, cid: string) {
    this.connectionService.followCompany(sid, cid)
      .then((res) => window.location.reload());
  }

  unfollowCompany(sid: string, cid: string) {
    this.connectionService.unfollowCompany(sid, cid)
      .then((res) => window.location.reload());
  }

  backToLastPage() {
    this._location.back();
  }

}
