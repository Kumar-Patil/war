(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["area-area-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/area.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/area.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"led-vehicle\" class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/create-area/create-area.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/create-area/create-area.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner></ngx-spinner>\r\n<div id=\"create-district\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12\" >\r\n      <!-- <div>\r\n        <h4>\r\n          AREA DETAILS\r\n        </h4>\r\n      </div> -->\r\n      <div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\" style=\"padding-right: 0px;padding-left: 0px;\">\r\n            <form class=\"row detail\" name=\"form\" #report=\"ngForm\">\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Area Name*</label>\r\n                  <input type=\"text\" id=\"area-id\" class=\"form-control\" placeholder=\"Enter Area Name\" name=\"areaName\"\r\n                  [(ngModel)]=\"areaName\" required=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">District Name *</label>\r\n                    <ngx-select-dropdown (change)=\"selectionChanged($event)\" [config]=\"config\" [options]=\"options\" [(ngModel)]=\"areaDetails\" name=\"areaDetails\"></ngx-select-dropdown>\r\n                  \r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"row\" style=\"margin-left: 15px; \">\r\n                    <div style=\"float: left;\">\r\n                            <div>\r\n                                <div class=\"p-20\">\r\n                                    <button type=\"submit\" style=\"background-color: #FF9934\" name=\"btcreatereport\" (click)=\"create()\" value=\"Foo\" id=\"btcreatereport\" class=\"ladda-button btn btn-primary waves-effect waves-light\" data-style=\"zoom-out\">\r\n                                <span aria-hidden=\"true\"></span><span class=\"ladda-label\">{{createUpdate}}</span><span class=\"btn-label btn-label-right\"><i class=\"fa fa-arrow-right\"></i>\r\n                                   </span><span class=\"ladda-spinner\"></span></button>\r\n                                   <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-secondary\" data-style=\"zoom-out\" style=\"margin-left: 20px\">\r\n                                    <span class=\"ladda-label\">Cancel</span>\r\n                                   </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/view-area/view-area.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/view-area/view-area.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner></ngx-spinner>\r\n<div style=\"float: right; padding: 10px 0px; position: relative; z-index: 10;\">\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"createArea()\">Create Area</button>\r\n</div>\r\n<div style=\"float: left\">\r\n  <!-- <h2>View Areas</h2> -->\r\n<p-table [columns]=\"cols\" [value]=\"areas\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"10\" #dt>\r\n    <ng-template pTemplate=\"caption\">\r\n        <div style=\"text-align: right\">        \r\n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n        </div>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n          {{col.header}}\r\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <input *ngSwitchDefault pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n          <span *ngSwitchCase=\"'delete'\"></span>        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n      <tr> \r\n      <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n        <span *ngSwitchDefault> <a routerLink=\"area/{{user.id}}\">{{user[col.field]}}</a></span>\r\n        <button *ngSwitchCase=\"'delete'\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"delete(user)\">Delete</button> \r\n      </td>\r\n    </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>");

/***/ }),

/***/ "./src/app/dashboard/area/area-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/area/area-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AreaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaRoutingModule", function() { return AreaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area.component */ "./src/app/dashboard/area/area.component.ts");
/* harmony import */ var _create_area_create_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-area/create-area.component */ "./src/app/dashboard/area/create-area/create-area.component.ts");
/* harmony import */ var _view_area_view_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-area/view-area.component */ "./src/app/dashboard/area/view-area/view-area.component.ts");






const routes = [
    {
        path: '', component: _area_component__WEBPACK_IMPORTED_MODULE_3__["AreaComponent"],
        children: [
            {
                path: 'createarea',
                component: _create_area_create_area_component__WEBPACK_IMPORTED_MODULE_4__["CreateAreaComponent"]
            },
            {
                path: 'viewarea',
                component: _view_area_view_area_component__WEBPACK_IMPORTED_MODULE_5__["ViewAreaComponent"]
            },
            {
                path: 'viewarea/area/:id',
                component: _create_area_create_area_component__WEBPACK_IMPORTED_MODULE_4__["CreateAreaComponent"]
            },
            {
                path: '', redirectTo: 'createDisplay', pathMatch: 'full'
            },
        ]
    }
];
let AreaRoutingModule = class AreaRoutingModule {
};
AreaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AreaRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/area/area.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/area/area.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#led-vehicle {\n  padding-left: 20px;\n  float: left;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FyZWEvQzpcXGxlZFZhblxcZGVwbG95ZWVcXGxlZHZhbi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxhcmVhXFxhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hcmVhL2FyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVkLXZlaGljbGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/area/area.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/area/area.component.ts ***!
  \**************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AreaComponent = class AreaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-led-vehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area.component.scss */ "./src/app/dashboard/area/area.component.scss")).default]
    })
], AreaComponent);



/***/ }),

/***/ "./src/app/dashboard/area/area.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/area/area.module.ts ***!
  \***********************************************/
/*! exports provided: AreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaModule", function() { return AreaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _area_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area-routing.module */ "./src/app/dashboard/area/area-routing.module.ts");
/* harmony import */ var _area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./area.component */ "./src/app/dashboard/area/area.component.ts");
/* harmony import */ var _create_area_create_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-area/create-area.component */ "./src/app/dashboard/area/create-area/create-area.component.ts");
/* harmony import */ var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-mydatepicker */ "./node_modules/angular-mydatepicker/fesm2015/angular-mydatepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _view_area_view_area_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-area/view-area.component */ "./src/app/dashboard/area/view-area/view-area.component.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
















let AreaModule = class AreaModule {
};
AreaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_area_component__WEBPACK_IMPORTED_MODULE_4__["AreaComponent"], _create_area_create_area_component__WEBPACK_IMPORTED_MODULE_5__["CreateAreaComponent"], _view_area_view_area_component__WEBPACK_IMPORTED_MODULE_14__["ViewAreaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _area_routing_module__WEBPACK_IMPORTED_MODULE_3__["AreaRoutingModule"],
            angular_mydatepicker__WEBPACK_IMPORTED_MODULE_6__["AngularMyDatePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__["SelectDropDownModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_12__["PaginatorModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"]
        ],
        providers: [_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogService"]]
    })
], AreaModule);



/***/ }),

/***/ "./src/app/dashboard/area/create-area/create-area.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/area/create-area/create-area.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#create-district {\n  border: 2px solid antiquewhite; }\n\n.row {\n  margin: 15px 0; }\n\nlabel {\n  margin-bottom: 0;\n  margin-left: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FyZWEvY3JlYXRlLWFyZWEvQzpcXGxlZFZhblxcZGVwbG95ZWVcXGxlZHZhbi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxhcmVhXFxjcmVhdGUtYXJlYVxcY3JlYXRlLWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2FyZWEvY3JlYXRlLWFyZWEvY3JlYXRlLWFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3JlYXRlLWRpc3RyaWN0IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxubGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/area/create-area/create-area.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/area/create-area/create-area.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAreaComponent", function() { return CreateAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/http.service */ "./src/app/common/http.service.ts");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_alert */ "./src/app/_alert/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let CreateAreaComponent = class CreateAreaComponent {
    constructor(httpService, apiService, spinner, confirmationDialogService, alertService, router, activatedRoute) {
        this.httpService = httpService;
        this.apiService = apiService;
        this.spinner = spinner;
        this.confirmationDialogService = confirmationDialogService;
        this.alertService = alertService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isEdit = false;
        this.createUpdate = 'Create Area';
        this.config = {
            displayKey: 'districtName',
            search: true,
            height: 'auto',
            placeholder: 'Select',
            customComparator: () => { },
            // limitTo: this.options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search',
            searchOnKey: 'description'
        };
    }
    ngOnInit() {
        this.spinner.show();
        // tslint:disable-next-line:no-unused-expression
        this.activatedRoute && this.activatedRoute.params.subscribe((params) => {
            this.areaId = params.id;
            if (this.areaId) {
                this.spinner.show();
                this.isEdit = true;
                this.createUpdate = 'Update Area';
                this.getAreaById(this.areaId);
            }
        });
        this.getAllDistricts();
        console.log(this.options);
    }
    create() {
        const requestObj = {
            areaName: this.areaName,
            id: 0,
            districtId: this.areaDetails.id,
            districtName: this.areaDetails.districtName
        };
        if (this.isEdit) {
            requestObj.id = this.areaId;
        }
        this.httpService.post(this.apiService.API_AREA_API, requestObj).subscribe((data) => {
            if (data) {
                this.autoHideMessage();
                if (this.isEdit) {
                    this.alertService.success('sucessfully updated area');
                }
                else {
                    this.alertService.success('sucessfully created area');
                }
            }
        }, error => {
            this.autoHideMessage();
            this.alertService.error('Error while creating area!');
            console.log(error);
        });
    }
    getAllDistricts() {
        this.httpService.getAll(this.apiService.API_DISTRICT_API).subscribe((data) => {
            if (data) {
                const result = [];
                // tslint:disable-next-line:forin
                for (const val in data) {
                    result.push(data[val]);
                }
                this.options = result;
                this.spinner.hide();
            }
        }, error => {
            console.log(error);
        });
    }
    autoHideMessage() {
        setTimeout(() => {
            this.alertService.clear();
            this.router.navigateByUrl('dashboard/area/viewarea');
        }, 1000);
    }
    getAreaById(areaId) {
        this.httpService.getById(this.apiService.API_AREA_API, areaId).subscribe((data) => {
            if (data) {
                alert(JSON.stringify(data));
                this.areaDetails = data;
                this.areaName = this.areaDetails.areaName;
                this.spinner.hide();
            }
        }, error => {
            this.autoHideMessage();
            this.alertService.error('Error while featching area!');
            console.log(error);
        });
    }
    cancel() {
        this.router.navigateByUrl('dashboard/area/viewarea');
    }
};
CreateAreaComponent.ctorParameters = () => [
    { type: _common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogService"] },
    { type: _alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('report', { static: false })
], CreateAreaComponent.prototype, "report", void 0);
CreateAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/create-area/create-area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-area.component.scss */ "./src/app/dashboard/area/create-area/create-area.component.scss")).default]
    })
], CreateAreaComponent);



/***/ }),

/***/ "./src/app/dashboard/area/view-area/view-area.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/area/view-area/view-area.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .ui-table .ui-table-tbody > tr:nth-child(even) {\n  background-color: #fff5ec !important; }\n\n::ng-deep .ui-table .ui-table-caption, body .ui-table .ui-table-summary {\n  background-color: #FF9934 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FyZWEvdmlldy1hcmVhL0M6XFxsZWRWYW5cXGRlcGxveWVlXFxsZWR2YW4vc3JjXFxhcHBcXGRhc2hib2FyZFxcYXJlYVxcdmlldy1hcmVhXFx2aWV3LWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxvQ0FBb0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hcmVhL3ZpZXctYXJlYS92aWV3LWFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVlYyAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAudWktdGFibGUgLnVpLXRhYmxlLWNhcHRpb24sIGJvZHkgLnVpLXRhYmxlIC51aS10YWJsZS1zdW1tYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5OTM0ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC51aS10YWJsZSAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcclxuIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/area/view-area/view-area.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/area/view-area/view-area.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAreaComponent", function() { return ViewAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/http.service */ "./src/app/common/http.service.ts");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_alert */ "./src/app/_alert/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ViewAreaComponent = class ViewAreaComponent {
    constructor(httpService, apiService, spinner, confirmationDialogService, alertService, router, activatedRoute) {
        this.httpService = httpService;
        this.apiService = apiService;
        this.spinner = spinner;
        this.confirmationDialogService = confirmationDialogService;
        this.alertService = alertService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.spinner.show();
        this.cols = [
            { field: 'areaName', header: 'Area Name' },
            { field: 'districtName', header: 'District Name' },
            { field: 'delete', header: '' }
        ];
        this.getAllAreas();
    }
    createArea() {
        this.router.navigateByUrl('dashboard/area/createarea');
    }
    getAllAreas() {
        this.httpService.getAll(this.apiService.API_AREA_API).subscribe((data) => {
            if (data) {
                this.areas = data;
                this.spinner.hide();
            }
        }, error => {
            this.autoHideMessage();
            this.alertService.error('Error while fetching area!');
            console.log(error);
        });
    }
    delete(area) {
        this.openConfirmationDialog(area);
    }
    openConfirmationDialog(area) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete?')
            .then((confirmed) => this.deleteById(confirmed, area))
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    deleteById(confirmed, area) {
        if (confirmed) {
            this.httpService.delete(this.apiService.API_AREA_API, area.id).subscribe((data) => {
                if (data) {
                    this.alertService.success('Area deleted successfully');
                    this.autoHideMessage();
                }
            }, error => {
                this.alertService.error('Error while Area district {}' + area.areaName);
                this.autoHideMessage();
                console.log(error);
            });
        }
    }
    autoHideMessage() {
        setTimeout(() => {
            this.alertService.clear();
            this.getAllAreas();
        }, 1000);
    }
};
ViewAreaComponent.ctorParameters = () => [
    { type: _common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogService"] },
    { type: _alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ViewAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/view-area/view-area.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-area.component.scss */ "./src/app/dashboard/area/view-area/view-area.component.scss")).default]
    })
], ViewAreaComponent);



/***/ })

}]);
//# sourceMappingURL=area-area-module-es2015.js.map