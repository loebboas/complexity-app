(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");
/* harmony import */ var _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/viewer/viewer.component */ "./src/app/components/viewer/viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'public', component: _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_8__["ViewerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_7__["NotAuthGuard"]]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_7__["NotAuthGuard"]]
    },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'viewer', component: _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_8__["ViewerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'viewer/:id', component: _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_8__["ViewerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <app-navbar></app-navbar>\r\n        <app-toolbar></app-toolbar>\r\n        <router-outlet></router-outlet>\r\n        \r\n       "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Complexity-App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");
/* harmony import */ var _components_tools_new_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tools/new/new.component */ "./src/app/components/tools/new/new.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/viewer/viewer.component */ "./src/app/components/viewer/viewer.component.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_tools_search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tools/search/search.component */ "./src/app/components/tools/search/search.component.ts");
/* harmony import */ var _components_tools_edit_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tools/edit/edit.component */ "./src/app/components/tools/edit/edit.component.ts");
/* harmony import */ var _components_tools_copy_copy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tools/copy/copy.component */ "./src/app/components/tools/copy/copy.component.ts");
/* harmony import */ var _components_tools_link_link_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tools/link/link.component */ "./src/app/components/tools/link/link.component.ts");
/* harmony import */ var _components_tools_delete_delete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/tools/delete/delete.component */ "./src/app/components/tools/delete/delete.component.ts");
/* harmony import */ var _components_tools_dimension_dimension_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/tools/dimension/dimension.component */ "./src/app/components/tools/dimension/dimension.component.ts");
/* harmony import */ var _components_views_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/views/timeline/timeline.component */ "./src/app/components/views/timeline/timeline.component.ts");
/* harmony import */ var _components_views_network_network_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/views/network/network.component */ "./src/app/components/views/network/network.component.ts");
/* harmony import */ var _components_views_graph_graph_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/views/graph/graph.component */ "./src/app/components/views/graph/graph.component.ts");
/* harmony import */ var _components_views_grid_grid_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/views/grid/grid.component */ "./src/app/components/views/grid/grid.component.ts");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var _components_views_grid_gridster_config_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/views/grid/gridster-config.service */ "./src/app/components/views/grid/gridster-config.service.ts");
/* harmony import */ var _components_views_grid_graph_grid_graph_grid_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/views/grid/graph-grid/graph-grid.component */ "./src/app/components/views/grid/graph-grid/graph-grid.component.ts");
/* harmony import */ var _components_views_grid_timeline_grid_timeline_grid_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/views/grid/timeline-grid/timeline-grid.component */ "./src/app/components/views/grid/timeline-grid/timeline-grid.component.ts");
/* harmony import */ var _components_views_grid_network_grid_network_grid_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/views/grid/network-grid/network-grid.component */ "./src/app/components/views/grid/network-grid/network-grid.component.ts");
/* harmony import */ var _components_views_grid_grid_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/views/grid/grid-grid/grid-grid.component */ "./src/app/components/views/grid/grid-grid/grid-grid.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_draw_navbar_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/draw-navbar.service */ "./src/app/services/draw-navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_tools_new_new_component__WEBPACK_IMPORTED_MODULE_14__["NewComponent"],
                _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_16__["ViewerComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["ToolbarComponent"],
                _components_tools_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
                _components_tools_edit_edit_component__WEBPACK_IMPORTED_MODULE_20__["EditComponent"],
                _components_tools_copy_copy_component__WEBPACK_IMPORTED_MODULE_21__["CopyComponent"],
                _components_tools_link_link_component__WEBPACK_IMPORTED_MODULE_22__["LinkComponent"],
                _components_tools_delete_delete_component__WEBPACK_IMPORTED_MODULE_23__["DeleteComponent"],
                _components_tools_dimension_dimension_component__WEBPACK_IMPORTED_MODULE_24__["DimensionComponent"],
                _components_views_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_25__["TimelineComponent"],
                _components_views_network_network_component__WEBPACK_IMPORTED_MODULE_26__["NetworkComponent"],
                _components_views_graph_graph_component__WEBPACK_IMPORTED_MODULE_27__["GraphComponent"],
                _components_views_grid_grid_component__WEBPACK_IMPORTED_MODULE_28__["GridComponent"],
                _components_views_grid_graph_grid_graph_grid_component__WEBPACK_IMPORTED_MODULE_31__["GraphGridComponent"],
                _components_views_grid_timeline_grid_timeline_grid_component__WEBPACK_IMPORTED_MODULE_32__["TimelineGridComponent"],
                _components_views_grid_network_grid_network_grid_component__WEBPACK_IMPORTED_MODULE_33__["NetworkGridComponent"],
                _components_views_grid_grid_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_34__["GridGridComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                angular_gridster2__WEBPACK_IMPORTED_MODULE_29__["GridsterModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_13__["NotAuthGuard"], _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _services_internal_service__WEBPACK_IMPORTED_MODULE_17__["InternalService"], _components_views_grid_gridster_config_service__WEBPACK_IMPORTED_MODULE_30__["GridsterConfigService"], _services_draw_navbar_service__WEBPACK_IMPORTED_MODULE_36__["DrawNavbarService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context {\r\n    font-size: 25px;\r\n\r\n}\r\n.card {\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n    text-align: center;\r\n}\r\n.mat-success {\r\n    background-color: white;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n\t<mat-card-title>Welcome to the Complexity-App</mat-card-title>\r\n\t<mat-card-content>\r\n\t\tThe Complexity-App is a tool to (someday in the future) help you visualise and express complex thoughts.\r\n\t\t<br>\r\n\t\t<br> At the moment this site is still in development.\r\n\t\t<br> For more information contact loebboas -@- gmail.com.\r\n\t</mat-card-content>\r\n\r\n\t<mat-card-title>About us</mat-card-title>\r\n\t<mat-card-content>\r\n\t\tThis site is a project of the Complexity association.\r\n\t\t<br> Check out a different Site which does not yet exist for more information.\r\n\t</mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authService, internalService) {
        this.router = router;
        this.authService = authService;
        this.internalService = internalService;
    }
    HomeComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
        this.internalService.loadUser();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_3__["InternalService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Login Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n\r\n  <!-- Username Field -->\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Password Field  -->\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- Submit Button -->\r\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\r\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
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
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] // Password field
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
            if (!data['success']) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data['message']; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data['message']; // Set success message
                _this.authService.storeUserData(data['token'], data['user']);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['viewer']); // Navigate to dashboard view
                    }
                    _this.internalService.loadUser();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_5__["InternalService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n  width: 100%;\r\n  height: 410px;\r\n  overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\"></div>\r\n\r\n    "

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _services_draw_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/draw-navbar.service */ "./src/app/services/draw-navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(internalService, drawNavbarService) {
        this.internalService = internalService;
        this.drawNavbarService = drawNavbarService;
        this.nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.showUserContent = false;
        this.showMyNetworks = false;
        this.showMyRooms = false;
        this.showMyFriends = false;
        this.showThoughts = [];
        this.data = {
            nodes: this.nodes,
            edges: this.edges
        };
        this.options = {
            nodes: {
                shape: 'dot',
                size: 15,
                font: {
                    size: 15,
                    color: '#111111'
                },
                borderWidth: 2,
                shadow: true,
            },
            layout: {
                hierarchical: {
                    sortMethod: 'directed'
                }
            },
            groups: {
                'infCloud': {
                    size: 40,
                    color: '#A59BB2',
                    font: { size: 16, strokeWidth: 3, strokeColor: 'white' },
                },
                'pubRooms': {
                    first: {
                        size: 30,
                    },
                    size: 5,
                    color: '#84729C',
                    font: { size: 22, strokeWidth: 3, strokeColor: 'white' }
                },
                'selPubRoom': {
                    color: '#55558E',
                    size: 15,
                    font: { size: 18, strokeWidth: 3, strokeColor: 'white' }
                },
                'user': {
                    color: '#4C2C76',
                    size: 15,
                    font: { size: 14, strokeWidth: 3, strokeColor: 'white' }
                },
                'myNetworks': {
                    color: '#361265',
                    size: 15,
                    font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
                },
                'myRooms': {
                    color: '#361265',
                    size: 15,
                    font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
                },
                'myFriends': {
                    color: '#361265',
                    size: 15,
                    font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
                },
                'thoughts': {
                    font: { size: 12, strokeWidth: 3, strokeColor: 'white' }
                },
            },
            edges: {
                width: 2
            }
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drawNavbarService.nodesObs.subscribe(function (nodes) { return _this.nodes = nodes; });
        this.drawNavbarService.edgesObs.subscribe(function (edges) { return _this.edges = edges; });
        var container = document.getElementById('navbar');
        this.network = new vis__WEBPACK_IMPORTED_MODULE_1__["Network"](container, this.data, this.options);
        //0 = InfinityCloud, 1 = Other Rooms, 2 = selected Room, 3 = User + UserDimensions, 4 = networks, 5 = public, 6 = Rooms, 7 = Friends, 8 = SelectedRoom.Contents
        //this.network.on("click", params => {
        //console.log(params);
        // this.showContentNodes(this.nodes.get(params.nodes[0]));
        //});
        // this.network.on('click', params => {
        //   if(params.nodes.length > 0){
        //   const selectedNode = this.nodes.get(params.nodes[0])
        //   if (selectedNode['id'] == this.user._id) {  // If clickOn User: Draw/Remove User Content
        //     if (this.showUserContent) {
        //       this.drawNavbarService.removeUserContent();
        //       this.showUserContent = false;
        //     } else {
        //       this.drawNavbarService.drawUserContent();
        //       this.showUserContent = true;
        //     }
        //   } else if (selectedNode['id'] == 4) { // If clickOn Networks: Draw/Remove My Networks
        //     if (this.showMyNetworks) {
        //       this.drawNavbarService.removeMyNetworks();
        //       this.showMyNetworks = false;
        //     } else {
        //       this.drawNavbarService.drawMyNetworks();
        //       this.showMyNetworks = true;
        //     }
        //   } else if (selectedNode['id'] == 5) {   //If clickOn MyRooms Draw/Remove MyRooms
        //     if (this.showMyRooms) {
        //       this.drawNavbarService.removeMyRooms();
        //       this.showMyRooms = false;
        //     } else {
        //       this.drawNavbarService.drawMyRooms();
        //       this.showMyRooms = true;
        //     }
        //   } else if (selectedNode['id'] == 6) { //If clickOn Friends Draw/Remove Friends
        //     if (this.showMyFriends) {
        //       this.drawNavbarService.removeMyFriends();
        //       this.showMyFriends = false;
        //     } else {
        //       this.drawNavbarService.drawMyFriends();
        //       this.showMyFriends = true;
        //     }
        //   } else if (selectedNode['group'] == 3) {    //If ClickOn My Thoughts (MyNetworks and below)
        //     if(this.showThoughts.length > 0){
        //     const selectedThought = this.showThoughts.filter(thought => thought._id == selectedNode['id'])
        //     if (selectedThought.length > 0) {
        //       this.drawNavbarService.removeThoughtContent(selectedThought[0]);
        //     } else {
        //       this.drawNavbarService.drawThoughtContent(selectedNode['id']);
        //       this.internalService.changeThought(selectedNode['id']);
        //     }
        //   } else {
        //     this.drawNavbarService.drawThoughtContent(selectedNode['id']);
        //     this.internalService.changeThought(selectedNode['id']);
        //   } 
        //   } else if (selectedNode['group'] == 4) {    
        //     var roomId = selectedNode['id'].substring(0, selectedNode['id'].length() - 5); //remove the "-Link" Addon
        //     this.internalService.changeRoom(roomId)
        //   }
        // }
        // });
        // this.network.on('doubleClick', params => {
        //   if(params.nodes.length > 0){
        //   const selectedNode = this.nodes.get(params.nodes[0])
        //   if (selectedNode['group'] = 4) {
        //     this.internalService.changeRoom(selectedNode['id']);
        //   } else if (selectedNode['group'] = 5) {
        //     console.log("you dblClicked Friends!")
        //   }
        // }
        // })
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"], _services_draw_navbar_service__WEBPACK_IMPORTED_MODULE_3__["DrawNavbarService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Profile Page</h2>\r\n<ul class=\"list-group\">\r\n\t<li class=\"list-group-item\">Username: {{ username }}</li>\r\n\t<li class=\"list-group-item\">Email: {{ email }} </li>\r\n\t\r\n\t</ul>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.username = '';
        this.email = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Once component loads, get user's data to display on profile
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile['user'].username; // Set username
            _this.email = profile['user'].email; // Set e-mail
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Welcome to the infinity Cloud...\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-horizontal-stepper [linear]=\"true\" #stepper=\"matHorizontalStepper\">\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\" (ngSubmit)=\"onRegisterSubmit()\">\r\n          <ng-template matStepLabel>Create a User</ng-template>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.username.errors && firstFormGroup.controls.username.dirty) || (!usernameValid && firstFormGroup.controls.username.dirty), 'has-success': !firstFormGroup.controls.username.errors && usernameValid}\">\r\n            <input matInput placeholder=\"Username\" class=\"form-control\" formControlName=\"username\" (blur)=\"checkUsername()\" required>\r\n          </mat-form-field>\r\n          <!-- Add Visualisation of User and Colorchooser Later -->\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.required && firstFormGroup.controls.username.dirty\">This field is required</li>\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.minlength && firstFormGroup.controls.username.dirty || firstFormGroup.controls.username.errors?.maxlength && firstFormGroup.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.validateUsername && firstFormGroup.controls.username.dirty\">Username must not have any special characters</li>\r\n            <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\r\n          </ul>\r\n\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.email.errors && firstFormGroup.controls.email.dirty) || (!emailValid && firstFormGroup.controls.email.dirty), 'has-success': !firstFormGroup.controls.email.errors && emailValid}\">\r\n            <input matInput placeholder=\"E-Mail\" class=\"form-control\" formControlName=\"email\" formControlName=\"email\" (blur)=\"checkEmail()\"\r\n              required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.email.errors?.required && firstFormGroup.controls.email.dirty\">This field is required</li>\r\n            <li *ngIf=\"(firstFormGroup.controls.email.errors?.minlength && firstFormGroup.controls.email.dirty || firstFormGroup.controls.email.errors?.maxlength && firstFormGroup.controls.email.dirty ) && firstFormGroup.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\r\n            <li *ngIf=\"firstFormGroup.controls.email.errors?.validateEmail && firstFormGroup.controls.email.dirty\">This must be a valid e-mail</li>\r\n            <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\r\n          </ul>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.password.errors && firstFormGroup.controls.password.dirty), 'has-success': !firstFormGroup.controls.password.errors}\">\r\n            <input type=\"password\" matInput placeholder=\"Password\" class=\"form-control\" formControlName=\"password\" required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.password.errors?.required && firstFormGroup.controls.password.dirty\">This field is required</li>\r\n          </ul>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.confirm.errors && firstFormGroup.controls.confirm.dirty) || (firstFormGroup.errors?.matchingPasswords && firstFormGroup.controls.confirm.dirty), 'has-success': !firstFormGroup.controls.confirm.errors && !firstFormGroup.errors?.matchingPasswords}\">\r\n            <input type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"confirm\" required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.confirm.errors?.required && firstFormGroup.controls.confirm.dirty\">This field is required</li>\r\n            <li *ngIf=\"firstFormGroup.errors?.matchingPasswords && firstFormGroup.controls.confirm.dirty\">Password do not match</li>\r\n          </ul>\r\n          <div>\r\n            <br>\r\n            <button mat-raised-button color=\"primary\" matStepperNext type=\"submit\" value=\"Submit\">Create a User</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"secondFormGroup\">\r\n        <form [formGroup]=\"secondFormGroup\" (ngSubmit)=\"onNetworkSubmit()\">\r\n          <ng-template matStepLabel>Rooms</ng-template>\r\n          <p>Now that you are a user, the complexity-App created your own Space in the infinity Cloud.</p>\r\n          <br><p>By default, this space is open for everyone, so other Users can enter your Room and see its content.</p>\r\n          <p>You can create multiple public Rooms and become a Member of certain ones.</p>\r\n          <br><p>Most of your Thoughts thought are going to be thought inside of your user.</p>\r\n          <p>Every user is capable of storing multiple Networks!</p>\r\n          <br><p>Let's create your first Network!</p>\r\n          \r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Create your first Network\" formControlName=\"network\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <br>\r\n            <button mat-raised-button color=\"primary\" matStepperNext type=\"submit\" value=\"Submit\">Create a Network!</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"thirdFormGroup\">\r\n        <form [formGroup]=\"thirdFormGroup\" (ngSubmit)=\"onStarterNetworkSubmit()\">\r\n          <ng-template matStepLabel>Starter Set</ng-template>\r\n            <p>We recommend you to start with an exmaple Network. It will show you the potential of the complexity-app!</p>\r\n            <br><p>You can also start on a blank Node (for experienced Users, not yet implemented)</p>\r\n            <p>The starter Set contains the following Nodes.</p>\r\n          <mat-list>\r\n            <mat-list-item>\r\n              <button mat-button color=\"primary\">Diary</button>\r\n              <p>Write down your Memories and Feelings as complex networks. It Includes a timeline and specific feelings.</p>\r\n            </mat-list-item>\r\n            <mat-list-item>\r\n              <button mat-button color=\"primary\">Plans</button>\r\n              <button mat-button>Create complex Projects and set Goals within your Timelines</button>\r\n            </mat-list-item>\r\n          </mat-list>\r\n          <div>\r\n            <br>\r\n            <br>\r\n            <button mat-raised-button matStepperNext color=\"primary\" type=\"submit\" value=\"Submit\">Get started!</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, dataService, router, internalService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.dataService = dataService;
        this.router = router;
        this.internalService = internalService;
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
            if (!data['success']) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data['message'];
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data['message'];
                _this.userId = data['user']._id;
                //Login User 
                var user_1 = {
                    username: _this.firstFormGroup.get('username').value,
                    password: _this.firstFormGroup.get('password').value // Password input field
                };
                // Function to send login data to API
                _this.authService.login(user_1).subscribe(function (data) {
                    _this.authService.storeUserData(data['token'], data['user']);
                    //Create UserRoom
                    _this.userRoom = {
                        label: _this.firstFormGroup.get('username').value + "'s-Room",
                        admin: [_this.userId],
                        members: [],
                        contents: [],
                        dimensions: [{ label: "Creation Time", dimtype: "Date", val: Date.now.toString() }],
                        activeUsers: [_this.userId],
                        visible: "open"
                    };
                    console.log(_this.userRoom);
                    _this.dataService.newPubRoom(_this.userRoom).subscribe(function (data) {
                        _this.userRoom = data['pubRoom'];
                        console.log(_this.userRoom);
                        console.log(data);
                        //add Public Room to Users Rooms
                        var editUser = {
                            _id: _this.userId,
                            rooms: [_this.userRoom._id]
                        };
                        _this.authService.editUser(editUser).subscribe(function (data) {
                            //Load User and change Room
                            _this.internalService.loadUser();
                        });
                    });
                });
            }
        });
    };
    RegisterComponent.prototype.onNetworkSubmit = function () {
        var _this = this;
        var network = {
            label: this.secondFormGroup.get('network').value,
            level: 0,
            color: "#FFFFFF",
            clicks: 0,
            showAs: "grid",
            user: this.userId,
            contexts: [],
            contents: [],
            dimensions: [],
            texture: "",
            form: "circle",
            privacy: "private",
            grid: { colspan: 0, rowspan: 0, x: 0, y: 0, rows: 3, cols: 7 }
        };
        this.dataService.newThought(network).subscribe(function (data) {
            _this.startNetwork = data['thought'];
            var editUser = {
                _id: _this.userId,
                private: [_this.startNetwork._id]
            };
            _this.authService.editUser(editUser).subscribe(function (data) {
                //Load User and change Room
                _this.internalService.loadUser();
            });
        });
    };
    RegisterComponent.prototype.onStarterNetworkSubmit = function () {
        var _this = this;
        var diary = {
            label: "Diary",
            level: 1,
            color: "#ccffcc",
            clicks: 0,
            showAs: "grid",
            user: this.userId,
            contexts: [this.startNetwork._id],
            contents: [],
            dimensions: [],
            texture: "",
            form: "circle",
            privacy: "private",
            grid: { colspan: 0, rowspan: 0, x: 0, y: 0, rows: 3, cols: 3 }
        };
        var plans = {
            label: "Plans",
            level: 1,
            color: "#99ccff",
            clicks: 0,
            showAs: "grid",
            user: this.userId,
            contexts: [this.startNetwork._id],
            contents: [],
            dimensions: [],
            texture: "",
            form: "circle",
            privacy: "private",
            grid: { colspan: 0, rowspan: 0, x: 0, y: 0, rows: 3, cols: 3 }
        };
        this.dataService.newThought(diary).subscribe(function (data) {
            _this.diary = data['thought'];
            _this.dataService.newThought(plans).subscribe(function (data) {
                _this.plans = data['thought'];
                var goals = {
                    label: "Goals",
                    level: 2,
                    color: "#99ddff",
                    clicks: 0,
                    showAs: "grid",
                    user: _this.userId,
                    contexts: [_this.plans._id, _this.startNetwork._id],
                    contents: [],
                    dimensions: [],
                    texture: "",
                    form: "circle",
                    privacy: "private",
                    grid: { colspan: 0, rowspan: 0, x: 0, y: 0, rows: 3, cols: 7 }
                };
                _this.dataService.newThought(goals).subscribe(function (data) {
                    _this.goals = data['thought'];
                    var editPlans = {
                        _id: _this.plans._id,
                        editContents: [_this.goals._id]
                    };
                    _this.dataService.editThought(editPlans).subscribe(function (data) {
                        var editStartNetwork = {
                            _id: _this.startNetwork._id,
                            editContents: [_this.diary._id, _this.plans._id]
                        };
                        _this.dataService.editThought(editStartNetwork).subscribe(function (data) {
                            _this.processing = true; // Lock form fields	
                            // Function to send blog object to backend
                            // Check if PUT request was a success or not
                            if (!data['success']) {
                                _this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                                _this.message = data['message']; // Set error message
                                _this.processing = false; // Unlock form fields
                            }
                            else {
                                _this.messageClass = 'alert alert-success'; // Set success bootstrap class
                                _this.message = data['message']; // Set success message
                                // After two seconds, navigate back to blog page 
                            }
                        });
                    });
                });
            });
        });
        this.internalService.changeThought(this.startNetwork._id);
        this.router.navigate(['/viewer/']); // Redirect to Persona
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.firstFormGroup.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data['success']) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data['message']; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data['message']; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.firstFormGroup.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data['success']) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data['message']; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = data['message']; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ])],
            // Confirm Password Input
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
        this.secondFormGroup = this.formBuilder.group({
            network: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.thirdFormGroup = this.formBuilder.group({});
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_5__["InternalService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer{\r\n    flex: 1 1 auto;\r\n   \r\n}\r\n\r\n\r\n.bot{\r\nwidth: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n \r\n    <mat-toolbar *ngIf=\"showTool == 'new'\">\r\n      <app-new></app-new>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'copy'\">\r\n      <app-copy></app-copy>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'link'\">\r\n      <app-link></app-link>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'edit'\">\r\n      <app-edit></app-edit>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'delete'\">\r\n      <app-delete></app-delete>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'search'\">\r\n      <app-search></app-search>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"showTool == 'dimension'\">\r\n      <app-dimension></app-dimension>\r\n    </mat-toolbar>\r\n \r\n  <mat-toolbar>\r\n    <mat-toolbar-row>\r\n\r\n\r\n      <span class='spacer'></span>\r\n      <!-- Level: 0 = Networks -->\r\n      <div *ngIf=\"selectedThought\">\r\n      <button mat-button matTooltip=\"Add\"  *ngIf=\"selectedThought.level >= 0\" (click)=\"changeTool('dimension')\">\r\n        <i class=\"material-icons\">add</i> Add</button>\r\n      <button mat-button matTooltip=\"New\" *ngIf=\"selectedThought.level >= 0\" (click)=\"changeTool('new')\">\r\n        <i class=\"material-icons\">add_circle</i> New</button>\r\n      <button mat-button matTooltip=\"Copy\" *ngIf=\"selectedThought.level >= 0\" (click)=\"changeTool('copy')\">\r\n        <i class=\"material-icons\">add_box</i> Copy</button>\r\n      <button mat-button matTooltip=\"Link\" *ngIf=\"selectedThought.level >= 0\" (click)=\"changeTool('link')\">\r\n        <i class=\"material-icons\">link</i> Link</button>\r\n      <button mat-button matTooltip=\"Edit\" *ngIf=\"selectedThought.level >= 0\" (click)=\"changeTool('edit')\">\r\n        <i class=\"material-icons\">create</i> Edit</button>\r\n        <button mat-button matTooltip=\"Edit\" *ngIf=\"selectedThought.level >= 0\" [matMenuTriggerFor]=\"views\">\r\n            <i class=\"material-icons\">view_quilt</i> Change View</button>\r\n      <button mat-button matTooltip=\"Delete\" *ngIf=\"selectedThought.level >= 0\" (click)=\"changeTool('delete')\">\r\n        <i class=\"material-icons\">delete_sweep</i> Delete</button>\r\n\r\n      </div>\r\n        <button mat-button matTooltip=\"Search\" *ngIf=\"!authService.loggedIn()\"  routerLink=\"../login\">\r\n          <i class=\"material-icons\">account_circle</i> Login</button>\r\n          <button mat-button matTooltip=\"Search\" *ngIf=\"!authService.loggedIn()\" routerLink=\"../register\">\r\n            <i class=\"material-icons\">edit</i> Register</button>\r\n      <button mat-button matTooltip=\"Search\" *ngIf=\"authService.loggedIn()\" (click)=\"changeTool('search')\">\r\n        <i class=\"material-icons\">search</i> Search</button>\r\n      <button mat-button matTooltip=\"{{ user.username | uppercase}}\" *ngIf=\"authService.loggedIn()\" [matMenuTriggerFor]=\"menu\">\r\n        <i class=\"material-icons\">account_circle</i> {{ user.username | uppercase}}</button>\r\n\r\n\r\n        <mat-menu #views=\"matMenu\" [overlapTrigger]=\"false\">\r\n            <button mat-menu-item (click)=\"changeView('timeline')\">Timeline</button>\r\n            <button mat-menu-item (click)=\"changeView('graph')\">Graph</button>\r\n            <button mat-menu-item (click)=\"changeView('grid')\">Network</button>\r\n          \r\n          </mat-menu>\r\n      <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n        <!-- If LoggedIn -->\r\n        <button mat-menu-item routerLink=\"../../profile\">Profile</button>\r\n        <button mat-menu-item (click)=\"onLogoutClick()\">Logout</button>\r\n      </mat-menu>\r\n      <span class='spacer'></span>\r\n      <button mat-button>Complexity-App v.0.0.6</button>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</div>"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolbarComponent = /** @class */ (function () {
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
        this.internalService.selectedUserObs.subscribe(function (res) { return _this.user = res; });
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        this.internalService.selectedToolObs.subscribe(function (res) { return _this.showTool = res; });
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/components/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_3__["InternalService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/copy/copy.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/tools/copy/copy.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar-fullwidth {\r\n    width: 100%;\r\n}\r\n.searchbar-form {\r\n    min-width: 600px;\r\n    max-width: 1000px;\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/components/tools/copy/copy.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tools/copy/copy.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level > 0\">\r\n\r\n  <form class=\"searchbar-form\">\r\n   \r\n    <mat-form-field class=\"searchbar-fullwidth\">\r\n      <input matInput placeholder=\"Copy\" aria-label=\"Thought\" [matAutocomplete]=\"auto\" [formControl]=\"thoughtCtrl\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let thought of filteredThoughts | async\" [value]=\"thought.label\" (click)=\"copyThought(thought)\">\r\n          <span>{{ thought.label }}</span>\r\n          <small *ngFor=\"let context of thought.contexts\"> | {{ context.label }}</small>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </form>\r\n \r\n</mat-toolbar-row>\r\n\r\n<mat-toolbar-row *ngIf=\"selectedThought.level <= 0\">\r\n  You can't copy Thoughts on this level.\r\n</mat-toolbar-row>"

/***/ }),

/***/ "./src/app/components/tools/copy/copy.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tools/copy/copy.component.ts ***!
  \*********************************************************/
/*! exports provided: CopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyComponent", function() { return CopyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CopyComponent = /** @class */ (function () {
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
        this.thoughtCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.newThought = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredThoughts = this.thoughtCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (thought) { return thought ? _this.filterThoughts(thought) : _this.thoughts.slice(); }));
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
            _this.newContexts = data['thought'].contexts; //Save Context of selected Thought
            _this.newContexts.unshift(_this.selectedThought._id); //Add Selected Thought as Context
            _this.contextContent = data['thought'].contents;
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
                _this.saveId = data['newId'];
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
            _this.username = profile['user'].username; // Used when creating new blog posts and comments
            _this.userId = profile['user']._id;
            _this.private = profile['user'].private;
        });
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    CopyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copy',
            template: __webpack_require__(/*! ./copy.component.html */ "./src/app/components/tools/copy/copy.component.html"),
            styles: [__webpack_require__(/*! ./copy.component.css */ "./src/app/components/tools/copy/copy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_3__["InternalService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CopyComponent);
    return CopyComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/delete/delete.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tools/delete/delete.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer{\r\n    flex: 1 1 auto;\r\n   \r\n}"

/***/ }),

/***/ "./src/app/components/tools/delete/delete.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/tools/delete/delete.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedThought.level <= 0\">\r\n    You can't delete Thoughts on this level.\r\n</div>\r\n  <div *ngIf=\"selectedThought.level > 0\">\r\n     Are you sure you want to delete \"{{selectedThought.label}}\"?\"\r\n     <button mat-button (click)=\"deleteThought(selectedThought._id)\">Yes</button><button mat-button>No</button>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/tools/delete/delete.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tools/delete/delete.component.ts ***!
  \*************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(dataService, internalService) {
        this.dataService = dataService;
        this.internalService = internalService;
    }
    DeleteComponent.prototype.deleteThought = function (id) {
        //Delete the Thought
        var _this = this;
        this.dataService.deleteThought(id).subscribe(function (data) {
            _this.internalService.changeThought(_this.selectedThought.contexts.pop()._id);
            _this.internalService.changeTool("none");
        });
    };
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/components/tools/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.css */ "./src/app/components/tools/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/dimension/dimension.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/tools/dimension/dimension.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar-form {\r\n    min-width: 600px;\r\n    max-width: 1000px;\r\n    width: 100%;\r\n  }\r\n  .searchbar-fullwidth {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/tools/dimension/dimension.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/tools/dimension/dimension.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level >= 0\">\r\n\r\n  <mat-form-field>\r\n    <input matInput #label [(ngModel)]=\"newLabel\" name=\"newLabel\" placeholder=\"Enter a Label\">\r\n  </mat-form-field>\r\n\r\n    <form>\r\n        <button mat-button [matMenuTriggerFor]=\"menuDimensions\">Choose Type of Dimension</button>\r\n        <mat-menu #menuDimensions=\"matMenu\" [overlapTrigger]=\"false\">\r\n          <button mat-menu-item (click)=\"changeType('Date')\"><i class=\"material-icons\">event</i> Date</button>\r\n          <button mat-menu-item (click)=\"changeType('Number')\"><i class=\"material-icons\">timeline</i> Number</button>\r\n          <button mat-menu-item (click)=\"changeType('Tag')\"><i class=\"material-icons\">flag</i> Tag</button>\r\n        </mat-menu>\r\n   \r\n\r\n\r\n      <mat-form-field *ngIf=\"addDate\">\r\n          <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"newDate\" name=\"newDate\" placeholder=\"Choose a date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field *ngIf=\"addNumber\">\r\n          <input matInput #number [(ngModel)]=\"newNumber\" name=\"newNumber\" placeholder=\"Enter a Number\">\r\n        </mat-form-field>\r\n        <mat-form-field *ngIf=\"addTag\">\r\n            <input matInput #tag [(ngModel)]=\"newTag\" name=\"newTag\" placeholder=\"Add a Tag\">\r\n          </mat-form-field>\r\n  \r\n\r\n\r\n<div *ngIf=\"addTag || addNumber || addDate\">\r\n      <button mat-button (click)=\"onDimensionSubmit()\">Add a Dimension</button>\r\n    </div>\r\n  \r\n    </form>\r\n  \r\n  \r\n  \r\n  </mat-toolbar-row>\r\n  \r\n  \r\n  <mat-toolbar-row *ngIf=\"selectedThought.level < 0\">\r\n    You can't Add Thoughts on this level.\r\n  </mat-toolbar-row>\r\n  \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/tools/dimension/dimension.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/tools/dimension/dimension.component.ts ***!
  \*******************************************************************/
/*! exports provided: DimensionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionComponent", function() { return DimensionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DimensionComponent = /** @class */ (function () {
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
        this.newThought = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    DimensionComponent.prototype.onDimensionSubmit = function () {
        //Create New Dimension
        var _this = this;
        this.newDimension = {
            label: this.newLabel,
            dimtype: "Tag",
            val: "Something went wrong"
        };
        //Create Value, depending on Input
        if (this.addDate) {
            this.newDimension.val = this.newDate.toString();
            this.newDimension.dimtype = "Date";
        }
        ;
        if (this.addNumber) {
            this.newDimension.val = this.newNumber, this.newDimension.dimtype = "Date";
        }
        ;
        if (this.addTag) {
            this.newDimension.val = this.newTag, this.newDimension.dimtype = "Date";
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
    };
    DimensionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    DimensionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dimension',
            template: __webpack_require__(/*! ./dimension.component.html */ "./src/app/components/tools/dimension/dimension.component.html"),
            styles: [__webpack_require__(/*! ./dimension.component.css */ "./src/app/components/tools/dimension/dimension.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_3__["InternalService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DimensionComponent);
    return DimensionComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/edit/edit.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tools/edit/edit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level > 0\">\r\n  \r\n    <form>\r\n      <mat-form-field>\r\n        <input matInput class=\"search-input\" placeholder=\"{{ selectedThought.label }}\" aria-label=\"Thought\" [formControl]=\"editThought\">\r\n      </mat-form-field>\r\n      <button mat-raised-button (click)=\"onEditSubmit()\">Edit Label</button>\r\n    </form>\r\n\r\n    <div *ngIf=\"selectedThought.dimensions.length\">\r\n      <mat-list>\r\n        <mat-list-item *ngFor=\"let dimension of selectedThought.dimensions\">{{ dimension.dim }} {{ dimension.val }}</mat-list-item>\r\n      </mat-list>\r\n    </div>\r\n \r\n</mat-toolbar-row>\r\n\r\n<mat-toolbar-row *ngIf=\"selectedThought.level <= 0\">\r\n  You can't edit Thoughts on this level.\r\n</mat-toolbar-row>"

/***/ }),

/***/ "./src/app/components/tools/edit/edit.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/tools/edit/edit.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/components/tools/edit/edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tools/edit/edit.component.ts ***!
  \*********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditComponent = /** @class */ (function () {
    function EditComponent(formBuilder, internalService, dataService, authService, router) {
        this.formBuilder = formBuilder;
        this.internalService = internalService;
        this.dataService = dataService;
        this.authService = authService;
        this.router = router;
        this.editThought = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
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
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/tools/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/components/tools/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/link/link.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tools/link/link.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level > 0\">\r\n  <form class=\"link-form\">\r\n    <mat-form-field class=\"link-full-width\">\r\n      <input matInput placeholder=\"Link\" aria-label=\"Thought\" [matAutocomplete]=\"auto\" [formControl]=\"thoughtCtrl\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let thought of filteredThoughts | async\" [value]=\"thought.label\" (click)=\"linkThought(thought)\">\r\n          <span>{{ thought.label }}</span>\r\n          <small *ngFor=\"let context of thought.contexts\"> | {{ context.label }}</small>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </form>\r\n\r\n</mat-toolbar-row>\r\n\r\n<mat-toolbar-row *ngIf=\"selectedThought.level <= 0\">\r\n  You can't link Thoughts on this level.\r\n</mat-toolbar-row>"

/***/ }),

/***/ "./src/app/components/tools/link/link.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/tools/link/link.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link-form {\n  min-width: 600px;\n  max-width: 1000px;\n  width: 100%; }\n\n.link-fullwidth {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/tools/link/link.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tools/link/link.component.ts ***!
  \*********************************************************/
/*! exports provided: LinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComponent", function() { return LinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LinkComponent = /** @class */ (function () {
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
        this.thoughtCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.newThought = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredThoughts = this.thoughtCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (thought) { return thought ? _this.filterThoughts(thought) : _this.thoughts.slice(); }));
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
            _this.contextContent = data['thought'].contents;
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
            _this.username = profile['user'].username; // Used when creating new blog posts and comments
            _this.userId = profile['user']._id;
            _this.private = profile['user'].private;
        });
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    LinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-link',
            template: __webpack_require__(/*! ./link.component.html */ "./src/app/components/tools/link/link.component.html"),
            styles: [__webpack_require__(/*! ./link.component.scss */ "./src/app/components/tools/link/link.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_3__["InternalService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LinkComponent);
    return LinkComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/new/new.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/tools/new/new.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar-fullwidth {\r\n  width: 100%;\r\n}\r\n.searchbar-form {\r\n  min-width: 600px;\r\n  max-width: 1000px;\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/tools/new/new.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/tools/new/new.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.level >= 0\">\r\n\r\n  <form class=\"searchbar-form\">\r\n    <mat-form-field class=\"searchbar-full-width\">\r\n      <input matInput placeholder=\"New\" aria-label=\"Thought\" [formControl]=\"newThought\">\r\n    </mat-form-field>\r\n    <button mat-button *ngIf=\"selectedThought.label\" (click)=\"onNewSubmit()\">Save Thought</button>\r\n\r\n\r\n  </form>\r\n  \r\n</mat-toolbar-row>\r\n<div *ngIf=\"selectedThought.level < 0\">\r\n    <form class=\"searchbar-form\">\r\n  <mat-toolbar-row>\r\n\r\n   \r\n      <mat-form-field class=\"searchbar-full-width\">\r\n        <input matInput placeholder=\"Create a new Persona\" aria-label=\"Thought\" [formControl]=\"newPersona\">\r\n      \r\n      </mat-form-field>\r\n     \r\n</mat-toolbar-row>\r\n<mat-toolbar-row>\r\n    <mat-slide-toggle>Make it a public Persona</mat-slide-toggle>\r\n    <button mat-button *ngIf=\"selectedThought.label\" (click)=\"onPersonaSubmit()\">Save Persona</button>  \r\n</mat-toolbar-row>\r\n</form>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/tools/new/new.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tools/new/new.component.ts ***!
  \*******************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewComponent = /** @class */ (function () {
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
        this.thoughtCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.newThought = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.newPersona = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    NewComponent.prototype.onPersonaSubmit = function () {
        var _this = this;
        this.newContexts = []; // Reset Context
        this.dataService.getSingleThought(this.selectedThought._id).subscribe(function (data) {
            _this.newContexts = data['thought'].contexts; //Save Context of selected Thought
            _this.newContexts.unshift(_this.selectedThought._id); //Add Selected Thought as Context
            _this.contextContent = data['thought'].contents;
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
                _this.saveId = data['newId'];
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
    NewComponent.prototype.onNewSubmit = function () {
        var _this = this;
        this.newContexts = []; // Reset Context
        this.dataService.getSingleThought(this.selectedThought._id).subscribe(function (data) {
            console.log(data);
            _this.newContexts = data['thought'].contexts; //Save Context of selected Thought
            _this.newContexts.unshift(_this.selectedThought._id); //Add Selected Thought as Context
            _this.contextContent = data['thought'].contents;
            console.log(_this.contextContent);
            _this.selectedThought.level++;
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
                privacy: "private",
                grid: { cols: 1, rows: 1, colspan: 1, rowspan: 1, x: 0, y: 0 }
            };
            _this.selectedThought.level--;
            _this.dataService.newThought(newThought).subscribe(function (data) {
                _this.saveId = data['thought']._id;
                _this.contextContent.push(_this.saveId);
                console.log(_this.contextContent);
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
            _this.username = profile['user'].username; // Used when creating new blog posts and comments
            _this.userId = profile['user']._id;
            _this.private = profile['user'].private;
        });
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/components/tools/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/components/tools/new/new.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_4__["InternalService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/search/search.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/tools/search/search.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought\">\r\n  <form class=\"search-form\">\r\n    <mat-form-field class=\"search-full-width\">\r\n      <input matInput placeholder=\"Search\" aria-label=\"Thought\" [matAutocomplete]=\"auto\" [formControl]=\"thoughtCtrl\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let thought of filteredThoughts | async\" [value]=\"thought.label\" (click)=\"goToThought(thought)\">\r\n          <span>{{ thought.label }}</span>\r\n          <small *ngFor=\"let context of thought.contexts\"> | {{ context.label }}</small>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </form>\r\n</mat-toolbar-row>"

/***/ }),

/***/ "./src/app/components/tools/search/search.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/tools/search/search.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c\n.spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/components/tools/search/search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tools/search/search.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = /** @class */ (function () {
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
        this.thoughtCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.newThought = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredThoughts = this.thoughtCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (thought) { return thought ? _this.filterThoughts(thought) : _this.thoughts.slice(); }));
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
            _this.username = profile['user'].username; // Used when creating new blog posts and comments
            _this.userId = profile['user']._id;
            _this.private = profile['user'].private;
        });
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/tools/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/tools/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_6__["InternalService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/viewer/viewer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/viewer/viewer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/viewer/viewer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/viewer/viewer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedThought\">\r\n<div *ngIf=\"selectedThought.showAs == 'grid'\">\r\n                <app-grid></app-grid>\r\n</div>\r\n<div *ngIf=\"selectedThought.showAs == 'timeline'\">\r\n                <app-timeline></app-timeline>\r\n</div>\r\n<div *ngIf=\"selectedThought.showAs == 'graph'\">\r\n                <app-graph></app-graph>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/viewer/viewer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/viewer/viewer.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewerComponent = /** @class */ (function () {
    function ViewerComponent(dataService, internalService, router, authService) {
        this.dataService = dataService;
        this.internalService = internalService;
        this.router = router;
        this.authService = authService;
    }
    ;
    ViewerComponent.prototype.changeTool = function (tool) {
        this.internalService.changeTool(tool);
    };
    ViewerComponent.prototype.selectThought = function (id) {
        this.router.navigate(['viewer/', id]);
        this.internalService.changeThought(id);
    };
    ViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            console.log(profile);
            //GET THOUGHTS 
            _this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        });
        // create an array with nodes
    };
    ViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewer',
            template: __webpack_require__(/*! ./viewer.component.html */ "./src/app/components/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.css */ "./src/app/components/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ViewerComponent);
    return ViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/views/graph/graph.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/views/graph/graph.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/views/graph/graph.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/views/graph/graph.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  graph works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/views/graph/graph.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/views/graph/graph.component.ts ***!
  \***********************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphComponent = /** @class */ (function () {
    function GraphComponent() {
    }
    GraphComponent.prototype.ngOnInit = function () {
    };
    GraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/components/views/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.css */ "./src/app/components/views/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/components/views/grid/graph-grid/graph-grid.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/views/grid/graph-grid/graph-grid.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/views/grid/graph-grid/graph-grid.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/views/grid/graph-grid/graph-grid.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-title>{{thought.label}}</mat-card-title>\r\n  <mat-card-content>\r\n    <button mat-button *ngFor=\"let content of thought.contents\">{{ content.label }}</button>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/views/grid/graph-grid/graph-grid.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/views/grid/graph-grid/graph-grid.component.ts ***!
  \**************************************************************************/
/*! exports provided: GraphGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphGridComponent", function() { return GraphGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphGridComponent = /** @class */ (function () {
    function GraphGridComponent() {
    }
    GraphGridComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GraphGridComponent.prototype, "thought", void 0);
    GraphGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graph-grid',
            template: __webpack_require__(/*! ./graph-grid.component.html */ "./src/app/components/views/grid/graph-grid/graph-grid.component.html"),
            styles: [__webpack_require__(/*! ./graph-grid.component.css */ "./src/app/components/views/grid/graph-grid/graph-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GraphGridComponent);
    return GraphGridComponent;
}());



/***/ }),

/***/ "./src/app/components/views/grid/grid-grid/grid-grid.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/views/grid/grid-grid/grid-grid.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-card {\r\n\r\n    height: 100%;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/views/grid/grid-grid/grid-grid.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/views/grid/grid-grid/grid-grid.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [style.background]=thought.color class=\"grid-card\">\r\n <button mat-raised-button  (click)=\"gotoThought(thought._id)\">{{thought.label}}</button>\r\n  <mat-card-content>\r\n    <button mat-button *ngFor=\"let content of thought.contents\" (click)=\"gotoThought(content._id)\">{{ content.label }}</button>\r\n  </mat-card-content>\r\n</div>"

/***/ }),

/***/ "./src/app/components/views/grid/grid-grid/grid-grid.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/views/grid/grid-grid/grid-grid.component.ts ***!
  \************************************************************************/
/*! exports provided: GridGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridGridComponent", function() { return GridGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridGridComponent = /** @class */ (function () {
    function GridGridComponent(internalService) {
        this.internalService = internalService;
    }
    GridGridComponent.prototype.gotoThought = function (id) {
        this.internalService.changeThought(id);
    };
    GridGridComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridGridComponent.prototype, "thought", void 0);
    GridGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-grid',
            template: __webpack_require__(/*! ./grid-grid.component.html */ "./src/app/components/views/grid/grid-grid/grid-grid.component.html"),
            styles: [__webpack_require__(/*! ./grid-grid.component.css */ "./src/app/components/views/grid/grid-grid/grid-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_internal_service__WEBPACK_IMPORTED_MODULE_1__["InternalService"]])
    ], GridGridComponent);
    return GridGridComponent;
}());



/***/ }),

/***/ "./src/app/components/views/grid/grid.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/views/grid/grid.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    height: 400px;\r\n    background: white;\r\n}\r\n.gridster {\r\n    border: white;\r\n    background: white;\r\n}\r\n.grid-grid {\r\n    text-align: center;\r\n    height: 100%\r\n}"

/***/ }),

/***/ "./src/app/components/views/grid/grid.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/views/grid/grid.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gridster [options]=\"config\" class=\"content\" *ngIf=\"contents.length > 0\">\r\n  <div *ngFor=\"let content of contents\">\r\n    <gridster-item [item]=\"content.grid\">\r\n      <div *ngIf=\"content.showAs == 'timeline'\">\r\n        <app-timeline-grid></app-timeline-grid>\r\n      </div>\r\n      <div *ngIf=\"selectedThought.showAs == 'graph'\">\r\n        <app-graph-grid></app-graph-grid>\r\n        </div>\r\n        <div *ngIf=\"selectedThought.showAs == 'network'\">\r\n            <app-network-grid></app-network-grid>\r\n            </div>\r\n            <div *ngIf=\"selectedThought.showAs == 'grid'\">\r\n            \r\n                <app-grid-grid [thought]=\"content\" class=\"grid-grid\"></app-grid-grid>\r\n             \r\n                </div>\r\n    </gridster-item>\r\n    </div>\r\n</gridster>\r\n<div *ngIf=\"contents.length == 0\"> Add a Thought<div *ngIf=\"selectedThought\"> {{selectedThought.label }}</div></div>"

/***/ }),

/***/ "./src/app/components/views/grid/grid.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/views/grid/grid.component.ts ***!
  \*********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gridster_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gridster-config.service */ "./src/app/components/views/grid/gridster-config.service.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridComponent = /** @class */ (function () {
    function GridComponent(gridsterConfigService, internalService) {
        this.gridsterConfigService = gridsterConfigService;
        this.internalService = internalService;
    }
    GridComponent.prototype.changedOptions = function () {
        this.config.api.optionsChanged();
    };
    GridComponent.prototype.removeItem = function (item) {
        this.contents.splice(this.contents.indexOf(item), 1);
    };
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.gridsterConfigService.getConfig();
        this.contents = [];
        this.internalService.selectedThoughtObs.subscribe(function (selectedThought) {
            _this.contents = [];
            _this.selectedThought = selectedThought;
            if (_this.selectedThought.contents.length) {
                _this.counter = 1;
                _this.selectedThought.contents.forEach(function (content) {
                    if (content) {
                        content.grid = ({ cols: 1, rows: 1, y: 0, x: 0 });
                        _this.contents.push(content);
                    }
                    console.log(_this.contents);
                });
            }
        });
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/components/views/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.css */ "./src/app/components/views/grid/grid.component.css")]
        }),
        __metadata("design:paramtypes", [_gridster_config_service__WEBPACK_IMPORTED_MODULE_1__["GridsterConfigService"], _services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/components/views/grid/gridster-config.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/views/grid/gridster-config.service.ts ***!
  \******************************************************************/
/*! exports provided: GridsterConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterConfigService", function() { return GridsterConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridsterConfig = {
    gridType: 'fit',
    // 'scrollVertical' will fit on width and height of the items will be the same as the width
    // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
    // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
    // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
    // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
    fixedColWidth: 250,
    fixedRowHeight: 250,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    compactType: 'none',
    mobileBreakpoint: 640,
    minCols: 7,
    maxCols: 100,
    minRows: 3,
    maxRows: 100,
    defaultItemCols: 1,
    defaultItemRows: 1,
    maxItemCols: 50,
    maxItemRows: 50,
    minItemCols: 7,
    minItemRows: 1,
    minItemArea: 1,
    maxItemArea: 2500,
    margin: 10,
    outerMargin: true,
    outerMarginTop: null,
    outerMarginRight: null,
    outerMarginBottom: null,
    outerMarginLeft: null,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    initCallback: undefined,
    destroyCallback: undefined,
    itemChangeCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemResizeCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemInitCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemRemovedCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    enableEmptyCellClick: true,
    enableEmptyCellContextMenu: true,
    enableEmptyCellDrop: true,
    enableEmptyCellDrag: true,
    emptyCellClickCallback: undefined,
    emptyCellContextMenuCallback: undefined,
    emptyCellDropCallback: undefined,
    emptyCellDragCallback: undefined,
    // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    // only for gridType: `fixed` , `verticalFixed`, `horizontalFixed`
    draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: undefined,
        start: undefined // callback when dragging an item starts.
        // Arguments: item, gridsterItem, event
    },
    resizable: {
        delayStart: 0,
        enabled: true,
        handles: {
            s: true,
            e: true,
            n: true,
            w: true,
            se: true,
            ne: true,
            sw: true,
            nw: true
        },
        stop: undefined,
        start: undefined // callback when resizing an item starts.
        // Arguments: item, gridsterItem, event
    },
    swap: true,
    pushItems: true,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: { north: true, east: true, south: true, west: true },
    pushResizeItems: false,
    displayGrid: 'always',
    disableWindowResize: false,
    disableWarnings: false,
    scrollToNewItems: false // scroll to new items placed in a scrollable view
};
var GridsterConfigService = /** @class */ (function () {
    function GridsterConfigService() {
    }
    GridsterConfigService.prototype.getConfig = function () {
        return GridsterConfig;
    };
    GridsterConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GridsterConfigService);
    return GridsterConfigService;
}());



/***/ }),

/***/ "./src/app/components/views/grid/network-grid/network-grid.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/views/grid/network-grid/network-grid.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/views/grid/network-grid/network-grid.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/views/grid/network-grid/network-grid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  network-grid works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/views/grid/network-grid/network-grid.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/views/grid/network-grid/network-grid.component.ts ***!
  \******************************************************************************/
/*! exports provided: NetworkGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkGridComponent", function() { return NetworkGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkGridComponent = /** @class */ (function () {
    function NetworkGridComponent() {
    }
    NetworkGridComponent.prototype.ngOnInit = function () {
    };
    NetworkGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-network-grid',
            template: __webpack_require__(/*! ./network-grid.component.html */ "./src/app/components/views/grid/network-grid/network-grid.component.html"),
            styles: [__webpack_require__(/*! ./network-grid.component.css */ "./src/app/components/views/grid/network-grid/network-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NetworkGridComponent);
    return NetworkGridComponent;
}());



/***/ }),

/***/ "./src/app/components/views/grid/timeline-grid/timeline-grid.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/views/grid/timeline-grid/timeline-grid.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/views/grid/timeline-grid/timeline-grid.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/views/grid/timeline-grid/timeline-grid.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  timeline-grid works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/views/grid/timeline-grid/timeline-grid.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/views/grid/timeline-grid/timeline-grid.component.ts ***!
  \********************************************************************************/
/*! exports provided: TimelineGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineGridComponent", function() { return TimelineGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineGridComponent = /** @class */ (function () {
    function TimelineGridComponent() {
    }
    TimelineGridComponent.prototype.ngOnInit = function () {
    };
    TimelineGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-grid',
            template: __webpack_require__(/*! ./timeline-grid.component.html */ "./src/app/components/views/grid/timeline-grid/timeline-grid.component.html"),
            styles: [__webpack_require__(/*! ./timeline-grid.component.css */ "./src/app/components/views/grid/timeline-grid/timeline-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineGridComponent);
    return TimelineGridComponent;
}());



/***/ }),

/***/ "./src/app/components/views/network/network.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/views/network/network.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contentnet {\r\n    width: 100%;\r\n    height: 60%;\r\n    \r\n}\r\n"

/***/ }),

/***/ "./src/app/components/views/network/network.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/views/network/network.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"fullscreen\">\r\n    <div id=\"contentnet\"></div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/components/views/network/network.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/views/network/network.component.ts ***!
  \***************************************************************/
/*! exports provided: NetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkComponent", function() { return NetworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkComponent = /** @class */ (function () {
    function NetworkComponent(internalService) {
        this.internalService = internalService;
        this.nodeIds = [1];
        this.nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
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
        this.internalService.selectedThoughtObs.subscribe(function (selT) {
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
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_1__["Network"](container, _this.data, _this.options);
            _this.network.on("click", function (params) {
                _this.goId = params.nodes[0];
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-network',
            template: __webpack_require__(/*! ./network.component.html */ "./src/app/components/views/network/network.component.html"),
            styles: [__webpack_require__(/*! ./network.component.css */ "./src/app/components/views/network/network.component.css")]
        }),
        __metadata("design:paramtypes", [_services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"]])
    ], NetworkComponent);
    return NetworkComponent;
}());



/***/ }),

/***/ "./src/app/components/views/timeline/timeline.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/views/timeline/timeline.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/views/timeline/timeline.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/views/timeline/timeline.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"visualization\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/views/timeline/timeline.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/views/timeline/timeline.component.ts ***!
  \*****************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(internalService) {
        this.internalService = internalService;
        // Create a DataSet (allows two way data-binding)
        this.items = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.options = {}; // Configuration for the Timeline
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selectedThoughtObs.subscribe(function (selectedThought) {
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
        var timeline = new vis__WEBPACK_IMPORTED_MODULE_1__["Timeline"](container, this.items, this.options);
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/components/views/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/components/views/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [_services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/notAuth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/notAuth.guard.ts ***!
  \*****************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "";
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        if (this.authToken) {
            this.options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'authorization': this.authToken // Attach token
                })
            };
        }
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user);
    };
    AuthService.prototype.editUser = function (user) {
        return this.http.put(this.domain + '/authentication/edit', user);
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + '/authentication/checkUsername/' + username);
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/authentication/checkEmail/' + email);
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user);
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
        return this.http.get(this.domain + '/authentication/profile', this.options);
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    DataService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        };
    };
    /* ===============================================================
       ADD DATA
    =============================================================== */
    DataService.prototype.newThought = function (thought) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + '/api/newThought', thought, this.options);
    };
    DataService.prototype.newPubThought = function (thought) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + '/api/newPubThought', thought, this.options);
    };
    DataService.prototype.newPubRoom = function (room) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + '/api/newPubRoom', room, this.options);
    };
    /* ===============================================================
       GET DATA
    =============================================================== */
    DataService.prototype.getPubRoom = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/api/getPubRoom/' + id, this.options);
    };
    DataService.prototype.getAllThought = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/api/allThought', this.options);
    };
    DataService.prototype.getSingleThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/api/singleThought/' + id, this.options);
    };
    DataService.prototype.getThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/api/getThought/' + id, this.options);
    };
    DataService.prototype.getContent = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/api/getContent/' + id, this.options);
    };
    /* ===============================================================
      DELETE/UPDATE DATA
   =============================================================== */
    DataService.prototype.deleteThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.delete(this.domain + '/api/deleteThought/' + id, this.options);
    };
    // Function to edit/update Label
    DataService.prototype.editThought = function (editthought) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + '/api/editThought/', editthought, this.options);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/draw-navbar.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/draw-navbar.service.ts ***!
  \*************************************************/
/*! exports provided: DrawNavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawNavbarService", function() { return DrawNavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrawNavbarService = /** @class */ (function () {
    function DrawNavbarService() {
        this.nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        // Store Data for Navbar Component as BehaviourSubjects
        this.thenodes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.nodes);
        this.nodesObs = this.thenodes.asObservable();
        this.theedges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.edges);
        this.edgesObs = this.theedges.asObservable();
    }
    DrawNavbarService.prototype.onRoomChange = function (room) {
        // if (this.lastRoom) {
        //   if (this.lastRoom._id != room._id) {
        //     this.removeRoomNode(room)
        //     this.drawRoomNode(room)
        //   }
        // } else { //First time
        //   this.drawRoomNode(room)
        // }
        // this.lastRoom = room;
    };
    // this.nodes.add({ id: 1, label: "Infinity Cloud", group: 0 })                        //Add Infinity Cloud Node
    // //Subscribe to selected User, Room, Thought and NOdes 
    DrawNavbarService.prototype.onUserChange = function (user) {
        if (this.user) {
            if (user._id != this.user._id) {
                this.removeUserNodes(user);
                this.drawUserNodes(user);
            }
        }
        else {
            this.user = user; // First User (=Guest)
            this.nodes.add({ id: "3", label: this.user.username, group: 2 }); // Add Guest Node
        }
    };
    DrawNavbarService.prototype.onThoughtChange = function (thought) {
        // Make selectedThought Node visible differently
    };
    DrawNavbarService.prototype.onNodeChange = function (node) { };
    //Drawing Functions
    DrawNavbarService.prototype.drawPubRooms = function (room) {
        this.selectedRoom = room;
        this.nodes.add({ id: this.selectedRoom._id, label: this.selectedRoom.label, group: 1 }); // Add newRoom Node¨
        this.edges.add({ from: 1, to: this.selectedRoom._id, id: "3l" });
        this.edges.add({ from: this.selectedRoom._id, to: this.user._id, id: "2l" });
    };
    DrawNavbarService.prototype.removeRoomNode = function (room) {
        if (room._id != this.lastRoom._id) {
            this.nodes.remove(this.lastRoom._id);
            this.edges.remove("3l");
            this.edges.remove("2l");
        }
    };
    DrawNavbarService.prototype.drawUserNodes = function (user) {
        //Remove the Edge from Room to Guest/User
        this.user = user;
        this.nodes.add({ id: this.user._id, label: this.user.username, group: 2 }); //Add User Node
        this.edges.add({ from: this.selectedRoom._id, to: this.user._id, id: "2l" }); //Add Edge from Room to User
    };
    DrawNavbarService.prototype.removeUserNodes = function (user) {
        if (this.nodes.get("3"))
            this.nodes.remove("3"); //Remove the Guest UserNode, if found
        if (this.nodes.get(user._id))
            this.nodes.remove(user._id); //Remove other UserNode, if found
        this.edges.remove("2l"); //Remove Edge from Room to User
    };
    DrawNavbarService.prototype.drawUserContent = function () {
        this.showUserContent = true;
        this.nodes.add({ id: 4, label: "My Networks", group: 8, first: true }); //Add Networks Node
        this.edges.add({ from: this.user._id, to: 4, id: "4l" }); //Add Edge from User to Networks
        this.nodes.add({ id: 5, label: "My Rooms", group: 9, first: true }); //Add Rooms Node
        this.edges.add({ from: this.user._id, to: 5, id: "5l" }); //Add Edge from User to Rooms
        this.nodes.add({ id: 6, label: "My Friends", group: 10, first: true }); //Add Friends Node
        this.edges.add({ from: this.user._id, to: 6, id: "6l" }); //Add Edge from User to Friends
    };
    DrawNavbarService.prototype.removeUserContent = function () {
        this.nodes.remove(4); //Remove Networks Node
        this.edges.remove("4l"); //Remove Edge from User to Networks
        this.nodes.remove(5); //Remove Rooms Node
        this.edges.remove("5l"); //Remove Edge from User to Rooms
        this.nodes.remove(6); //Remove Friends Node
        this.edges.remove("6l"); //Remove Edge from User to Friends
    };
    DrawNavbarService.prototype.drawMyNetworks = function () {
        var _this = this;
        this.user.private.forEach(function (network) {
            var i = 0;
            _this.nodes.add({ id: network._id, label: network.label, group: 3 }); //Add Networks Nodes
            _this.edges.add({ from: 4, to: network._id, id: "networks" + i });
        });
    };
    DrawNavbarService.prototype.removeMyNetworks = function () {
        var _this = this;
        this.user.private.forEach(function (network) {
            var i = 0;
            _this.nodes.remove(network._id); //Add Networks Nodes
            _this.edges.remove("networks" + i);
        });
    };
    DrawNavbarService.prototype.drawPublic = function () {
    };
    DrawNavbarService.prototype.drawMyRooms = function () {
        var _this = this;
        this.user.rooms.forEach(function (room) {
            room._id = room._id + "-Link"; //Create a New ID for the Link 
            var i = 0; //If Room isnt selected Room
            _this.nodes.add({ id: room._id, label: room.label, group: 4 }); //Add Room 
            _this.edges.add({ from: 5, to: room._id, id: "rooms" + i }); //Add Edge from MyRooms to Room 
        });
    };
    DrawNavbarService.prototype.removeMyRooms = function () {
        var _this = this;
        console.log(this.nodes);
        this.user.rooms.forEach(function (room) {
            var i = 0; //If Room isnt selected Room
            console.log(room._id);
            _this.nodes.remove(room._id); //Remove Roomlink 
            _this.edges.remove("rooms" + i); //Add Edge from MyRooms to Room 
        });
        console.log(this.nodes);
    };
    DrawNavbarService.prototype.drawMyFriends = function () {
        var _this = this;
        this.user.friends.forEach(function (friend) {
            var i = 0; //If Room isnt selected Room
            _this.nodes.add({ id: friend._id, label: friend.label, group: 5 }); //Add Room 
            _this.edges.add({ from: 6, to: friend._id, id: "friend" + i }); //Add Edge from MyRooms to Room 
        });
    };
    DrawNavbarService.prototype.removeMyFriends = function () {
        var _this = this;
        this.user.friends.forEach(function (friend) {
            var i = 0; //Add all Friends as Nodes
            _this.nodes.remove(friend._id);
            _this.edges.remove("friend" + i);
        });
    };
    DrawNavbarService.prototype.drawThoughtContent = function (id) {
        // this.dataService.getContent(id).subscribe(data => {
        //   this.showThoughts.push(data['thought']);
        //   if(data['thought'].contents.length > 0) {
        //   data['thought'].contents.forEach(content => {
        //     var i = 0;
        //     this.nodes.add({ id: content._id, label: content.label, group: 3 }) // Add newRoom Node¨
        //     this.edges.add({ from: data['thought']._id, to: content._id, id: content._id + "" + i })   
        //   });
        // }
        // })
    };
    DrawNavbarService.prototype.removeThoughtContent = function (thought) {
        // thought.contents.forEach(content => {
        //   var i = 0;
        //   this.nodes.remove(content._id)
        //   this.edges.remove(content._id + "" + i )
        // });
        // //Delete from Array (That's the easiest way??)
        // this.showThoughts.forEach(showThought => {
        //   var i = 0;
        //   if (showThought._id === thought._id) {
        //     this.showThoughts.splice(i, 1);
        // }
        // i++;
        // })
        // console.log(this.showThoughts)
    };
    DrawNavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DrawNavbarService);
    return DrawNavbarService;
}());



/***/ }),

/***/ "./src/app/services/internal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/internal.service.ts ***!
  \**********************************************/
/*! exports provided: InternalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalService", function() { return InternalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _public_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public.service */ "./src/app/services/public.service.ts");
/* harmony import */ var _draw_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draw-navbar.service */ "./src/app/services/draw-navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InternalService = /** @class */ (function () {
    function InternalService(dataService, authService, publicService, drawNavbarService) {
        this.dataService = dataService;
        this.authService = authService;
        this.publicService = publicService;
        this.drawNavbarService = drawNavbarService;
        this.guestRoom = {
            _id: "guestroom",
            label: "Welcome!",
            admin: [],
            members: [],
            contents: [],
            dimensions: [],
            visible: "open",
            activeUsers: []
        };
        this.guestUser = {
            _id: "guestuser",
            email: "guest@complexity-app.com",
            username: "Guest",
            private: [],
            public: [],
            rooms: [{
                    _id: "guestroom",
                    label: "Welcome!",
                    admin: [],
                    members: [],
                    contents: [],
                    dimensions: [],
                    visible: "open",
                    activeUsers: []
                }],
            friends: []
        };
        // Stores Data for Viewer as GridsterItems
        this.Items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.ItemsObs = this.Items.asObservable();
        // Stores all public Rooms (later: Selected Rooms, SEARCH, shown as Stars in Background)
        this.pubRooms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.pubRoomsObs = this.pubRooms.asObservable();
        //Stores the selected Room (default: Welcome)
        this.selectedRoom = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.guestRoom);
        this.selectedRoomObs = this.selectedRoom.asObservable();
        // Stores public Thoughts of selected Room
        this.pubThoughts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.pubThoughtsObs = this.pubThoughts.asObservable();
        //stores User (default: Guest)
        this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.guestUser);
        this.selectedUserObs = this.selectedUser.asObservable();
        //Selected Thought (Thought incl. Content which is being shown)
        this.selectedThought = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.selectedThoughtObs = this.selectedThought.asObservable();
        // Array with all Thoughts of this Session
        this.sessionThoughts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.sessionThoughtsObs = this.sessionThoughts.asObservable();
        //Selected Tool
        this.selectedTool = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("none");
        this.selectedToolObs = this.selectedTool.asObservable();
    }
    //Consts: GuestUser, WelcomeRoom
    //Observables: PubRooms (incl. one = selected), SessionThoughts, SelectedThought, User, Networks, Tools
    //Input: AuthService: User (Friends, Networks, Room-Links)
    //Input: DataService: Thoughts
    //Input: PublicService: PubRooms, PubThoughts
    //Functions: ChangeUser, ShowMyNetworks, ShowThought, RemoveThought ShowFriends, GoToFriendRoom, ShowMyRooms, GoToRoom
    //Function: ChangeSelectedThought
    //Function: ChangeTool, changeShowAs
    //Output: PubRooms, SessionThoughts, User @Navbar (via DrawGraph-Service)
    //Output: SelectedThought (incl. Contents + SubContents) @Viewer 
    //LOAD DATA
    InternalService.prototype.loadUser = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (data) {
                if (data['user']) {
                    var user = data['user'];
                    _this.changeRoom(user.rooms[0]._id);
                    _this.selectedUser.next(user);
                    _this.drawNavbarService.removeUserNodes;
                    _this.drawNavbarService.drawUserNodes;
                }
                else {
                    var user = _this.guestUser;
                    _this.selectedUser.next(user);
                    _this.changeRoom(user.rooms[0]._id);
                    _this.drawNavbarService.removeUserNodes;
                    _this.drawNavbarService.drawUserNodes;
                }
            });
        }
    };
    InternalService.prototype.loadPubRooms = function () {
        var _this = this;
        this.publicService.getAllPubRooms().subscribe(function (data) {
            _this.pubRooms.next(data['pubRooms']);
            _this.drawNavbarService.drawPubRooms(data['pubRooms']);
        });
    };
    //ROOMS
    InternalService.prototype.changeRoom = function (id) {
        if (this.pubRooms.getValue().length > 0) {
            var pubRoom = this.pubRooms.getValue().find(function (pubRoom) { return id == pubRoom._id; });
            this.selectedRoom.next(pubRoom);
            this.roomToThought(pubRoom);
            this.drawNavbarService.onRoomChange(pubRoom);
        }
    };
    //THOUGHTS
    InternalService.prototype.roomToThought = function (pubRoom) {
        var thought = {
            _id: pubRoom._id,
            contents: pubRoom.contents,
            level: -1,
            label: pubRoom.label,
            user: pubRoom.admin[0],
            color: "#FFFFFF",
            clicks: pubRoom.likes,
            showAs: "grid",
            grid: { cols: 7, rows: 1, x: 0, y: 0, colspan: 0, rowspan: 0 }
        };
        this.selectedThought.next(thought);
    };
    InternalService.prototype.changeThought = function (id) {
        var _this = this;
        this.dataService.getThought(id).subscribe(function (data) {
            var thought = data['thought']; //Load Populated Thought
            _this.selectedThought.next(thought);
        });
    };
    InternalService.prototype.changeTool = function (tool) {
        this.selectedTool.next(tool);
    };
    InternalService.prototype.changeShowAs = function (label) {
        var viewThought = this.selectedThought.getValue();
        viewThought.showAs = label;
        this.selectedThought.next(viewThought);
    };
    InternalService.prototype.showContentNodes = function (id) {
        this.dataService.getContent(id).subscribe(function (data) { console.log(data); });
    };
    InternalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _public_service__WEBPACK_IMPORTED_MODULE_4__["PublicService"], _draw_navbar_service__WEBPACK_IMPORTED_MODULE_5__["DrawNavbarService"]])
    ], InternalService);
    return InternalService;
}());



/***/ }),

/***/ "./src/app/services/public.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/public.service.ts ***!
  \********************************************/
/*! exports provided: PublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicService", function() { return PublicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicService = /** @class */ (function () {
    function PublicService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    PublicService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        };
    };
    PublicService.prototype.getAllPubRooms = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/public/allPubRooms', this.options);
    };
    PublicService.prototype.getPubRoom = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/public/getPubRoom/' + id, this.options);
    };
    PublicService.prototype.getPubContent = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/public/getPubContent/' + id, this.options);
    };
    PublicService.prototype.getPubThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/public/getPubThought/' + id, this.options);
    };
    PublicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PublicService);
    return PublicService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\loebb\complexity-app\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map