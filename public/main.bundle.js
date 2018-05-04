webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_viewer_viewer_component__ = __webpack_require__("../../../../../src/app/components/viewer/viewer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'public', component: __WEBPACK_IMPORTED_MODULE_8__components_viewer_viewer_component__["a" /* ViewerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_notAuth_guard__["a" /* NotAuthGuard */]]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_notAuth_guard__["a" /* NotAuthGuard */]]
    },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: 'viewer', component: __WEBPACK_IMPORTED_MODULE_8__components_viewer_viewer_component__["a" /* ViewerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: 'viewer/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_viewer_viewer_component__["a" /* ViewerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Complexity-App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_tools_new_new_component__ = __webpack_require__("../../../../../src/app/components/tools/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__draggable_draggable_module__ = __webpack_require__("../../../../../src/app/draggable/draggable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_viewer_viewer_component__ = __webpack_require__("../../../../../src/app/components/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_tools_search_search_component__ = __webpack_require__("../../../../../src/app/components/tools/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_tools_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/tools/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tools_copy_copy_component__ = __webpack_require__("../../../../../src/app/components/tools/copy/copy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_tools_link_link_component__ = __webpack_require__("../../../../../src/app/components/tools/link/link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_tools_delete_delete_component__ = __webpack_require__("../../../../../src/app/components/tools/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_tools_dimension_dimension_component__ = __webpack_require__("../../../../../src/app/components/tools/dimension/dimension.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_views_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/components/views/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_views_network_network_component__ = __webpack_require__("../../../../../src/app/components/views/network/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_views_graph_graph_component__ = __webpack_require__("../../../../../src/app/components/views/graph/graph.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_tools_new_new_component__["a" /* NewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_viewer_viewer_component__["a" /* ViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_tools_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_tools_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_tools_copy_copy_component__["a" /* CopyComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_tools_link_link_component__["a" /* LinkComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_tools_delete_delete_component__["a" /* DeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_tools_dimension_dimension_component__["a" /* DimensionComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_views_timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_views_network_network_component__["a" /* NetworkComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_views_graph_graph_component__["a" /* GraphComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_16__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_17__draggable_draggable_module__["a" /* DraggableModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material__["b" /* MatNativeDateModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_10__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_19__services_internal_service__["a" /* InternalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".context {\r\n    font-size: 25px;\r\n\r\n}\r\n.card {\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.mat-success {\r\n    background-color: white;\r\n    color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\t\t<mat-grid-list [cols]=\"2\" rowHeight=\"2:1\">\r\n\t\t\t<mat-grid-tile>\r\n\t\t\t\t<mat-card class=\"card\">\r\n\t\t\t\t\t<mat-card-title>Welcome to the Complexity-App</mat-card-title>\r\n\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\tThe Complexity-App is a tool to (someday in the future) help you visualise and express complex thoughts.<br><br> At the moment this site is still in development.<br> For more information contact loebboas -@- gmail.com.\r\n\t\t\t\t\t</mat-card-content>   \r\n\t\t\t\t</mat-card> \r\n\t\t\t</mat-grid-tile>\r\n\t\t\t<mat-grid-tile>\r\n\t\t\t\t\t<mat-card class=\"card\">\r\n\t\t\t\t\t\t<mat-card-title>About us</mat-card-title>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t\tThis site is a project of the Complexity association.<br> Check out a different Site which does not yet exist for more information.\r\n\t\t\t\t\t\t</mat-card-content>   \r\n\t\t\t\t\t</mat-card> \r\n\t\t\t\t</mat-grid-tile>\r\n\t\t</mat-grid-list>\r\n\t\t<mat-grid-list *ngIf=\"!authService.loggedIn()\"  [cols]=\"2\" rowHeight=\"4:1\">\r\n\t\t\t<mat-grid-tile>\r\n\t\t\t\t<button mat-button routerLink=\"login\">Login</button>\r\n\t\t\t</mat-grid-tile>\r\n\t\t\t<mat-grid-tile>\r\n\t\t\t\t\t<button mat-button routerLink=\"register\"> Register</button>\r\n\t\t\t\t</mat-grid-tile>\r\n\t\t</mat-grid-list>\r\n\t\t<mat-grid-list *ngIf=\"authService.loggedIn()\" [cols]=\"2\" rowHeight=\"4:1\">\r\n\t\t\t\t<mat-grid-tile>\r\n\t\t\t\t\t<button mat-button routerLink=\"../viewer\">viewer</button>\r\n\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t<mat-grid-tile>\r\n\t\t\t\t\t\t<button mat-button (click)=\"onLogoutClick()\">Logout</button>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t</mat-grid-list>\r\n\t\t\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    HomeComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Login Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n\r\n  <!-- Username Field -->\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Password Field  -->\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- Submit Button -->\r\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, authGuard, internalService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.internalService = internalService;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['viewer']); // Navigate to dashboard view
                    }
                    _this.internalService.loadThoughts();
                }, 500);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_5__services_internal_service__["a" /* InternalService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.searchbar-form {\r\n  font-size: 14px;\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  min-height: 0px !important;\r\n}\r\n\r\n.searchbar-full-width {\r\n  width: 100%;\r\n\r\n}\r\n.toolbar-spacer {\r\n  -ms-flex: 1 1 auto;\r\n      flex: 1 1 auto;\r\n}\r\n\r\n.smaller {\r\n  font-size: 12px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row>\r\n      <span class=\"toolbar-spacer\"></span>\r\n            <app-search></app-search>\r\n        \r\n            <button mat-button *ngIf=\"!authService.loggedIn()\" [matMenuTriggerFor]=\"complexity\">Login or Register</button>\r\n            <button mat-button *ngIf=\"authService.loggedIn()\" [matMenuTriggerFor]=\"complexity\">{{ username | uppercase }}</button>\r\n            <mat-menu #complexity=\"matMenu\" xPosition=\"after\" [overlapTrigger]=\"false\">\r\n          <!-- If LoggedOut -->\r\n         \r\n          <button mat-menu-item *ngIf=\"!authService.loggedIn()\" routerLink=\"home\">Home</button>\r\n          <button mat-menu-item *ngIf=\"!authService.loggedIn()\" routerLink=\"login\">Login</button>\r\n          <button mat-menu-item *ngIf=\"!authService.loggedIn()\" routerLink=\"register\">Register</button>\r\n\r\n          <!-- If LoggedIn -->\r\n             \r\n          <button mat-menu-item *ngIf=\"authService.loggedIn()\"  routerLink=\"profile\">Profile</button>\r\n          <button mat-menu-item *ngIf=\"authService.loggedIn()\"  (click)=\"onLogoutClick()\">Logout</button>\r\n        </mat-menu>\r\n        \r\n      \r\n        <small class=\"smaller\"> Complexity-App v0.0.4</small>\r\n       \r\n  \r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(formBuilder, router, dataService, authService, internalService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dataService = dataService;
        this.authService = authService;
        this.internalService = internalService;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
    };
    NavbarComponent.prototype.selectThought = function (thought) {
        this.router.navigate(['../viewer/', thought._id]);
        this.internalService.changeThought(thought._id);
    };
    NavbarComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        //GET USER Data
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
            _this.userId = profile.user._id;
            _this.starterId = profile.user.starter;
            //GET THOUGHTS
            _this.internalService.changeThought(_this.starterId);
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_internal_service__["a" /* InternalService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Profile Page</h2>\r\n<ul class=\"list-group\">\r\n\t<li class=\"list-group-item\">Username: {{ username }}</li>\r\n\t<li class=\"list-group-item\">Email: {{ email }} </li>\r\n\t\r\n\t</ul>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.username = '';
        this.email = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Once component loads, get user's data to display on profile
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Welcome to the infinity Cloud...\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-horizontal-stepper [linear]=\"true\" #stepper=\"matHorizontalStepper\">\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\" (ngSubmit)=\"onRegisterSubmit()\">\r\n          <ng-template matStepLabel>Register Account</ng-template>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.username.errors && firstFormGroup.controls.username.dirty) || (!usernameValid && firstFormGroup.controls.username.dirty), 'has-success': !firstFormGroup.controls.username.errors && usernameValid}\">\r\n            <input matInput placeholder=\"Username\" class=\"form-control\" formControlName=\"username\" (blur)=\"checkUsername()\" required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.required && firstFormGroup.controls.username.dirty\">This field is required</li>\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.minlength && firstFormGroup.controls.username.dirty || firstFormGroup.controls.username.errors?.maxlength && firstFormGroup.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.validateUsername && firstFormGroup.controls.username.dirty\">Username must not have any special characters</li>\r\n            <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\r\n          </ul>\r\n\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.email.errors && firstFormGroup.controls.email.dirty) || (!emailValid && firstFormGroup.controls.email.dirty), 'has-success': !firstFormGroup.controls.email.errors && emailValid}\">\r\n            <input matInput placeholder=\"E-Mail\" class=\"form-control\" formControlName=\"email\" formControlName=\"email\" (blur)=\"checkEmail()\"\r\n              required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.email.errors?.required && firstFormGroup.controls.email.dirty\">This field is required</li>\r\n            <li *ngIf=\"(firstFormGroup.controls.email.errors?.minlength && firstFormGroup.controls.email.dirty || firstFormGroup.controls.email.errors?.maxlength && firstFormGroup.controls.email.dirty ) && firstFormGroup.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\r\n            <li *ngIf=\"firstFormGroup.controls.email.errors?.validateEmail && firstFormGroup.controls.email.dirty\">This must be a valid e-mail</li>\r\n            <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\r\n          </ul>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.password.errors && firstFormGroup.controls.password.dirty), 'has-success': !firstFormGroup.controls.password.errors}\">\r\n            <input type=\"password\" matInput placeholder=\"Password\" class=\"form-control\" formControlName=\"password\" required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.password.errors?.required && firstFormGroup.controls.password.dirty\">This field is required</li>\r\n          </ul>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.confirm.errors && firstFormGroup.controls.confirm.dirty) || (firstFormGroup.errors?.matchingPasswords && firstFormGroup.controls.confirm.dirty), 'has-success': !firstFormGroup.controls.confirm.errors && !firstFormGroup.errors?.matchingPasswords}\">\r\n            <input type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"confirm\" required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.confirm.errors?.required && firstFormGroup.controls.confirm.dirty\">This field is required</li>\r\n            <li *ngIf=\"firstFormGroup.errors?.matchingPasswords && firstFormGroup.controls.confirm.dirty\">Password do not match</li>\r\n          </ul>\r\n          <div>\r\n            <br>\r\n            <button mat-raised-button color=\"primary\" matStepperNext type=\"submit\" value=\"Submit\">Register</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"secondFormGroup\">\r\n        <form [formGroup]=\"secondFormGroup\" (ngSubmit)=\"onPersonaSubmit()\">\r\n          <ng-template matStepLabel>Create your Persona</ng-template>\r\n          <p>Before we start, you'll need to create your first \"Persona\". A Persona is like a Vessel, a place, where you can store your thoughts.</p>\r\n          <br><p>This Persona is private, which means, that only you can see it. You can edit it later and add more.</p>\r\n          <p>But let's start with your first Persona...</p>\r\n\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Name your Persona\" formControlName=\"persona\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <br>\r\n            <button mat-raised-button color=\"primary\" matStepperNext type=\"submit\" value=\"Submit\">Create your Persona</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"thirdFormGroup\">\r\n        <form [formGroup]=\"thirdFormGroup\" (ngSubmit)=\"onAbilitiesSubmit()\">\r\n          <ng-template matStepLabel>Start</ng-template>\r\n            <p>You will start with three Categories, in which you can organise your thoughts. You can change or even delete them anytime!</p>\r\n          <mat-list>\r\n            <mat-list-item>\r\n              <button mat-button color=\"primary\">Diary</button>\r\n              <button mat-button>Write down your Memories and Feelings as complex networks.</button>\r\n            </mat-list-item>\r\n            <mat-list-item>\r\n              <button mat-button color=\"primary\">Thoughts</button>\r\n              <button mat-button>Save and structure your Thoughts in your personal Structure.</button>\r\n            </mat-list-item>\r\n            <mat-list-item>\r\n              <button mat-button color=\"primary\">Plans</button>\r\n              <button mat-button>Create complex Projects and set Goals within your Timelines</button>\r\n            </mat-list-item>\r\n\r\n          </mat-list>\r\n          <div>\r\n            <br>\r\n            <br>\r\n            <button mat-raised-button matStepperNext color=\"primary\" type=\"submit\" value=\"Submit\">Get started!</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, dataService, router, internalService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.dataService = dataService;
        this.router = router;
        this.internalService = internalService;
        this.showDiary = false;
        this.showPlans = false;
        this.showThoughts = false;
        this.processing = false;
    }
    // Function to create registration form
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.firstFormGroup.controls['email'].disable();
        this.firstFormGroup.controls['username'].disable();
        this.firstFormGroup.controls['password'].disable();
        this.firstFormGroup.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.firstFormGroup.controls['email'].enable();
        this.firstFormGroup.controls['username'].enable();
        this.firstFormGroup.controls['password'].enable();
        this.firstFormGroup.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        //Create Starter Object
        // Create user object form user's inputs
        var user = {
            email: this.firstFormGroup.get('email').value,
            username: this.firstFormGroup.get('username').value,
            password: this.firstFormGroup.get('password').value // Password input field
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.userId = data.user._id;
                //Login User 
                var user_1 = {
                    username: _this.firstFormGroup.get('username').value,
                    password: _this.firstFormGroup.get('password').value // Password input field
                };
                // Function to send login data to API
                _this.authService.login(user_1).subscribe(function (data) {
                    _this.authService.storeUserData(data.token, data.user);
                });
            }
        });
    };
    RegisterComponent.prototype.onPersonaSubmit = function () {
        //CREATE APP OBJECTS LVL -2
        var _this = this;
        var infcl = {
            label: "Infinity Cloud",
            level: 1,
            color: "FFFFFF",
            clicks: 0,
            user: this.userId,
            dimensions: [],
            showAs: "grid",
            texture: "",
            form: "circle",
            privacy: "locked"
        };
        this.dataService.newThought(infcl).subscribe(function (data) {
            _this.infcl = data.newId;
            //CREATE APP OBJECTS LVL -1
            var dauser = {
                label: _this.firstFormGroup.get('username').value,
                level: 2,
                color: "FFFFFF",
                clicks: 0,
                showAs: "grid",
                user: _this.userId,
                contexts: [{ _id: _this.infcl }],
                dimensions: [],
                texture: "",
                form: "circle",
                privacy: "locked"
            };
            _this.dataService.newThought(dauser).subscribe(function (data) {
                _this.dauser = data.newId;
                var rooms = {
                    label: "Friends",
                    level: 3,
                    color: "FFFFFF",
                    clicks: 0,
                    showAs: "grid",
                    user: _this.userId,
                    contexts: [{ _id: _this.dauser }, { _id: _this.infcl }],
                    dimensions: [],
                    texture: "",
                    form: "circle",
                    privacy: "locked"
                };
                var ptho = {
                    label: "Trending",
                    level: 2,
                    color: "FFFFFF",
                    clicks: 0,
                    showAs: "grid",
                    user: _this.userId,
                    contexts: [{ _id: _this.infcl }],
                    dimensions: [],
                    texture: "",
                    form: "circle",
                    privacy: "locked"
                };
                //CREATE APP OBJECTS LVL 0
                var compApp = {
                    label: _this.secondFormGroup.get('persona').value,
                    level: 3,
                    color: "FFFFFF",
                    clicks: 0,
                    showAs: "grid",
                    user: _this.userId,
                    contexts: [{ _id: _this.dauser }, { _id: _this.infcl }],
                    dimensions: [],
                    texture: "",
                    form: "circle",
                    privacy: "locked"
                };
                _this.dataService.newThought(rooms).subscribe(function (data) {
                    _this.rooms = data.newId;
                    _this.dataService.newThought(ptho).subscribe(function (data) {
                        _this.ptho = data.newId;
                        _this.dataService.newThought(compApp).subscribe(function (data) {
                            _this.startId = data.newId;
                            var editInf = {
                                _id: _this.infcl,
                                editContexts: [],
                                editContents: [{ _id: _this.dauser }, { _id: _this.ptho }]
                            };
                            _this.dataService.editThought(editInf).subscribe(function (data) {
                                var editdauser = {
                                    _id: _this.dauser,
                                    editContents: [{ _id: _this.startId }, , { _id: _this.rooms }]
                                };
                                _this.dataService.editThought(editdauser).subscribe(function (data) {
                                    //LEVEL 3
                                    var memories = {
                                        label: "Diary",
                                        level: 4,
                                        color: "FFFFFF",
                                        clicks: 0,
                                        showAs: "grid",
                                        user: _this.userId,
                                        contexts: [{ _id: _this.startId }, { _id: _this.dauser }, { _id: _this.infcl }],
                                        dimensions: [],
                                        texture: "",
                                        form: "circle",
                                        privacy: "locked"
                                    };
                                    var myroom = {
                                        label: "Thoughts",
                                        level: 4,
                                        color: "FFFFFF",
                                        clicks: 0,
                                        showAs: "grid",
                                        user: _this.userId,
                                        contexts: [{ _id: _this.startId }, { _id: _this.dauser }, { _id: _this.infcl }],
                                        dimensions: [],
                                        texture: "",
                                        form: "circle",
                                        privacy: "locked"
                                    };
                                    var todo = {
                                        label: "Plans",
                                        level: 4,
                                        color: "FFFFFF",
                                        clicks: 0,
                                        showAs: "grid",
                                        user: _this.userId,
                                        contexts: [{ _id: _this.startId }, { _id: _this.dauser }, { _id: _this.infcl }],
                                        dimensions: [],
                                        texture: "",
                                        form: "circle",
                                        privacy: "locked"
                                    };
                                    _this.dataService.newThought(memories).subscribe(function (data) {
                                        _this.sessionsId = data.newId;
                                        _this.dataService.newThought(myroom).subscribe(function (data) {
                                            _this.favoritesId = data.newId;
                                            _this.dataService.newThought(todo).subscribe(function (data) {
                                                _this.todoId = data.newId;
                                                //LEVEL 2
                                                var diary = {
                                                    label: "Feelings",
                                                    level: 5,
                                                    color: "FFFFFF",
                                                    clicks: 0,
                                                    showAs: "grid",
                                                    user: _this.userId,
                                                    contexts: [{ _id: _this.sessionsId }, { _id: _this.startId }, { _id: _this.dauser }, { _id: _this.infcl }],
                                                    dimensions: [],
                                                    texture: "",
                                                    form: "circle",
                                                    privacy: "locked"
                                                };
                                                var timeline = {
                                                    label: "Memories",
                                                    level: 5,
                                                    color: "FFFFFF",
                                                    clicks: 0,
                                                    showAs: "grid",
                                                    user: _this.userId,
                                                    contexts: [{ _id: _this.sessionsId }, { _id: _this.startId }, { _id: _this.dauser }, { _id: _this.infcl }],
                                                    dimensions: [],
                                                    texture: "",
                                                    form: "circle",
                                                    privacy: "locked"
                                                };
                                                var goals = {
                                                    label: "Goals",
                                                    level: 5,
                                                    color: "FFFFFF",
                                                    clicks: 0,
                                                    showAs: "grid",
                                                    user: _this.userId,
                                                    contexts: [{ _id: _this.todoId }, { _id: _this.startId }, { _id: _this.dauser }, { _id: _this.infcl }],
                                                    dimensions: [],
                                                    texture: "",
                                                    form: "circle",
                                                    privacy: "locked"
                                                };
                                                var projects = {
                                                    label: "Projects",
                                                    level: 5,
                                                    color: "FFFFFF",
                                                    clicks: 0,
                                                    showAs: "grid",
                                                    user: _this.userId,
                                                    contexts: [{ _id: _this.todoId }, { _id: _this.startId }, { _id: _this.dauser }, { _id: _this.infcl }],
                                                    dimensions: [],
                                                    texture: "",
                                                    form: "circle",
                                                    privacy: "locked"
                                                };
                                                _this.dataService.newThought(timeline).subscribe(function (data) {
                                                    _this.timeline = data.newId;
                                                    _this.dataService.newThought(diary).subscribe(function (data) {
                                                        _this.diary = data.newId;
                                                        _this.dataService.newThought(goals).subscribe(function (data) {
                                                            _this.goals = data.newId;
                                                            _this.dataService.newThought(projects).subscribe(function (data) {
                                                                _this.projects = data.newId;
                                                                var editThought = {
                                                                    _id: _this.startId,
                                                                    editContents: [{ _id: _this.sessionsId }, { _id: _this.favoritesId }, { _id: _this.todoId }]
                                                                };
                                                                _this.dataService.editThought(editThought).subscribe(function (data) {
                                                                    var editPlans = {
                                                                        _id: _this.todoId,
                                                                        editContents: [{ _id: _this.projects }, { _id: _this.goals }]
                                                                    };
                                                                    _this.dataService.editThought(editPlans).subscribe(function (data) {
                                                                        var editDiary = {
                                                                            _id: _this.sessionsId,
                                                                            editContents: [{ _id: _this.timeline }, { _id: _this.diary }]
                                                                        };
                                                                        _this.dataService.editThought(editDiary).subscribe(function (data) {
                                                                            _this.privateArray = [{
                                                                                    persona: _this.startId,
                                                                                    apps: [{ app: "Diary", obj: _this.sessionsId }, { app: "Thoughts", obj: _this.favoritesId }, { app: "Plans", obj: _this.todoId }],
                                                                                    dimensions: [{ starter: _this.timeline, label: "Memories", app: _this.sessionsId, dimtype: "Date", val: "" }, { starter: _this.diary, label: "Feelings", app: _this.sessionsId, dimtype: "Number", val: "" }, { starter: _this.goals, label: "Goals", app: _this.todoId, dimtype: "Date", val: "" }]
                                                                                }];
                                                                            console.log(_this.privateArray);
                                                                            var editUser = {
                                                                                _id: _this.userId,
                                                                                private: _this.privateArray
                                                                            };
                                                                            console.log(editUser);
                                                                            _this.authService.editUser(editUser).subscribe(function (data) {
                                                                                _this.processing = true; // Lock form fields	
                                                                                // Function to send blog object to backend
                                                                                // Check if PUT request was a success or not
                                                                                if (!data.success) {
                                                                                    _this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                                                                                    _this.message = data.message; // Set error message
                                                                                    _this.processing = false; // Unlock form fields
                                                                                }
                                                                                else {
                                                                                    _this.messageClass = 'alert alert-success'; // Set success bootstrap class
                                                                                    _this.message = data.message; // Set success message
                                                                                    // After two seconds, navigate back to blog page 
                                                                                }
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    RegisterComponent.prototype.onAbilitiesSubmit = function () {
        this.internalService.changeThought(this.startId);
        this.router.navigate(['/viewer/', this.startId]); // Redirect to Persona
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.firstFormGroup.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data.success) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data.message; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data.message; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.firstFormGroup.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data.message; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = data.message; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
        this.secondFormGroup = this.formBuilder.group({
            persona: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.thirdFormGroup = this.formBuilder.group({
            persona: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_internal_service__["a" /* InternalService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer{\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n   \r\n}\r\n\r\n\r\n.bot{\r\nposition: fixed;\r\nbottom: 0;\r\nwidth: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bot\" *ngIf=\"selectedThought\">\r\n \r\n    <mat-toolbar *ngIf=\"showTool == 'new'\">\r\n      <app-new></app-new>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'copy'\">\r\n      <app-copy></app-copy>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'link'\">\r\n      <app-link></app-link>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'edit'\">\r\n      <app-edit></app-edit>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'delete'\">\r\n      <app-delete></app-delete>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'search'\">\r\n      <app-search></app-search>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'dimension'\">\r\n      <app-dimension></app-dimension>\r\n    </mat-toolbar>\r\n \r\n  <mat-toolbar>\r\n    <mat-toolbar-row>\r\n\r\n\r\n      <span class='spacer'></span>\r\n      <button mat-button matTooltip=\"Add\"  *ngIf=\"selectedThought.level > 1\" (click)=\"changeTool('dimension')\">\r\n        <i class=\"material-icons\">add</i> Add</button>\r\n      <button mat-button matTooltip=\"New\" *ngIf=\"selectedThought.level > 1\" (click)=\"changeTool('new')\">\r\n        <i class=\"material-icons\">add_circle</i> New</button>\r\n      <button mat-button matTooltip=\"Copy\" *ngIf=\"selectedThought.level > 1\" (click)=\"changeTool('copy')\">\r\n        <i class=\"material-icons\">add_box</i> Copy</button>\r\n      <button mat-button matTooltip=\"Link\" *ngIf=\"selectedThought.level > 1\" (click)=\"changeTool('link')\">\r\n        <i class=\"material-icons\">link</i> Link</button>\r\n      <button mat-button matTooltip=\"Edit\" *ngIf=\"selectedThought.level > 1\" (click)=\"changeTool('edit')\">\r\n        <i class=\"material-icons\">create</i> Edit</button>\r\n        <button mat-button matTooltip=\"Edit\" *ngIf=\"selectedThought.level > 1\" [matMenuTriggerFor]=\"views\">\r\n            <i class=\"material-icons\">view_quilt</i> Change View</button>\r\n      <button mat-button matTooltip=\"Delete\" *ngIf=\"selectedThought.level > 1\" (click)=\"changeTool('delete')\">\r\n        <i class=\"material-icons\">delete_sweep</i> Delete</button>\r\n      <button mat-button matTooltip=\"Search\" *ngIf=\"authService.loggedIn()\" (click)=\"changeTool('search')\">\r\n        <i class=\"material-icons\">search</i> Search</button>\r\n      <button mat-button matTooltip=\"{{ user.username | uppercase}}\" *ngIf=\"authService.loggedIn()\" [matMenuTriggerFor]=\"menu\">\r\n        <i class=\"material-icons\">account_circle</i> {{ user.username | uppercase}}</button>\r\n\r\n\r\n        <mat-menu #views=\"matMenu\" [overlapTrigger]=\"false\">\r\n            <button mat-menu-item (click)=\"changeView('timeline')\">Timeline</button>\r\n            <button mat-menu-item (click)=\"changeView('graph')\">Graph</button>\r\n            <button mat-menu-item (click)=\"changeView('grid')\">Network</button>\r\n          \r\n          </mat-menu>\r\n      <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n        <!-- If LoggedIn -->\r\n        <button mat-menu-item routerLink=\"../../profile\">Profile</button>\r\n        <button mat-menu-item (click)=\"onLogoutClick()\">Logout</button>\r\n      </mat-menu>\r\n      <span class='spacer'></span>\r\n      <button mat-button>Complexity-App v.0.0.6</button>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolbarComponent = (function () {
    function ToolbarComponent(router, authService, internalService) {
        this.router = router;
        this.authService = authService;
        this.internalService = internalService;
    }
    ToolbarComponent.prototype.changeTool = function (tool) {
        if (this.showTool == tool) {
            this.showTool = "none";
        }
        else {
            this.showTool = tool;
        }
        this.internalService.changeTool(this.showTool);
    };
    ToolbarComponent.prototype.changeView = function (label) {
        this.internalService.changeShowAs(label);
    };
    ToolbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
    };
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
        this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        this.internalService.selToolObs.subscribe(function (res) { return _this.showTool = res; });
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_internal_service__["a" /* InternalService */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tools/copy/copy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchbar-fullwidth {\r\n    width: 100%;\r\n}\r\n.searchbar-form {\r\n    min-width: 600px;\r\n    max-width: 1000px;\r\n    width: 100%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tools/copy/copy.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level > 0\">\r\n\r\n  <form class=\"searchbar-form\">\r\n   \r\n    <mat-form-field class=\"searchbar-fullwidth\">\r\n      <input matInput placeholder=\"Copy\" aria-label=\"Thought\" [matAutocomplete]=\"auto\" [formControl]=\"thoughtCtrl\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let thought of filteredThoughts | async\" [value]=\"thought.label\" (click)=\"copyThought(thought)\">\r\n          <span>{{ thought.label }}</span>\r\n          <small *ngFor=\"let context of thought.contexts\"> | {{ context.label }}</small>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </form>\r\n \r\n</mat-toolbar-row>\r\n\r\n<mat-toolbar-row *ngIf=\"selectedThought.level <= 0\">\r\n  You can't copy Thoughts on this level.\r\n</mat-toolbar-row>"

/***/ }),

/***/ "../../../../../src/app/components/tools/copy/copy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CopyComponent = (function () {
    function CopyComponent(dataService, formBuilder, internalService, authService, router) {
        var _this = this;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.internalService = internalService;
        this.authService = authService;
        this.router = router;
        this.newContexts = [];
        this.newContents = [];
        this.contextContent = [];
        //Autocomplete
        this.thoughtCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.newThought = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredThoughts = this.thoughtCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (thought) { return thought ? _this.filterThoughts(thought) : _this.thoughts.slice(); }));
    }
    CopyComponent.prototype.filterThoughts = function (label) {
        this.lastInput = label;
        return this.thoughts.filter(function (thought) {
            return thought.label.toLowerCase().indexOf(label.toLowerCase()) === 0;
        });
    };
    CopyComponent.prototype.copyThought = function (thought) {
        var _this = this;
        this.newContexts = []; // Reset Context
        this.dataService.getSingleThought(this.selectedThought._id).subscribe(function (data) {
            _this.newContexts = data.thought.contexts; //Save Context of selected Thought
            _this.newContexts.unshift(_this.selectedThought._id); //Add Selected Thought as Context
            _this.contextContent = data.thought.contents;
            //Resave Thought with New Context
            var copyThought = {
                label: thought.label,
                level: _this.selectedThought.level,
                color: thought.color,
                clicks: 0,
                showAs: thought.showAs,
                user: _this.userId,
                contexts: _this.newContexts,
                contents: thought.contents,
                dimensions: _this.dimensions,
                texture: "",
                form: "circle",
                privacy: "private"
            };
            _this.dataService.newThought(copyThought).subscribe(function (data) {
                _this.saveId = data.newId;
                _this.contextContent.push(_this.saveId);
                var editThought = {
                    _id: _this.selectedThought._id,
                    editContents: _this.contextContent
                };
                _this.dataService.editThought(editThought).subscribe(function (data) {
                    _this.router.navigate(['/viewer/', _this.selectedThought._id]);
                    _this.internalService.changeThought(_this.selectedThought._id);
                });
            });
        });
    };
    CopyComponent.prototype.ngOnInit = function () {
        var _this = this;
        //GET USER Data
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
            _this.userId = profile.user._id;
            _this.private = profile.user.private;
        });
        this.internalService.loadThoughts();
        this.internalService.thoughtObs.subscribe(function (res) { return _this.thoughts = res; });
        this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        this.internalService.selContextObs.subscribe(function (res) { return _this.context = res; });
        this.internalService.selContextsObs.subscribe(function (res) { return _this.contexts = res; });
    };
    CopyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-copy',
            template: __webpack_require__("../../../../../src/app/components/tools/copy/copy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tools/copy/copy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_internal_service__["a" /* InternalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], CopyComponent);
    return CopyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tools/delete/delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer{\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tools/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedThought.level <= 0\">\r\n    You can't delete Thoughts on this level.\r\n</div>\r\n  <div *ngIf=\"selectedThought.level > 0\">\r\n     Are you sure you want to delete \"{{selectedThought.label}}\"?\"\r\n     <button mat-button (click)=\"deleteThought(selectedThought._id)\">Yes</button><button mat-button>No</button>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/components/tools/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteComponent = (function () {
    function DeleteComponent(dataService, internalService) {
        this.dataService = dataService;
        this.internalService = internalService;
    }
    DeleteComponent.prototype.deleteThought = function (id) {
        var _this = this;
        //Delete the Thought
        this.dataService.deleteThought(id).subscribe(function (data) {
            _this.internalService.changeThought(_this.selectedThought.contexts[0]._id);
            _this.internalService.changeTool("none");
        });
    };
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    DeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__("../../../../../src/app/components/tools/delete/delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tools/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_internal_service__["a" /* InternalService */]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tools/dimension/dimension.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchbar-form {\r\n    min-width: 600px;\r\n    max-width: 1000px;\r\n    width: 100%;\r\n  }\r\n  .searchbar-fullwidth {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tools/dimension/dimension.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level > 0\">\r\n\r\n  <mat-form-field>\r\n    <input matInput #label [(ngModel)]=\"newLabel\" name=\"newLabel\" placeholder=\"Enter a Label\">\r\n  </mat-form-field>\r\n\r\n    <form>\r\n        <button mat-button [matMenuTriggerFor]=\"menuDimensions\">Choose Type of Dimension</button>\r\n        <mat-menu #menuDimensions=\"matMenu\" [overlapTrigger]=\"false\">\r\n          <button mat-menu-item (click)=\"changeType('Date')\"><i class=\"material-icons\">event</i> Date</button>\r\n          <button mat-menu-item (click)=\"changeType('Number')\"><i class=\"material-icons\">timeline</i> Number</button>\r\n          <button mat-menu-item (click)=\"changeType('Tag')\"><i class=\"material-icons\">flag</i> Tag</button>\r\n        </mat-menu>\r\n   \r\n\r\n\r\n      <mat-form-field *ngIf=\"addDate\">\r\n          <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"newDate\" name=\"newDate\" placeholder=\"Choose a date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field *ngIf=\"addNumber\">\r\n          <input matInput #number [(ngModel)]=\"newNumber\" name=\"newNumber\" placeholder=\"Enter a Number\">\r\n        </mat-form-field>\r\n        <mat-form-field *ngIf=\"addTag\">\r\n            <input matInput #tag [(ngModel)]=\"newTag\" name=\"newTag\" placeholder=\"Add a Tag\">\r\n          </mat-form-field>\r\n  \r\n\r\n\r\n\r\n      <button mat-button (click)=\"onDimensionSubmit()\">Add a {{ selectedDimension.dimtype }} Dimension</button>\r\n  \r\n  \r\n    </form>\r\n  \r\n  \r\n  \r\n  </mat-toolbar-row>\r\n  \r\n  \r\n  <mat-toolbar-row *ngIf=\"selectedThought.level == 0 || selectedThought.level < -1\">\r\n    You can't Add Thoughts on this level.\r\n  </mat-toolbar-row>\r\n  \r\n  <mat-toolbar-row *ngIf=\"selectedThought.level == -1\">\r\n    Create new Persona: Public / Private\r\n  </mat-toolbar-row>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tools/dimension/dimension.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_dimension__ = __webpack_require__("../../../../../src/app/models/dimension.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DimensionComponent = (function () {
    function DimensionComponent(dataService, formBuilder, internalService, authService, router) {
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.internalService = internalService;
        this.authService = authService;
        this.router = router;
        this.newContexts = [];
        this.newContents = [];
        this.contextContent = [];
        this.addDimensions = false;
        this.showDiary = false;
        this.showPlans = false;
        this.showCopyThought = false;
        this.showNewThought = true;
        this.showLinkThought = false;
        this.addNumber = false;
        this.addDate = false;
        this.addTag = false;
        this.addDimension = false;
        //Autocomplete
        this.newThought = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
    }
    DimensionComponent.prototype.onDimensionSubmit = function () {
        var _this = this;
        //Create New Dimension
        this.newDimension = new __WEBPACK_IMPORTED_MODULE_6__models_dimension__["a" /* Dimension */];
        this.newDimension.app = "something";
        this.newDimension.starter = "somethingElse";
        this.newDimension.label = this.newLabel;
        this.newDimension.dimtype = this.selectedDimension.dimtype;
        //Create Value, depending on Input
        if (this.selectedDimension.dimtype == "Date") {
            this.newDimension.val = this.newDate.toString();
        }
        ;
        if (this.selectedDimension.dimtype == "Number") {
            this.newDimension.val = this.newNumber;
        }
        ;
        if (this.selectedDimension.dimtype == "Tag") {
            this.newDimension.val = this.newTag;
        }
        ;
        //Update Selected Thought with new Dimensions
        this.selectedThought.dimensions.unshift(this.newDimension);
        var editThought = {
            _id: this.selectedThought._id,
            editDimensions: this.selectedThought.dimensions
        };
        this.dataService.editThought(editThought).subscribe(function (data) {
            //Update Dimension-Content with new Link
            _this.internalService.changeThought(_this.selectedThought._id);
        });
    };
    DimensionComponent.prototype.changeType = function (label) {
        if (label == "Number") {
            this.addNumber = true;
            this.addDate = false;
            this.addTag = false;
        }
        ;
        if (label == "Date") {
            this.addDate = true;
            this.addNumber = false;
            this.addTag = false;
        }
        ;
        if (label == "Tag") {
            this.addDate = false;
            this.addNumber = false;
            this.addTag = true;
        }
        ;
        this.selectedDimension.dimtype = label;
    };
    DimensionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedDimension = new __WEBPACK_IMPORTED_MODULE_6__models_dimension__["a" /* Dimension */];
        //GET USER Data
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
        this.internalService.loadThoughts();
        this.internalService.thoughtObs.subscribe(function (res) { return _this.thoughts = res; });
        this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        this.internalService.selContextObs.subscribe(function (res) { return _this.context = res; });
        this.internalService.selContextsObs.subscribe(function (res) { return _this.contexts = res; });
    };
    DimensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dimension',
            template: __webpack_require__("../../../../../src/app/components/tools/dimension/dimension.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tools/dimension/dimension.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_internal_service__["a" /* InternalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], DimensionComponent);
    return DimensionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tools/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level > 0\">\r\n  \r\n    <form>\r\n      <mat-form-field>\r\n        <input matInput class=\"search-input\" placeholder=\"{{ selectedThought.label }}\" aria-label=\"Thought\" [formControl]=\"editThought\">\r\n      </mat-form-field>\r\n      <button mat-raised-button (click)=\"onEditSubmit()\">Edit Label</button>\r\n    </form>\r\n\r\n    <div *ngIf=\"selectedThought.dimensions.length\">\r\n      <mat-list>\r\n        <mat-list-item *ngFor=\"let dimension of selectedThought.dimensions\">{{ dimension.dim }} {{ dimension.val }}</mat-list-item>\r\n      </mat-list>\r\n    </div>\r\n \r\n</mat-toolbar-row>\r\n\r\n<mat-toolbar-row *ngIf=\"selectedThought.level <= 0\">\r\n  You can't edit Thoughts on this level.\r\n</mat-toolbar-row>"

/***/ }),

/***/ "../../../../../src/app/components/tools/edit/edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tools/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditComponent = (function () {
    function EditComponent(formBuilder, internalService, dataService, authService, router) {
        this.formBuilder = formBuilder;
        this.internalService = internalService;
        this.dataService = dataService;
        this.authService = authService;
        this.router = router;
        this.editThought = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    EditComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var editThought = {
            _id: this.selectedThought._id,
            editLabel: this.editThought.value
        };
        this.dataService.editThought(editThought).subscribe(function (data) {
            _this.internalService.changeThought(_this.selectedThought._id);
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/components/tools/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tools/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_internal_service__["a" /* InternalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tools/link/link.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level > 0\">\r\n  <form class=\"link-form\">\r\n    <mat-form-field class=\"link-full-width\">\r\n      <input matInput placeholder=\"Link\" aria-label=\"Thought\" [matAutocomplete]=\"auto\" [formControl]=\"thoughtCtrl\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let thought of filteredThoughts | async\" [value]=\"thought.label\" (click)=\"linkThought(thought)\">\r\n          <span>{{ thought.label }}</span>\r\n          <small *ngFor=\"let context of thought.contexts\"> | {{ context.label }}</small>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </form>\r\n\r\n</mat-toolbar-row>\r\n\r\n<mat-toolbar-row *ngIf=\"selectedThought.level <= 0\">\r\n  You can't link Thoughts on this level.\r\n</mat-toolbar-row>"

/***/ }),

/***/ "../../../../../src/app/components/tools/link/link.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link-form {\n  min-width: 600px;\n  max-width: 1000px;\n  width: 100%; }\n\n.link-fullwidth {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tools/link/link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LinkComponent = (function () {
    function LinkComponent(dataService, formBuilder, internalService, authService, router) {
        var _this = this;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.internalService = internalService;
        this.authService = authService;
        this.router = router;
        this.newContexts = [];
        this.newContents = [];
        this.contextContent = [];
        //Autocomplete
        this.thoughtCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.newThought = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredThoughts = this.thoughtCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (thought) { return thought ? _this.filterThoughts(thought) : _this.thoughts.slice(); }));
    }
    LinkComponent.prototype.filterThoughts = function (label) {
        this.lastInput = label;
        return this.thoughts.filter(function (thought) {
            return thought.label.toLowerCase().indexOf(label.toLowerCase()) === 0;
        });
    };
    LinkComponent.prototype.linkThought = function (thought) {
        var _this = this;
        //Get Thought to Update
        this.dataService.getSingleThought(this.selectedThought._id).subscribe(function (data) {
            _this.contextContent = data.thought.contents;
            _this.contextContent.push(thought._id);
            var editThought = {
                _id: _this.selectedThought._id,
                editContents: _this.contextContent
            };
            _this.dataService.editThought(editThought).subscribe(function (data) {
                _this.internalService.changeThought(_this.selectedThought._id);
                _this.newContexts = [];
            });
        });
    };
    LinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        //GET USER Data
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
            _this.userId = profile.user._id;
            _this.private = profile.user.private;
        });
        this.internalService.loadThoughts();
        this.internalService.thoughtObs.subscribe(function (res) { return _this.thoughts = res; });
        this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        this.internalService.selContextObs.subscribe(function (res) { return _this.context = res; });
        this.internalService.selContextsObs.subscribe(function (res) { return _this.contexts = res; });
    };
    LinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-link',
            template: __webpack_require__("../../../../../src/app/components/tools/link/link.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tools/link/link.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_internal_service__["a" /* InternalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], LinkComponent);
    return LinkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tools/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchbar-fullwidth {\r\n  width: 100%;\r\n}\r\n.searchbar-form {\r\n  min-width: 600px;\r\n  max-width: 1000px;\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tools/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level > 0\">\r\n\r\n  <form class=\"searchbar-form\">\r\n    <mat-form-field class=\"searchbar-full-width\">\r\n      <input matInput placeholder=\"New\" aria-label=\"Thought\" [formControl]=\"newThought\">\r\n    </mat-form-field>\r\n    <button mat-button *ngIf=\"selectedThought.label\" (click)=\"onNewSubmit()\">Save Thought</button>\r\n\r\n\r\n  </form>\r\n\r\n\r\n\r\n</mat-toolbar-row>\r\n\r\n\r\n<mat-toolbar-row *ngIf=\"selectedThought.level == 0 || selectedThought.level < -1\">\r\n  You can't Add Thoughts on this level.\r\n</mat-toolbar-row>\r\n\r\n<mat-toolbar-row *ngIf=\"selectedThought.level == -1\">\r\n  Create new Persona: Public / Private\r\n</mat-toolbar-row>"

/***/ }),

/***/ "../../../../../src/app/components/tools/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewComponent = (function () {
    function NewComponent(dataService, formBuilder, internalService, authService, router) {
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.internalService = internalService;
        this.authService = authService;
        this.router = router;
        this.newContexts = [];
        this.newContents = [];
        this.contextContent = [];
        this.addDimensions = false;
        this.showDiary = false;
        this.showPlans = false;
        this.showCopyThought = false;
        this.showNewThought = true;
        this.showLinkThought = false;
        this.addNumber = false;
        this.addDate = false;
        //Autocomplete
        this.thoughtCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.newThought = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    NewComponent.prototype.onNewSubmit = function () {
        var _this = this;
        this.newContexts = []; // Reset Context
        this.dataService.getSingleThought(this.selectedThought._id).subscribe(function (data) {
            _this.newContexts = data.thought.contexts; //Save Context of selected Thought
            _this.newContexts.unshift(_this.selectedThought._id); //Add Selected Thought as Context
            _this.contextContent = data.thought.contents;
            var newThought = {
                label: _this.newThought.value,
                level: _this.selectedThought.level,
                color: "FFFFFF",
                clicks: 0,
                showAs: "grid",
                user: _this.userId,
                contexts: _this.newContexts,
                contents: _this.newContents,
                dimensions: _this.dimensions,
                texture: "",
                form: "circle",
                privacy: "private"
            };
            _this.dataService.newThought(newThought).subscribe(function (data) {
                _this.saveId = data.newId;
                _this.contextContent.push(_this.saveId);
                var editThought = {
                    _id: _this.selectedThought._id,
                    editContents: _this.contextContent
                };
                _this.dataService.editThought(editThought).subscribe(function (data) {
                    _this.internalService.changeThought(_this.selectedThought._id);
                    _this.newContexts = [];
                });
            });
        });
    };
    NewComponent.prototype.addDimension = function (userDimension) {
        if (userDimension.dimtype == "Number") {
            this.addNumber = true;
            this.addDate = false;
        }
        if (userDimension.dimtype == "Date") {
            this.addDate = true;
            this.addNumber = false;
        }
        this.selectedDimension = userDimension;
    };
    NewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //GET USER Data
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
            _this.userId = profile.user._id;
            _this.private = profile.user.private;
        });
        this.internalService.loadThoughts();
        this.internalService.thoughtObs.subscribe(function (res) { return _this.thoughts = res; });
        this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        this.internalService.selContextObs.subscribe(function (res) { return _this.context = res; });
        this.internalService.selContextsObs.subscribe(function (res) { return _this.contexts = res; });
    };
    NewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/components/tools/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tools/new/new.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_internal_service__["a" /* InternalService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tools/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought\">\r\n  <form class=\"search-form\">\r\n    <mat-form-field class=\"search-full-width\">\r\n      <input matInput placeholder=\"Search\" aria-label=\"Thought\" [matAutocomplete]=\"auto\" [formControl]=\"thoughtCtrl\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let thought of filteredThoughts | async\" [value]=\"thought.label\" (click)=\"goToThought(thought)\">\r\n          <span>{{ thought.label }}</span>\r\n          <small *ngFor=\"let context of thought.contexts\"> | {{ context.label }}</small>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </form>\r\n</mat-toolbar-row>"

/***/ }),

/***/ "../../../../../src/app/components/tools/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "c\n.spacer {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tools/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchComponent = (function () {
    function SearchComponent(dataService, formBuilder, internalService, authService, router) {
        var _this = this;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.internalService = internalService;
        this.authService = authService;
        this.router = router;
        this.newContexts = [];
        this.newContents = [];
        this.contextContent = [];
        //Autocomplete
        this.thoughtCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.newThought = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredThoughts = this.thoughtCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (thought) { return thought ? _this.filterThoughts(thought) : _this.thoughts.slice(); }));
    }
    SearchComponent.prototype.filterThoughts = function (label) {
        this.lastInput = label;
        return this.thoughts.filter(function (thought) {
            return thought.label.toLowerCase().indexOf(label.toLowerCase()) === 0;
        });
    };
    SearchComponent.prototype.goToThought = function (thought) {
        this.internalService.changeThought(thought._id);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //GET USER Data
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
            _this.userId = profile.user._id;
            _this.private = profile.user.private;
        });
        this.internalService.loadThoughts();
        this.internalService.thoughtObs.subscribe(function (res) { return _this.thoughts = res; });
        this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        this.internalService.selContextObs.subscribe(function (res) { return _this.context = res; });
        this.internalService.selContextsObs.subscribe(function (res) { return _this.contexts = res; });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/tools/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tools/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__services_internal_service__["a" /* InternalService */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/viewer/viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-card {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n.content-title {\r\n    font-size: 20px;\r\n}\r\n\r\n.allContent {\r\n    padding-top: 20px;\r\n    padding-bottom: 40px;\r\n}\r\n.spacer{\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n   \r\n}\r\n\r\n\r\n.smaller {\r\n    font-size: 50%;\r\n}\r\n#mynetwork {\r\n    width: 100%;\r\n    height: 600px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedThought\">\r\n<div *ngIf=\"selectedThought.showAs == 'grid'\">\r\n                <app-network></app-network>\r\n</div>\r\n<div *ngIf=\"selectedThought.showAs == 'timeline'\">\r\n                <app-timeline></app-timeline>\r\n</div>\r\n<div *ngIf=\"selectedThought.showAs == 'graph'\">\r\n                <app-graph></app-graph>\r\n</div>\r\n</div>\r\n\r\n<app-toolbar></app-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewerComponent = (function () {
    function ViewerComponent(dataService, internalService, router, authService) {
        this.dataService = dataService;
        this.internalService = internalService;
        this.router = router;
        this.authService = authService;
    }
    ;
    ViewerComponent.prototype.sort = function (event) {
        var current = this.contents[event.currentIndex];
        var swapWith = this.contents[event.newIndex];
        this.contents[event.newIndex] = current;
        this.contents[event.currentIndex] = swapWith;
        this.updateThought(this.contents);
    };
    ViewerComponent.prototype.changeTool = function (tool) {
        this.internalService.changeTool(tool);
    };
    ViewerComponent.prototype.updateThought = function (sortableList) {
        //UPDATE CONTENT OF CHOSENTHOUGHT
        var newContent = [];
        sortableList.forEach(function (element) {
            newContent.unshift(element._id);
        });
        var editContent = {
            _id: this.selectedThought._id,
            editContents: newContent,
        };
        this.dataService.editThought(editContent).subscribe(function (data) {
        });
    };
    ViewerComponent.prototype.selectThought = function (id) {
        this.router.navigate(['viewer/', id]);
        this.internalService.changeThought(id);
    };
    ViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            //GET THOUGHTS
            _this.internalService.changeThought(profile.user.private[0].persona);
            _this.internalService.selThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
            _this.internalService.selContentsObs.subscribe(function (res) { return _this.contents = res; });
            _this.internalService.selContextsObs.subscribe(function (res) { return _this.contexts = res; });
            _this.internalService.selSiblingsObs.subscribe(function (res) { return _this.siblings = res; });
            _this.internalService.selContextObs.subscribe(function (res) { _this.context = res; });
        });
        // create an array with nodes
    };
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewer',
            template: __webpack_require__("../../../../../src/app/components/viewer/viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_internal_service__["a" /* InternalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], ViewerComponent);
    return ViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/views/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/views/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  graph works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/views/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphComponent = (function () {
    function GraphComponent() {
    }
    GraphComponent.prototype.ngOnInit = function () {
    };
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__("../../../../../src/app/components/views/graph/graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/views/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/views/network/network.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/views/network/network.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  network works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/views/network/network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vis__ = __webpack_require__("../../../../vis/dist/vis.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkComponent = (function () {
    function NetworkComponent(internalService) {
        this.internalService = internalService;
        this.nodeIds = [1];
        this.nodes = new __WEBPACK_IMPORTED_MODULE_1_vis__["DataSet"]([]);
        this.edges = new __WEBPACK_IMPORTED_MODULE_1_vis__["DataSet"]([]);
        this.data = {
            nodes: this.nodes,
            edges: this.edges
        };
        this.options = {
            layout: {
                hierarchical: {
                    sortMethod: 'directed'
                }
            },
            nodes: {
                shape: 'dot',
                size: 30,
                font: {
                    size: 32,
                    color: '#111111'
                },
                borderWidth: 2,
                shadow: true,
            },
            groups: {
                0: {
                    size: 15,
                    color: '#A59BB2',
                    font: { size: 16, strokeWidth: 3, strokeColor: 'white' },
                },
                1: {
                    size: 30,
                    color: '#84729C',
                    font: { size: 22, strokeWidth: 3, strokeColor: 'white' }
                },
                2: { color: '#55558E',
                    size: 25,
                    font: { size: 18, strokeWidth: 3, strokeColor: 'white' }
                },
                3: { color: '#4C2C76',
                    size: 20,
                    font: { size: 14, strokeWidth: 3, strokeColor: 'white' }
                },
                4: { color: '#361265',
                    size: 10,
                    font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
                },
            },
            edges: {
                width: 2
            }
        };
    }
    NetworkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selSiblingsObs.subscribe(function (res) {
            _this.siblings = res;
            _this.siblings.forEach(function (sibling) {
                if (sibling._id != _this.selectedThought._id) {
                    _this.nodes.add({ id: sibling._id, label: sibling.label, group: 2 });
                    _this.edges.add({ from: _this.selectedThought.contexts[0]._id, to: sibling._id }); // Add Selected Thought
                }
                ;
            });
        });
        this.internalService.selThoughtObs.subscribe(function (selT) {
            _this.selectedThought = selT;
            if (_this.selectedThought) {
                _this.nodes.clear();
                _this.edges.clear();
                _this.lastId = false;
                _this.selectedThought.contexts.reverse();
                _this.selectedThought.contexts.forEach(function (context) {
                    _this.nodes.add({ id: context._id, label: context.label, group: 0 }); // Add Node for Context
                    if (_this.lastId) {
                        _this.edges.add({ from: _this.lastId, to: context._id }); // Add Edge to Selected Thought
                    }
                    _this.lastId = context._id;
                });
                _this.nodes.add({ id: _this.selectedThought._id, label: _this.selectedThought.label, group: 1 });
                _this.edges.add({ from: _this.lastId, to: _this.selectedThought._id }); // Add Selected Thought
                _this.selectedThought.contents.forEach(function (content) {
                    _this.nodes.add({ id: content._id, label: content.label, group: 3 });
                    _this.edges.add({ from: _this.selectedThought._id, to: content._id }); // Add Contents
                });
                _this.selectedThought.dimensions.forEach(function (dimension) {
                    if (dimension.dimtype == "Date") {
                        var newDate = new Date(dimension.val);
                        _this.nodes.add({ id: dimension._id, label: dimension.label + " " + newDate.toLocaleDateString(), group: 4 });
                    }
                    else {
                        _this.nodes.add({ id: dimension._id, label: dimension.label + " " + dimension.val, group: 2 });
                    }
                    _this.edges.add({ from: _this.selectedThought._id, to: dimension._id }); // Add Dimensions
                });
            }
            var container = document.getElementById('contentnet');
            _this.network = new __WEBPACK_IMPORTED_MODULE_1_vis__["Network"](container, _this.data, _this.options);
            _this.network.on("click", function (params) {
                _this.goId = params.nodes[0];
                console.log(params);
                if (params.nodes[0]) {
                    _this.internalService.changeThought(_this.goId);
                    var options = {
                        position: { x: params.pointer.canvas.x, y: params.pointer.canvas.y },
                        scale: 1,
                        offset: { x: 0, y: 0 },
                        animation: true // default duration is 1000ms and default easingFunction is easeInOutQuad.
                    };
                    _this.network.moveTo(options);
                }
                ;
            });
        });
    };
    NetworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-network',
            template: __webpack_require__("../../../../../src/app/components/views/network/network.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/views/network/network.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_internal_service__["a" /* InternalService */]])
    ], NetworkComponent);
    return NetworkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/views/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/views/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"visualization\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/views/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vis__ = __webpack_require__("../../../../vis/dist/vis.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_internal_service__ = __webpack_require__("../../../../../src/app/services/internal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = (function () {
    function TimelineComponent(internalService) {
        this.internalService = internalService;
        // Create a DataSet (allows two way data-binding)
        this.items = new __WEBPACK_IMPORTED_MODULE_1_vis__["DataSet"]([]);
        this.options = {}; // Configuration for the Timeline
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selThoughtObs.subscribe(function (selectedThought) {
            _this.items.clear();
            if (selectedThought) {
                selectedThought.dimensions.forEach(function (dimension) {
                    if (dimension.dimtype == "Date") {
                        _this.items.add({ id: dimension._id, content: selectedThought.label, start: dimension.val });
                    }
                });
                selectedThought.contents.forEach(function (content) {
                    content.dimensions.forEach(function (dimension) {
                        if (dimension.dimtype == "Date") {
                            _this.items.add({ id: dimension._id, content: content.label, start: dimension.val });
                        }
                    });
                });
            }
        });
        // DOM element where the Timeline will be attached
        var container = document.getElementById('visualization');
        // Create a Timeline
        var timeline = new __WEBPACK_IMPORTED_MODULE_1_vis__["Timeline"](container, this.items, this.options);
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/components/views/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/views/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_internal_service__["a" /* InternalService */]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/draggable/draggable-helper.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableHelperDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../../src/app/draggable/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DraggableHelperDirective = (function () {
    function DraggableHelperDirective(draggable, templateRef, viewContainerRef, overlay) {
        this.draggable = draggable;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.overlay = overlay;
        this.positionStrategy = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__["b" /* GlobalPositionStrategy */](document);
    }
    DraggableHelperDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.draggable.dragStart.subscribe(function (event) { return _this.onDragStart(event); });
        this.draggable.dragMove.subscribe(function (event) { return _this.onDragMove(event); });
        this.draggable.dragEnd.subscribe(function () { return _this.onDragEnd(); });
        // create an overlay...
        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy
        });
    };
    DraggableHelperDirective.prototype.ngOnDestroy = function () {
        // remove the overlay...
        this.overlayRef.dispose();
    };
    DraggableHelperDirective.prototype.onDragStart = function (event) {
        // determine relative start position
        var clientRect = this.draggable.element.nativeElement.getBoundingClientRect();
        this.startPosition = {
            x: event.clientX - clientRect.left,
            y: event.clientY - clientRect.top
        };
        // added after YouTube video: width
        this.overlayRef.overlayElement.style.width = clientRect.width + "px";
    };
    DraggableHelperDirective.prototype.onDragMove = function (event) {
        if (!this.overlayRef.hasAttached()) {
            // render the helper in the overlay
            this.overlayRef.attach(new __WEBPACK_IMPORTED_MODULE_3__angular_cdk_portal__["h" /* TemplatePortal */](this.templateRef, this.viewContainerRef));
            // added after YouTube video: width
            var rootElement = this.overlayRef.overlayElement.firstChild;
            rootElement.style.width = '100%';
            rootElement.style.boxSizing = 'border-box';
        }
        // position the helper...
        this.positionStrategy.left(event.clientX - this.startPosition.x + "px");
        this.positionStrategy.top(event.clientY - this.startPosition.y + "px");
        this.positionStrategy.apply();
    };
    DraggableHelperDirective.prototype.onDragEnd = function () {
        // remove the helper from the overlay
        this.overlayRef.detach();
    };
    DraggableHelperDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDraggableHelper]',
            exportAs: 'appDraggableHelper'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__["c" /* Overlay */]])
    ], DraggableHelperDirective);
    return DraggableHelperDirective;
}());



/***/ }),

/***/ "../../../../../src/app/draggable/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DraggableDirective = (function () {
    function DraggableDirective(element) {
        this.element = element;
        this.draggable = true;
        // to trigger pointer-events polyfill
        this.touchAction = 'none';
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragging = false;
    }
    DraggableDirective.prototype.onPointerDown = function (event) {
        // added after YouTube video: ignore right-click
        if (event.button !== 0) {
            return;
        }
        this.dragging = true;
        this.dragStart.emit(event);
    };
    DraggableDirective.prototype.onPointerMove = function (event) {
        if (!this.dragging) {
            return;
        }
        this.dragMove.emit(event);
    };
    // added after YouTube video: pointercancel
    DraggableDirective.prototype.onPointerUp = function (event) {
        if (!this.dragging) {
            return;
        }
        this.dragging = false;
        this.dragEnd.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.draggable'),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "draggable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.touch-action'),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "touchAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragMove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.dragging'),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragging", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('pointerdown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PointerEvent]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onPointerDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:pointermove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PointerEvent]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onPointerMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:pointercancel', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:pointerup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PointerEvent]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onPointerUp", null);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDraggable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/draggable/draggable.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggable_directive__ = __webpack_require__("../../../../../src/app/draggable/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movable_directive__ = __webpack_require__("../../../../../src/app/draggable/movable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movable_area_directive__ = __webpack_require__("../../../../../src/app/draggable/movable-area.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__draggable_helper_directive__ = __webpack_require__("../../../../../src/app/draggable/draggable-helper.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sortable_directive__ = __webpack_require__("../../../../../src/app/draggable/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sortable_list_directive__ = __webpack_require__("../../../../../src/app/draggable/sortable-list.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DraggableModule = (function () {
    function DraggableModule() {
    }
    DraggableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__["f" /* OverlayModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_4__movable_directive__["a" /* MovableDirective */],
                __WEBPACK_IMPORTED_MODULE_5__movable_area_directive__["a" /* MovableAreaDirective */],
                __WEBPACK_IMPORTED_MODULE_6__draggable_helper_directive__["a" /* DraggableHelperDirective */],
                __WEBPACK_IMPORTED_MODULE_7__sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_8__sortable_list_directive__["a" /* SortableListDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_4__movable_directive__["a" /* MovableDirective */],
                __WEBPACK_IMPORTED_MODULE_5__movable_area_directive__["a" /* MovableAreaDirective */],
                __WEBPACK_IMPORTED_MODULE_6__draggable_helper_directive__["a" /* DraggableHelperDirective */],
                __WEBPACK_IMPORTED_MODULE_8__sortable_list_directive__["a" /* SortableListDirective */],
                __WEBPACK_IMPORTED_MODULE_7__sortable_directive__["a" /* SortableDirective */]
            ]
        })
    ], DraggableModule);
    return DraggableModule;
}());



/***/ }),

/***/ "../../../../../src/app/draggable/movable-area.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovableAreaDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movable_directive__ = __webpack_require__("../../../../../src/app/draggable/movable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovableAreaDirective = (function () {
    function MovableAreaDirective(element) {
        this.element = element;
        this.subscriptions = [];
    }
    MovableAreaDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.movables.changes.subscribe(function () {
            _this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
            _this.movables.forEach(function (movable) {
                _this.subscriptions.push(movable.dragStart.subscribe(function () { return _this.measureBoundaries(movable); }));
                _this.subscriptions.push(movable.dragMove.subscribe(function () { return _this.maintainBoundaries(movable); }));
            });
        });
        this.movables.notifyOnChanges();
    };
    MovableAreaDirective.prototype.measureBoundaries = function (movable) {
        var viewRect = this.element.nativeElement.getBoundingClientRect();
        var movableClientRect = movable.element.nativeElement.getBoundingClientRect();
        this.boundaries = {
            minX: viewRect.left - movableClientRect.left + movable.position.x,
            maxX: viewRect.right - movableClientRect.right + movable.position.x,
            minY: viewRect.top - movableClientRect.top + movable.position.y,
            maxY: viewRect.bottom - movableClientRect.bottom + movable.position.y
        };
    };
    MovableAreaDirective.prototype.maintainBoundaries = function (movable) {
        movable.position.x = Math.max(this.boundaries.minX, movable.position.x);
        movable.position.x = Math.min(this.boundaries.maxX, movable.position.x);
        movable.position.y = Math.max(this.boundaries.minY, movable.position.y);
        movable.position.y = Math.min(this.boundaries.maxY, movable.position.y);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__movable_directive__["a" /* MovableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], MovableAreaDirective.prototype, "movables", void 0);
    MovableAreaDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMovableArea]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], MovableAreaDirective);
    return MovableAreaDirective;
}());



/***/ }),

/***/ "../../../../../src/app/draggable/movable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../../src/app/draggable/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovableDirective = (function (_super) {
    __extends(MovableDirective, _super);
    function MovableDirective(sanitizer, element) {
        var _this = _super.call(this, element) || this;
        _this.sanitizer = sanitizer;
        _this.element = element;
        _this.movable = true;
        _this.position = { x: 0, y: 0 };
        _this.reset = false;
        return _this;
    }
    Object.defineProperty(MovableDirective.prototype, "transform", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustStyle("translateX(" + this.position.x + "px) translateY(" + this.position.y + "px)");
        },
        enumerable: true,
        configurable: true
    });
    MovableDirective.prototype.onDragStart = function (event) {
        this.startPosition = {
            x: event.clientX - this.position.x,
            y: event.clientY - this.position.y
        };
    };
    MovableDirective.prototype.onDragMove = function (event) {
        this.position.x = event.clientX - this.startPosition.x;
        this.position.y = event.clientY - this.startPosition.y;
    };
    MovableDirective.prototype.onDragEnd = function (event) {
        if (this.reset) {
            this.position = { x: 0, y: 0 };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.transform'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], MovableDirective.prototype, "transform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.movable'),
        __metadata("design:type", Object)
    ], MovableDirective.prototype, "movable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appMovableReset'),
        __metadata("design:type", Object)
    ], MovableDirective.prototype, "reset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragStart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PointerEvent]),
        __metadata("design:returntype", void 0)
    ], MovableDirective.prototype, "onDragStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragMove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PointerEvent]),
        __metadata("design:returntype", void 0)
    ], MovableDirective.prototype, "onDragMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragEnd', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PointerEvent]),
        __metadata("design:returntype", void 0)
    ], MovableDirective.prototype, "onDragEnd", null);
    MovableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMovable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], MovableDirective);
    return MovableDirective;
}(__WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */]));



/***/ }),

/***/ "../../../../../src/app/draggable/sortable-list.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableListDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sortable_directive__ = __webpack_require__("../../../../../src/app/draggable/sortable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var distance = function (rectA, rectB) {
    return Math.sqrt(Math.pow(rectB.top - rectA.top, 2) +
        Math.pow(rectB.left - rectA.left, 2));
};
var hCenter = function (rect) {
    return rect.left + rect.width / 2;
};
var vCenter = function (rect) {
    return rect.top + rect.height / 2;
};
var SortableListDirective = (function () {
    function SortableListDirective() {
        this.sort = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SortableListDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        var timeOut = setInterval(function () {
            _this.sortables.forEach(function (sortable) {
                sortable.dragStart.subscribe(function () { return _this.measureClientRects(); });
                sortable.dragMove.subscribe(function (event) { return _this.detectSorting(sortable, event); });
                clearInterval(timeOut);
            });
        }, 2000);
    };
    SortableListDirective.prototype.measureClientRects = function () {
        this.clientRects = this.sortables.map(function (sortable) { return sortable.element.nativeElement.getBoundingClientRect(); });
    };
    SortableListDirective.prototype.detectSorting = function (sortable, event) {
        var _this = this;
        var currentIndex = this.sortables.toArray().indexOf(sortable);
        var currentRect = this.clientRects[currentIndex];
        this.clientRects
            .slice()
            .sort(function (rectA, rectB) { return distance(rectA, currentRect) - distance(rectB, currentRect); })
            .filter(function (rect) { return rect !== currentRect; })
            .some(function (rect) {
            var isHorizontal = rect.top === currentRect.top;
            var isBefore = isHorizontal ?
                rect.left < currentRect.left :
                rect.top < currentRect.top;
            // refactored this part a little bit after my Youtube video
            // for improving readability
            var moveBack = isBefore && (isHorizontal ?
                event.clientX < hCenter(rect) :
                event.clientY < vCenter(rect));
            var moveForward = !isBefore && (isHorizontal ?
                event.clientX > hCenter(rect) :
                event.clientY > vCenter(rect));
            if (moveBack || moveForward) {
                _this.sort.emit({
                    currentIndex: currentIndex,
                    newIndex: _this.clientRects.indexOf(rect)
                });
                return true;
            }
            return false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__sortable_directive__["a" /* SortableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], SortableListDirective.prototype, "sortables", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SortableListDirective.prototype, "sort", void 0);
    SortableListDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSortableList]'
        })
    ], SortableListDirective);
    return SortableListDirective;
}());



/***/ }),

/***/ "../../../../../src/app/draggable/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../../src/app/draggable/draggable.directive.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableDirective = (function (_super) {
    __extends(SortableDirective, _super);
    function SortableDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortable = true;
        return _this;
    }
    SortableDirective_1 = SortableDirective;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.sortable'),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "sortable", void 0);
    SortableDirective = SortableDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSortable]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SortableDirective_1; }) }
            ]
        })
    ], SortableDirective);
    return SortableDirective;
    var SortableDirective_1;
}(__WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */]));



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material_tooltip__["a" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_19__angular_material_snack_bar__["a" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material_table__["a" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material_stepper__["a" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_17__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material_dialog__["b" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_chips__["a" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_autocomplete__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__["a" /* MatSidenavModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_19__angular_material_snack_bar__["a" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material_tooltip__["a" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material_table__["a" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material_stepper__["a" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_17__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material_dialog__["b" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_chips__["a" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_autocomplete__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__["a" /* MatSidenavModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/dimension.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dimension; });
var Dimension = (function () {
    function Dimension() {
    }
    return Dimension;
}());

//REGULÄRE Ausdrücke Noam Chomsky, conditional random field 


/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:8080";
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.editUser = function (user) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + '/authentication/edit', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + '/authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    DataService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    /* ===============================================================
       ADD THOUGHT
    =============================================================== */
    DataService.prototype.newThought = function (thought) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + '/datatransfer/newThought', thought, this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.newPubThought = function (thought) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + '/datatransfer/newPubThought', thought, this.options).map(function (res) { return res.json(); });
    };
    /* ===============================================================
       GET DATA
    =============================================================== */
    DataService.prototype.getAllThought = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/allThought', this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getSingleThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/singleThought/' + id, this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getTimeArray = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/timeArray/' + id, this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getThoughtByName = function (label) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/thoughtByName/' + label, this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/getThought/' + id, this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getContent = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/getContent/' + id, this.options).map(function (res) { return res.json(); });
    };
    /* ===============================================================
      DELETE/UPDATE DATA
   =============================================================== */
    DataService.prototype.deleteThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.delete(this.domain + '/datatransfer/deleteThought/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to edit/update Label
    DataService.prototype.editThought = function (editthought) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + '/datatransfer/editThought/', editthought, this.options).map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/internal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InternalService = (function () {
    function InternalService(dataService) {
        this.dataService = dataService;
        this.thoughts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.thoughtObs = this.thoughts.asObservable();
        this.selThought = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.selThoughtObs = this.selThought.asObservable();
        this.selContents = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.selContentsObs = this.selContents.asObservable();
        this.selContext = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.selContextObs = this.selContext.asObservable();
        this.selContexts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.selContextsObs = this.selContexts.asObservable();
        this.selSiblings = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.selSiblingsObs = this.selSiblings.asObservable();
        this.selTool = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("none");
        this.selToolObs = this.selTool.asObservable();
    }
    InternalService.prototype.changeThought = function (id) {
        var _this = this;
        this.dataService.getThought(id).subscribe(function (data) {
            _this.selThought.next(data.thought); //Save Selected Thought
            _this.dataService.getContent(data.thought.contexts[0]._id).subscribe(function (data) {
                data.thought.contents.filter(function (content) { return content._id == id; });
                _this.selSiblings.next(data.thought.contents); //Save as Siblings
            });
        });
    };
    InternalService.prototype.changeTool = function (tool) {
        this.selTool.next(tool);
    };
    InternalService.prototype.changeShowAs = function (label) {
        var viewThought = this.selThought.getValue();
        viewThought.showAs = label;
        this.selThought.next(viewThought);
    };
    InternalService.prototype.loadThoughts = function () {
        var _this = this;
        this.dataService.getAllThought().subscribe(function (data) {
            _this.thoughts.next(data.allThought);
        });
    };
    InternalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], InternalService);
    return InternalService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map