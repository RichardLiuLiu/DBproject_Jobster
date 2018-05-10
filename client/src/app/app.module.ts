import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routes';

import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';
import { ConnectionService } from './services/connection.service';
import { JobService } from './services/job.service';
import { MessageService } from './services/message.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupSuccessComponent } from './components/signup-success/signup-success.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { FollowingListComponent } from './components/following-list/following-list.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { NewMessageListComponent } from './components/new-message-list/new-message-list.component';
import { FriendListModalComponent } from './components/friend-list-modal/friend-list-modal.component';
import { CompanyJobListComponent } from './components/company-job-list/company-job-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentListComponent,
    CompanyListComponent,
    StudentHomeComponent,
    BaseComponent,
    LoginComponent,
    CompanyDetailComponent,
    JobListComponent,
    StudentDetailComponent,
    InvitationListComponent,
    JobDetailComponent,
    ApplicationListComponent,
    StudentProfileComponent,
    SignupComponent,
    SignupSuccessComponent,
    FriendListComponent,
    FollowingListComponent,
    MessageListComponent,
    NewMessageListComponent,
    FriendListModalComponent,
    CompanyJobListComponent,
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
    ConnectionService,
    JobService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
