import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: string = "";

  sid: string = "";
  sname: string = "";
  password: string = "";
  confirm_password: string = "";

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }

  submitForm() {  
    this.error = "";
    this.checkSubmit();

    if (!this.error) {
      this.auth.signUp(this.sname, this.password).then(res => {
        if (res.error) {
          this.error = res.error;
        } else {
          this.sid = res.sid;
        }
        if (!this.error) { 
          $('#signup-success').modal('show');
        }
      });
    }
  }

  checkSubmit() {
    if (!this.sname || !this.password || !this.confirm_password) {
      this.error = "Please fill in all blanks!";
    } else if (this.password.length < 6) {
      this.error = "Password should be no less than 6 characters!";
    } else if (this.password !== this.confirm_password) {
      this.error = "Passwords don't match!";
    }
  }

}
