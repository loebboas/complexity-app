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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_myroom_myroom_component__ = __webpack_require__("../../../../../src/app/components/myroom/myroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_new_new_component__ = __webpack_require__("../../../../../src/app/components/new/new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    { path: 'myroom', component: __WEBPACK_IMPORTED_MODULE_3__components_myroom_myroom_component__["a" /* MyroomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: 'myroom/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_myroom_myroom_component__["a" /* MyroomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_9__components_new_new_component__["a" /* NewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_notAuth_guard__["a" /* NotAuthGuard */]]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_notAuth_guard__["a" /* NotAuthGuard */]]
    },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
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
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
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

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'app';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_new_new_component__ = __webpack_require__("../../../../../src/app/components/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_myroom_myroom_component__ = __webpack_require__("../../../../../src/app/components/myroom/myroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_15__components_new_new_component__["a" /* NewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_myroom_myroom_component__["a" /* MyroomComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_17__material_module__["a" /* MaterialModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_10__services_data_service__["a" /* DataService */]],
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
exports.push([module.i, ".context {\r\n    font-size: 25px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Sidebar -->\r\n<mat-drawer-container class=\"sidenav-container\" autosize>\r\n\t\t<mat-drawer #drawer class=\"sidenav\" mode=\"side\">\r\n\t\t\t\t<button type=\"button\" mat-button *ngFor=\"let context of allContexts\">{{ context.label }}</button>\r\n\t\t</mat-drawer>\t \r\n\r\n\t\t \r\n\r\n\t\r\n<!-- Main Card -->\r\n<mat-card class=\"main-card\">\r\n\t<mat-card-title>\r\n\t\t<button type=\"button\" class=\"context\" mat-button (click)=\"drawer.toggle()\"> {{ chosenContext.label }}</button>\r\n\t</mat-card-title>\r\n\r\n    <mat-tab-group>\r\n  \t\t<mat-tab *ngFor=\"let perspective of allPerspectives\" label=\"{{ perspective.label }}\">\r\n\t\t\t\t<mat-card class=\"one-card\" *ngFor=\"let meaning of allMeanings\">{{ meaning.label }}</mat-card>\r\n\t\t</mat-tab>\r\n\t</mat-tab-group>\r\n</mat-card>\r\n</mat-drawer-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
        this.chosenThought = { id: 2, label: 'Welcome', context: [{ id: 1 }], perspective: [{ id: 2 }], meaning: [{ id: 5 }, { id: 6 }] };
        this.chosenPerspective = { id: 2, label: 'Welcome', context: [{ id: 1 }], perspective: [{ id: 2 }], meaning: [{ id: 5 }, { id: 6 }] };
        this.chosenContext = { id: 1, label: 'Complexity-App', context: [{ id: 1 }], perspective: [{ id: 2 }, { id: 3 }, { id: 4 }], meaning: [] };
        this.allContexts = [{ id: 1, label: 'Complexity-App', context: [{ id: 1 }], perspective: [{ id: 2 }, { id: 3 }, { id: 4 }], meaning: [] }];
        this.allPerspectives = [
            { id: 2, label: 'Welcome', context: [{ id: 1 }], perspective: [{ id: 2 }], meaning: [{ id: 5 }, { id: 6 }] },
            { id: 3, label: 'Public', context: [{ id: 1 }], perspective: [{ id: 3 }], meaning: [{ id: 7 }] },
            { id: 4, label: 'About', context: [{ id: 1 }], perspective: [{ id: 4 }], meaning: [{ id: 8 }] }
        ];
        //2. Lade alle Objekte für die gilt: Context = ChosenContext && Perspective = ChosenPerspective
        this.allMeanings = [
            { id: 5, label: 'Login', context: [{ id: 2 }, { id: 1 }], perspective: [{ id: 2 }], meaning: [] },
            { id: 6, label: 'Register', context: [{ id: 2 }, { id: 1 }], perspective: [{ id: 2 }], meaning: [] }
        ];
        this.hardThought = [
            { id: 1, label: 'Complexity-App', context: [{ id: 1 }], perspective: [{ id: 2 }, { id: 3 }, { id: 4 }], meaning: [] },
            { id: 2, label: 'Welcome', context: [{ id: 1 }], perspective: [{ id: 2 }], meaning: [{ id: 5 }, { id: 6 }] },
            { id: 3, label: 'Public', context: [{ id: 1 }], perspective: [{ id: 3 }], meaning: [{ id: 7 }] },
            { id: 4, label: 'About', context: [{ id: 1 }], perspective: [{ id: 4 }], meaning: [{ id: 8 }] },
            { id: 5, label: 'Login', context: [{ id: 2 }, { id: 1 }], perspective: [{ id: 2 }], meaning: [] },
            { id: 6, label: 'Register', context: [{ id: 2 }, { id: 1 }], perspective: [{ id: 2 }], meaning: [] },
            { id: 7, label: 'Public Thoughts', context: [{ id: 2 }, { id: 1 }], perspective: [{ id: 2 }], meaning: [] },
            { id: 8, label: 'Text about this Homepage', context: [{ id: 1 }, { id: 1 }], perspective: [{ id: 2 }], meaning: [] },
        ];
        //1. Lade Objekt: Complexity-App + alle Objekte in Context in Array Contexte, alle Perspectiven in Array Perspectives etc.
        this.showFiller = false;
    }
    HomeComponent.prototype.EditMid = function () {
        if (this.editMid == false) {
            this.editMid = true;
        }
        else {
            this.editMid = false;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        //1. Check URL for ObjectID
        //2. If LoggedOut: CheckIfObjectID == Public If Private: "Can't show you this", Else: Load Object: Complexity-App
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
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
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required] // Password field
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
                        _this.router.navigate(['/everything']); // Navigate to dashboard view
                    }
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
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/myroom/myroom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n  margin: 0 0 0 0;\r\n  padding: 0 0 0 0;\r\n}\r\n[class*=\"col-\"] {\r\n  text-align: center;\r\n  background-color: white;\r\n}\r\n.mid-links {\r\nbackground-color: #306875;\r\n}\r\n\r\n.left-links {\r\nbackground-color: #2E746F;\r\n}\r\n\r\n\r\n.right-links {\r\nbackground-color: #336078;\r\n}\r\n\r\n.bot-links {\r\nbackground-color: #52808B;\r\n}\r\n\r\n.top-links {\r\nbackground-color: #185361;\r\n}\r\n\r\n.topleft-links {\r\nbackground-color: #508A86;\r\n}\r\n\r\n.topright-links {\r\nbackground-color: #567B8F;\r\n}\r\nstrong {\r\n  font-size: 25px;\r\n}\r\n\r\n.btn {\r\n    padding: 14px 24px;\r\n    border: 0 none;\r\n}\r\n \r\n.btn:focus, .btn:active:focus, .btn.active:focus {\r\n    outline: 0 none;\r\n}\r\n \r\n.btn:hover, .btn:focus, .btn:active, .btn.active, .open > .dropdown-toggle.btn {\r\n    background: #77979E;\r\n}\r\n \r\n.btn:active, .btn.active {\r\n    background: #77979E;\r\n    box-shadow: none;\r\n}\r\n.padding {\r\n}\r\n.input-group-addon {\r\n  padding: 0 0 0 0;\r\n\r\n}\r\n.delete-btn {\r\n  margin: 0 0 0 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/myroom/myroom.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Sidebar -->\r\n<mat-drawer-container class=\"sidenav-container\" autosize>\r\n\t<mat-drawer #drawer class=\"sidenav\" mode=\"side\">\r\n\t\t\t<button type=\"button\" mat-button *ngFor=\"let context of contexts\">{{ context.label }}</button>\r\n\t</mat-drawer>\t \r\n\r\n\t \r\n\r\n\r\n<!-- Main Card -->\r\n<mat-card class=\"main-card\">\r\n<mat-card-title>\r\n\t<button type=\"button\" class=\"context\" mat-button (click)=\"drawer.toggle()\"> {{ chosenThought.label }}</button>\r\n</mat-card-title>\r\n\r\n<mat-tab-group>\r\n\t  <mat-tab *ngFor=\"let perspective of perspectives\" label=\"{{ perspective.label }}\">\r\n\t\t\t<mat-card class=\"one-card\" *ngFor=\"let meaning of meanings\">{{ meaning.label }}</mat-card>\r\n\t</mat-tab>\r\n</mat-tab-group>\r\n</mat-card>\r\n</mat-drawer-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/myroom/myroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyroomComponent = (function () {
    function MyroomComponent(formBuilder, authService, dataService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.processing = false;
        this.foundThought = false;
        this.foundTop = false;
        this.foundBot = false;
        this.foundLeft = false;
        this.foundRight = false;
        this.editMid = false;
        this.createNewMidForm(); // Create new  form on start up
        this.createNewBotForm(); // Create new  form on start up
        this.createNewTopForm(); // Create new  form on start up
        this.createNewLeftForm(); // Create new  form on start up
        this.createNewRightForm(); // Create new  form on start up
        this.createNewTopRightForm(); // Create new  form on start up
    }
    // Function to create new blog form
    MyroomComponent.prototype.createNewMidForm = function () {
        this.formMid = this.formBuilder.group({
            edit: ''
        });
    };
    MyroomComponent.prototype.createNewBotForm = function () {
        this.formBot = this.formBuilder.group({
            value: ''
        });
    };
    MyroomComponent.prototype.createNewTopRightForm = function () {
        this.formTopRight = this.formBuilder.group({
            value: ''
        });
    };
    MyroomComponent.prototype.createNewTopForm = function () {
        this.formTop = this.formBuilder.group({
            value: ''
        });
    };
    MyroomComponent.prototype.createNewLeftForm = function () {
        this.formLeft = this.formBuilder.group({
            value: ''
        });
    };
    MyroomComponent.prototype.createNewRightForm = function () {
        this.formRight = this.formBuilder.group({
            value: ''
        });
    };
    MyroomComponent.prototype.EditMid = function () {
        if (this.editMid == false) {
            this.editMid = true;
        }
        else {
            this.editMid = false;
        }
    };
    MyroomComponent.prototype.onKeyupLeft = function (searchText) {
        console.log(searchText);
        this.getThoughtByName(searchText); // Get all blogs on component loa
        console.log(this.thoughtByName.value);
    };
    MyroomComponent.prototype.onKeyupRight = function (searchText) {
        console.log(searchText);
        this.getThoughtByName(searchText); // Get all blogs on component loa
        console.log(this.thoughtByName.value);
    };
    MyroomComponent.prototype.onKeyupTop = function (searchText) {
        console.log(searchText);
        this.getThoughtByName(searchText); // Get all blogs on component loa
        console.log(this.thoughtByName.value);
    };
    MyroomComponent.prototype.onKeyupBot = function (searchText) {
        console.log(searchText);
        this.getThoughtByName(searchText); // Get all blogs on component loa
        console.log(this.thoughtByName.value);
    };
    MyroomComponent.prototype.onKeyupTopRight = function (searchText) {
        console.log(searchText);
        this.getThoughtByName(searchText); // Get all blogs on component loa
        console.log(this.thoughtByName.value);
    };
    MyroomComponent.prototype.onBotSubmit = function () {
        this.formBot.reset();
    };
    // Functionality: NewThought(Bot/Top), NotAddLink(Both/One//Top/Bot), EditThought(Bot/Mid/Top), NotDeleteSingleLink(Bot/Top), DeleteBothLink, DeleteThought(Top/Mid/Bot)
    // Reload Thought Lvl 0
    MyroomComponent.prototype.reloadThoughts = function (id) {
        this.getMidThought(id);
        console.log(this.thoughtMid._id);
        this.editMid = false;
    };
    MyroomComponent.prototype.getMidThought = function (id) {
        var _this = this;
        this.dataService.getSingleThought(id).subscribe(function (data) {
            // Check if GET request was success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
            }
            else {
                _this.thoughtMid = {
                    value: data.thought.value,
                    _id: data.thought._id,
                }; // Save blog object for use in HTML
                _this.foundThought = true;
            }
        });
    };
    MyroomComponent.prototype.getThoughtByName = function (value) {
        var _this = this;
        // Function to GET all blogs from database
        this.dataService.getThoughtByName(value).subscribe(function (data) {
            _this.thoughtByName =
                {
                    value: data.thought.value,
                    _id: data.thought._id,
                };
        });
    };
    //Update Thought
    MyroomComponent.prototype.updateThoughtSubmit = function () {
        var _this = this;
        var thought = {
            editValue: this.formMid.get('edit').value,
            _id: this.thoughtMid._id
        };
        this.processing = true; // Lock form fields	
        // Function to send blog object to backend
        this.dataService.editThought(thought).subscribe(function (data) {
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
                _this.reloadThoughts(_this.thoughtMid._id);
                _this.editMid == false;
            }
        });
    };
    MyroomComponent.prototype.deleteThought = function (id) {
        var _this = this;
        this.dataService.deleteThought(id).subscribe(function (data) {
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
    };
    MyroomComponent.prototype.deleteLink = function (id) {
        var _this = this;
        this.dataService.deleteThought(id).subscribe(function (data) {
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
    };
    MyroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Load Data
        this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
        console.log(this.currentUrl);
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
            _this.userId = profile.user._id;
        });
        if (!this.currentUrl.id) {
            this.dataService.getThoughtByName("My-Room").subscribe(function (data) {
                _this.chosenThought = data.thought;
                _this.chosenPerspective = data.thought;
                _this.contexts = data.thought.contexts;
                _this.perspectives = data.thought.perspectives;
                _this.meanings = data.thought.meanings;
                console.log(_this.chosenThought);
                console.log(_this.contexts);
                console.log(_this.perspectives);
                console.log(_this.meanings);
                // Load 
            });
        }
        else {
            this.reloadThoughts(this.currentUrl.id);
        }
    };
    MyroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myroom',
            template: __webpack_require__("../../../../../src/app/components/myroom/myroom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/myroom/myroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], MyroomComponent);
    return MyroomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.searchbar-form {\r\n  font-size: 14px;\r\n  min-width: 150px;\r\n  max-width: 200px;\r\n  width: 100%;\r\n  min-height: 0px !important;\r\n}\r\n\r\n.searchbar-full-width {\r\n  width: 100%;\r\n\r\n}\r\n.toolbar-spacer {\r\n  -ms-flex: 1 1 auto;\r\n      flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span class=\"toolbar-spacer\">Complexity-App</span>\r\n    <!-- If not Logged In -->\r\n    <button mat-button *ngIf=\"!authService.loggedIn()\" routerLink=\"home\">Home</button>\r\n    <button mat-button *ngIf=\"!authService.loggedIn()\" routerLink=\"login\">Login</button>\r\n    <button mat-button *ngIf=\"!authService.loggedIn()\" routerLink=\"register\">Register</button>\r\n\r\n    <!-- If Logged In -->\r\n    <button mat-button *ngIf=\"authService.loggedIn()\" routerLink=\"myroom\">My-Room</button>\r\n    <button mat-button *ngIf=\"authService.loggedIn()\" routerLink=\"new\">New</button>\r\n    <button mat-button *ngIf=\"authService.loggedIn()\" routerLink=\"profile\">Profile</button>\r\n    <button mat-button *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\">LogOut</button>\r\n    <form class=\"searchbar-form\">\r\n    <mat-form-field class=\"searchbar-full-width\">\r\n    <input matInput placeholder=\"Search All\">\r\n    </mat-form-field>\r\n    </form>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<!--\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" routerLink=\"/\">Home</a><span class=\"sr-only\">Home</span></li>\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" routerLink=\"/register\">Register</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" routerLink=\"/login\">Login</a></li>\r\n             <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n             <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" routerLink=\"/new\">New</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" routerLink=\"/myroom\">My-Room</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" routerLink=\"/home\">Logical-Room</a></li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" routerLink=\"/projects\">Projects</a></li>\r\n    </ul>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"searchSubmit()\">\r\n      <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"authService.loggedIn()\">\r\n      <div class=\"search-block input-group\" [ngClass]=\"{ 'has-error': form.controls.search.dirty, 'has-success': thoughtByName && form.controls.search.dirty }\" id=\"adv-search\">\r\n               <input type=\"text\" #searchTextBox (keyup)=\"onKeyupNav(searchTextBox.value)\" class=\"form-control dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" formControlName=\"search\" name=\"search\" placeholder=\"Something\">\r\n                <div class=\"input-group-btn\">\r\n                    <div class=\"btn-group\" role=\"group\">\r\n                        <div class=\"dropdown dropdown-lg open\">\r\n                            <div class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n                              <ul class=\"navbar-nav navbar-right\">\r\n                                <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/myroom/',searchByName._id]\">{{ searchByName.value }}</a></li>\r\n                              </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n      </div>\r\n    </ul>\r\n  </form>\r\n  </div>\r\n</nav>\r\n-->\r\n "

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
    function NavbarComponent(dataService, authService, router, formBuilder) {
        this.dataService = dataService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.fountThoughtByName = false;
        this.activeSession = { value: "no Session found", _id: undefined };
        this.createNewForm(); // Create new  form on start up
    }
    NavbarComponent.prototype.createNewForm = function () {
        this.form = this.formBuilder.group({
            search: ''
        });
    };
    NavbarComponent.prototype.onKeyupNav = function (searchText) {
        this.getThoughtByName(searchText); // Get all blogs on component loa
        console.log(this.searchByName.value);
    };
    NavbarComponent.prototype.changeActiveSession = function (id) {
        var _this = this;
        this.dataService.getSingleThought(id).subscribe(function (data) {
            _this.activeSession = {
                _id: data.thought._id,
                value: data.thought.value
            };
        });
        console.log(this.activeSession.value);
    };
    NavbarComponent.prototype.getThoughtByName = function (value) {
        var _this = this;
        // Function to GET all blogs from database
        this.dataService.getThoughtByName(value).subscribe(function (data) {
            _this.searchByName =
                {
                    value: data.thought.value,
                    _id: data.thought._id,
                };
        });
    };
    // Function to logout user
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
    };
    NavbarComponent.prototype.searchSubmit = function () {
        this.searchValue = this.form.get('search').value;
        this.getThoughtByName(this.searchValue);
        this.router.navigate(['../something/', this.searchByName._id]); // Navigate back to home page
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.reset();
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
            _this.userId = profile.user._id;
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Login Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onNewSubmit()\">\r\n\r\n  <!-- Username Field -->\r\n  <div class=\"form-group\">\r\n    <label for=\"new\">New Thought</label>\r\n    <div>\r\n      <input class=\"form-control\" type=\"text\" name=\"value\" formControlName=\"value\" />\r\n      <!-- Validation -->\r\n     </div>\r\n  </div>\r\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" />\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
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
    function NewComponent(formBuilder, authService, dataService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.dataService = dataService;
        this.router = router;
        this.processing = false;
        this.username = '';
        this.createForm();
    }
    NewComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            value: '',
        });
    };
    NewComponent.prototype.onNewSubmit = function () {
        var _this = this;
        this.processing = true;
        // Create New Thought from user's inputs
        var thought = {
            label: this.form.get('value').value,
            user: this.userId,
            form: "sphere",
            privacy: "private"
        };
        //Save New Thought
        this.dataService.newThought(thought).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.newId = data.newId;
                var thought_1 = {
                    label: _this.form.get('value').value,
                    context: [_this.newId],
                    perspective: [_this.newId],
                    user: _this.userId,
                    form: "sphere",
                    privacy: "private"
                };
            }
            ;
            //Update New Thought
            _this.dataService.editThought(thought).subscribe(function (data) {
                if (!data.success) {
                    _this.messageClass = 'alert alert-danger';
                    _this.message = data.message;
                    _this.processing = false;
                }
                else {
                    _this.messageClass = 'alert alert-success';
                    _this.message = data.message;
                    _this.newId = data.newId;
                }
                ;
                setTimeout(function () {
                    _this.router.navigate(['/myroom', _this.newId]); // Redirect        
                });
            });
        });
    };
    NewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile username on page load
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
            _this.userId = profile.user._id;
        });
    };
    NewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/components/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new/new.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NewComponent);
    return NewComponent;
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

module.exports = "<h2 class=\"page-header\">Profile Page</h2>\r\n<ul class=\"list-group\">\r\n\t<li class=\"list-group-item\">Username: {{ username }}</li>\r\n\t<li class=\"list-group-item\">Email: {{ email }} </li>\r\n\t</ul>"

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

module.exports = "<h1 class=\"page-header\">Register</h1>\r\n\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n\r\n<form [formGroup]=\"form\" (ngSubmit)=\"onRegisterSubmit()\">\r\n\r\n  <!-- Username Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\r\n      <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\" (blur)=\"checkUsername()\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n        <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\r\n        <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Email Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\r\n      <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\"/>\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\r\n        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\r\n        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\r\n        <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Password Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\r\n      <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\r\n        <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters and requires at least one small, one big and one special Letter</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Confirm Password Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm\">Confirm Password</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\r\n      <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Submit Input -->\r\n  <input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\r\n\r\n</form>\r\n<!-- Registration Form /-->"

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
    function RegisterComponent(formBuilder, authService, dataService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.dataService = dataService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
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
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        // Create user object form user's inputs
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
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
                    username: _this.form.get('username').value,
                    password: _this.form.get('password').value // Password input field
                };
                // Function to send login data to API
                _this.authService.login(user_1).subscribe(function (data) {
                    _this.authService.storeUserData(data.token, data.user);
                    //Create Starter Objects: My-Room, Memories (TimeLine, Diary, Language), Favorites, Plans (Today, This Week, This Month, This Year)
                    var myroom = {
                        label: "My-Room",
                        user: _this.userId,
                        form: "sphere",
                        privacy: "private"
                    };
                    //Save Starting Data
                    _this.dataService.newThought(myroom).subscribe(function (data) {
                        _this.roomId = data.newId;
                        var memories = {
                            label: "Memories",
                            user: _this.userId,
                            contexts: [{ _id: _this.roomId, count: 0, label: "My-Room" }],
                            perspectives: [{ _id: _this.roomId, count: 0, label: "My-Room" }],
                            form: "sphere",
                            privacy: "private"
                        };
                        var favorites = {
                            label: "Favorites",
                            user: _this.userId,
                            contexts: [{ _id: _this.roomId, count: 0, label: "My-Room" }],
                            perspectives: [{ _id: _this.roomId, count: 0, label: "My-Room" }],
                            form: "sphere",
                            privacy: "private"
                        };
                        var todo = {
                            label: "Plans",
                            user: _this.userId,
                            contexts: [{ _id: _this.roomId, count: 0, label: "My-Room" }],
                            perspectives: [{ _id: _this.roomId, count: 0, label: "My-Room" }],
                            form: "sphere",
                            privacy: "private"
                        };
                        _this.dataService.newThought(memories).subscribe(function (data) {
                            _this.sessionsId = data.newId;
                            _this.dataService.newThought(favorites).subscribe(function (data) {
                                _this.favoritesId = data.newId;
                                _this.dataService.newThought(todo).subscribe(function (data) {
                                    _this.todoId = data.newId;
                                    var editroom = {
                                        _id: _this.roomId,
                                        editLabel: "My-Room",
                                        editContexts: [{ _id: _this.roomId, count: 0, label: "My-Room" }],
                                        editPerspectives: [{ _id: _this.roomId, count: 0, label: "My-Room" }],
                                        editMeanings: [{ _id: _this.sessionsId, count: 0, label: "Memories" }, { _id: _this.favoritesId, count: 0, label: "Favorites" }, { _id: _this.todoId, count: 0, label: "Plans" }],
                                        user: _this.userId,
                                        form: "sphere",
                                        privacy: "private"
                                    };
                                    _this.processing = true; // Lock form fields	
                                    // Function to send blog object to backend
                                    _this.dataService.editThought(editroom).subscribe(function (data) {
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
                                    console.log(_this.messageClass);
                                    setTimeout(function () {
                                        _this.router.navigate(['/login']); // Redirect to login view
                                    }, 5000);
                                });
                            });
                        });
                    });
                });
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
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
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
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
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__["a" /* MatSidenavModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__["a" /* MatSidenavModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



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
       ADD DATA
    =============================================================== */
    DataService.prototype.newThought = function (thought) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + '/datatransfer/newThought', thought, this.options).map(function (res) { return res.json(); });
    };
    /* ===============================================================
       GET DATA
    =============================================================== */
    DataService.prototype.getAllThought = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/allThought', this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getSomeThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/someThought/' + id, this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getSingleThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/singleThought/' + id, this.options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getThoughtByName = function (label) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/datatransfer/thoughtByName/' + label, this.options).map(function (res) { return res.json(); });
    };
    /* ===============================================================
      DELETE/UPDATE DATA
   =============================================================== */
    DataService.prototype.deleteThought = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.delete(this.domain + '/datatransfer/deleteThought/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to edit/update Label
    DataService.prototype.editThought = function (thought) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + '/datatransfer/editThought/', thought, this.options).map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DataService);
    return DataService;
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