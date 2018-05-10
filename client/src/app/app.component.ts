import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Jobster-Student';

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    if (!this.auth.isUserAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
  }

}
