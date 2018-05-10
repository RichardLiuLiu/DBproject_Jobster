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
        this.title = 'Jobster-Student';
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
var connection_service_1 = __webpack_require__("./src/app/services/connection.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var message_service_1 = __webpack_require__("./src/app/services/message.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var student_list_component_1 = __webpack_require__("./src/app/components/student-list/student-list.component.ts");
var company_list_component_1 = __webpack_require__("./src/app/components/company-list/company-list.component.ts");
var student_home_component_1 = __webpack_require__("./src/app/components/student-home/student-home.component.ts");
var base_component_1 = __webpack_require__("./src/app/components/base/base.component.ts");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var company_detail_component_1 = __webpack_require__("./src/app/components/company-detail/company-detail.component.ts");
var job_list_component_1 = __webpack_require__("./src/app/components/job-list/job-list.component.ts");
var student_detail_component_1 = __webpack_require__("./src/app/components/student-detail/student-detail.component.ts");
var invitation_list_component_1 = __webpack_require__("./src/app/components/invitation-list/invitation-list.component.ts");
var job_detail_component_1 = __webpack_require__("./src/app/components/job-detail/job-detail.component.ts");
var application_list_component_1 = __webpack_require__("./src/app/components/application-list/application-list.component.ts");
var student_profile_component_1 = __webpack_require__("./src/app/components/student-profile/student-profile.component.ts");
var signup_component_1 = __webpack_require__("./src/app/components/signup/signup.component.ts");
var signup_success_component_1 = __webpack_require__("./src/app/components/signup-success/signup-success.component.ts");
var friend_list_component_1 = __webpack_require__("./src/app/components/friend-list/friend-list.component.ts");
var following_list_component_1 = __webpack_require__("./src/app/components/following-list/following-list.component.ts");
var message_list_component_1 = __webpack_require__("./src/app/components/message-list/message-list.component.ts");
var new_message_list_component_1 = __webpack_require__("./src/app/components/new-message-list/new-message-list.component.ts");
var friend_list_modal_component_1 = __webpack_require__("./src/app/components/friend-list-modal/friend-list-modal.component.ts");
var company_job_list_component_1 = __webpack_require__("./src/app/components/company-job-list/company-job-list.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                student_list_component_1.StudentListComponent,
                company_list_component_1.CompanyListComponent,
                student_home_component_1.StudentHomeComponent,
                base_component_1.BaseComponent,
                login_component_1.LoginComponent,
                company_detail_component_1.CompanyDetailComponent,
                job_list_component_1.JobListComponent,
                student_detail_component_1.StudentDetailComponent,
                invitation_list_component_1.InvitationListComponent,
                job_detail_component_1.JobDetailComponent,
                application_list_component_1.ApplicationListComponent,
                student_profile_component_1.StudentProfileComponent,
                signup_component_1.SignupComponent,
                signup_success_component_1.SignupSuccessComponent,
                friend_list_component_1.FriendListComponent,
                following_list_component_1.FollowingListComponent,
                message_list_component_1.MessageListComponent,
                new_message_list_component_1.NewMessageListComponent,
                friend_list_modal_component_1.FriendListModalComponent,
                company_job_list_component_1.CompanyJobListComponent,
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
                connection_service_1.ConnectionService,
                job_service_1.JobService,
                message_service_1.MessageService,
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
var student_profile_component_1 = __webpack_require__("./src/app/components/student-profile/student-profile.component.ts");
var student_home_component_1 = __webpack_require__("./src/app/components/student-home/student-home.component.ts");
var student_list_component_1 = __webpack_require__("./src/app/components/student-list/student-list.component.ts");
var company_list_component_1 = __webpack_require__("./src/app/components/company-list/company-list.component.ts");
var job_list_component_1 = __webpack_require__("./src/app/components/job-list/job-list.component.ts");
var friend_list_component_1 = __webpack_require__("./src/app/components/friend-list/friend-list.component.ts");
var following_list_component_1 = __webpack_require__("./src/app/components/following-list/following-list.component.ts");
var company_detail_component_1 = __webpack_require__("./src/app/components/company-detail/company-detail.component.ts");
var student_detail_component_1 = __webpack_require__("./src/app/components/student-detail/student-detail.component.ts");
var job_detail_component_1 = __webpack_require__("./src/app/components/job-detail/job-detail.component.ts");
var company_job_list_component_1 = __webpack_require__("./src/app/components/company-job-list/company-job-list.component.ts");
var invitation_list_component_1 = __webpack_require__("./src/app/components/invitation-list/invitation-list.component.ts");
var application_list_component_1 = __webpack_require__("./src/app/components/application-list/application-list.component.ts");
var message_list_component_1 = __webpack_require__("./src/app/components/message-list/message-list.component.ts");
var new_message_list_component_1 = __webpack_require__("./src/app/components/new-message-list/new-message-list.component.ts");
var routes = [
    // {
    //     path: '',
    //     component: BaseComponent,
    //     pathMatch: 'full'
    // },
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
        component: student_profile_component_1.StudentProfileComponent
    },
    {
        path: '',
        component: student_home_component_1.StudentHomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'student-search-list/:keyword',
        component: student_list_component_1.StudentListComponent
    },
    {
        path: 'company-search-list/:keyword',
        component: company_list_component_1.CompanyListComponent
    },
    {
        path: 'job-search-list/:keyword',
        component: job_list_component_1.JobListComponent
    },
    {
        path: 'friends',
        component: friend_list_component_1.FriendListComponent
    },
    {
        path: 'followings',
        component: following_list_component_1.FollowingListComponent
    },
    {
        path: 'company-detail/:cid',
        component: company_detail_component_1.CompanyDetailComponent
    },
    {
        path: 'job-list/:cid',
        component: company_job_list_component_1.CompanyJobListComponent
    },
    {
        path: 'student-detail/:sid',
        component: student_detail_component_1.StudentDetailComponent
    },
    {
        path: 'job-detail/:jid',
        component: job_detail_component_1.JobDetailComponent
    },
    {
        path: 'invitations',
        component: invitation_list_component_1.InvitationListComponent
    },
    {
        path: 'applications',
        component: application_list_component_1.ApplicationListComponent
    },
    {
        path: 'messages/:sid',
        component: message_list_component_1.MessageListComponent
    },
    {
        path: 'new-messages',
        component: new_message_list_component_1.NewMessageListComponent
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

module.exports = "<div class=\"container\">\n\n  <h1>My Applications</h1>\n    \n  <table class=\"table\">\n      <thead>\n          <tr class=\"table-column-name\">\n              <th scope=\"col\">Job Title</th>\n              <th scope=\"col\">Company</th>\n              <th scope=\"col\">Application Time</th>\n              <th scope=\"col\">Status</th>\n              <th></th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr class=\"table-item\" *ngFor=\"let application of applications\">\n            <td>{{application.title}}</td>\n            <td>{{application.cname}}</td>\n            <td>{{application.apptime}}</td>\n            <td>{{application.appstatus}}</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-info btn-sm detail-button\"\n                    [routerLink]=\"['/job-detail', application.jid]\">\n                    Detail\n                </button>\n            </td>\n          </tr>\n      </tbody>\n  </table>\n</div>"

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
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var ApplicationListComponent = /** @class */ (function () {
    function ApplicationListComponent(auth, jobhService) {
        this.auth = auth;
        this.jobhService = jobhService;
        this.sid = this.auth.getSid();
    }
    ApplicationListComponent.prototype.ngOnInit = function () {
        this.getApplicationList(this.sid);
    };
    ApplicationListComponent.prototype.getApplicationList = function (sid) {
        var _this = this;
        this.jobhService.getApplicationList(sid)
            .then(function (applications) {
            _this.applications = applications;
        });
    };
    ApplicationListComponent = __decorate([
        core_1.Component({
            selector: 'app-application-list',
            template: __webpack_require__("./src/app/components/application-list/application-list.component.html"),
            styles: [__webpack_require__("./src/app/components/application-list/application-list.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            job_service_1.JobService])
    ], ApplicationListComponent);
    return ApplicationListComponent;
}());
exports.ApplicationListComponent = ApplicationListComponent;


/***/ }),

/***/ "./src/app/components/base/base.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/base/base.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/base/base.component.ts":
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
var BaseComponent = /** @class */ (function () {
    function BaseComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    BaseComponent.prototype.ngOnInit = function () {
        if (!this.auth.isUserAuthenticated()) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['s']);
        }
    };
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'app-base',
            template: __webpack_require__("./src/app/components/base/base.component.html"),
            styles: [__webpack_require__("./src/app/components/base/base.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "./src/app/components/company-detail/company-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".info-item {\n    padding-left: 2.0em;\n}\n\n.info-content {\n    padding-left: 2.0em;\n}\n\n.footer-button {\n    padding-top: 2.0em;\n}"

/***/ }),

/***/ "./src/app/components/company-detail/company-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngFor=\"let company of companyInfo\">\n\n  <h1>{{company.cname}}</h1>\n\n  <div class=\"info-item\">\n    <h3>Location</h3>\n    <h4 class=\"info-content\">{{company.clocation}}</h4>\n  </div>\n\n  <div class=\"info-item\">\n    <h3>Industry</h3>\n    <h4 class=\"info-content\">{{company.industry}}</h4>\n  </div>\n\n  <div class=\"footer-button\">\n      <button type=\"button\" *ngIf=\"!isFollowing\" class=\"btn btn-info btn-md\"\n        (click)=\"followCompany(sid, cid)\">\n        Follow\n      </button>\n      <button type=\"button\" *ngIf=\"isFollowing\" class=\"btn btn-secondary btn-md\"\n        (click)=\"unfollowCompany(sid, cid)\">\n        Unfollow\n      </button>\n      <button type=\"button\" class=\"btn btn-info btn-md\"\n        [routerLink]=\"['/job-list', cid]\">\n        See All Jobs\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary btn-md pull-right\"\n        (click)=\"backToLastPage()\">\n        Back\n      </button>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/company-detail/company-detail.component.ts":
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
var connection_service_1 = __webpack_require__("./src/app/services/connection.service.ts");
var CompanyDetailComponent = /** @class */ (function () {
    function CompanyDetailComponent(_location, route, auth, connectionService, searchService) {
        this._location = _location;
        this.route = route;
        this.auth = auth;
        this.connectionService = connectionService;
        this.searchService = searchService;
        this.sid = this.auth.getSid();
        this.cid = "";
        this.isFollowing = false;
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.cid = params['cid'];
            _this.getCompanyInfo(_this.cid);
            _this.checkFollowing(_this.sid, _this.cid);
        });
    };
    CompanyDetailComponent.prototype.getCompanyInfo = function (cid) {
        var _this = this;
        this.searchService.findCompanyById(cid)
            .then(function (companyInfo) {
            _this.companyInfo = companyInfo;
        });
    };
    CompanyDetailComponent.prototype.checkFollowing = function (sid, cid) {
        var _this = this;
        this.connectionService.getFollowingList(sid)
            .then(function (followings) {
            for (var _i = 0, followings_1 = followings; _i < followings_1.length; _i++) {
                var company = followings_1[_i];
                if (company['cid'] === cid) {
                    _this.isFollowing = true;
                    break;
                }
            }
        });
    };
    CompanyDetailComponent.prototype.followCompany = function (sid, cid) {
        this.connectionService.followCompany(sid, cid)
            .then(function (res) { return window.location.reload(); });
    };
    CompanyDetailComponent.prototype.unfollowCompany = function (sid, cid) {
        this.connectionService.unfollowCompany(sid, cid)
            .then(function (res) { return window.location.reload(); });
    };
    CompanyDetailComponent.prototype.backToLastPage = function () {
        this._location.back();
    };
    CompanyDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-company-detail',
            template: __webpack_require__("./src/app/components/company-detail/company-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/company-detail/company-detail.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute,
            auth_service_1.AuthService,
            connection_service_1.ConnectionService,
            search_service_1.SearchService])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());
exports.CompanyDetailComponent = CompanyDetailComponent;


/***/ }),

/***/ "./src/app/components/company-job-list/company-job-list.component.css":
/***/ (function(module, exports) {

module.exports = ".table-item {\n    font-size: 1.2em;\n}\n\n.table-column-name {\n    font-size: 1.5em;\n}\n\n.detail-button {\n    font-size: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/company-job-list/company-job-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>All Posted Jobs</h1>\n    \n  <table class=\"table\">\n      <thead>\n        <tr class=\"table-column-name\">\n          <th scope=\"col\">Job Title</th>\n          <th scope=\"col\">Location</th>\n          <th scope=\"col\">Salary</th>\n          <th scope=\"col\">Post Time</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr class=\"table-item\" *ngFor=\"let job of jobs\">\n            <td>{{job.title}}</td>  \n            <td>{{job.jlocation}}</td>\n            <td>{{job.salary}}</td>\n            <td>{{job.posttime}}</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-info btn-sm detail-button pull-right\"\n                [routerLink]=\"['/job-detail', job.jid]\">\n                Detail\n              </button>\n            </td>\n          </tr>\n      </tbody>\n  </table>\n\n  <div class=\"footer-button\">\n    <button type=\"button\" class=\"btn btn-secondary btn-md pull-left\"\n        (click)=\"backToLastPage()\">\n        Back\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/company-job-list/company-job-list.component.ts":
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
var CompanyJobListComponent = /** @class */ (function () {
    function CompanyJobListComponent(_location, route, auth, searchService) {
        this._location = _location;
        this.route = route;
        this.auth = auth;
        this.searchService = searchService;
        this.cid = "";
    }
    CompanyJobListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.cid = params['cid'];
            _this.getCompanyJobList(_this.cid);
        });
    };
    CompanyJobListComponent.prototype.getCompanyJobList = function (cid) {
        var _this = this;
        this.searchService.getJobList(cid)
            .then(function (jobs) {
            _this.jobs = jobs;
        });
    };
    CompanyJobListComponent.prototype.backToLastPage = function () {
        this._location.back();
    };
    CompanyJobListComponent = __decorate([
        core_1.Component({
            selector: 'app-company-job-list',
            template: __webpack_require__("./src/app/components/company-job-list/company-job-list.component.html"),
            styles: [__webpack_require__("./src/app/components/company-job-list/company-job-list.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute,
            auth_service_1.AuthService,
            search_service_1.SearchService])
    ], CompanyJobListComponent);
    return CompanyJobListComponent;
}());
exports.CompanyJobListComponent = CompanyJobListComponent;


/***/ }),

/***/ "./src/app/components/company-list/company-list.component.css":
/***/ (function(module, exports) {

module.exports = ".table-item {\n    font-size: 1.2em;\n}\n\n.table-column-name {\n    font-size: 1.5em;\n}\n\n.detail-button {\n    font-size: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/company-list/company-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>Search Results</h1>\n\n  <table class=\"table\">\n      <thead>\n          <tr class=\"table-column-name\">\n              <th scope=\"col\">Company</th>\n              <th scope=\"col\">Location</th>\n              <th scope=\"col\">Industry</th>\n              <th></th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-item\" *ngFor=\"let company of companies\">\n            <td>{{company.cname}}</td>\n            <td>{{company.clocation}}</td>\n            <td>{{company.industry}}</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-info btn-sm detail-button\"\n                [routerLink]=\"['/company-detail', company.cid]\">\n                Detail\n              </button>\n            </td>\n        </tr>\n      </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/company-list/company-list.component.ts":
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
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(route, auth, searchService) {
        this.route = route;
        this.auth = auth;
        this.searchService = searchService;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getCompanySearchList(params['keyword']);
        });
    };
    CompanyListComponent.prototype.getCompanySearchList = function (keyword) {
        var _this = this;
        this.searchService.findCompaniesByKeyword(keyword)
            .then(function (companies) {
            _this.companies = companies;
        });
    };
    CompanyListComponent = __decorate([
        core_1.Component({
            selector: 'app-company-list',
            template: __webpack_require__("./src/app/components/company-list/company-list.component.html"),
            styles: [__webpack_require__("./src/app/components/company-list/company-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            auth_service_1.AuthService,
            search_service_1.SearchService])
    ], CompanyListComponent);
    return CompanyListComponent;
}());
exports.CompanyListComponent = CompanyListComponent;


/***/ }),

/***/ "./src/app/components/following-list/following-list.component.css":
/***/ (function(module, exports) {

module.exports = ".table-item {\n    font-size: 1.2em;\n}\n\n.table-column-name {\n    font-size: 1.5em;\n}\n\n.detail-button {\n    font-size: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/following-list/following-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1>All Followings</h1>\n  \n    <table class=\"table\">\n        <thead>\n            <tr class=\"table-column-name\">\n                <th scope=\"col\">Company</th>\n                <th scope=\"col\">Location</th>\n                <th scope=\"col\">Industry</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n          <tr class=\"table-item\" *ngFor=\"let company of companies\">\n              <td>{{company.cname}}</td>\n              <td>{{company.clocation}}</td>\n              <td>{{company.industry}}</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-info btn-sm detail-button\"\n                  [routerLink]=\"['/company-detail', company.cid]\">\n                  Detail\n                </button>\n              </td>\n          </tr>\n        </tbody>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/components/following-list/following-list.component.ts":
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
var connection_service_1 = __webpack_require__("./src/app/services/connection.service.ts");
var FollowingListComponent = /** @class */ (function () {
    function FollowingListComponent(auth, connectionService) {
        this.auth = auth;
        this.connectionService = connectionService;
        this.sid = this.auth.getSid();
    }
    FollowingListComponent.prototype.ngOnInit = function () {
        this.getFollowingList(this.sid);
    };
    FollowingListComponent.prototype.getFollowingList = function (sid) {
        var _this = this;
        this.connectionService.getFollowingList(sid)
            .then(function (companies) {
            _this.companies = companies;
        });
    };
    FollowingListComponent = __decorate([
        core_1.Component({
            selector: 'app-following-list',
            template: __webpack_require__("./src/app/components/following-list/following-list.component.html"),
            styles: [__webpack_require__("./src/app/components/following-list/following-list.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            connection_service_1.ConnectionService])
    ], FollowingListComponent);
    return FollowingListComponent;
}());
exports.FollowingListComponent = FollowingListComponent;


/***/ }),

/***/ "./src/app/components/friend-list-modal/friend-list-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/friend-list-modal/friend-list-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"friend-list-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalCenterTitle\">Please select a friend.\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </h4>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"list-group\">\n          <button type=\"button\" class=\"list-group-item\" *ngFor=\"let student of students\"\n            (click)=\"forwardJob(jid, sender, student.sid)\">\n            <strong>{{student.sname}}</strong><span class=\"pull-right\">{{student.university}}</span>\n          </button>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Back</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/friend-list-modal/friend-list-modal.component.ts":
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
var connection_service_1 = __webpack_require__("./src/app/services/connection.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var FriendListModalComponent = /** @class */ (function () {
    function FriendListModalComponent(auth, connectionService, jobService) {
        this.auth = auth;
        this.connectionService = connectionService;
        this.jobService = jobService;
        this.sender = this.auth.getSid();
    }
    FriendListModalComponent.prototype.ngOnInit = function () {
        this.getFriendList(this.sender);
    };
    FriendListModalComponent.prototype.getFriendList = function (sid) {
        var _this = this;
        this.connectionService.getFriendList(sid)
            .then(function (students) {
            _this.students = students;
        });
    };
    FriendListModalComponent.prototype.forwardJob = function (jid, sender, receiver) {
        this.jobService.forwardJob(jid, sender, receiver)
            .then(function (res) { return $('#friend-list-modal').modal('toggle'); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FriendListModalComponent.prototype, "jid", void 0);
    FriendListModalComponent = __decorate([
        core_1.Component({
            selector: 'app-friend-list-modal',
            template: __webpack_require__("./src/app/components/friend-list-modal/friend-list-modal.component.html"),
            styles: [__webpack_require__("./src/app/components/friend-list-modal/friend-list-modal.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            connection_service_1.ConnectionService,
            job_service_1.JobService])
    ], FriendListModalComponent);
    return FriendListModalComponent;
}());
exports.FriendListModalComponent = FriendListModalComponent;


/***/ }),

/***/ "./src/app/components/friend-list/friend-list.component.css":
/***/ (function(module, exports) {

module.exports = ".table-item {\n    font-size: 1.2em;\n}\n\n.table-column-name {\n    font-size: 1.5em;\n}\n\n.detail-button {\n    font-size: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/friend-list/friend-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1>All Connections</h1>\n      \n    <table class=\"table\">\n        <thead>\n            <tr class=\"table-column-name\">\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">University</th>\n                <th scope=\"col\">Degree</th>\n                <th scope=\"col\">Major</th>\n                <th scope=\"col\">Skills</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"table-item\" *ngFor=\"let student of students\">\n                <ng-container *ngIf=\"student.sid !== sid\">\n                    <td>{{student.sname}}</td>\n                    <td>{{student.university}}</td>\n                    <td>{{student.degree}}</td>\n                    <td>{{student.major}}</td>\n                    <td>{{student.skill}}</td>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-info btn-sm detail-button\"\n                            [routerLink]=\"['/student-detail', student.sid]\">\n                            Detail\n                        </button>\n                    </td>\n                </ng-container>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/components/friend-list/friend-list.component.ts":
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
var connection_service_1 = __webpack_require__("./src/app/services/connection.service.ts");
var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(auth, connectionService) {
        this.auth = auth;
        this.connectionService = connectionService;
        this.sid = this.auth.getSid();
    }
    FriendListComponent.prototype.ngOnInit = function () {
        this.getFriendList(this.sid);
    };
    FriendListComponent.prototype.getFriendList = function (sid) {
        var _this = this;
        this.connectionService.getFriendList(sid)
            .then(function (students) {
            _this.students = students;
        });
    };
    FriendListComponent = __decorate([
        core_1.Component({
            selector: 'app-friend-list',
            template: __webpack_require__("./src/app/components/friend-list/friend-list.component.html"),
            styles: [__webpack_require__("./src/app/components/friend-list/friend-list.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            connection_service_1.ConnectionService])
    ], FriendListComponent);
    return FriendListComponent;
}());
exports.FriendListComponent = FriendListComponent;


/***/ }),

/***/ "./src/app/components/invitation-list/invitation-list.component.css":
/***/ (function(module, exports) {

module.exports = ".table-item {\n    font-size: 1.2em;\n}\n\n.table-column-name {\n    font-size: 1.5em;\n}"

/***/ }),

/***/ "./src/app/components/invitation-list/invitation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>New Invitations</h1>     \n  <table class=\"table\">\n      <thead>\n          <tr class=\"table-column-name\">\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">University</th>\n              <th></th>\n              <th></th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr class=\"table-item\" *ngFor=\"let invitation of invitations\">\n            <ng-container *ngIf=\"invitation.istatus === 'awaiting'\">\n              <td>{{invitation.sname}}</td>\n              <td>{{invitation.university}}</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-info btn-md detail-button\" style=\"float:right; background-color:green\"\n                (click)=\"handleInvitation(invitation.sd, receiver, 'accepted')\">\n                  Accept\n                </button>\n              </td>\n              <td>\n                <button type=\"button\" class=\"btn btn-info btn-md detail-button\" style=\"background-color:red\"\n                  (click)=\"handleInvitation(invitation.sd, receiver, 'declined')\">\n                  Decline\n                </button>\n              </td>\n            </ng-container>\n          </tr>\n      </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/invitation-list/invitation-list.component.ts":
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
var connection_service_1 = __webpack_require__("./src/app/services/connection.service.ts");
var InvitationListComponent = /** @class */ (function () {
    function InvitationListComponent(auth, connectionService) {
        this.auth = auth;
        this.connectionService = connectionService;
        this.receiver = this.auth.getSid();
        this.isFriend = false;
    }
    InvitationListComponent.prototype.ngOnInit = function () {
        this.getInvitationList(this.receiver);
    };
    InvitationListComponent.prototype.getInvitationList = function (sid) {
        var _this = this;
        this.connectionService.getInvitationList(sid)
            .then(function (invitations) {
            _this.invitations = invitations;
        });
    };
    InvitationListComponent.prototype.checkFriend = function (sender, receiver) {
        var _this = this;
        this.connectionService.getFriendList(sender)
            .then(function (friends) {
            for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
                var friend = friends_1[_i];
                if (friend['sid'] === receiver) {
                    _this.isFriend = true;
                    break;
                }
            }
            _this.isFriend = false;
        });
    };
    InvitationListComponent.prototype.handleInvitation = function (sender, receiver, status) {
        this.checkFriend(sender, receiver);
        console.log(sender);
        if (this.isFriend) {
            window.alert("You are already connected!");
            this.connectionService.handleFriendRequest(sender, receiver, 'declined')
                .then(function (res) { return window.location.reload(); });
        }
        else {
            this.connectionService.handleFriendRequest(sender, receiver, status)
                .then(function (res) { return window.location.reload(); });
        }
    };
    InvitationListComponent = __decorate([
        core_1.Component({
            selector: 'app-invitation-list',
            template: __webpack_require__("./src/app/components/invitation-list/invitation-list.component.html"),
            styles: [__webpack_require__("./src/app/components/invitation-list/invitation-list.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            connection_service_1.ConnectionService])
    ], InvitationListComponent);
    return InvitationListComponent;
}());
exports.InvitationListComponent = InvitationListComponent;


/***/ }),

/***/ "./src/app/components/job-detail/job-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".info-item {\n    padding-left: 2.0em;\n}\n\n.info-content {\n    padding-left: 2.0em;\n}\n\n.footer-button {\n    padding-top: 2.0em;\n}"

/***/ }),

/***/ "./src/app/components/job-detail/job-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngFor=\"let job of jobInfo\">\n\n    <h1>{{job.title}}</h1>\n    <div>\n      <h5>posted on: {{job.posttime}}</h5>\n    </div>\n    \n    <div class=\"info-item\">\n      <h3>Company</h3>\n      <h4 class=\"info-content\"><a [routerLink]=\"['/company-detail', job.cid]\">{{job.cname}}</a></h4>\n    </div>\n  \n    <div class=\"info-item\">\n      <h3>Location</h3>\n      <h4 class=\"info-content\">{{job.jlocation}}</h4>\n    </div>\n  \n    <div class=\"info-item\">\n      <h3>Salary</h3>\n      <h4 class=\"info-content\">{{job.salary}}</h4>\n    </div>\n  \n    <div class=\"info-item\">\n      <h3>Degree Constraints</h3>\n      <h4 class=\"info-content\">{{job.academicbar}}</h4>\n    </div>\n  \n    <div class=\"info-item\">\n      <h3>Major Constraints</h3>\n      <h4 class=\"info-content\">{{job.majorbar}}</h4>\n    </div>\n  \n    <div class=\"info-item\">\n      <h3>Job Description</h3>\n      <h4 class=\"info-content\">{{job.desc}}</h4>\n    </div>\n  \n    <div class=\"footer-button row\">\n        <button type=\"button\" *ngIf=\"!hasApplied\" class=\"btn btn-info btn-md\"\n          (click) =\"applyForJob(jid, sid)\">\n          Apply\n        </button>\n        <h4 *ngIf=\"hasApplied\" style=\"color:red\">\n          {{appStatus}}\n        </h4>\n        <button type=\"button\" class=\"btn btn-info btn-md\"\n          (click) =\"showFriendList(job.jid)\">\n          Forward\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary btn-md pull-right\"\n          (click)=\"backToLastPage()\">\n          Back\n        </button>\n    </div>\n  \n  </div>\n\n  <app-friend-list-modal [jid]=\"jid\"></app-friend-list-modal>"

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
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var JobDetailComponent = /** @class */ (function () {
    function JobDetailComponent(_location, route, auth, jobService, searchService) {
        this._location = _location;
        this.route = route;
        this.auth = auth;
        this.jobService = jobService;
        this.searchService = searchService;
        this.sid = this.auth.getSid();
        this.jid = "";
        this.appStatus = "";
        this.hasApplied = false;
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.jid = params['jid'];
            _this.getJobInfo(_this.jid);
            _this.checkApplication(_this.jid, _this.sid);
        });
    };
    JobDetailComponent.prototype.getJobInfo = function (jid) {
        var _this = this;
        this.searchService.findJobById(jid)
            .then(function (jobInfo) {
            _this.jobInfo = jobInfo;
        });
    };
    JobDetailComponent.prototype.checkApplication = function (jid, sid) {
        var _this = this;
        this.jobService.getApplicationList(sid)
            .then(function (applications) {
            for (var _i = 0, applications_1 = applications; _i < applications_1.length; _i++) {
                var application = applications_1[_i];
                if (application['jid'] === jid) {
                    _this.hasApplied = true;
                    _this.getApplicationStatus(jid, sid);
                    break;
                }
            }
        });
    };
    JobDetailComponent.prototype.applyForJob = function (jid, sid) {
        this.jobService.applyForJob(jid, sid)
            .then(function (res) { return window.location.reload(); });
    };
    JobDetailComponent.prototype.getApplicationStatus = function (jid, sid) {
        var _this = this;
        this.jobService.getApplication(jid, sid)
            .then(function (applications) {
            for (var _i = 0, applications_2 = applications; _i < applications_2.length; _i++) {
                var application = applications_2[_i];
                _this.appStatus = application['appstatus'];
            }
        });
    };
    JobDetailComponent.prototype.showFriendList = function (jid) {
        $('#friend-list-modal').modal('show');
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
            router_1.ActivatedRoute,
            auth_service_1.AuthService,
            job_service_1.JobService,
            search_service_1.SearchService])
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

module.exports = "<div class=\"container\">\n\n    <h1>Search Results</h1>\n      \n    <table class=\"table\">\n        <thead>\n            <tr class=\"table-column-name\">\n                <th scope=\"col\">Job Title</th>\n                <th scope=\"col\">Company</th>\n                <th scope=\"col\">Location</th>\n                <th scope=\"col\">Salary</th>\n                <th scope=\"col\">Post Time</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"table-item\" *ngFor=\"let job of jobs\">\n                    <td>{{job.title}}</td>  \n                    <td>{{job.cname}}</td>\n                    <td>{{job.jlocation}}</td>\n                    <td>{{job.salary}}</td>\n                    <td>{{job.posttime}}</td>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-info btn-sm detail-button\"\n                            [routerLink]=\"['/job-detail', job.jid]\">\n                            Detail\n                        </button>\n                    </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var JobListComponent = /** @class */ (function () {
    function JobListComponent(route, auth, searchService) {
        this.route = route;
        this.auth = auth;
        this.searchService = searchService;
    }
    JobListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getJobSearchList(params['keyword']);
        });
    };
    JobListComponent.prototype.getJobSearchList = function (keyword) {
        var _this = this;
        this.searchService.findJobsByKeyword(keyword)
            .then(function (jobs) {
            _this.jobs = jobs;
        });
    };
    JobListComponent = __decorate([
        core_1.Component({
            selector: 'app-job-list',
            template: __webpack_require__("./src/app/components/job-list/job-list.component.html"),
            styles: [__webpack_require__("./src/app/components/job-list/job-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            auth_service_1.AuthService,
            search_service_1.SearchService])
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

module.exports = "<div class=\"container\">\n  <form class=\"form-signin\">\n    <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align:center\">Student Login</h1>\n\n    <p *ngIf=\"error\" style=\"color:red\">{{error}}</p>\n\n    <input type=\"email\" id=\"inputId\" class=\"form-control\" placeholder=\"User ID\" required autofocus\n      [(ngModel)] = \"sid\" name=\"sid\">\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required\n      [(ngModel)] = \"password\" name=\"password\">\n\n    <button class=\"btn btn-lg btn-primary btn-block submit-btn\" type=\"submit\"\n      (click)=\"submitForm()\">\n      Login\n    </button>\n\n    <div align=\"right\" style=\"font-size:1.2em\">\n      <span> New to Jobster?</span>\n      <span><a href=\"#\" routerLink=\"/signup\"> Sign Up</a></span>\n    </div>\n\n    <div align=\"center\" style=\"font-size:1.0em; margin-top:1.0em;\">\n      <span>An employer?</span>\n      <span><a href=\"../c\"> Login as employer</a></span>\n    </div>\n\n  </form>\n</div>"

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
        this.sid = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.isUserAuthenticated()) {
            this.router.navigateByUrl('/');
        }
    };
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        this.auth.logIn(this.sid, this.password).then(function (res) {
            if (res.error) {
                _this.error = res.error;
            }
            else {
                _this.auth.authenticateUser(res.token, res.sid);
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

/***/ "./src/app/components/message-list/message-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/message-list/message-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container static-bottom\" style=\"margin-top:2.0em; margin-bottom:2.0em;\">\n  <h4>New Message</h4>\n  <div class=\"form-group\">\n    <textarea name = \"newMessage\" id=\"newMessage\" class=\"form-control\"\n      placeholder=\"New message...\" \n      [(ngModel)] = \"newMessage\" rows=\"3\">\n    </textarea>\n    <button class=\"btn btn-info pull-right\" style=\"margin-top:1.0em\"\n      (click)=\"sendMessage(me, you, newMessage)\">\n      Send\n    </button>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <h4 *ngIf=\"flag\">No Messages</h4>\n  \n  <ng-container *ngFor=\"let message of messages\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-4\">\n        <div class=\"panel panel-default\" *ngIf=\"message.sid === you\">\n          <div class=\"panel-heading\">\n            <strong>{{message.sname}} wrote:</strong>\n            <span class=\"pull-right\">{{message.mtime}}</span>\n          </div>\n          <div class=\"panel-body\">\n            {{message.content}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-0\">\n        <div class=\"panel panel-success col-4\" *ngIf=\"message.sid === me\">\n          <div class=\"panel-heading\">\n            <strong>I wrote:</strong>\n            <span class=\"pull-right\">{{message.mtime}}</span>\n          </div>\n          <div class=\"panel-body\">\n            {{message.content}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n</div>"

/***/ }),

/***/ "./src/app/components/message-list/message-list.component.ts":
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
var message_service_1 = __webpack_require__("./src/app/services/message.service.ts");
var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(route, auth, messageService) {
        this.route = route;
        this.auth = auth;
        this.messageService = messageService;
        this.me = this.auth.getSid();
        this.you = "";
        this.newMessage = "";
        this.flag = false;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.you = params['sid'];
            _this.getMessages(_this.me, _this.you);
        });
    };
    MessageListComponent.prototype.getMessages = function (me, you) {
        var _this = this;
        this.messageService.getMessageList(me, you)
            .then(function (messages) {
            if (messages.length === 0) {
                _this.flag = true;
            }
            _this.messages = messages;
            for (var _i = 0, _a = _this.messages; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.mstatus === 'unread' && m.fid === me) {
                    _this.updateMessageStatus(m.sid, m.fid, m.mtime);
                }
            }
        });
    };
    MessageListComponent.prototype.sendMessage = function (me, you, content) {
        if (this.newMessage) {
            this.messageService.sendMessage(me, you, content)
                .then(function (res) { return window.location.reload(); });
        }
    };
    MessageListComponent.prototype.updateMessageStatus = function (sender, receiver, mtime) {
        this.messageService.updateMessageStatus(sender, receiver, mtime)
            .then(function (res) { return console.log('update as read'); });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'app-message-list',
            template: __webpack_require__("./src/app/components/message-list/message-list.component.html"),
            styles: [__webpack_require__("./src/app/components/message-list/message-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            auth_service_1.AuthService,
            message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n          <font color=\"#ffffff\" size=\"5.5em\"><b>Jobster</b></font>\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" style=\"font-size:1.1em\">\n      <ul class=\"nav navbar-nav\">\n          <li><a routerLink=\"/applications\">My Applications</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Connection <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a routerLink=\"/followings\">Followings</a>\n                <a routerLink=\"/invitations\">Connection Requests</a>\n                <a routerLink=\"/friends\">All Connections</a>\n              </li>\n            </ul>\n          </li>\n      </ul>\n\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Please enter keywords\" [(ngModel)]=\"searchInput\" name =\"student-search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\" [routerLink]=\"['student-search-list', searchInput]\">\n          Search Students\n        </button>\n        <button type=\"submit\" class=\"btn btn-default\" [routerLink]=\"['company-search-list', searchInput]\">\n          Search Companies\n        </button>  \n        <button type=\"submit\" class=\"btn btn-default\" [routerLink]=\"['job-search-list', searchInput]\">\n          Search Jobs\n        </button>      \n      </form>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/new-messages\">Messages <span class=\"badge\">{{msg_num}}</span></a></li>\n        <!-- <li><a routerLink=\"/login\" *ngIf=\"!auth.isUserAuthenticated()\">Login</a></li> -->\n        <!-- <li><a routerLink=\"/signup\" *ngIf=\"!auth.isUserAuthenticated()\">Sign Up</a></li> -->\n        <li><a routerLink=\"/profile\" *ngIf=\"auth.isUserAuthenticated()\">Profile</a></li>\n        <li><a (click)=\"logout()\" *ngIf=\"auth.isUserAuthenticated()\">Logout</a></li>\n      </ul>\n\n    </div>\n  </div>\n</nav>"

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
var message_service_1 = __webpack_require__("./src/app/services/message.service.ts");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, auth, messageService) {
        this.router = router;
        this.auth = auth;
        this.messageService = messageService;
        this.sid = this.auth.getSid();
        this.searchInput = "";
        this.msg_num = 0;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getNewMessageNum(this.sid);
    };
    NavbarComponent.prototype.ngOnDestory = function () {
        this.subscriptionMessageNum.unsubscribe();
    };
    NavbarComponent.prototype.getNewMessageNum = function (me) {
        var _this = this;
        this.messageService.getNewMessageCount(me)
            .subscribe(function (cnt) {
            _this.msg_num = cnt;
        });
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
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            message_service_1.MessageService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/new-message-list/new-message-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-message-list/new-message-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h4 *ngIf=\"flag\">No New Messages</h4>\n\n  <div class=\"row\" *ngFor=\"let message of messages\" [routerLink]=\"['/messages', message.sid]\">\n    <div class=\"col-md-8 col-md-offset-0\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <strong>{{message.sname}} wrote:</strong>\n          <span class=\"pull-right\">{{message.mtime}}</span>\n        </div>\n        <div class=\"panel-body\">          \n          {{message.content}}\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/new-message-list/new-message-list.component.ts":
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
var message_service_1 = __webpack_require__("./src/app/services/message.service.ts");
var NewMessageListComponent = /** @class */ (function () {
    function NewMessageListComponent(auth, messageService) {
        this.auth = auth;
        this.messageService = messageService;
        this.me = this.auth.getSid();
        this.flag = false;
    }
    NewMessageListComponent.prototype.ngOnInit = function () {
        this.getNewMessages(this.me);
    };
    NewMessageListComponent.prototype.getNewMessages = function (me) {
        var _this = this;
        this.messageService.getNewMessageList(me)
            .then(function (messages) {
            if (messages.length === 0) {
                _this.flag = true;
            }
            _this.messages = messages;
        });
    };
    NewMessageListComponent = __decorate([
        core_1.Component({
            selector: 'app-new-message-list',
            template: __webpack_require__("./src/app/components/new-message-list/new-message-list.component.html"),
            styles: [__webpack_require__("./src/app/components/new-message-list/new-message-list.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            message_service_1.MessageService])
    ], NewMessageListComponent);
    return NewMessageListComponent;
}());
exports.NewMessageListComponent = NewMessageListComponent;


/***/ }),

/***/ "./src/app/components/signup-success/signup-success.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup-success/signup-success.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"signup-success\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"exampleModalCenterTitle\">Sign Up Success!\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </h3>\n      </div>\n      <div class=\"modal-body\">\n        <h4>Your User ID is: {{sid}}</h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" routerLink=\"/login\">Login</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
        __metadata("design:type", Object)
    ], SignupSuccessComponent.prototype, "sid", void 0);
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

module.exports = "<div class=\"container\">\n  <form class=\"form-signup\">\n    <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align:center\">Student Sign Up</h1>\n\n    <p *ngIf=\"error\" style=\"color:red\">{{error}}</p>\n\n    <label for=\"inputId\" class=\"sr-only\">Full Name</label>\n    <input type=\"email\" id=\"inputName\" class=\"form-control\" placeholder=\"Full Name\" required autofocus\n      [(ngModel)] = \"sname\" name=\"sname\">\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required\n      [(ngModel)] = \"password\" name=\"password\">\n\n    <label for=\"confirmPassword\" class=\"sr-only\">Confirm Password</label>\n    <input type=\"password\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\" required\n      [(ngModel)] = \"confirm_password\" name=\"confirm_password\">\n\n    <button class=\"btn btn-lg btn-primary btn-block submit-btn\" type=\"submit\" (click)=\"submitForm()\">\n      Sign Up\n    </button>\n\n    <div align=\"right\" style=\"font-size:1.2em\">\n      <span> Already have an account?</span>\n      <span><a href=\"#\" routerLink=\"/login\">Login</a></span>\n    </div>\n\n  </form>\n</div>\n\n<app-signup-success [sid]=\"sid\"></app-signup-success>"

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
        this.sid = "";
        this.sname = "";
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
            this.auth.signUp(this.sname, this.password).then(function (res) {
                if (res.error) {
                    _this.error = res.error;
                }
                else {
                    _this.sid = res.sid;
                }
                if (!_this.error) {
                    $('#signup-success').modal('show');
                }
            });
        }
    };
    SignupComponent.prototype.checkSubmit = function () {
        if (!this.sname || !this.password || !this.confirm_password) {
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

module.exports = "<div class=\"container\" *ngFor=\"let student of studentInfo\">\n\n  <h1>{{student.sname}}</h1>\n\n  <div class=\"info-item\">\n    <h3>University</h3>\n    <h4 class=\"info-content\">{{student.university}}</h4>\n  </div>\n\n  <div class=\"info-item\">\n    <h3>Degree</h3>\n    <h4 class=\"info-content\">{{student.degree}}</h4>\n  </div>\n\n  <div class=\"info-item\">\n    <h3>Major</h3>\n    <h4 class=\"info-content\">{{student.major}}</h4>\n  </div>\n\n  <div class=\"info-item\">\n    <h3>Skills</h3>\n    <h4 class=\"info-content\">{{student.skill}}</h4>\n  </div>\n\n  <div class=\"info-item\" *ngIf=\"isFriend\">\n    <h3>GPA</h3>\n    <h4 class=\"info-content\">{{student.gpa}}</h4>\n  </div>\n\n  <div class=\"info-item\" *ngIf=\"isFriend\">\n    <h3>Resume</h3>\n    <textarea readonly name = \"resume\" placeholder=\"resume.\" \n      [(ngModel)] = \"resume\" rows=\"10\" cols=\"80\">\n    </textarea>\n  </div>\n\n  <div class=\"footer-button\">\n      <button type=\"button\" *ngIf=\"!isFriend\" class=\"btn btn-info btn-md\"\n        (click) =\"sendFriendRequest(sender, receiver)\">\n        Connect\n      </button>\n      <button type=\"button\" *ngIf=\"isFriend\" class=\"btn btn-info btn-md\"\n        [routerLink]=\"['/messages', receiver]\">\n        Messages\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary btn-md pull-right\"\n        (click)=\"backToLastPage()\">\n        Back\n      </button>\n  </div>\n\n</div>"

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
var connection_service_1 = __webpack_require__("./src/app/services/connection.service.ts");
var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(_location, route, auth, connectionService, searchService) {
        this._location = _location;
        this.route = route;
        this.auth = auth;
        this.connectionService = connectionService;
        this.searchService = searchService;
        this.sender = this.auth.getSid();
        this.receiver = "";
        this.isFriend = false;
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.receiver = params['sid'];
            _this.getStudentInfo(_this.receiver);
            _this.getResume(_this.receiver);
            _this.checkFriend(_this.sender, _this.receiver);
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
    StudentDetailComponent.prototype.checkFriend = function (sender, receiver) {
        var _this = this;
        this.connectionService.getFriendList(sender)
            .then(function (friends) {
            for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
                var friend = friends_1[_i];
                if (friend['sid'] === receiver) {
                    _this.isFriend = true;
                    break;
                }
            }
        });
    };
    StudentDetailComponent.prototype.sendFriendRequest = function (sender, receiver) {
        this.connectionService.sendFriendRequest(sender, receiver)
            .then(function (res) { return window.location.reload(); });
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
            connection_service_1.ConnectionService,
            search_service_1.SearchService])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());
exports.StudentDetailComponent = StudentDetailComponent;


/***/ }),

/***/ "./src/app/components/student-home/student-home.component.css":
/***/ (function(module, exports) {

module.exports = ".push-col-left {\n    margin-left: 6em;\n    margin-top: 2em;\n    margin-bottom: 2em;\n}\n\n.push-col-right {\n    margin-right: 6em;\n    margin-top: 2em;\n    margin-bottom: 2em;\n}"

/***/ }),

/***/ "./src/app/components/student-home/student-home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Student Home Page</h1>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-5 push-col-left\">\n            <h4>Job Notifications</h4>\n            <ng-container *ngFor=\"let notification of notifications\">\n                <div class=\"row\">\n                    <div class=\"panel panel-primary\" *ngIf=\"notification.jnstatus==='unread'\">\n                        <div class=\"panel-heading\">\n                            From <strong>{{notification.cname}}</strong>: <span class=\"pull-right\">{{notification.jntime}}</span>\n                        </div>\n                        <div class=\"panel-body\">\n                            {{notification.title}}<button type=\"button\" class=\"btn btn-default btn-sm detail-button pull-right\"\n                                (click)=\"showNotificationDetail(notification.jid, sid, notification.jntime)\">Detail</button>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\" *ngIf=\"notification.jnstatus==='read'\">\n                        <div class=\"panel-heading\">\n                            From <strong>{{notification.cname}}</strong>: <span class=\"pull-right\">{{notification.jntime}}</span>\n                        </div>\n                        <div class=\"panel-body\">\n                            {{notification.title}}<button type=\"button\" class=\"btn btn-default btn-sm detail-button pull-right\"\n                                (click)=\"showNotificationDetail(notification.jid, sid, notification.jntime)\">Detail</button>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n\n        <div class=\"col-md-5 push-col-right pull-right\">\n            <h4>Job Forwards</h4>\n            <ng-container *ngFor=\"let forward of forwards\">\n                <div class=\"row\">\n                    <div class=\"panel panel-primary\" *ngIf=\"forward.jfstatus==='unread'\">\n                        <div class=\"panel-heading\">\n                            From <strong>{{forward.sname}}</strong>: <span class=\"pull-right\">{{forward.jftime}}</span>\n                        </div>\n                        <div class=\"panel-body\">\n                            <p>Hi, I recommend a job to you.</p>\n                            <strong>{{forward.cname}}:</strong>\n                            {{forward.title}}<button type=\"button\" class=\"btn btn-default btn-sm detail-button pull-right\"\n                                (click)=\"showForwardDetail(forward.jid, forward.sid, sid, forward.jftime)\">Detail</button>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\" *ngIf=\"forward.jfstatus==='read'\">\n                        <div class=\"panel-heading\">\n                            From <strong>{{forward.sname}}</strong>: <span class=\"pull-right\">{{forward.jftime}}</span>\n                        </div>\n                        <div class=\"panel-body\">\n                            <p>Hi, I recommend a job to you.</p>\n                            <strong>{{forward.cname}}:</strong>\n                            {{forward.title}}<button type=\"button\" class=\"btn btn-default btn-sm detail-button pull-right\"\n                                (click)=\"showForwardDetail(forward.jid, forward.sid, sid, forward.jftime)\">Detail</button>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div> \n</div>"

/***/ }),

/***/ "./src/app/components/student-home/student-home.component.ts":
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
var job_service_1 = __webpack_require__("./src/app/services/job.service.ts");
var StudentHomeComponent = /** @class */ (function () {
    function StudentHomeComponent(router, auth, jobService) {
        this.router = router;
        this.auth = auth;
        this.jobService = jobService;
        this.sid = this.auth.getSid();
    }
    StudentHomeComponent.prototype.ngOnInit = function () {
        this.getJobNotifications(this.sid);
        this.getJobNoForwards(this.sid);
    };
    StudentHomeComponent.prototype.getJobNotifications = function (sid) {
        var _this = this;
        this.jobService.getJobNotifications(sid)
            .then(function (notifications) {
            _this.notifications = notifications;
        });
    };
    StudentHomeComponent.prototype.getJobNoForwards = function (sid) {
        var _this = this;
        this.jobService.getJobForwards(sid)
            .then(function (forwards) {
            _this.forwards = forwards;
        });
    };
    StudentHomeComponent.prototype.showNotificationDetail = function (jid, sid, time) {
        var _this = this;
        this.jobService.updateJobNotificationStatus(jid, sid, time)
            .then(function (res) {
            _this.router.navigateByUrl('/job-detail/' + jid);
        });
    };
    StudentHomeComponent.prototype.showForwardDetail = function (jid, sender, receiver, time) {
        var _this = this;
        this.jobService.updateJobForwardStatus(jid, sender, receiver, time)
            .then(function (res) {
            _this.router.navigateByUrl('/job-detail/' + jid);
        });
    };
    StudentHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-student-home',
            template: __webpack_require__("./src/app/components/student-home/student-home.component.html"),
            styles: [__webpack_require__("./src/app/components/student-home/student-home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            job_service_1.JobService])
    ], StudentHomeComponent);
    return StudentHomeComponent;
}());
exports.StudentHomeComponent = StudentHomeComponent;


/***/ }),

/***/ "./src/app/components/student-list/student-list.component.css":
/***/ (function(module, exports) {

module.exports = ".table-item {\n    font-size: 1.2em;\n}\n\n.table-column-name {\n    font-size: 1.5em;\n}\n\n.detail-button {\n    font-size: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/student-list/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1>Search Results</h1>\n      \n    <table class=\"table\">\n        <thead>\n            <tr class=\"table-column-name\">\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">University</th>\n                <th scope=\"col\">Degree</th>\n                <th scope=\"col\">Major</th>\n                <th scope=\"col\">Skills</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"table-item\" *ngFor=\"let student of students\">\n                <ng-container *ngIf=\"student.sid !== sid\">\n                    <td>{{student.sname}}</td>\n                    <td>{{student.university}}</td>\n                    <td>{{student.degree}}</td>\n                    <td>{{student.major}}</td>\n                    <td>{{student.skill}}</td>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-info btn-sm detail-button\"\n                            [routerLink]=\"['/student-detail', student.sid]\">\n                            Detail\n                        </button>\n                    </td>\n                </ng-container>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/components/student-list/student-list.component.ts":
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
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(route, auth, searchService) {
        this.route = route;
        this.auth = auth;
        this.searchService = searchService;
        this.sid = this.auth.getSid();
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getStudentSearchList(params['keyword']);
        });
    };
    StudentListComponent.prototype.getStudentSearchList = function (keyword) {
        var _this = this;
        this.searchService.findStudentsByKeyword(keyword)
            .then(function (students) {
            _this.students = students;
        });
    };
    StudentListComponent = __decorate([
        core_1.Component({
            selector: 'app-student-list',
            template: __webpack_require__("./src/app/components/student-list/student-list.component.html"),
            styles: [__webpack_require__("./src/app/components/student-list/student-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            auth_service_1.AuthService,
            search_service_1.SearchService])
    ], StudentListComponent);
    return StudentListComponent;
}());
exports.StudentListComponent = StudentListComponent;


/***/ }),

/***/ "./src/app/components/student-profile/student-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/student-profile/student-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>My Profile</h2>\n  <div>\n    <form #formRef = \"ngForm\">\n      \n      <div class=\"form-group\">\n        <strong>ID: {{studentInfo.sid}}</strong>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"studentInfo.sname\" name = \"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"university\">University</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"studentInfo.university\" name = \"university\">\n      </div>\n\n      <!-- <div class=\"form-group\">\n        <label for=\"degree\">Degree</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"studentInfo.degree\" name = \"degree\">\n      </div> -->\n\n      <div class=\"form-group\">\n        <label for=\"degree\">Degree</label> \n        <select class=\"form-control\" name=\"degree\"\n          [(ngModel)] = \"studentInfo.degree\">\n            <option *ngFor = \"let degree of degrees\" [value] = \"degree\">\n              {{degree}}\n            </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"major\">Major</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"studentInfo.major\" name = \"major\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"gpa\">GPA</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"studentInfo.gpa\" name = \"gpa\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"skill\">Skills</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"studentInfo.skill\" name = \"skill\">\n      </div>\n\n      <!-- <div class=\"form-group\">\n        <label for=\"resume\">Resume</label>\n        <input type=\"text\" class=\"form-control\"\n          [(ngModel)] = \"resume\" name = \"resume\">\n      </div> -->\n      <div class=\"form-group\">\n        <label for=\"resume\">Resume</label>\n        <textarea readonly name = \"resume\" class=\"form-control\"\n          placeholder=\"My resume.\" \n          [(ngModel)] = \"resume\" rows=\"10\">\n        </textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"file\" (change)=\"getFile($event)\">\n      </div>\n\n    </form>\n  </div>\n\n  <div class=\"footer-button\">\n    <button type=\"button\" class=\"btn btn-info btn-md\"\n      (click) =\"updateStudentProfile(studentInfo)\">\n      Update\n    </button>\n    <!-- <button type=\"button\" class=\"btn btn-info btn-md\"\n      (click) =\"updateResume(sid, filestring)\">\n      Upload\n    </button> -->\n  </div>\n</div>\n\n<br/>\n<br/>"

/***/ }),

/***/ "./src/app/components/student-profile/student-profile.component.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var search_service_1 = __webpack_require__("./src/app/services/search.service.ts");
var StudentProfileComponent = /** @class */ (function () {
    function StudentProfileComponent(_location, auth, searchService, httpClient) {
        this._location = _location;
        this.auth = auth;
        this.searchService = searchService;
        this.httpClient = httpClient;
        this.degrees = ['BS', 'MS', 'PhD'];
        this.sid = this.auth.getSid();
        this.studentInfo = {
            sid: "",
            sname: "",
            university: "",
            degree: "",
            major: "",
            gpa: "",
            skill: "",
            resume: ""
        };
    }
    StudentProfileComponent.prototype.ngOnInit = function () {
        this.getStudentProfile(this.sid);
        this.getResume(this.sid);
    };
    StudentProfileComponent.prototype.getStudentProfile = function (sid) {
        var _this = this;
        this.searchService.findStudentById(sid)
            .then(function (studentInfo) {
            // this.studentInfo = Object.assign({}, studentInfo[0]);
            _this.studentInfo.sid = studentInfo[0]['sid'];
            _this.studentInfo.sname = studentInfo[0]['sname'];
            _this.studentInfo.university = studentInfo[0]['university'];
            _this.studentInfo.degree = studentInfo[0]['degree'];
            _this.studentInfo.major = studentInfo[0]['major'];
            _this.studentInfo.gpa = studentInfo[0]['gpa'];
            _this.studentInfo.skill = studentInfo[0]['skill'];
            _this.studentInfo.resume = studentInfo[0]['resume'];
        });
    };
    StudentProfileComponent.prototype.getFile = function (event) {
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.file);
    };
    StudentProfileComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        //this.filestring = btoa(binaryString);  // Converting binary string data.
        this.filestring = binaryString; // Converting binary string data.
        this.updateResume(this.sid, this.filestring);
    };
    StudentProfileComponent.prototype.getResume = function (sid) {
        var _this = this;
        this.searchService.getResumeById(sid).then(function (resume) { return _this.resume = resume; });
    };
    StudentProfileComponent.prototype.updateStudentProfile = function (studentInfo) {
        this.searchService.updateStudentProfile(studentInfo)
            .then(function (res) { return window.location.reload(); });
    };
    StudentProfileComponent.prototype.updateResume = function (sid, filestring) {
        console.log(filestring);
        this.searchService.updateResume(sid, filestring)
            .then();
    };
    StudentProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-student-profile',
            template: __webpack_require__("./src/app/components/student-profile/student-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/student-profile/student-profile.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            auth_service_1.AuthService,
            search_service_1.SearchService,
            http_1.HttpClient])
    ], StudentProfileComponent);
    return StudentProfileComponent;
}());
exports.StudentProfileComponent = StudentProfileComponent;


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
        // this.authenticateUser('stoken', 's0001');
    }
    AuthService.prototype.authenticateUser = function (token, sid) {
        localStorage.setItem('stoken', token);
        localStorage.setItem('sid', sid);
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return localStorage.getItem('stoken') !== null;
    };
    AuthService.prototype.deauthenticateUser = function () {
        localStorage.removeItem('stoken');
        localStorage.removeItem('sid');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('stoken');
    };
    AuthService.prototype.getSid = function () {
        return localStorage.getItem('sid');
        //   return 's0001';
    };
    AuthService.prototype.signUp = function (sname, password) {
        var body = {
            name: sname,
            password: password,
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/student-signup", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AuthService.prototype.logIn = function (sid, password) {
        var body = {
            sid: sid,
            password: password,
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/student-login", body, options)
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

/***/ "./src/app/services/connection.service.ts":
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
var ConnectionService = /** @class */ (function () {
    function ConnectionService(httpClient) {
        this.httpClient = httpClient;
    }
    ConnectionService.prototype.sendFriendRequest = function (sender, receiver) {
        var body = {
            sender: sender,
            receiver: receiver,
            status: "awaiting"
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/invitations", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ConnectionService.prototype.handleFriendRequest = function (sender, receiver, status) {
        var body = {
            sender: sender,
            receiver: receiver,
            status: status
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/invitations", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ConnectionService.prototype.followCompany = function (sid, cid) {
        var body = {
            sid: sid,
            cid: cid
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/followings", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ConnectionService.prototype.getFriendList = function (sid) {
        return this.httpClient.get("api/v1/friends/" + sid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ConnectionService.prototype.getInvitationList = function (sid) {
        return this.httpClient.get("api/v1/invitations/" + sid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ConnectionService.prototype.getFollowingList = function (sid) {
        return this.httpClient.get("api/v1/followings/" + sid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ConnectionService.prototype.unfollowCompany = function (sid, cid) {
        var body = {
            sid: sid,
            cid: cid
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.patch("api/v1/followings", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ConnectionService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    ConnectionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ConnectionService);
    return ConnectionService;
}());
exports.ConnectionService = ConnectionService;


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
    JobService.prototype.getApplicationList = function (sid) {
        return this.httpClient.get("api/v1/applications-of-student/" + sid)
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
    JobService.prototype.applyForJob = function (jid, sid) {
        var body = {
            jid: jid,
            sid: sid
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/applications", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.getJobNotifications = function (sid) {
        return this.httpClient.get("api/v1/job-notifications/" + sid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.getJobForwards = function (sid) {
        return this.httpClient.get("api/v1/job-forwards/" + sid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.updateJobNotificationStatus = function (jid, sid, jntime) {
        var body = {
            jid: jid,
            sid: sid,
            jntime: jntime
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.patch("api/v1/job-notifications", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.updateJobForwardStatus = function (jid, sender, receiver, jftime) {
        var body = {
            jid: jid,
            sender: sender,
            receiver: receiver,
            jftime: jftime
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.patch("api/v1/job-forwards", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    JobService.prototype.forwardJob = function (jid, sender, receiver) {
        var body = {
            jid: jid,
            sender: sender,
            receiver: receiver
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/job-forwards", body, options)
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

/***/ "./src/app/services/message.service.ts":
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
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var MessageService = /** @class */ (function () {
    function MessageService(httpClient) {
        this.httpClient = httpClient;
        this._cnt = 0;
        this._newMessageCount = new BehaviorSubject_1.BehaviorSubject([]);
    }
    MessageService.prototype.getMessageList = function (sid1, sid2) {
        return this.httpClient.get("api/v1/messages/" + sid1 + "/" + sid2)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    MessageService.prototype.sendMessage = function (sender, receiver, content) {
        var body = {
            sender: sender,
            receiver: receiver,
            content: content
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/messages", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    MessageService.prototype.updateMessageStatus = function (sender, receiver, mtime) {
        var _this = this;
        var body = {
            sender: sender,
            receiver: receiver,
            mtime: mtime
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.patch("api/v1/messages", body, options)
            .toPromise()
            .then(function (res) {
            _this._cnt = _this._cnt - 1;
            _this._newMessageCount.next(_this._cnt);
        })
            .catch(this.handleError);
    };
    MessageService.prototype.getNewMessageList = function (receiver) {
        return this.httpClient.get("api/v1/new-messages/" + receiver)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    MessageService.prototype.getNewMessageCount = function (receiver) {
        var _this = this;
        this.httpClient.get("api/v1/new-messages/" + receiver)
            .toPromise()
            .then(function (res) {
            _this._cnt = res.length;
            _this._newMessageCount.next(_this._cnt);
        })
            .catch(this.handleError);
        return this._newMessageCount.asObservable();
    };
    MessageService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;


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
    SearchService.prototype.findCompanyById = function (cid) {
        return this.httpClient.get("api/v1/companies/" + cid)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.findCompaniesByKeyword = function (keyword) {
        var body = { keyword: keyword };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/companies/keywords", body, options)
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
    SearchService.prototype.findJobsByKeyword = function (keyword) {
        var body = { keyword: keyword };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/jobs/keywords", body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.updateStudentProfile = function (studentInfo) {
        var body = {
            sid: studentInfo.sid,
            sname: studentInfo.sname,
            university: studentInfo.university,
            degree: studentInfo.degree,
            major: studentInfo.major,
            gpa: studentInfo.gpa,
            skill: studentInfo.skill,
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/students", body, options)
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
    SearchService.prototype.updateResume = function (sid, resume) {
        var body = {
            resume: resume
        };
        var options = { headers: new http_1.HttpHeaders({ 'Connect-Type': 'application/json' }) };
        return this.httpClient.post("api/v1/resumes/" + sid, body, options)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    SearchService.prototype.getJobList = function (cid) {
        return this.httpClient.get("api/v1/jobs-of-company/" + cid)
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