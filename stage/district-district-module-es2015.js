(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["district-district-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/create-district/create-district.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/create-district/create-district.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"create-district\">\r\n    <h2>{{createUpdate}}</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12\" >\r\n      <div>\r\n        <h4>\r\n          DISTRICT DETAILS\r\n        </h4>\r\n      </div>\r\n      <div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\" style=\"padding-right: 0px;padding-left: 0px;\">\r\n            <form class=\"row detail\" name=\"form\" #report=\"ngForm\">\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\"><h5>District Name* </h5></label>\r\n                  <input type=\"text\" id=\"districtName-id\" class=\"form-control\" placeholder=\"Enter District Name\" name=\"districtName\"\r\n                  [(ngModel)]=\"districtName\" required=\"true\">\r\n                </div>\r\n              </div>\r\n              \r\n            </form>\r\n            <div class=\"row\" style=\"margin-left: 15px; \">\r\n                    <div style=\"float: left;\">\r\n                            <div>\r\n                                <div class=\"p-20\">\r\n                                    <button type=\"submit\" style=\"background-color: #FF9934\" name=\"btcreatereport\" (click)=\"create()\" value=\"Foo\" id=\"btcreatereport\" class=\"ladda-button btn btn-primary waves-effect waves-light\" data-style=\"zoom-out\">\r\n                                <span aria-hidden=\"true\"></span><span class=\"ladda-label\">{{createUpdate}}</span><span class=\"btn-label btn-label-right\"><i class=\"fa fa-arrow-right\"></i>\r\n                                   </span><span class=\"ladda-spinner\"></span></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/district.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/district.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"led-vehicle\" class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/view-district/view-district.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/view-district/view-district.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner></ngx-spinner>\r\n<div>\r\n  \r\n  <h2>View District </h2>\r\n  <p-table [columns]=\"cols\" [value]=\"districts\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"10\" #dt>\r\n    <!-- <ng-template pTemplate=\"caption\">\r\n        <div style=\"text-align: right\">        \r\n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n        </div>\r\n    </ng-template> -->\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n          {{col.header}}\r\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <input *ngSwitchDefault pInputText type=\"text\"\r\n            (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n          <span *ngSwitchCase=\"'delete'\"></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n      <tr>\r\n        <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <span *ngSwitchDefault> <a routerLink=\"district/{{user.id}}\">{{user[col.field]}}</a> </span>\r\n          <button *ngSwitchCase=\"'delete'\" type=\"button\" class=\"btn btn-danger btn-sm\"\r\n            (click)=\"delete(user)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>");

/***/ }),

/***/ "./src/app/dashboard/district/create-district/create-district.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/district/create-district/create-district.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#create-district {\r\n    border: 2px solid antiquewhite;\r\n}\r\n\r\n.row {\r\n  margin: 15px 0;\r\n}\r\n\r\ninput{\r\n  width: 200%;\r\n  height: 50px;\r\n}\r\n\r\nlabel {\r\n  margin-bottom: 0;\r\n  margin-left: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rpc3RyaWN0L2NyZWF0ZS1kaXN0cmljdC9jcmVhdGUtZGlzdHJpY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kaXN0cmljdC9jcmVhdGUtZGlzdHJpY3QvY3JlYXRlLWRpc3RyaWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3JlYXRlLWRpc3RyaWN0IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuaW5wdXR7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbmxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/district/create-district/create-district.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/district/create-district/create-district.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDistrictComponent", function() { return CreateDistrictComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../district.service */ "./src/app/dashboard/district/district.service.ts");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/http.service */ "./src/app/common/http.service.ts");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_alert */ "./src/app/_alert/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");








let CreateDistrictComponent = class CreateDistrictComponent {
    constructor(districtService, httpService, apiService, router, 
    // tslint:disable-next-line:align
    activatedRoute, alertService, spinner) {
        this.districtService = districtService;
        this.httpService = httpService;
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.spinner = spinner;
        this.isEdit = false;
        this.createUpdate = 'Create District';
    }
    ngOnInit() {
        // tslint:disable-next-line:no-unused-expression
        this.activatedRoute && this.activatedRoute.params.subscribe((params) => {
            this.districtId = params.id;
            if (this.districtId) {
                this.spinner.show();
                this.isEdit = true;
                this.createUpdate = 'Update District';
                this.getDistrictById(this.districtId);
            }
        });
    }
    create() {
        const requestObj = {
            districtName: this.districtName,
            id: 0
        };
        if (this.isEdit) {
            requestObj.id = this.districtId;
        }
        this.httpService.post(this.apiService.API_DISTRICT_API, requestObj).subscribe((data) => {
            if (data) {
                this.autoHideMessage();
                if (this.isEdit) {
                    this.alertService.success('sucessfully updated district');
                }
                else {
                    this.alertService.success('sucessfully created district');
                }
            }
        }, error => {
            this.autoHideMessage();
            this.alertService.error('Error while creating district!');
            console.log(error);
        });
    }
    autoHideMessage() {
        setTimeout(() => {
            this.alertService.clear();
            this.router.navigateByUrl('dashboard/district/viewDistrict');
        }, 1000);
    }
    edit(district) {
        console.log('Edit here' + district.id);
    }
    getDistrictById(districtId) {
        this.httpService.getById(this.apiService.API_DISTRICT_API, districtId).subscribe((data) => {
            if (data) {
                this.districtData = data;
                this.districtName = this.districtData.districtName;
                this.spinner.hide();
            }
        }, error => {
            this.alertService.error('Error while featching district!');
            console.log(error);
        });
    }
};
CreateDistrictComponent.ctorParameters = () => [
    { type: _district_service__WEBPACK_IMPORTED_MODULE_2__["DistrictService"] },
    { type: _common_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _alert__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('district', { static: false })
], CreateDistrictComponent.prototype, "report", void 0);
CreateDistrictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-district.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/create-district/create-district.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-district.component.css */ "./src/app/dashboard/district/create-district/create-district.component.css")).default]
    })
], CreateDistrictComponent);



/***/ }),

/***/ "./src/app/dashboard/district/district-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/district/district-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DistrictRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictRoutingModule", function() { return DistrictRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _district_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./district.component */ "./src/app/dashboard/district/district.component.ts");
/* harmony import */ var _create_district_create_district_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-district/create-district.component */ "./src/app/dashboard/district/create-district/create-district.component.ts");
/* harmony import */ var _view_district_view_district_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-district/view-district.component */ "./src/app/dashboard/district/view-district/view-district.component.ts");






const routes = [
    {
        path: '', component: _district_component__WEBPACK_IMPORTED_MODULE_3__["DistrictComponent"],
        children: [
            {
                path: 'createDistrict',
                component: _create_district_create_district_component__WEBPACK_IMPORTED_MODULE_4__["CreateDistrictComponent"]
            },
            {
                path: 'viewDistrict',
                component: _view_district_view_district_component__WEBPACK_IMPORTED_MODULE_5__["ViewDistrictComponent"]
            },
            {
                path: 'viewDistrict/district/:id',
                component: _create_district_create_district_component__WEBPACK_IMPORTED_MODULE_4__["CreateDistrictComponent"]
            },
            {
                path: '', redirectTo: 'createDisplay', pathMatch: 'full'
            },
        ]
    }
];
let DistrictRoutingModule = class DistrictRoutingModule {
};
DistrictRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DistrictRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/district/district.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/district/district.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#led-vehicle {\r\n    padding-left: 20px;\r\n    float: left;\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rpc3RyaWN0L2Rpc3RyaWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kaXN0cmljdC9kaXN0cmljdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlZC12ZWhpY2xlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/district/district.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/district/district.component.ts ***!
  \**********************************************************/
/*! exports provided: DistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictComponent", function() { return DistrictComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DistrictComponent = class DistrictComponent {
    constructor() { }
    ngOnInit() {
    }
};
DistrictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-led-vehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./district.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/district.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./district.component.css */ "./src/app/dashboard/district/district.component.css")).default]
    })
], DistrictComponent);



/***/ }),

/***/ "./src/app/dashboard/district/district.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/district/district.module.ts ***!
  \*******************************************************/
/*! exports provided: DistrictModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictModule", function() { return DistrictModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _district_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./district-routing.module */ "./src/app/dashboard/district/district-routing.module.ts");
/* harmony import */ var _district_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./district.component */ "./src/app/dashboard/district/district.component.ts");
/* harmony import */ var _create_district_create_district_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-district/create-district.component */ "./src/app/dashboard/district/create-district/create-district.component.ts");
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
/* harmony import */ var _view_district_view_district_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-district/view-district.component */ "./src/app/dashboard/district/view-district/view-district.component.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../_alert */ "./src/app/_alert/index.ts");

















let DistrictModule = class DistrictModule {
};
DistrictModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_district_component__WEBPACK_IMPORTED_MODULE_4__["DistrictComponent"], _create_district_create_district_component__WEBPACK_IMPORTED_MODULE_5__["CreateDistrictComponent"], _view_district_view_district_component__WEBPACK_IMPORTED_MODULE_14__["ViewDistrictComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _district_routing_module__WEBPACK_IMPORTED_MODULE_3__["DistrictRoutingModule"],
            angular_mydatepicker__WEBPACK_IMPORTED_MODULE_6__["AngularMyDatePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__["SelectDropDownModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_12__["PaginatorModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
            _alert__WEBPACK_IMPORTED_MODULE_16__["AlertModule"]
        ],
        providers: [_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogService"]]
    })
], DistrictModule);



/***/ }),

/***/ "./src/app/dashboard/district/district.service.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/district/district.service.ts ***!
  \********************************************************/
/*! exports provided: DistrictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictService", function() { return DistrictService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let DistrictService = class DistrictService {
    constructor(http) {
        this.http = http;
    }
    createReport(report) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    }
};
DistrictService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DistrictService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DistrictService);



/***/ }),

/***/ "./src/app/dashboard/district/view-district/view-district.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/district/view-district/view-district.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notifier__container * {\n  box-sizing: border-box;\n}\n\n.notifier__container-list {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style-type: none;\n}\n\n.notifier__notification {\n  display: block;\n  position: fixed;\n  visibility: hidden;\n  z-index: 10000;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.notifier__notification--material {\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  cursor: default;\n  padding-top: 11px;\n  padding-right: 26px;\n  padding-bottom: 10px;\n  padding-left: 26px;\n}\n\n.notifier__notification--material .notifier__notification-message {\n  display: inline-block;\n  margin-top: 0;\n  margin-bottom: 0;\n  vertical-align: top;\n  line-height: 32px;\n  font-size: 15px;\n}\n\n.notifier__notification--material .notifier__notification-button {\n  display: inline-block;\n  transition: opacity .2s ease;\n  opacity: .5;\n  margin-right: -10px;\n  margin-left: 10px;\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 6px;\n  width: 32px;\n  height: 32px;\n  vertical-align: top;\n}\n\n.notifier__notification--material .notifier__notification-button:hover, .notifier__notification--material .notifier__notification-button:focus {\n  opacity: 1;\n}\n\n.notifier__notification--material .notifier__notification-button:active {\n  transform: scale(0.82);\n  opacity: 1;\n}\n\n.notifier__notification--default {\n  background-color: #444;\n  color: #FFF;\n}\n\n.notifier__notification--default .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--error {\n  background-color: #D9534F;\n  color: #FFF;\n}\n\n.notifier__notification--error .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--info {\n  background-color: #5BC0DE;\n  color: #FFF;\n}\n\n.notifier__notification--info .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--success {\n  background-color: #5CB85C;\n  color: #FFF;\n}\n\n.notifier__notification--success .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--warning {\n  background-color: #F0AD4E;\n  color: #FFF;\n}\n\n.notifier__notification--warning .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n::ng-deep .ui-table .ui-table-tbody > tr:nth-child(even) {\r\n  background-color: #fff5ec !important;\r\n}\n\n::ng-deep .ui-table .ui-table-caption, body .ui-table .ui-table-summary {\r\n  background-color: #FF9934 !important;\r\n}\n\n::ng-deep .ui-table .ui-table-thead > tr > th {\r\n \r\n}\n\n.ngx-notification {\r\n  background-color: #2d2d30;\r\n  border-color: #272729;\r\n  color: #c9c9c9;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zcmMvbGliL3N0eWxlcy9jb3JlLnNjc3MiLCJub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL3NyYy9saWIvc3R5bGVzL3RoZW1lcy90aGVtZS1tYXRlcmlhbC5zY3NzIiwibm9kZV9tb2R1bGVzL3NyYy9saWIvc3R5bGVzL3R5cGVzL3R5cGUtZGVmYXVsdC5zY3NzIiwibm9kZV9tb2R1bGVzL3NyYy9saWIvc3R5bGVzL3R5cGVzL3R5cGUtZXJyb3Iuc2NzcyIsIm5vZGVfbW9kdWxlcy9zcmMvbGliL3N0eWxlcy90eXBlcy90eXBlLWluZm8uc2NzcyIsIm5vZGVfbW9kdWxlcy9zcmMvbGliL3N0eWxlcy90eXBlcy90eXBlLXN1Y2Nlc3Muc2NzcyIsIm5vZGVfbW9kdWxlcy9zcmMvbGliL3N0eWxlcy90eXBlcy90eXBlLXdhcm5pbmcuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rpc3RyaWN0L3ZpZXctZGlzdHJpY3Qvdmlldy1kaXN0cmljdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VBR0Msc0JBQXNCO0FDUHpCOztBRFVFO0VBRUUsYUFBTTtFQUNOLGdCQUFTO0VBR1QsZUFBTztFQUVSLHFCQUFxQjtBQ1h4Qjs7QURnQkM7RUFDQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBR2Qsc0JBQXNCO0VBSXRCLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUNsQjdCOztBQ1ZBO0VBQ0Msa0JBQWtCO0VBQ2xCLHdDQUp3QztFQUt4QyxlQUFlO0VBRWQsaUJBQVM7RUFDVCxtQkFBVztFQUNYLG9CQUFZO0VBQ1osa0JBQVU7QURZWjs7QUNwQkE7RUFjRyxxQkFBcUI7RUFFcEIsYUFBTTtFQUNOLGdCQUFTO0VBRVYsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FEUWxCOztBQzdCQTtFQXlCRyxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLFdBQVc7RUFFVixtQkFBWTtFQUNaLGlCQUFVO0VBRVgsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBRE10Qjs7QUM3Q0E7RUEyQ0ksVUFBVTtBRE1kOztBQ2pEQTtFQStDSSxzQkFBcUI7RUFDckIsVUFBVTtBRE1kOztBRXhEQTtFQUNDLHNCQUx1QztFQU12QyxXQUxpQztBRmdFbEM7O0FFN0RBO0VBS0UsVUFQZ0M7QUZtRWxDOztBR2pFQTtFQUNDLHlCQUx3QztFQU14QyxXQUwrQjtBSHlFaEM7O0FHdEVBO0VBS0UsVUFQOEI7QUg0RWhDOztBSTFFQTtFQUNDLHlCQUx1QztFQU12QyxXQUw4QjtBSmtGL0I7O0FJL0VBO0VBS0UsVUFQNkI7QUpxRi9COztBS25GQTtFQUNDLHlCQUwwQztFQU0xQyxXQUxpQztBTDJGbEM7O0FLeEZBO0VBS0UsVUFQZ0M7QUw4RmxDOztBTTVGQTtFQUNDLHlCQUwwQztFQU0xQyxXQUxpQztBTm9HbEM7O0FNakdBO0VBS0UsVUFQZ0M7QU51R2xDOztBTzFHQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFDQTs7QUFFQTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kaXN0cmljdC92aWV3LWRpc3RyaWN0L3ZpZXctZGlzdHJpY3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/district/view-district/view-district.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/district/view-district/view-district.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDistrictComponent", function() { return ViewDistrictComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../district.service */ "./src/app/dashboard/district/district.service.ts");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/http.service */ "./src/app/common/http.service.ts");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_alert */ "./src/app/_alert/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let ViewDistrictComponent = class ViewDistrictComponent {
    constructor(districtService, httpService, apiService, spinner, confirmationDialogService, alertService, router, activatedRoute) {
        this.districtService = districtService;
        this.httpService = httpService;
        this.apiService = apiService;
        this.spinner = spinner;
        this.confirmationDialogService = confirmationDialogService;
        this.alertService = alertService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.cols = [
            { field: 'districtName', header: 'District Name' },
            { field: 'delete', header: '' },
        ];
        this.spinner.show();
        this.getAllDistricts();
    }
    getAllDistricts() {
        this.httpService.getAll(this.apiService.API_DISTRICT_API).subscribe((data) => {
            if (data) {
                this.districts = data;
                this.spinner.hide();
            }
        }, error => {
            console.log(error);
        });
    }
    delete(district) {
        this.openConfirmationDialog(district);
    }
    openConfirmationDialog(district) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete?')
            .then((confirmed) => this.deleteById(confirmed, district))
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    edit() {
        alert('edit');
    }
    deleteById(confirmed, district) {
        if (confirmed) {
            this.httpService.delete(this.apiService.API_DISTRICT_API, district.id).subscribe((data) => {
                if (data) {
                    this.alertService.success('District deleted successfully');
                    this.autoHideMessage();
                }
            }, error => {
                this.alertService.error('Error while deleting district {}' + district.districtName);
                console.log(error);
            });
        }
    }
    autoHideMessage() {
        setTimeout(() => {
            this.alertService.clear();
            this.getAllDistricts();
        }, 1000);
    }
};
ViewDistrictComponent.ctorParameters = () => [
    { type: _district_service__WEBPACK_IMPORTED_MODULE_2__["DistrictService"] },
    { type: _common_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogService"] },
    { type: _alert__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
ViewDistrictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-district.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/district/view-district/view-district.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-district.component.css */ "./src/app/dashboard/district/view-district/view-district.component.css")).default]
    })
], ViewDistrictComponent);



/***/ })

}]);
//# sourceMappingURL=district-district-module-es2015.js.map