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
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"create-district\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12\" >\r\n      <div>\r\n        <h4>\r\n          AREA DETAILS\r\n        </h4>\r\n      </div>\r\n      <div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\" style=\"padding-right: 0px;padding-left: 0px;\">\r\n            <form class=\"row detail\" name=\"form\" #report=\"ngForm\">\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Area Name*</label>\r\n                  <input type=\"text\" id=\"area-id\" class=\"form-control\" placeholder=\"Enter Area Name\" name=\"areaName\"\r\n                  [(ngModel)]=\"areaName\" required=\"true\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">District Name *</label>\r\n                    <ngx-select-dropdown (change)=\"selectionChanged($event)\" [config]=\"config\" [options]=\"options\" [(ngModel)]=\"districtName\" name=\"districtName\"></ngx-select-dropdown>\r\n                  \r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"row\" style=\"margin-left: 15px; \">\r\n                    <div style=\"float: left;\">\r\n                            <div>\r\n                                <div class=\"p-20\">\r\n                                    <button type=\"submit\" style=\"background-color: #FF9934\" name=\"btcreatereport\" (click)=\"create()\" value=\"Foo\" id=\"btcreatereport\" class=\"ladda-button btn btn-primary waves-effect waves-light\" data-style=\"zoom-out\">\r\n                                <span aria-hidden=\"true\"></span><span class=\"ladda-label\">Create Area</span><span class=\"btn-label btn-label-right\"><i class=\"fa fa-arrow-right\"></i>\r\n                                   </span><span class=\"ladda-spinner\"></span></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/view-area/view-area.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/view-area/view-area.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div><h2>View Areas</h2>\r\n<p-table [columns]=\"cols\" [value]=\"districts\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"10\" #dt>\r\n    <ng-template pTemplate=\"caption\">\r\n        <div style=\"text-align: right\">        \r\n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n        </div>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n          {{col.header}}\r\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <input *ngSwitchDefault pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n          <span *ngSwitchCase=\"'delete'\"></span>        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n      <tr> \r\n      <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n        <span *ngSwitchDefault> {{user[col.field]}} </span>\r\n        <button *ngSwitchCase=\"'delete'\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"delete(user)\">Delete</button> \r\n      </td>\r\n    </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>");

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

/***/ "./src/app/dashboard/area/area.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/area/area.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#led-vehicle {\r\n    padding-left: 20px;\r\n    float: left;\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FyZWEvYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYXJlYS9hcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVkLXZlaGljbGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */");

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
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area.component.css */ "./src/app/dashboard/area/area.component.css")).default]
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
/* harmony import */ var _view_area_view_area_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-area/view-area.component */ "./src/app/dashboard/area/view-area/view-area.component.ts");














let AreaModule = class AreaModule {
};
AreaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_area_component__WEBPACK_IMPORTED_MODULE_4__["AreaComponent"], _create_area_create_area_component__WEBPACK_IMPORTED_MODULE_5__["CreateAreaComponent"], _view_area_view_area_component__WEBPACK_IMPORTED_MODULE_13__["ViewAreaComponent"]],
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
        ]
    })
], AreaModule);



/***/ }),

/***/ "./src/app/dashboard/area/create-area/create-area.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/area/create-area/create-area.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#create-district {\r\n    border: 2px solid antiquewhite;\r\n}\r\n\r\n.row {\r\n  margin: 15px 0;\r\n}\r\n\r\nlabel {\r\n  margin-bottom: 0;\r\n  margin-left: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FyZWEvY3JlYXRlLWFyZWEvY3JlYXRlLWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2FyZWEvY3JlYXRlLWFyZWEvY3JlYXRlLWFyZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjcmVhdGUtZGlzdHJpY3Qge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYW50aXF1ZXdoaXRlO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tbGVmdDogMXB4O1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreateAreaComponent = class CreateAreaComponent {
    constructor(httpService, apiService, router) {
        this.httpService = httpService;
        this.apiService = apiService;
        this.router = router;
        this.reportingtime = { hour: 13, minute: 30 };
        this.closingTime = { hour: 18, minute: 30 };
        this.meridian = true;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: 'dd/mm/yyyy'
            // other options are here...
        };
        this.myDateInit = true;
        this.model = null;
        this.options = [{ id: 34, description: 'Ranchi: H2334' }, { id: 35, description: 'Gumla: H4232' }, { id: 37, description: 'Bokaro: F2342' }];
        this.config = {
            displayKey: 'description',
            search: true,
            height: 'auto',
            placeholder: 'Select',
            customComparator: () => { },
            limitTo: this.options.length,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search',
            searchOnKey: 'description'
        };
    }
    ngOnInit() {
        this.options = [...this.options, { id: 38, description: 'Goddha: H1122' }];
        if (this.myDateInit) {
            // Initialize to specific date (14.05.2019) with IMyDate object
            this.model = {
                isRange: false,
                singleDate: {
                    date: {
                        year: 2019,
                        month: 5,
                        day: 14
                    }
                }
            };
        }
        else {
            // Initialize to today with javascript date object
            this.model = { isRange: false, singleDate: { jsDate: new Date() } };
        }
    }
    toggleMeridian() {
        this.meridian = !this.meridian;
    }
    submitReport() {
        const requestObj = {
            areaName: this.areaName,
            closingTime: this.closingTime,
            closingPlace: this.closingPlace,
            reportingtime: this.reportingtime,
            vehicleNum: this.vehicleNum,
            vehicleStayArea: this.vehicleStayArea,
            model: this.model
        };
        console.log('form submition');
    }
};
CreateAreaComponent.ctorParameters = () => [
    { type: _common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('report', { static: false })
], CreateAreaComponent.prototype, "report", void 0);
CreateAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/create-area/create-area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-area.component.css */ "./src/app/dashboard/area/create-area/create-area.component.css")).default]
    })
], CreateAreaComponent);



/***/ }),

/***/ "./src/app/dashboard/area/view-area/view-area.component.css":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/area/view-area/view-area.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .ui-table .ui-table-tbody > tr:nth-child(even) {\r\n  background-color: #fff5ec !important;\r\n}\r\n::ng-deep .ui-table .ui-table-caption, body .ui-table .ui-table-summary {\r\n  background-color: #FF9934 !important;\r\n}\r\n::ng-deep .ui-table .ui-table-thead > tr > th {\r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FyZWEvdmlldy1hcmVhL3ZpZXctYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hcmVhL3ZpZXctYXJlYS92aWV3LWFyZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC51aS10YWJsZSAudWktdGFibGUtY2FwdGlvbiwgYm9keSAudWktdGFibGUgLnVpLXRhYmxlLXN1bW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk5MzQgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLnVpLXRhYmxlIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gXHJcbn0iXX0= */");

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




let ViewAreaComponent = class ViewAreaComponent {
    constructor(httpService, apiService) {
        this.httpService = httpService;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.cols = [
            { field: 'areaName', header: 'Area Name' },
            { field: 'districtName', header: 'District Name' },
            { field: 'delete', header: '' }
        ];
        this.getAllDistricts();
    }
    getAllDistricts() {
        this.httpService.getAllArea(this.apiService.API_DISTRICT_API).subscribe((data) => {
            // if (data) {
            this.districts = data;
            // }
        }, error => {
            console.log(error);
        });
    }
    delete() {
        console.log('Delete here');
    }
    edit() {
        console.log('Delete here');
    }
};
ViewAreaComponent.ctorParameters = () => [
    { type: _common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/area/view-area/view-area.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-area.component.css */ "./src/app/dashboard/area/view-area/view-area.component.css")).default]
    })
], ViewAreaComponent);



/***/ })

}]);
//# sourceMappingURL=area-area-module-es2015.js.map