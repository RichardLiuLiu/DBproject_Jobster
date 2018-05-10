import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sid: string = this.auth.getSid();

  searchInput: string = "";

  subscriptionMessageNum: Subscription;
  msg_num: number = 0;

  constructor(private router: Router,
              private auth: AuthService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.getNewMessageNum(this.sid);
  }

  ngOnDestory() {
    this.subscriptionMessageNum.unsubscribe();
  }

  getNewMessageNum(me: string) {
    this.messageService.getNewMessageCount(me)
      .subscribe(cnt => {
        this.msg_num = cnt;
      });
  }

  logout() {
    this.auth.deauthenticateUser();
    window.location.reload();
  }

}
