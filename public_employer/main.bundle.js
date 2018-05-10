webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"auth.isUserAuthenticated()\"></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.title = 'Jobster-Company';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.auth.isUserAuthenticated()) {
            this.router.navigateByUrl('/login');
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var company_home_component_1 = __webpack_require__("./src/app/components/company-home/company-home.component.ts");
var signup_component_1 = __webpack_require__("./src/app/components/signup/signup.component.ts");
var signup_success_component_1 = __webpack_require__("./src/app/components/signup-success/signup-success.component.ts");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var job_list_component_1 = __webpack_require__("./src/app/components/job-list/job-list.component.ts");
var job_detail_component_1 = __webpack_require__("./src/app/components/job-detail/job-detail.component.ts");
var company_profile_component_1 = __webpack_require__("./src/app/components/company-profile/company-profile.component.ts");
var application_list_component_1 = __webpack_require__("./src/app/components/application-list/application-list.component.ts");
var student_detail_component_1 = __webpack_require__("./src/app/components/student-detail/student-detail.component.ts");
var new_job_component_1 = __webpack_require__("./src/app/components/new-job/new-job.component.ts");
var new_job_success_component_1 = __webpack_require__("./src/app/components/new-job-success/new-job-success.component.ts");
var push_filter_modal_component_1 = __webpack_require__("./src/app/components/push-filter-modal/push-filter-modal.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                company_home_component_1.CompanyHomeComponent,
                signup_component_1.SignupComponent,
                signup_success_component_1.SignupSuccessComponent,
                login_component_1.LoginComponent,
                navbar_component_1.NavbarComponent,
                job_list_component_1.JobListComponent,
                job_detail_component_1.JobDetailComponent,
                company_profile_component_1.CompanyProfileComponent,
                application_list_component_1.ApplicationListComponent,
                student_detail_component_1.StudentDetailComponent,
                new_job_component_1.NewJobComponent,
                new_job_success_component_1.NewJobSuccessComponent,
                push_filter_modal_component_1.PushFilterModalComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routes_1.routing,
            ],
            providers: [
                auth_service_1.AuthService,
                search_service_1.SearchService,
                job_service_1.JobService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var signup_component_1 = __webpack_require__("./src/app/components/signup/signup.component.ts");
var company_profile_component_1 = __webpack_require__("./src/app/components/company-profile/company-profile.component.ts");
var job_list_component_1 = __webpack_require__("./src/app/components/job-list/job-list.component.ts");
var job_detail_component_1 = __webpack_require__("./src/app/components/job-detail/job-detail.component.ts");
var new_job_component_1 = __webpack_require__("./src/app/components/new-job/new-job.component.ts");
var application_list_component_1 = __webpack_require__("./src/app/components/application-list/application-list.component.ts");
var student_detail_component_1 = __webpack_require__("./src/app/components/student-detail/student-detail.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'profile',
        component: company_profile_component_1.CompanyProfileComponent
    },
    {
        path: 'jobs',
        component: job_list_component_1.JobListComponent
    },
    {
        path: 'jobs/:jid',
        component: job_detail_component_1.JobDetailComponent
    },
    {
        path: 'new-job',
        component: new_job_component_1.NewJobComponent
    },
    {
        path: 'applications/:jid',
        component: application_list_component_1.ApplicationListComponent
    },
    {
        path: 'student-detail/:sid',
        component: student_detail_component_1.StudentDetailComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "./src/app/components/application-list/application-list.component.css":
/***/ (function(module, exports) {

module.exports = ".table-item {\n    font-size: 1.2em;\n}\n\n.table-column-name {\n    font-size: 1.5em;\n}\n\n.detail-button {\n    font-size: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/application-list/application-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>All Applications for Job: {{jid}}</h1>\n    \n  <table class=\"table\">\n      <thead>\n          <tr class=\"table-column-name\">\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">University</th>\n              <th scope=\"col\">Degree</th>\n              <th scope=\"col\">Major</th>\n              <th scope=\"col\">Skills</th>\n              <th scope=\"col\">Status</th>\n              <th></th>\n              <th></th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr class=\"table-item\" *ngFor=\"let student of students\">\n              <ng-container *ngIf=\"student.sid !== sid\">\n                  <td>{{student.sname}}</td>\n                  <td>{{student.university}}</td>\n                  <td>{{student.degree}}</td>\n                  <td>{{student.major}}</td>\n                  <td>{{student.skill}}</td>\n                  <td>\n                    <select class=\"form-control\" name=\"status\" style=\"font-size:1.0em\"\n                        [(ngModel)] = \"student.appstatus\">\n                        <option *ngFor = \"let s of status\" [value] = \"s\">\n                        {{s}}\n                        </option>\n                    </select>\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-info btn-sm detail-button pull-left\"\n                        (click)=\"handleApplication(jid, student.sid, student.appstatus)\">\n                        Confirm\n                    </button>\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-info btn-sm detail-button pull-right\"\n                        [routerLink]=\"['/student-detail', student.sid]\">\n                        Student Profile\n                    </button>\n                  </td>\n              </ng-container>\n          </tr>\n      </tbody>\n  </table>\n\n  <div class=\"footer-button\">\n    <button type=\"button\" class=\"btn btn-secondary btn-md pull-left\"\n        (click)=\"backToLastPage()\">\n        Back\n    </button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/application-list/application-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var ApplicationListComponent = /** @class */ (function () {
    function ApplicationListComponent(_location, route, auth, searchService, jobService) {
        this._location = _location;
        this.route = route;
        this.auth = auth;
        this.searchService = searchService;
        this.jobService = jobService;
        this.status = ['undecided', 'selected', 'rejected'];
        this.cid = this.auth.getCid();
        this.jid = "";
    }
    ApplicationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.jid = params['jid'];
            _this.getApplicationList(_this.jid);
        });
    };
    ApplicationListComponent.prototype.getApplicationList = function (jid) {
        var _this = this;
        this.jobService.getApplicationList(jid)
            .then(function (students) {
            _this.students = students;
        });
    };
    ApplicationListComponent.prototype.handleApplication = function (jid, sid, appstatus) {
        console.log(this.students);
        this.jobService.handleApplication(jid, sid, appstatus)
            .then(function (res) { return window.location.reload(); });
    };
    ApplicationListComponent.prototype.backToLastPage = function () {
        this._location.back();
    };
    ApplicationListComponent = __decorate([
        core_1.Component({
            selector: 'app-application-list',
            template: __webpack_require__("./src/app/components/application-list/application-list.component.html"),
            styles: [__webpack_require__("./src/app/components/application-list/application-list.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute,
            auth_service_1.AuthService,
            search_service_1.SearchService,
            job_service_1.JobService])
    ], ApplicationListComponent);
    return ApplicationListComponent;
}());
exports.ApplicationListComponent = ApplicationListComponent;


/***/ }),

/***/ "./src/app/components/company-home/company-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company-home/company-home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  company-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/company-home/company-home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CompanyHomeComponent = /** @class */ (function () {
    function CompanyHomeComponent() {
    }
    CompanyHomeComponent.prototype.ngOnInit = function () {
    };
    CompanyHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-company-home',
            template: __webpack_require__("./src/app/components/company-home/company-home.component.html"),
            styles: [__webpack_require__("./src/app/components/company-home/company-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyHomeComponent);
    return CompanyHomeComponent;
}());
exports.CompanyHomeComponent = CompanyHomeComponent;


/***/ }),

/***/ "./src/app/components/company-profile/company-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company-profile/company-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>My Profile</h2>\n  <div>\n    <form #formRef = \"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"companyId\">ID</label>\n        <p class=\"form-control-static\">{{companyInfo.cid}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"companyInfo.cname\" name = \"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"location\">Location</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"companyInfo.clocation\" name = \"location\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"industry\">Industry</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"companyInfo.industry\" name = \"industry\">\n      </div>\n\n    </form>\n  </div>\n\n  <div class=\"footer-button\">\n    <button type=\"button\" class=\"btn btn-info btn-md\"\n      (click) =\"updateCompanyProfile(companyInfo)\">\n      Update\n    </button>\n  </div>\n</div>\n\n<br/>\n<br/>"

/***/ }),

/***/ "./src/app/components/company-profile/company-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var CompanyProfileComponent = /** @class */ (function () {
    function CompanyProfileComponent(_location, auth, searchService) {
        this._location = _location;
        this.auth = auth;
        this.searchService = searchService;
        this.cid = this.auth.getCid();
        this.companyInfo = {
            cid: "",
            cname: "",
            clocation: "",
            industry: ""
        };
    }
    CompanyProfileComponent.prototype.ngOnInit = function () {
        this.getCompanyProfile(this.cid);
    };
    CompanyProfileComponent.prototype.getCompanyProfile = function (cid) {
        var _this = this;
        this.searchService.findCompanyById(cid)
            .then(function (companyInfo) {
            _this.companyInfo.cid = companyInfo[0]['cid'];
            _this.companyInfo.cname = companyInfo[0]['cname'];
            _this.companyInfo.clocation = companyInfo[0]['clocation'];
            _this.companyInfo.industry = companyInfo[0]['industry'];
        });
    };
    CompanyProfileComponent.prototype.updateCompanyProfile = function (companyInfo) {
        this.searchService.updateCompanyProfile(companyInfo)
            .then(function (res) { return window.location.reload(); });
    };
    CompanyProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-company-profile',
            template: __webpack_require__("./src/app/components/company-profile/company-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/company-profile/company-profile.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            auth_service_1.AuthService,
            search_service_1.SearchService])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());
exports.CompanyProfileComponent = CompanyProfileComponent;


/***/ }),

/***/ "./src/app/components/job-detail/job-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/job-detail/job-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isJobPoster\">\n  <h2>Job Detail</h2>\n  <div>\n    <form #formRef = \"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"jobId\">Job ID</label>\n        <p class=\"form-control-static\">{{jobInfo.jid}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"name\">Job Title</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.title\" name = \"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"location\">Location</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.jlocation\" name = \"location\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"salary\">Salary</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.salary\" name = \"salary\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"degree\">Degree Requirement</label> \n        <select class=\"form-control\" name=\"degree\"\n          [(ngModel)] = \"jobInfo.academicbar\">\n            <option *ngFor = \"let degree of degrees\" [value] = \"degree\">\n              {{degree}}\n            </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"majorbar\">Major Requirement</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.majorbar\" name = \"majorbar\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"desc\">Job Description</label>\n        <textarea name = \"desc\" id=\"desc\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.desc\" rows=\"3\">\n        </textarea>\n      </div>      \n\n    </form>\n  </div>\n\n  <div class=\"footer-button\">\n    <button type=\"button\" class=\"btn btn-info btn-md\"\n      (click) =\"updateJobInfo(jobInfo)\">\n      Update\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary btn-md pull-right\"\n      (click)=\"backToLastPage()\">\n      Back\n    </button>\n  </div>\n</div>\n\n<div class=\"container\" *ngIf=\"!isJobPoster\">\n  <h3>You are not the poster of this job!</h3>\n  <button type=\"button\" class=\"btn btn-secondary btn-md pull-right\"\n    (click)=\"backToLastPage()\">\n    Back\n  </button>\n</div>\n\n<br/>\n<br/>"

/***/ }),

/***/ "./src/app/components/job-detail/job-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var JobDetailComponent = /** @class */ (function () {
    function JobDetailComponent(_location, router, route, auth, searchService, jobService) {
        this._location = _location;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.searchService = searchService;
        this.jobService = jobService;
        this.degrees = ['BS, MS, PhD', 'MS, PhD', 'PhD'];
        this.cid = this.auth.getCid();
        this.jid = "";
        this.jobInfo = {
            jid: "",
            cid: "",
            jlocation: "",
            title: "",
            salary: "",
            academicbar: "",
            majorbar: "",
            desc: ""
        };
        this.isJobPoster = false;
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.jid = params['jid'];
            _this.getJobInfo(_this.jid);
        });
    };
    JobDetailComponent.prototype.getJobInfo = function (jid) {
        var _this = this;
        this.searchService.findJobById(jid)
            .then(function (jobInfo) {
            _this.jobInfo.jid = jobInfo[0]['jid'];
            _this.jobInfo.cid = jobInfo[0]['cid'];
            _this.jobInfo.jlocation = jobInfo[0]['jlocation'];
            _this.jobInfo.title = jobInfo[0]['title'];
            _this.jobInfo.salary = jobInfo[0]['salary'];
            _this.jobInfo.academicbar = jobInfo[0]['academicbar'];
            _this.jobInfo.majorbar = jobInfo[0]['majorbar'];
            _this.jobInfo.desc = jobInfo[0]['desc'];
            if (_this.cid === _this.jobInfo.cid) {
                _this.isJobPoster = true;
            }
        });
    };
    JobDetailComponent.prototype.updateJobInfo = function (jobInfo) {
        this.jobService.updateJobInfo(jobInfo)
            .then(function (res) { return window.location.reload(); });
    };
    JobDetailComponent.prototype.backToLastPage = function () {
        this._location.back();
    };
    JobDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-job-detail',
            template: __webpack_require__("./src/app/components/job-detail/job-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/job-detail/job-detail.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.Router,
            router_1.ActivatedRoute,
            auth_service_1.AuthService,
            search_service_1.SearchService,
            job_service_1.JobService])
    ], JobDetailComponent);
    return JobDetailComponent;
}());
exports.JobDetailComponent = JobDetailComponent;


/***/ }),

/***/ "./src/app/components/job-list/job-list.component.css":
/***/ (function(module, exports) {

module.exports = ".table-item {\n    font-size: 1.2em;\n}\n\n.table-column-name {\n    font-size: 1.5em;\n}\n\n.detail-button {\n    font-size: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/job-list/job-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>All Posted Jobs</h1>\n    \n  <table class=\"table\">\n      <thead>\n        <tr class=\"table-column-name\">\n          <th scope=\"col\">Job Title</th>\n          <th scope=\"col\">Location</th>\n          <th scope=\"col\">Salary</th>\n          <th scope=\"col\">Post Time</th>\n          <th></th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr class=\"table-item\" *ngFor=\"let job of jobs\">\n            <td>{{job.title}}</td>  \n            <td>{{job.jlocation}}</td>\n            <td>{{job.salary}}</td>\n            <td>{{job.posttime}}</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-info btn-sm detail-button pull-right\"\n                [routerLink]=\"['/jobs', job.jid]\">\n                Edit\n              </button>\n            </td>\n            <td>\n              <button type=\"button\" class=\"btn btn-info btn-sm detail-button\"\n                (click)=\"showFilterModal(job.jid)\">\n                Push\n              </button>\n            </td>\n            <td>\n              <button type=\"button\" class=\"btn btn-info btn-sm detail-button\"\n                [routerLink]=\"['/applications', job.jid]\">\n                Applications\n              </button>\n            </td>\n          </tr>\n      </tbody>\n  </table>\n</div>\n\n<app-push-filter-modal [jid]=\"jid\"></app-push-filter-modal>"

/***/ }),

/***/ "./src/app/components/job-list/job-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var JobListComponent = /** @class */ (function () {
    function JobListComponent(auth, jobService) {
        this.auth = auth;
        this.jobService = jobService;
        this.cid = this.auth.getCid();
        this.jid = "";
    }
    JobListComponent.prototype.ngOnInit = function () {
        this.getJobList(this.cid);
    };
    JobListComponent.prototype.getJobList = function (cid) {
        var _this = this;
        this.jobService.getJobList(cid)
            .then(function (jobs) {
            _this.jobs = jobs;
        });
    };
    JobListComponent.prototype.showFilterModal = function (jid) {
        this.jid = jid;
        $('#push-filter-modal').modal('show');
    };
    JobListComponent = __decorate([
        core_1.Component({
            selector: 'app-job-list',
            template: __webpack_require__("./src/app/components/job-list/job-list.component.html"),
            styles: [__webpack_require__("./src/app/components/job-list/job-list.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            job_service_1.JobService])
    ], JobListComponent);
    return JobListComponent;
}());
exports.JobListComponent = JobListComponent;


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n.form-signin .checkbox {\n  font-weight: 400;\n}\n.form-signin .form-control {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-signin\">\n    <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align:center\">Company Login</h1>\n\n    <p *ngIf=\"error\" style=\"color:red\">{{error}}</p>\n\n    <input type=\"email\" id=\"inputId\" class=\"form-control\" placeholder=\"User ID\" required autofocus\n      [(ngModel)] = \"cid\" name=\"cid\">\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required\n      [(ngModel)] = \"password\" name=\"password\">\n\n    <button class=\"btn btn-lg btn-primary btn-block submit-btn\" type=\"submit\"\n      (click)=\"submitForm()\">\n      Login\n    </button>\n\n    <div align=\"right\" style=\"font-size:1.2em\">\n      <span> New to Jobster?</span>\n      <span><a href=\"#\" routerLink=\"/signup\">Sign Up</a></span>\n    </div>\n\n    <div align=\"center\" style=\"font-size:1.0em; margin-top:1.0em;\">\n      <span>A student?</span>\n      <span><a href=\"../s\"> Login as student</a></span>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.error = "";
        this.cid = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.isUserAuthenticated()) {
            this.router.navigateByUrl('/');
        }
    };
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        this.auth.logIn(this.cid, this.password).then(function (res) {
            if (res.error) {
                _this.error = res.error;
            }
            else {
                _this.auth.authenticateUser(res.token, res.cid);
                _this.router.navigateByUrl('/');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n          <font color=\"#ffffff\" size=\"5.5em\"><b>Jobster</b></font>\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" style=\"font-size:1.1em\">\n      <ul class=\"nav navbar-nav\">\n          <li><a routerLink=\"/new-job\">New Job</a></li>\n          <li><a routerLink=\"/jobs\">Posted Jobs</a></li>\n          <!-- <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Jobs <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a routerLink=\"/followings\">Job List</a>\n                <a routerLink=\"/invitations\">Connection Requests</a>\n                <a routerLink=\"/friends\">All Connections</a>\n              </li>\n            </ul>\n          </li> -->\n      </ul>\n\n      <!-- <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Please enter keywords\" [(ngModel)]=\"searchInput\" name =\"student-search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\" [routerLink]=\"['/', searchInput]\">\n            Search\n        </button>\n      </form> -->\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!-- <li><a routerLink=\"/new-messages\">Messages <span class=\"badge\">{{msg_num}}</span></a></li> -->\n        <!-- <li><a routerLink=\"/login\" *ngIf=\"!auth.isUserAuthenticated()\">Login</a></li> -->\n        <!-- <li><a routerLink=\"/signup\" *ngIf=\"!auth.isUserAuthenticated()\">Sign Up</a></li> -->\n        <li><a routerLink=\"/profile\" *ngIf=\"auth.isUserAuthenticated()\">Profile</a></li>\n        <li><a (click)=\"logout()\" *ngIf=\"auth.isUserAuthenticated()\">Logout</a></li>\n      </ul>\n\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.deauthenticateUser();
        window.location.reload();
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/new-job-success/new-job-success.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-job-success/new-job-success.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"new-job-success\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalCenterTitle\">Success!\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </h3>\n      </div>\n      <div class=\"modal-body\">\n        <h4>The Job ID is: {{jid}}</h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" routerLink=\"/jobs\">See All Jobs</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/new-job-success/new-job-success.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NewJobSuccessComponent = /** @class */ (function () {
    function NewJobSuccessComponent() {
    }
    NewJobSuccessComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NewJobSuccessComponent.prototype, "jid", void 0);
    NewJobSuccessComponent = __decorate([
        core_1.Component({
            selector: 'app-new-job-success',
            template: __webpack_require__("./src/app/components/new-job-success/new-job-success.component.html"),
            styles: [__webpack_require__("./src/app/components/new-job-success/new-job-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewJobSuccessComponent);
    return NewJobSuccessComponent;
}());
exports.NewJobSuccessComponent = NewJobSuccessComponent;


/***/ }),

/***/ "./src/app/components/new-job/new-job.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-job/new-job.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>New Job</h2>\n  <div>\n    <form #formRef = \"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"name\">Job Title</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.title\" name = \"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"location\">Location</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.jlocation\" name = \"location\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"salary\">Salary</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.salary\" name = \"salary\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"degree\">Degree Requirement</label> \n        <select class=\"form-control\" name=\"degree\"\n          [(ngModel)] = \"jobInfo.academicbar\">\n            <option *ngFor = \"let degree of degrees\" [value] = \"degree\">\n              {{degree}}\n            </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"majorbar\">Major Requirement</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.majorbar\" name = \"majorbar\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"desc\">Job Description</label>\n        <textarea name = \"desc\" id=\"desc\" class=\"form-control\"\n          [(ngModel)] = \"jobInfo.desc\" rows=\"3\">\n        </textarea>\n      </div>      \n\n    </form>\n  </div>\n\n  <div class=\"footer-button\">\n    <button type=\"button\" class=\"btn btn-info btn-md\"\n      (click) =\"postJob(jobInfo)\">\n      Submit\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary btn-md pull-right\"\n        (click)=\"backToLastPage()\">\n        Back\n    </button>\n  </div>\n</div>\n\n<br/>\n<br/>\n\n<app-new-job-success [jid]=\"jid\"></app-new-job-success>"

/***/ }),

/***/ "./src/app/components/new-job/new-job.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var DEFAULT_JOBINFO = Object.freeze({
    cid: "",
    jlocation: "",
    title: "",
    salary: "0",
    academicbar: "BS, MS, PhD",
    majorbar: "",
    desc: ""
});
var NewJobComponent = /** @class */ (function () {
    function NewJobComponent(_location, route, auth, searchService, jobService) {
        this._location = _location;
        this.route = route;
        this.auth = auth;
        this.searchService = searchService;
        this.jobService = jobService;
        this.error = "";
        this.degrees = ['BS, MS, PhD', 'MS, PhD', 'PhD'];
        this.cid = this.auth.getCid();
        this.jid = "";
        // jobInfo = {
        //   cid: "",
        //   jlocation: "",
        //   title: "",
        //   salary: "",
        //   academicbar: "",
        //   majorbar: "",
        //   desc: ""
        // };
        this.jobInfo = Object.assign({}, DEFAULT_JOBINFO);
    }
    NewJobComponent.prototype.ngOnInit = function () {
    };
    NewJobComponent.prototype.postJob = function (jobInfo) {
        var _this = this;
        jobInfo.cid = this.cid;
        this.jobService.postJob(jobInfo)
            .then(function (res) {
            if (res.error) {
                _this.error = res.error;
            }
            else {
                _this.jid = res.jid;
            }
            if (!_this.error) {
                $('#new-job-success').modal('show');
            }
        });
        this.jobInfo = Object.assign({}, DEFAULT_JOBINFO);
    };
    NewJobComponent.prototype.backToLastPage = function () {
        this._location.back();
    };
    NewJobComponent = __decorate([
        core_1.Component({
            selector: 'app-new-job',
            template: __webpack_require__("./src/app/components/new-job/new-job.component.html"),
            styles: [__webpack_require__("./src/app/components/new-job/new-job.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute,
            auth_service_1.AuthService,
            search_service_1.SearchService,
            job_service_1.JobService])
    ], NewJobComponent);
    return NewJobComponent;
}());
exports.NewJobComponent = NewJobComponent;


/***/ }),

/***/ "./src/app/components/push-filter-modal/push-filter-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/push-filter-modal/push-filter-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"push-filter-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Please set the filter.\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </h4>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"list-group\">\n          <li class=\"list-group-item\">\n              <label for=\"university\">University: </label>\n              <input type=\"text\" class=\"form-control\"\n                [(ngModel)] = \"filter.university\" name = \"university\">\n          </li>\n          <li class=\"list-group-item\">\n              <label for=\"degree\">Degree: </label> \n              <select class=\"form-control\" name=\"degree\"\n                [(ngModel)] = \"filter.degree\">\n                  <option *ngFor = \"let degree of degrees\" [value] = \"degree\">\n                    {{degree}}\n                  </option>\n              </select>\n          </li>\n          <li class=\"list-group-item\">\n              <label for=\"major\">Major: </label>\n              <input type=\"text\" class=\"form-control\"\n                [(ngModel)] = \"filter.major\" name = \"major\">\n          </li>\n          <li class=\"list-group-item\">\n              <label for=\"gpa\">GPA: </label>\n              <input type=\"text\" class=\"form-control\"\n                [(ngModel)] = \"filter.gpa\" name = \"gpa\">\n          </li>\n          <li class=\"list-group-item\">\n              <label for=\"skill\">Skill: </label>\n              <input type=\"text\" class=\"form-control\"\n                [(ngModel)] = \"filter.skill\" name = \"skill\">\n          </li>\n          <li class=\"list-group-item\">\n              <label for=\"keyword\">Resume Keyword: </label>\n              <input type=\"text\" class=\"form-control\"\n                [(ngModel)] = \"filter.keyword\" name = \"keyword\">\n          </li>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <button type=\"button\" class=\"btn btn-primary\"\n            (click)=\"sendJobNotifications(jid, filter)\">\n            Confirm\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            Back\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/push-filter-modal/push-filter-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var DEFAULT_FILTER = Object.freeze({
    university: "",
    degree: "BS, MS, PhD",
    major: "",
    gpa: 0,
    skill: "",
    keyword: ""
});
var PushFilterModalComponent = /** @class */ (function () {
    function PushFilterModalComponent(jobService) {
        this.jobService = jobService;
        this.degrees = ['BS, MS, PhD', 'MS, PhD', 'PhD'];
        this.filter = Object.assign({}, DEFAULT_FILTER);
    }
    PushFilterModalComponent.prototype.ngOnInit = function () {
    };
    PushFilterModalComponent.prototype.sendJobNotifications = function (jid, filter) {
        console.log(jid);
        console.log(filter);
        this.jobService.sendJobNotifications(jid, filter)
            .then(function (res) { return $('#push-filter-modal').modal('toggle'); });
        this.filter = Object.assign({}, DEFAULT_FILTER);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PushFilterModalComponent.prototype, "jid", void 0);
    PushFilterModalComponent = __decorate([
        core_1.Component({
            selector: 'app-push-filter-modal',
            template: __webpack_require__("./src/app/components/push-filter-modal/push-filter-modal.component.html"),
            styles: [__webpack_require__("./src/app/components/push-filter-modal/push-filter-modal.component.css")]
        }),
        __metadata("design:paramtypes", [job_service_1.JobService])
    ], PushFilterModalComponent);
    return PushFilterModalComponent;
}());
exports.PushFilterModalComponent = PushFilterModalComponent;


/***/ }),

/***/ "./src/app/components/signup-success/signup-success.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup-success/signup-success.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"signup-success\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalCenterTitle\">Sign Up Success!\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </h3>\n      </div>\n      <div class=\"modal-body\">\n        <h4>Your User ID is: {{cid}}</h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" routerLink=\"/login\">Login</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signup-success/signup-success.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SignupSuccessComponent = /** @class */ (function () {
    function SignupSuccessComponent() {
    }
    SignupSuccessComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SignupSuccessComponent.prototype, "cid", void 0);
    SignupSuccessComponent = __decorate([
        core_1.Component({
            selector: 'app-signup-success',
            template: __webpack_require__("./src/app/components/signup-success/signup-success.component.html"),
            styles: [__webpack_require__("./src/app/components/signup-success/signup-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupSuccessComponent);
    return SignupSuccessComponent;
}());
exports.SignupSuccessComponent = SignupSuccessComponent;


/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".form-signup {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: auto;\n}\n.form-signup .checkbox {\n  font-weight: 400;\n}\n.form-signup .form-control {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signup .form-control:focus {\n  z-index: 2;\n}\n.form-signup input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signup input[type=\"password\"] {\n  margin-bottom:-1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-signup .submit-btn {\n  margin-top:10px;\n}"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-signup\">\n    <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align:center\">Company Sign Up</h1>\n\n    <p *ngIf=\"error\" style=\"color:red\">{{error}}</p>\n\n    <label for=\"inputId\" class=\"sr-only\">Company Name</label>\n    <input type=\"email\" id=\"inputName\" class=\"form-control\" placeholder=\"Company Name\" required autofocus\n      [(ngModel)] = \"cname\" name=\"cname\">\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required\n      [(ngModel)] = \"password\" name=\"password\">\n\n    <label for=\"confirmPassword\" class=\"sr-only\">Confirm Password</label>\n    <input type=\"password\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\" required\n      [(ngModel)] = \"confirm_password\" name=\"confirm_password\">\n\n    <button class=\"btn btn-lg btn-primary btn-block submit-btn\" type=\"submit\" (click)=\"submitForm()\">\n      <!-- data-toggle=\"modal\" data-target=\"#signup-success\"> -->\n      Sign Up\n    </button>\n\n    <div align=\"right\" style=\"font-size:1.2em\">\n      <span> Already have an account?</span>\n      <span><a href=\"#\" routerLink=\"/login\">Login</a></span>\n    </div>\n\n  </form>\n</div>\n\n<app-signup-success [cid]=\"cid\"></app-signup-success>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.error = "";
        this.cid = "";
        this.cname = "";
        this.password = "";
        this.confirm_password = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submitForm = function () {
        var _this = this;
        this.error = "";
        this.checkSubmit();
        if (!this.error) {
            this.auth.signUp(this.cname, this.password).then(function (res) {
                if (res.error) {
                    _this.error = res.error;
                }
                else {
                    _this.cid = res.cid;
                }
                if (!_this.error) {
                    $('#signup-success').modal('show');
                }
            });
        }
    };
    SignupComponent.prototype.checkSubmit = function () {
        if (!this.cname || !this.password || !this.confirm_password) {
            this.error = "Please fill in all blanks!";
        }
        else if (this.password.length < 6) {
            this.error = "Password should be no less than 6 characters!";
        }
        else if (this.password !== this.confirm_password) {
            this.error = "Passwords don't match!";
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./src/app/components/student-detail/student-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".info-item {\n    padding-left: 2.0em;\n}\n\n.info-content {\n    padding-left: 2.0em;\n}\n\n.footer-button {\n    padding-top: 2.0em;\n}"

/***/ }),

/***/ "./src/app/components/student-detail/student-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngFor=\"let student of studentInfo\">\n\n  <h1>{{student.sname}}</h1>\n\n  <div class=\"info-item\">\n    <h3>University</h3>\n    <h4 class=\"info-content\">{{student.university}}</h4>\n  </div>\n\n  <div class=\"info-item\">\n    <h3>Degree</h3>\n    <h4 class=\"info-content\">{{student.degree}}</h4>\n  </div>\n\n  <div class=\"info-item\">\n    <h3>Major</h3>\n    <h4 class=\"info-content\">{{student.major}}</h4>\n  </div>\n\n  <div class=\"info-item\">\n    <h3>Skills</h3>\n    <h4 class=\"info-content\">{{student.skill}}</h4>\n  </div>\n\n  <div class=\"info-item\" *ngIf=\"isApplicant\">\n    <h3>GPA</h3>\n    <h4 class=\"info-content\">{{student.gpa}}</h4>\n  </div>\n\n  <div class=\"info-item\" *ngIf=\"isApplicant\">\n    <h3>Resume</h3>\n    <textarea readonly name = \"resume\" placeholder=\"resume.\" \n      [(ngModel)] = \"resume\" rows=\"10\" cols=\"80\">\n    </textarea>\n  </div>\n\n  <div class=\"footer-button\">\n      <button type=\"button\" class=\"btn btn-secondary btn-md pull-right\"\n        (click)=\"backToLastPage()\">\n        Back\n      </button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/student-detail/student-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(_location, route, auth, searchService, jobService) {
        this._location = _location;
        this.route = route;
        this.auth = auth;
        this.searchService = searchService;
        this.jobService = jobService;
        this.cid = this.auth.getCid();
        this.sid = "";
        this.isApplicant = false;
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sid = params['sid'];
            _this.getStudentInfo(_this.sid);
            _this.getResume(_this.sid);
            _this.checkApplicant(_this.cid, _this.sid);
        });
    };
    StudentDetailComponent.prototype.getStudentInfo = function (sid) {
        var _this = this;
        this.searchService.findStudentById(sid)
            .then(function (studentInfo) {
            _this.studentInfo = studentInfo;
        });
    };
    StudentDetailComponent.prototype.getResume = function (sid) {
        var _this = this;
        this.searchService.getResumeById(sid).then(function (resume) { return _this.resume = resume; });
    };
    StudentDetailComponent.prototype.checkApplicant = function (cid, sid) {
        var _this = this;
        this.jobService.checkApplicant(sid, cid)
            .then(function (res) {
            if (res[0].cnt != 0) {
                _this.isApplicant = true;
            }
        });
    };
    StudentDetailComponent.prototype.backToLastPage = function () {
        this._location.back();
    };
    StudentDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-student-detail',
            template: __webpack_require__("./src/app/components/student-detail/student-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/student-detail/student-detail.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute,
            auth_service_1.AuthService,
            search_service_1.SearchService,
            job_service_1.JobService])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());
exports.StudentDetailComponent = StudentDetailComponent;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthService.prototype.authenticateUser = function (token, cid) {
        localStorage.setItem('ctoken', token);
        localStorage.setItem('cid', cid);
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return localStorage.getItem('ctoken') !== null;
    };
    AuthService.prototype.deauthenticateUser = function () {
        localStorage.removeItem('ctoken');
        localStorage.removeItem('cid');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('ctoken');
    };
    AuthService.prototype.getCid = function () {
        return localStorage.getItem('cid');
    };
    AuthService.prototype.signUp = function (cname, password) {
        var body = {
            name: cname,
            password: password,
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/company-signup", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AuthService.prototype.logIn = function (cid, password) {
        var body = {
            cid: cid,
            password: password,
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/company-login", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/services/job.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var JobService = /** @class */ (function () {
    function JobService(httpClient) {
        this.httpClient = httpClient;
    }
    JobService.prototype.getJobList = function (cid) {
        return this.httpClient.get("api/v1/jobs-of-company/" + cid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.getApplicationList = function (jid) {
        return this.httpClient.get("api/v1/applications-of-job/" + jid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.getApplication = function (jid, sid) {
        return this.httpClient.get("api/v1/applications/" + jid + "/" + sid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.handleApplication = function (jid, sid, status) {
        var body = {
            jid: jid,
            sid: sid,
            status: status
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.patch("api/v1/applications", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.postJob = function (jobInfo) {
        var body = {
            cid: jobInfo.cid,
            jlocation: jobInfo.jlocation,
            title: jobInfo.title,
            salary: jobInfo.salary,
            academicbar: jobInfo.academicbar,
            majorbar: jobInfo.majorbar,
            desc: jobInfo.desc
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/jobs", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.updateJobInfo = function (jobInfo) {
        var body = {
            jid: jobInfo.jid,
            jlocation: jobInfo.jlocation,
            title: jobInfo.title,
            salary: jobInfo.salary,
            academicbar: jobInfo.academicbar,
            majorbar: jobInfo.majorbar,
            desc: jobInfo.desc
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.patch("api/v1/jobs", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.sendJobNotifications = function (jid, filter) {
        var body = {
            jid: jid,
            university: filter.university,
            degree: filter.degree,
            major: filter.major,
            gpa: filter.gpa,
            skill: filter.skill,
            keyword: filter.keyword
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/job-notifications", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.checkApplicant = function (sid, cid) {
        return this.httpClient.get("api/v1/check-applicant/" + sid + "/" + cid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    JobService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], JobService);
    return JobService;
}());
exports.JobService = JobService;


/***/ }),

/***/ "./src/app/services/search.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var SearchService = /** @class */ (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
    }
    SearchService.prototype.findCompanyById = function (cid) {
        return this.httpClient.get("api/v1/companies/" + cid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.findStudentById = function (sid) {
        return this.httpClient.get("api/v1/students/" + sid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.findStudentsByKeyword = function (keyword) {
        var body = { keyword: keyword };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/students/keywords", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.findJobById = function (jid) {
        return this.httpClient.get("api/v1/jobs/" + jid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.updateCompanyProfile = function (companyInfo) {
        var body = {
            cid: companyInfo.cid,
            cname: companyInfo.cname,
            clocation: companyInfo.clocation,
            industry: companyInfo.industry
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/companies", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.getResumeById = function (sid) {
        return this.httpClient.get("api/v1/resumes/" + sid, { 'responseType': 'text' })
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    SearchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map