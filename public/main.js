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
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");
/* harmony import */ var _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/viewer/viewer.component */ "./src/app/components/viewer/viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_4__["NotAuthGuard"]]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_4__["NotAuthGuard"]]
    },
    { path: 'viewer', component: _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ViewerComponent"]
    },
    { path: 'viewer/:id', component: _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ViewerComponent"]
    },
    {
        path: '**', component: _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ViewerComponent"]
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

module.exports = "<mat-sidenav-container class=\"example-container\">\r\n        <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\">\r\n                <app-perspective></app-perspective>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content>\r\n      \r\n      <app-navbar></app-navbar>\r\n   \r\n        <router-outlet></router-outlet>\r\n       \r\n        <app-toolbar></app-toolbar>\r\n</mat-sidenav-content>\r\n</mat-sidenav-container>"

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
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/internal.service */ "./src/app/services/internal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(internalService) {
        this.internalService = internalService;
        this.title = 'Complexity-App';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selectedToolObs.subscribe(function (tool) {
            if (tool == "sidenav") {
                _this.opened = true;
            }
            else {
                _this.opened = false;
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_internal_service__WEBPACK_IMPORTED_MODULE_1__["InternalService"]])
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
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");
/* harmony import */ var _components_tools_new_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tools/new/new.component */ "./src/app/components/tools/new/new.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/viewer/viewer.component */ "./src/app/components/viewer/viewer.component.ts");
/* harmony import */ var _services_internal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_tools_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tools/search/search.component */ "./src/app/components/tools/search/search.component.ts");
/* harmony import */ var _components_tools_edit_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tools/edit/edit.component */ "./src/app/components/tools/edit/edit.component.ts");
/* harmony import */ var _components_tools_dimension_dimension_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tools/dimension/dimension.component */ "./src/app/components/tools/dimension/dimension.component.ts");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_draw_navbar_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/draw-navbar.service */ "./src/app/services/draw-navbar.service.ts");
/* harmony import */ var _services_draw_viewer_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/draw-viewer.service */ "./src/app/services/draw-viewer.service.ts");
/* harmony import */ var _services_perspectives_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/perspectives.service */ "./src/app/services/perspectives.service.ts");
/* harmony import */ var _components_perspective_perspective_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/perspective/perspective.component */ "./src/app/components/perspective/perspective.component.ts");
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
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_tools_new_new_component__WEBPACK_IMPORTED_MODULE_12__["NewComponent"],
                _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_14__["ViewerComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _components_tools_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _components_tools_edit_edit_component__WEBPACK_IMPORTED_MODULE_18__["EditComponent"],
                _components_tools_dimension_dimension_component__WEBPACK_IMPORTED_MODULE_19__["DimensionComponent"],
                _components_perspective_perspective_component__WEBPACK_IMPORTED_MODULE_25__["PerspectiveComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                angular_gridster2__WEBPACK_IMPORTED_MODULE_20__["GridsterModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__["NotAuthGuard"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _services_internal_service__WEBPACK_IMPORTED_MODULE_15__["InternalService"], _services_draw_navbar_service__WEBPACK_IMPORTED_MODULE_22__["DrawNavbarService"], _services_draw_viewer_service__WEBPACK_IMPORTED_MODULE_23__["DrawViewerService"], _services_perspectives_service__WEBPACK_IMPORTED_MODULE_24__["PerspectivesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<mat-card>\r\n  <!-- Login Form -->\r\n  <form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n    <mat-card-title>\r\n      Login\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <!-- Username Field -->\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\r\n          <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\r\n          <!-- Validation -->\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- Password Field  -->\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n          <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\r\n          <!-- Validation -->\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n\r\n    <!-- Submit Button -->\r\n   <button mat-raised-button [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" color=\"primary\" type=\"submit\" value=\"Login\">Login</button>\r\n  </form>\r\n</mat-card>"

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
                    _this.internalService.loadData();
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

module.exports = "#navbar {\r\n  width: 100%;\r\n  height: 300px;\r\n  background-color: lightblue;\r\n}\r\n"

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
        this.data = {
            nodes: this.nodes,
            edges: this.edges
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.loadData();
        this.drawNavbarService.navbarNodesObs.subscribe(function (nodes) { return _this.data.nodes = nodes; });
        this.drawNavbarService.navbarEdgesObs.subscribe(function (edges) { return _this.data.edges = edges; });
        this.drawNavbarService.navbarOptionsObs.subscribe(function (options) { return _this.options = options; });
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

/***/ "./src/app/components/perspective/perspective.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/perspective/perspective.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/perspective/perspective.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/perspective/perspective.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Active Perspective\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Open for other Perspectives\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <ul>\r\n        <li>Boas Perspective</li>\r\n        <li>What to learn for test</li>\r\n        <li>other fancy way to look at it</li>\r\n      </ul>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<mat-accordion>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Levels\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          See dimensions ordered after levels\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <mat-list>\r\n        <mat-list-item>Level 1</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item>Level 2</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item>Level 3</mat-list-item>\r\n      </mat-list>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n\r\n\r\n\r\n\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Switch perspective\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <ul>\r\n      <li>Boas Perspective</li>\r\n      <li></li>\r\n      <li></li>\r\n    </ul>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"First name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Age\">\r\n    </mat-form-field>\r\n  </mat-expansion-panel>\r\n\r\n\r\n\r\n  <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Self aware panel\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <p>I'm visible because I am open</p>\r\n  </mat-expansion-panel>\r\n</mat-accordion>"
=======
module.exports = "<p>\r\n  perspective works!\r\n</p>\r\n"
>>>>>>> bedf000788a2536526a15bcbe7725465bcf948c2

/***/ }),

/***/ "./src/app/components/perspective/perspective.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/perspective/perspective.component.ts ***!
  \*****************************************************************/
/*! exports provided: PerspectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerspectiveComponent", function() { return PerspectiveComponent; });
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

var PerspectiveComponent = /** @class */ (function () {
    function PerspectiveComponent() {
        this.panelOpenState = false;
    }
    PerspectiveComponent.prototype.ngOnInit = function () {
    };
    PerspectiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perspective',
            template: __webpack_require__(/*! ./perspective.component.html */ "./src/app/components/perspective/perspective.component.html"),
            styles: [__webpack_require__(/*! ./perspective.component.css */ "./src/app/components/perspective/perspective.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerspectiveComponent);
    return PerspectiveComponent;
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

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Welcome to the infinity Cloud...\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <mat-horizontal-stepper [linear]=\"true\" #stepper=\"matHorizontalStepper\">\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\" (ngSubmit)=\"onRegisterSubmit()\">\r\n          <ng-template matStepLabel>Create a User</ng-template>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.username.errors && firstFormGroup.controls.username.dirty) || (!usernameValid && firstFormGroup.controls.username.dirty), 'has-success': !firstFormGroup.controls.username.errors && usernameValid}\">\r\n            <input matInput placeholder=\"Username\" class=\"form-control\" formControlName=\"username\" (blur)=\"checkUsername()\" required>\r\n          </mat-form-field>\r\n          <!-- Add Visualisation of User and Colorchooser Later -->\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.required && firstFormGroup.controls.username.dirty\">This field is required</li>\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.minlength && firstFormGroup.controls.username.dirty || firstFormGroup.controls.username.errors?.maxlength && firstFormGroup.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n            <li *ngIf=\"firstFormGroup.controls.username.errors?.validateUsername && firstFormGroup.controls.username.dirty\">Username must not have any special characters</li>\r\n            <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\r\n          </ul>\r\n\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.email.errors && firstFormGroup.controls.email.dirty) || (!emailValid && firstFormGroup.controls.email.dirty), 'has-success': !firstFormGroup.controls.email.errors && emailValid}\">\r\n            <input matInput placeholder=\"E-Mail\" class=\"form-control\" formControlName=\"email\" formControlName=\"email\" (blur)=\"checkEmail()\"\r\n              required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.email.errors?.required && firstFormGroup.controls.email.dirty\">This field is required</li>\r\n            <li *ngIf=\"(firstFormGroup.controls.email.errors?.minlength && firstFormGroup.controls.email.dirty || firstFormGroup.controls.email.errors?.maxlength && firstFormGroup.controls.email.dirty ) && firstFormGroup.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\r\n            <li *ngIf=\"firstFormGroup.controls.email.errors?.validateEmail && firstFormGroup.controls.email.dirty\">This must be a valid e-mail</li>\r\n            <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\r\n          </ul>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.password.errors && firstFormGroup.controls.password.dirty), 'has-success': !firstFormGroup.controls.password.errors}\">\r\n            <input type=\"password\" matInput placeholder=\"Password\" class=\"form-control\" formControlName=\"password\" required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.password.errors?.required && firstFormGroup.controls.password.dirty\">This field is required</li>\r\n          </ul>\r\n          <mat-form-field [ngClass]=\"{'has-error': (firstFormGroup.controls.confirm.errors && firstFormGroup.controls.confirm.dirty) || (firstFormGroup.errors?.matchingPasswords && firstFormGroup.controls.confirm.dirty), 'has-success': !firstFormGroup.controls.confirm.errors && !firstFormGroup.errors?.matchingPasswords}\">\r\n            <input type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"confirm\" required>\r\n          </mat-form-field>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"firstFormGroup.controls.confirm.errors?.required && firstFormGroup.controls.confirm.dirty\">This field is required</li>\r\n            <li *ngIf=\"firstFormGroup.errors?.matchingPasswords && firstFormGroup.controls.confirm.dirty\">Password do not match</li>\r\n          </ul>\r\n          <div>\r\n            <br>\r\n            <button mat-raised-button color=\"primary\" matStepperNext type=\"submit\" value=\"Submit\">Register</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step >\r\n          <ng-template matStepLabel>Rooms</ng-template>\r\n          <p>Now that you are a user, the complexity-App created your own Space in the infinity Cloud.</p>\r\n          <br><p>By default, this space is open for everyone, so other Users can enter your Room and see its content.</p>\r\n          <p>You can create multiple public Rooms and become a Member of certain ones.</p>\r\n          <br><p>Most of your Thoughts thought are going to be thought inside of your user.</p>\r\n          <p>Every user is capable of storing multiple Networks!</p>\r\n          <br><p>Let's create your first Network!</p>\r\n          \r\n            <button mat-raised-button color=\"primary\" matStepperNext type=\"submit\" value=\"Submit\">Create a Network!</button>\r\n     \r\n      </mat-step>\r\n      <mat-step [stepControl]=\"thirdFormGroup\">\r\n        <form [formGroup]=\"thirdFormGroup\" (ngSubmit)=\"onStarterNetworkSubmit()\">\r\n          <ng-template matStepLabel>Starter Set</ng-template>\r\n            <p>We recommend you to start with an exmaple Network. It will show you the potential of the complexity-app!</p>\r\n            <br><p>You can also start on a blank Node (for experienced Users, not yet implemented)</p>\r\n            <p>The starter Set contains the following Nodes.</p>\r\n          <mat-list>\r\n            <mat-list-item>\r\n              <button mat-button color=\"primary\">Diary</button>\r\n              <p>Write down your Memories and Feelings as complex networks. It Includes a timeline and specific feelings.</p>\r\n            </mat-list-item>\r\n            <mat-list-item>\r\n              <button mat-button color=\"primary\">Plans</button>\r\n              <button mat-button>Create complex Projects and set Goals within your Timelines</button>\r\n            </mat-list-item>\r\n          </mat-list>\r\n          <div>\r\n            <br>\r\n            <br>\r\n            <button mat-raised-button matStepperNext color=\"primary\" type=\"submit\" value=\"Submit\">Get started!</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </mat-card-content>\r\n</mat-card>"

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
                    _this.internalService.loadData();
                });
            }
        });
    };
    RegisterComponent.prototype.onTutorialFinish = function () {
        this.router.navigate(['viewer']);
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

module.exports = ".spacer{\r\n    flex: 1 1 auto;\r\n   \r\n}\r\n\r\n.onTop{\r\n z-index: 10;\r\n position:absolute;\r\n}\r\n\r\n.bot{\r\nwidth: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <mat-toolbar *ngIf=\"showTool == 'new'\">\r\n    <app-new></app-new>\r\n  </mat-toolbar>\r\n  <mat-toolbar *ngIf=\"showTool == 'edit'\">\r\n    <app-edit></app-edit>\r\n  </mat-toolbar>\r\n  <mat-toolbar *ngIf=\"showTool == 'search'\">\r\n    <app-search></app-search>\r\n  </mat-toolbar>\r\n  <mat-toolbar *ngIf=\"showTool == 'dimension'\">\r\n    <app-dimension></app-dimension>\r\n  </mat-toolbar>\r\n\r\n  <mat-toolbar>\r\n    <mat-toolbar-row>\r\n\r\n\r\n      <span class='spacer'></span>\r\n      <div *ngIf=\"selectedThought\">{{ selectedThought.label }}</div>\r\n      <button mat-button matTooltip=\"My Thoughts\" *ngIf=\"authService.loggedIn()\" (click)=\"loadMyThoughts()\">\r\n        <i class=\"material-icons\">group_work</i> My Thoughts</button>\r\n      <button mat-button matTooltip=\"New Thought\" *ngIf=\"authService.loggedIn()\" (click)=\"changeTool('new')\">\r\n        <i class=\"material-icons\">add_circle</i> New Thought</button>\r\n      <button mat-button matTooltip=\"Add Dimension\" *ngIf=\"authService.loggedIn() && selectedThought.label != 'My Thoughts'\" (click)=\"changeTool('dimension')\">\r\n        <i class=\"material-icons\">add</i> Add Dimension</button>\r\n      <button mat-button matTooltip=\"Edit\" *ngIf=\"authService.loggedIn()\" (click)=\"changeTool('edit')\">\r\n        <i class=\"material-icons\">create</i> Details</button>\r\n\r\n      <button mat-button *ngIf=\"!authService.loggedIn()\" routerLink=\"../login\">\r\n        <i class=\"material-icons\">account_box</i> Login</button>\r\n      <button mat-button *ngIf=\"!authService.loggedIn()\" routerLink=\"../register\">\r\n        <i class=\"material-icons\">launch</i> Register</button>\r\n      <div *ngIf=\"user\">\r\n        <button mat-button *ngIf=\"!authService.loggedIn()\" matTooltip=\"{{ user.username | uppercase}}\">\r\n          <i class=\"material-icons\">account_circle</i> {{ user.username | uppercase}}</button>\r\n\r\n        <button mat-button *ngIf=\"authService.loggedIn()\" matTooltip=\"{{ user.username | uppercase}}\" [matMenuTriggerFor]=\"menu\">\r\n          <i class=\"material-icons\">account_circle</i> {{ user.username | uppercase}}</button>\r\n      </div>\r\n      <button mat-button matTooltip=\"Change Perspective\" (click)=\"changeTool('sidenav')\">\r\n        <i class=\"material-icons\">view_quilt</i> Change Perspective</button>\r\n      <button mat-button matTooltip=\"Search\" (click)=\"changeTool('search')\">\r\n        <i class=\"material-icons\">search</i> Search</button>\r\n\r\n      <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n        <button *ngIf=\"authService.loggedIn\" mat-menu-item (click)=\"loadMyUser()\">My User</button>\r\n        <button *ngIf=\"authService.loggedIn\" mat-menu-item (click)=\"onLogoutClick()\">Logout</button>\r\n      </mat-menu>\r\n      <span class='spacer'></span>\r\n      <button mat-button>Complexity-App v.0.0.6</button>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</div>"

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
    ToolbarComponent.prototype.loadMyUser = function () {
    };
    ToolbarComponent.prototype.onLogoutClick = function () {
        this.internalService.clearAll();
        this.authService.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
    };
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internalService.selectedUserObs.subscribe(function (res) { return _this.user = res; });
        console.log(this.authService.loggedIn());
        console.log(this.user);
        this.internalService.selectedThoughtObs.subscribe(function (res) { return _this.selectedThought = res; });
        console.log(this.selectedThought);
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

module.exports = "<mat-toolbar-row *ngIf=\"selectedThought.label != 'My Thoughts'\">\r\n\r\n  <mat-form-field>\r\n    <input matInput #label [(ngModel)]=\"newLabel\" name=\"newLabel\" placeholder=\"Enter a Label\">\r\n  </mat-form-field>\r\n\r\n    <form>\r\n        <button mat-button [matMenuTriggerFor]=\"menuDimensions\">Choose Type of Dimension</button>\r\n        <mat-menu #menuDimensions=\"matMenu\" [overlapTrigger]=\"false\">\r\n          <button mat-menu-item (click)=\"changeType('Date')\"><i class=\"material-icons\">event</i> Date</button>\r\n          <button mat-menu-item (click)=\"changeType('Number')\"><i class=\"material-icons\">timeline</i> Number</button>\r\n          <button mat-menu-item (click)=\"changeType('Tag')\"><i class=\"material-icons\">flag</i> Tag</button>\r\n        </mat-menu>\r\n   \r\n\r\n\r\n      <mat-form-field *ngIf=\"addDate\">\r\n          <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"newDate\" name=\"newDate\" placeholder=\"Choose a date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field *ngIf=\"addNumber\">\r\n          <input matInput #number [(ngModel)]=\"newNumber\" name=\"newNumber\" placeholder=\"Enter a Number\">\r\n        </mat-form-field>\r\n        <mat-form-field *ngIf=\"addTag\">\r\n            <input matInput #tag [(ngModel)]=\"newTag\" name=\"newTag\" placeholder=\"Add a Tag\">\r\n          </mat-form-field>\r\n  \r\n\r\n\r\n<div *ngIf=\"addTag || addNumber || addDate\">\r\n      <button mat-button (click)=\"onDimensionSubmit()\">Add a Dimension</button>\r\n    </div>\r\n  \r\n    </form>\r\n  \r\n  \r\n  \r\n  </mat-toolbar-row>\r\n  \r\n  \r\n  <mat-toolbar-row *ngIf=\"selectedThought.level < 0\">\r\n    You can't Add Thoughts on this level.\r\n  </mat-toolbar-row>\r\n  \r\n\r\n\r\n\r\n"

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
        //Autocomplete
        this.newThought = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    DimensionComponent.prototype.onDimensionSubmit = function () {
        var _this = this;
        //Create New Dimension
        this.newDimension = {
            user: this.user._id,
            label: this.newLabel,
            val: ""
        };
        var editThought = this.selectedThought;
        //Create Value, depending on Input
        if (this.addDate) {
            this.newDimension.val = this.newDate;
            this.selectedThought.dateDim.push(this.newDimension);
        }
        ;
        if (this.addNumber) {
            this.newDimension.val = this.newNumber,
                this.selectedThought.numberDim.push(this.newDimension);
        }
        ;
        if (this.addTag) {
            this.newDimension.val = this.newTag;
            this.selectedThought.tagDim.push(this.newDimension);
        }
        ;
        //Update Selected Thought with new Dimensions
        this.dataService.editThought(editThought).subscribe(function (data) {
            //Update Dimension-Content with new Link
            _this.internalService.loadData();
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
        this.internalService.selectedUser.subscribe(function (res) { return _this.user = res; });
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
            _this.internalService.changeSelectedThought(_this.selectedThought._id);
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

module.exports = "<mat-toolbar-row>\r\n\r\n  <form class=\"searchbar-form\">\r\n    <mat-form-field class=\"searchbar-full-width\">\r\n      <input matInput placeholder=\"New\" aria-label=\"Thought\" [formControl]=\"newThought\">\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"onNewSubmit()\">Save Thought</button>\r\n  </form>\r\n  \r\n</mat-toolbar-row>\r\n\r\n\r\n"

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
    }
    NewComponent.prototype.onNewSubmit = function () {
        var _this = this;
        var newContext = [];
        if (this.selectedThought.contexts) {
            this.selectedThought.contexts.forEach(function (context) {
                newContext.unshift(context);
            });
        }
        if (this.selectedThought.label != "My Thoughts" && this.selectedThought._id != "WelcomeThought") {
            newContext.unshift(this.selectedThought._id);
        }
        var newThought = {
            label: this.newThought.value,
            createdBy: { user: this.user._id, timestamp: new Date() },
            contexts: newContext,
            clicks: 0,
            public: false
        };
        //check if Public
        if (this.selectedThought.public) {
            newThought.public = true;
        }
        ;
        console.log(newThought);
        this.dataService.newThought(newThought).subscribe(function (data) {
            if (_this.selectedThought.label != "My Thoughts" && _this.selectedThought._id != "WelcomeThought") {
                _this.selectedThought.contents.push(data['thought']._id);
                _this.dataService.editThought(_this.selectedThought).subscribe(function (data) {
                });
            }
            _this.internalService.loadData();
        });
    };
    NewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newThought = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.internalService.selectedUserObs.subscribe(function (res) { return _this.user = res; });
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
        this.internalService.changeSelectedThought(thought._id);
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

module.exports = "\r\n#mainbar {\r\n    width: 100%;\r\n    height: 500px;\r\n    overflow: hidden;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/viewer/viewer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/viewer/viewer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainbar\"></div>\r\n\r\n    "

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
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_draw_viewer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/draw-viewer.service */ "./src/app/services/draw-viewer.service.ts");
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
    function ViewerComponent(dataService, internalService, router, authService, drawViewerService) {
        this.dataService = dataService;
        this.internalService = internalService;
        this.router = router;
        this.authService = authService;
        this.drawViewerService = drawViewerService;
        this.nodes = new vis__WEBPACK_IMPORTED_MODULE_5__["DataSet"]([]);
        this.edges = new vis__WEBPACK_IMPORTED_MODULE_5__["DataSet"]([]);
        this.data = {
            nodes: this.nodes,
            edges: this.edges
        };
    }
    ViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drawViewerService.viewerNodesObs.subscribe(function (nodes) { return _this.data.nodes = nodes; });
        this.drawViewerService.viewerEdgesObs.subscribe(function (edges) { return _this.data.edges = edges; });
        this.drawViewerService.viewerOptionsObs.subscribe(function (options) { return _this.options = options; });
        var container = document.getElementById('mainbar');
        this.network = new vis__WEBPACK_IMPORTED_MODULE_5__["Network"](container, this.data, this.options);
        this.network.on("click", function (params) {
            if (params.nodes.length) {
                _this.internalService.changeSelectedThought(params.nodes[0]);
            }
            else {
                _this.internalService.defaultSelectedThought();
            }
        });
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
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_draw_viewer_service__WEBPACK_IMPORTED_MODULE_6__["DrawViewerService"]])
    ], ViewerComponent);
    return ViewerComponent;
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
        this.domain = "http://localhost:8080";
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
    AuthService.prototype.getAllUser = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + '/authentication/allUser', this.options);
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
    /* ===============================================================
       GET DATA
    =============================================================== */
    DataService.prototype.getAllThought = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/api/allThought', this.options);
    };
    DataService.prototype.getAllPubThought = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/api/allPubThought', this.options);
    };
    DataService.prototype.getSingleThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/api/singleThought/' + id, this.options);
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
        this.activeUsers = [];
        this.activeThoughts = [];
        this.nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.options = {
            nodes: {
                shape: 'dot',
                size: 20,
                font: {
                    size: 15,
                    color: '#111111'
                },
            }
        };
        // Store Data for Navbar Component as BehaviourSubjects
        this.navbarNodes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.nodes);
        this.navbarNodesObs = this.navbarNodes.asObservable();
        this.navbarEdges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.edges);
        this.navbarEdgesObs = this.navbarEdges.asObservable();
        this.navbarOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.options);
        this.navbarOptionsObs = this.navbarOptions.asObservable();
    }
    DrawNavbarService.prototype.clearAll = function () {
        this.nodes.clear();
        this.edges.clear();
    };
    DrawNavbarService.prototype.drawPubThoughts = function (thoughts) {
        var _this = this;
        if (thoughts) {
            thoughts.forEach(function (thought) {
                _this.nodes.add({ id: thought._id, label: thought.label });
                if (thought.contents) {
                    thought.contents.forEach(function (content, index) {
                        var linkID = thought._id + index;
                        this.edges.add({ id: linkID, from: thought._id, to: content._id });
                    });
                }
                ;
                _this.activeThoughts.push(thought);
            });
        }
    };
    DrawNavbarService.prototype.addPubThought = function (thought) {
    };
    DrawNavbarService.prototype.deleteUsers = function () {
        var _this = this;
        if (this.activeUsers.length > 0) {
            this.activeUsers.forEach(function (user) {
                _this.nodes.remove(user._id);
            });
        }
    };
    DrawNavbarService.prototype.drawUsers = function (users) {
        var _this = this;
        if (users) {
            users.forEach(function (user) {
                _this.nodes.add({ id: user._id, label: user.username });
                _this.activeUsers.push(user);
            });
            this.navbarNodes.next(this.nodes);
        }
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

/***/ "./src/app/services/draw-viewer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/draw-viewer.service.ts ***!
  \*************************************************/
/*! exports provided: DrawViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawViewerService", function() { return DrawViewerService; });
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



var DrawViewerService = /** @class */ (function () {
    function DrawViewerService() {
        this.activeThoughts = [];
        this.nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]([]);
        this.options = {
            nodes: {
                shape: 'dot',
                size: 10,
                font: {
                    size: 15,
                    color: '#111111'
                },
            },
            groups: {
                dateDim: { color: { background: 'red' }, size: 3 },
                numberDim: { color: { background: 'blue' }, size: 3 },
                tagDim: { color: { background: 'green' }, size: 3 },
            }
        };
        // Store Data for Navbar Component as BehaviourSubjects
        this.viewerNodes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.nodes);
        this.viewerNodesObs = this.viewerNodes.asObservable();
        this.viewerEdges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.edges);
        this.viewerEdgesObs = this.viewerEdges.asObservable();
        this.viewerOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.options);
        this.viewerOptionsObs = this.viewerOptions.asObservable();
    }
    DrawViewerService.prototype.drawThoughtsArray = function (thoughts) {
        var _this = this;
        console.log(thoughts);
        if (thoughts) {
            thoughts.forEach(function (thought) {
                _this.nodes.add({ id: thought._id, label: thought.label });
                if (thought.dateDim) {
                    thought.dateDim.forEach(function (dim) {
                        _this.nodes.add({ id: dim._id, label: dim.label + " " + dim.val.toString(), group: 'dateDim' });
                        _this.edges.add({ from: thought._id, to: dim._id, length: 1 });
                    });
                }
                if (thought.numberDim) {
                    thought.numberDim.forEach(function (dim) {
                        _this.nodes.add({ id: dim._id, label: dim.label + " " + dim.val, group: 'numberDim' });
                        _this.edges.add({ from: thought._id, to: dim._id, length: 1 });
                    });
                }
                if (thought.tagDim) {
                    thought.tagDim.forEach(function (dim) {
                        _this.nodes.add({ id: dim._id, label: dim.label + " " + dim.val, group: 'tagDim' });
                        _this.edges.add({ from: thought._id, to: dim._id, length: 1 });
                    });
                }
            });
            thoughts.forEach(function (thought) {
                var checkThought = thought;
                if (checkThought.contents) {
                    checkThought.contents.forEach(function (content) {
                        _this.edges.add({ from: checkThought._id, to: content });
                    });
                }
                _this.activeThoughts.push(thought);
            });
        }
    };
    DrawViewerService.prototype.clearAll = function () {
        this.nodes.clear();
        this.edges.clear();
    };
    DrawViewerService.prototype.changeThoughts = function (thoughts) {
        //for Each Thought: Write Nodes/Edges/Levels...
        //User if Data loaded for first Time and if Change in "Room"/ThoughtArray
    };
    DrawViewerService.prototype.drawDimension = function (thoughts) {
        //Write each Thought of that Dimension: Write Nodes/Edges/Levels...
    };
    DrawViewerService.prototype.removeDimension = function (thoughts) {
        //Write each Thought of that Dimension: Write Nodes/Edges/Levels...
    };
    DrawViewerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DrawViewerService);
    return DrawViewerService;
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
/* harmony import */ var _draw_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw-navbar.service */ "./src/app/services/draw-navbar.service.ts");
/* harmony import */ var _draw_viewer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draw-viewer.service */ "./src/app/services/draw-viewer.service.ts");
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
    function InternalService(dataService, authService, drawViewerService, drawNavbarService) {
        this.dataService = dataService;
        this.authService = authService;
        this.drawViewerService = drawViewerService;
        this.drawNavbarService = drawNavbarService;
        //Default Objects (for LoggedOut Views)
        this.welcomeThought = {
            _id: "WelcomeThought",
            label: "Welcome!"
        };
        this.guestUser = {
            _id: "guestID",
            username: "Guest"
        };
        this.UserThought = {
            _id: "fakeID",
            label: "My Thoughts",
            contents: []
        };
        this.newDimensionsArray = {};
        //Save all relevant Data as BehaviourSubjects
        //SEARCH LISTS
        // Stores all Private Thoughts
        this.privateThoughts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.privateThoughtsObs = this.privateThoughts.asObservable();
        // Stores all Private Thoughts
        this.publicThoughts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.publicThoughtsObs = this.publicThoughts.asObservable();
        // Stores all all Users 
        this.allUsers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.allUsersObs = this.allUsers.asObservable();
        //SELECTED DATA
        //stores User (default: Guest)
        this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.guestUser);
        this.selectedUserObs = this.selectedUser.asObservable();
        //Selected Thought (Thought incl. Content which is being shown)
        this.selectedThought = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.welcomeThought);
        this.selectedThoughtObs = this.selectedThought.asObservable();
        //SELECTED TOOL
        this.selectedPerspectives = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.selectedPerspectivesObs = this.selectedPerspectives.asObservable();
        //SELECTED TOOL
        this.selectedDimensions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.selectedDimensionsObs = this.selectedDimensions.asObservable();
        //SELECTED TOOL
        this.selectedTool = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("none");
        this.selectedToolObs = this.selectedTool.asObservable();
    }
    //LOAD DATA --> FirstLoad (Navbar) or Login/Register
    InternalService.prototype.loadData = function () {
        var _this = this;
        //IF LOGGEDIN
        if (this.authService.loggedIn()) {
            //NAVBAR
            //1. UserArray
            this.authService.getProfile().subscribe(function (data) {
                _this.selectedUser.next(data['user']);
            });
            this.drawNavbarService.deleteUsers();
            this.authService.getAllUser().subscribe(function (data) {
                var userArray = [];
                data['users'].forEach(function (user) {
                    if (user._id != _this.selectedUser.getValue()._id) {
                        userArray.push(user);
                    }
                });
                _this.allUsers.next(userArray); //Save User without myself For Searches
                userArray.unshift(_this.selectedUser.getValue()); //Add Me at first Place
                _this.drawNavbarService.drawUsers(userArray);
            });
            //2. PubThoughtsArray
            this.dataService.getAllPubThought().subscribe(function (data) {
                _this.publicThoughts.next(data['allThoughts']); //Save PubThoughts for later Search
                _this.drawNavbarService.drawPubThoughts(data['allThoughts']); // Draw PubThoughts
            });
            //VIEWER
            this.loadMyThoughts();
        }
        else {
            this.loggedOut();
        }
    };
    InternalService.prototype.loggedOut = function () {
        this.clearAll();
        var UserArray = [];
        UserArray.push(this.guestUser);
        var thoughtArray = [];
        thoughtArray.push(this.welcomeThought);
        this.drawNavbarService.drawUsers(UserArray);
        this.drawNavbarService.drawPubThoughts(thoughtArray);
        this.drawViewerService.drawThoughtsArray(thoughtArray);
        this.selectedUser.next(this.guestUser);
    };
    InternalService.prototype.loadMyThoughts = function () {
        var _this = this;
        this.dataService.getAllThought().subscribe(function (data) {
            _this.selectedThought.next(_this.UserThought); //Take UserThought as Selected Thought
            _this.privateThoughts.next(data['allThoughts']); //Save Private Thoughts for Search
            if (_this.selectedUser.getValue().startPerspectives.length > 0) {
                _this.selectedPerspectives.next(_this.selectedUser.getValue().startPerspectives); //Select first Perspective of UserPerspectives as Selected Perspective
                _this.getDimensions(data['allThoughts']);
                _this.perspectiveFilter(data['allThoughts']);
                console.log("this happens?");
            }
            else {
                _this.getDimensions(data['allThoughts']);
                _this.drawViewerService.clearAll(); // Clear Viewer
                _this.drawViewerService.drawThoughtsArray(data['allThoughts']); // Draw ThoughtsArray
            }
        });
    };
    InternalService.prototype.getDimensions = function (thoughts) {
        var _this = this;
        this.newDimensionsArray = {
            levelDimensions: [],
            dateDimensions: [],
            numberDimensions: [],
            tagDimensions: []
        };
        thoughts.forEach(function (thought) {
            if (thought.contents.length > 0) {
                _this.newDimensionsArray.levelDimensions.push({ label: thought.label, ObjID: thought._id, level: thought.contexts.length });
            }
            if (thought.dateDim.length > 0) {
                thought.dateDim.forEach(function (dim) {
                    if (_this.newDimensionsArray.dateDimensions['label'] != dim.label)
                        _this.newDimensionsArray.dateDimensions.push({ label: dim.label });
                });
            }
            if (thought.tagDim.length > 0) {
                thought.tagDim.forEach(function (dim) {
                    if (_this.newDimensionsArray.tagDimensions['label'] != dim.label)
                        _this.newDimensionsArray.tagDimensions.push({ label: dim.label });
                });
            }
            if (thought.numberDim.length > 0) {
                thought.numberDim.forEach(function (dim) {
                    if (_this.newDimensionsArray.numberDimensions['label'] != dim.label)
                        _this.newDimensionsArray.numberDimensions.push({ label: dim.label });
                });
            }
            _this.selectedDimensions.next(_this.newDimensionsArray);
            console.log(_this.newDimensionsArray);
        });
    };
    InternalService.prototype.perspectiveFilter = function (thoughts) {
        this.drawViewerService.clearAll(); // Clear Viewer
        this.drawViewerService.drawThoughtsArray(thoughts); // Draw ThoughtsArray
    };
    InternalService.prototype.clearAll = function () {
        this.drawNavbarService.clearAll();
        this.drawViewerService.clearAll();
    };
    //Load Data: After Login, load private Thoughts, load Users, load Selected User, load public Thoughts
    //Put private and public thoughts into AllThoughts
    InternalService.prototype.defaultSelectedThought = function () {
        this.selectedThought.next(this.UserThought);
    };
    InternalService.prototype.changeSelectedThought = function (id) {
        var _this = this;
        this.dataService.getSingleThought(id).subscribe(function (data) {
            _this.selectedThought.next(data['thought']);
        });
    };
    InternalService.prototype.changeViewerThoughts = function (id) {
        //get selected Thought
        //For as Long as there are Contents, add Contents to viewerThoughts
        // For Each Content of Selected Thought, add Thought.
        //Eventuell: 3 level rauf und 3 level runter.
        // For Each Content of added Thought, add Content...
        //First part: Get new ViewerThoughtsArray
        //Second: Change Viewer ThoughtsArray
    };
    InternalService.prototype.changeThought = function (id) {
    };
    InternalService.prototype.changeTool = function (tool) {
        this.selectedTool.next(tool);
    };
    InternalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _draw_viewer_service__WEBPACK_IMPORTED_MODULE_5__["DrawViewerService"], _draw_navbar_service__WEBPACK_IMPORTED_MODULE_4__["DrawNavbarService"]])
    ], InternalService);
    return InternalService;
}());



/***/ }),

/***/ "./src/app/services/perspectives.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/perspectives.service.ts ***!
  \**************************************************/
/*! exports provided: PerspectivesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerspectivesService", function() { return PerspectivesService; });
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

var PerspectivesService = /** @class */ (function () {
    function PerspectivesService() {
    }
    PerspectivesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PerspectivesService);
    return PerspectivesService;
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

module.exports = __webpack_require__(/*! C:\Users\Noah\complexity-app\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map