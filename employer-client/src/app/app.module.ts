import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routes';

import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';
import { JobService } from './services/job.service';


import { AppComponent } from './app.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupSuccessComponent } from './components/signup-success/signup-success.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { NewJobComponent } from './components/new-job/new-job.component';
import { NewJobSuccessComponent } from './components/new-job-success/new-job-success.component';
import { PushFilterModalComponent } from './components/push-filter-modal/push-filter-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyHomeComponent,
    SignupComponent,
    SignupSuccessComponent,
    LoginComponent,
    NavbarComponent,
    JobListComponent,
    JobDetailComponent,
    CompanyProfileComponent,
    ApplicationListComponent,
    StudentDetailComponent,
    NewJobComponent,
    NewJobSuccessComponent,
    PushFilterModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
  ],
  providers: [
    AuthService,
    SearchService,
    JobService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
