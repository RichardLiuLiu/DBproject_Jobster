import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = "";

  sid: string = "";
  password: string = "";

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.isUserAuthenticated()) {
      this.router.navigateByUrl('/');
    }
  }

  submitForm() {
    this.auth.logIn(this.sid, this.password).then(res => {
      if (res.error) {
        this.error = res.error;
      } else {
        this.auth.authenticateUser(res.token,res.sid);
        this.router.navigateByUrl('/');
      }
    });
  }

}
