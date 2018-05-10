import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { FollowingListComponent } from './components/following-list/following-list.component';

import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { CompanyJobListComponent } from './components/company-job-list/company-job-list.component';

import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';

import { MessageListComponent } from './components/message-list/message-list.component';
import { NewMessageListComponent } from './components/new-message-list/new-message-list.component';


const routes: Routes = [
    // {
    //     path: '',
    //     component: BaseComponent,
    //     pathMatch: 'full'
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'profile',
        component: StudentProfileComponent
    },
    {
        path: '',
        component: StudentHomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'student-search-list/:keyword',
        component: StudentListComponent
    },
    {
        path: 'company-search-list/:keyword',
        component: CompanyListComponent
    },
    {
        path: 'job-search-list/:keyword',
        component: JobListComponent
    },
    {
        path: 'friends',
        component: FriendListComponent
    },
    {
        path: 'followings',
        component: FollowingListComponent
    },
    {
        path: 'company-detail/:cid',
        component: CompanyDetailComponent
    },
    {
        path: 'job-list/:cid',
        component: CompanyJobListComponent
    },
    {
        path: 'student-detail/:sid',
        component: StudentDetailComponent
    },
    {
        path: 'job-detail/:jid',
        component: JobDetailComponent
    },
    {
        path: 'invitations',
        component: InvitationListComponent
    },
    {
        path: 'applications',
        component: ApplicationListComponent
    },
    {
        path: 'messages/:sid',
        component: MessageListComponent
    },
    {
        path: 'new-messages',
        component: NewMessageListComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

export const routing = RouterModule.forRoot(routes);