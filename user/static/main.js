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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--\n<router-outlet></router-outlet>-->\n<body class='app header-fixed sidebar-fixed aside-menu-fixed pace-done' [ngClass]='{\"sidebar-lg-show\":showSidebar === true}'>\n    <header class=\"app-header navbar\">\n        <button class=\"navbar-toggler sidebar-toggler d-lg-none mr-auto\" type=\"button\" data-toggle=\"sidebar-show\">\n        <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\" data-toggle=\"sidebar-lg-show\" (click)=\"toggleSidebar()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand d-md-down-none\" href=\"#\">\n            <img class=\"navbar-brand-full\" src=\"/static/assets/images/protegrity_logo.png\" width=\"89\" height=\"25\" alt=\"CoreUI Logo\">\n        </a>\n    </header>\n\n    <div class=\"app-body\">\n        <!-- slidebar -->\n        <div class=\"sidebar\">\n            <nav class=\"sidebar-nav ps\">\n            <ul class=\"nav\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link active\" href=\"javascript:void(0);\">\n                  <i class=\"nav-icon icon-user\"></i> User\n                  </a>\n              </li>\n            </ul>\n            <div class=\"ps__rail-x\" style=\"left: 0px; bottom: 0px;\"><div class=\"ps__thumb-x\" tabindex=\"0\" style=\"left: 0px; width: 0px;\"></div></div><div class=\"ps__rail-y\" style=\"top: 0px; right: 0px;\"><div class=\"ps__thumb-y\" tabindex=\"0\" style=\"top: 0px; height: 0px;\"></div></div></nav>\n            \n        </div>\n\n        <!-- Main container -->\n        <main class=\"main\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\">User Management</li>  \n            </ol>\n            <app-user></app-user>\n        </main>\n    </div>\n</body>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showSidebar = true;
    }
    AppComponent.prototype.toggleSidebar = function () {
        this.showSidebar = !this.showSidebar;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _searchpipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchpipe */ "./src/app/searchpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _searchpipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n          <img class=\"navbar-brand logo\" src=\"assets/images/protegrity_logo.png\">\n        </button>\n        \n      </nav>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/searchpipe.ts":
/*!*******************************!*\
  !*** ./src/app/searchpipe.ts ***!
  \*******************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.username.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUser = function () {
        return this.http.get('/users/?format=json');
    };
    UserService.prototype.deleteUser = function (userid) {
        return this.http.delete('/user/' + userid + '/');
    };
    UserService.prototype.getRoles = function () {
        return this.http.get('/roles/');
    };
    UserService.prototype.getUser = function (userid) {
        return this.http.get('/user/' + userid);
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('/users/', user);
    };
    UserService.prototype.updateUser = function (userid, user) {
        return this.http.put("/user/" + userid + "/", user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"container-fluid\">\n          <div id=\"ui-view\">\n              <div>\n                  <div class=\"animated fadeIn\">\n                      <div class=\"row\">\n                            \n                          <div class=\"col-sm-12\">\n                              <div class=\"card\" *ngIf=\"page == 'list'\">\n                                  <div class=\"card-header\">\n                                      <strong>Manage User</strong>\n                                  </div>\n\n                                  <div class=\"card-body\">\n                                      <div class=\"dataTables_wrapper dt-bootstrap4 no-footer\">\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-12 col-md-6\">\n                                                      <div class=\"dataTables_filter\">\n                                                          <label>Search:<input [(ngModel)]=\"searchText\" type=\"search\" class=\"form-control form-control-sm\">\n                                                          </label>\n                                                      </div>\n                                                  </div>\n                                                  <div class=\"col-sm-12 col-md-6\">\n                                                      <div class=\"dataTables_filter\">\n                                                          <button class=\"btn btn-primary active float-right\" type=\"button\" aria-pressed=\"true\" (click)=\"page = 'add'; resetUser();\">Add User</button>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-12\">\n                                                      <table class=\"table table-striped table-bordered datatable dataTable no-footer\" role=\"grid\" style=\"border-collapse: collapse !important\">\n                                                          <thead>\n                                                              <tr role=\"row\">\n                                                                  <th class=\"sorting_asc\">\n                                                                    Username\n                                                                  </th>\n                                                                  <th class=\"sorting\">\n                                                                    Role\n                                                                  </th>\n                                                                  <th class=\"sorting\">\n                                                                    Actions\n                                                                  </th>\n                                                              </tr>\n                                                          </thead>\n                                                          <tbody>\n                                                              <tr role=\"row\" class=\"odd\" *ngFor=\"let user of userList | filter : searchText\">\n                                                                  <td class=\"sorting_1\"><a href=\"javascript:void(0);\" (click)=\"editUserView(user.id)\">{{user.username}}</a></td>\n                                                                  <td>\n                                                                      <span *ngFor=\"let role of roleList\">\n                                                                          <i *ngIf=\"isRoleSelected(user.roles,role.id)\">{{role.name}}</i>\n                                                                      </span>&nbsp;\n                                                                    </td>\n                                                                  <td>\n                                                                      <a class=\"btn btn-danger\" href=\"javascript:void(0);\" (click)=\"deleteUser(user.id)\">\n                                                                          <img src=\"/static/assets/images/delete-button.png\" style=\"width:20px;height:20px;\">\n                                                                      </a>\n                                                                  </td>\n                                                              </tr>\n                                                              <tr *ngIf=\"userList.length === 0\">\n                                                                  <td colspan=\"3\"> No result found </td>\n                                                              </tr>\n                                                              \n                                                          </tbody>\n                                                      </table>\n                                                  </div>\n                                            </div>\n                                  \n                                            <!--<div class=\"row\">\n                                                <div class=\"col-sm-12 col-md-5\">\n                                                    <div class=\"dataTables_info\" role=\"status\" aria-live=\"polite\"></div>\n                                                </div>\n                                                \n                                                <div class=\"col-sm-12 col-md-7\">\n                                                    <div class=\"dataTables_paginate paging_simple_numbers\" id=\"DataTables_Table_0_paginate\">\n                                                        <ul class=\"pagination\">\n                                                            <li class=\"paginate_button page-item previous disabled\" >\n                                                                <a href=\"javascript:void(0);\" class=\"page-link\">Previous</a>\n                                                            </li>\n                                                            <li class=\"paginate_button page-item next\">\n                                                                <a href=\"javascript:void(0);\" class=\"page-link\">Next</a>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </div>\n                                            </div>-->\n                                  \n                                        </div>\n                                  </div>\n\n                              </div>\n\n                              <div class=\"card\" *ngIf=\"page == 'add' || page == 'edit'\">\n                                  <form method=\"post\" [formGroup]=\"userForm\" (ngSubmit)=\"saveUser()\">\n                                      <div class=\"card-header\" *ngIf=\"page == 'add'\">\n                                          <div class=\"row\">\n                                            <div class=\"col-sm-9\">\n                                                <strong>New User</strong>\n                                            </div>\n                                            <div class=\"col-sm-1\">\n                                                    <strong><a href=\"javascript:void(0)\" (click)=\"page='list'\">Back</a></strong>\n                                            </div>\n                                            <div class=\"col-sm-1\">\n                                                <button type=\"reset\" (click)=\"userForm.reset()\">Cancel</button>\n                                            </div>\n                                            <div class=\"col-sm-1\">\n                                                <button type=\"submit\" [disabled]=\"!userForm.valid\">Save</button>\n                                            </div>\n                                          </div>\n                                          \n                                      </div>\n\n                                      <div class=\"card-header\" *ngIf=\"page == 'edit'\">\n                                          <div class=\"row\">\n                                            <div class=\"col-sm-10\">\n                                                <strong><a href=\"javascript:void(0)\" (click)=\"page='list'\">Back</a></strong>\n                                            </div>\n                                            <div class=\"col-sm-1\">\n                                                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.valid\">Save</button>\n                                            </div>\n                                            <div class=\"col-sm-1\">\n                                                <a class=\"btn btn-danger\" href=\"javascript:void(0);\" (click)=\"deleteUser(userid); page='list'\">\n                                                    <img src=\"/static/assets/images/delete-button.png\" style=\"width:20px;height:20px;\">\n                                                </a>\n                                            </div>\n                                          </div>\n                                          \n                                      </div>\n\n                                      <div class=\"card-body\">\n                                          <div class=\"card\">\n                                              <div class=\"card-header\">\n                                                <strong>General Information</strong>\n                                              </div>\n                                              <div class=\"card-body\">\n                                                  <div class=\"dataTables_wrapper dt-bootstrap4 no-footer\">\n                                                      \n                                                          <div class=\"form-group\">\n                                                              <label class=\"form-col-form-label\" for=\"first_name\">First Name</label>\n                                                              <input type=\"text\" class=\"form-control\" id=\"first_name\" [ngClass]=\"{'is-invalid':userForm.get('first_name').touched && userForm.get('first_name').errors}\" formControlName=\"first_name\" autocomplete=\"off\">\n                                                              <span *ngIf=\"userForm.get('first_name').touched && userForm.get('first_name').errors\"\n                                                                  class=\"invalid-feedback\">First name is required</span>\n                                                              <div class='invalid-feedback'>{{userError.first_name}}</div>\n                                                          </div>\n                                              \n                                                          <div class=\"form-group\">\n                                                              <label class=\"form-col-form-label\" for=\"last_name\">Last Name</label>\n                                                              <input type=\"text\" class=\"form-control\" id=\"last_name\" [ngClass]=\"{'is-invalid':userForm.get('last_name').touched && userForm.get('last_name').errors}\" formControlName=\"last_name\" autocomplete=\"off\">\n                                                              <span *ngIf=\"userForm.get('last_name').touched && userForm.get('last_name').errors\"\n                                                                  class=\"invalid-feedback\">Last name is required</span>\n                                                              <div class='invalid-feedback'>{{userError.last_name}}</div>\n                                                          </div>\n                                              \n                                                          <div class=\"form-group\">\n                                                              <label class=\"form-col-form-label\" for=\"username\">Username</label>\n                                                              <input type=\"text\" class=\"form-control\" id=\"username\" [ngClass]=\"{'is-invalid':userForm.get('username').touched && userForm.get('username').errors}\" formControlName=\"username\" autocomplete=\"off\">\n                                                              <span *ngIf=\"userForm.get('username').touched && userForm.get('username').errors\"\n                                                                  class=\"invalid-feedback\">Username is required</span>\n                                                              <div class='invalid-feedback'>{{userError.username}}</div>\n                                                          </div>\n                                              \n                                                          <div class=\"form-group\">\n                                                              <label class=\"form-col-form-label\" for=\"description\">Description</label>\n                                                              <textarea class=\"form-control\" id=\"description\" cols=\"9\" rows=\"2\" placeholder=\"Description..\" [ngClass]=\"{'is-invalid':userForm.get('description').touched && userForm.get('description').errors}\" formControlName=\"description\"></textarea>\n                                                              <span *ngIf=\"userForm.get('username').touched && userForm.get('username').errors\"\n                                                                  class=\"invalid-feedback\">Description is required</span>\n                                                              <div class='invalid-feedback'>{{userError.description}}</div>\n                                                          </div>\n                                                          \n                                                          \n                                                        \n                                                        \n                                                    </div>\n                                              </div>\n                                          </div>\n\n                                          <div class=\"card\">\n                                              <div class=\"card-header\">\n                                                <strong>Roles</strong>\n                                              </div>\n                                              <div class=\"card-body\">\n                                                  <div class=\"dataTables_wrapper dt-bootstrap4 no-footer\">\n                                                      <div class=\"row\">\n                                                          <div class=\"col-sm-12 col-md-6\">\n                                                              <div class=\"dataTables_filter\">\n                                                                  <label><i>Select roles from the list below: <strong>{{this.userForm.controls.roles.value.length}} selected</strong></i></label>\n                                                              </div>\n                                                          </div>\n                                                      </div>\n                                                      <div class=\"row\">\n                                                          <div class=\"col-sm-12\">\n                                                              <table class=\"table table-striped table-bordered datatable dataTable no-footer\" role=\"grid\" style=\"border-collapse: collapse !important\">\n                                                                  <thead>\n                                                                      <tr role=\"row\">\n                                                                          <th>\n                                                                              <div class=\"form-group\">\n                                                                                  <input type=\"checkbox\" (change)=\"selectAll($event.target.checked)\">\n                                                                              </div>\n                                                                          </th>\n                                                                          <th>\n                                                                            Role name\n                                                                          </th>\n                                                                          <th>\n                                                                            Description\n                                                                          </th>\n                                                                          <th>\n                                                                            Roles\n                                                                          </th>\n                                                                      </tr>\n                                                                  </thead>\n                                                                  <tbody>\n                                                                      <tr role=\"row\" *ngFor=\"let role of roleList; let i = index\">\n                                                                          <td>\n                                                                              <div class=\"form-group\" formArrayName=\"roles\">\n                                                                                  <input type=\"checkbox\" [checked]=\"role.selected? role.selected : false\" (change)=\"onChange(i, $event.target.checked)\">\n                                                                              </div>\n                                                                          </td>\n                                                                          <td>{{role.name}}</td>\n                                                                          <td>{{role.description}}</td>\n                                                                          <td>{{role.roles}}</td>\n                                                                      </tr>\n                                                                      \n                                                                  </tbody>\n                                                              </table>\n                                                          </div>\n                                                    </div>\n                                          \n                                                </div>\n                                              </div>\n                                          </div>\n                                      </div>\n\n                                  </form>  \n\n                              </div>\n                              \n                          </div>\n                          \n                      </div>\n                  </div>\n              </div>\n          </div>\n    </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(formBuilder, _userService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this._userService = _userService;
        this.userList = [];
        this.userid = 0;
        this.searchText = '';
        this.page = 'list';
        this.roleList = [];
        this.userError = {};
        this.selectedRole = [];
        this.getRoles();
        this._userService.getAllUser().subscribe(function (result) {
            if (result['results']) {
                _this.userList = result['results'];
            }
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            roles: this.formBuilder.array([])
        });
        this.userError = {
            first_name: "",
            last_name: "",
            username: "",
            description: "",
            roles: []
        };
    };
    UserComponent.prototype.deleteUser = function (userid) {
        var _this = this;
        this._userService.deleteUser(userid).subscribe(function (result) {
            _this.userList = _this.userList.filter(function (user) {
                return user.id != userid;
            });
        });
    };
    UserComponent.prototype.saveUser = function () {
        var _this = this;
        var user = this.userForm.value;
        user['roles'] = this.userForm.controls.roles.value;
        if (this.page == 'add') {
            this._userService.addUser(user).subscribe(function (result) {
                if (result) {
                    _this.userForm.reset();
                    alert("User Added");
                }
            });
        }
        else if (this.page == 'edit') {
            this._userService.updateUser(this.userid, user).subscribe(function (result) {
                if (result) {
                    alert("User updated");
                }
            });
        }
    };
    UserComponent.prototype.editUserView = function (userid) {
        var _this = this;
        this.userid = userid;
        this.selectAll(false);
        this._userService.getUser(userid).subscribe(function (result) {
            if (result) {
                _this.page = "edit";
                var roles = [];
                if (result['roles'].length > 0) {
                    roles = result['roles'].map(function (x) {
                        return parseInt(x, 10);
                    });
                }
                _this.userForm.patchValue({
                    username: result['username'],
                    first_name: result['first_name'],
                    last_name: result['last_name'],
                    description: result['description']
                });
                _this.userForm.setControl('roles', _this.formBuilder.array(roles || []));
                _this.selectRoles(roles);
            }
        });
    };
    UserComponent.prototype.getRoles = function () {
        var _this = this;
        this._userService.getRoles().subscribe(function (result) {
            if (result['results']) {
                _this.roleList = result['results'];
            }
        });
        var result = { "count": 4, "next": null, "previous": null, "results": [{ "id": 1, "name": "Security Administrator Viewer", "roles": "Security Viewer, Cloud Gateway Viewer,Applinace CLI Viewer, Applicance web viewer", "description": "Security administrator viewer role" }, { "id": 2, "name": "Shell accounts", "roles": "shell(non-CLI) Access", "description": "Accounts that have shell access" }, { "id": 3, "name": "Secutrity Administrator", "roles": "Security Viewer, Cloud Gateway Viewer,Applinace CLI Viewer, Applicance web viewer,shell(non-CLI) Access", "description": "Secutrity Administrator role" }, { "id": 4, "name": "Director Administrator", "roles": "Director manager", "description": "Local LDAP Administrator role" }] };
        this.roleList = result["results"];
    };
    UserComponent.prototype.selectRoles = function (roles) {
        for (var i = 0; i < this.roleList.length; i++) {
            if (roles.includes(this.roleList[i]['id'])) {
                this.roleList[i]['selected'] = true;
            }
        }
    };
    UserComponent.prototype.selectAll = function (isChecked) {
        var _this = this;
        var roles = this.userForm.controls.roles;
        roles.controls = [];
        this.roleList.forEach(function (value, index) {
            _this.onChange(index, isChecked);
        });
    };
    UserComponent.prototype.buildRoles = function () {
        var _this = this;
        var arr = this.roleList.map(function (role) {
            return _this.formBuilder.control(role.selected);
        });
        return this.formBuilder.array(arr);
    };
    UserComponent.prototype.onChange = function (index, isChecked) {
        var _this = this;
        var roles = this.userForm.controls.roles;
        if (isChecked) {
            this.roleList[index]['selected'] = true;
            roles.push(this.formBuilder.control(this.roleList[index]['id']));
        }
        else {
            this.roleList[index]['selected'] = false;
            var ind = roles.controls.findIndex(function (x) { return x.value == _this.roleList[index]['id']; });
            roles.removeAt(ind);
        }
    };
    UserComponent.prototype.isRoleSelected = function (userRoles, roleId) {
        var roles = userRoles.map(function (x) {
            return parseInt(x, 10);
        });
        if (roles.includes(roleId)) {
            return true;
        }
        return false;
    };
    UserComponent.prototype.resetUser = function () {
        this.selectAll(false);
        this.userForm.reset();
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserComponent);
    return UserComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/var/www/html/user-management/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map