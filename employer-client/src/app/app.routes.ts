import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';

import { CompanyHomeComponent } from './components/company-home/company-home.component';

import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { NewJobComponent } from './components/new-job/new-job.component';

import { ApplicationListComponent } from './components/application-list/application-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
    },
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
        component: CompanyProfileComponent
    },
    {
        path: 'jobs',
        component: JobListComponent
    },
    {
        path: 'jobs/:jid',
        component: JobDetailComponent
    },
    {
        path: 'new-job',
        component: NewJobComponent
    },
    {
        path: 'applications/:jid',
        component: ApplicationListComponent
    },
    {
        path: 'student-detail/:sid',
        component: StudentDetailComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

export const routing = RouterModule.forRoot(routes);