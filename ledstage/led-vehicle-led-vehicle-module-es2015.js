(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["led-vehicle-led-vehicle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <h2>Create Display Report</h2>\r\n  <div id=\"create-display\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12\" >\r\n      <div>\r\n        <h4>\r\n          DISPLAY REPORT DETAILS\r\n        </h4>\r\n      </div>\r\n      <div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\" style=\"padding-right: 0px;padding-left: 0px;\">\r\n            <form class=\"row detail\" name=\"form\" #report=\"ngForm\">\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"padding-right: 0px;\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Date *</label>\r\n                  <div class=\"input-box-container\">\r\n                    <div class=\"input-group\">\r\n                      <input class=\"input-box form-control\" placeholder=\"Click to select a date\" angular-mydatepicker name=\"mydate\"\r\n                        (click)=\"dp.toggleCalendar()\" [(ngModel)]=\"createDisplayRequest.createdAt\" [options]=\"myDpOptions\"\r\n                        #dp=\"angular-mydatepicker\" />\r\n                      <div class=\"input-group-append\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dp.toggleCalendar()\">\r\n                          <i class=\"fa fa-calendar-o\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vehicle No *</label>\r\n                    <ngx-select-dropdown (change)=\"selectionChanged($event)\" [config]=\"config\" [options]=\"options\" [(ngModel)]=\"createDisplayRequest.vehicleNo\" name=\"vehicleNo\"></ngx-select-dropdown>\r\n                  \r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Vehicle Stay Area </label>\r\n                  <input type=\"text\" id=\"stayArea\" name=\"stayArea\" class=\"form-control\" [(ngModel)]=\"createDisplayRequest.vehicleStayArea\"/>    \r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"position: relative; top: -38px;\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Reporting Time *</label>\r\n                  <ngb-timepicker [(ngModel)]=\"createDisplayRequest.reportingtime\" [meridian]=\"meridian\" name=\"reportingtime\"></ngb-timepicker>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Closing Place *</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Closing Place\" name=\"closingPlace\"\r\n                  [(ngModel)]=\"createDisplayRequest.closingPlace\" required=\"true\">\r\n    \r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"position: relative; top: -38px;\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Close Time *</label>\r\n                  <ngb-timepicker [(ngModel)]=\"createDisplayRequest.closingTime\" [meridian]=\"meridian\" name=\"closingTime\"></ngb-timepicker>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4 col-xs-6\" >\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Distance *</label>\r\n                  <input type=\"number\" id=\"distance\" class=\"form-control\" placeholder=\"\" name=\"distance\"\r\n                  [(ngModel)]=\"createDisplayRequest.distance\" required=\"true\">\r\n                </div>\r\n                \r\n                \r\n              </div>\r\n              \r\n            </form>\r\n            <div class=\"row\" style=\"margin-left: 15px; \">\r\n                    <div style=\"float: left;\">\r\n                            <div>\r\n                                <div class=\"p-20\">\r\n                                    <button type=\"submit\" style=\"background-color: #FF9934; border-color: tomato\" name=\"btcreatereport\" (click)=\"submitReport()\" value=\"Foo\" id=\"btcreatereport\" class=\"ladda-button btn btn-primary waves-effect waves-light\" data-style=\"zoom-out\">\r\n                                <span aria-hidden=\"true\"></span><span class=\"ladda-label\">Create Display Report</span><span class=\"btn-label btn-label-right\"><i class=\"fa fa-arrow-right\"></i>\r\n                                   </span><span class=\"ladda-spinner\"></span></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/led-vehicle.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/led-vehicle.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"led-vehicle\" class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <h2>Reviewed Display Report</h2>\r\n  </div>\r\n\r\n  <p-table [columns]=\"cols\" [value]=\"users\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"8\" #dt>\r\n    <ng-template pTemplate=\"caption\">\r\n      Users List\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n          {{col.header}}\r\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <input *ngSwitchDefault pInputText type=\"text\"\r\n            (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n          <span *ngSwitchCase=\"'review'\"></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n      <tr>\r\n        <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <span *ngSwitchDefault> {{user[col.field]}} </span>\r\n          <span *ngSwitchCase=\"'review'\">\r\n            <span *ngIf=\"user[col.field] == 'approved'\" class=\"badge badge-success badge-padding\">Approved</span>\r\n            <span *ngIf=\"user[col.field] == 'not_approved'\" class=\"badge badge-warning badge-padding\">Not\r\n              Approved</span>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n      <h2>Unreviewed Display Report</h2>\r\n  </div>\r\n<p-table [columns]=\"cols\" [value]=\"users\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"10\" #dt>\r\n  <ng-template pTemplate=\"caption\">\r\n    Users List\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n        {{col.header}}\r\n        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n        <input *ngSwitchDefault pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n        <span *ngSwitchCase=\"'delete'\"></span>\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n    <tr> \r\n      <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n        <span *ngSwitchDefault> {{user[col.field]}} </span>\r\n        <button *ngSwitchCase=\"'delete'\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"delete(user)\">Delete</button> \r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n</div>");

/***/ }),

/***/ "./src/app/dashboard/led-vehicle/create-display/create-display.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/create-display/create-display.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#create-display {\r\n    border: 2px solid antiquewhite;\r\n}\r\n\r\n.row {\r\n  margin: 15px 0;\r\n}\r\n\r\nlabel {\r\n  margin-bottom: 0;\r\n  margin-left: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL2NyZWF0ZS1kaXNwbGF5L2NyZWF0ZS1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sZWQtdmVoaWNsZS9jcmVhdGUtZGlzcGxheS9jcmVhdGUtZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NyZWF0ZS1kaXNwbGF5IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFudGlxdWV3aGl0ZTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/led-vehicle/create-display/create-display.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/create-display/create-display.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDisplayComponent", function() { return CreateDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../led-vehicle.service */ "./src/app/dashboard/led-vehicle/led-vehicle.service.ts");
/* harmony import */ var _create_display_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-display.model */ "./src/app/dashboard/led-vehicle/create-display/create-display.model.ts");




let CreateDisplayComponent = class CreateDisplayComponent {
    constructor(ledVehicleService) {
        this.ledVehicleService = ledVehicleService;
        this.meridian = true;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: 'dd-mm-yyyy'
            // other options are here...
        };
        this.myDateInit = true;
        this.options = [{ id: 34, name: 'Ranchi: H2334' }, { id: 35, name: 'Gumla: H4232' }, { id: 37, name: 'Bokaro: F2342' }];
        this.config = {
            displayKey: 'name',
            search: true,
            height: 'auto',
            placeholder: 'Select',
            customComparator: () => { },
            limitTo: this.options.length,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search',
            searchOnKey: 'name'
        };
        // this.createDisplayRequest.date = null;
        this.createDisplayRequest = new _create_display_model__WEBPACK_IMPORTED_MODULE_3__["CreateDisplayRequest"]();
        this.createDisplayRequest.createdAt = null;
    }
    ngOnInit() {
        this.createDisplayRequest.reportingtime = { hour: 13, minute: 30 };
        this.createDisplayRequest.closingTime = { hour: 18, minute: 30 };
        this.options = [...this.options, { id: 38, name: 'Goddha: H1122' }];
        if (this.myDateInit) {
            // Initialize to specific date (14.05.2019) with IMyDate object
            this.createDisplayRequest.createdAt = {
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
            this.createDisplayRequest.createdAt = { isRange: false, singleDate: { jsDate: new Date() } };
        }
    }
    toggleMeridian() {
        this.meridian = !this.meridian;
    }
    defaultValueSet() {
        this.createDisplayRequest.districtAreaName = '';
        this.createDisplayRequest.districtName = '';
        this.createDisplayRequest.generalHourPictureName = '';
        this.createDisplayRequest.id = 0;
        this.createDisplayRequest.kilometerPictureName = '';
        this.createDisplayRequest.reportDate = '';
        this.createDisplayRequest.status = '';
        this.createDisplayRequest.updatedAt = '';
        this.createDisplayRequest.display = [];
        const display = new _create_display_model__WEBPACK_IMPORTED_MODULE_3__["Display"]();
        display.displayArea = '';
        display.displayPictureName = '';
        display.displayTimingTo = '';
        display.peopleViewed = '';
        this.createDisplayRequest.display.push(display);
        this.createDisplayRequest.display[0].displayPictureName = '';
        this.createDisplayRequest.display[0].displayTimingFrom = '';
        this.createDisplayRequest.display[0].displayTimingTo = '';
    }
    selectionChanged(event) {
        console.log(event);
    }
    submitReport() {
        this.defaultValueSet();
        if (this.createDisplayRequest.distance) {
            this.createDisplayRequest.distance = this.createDisplayRequest.distance.toString();
        }
        const closingTime = this.createDisplayRequest.closingTime.hour + ':' + this.createDisplayRequest.closingTime.minute;
        this.createDisplayRequest.closingTime = closingTime;
        const reportingTime = this.createDisplayRequest.reportingtime.hour + ':' + this.createDisplayRequest.reportingtime.minute;
        this.createDisplayRequest.reportingtime = reportingTime;
        if (this.createDisplayRequest && this.createDisplayRequest.vehicleNo) {
            this.createDisplayRequest.vehicleNo = this.createDisplayRequest.vehicleNo.name;
        }
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:max-line-length
        this.createDisplayRequest.createdAt = this.createDisplayRequest.createdAt.singleDate.date.year + '-' + this.createDisplayRequest.createdAt.singleDate.date.month + '-' + this.createDisplayRequest.createdAt.singleDate.date.day;
        this.ledVehicleService.createReport(this.createDisplayRequest).subscribe((res) => {
        });
        console.log('form submition');
    }
};
CreateDisplayComponent.ctorParameters = () => [
    { type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('report', { static: false })
], CreateDisplayComponent.prototype, "report", void 0);
CreateDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-display.component.css */ "./src/app/dashboard/led-vehicle/create-display/create-display.component.css")).default]
    })
], CreateDisplayComponent);



/***/ }),

/***/ "./src/app/dashboard/led-vehicle/create-display/create-display.model.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/create-display/create-display.model.ts ***!
  \******************************************************************************/
/*! exports provided: CreateDisplayRequest, VehicleNo, Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDisplayRequest", function() { return CreateDisplayRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleNo", function() { return VehicleNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return Display; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CreateDisplayRequest {
}
class VehicleNo {
}
class Display {
}


/***/ }),

/***/ "./src/app/dashboard/led-vehicle/led-vehicle-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/led-vehicle-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LedVehicleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedVehicleRoutingModule", function() { return LedVehicleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _led_vehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./led-vehicle.component */ "./src/app/dashboard/led-vehicle/led-vehicle.component.ts");
/* harmony import */ var _create_display_create_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-display/create-display.component */ "./src/app/dashboard/led-vehicle/create-display/create-display.component.ts");
/* harmony import */ var _unreviewed_display_unreviewed_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unreviewed-display/unreviewed-display.component */ "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.ts");
/* harmony import */ var _reviewed_display_reviewed_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviewed-display/reviewed-display.component */ "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.ts");







const routes = [
    {
        path: '', component: _led_vehicle_component__WEBPACK_IMPORTED_MODULE_3__["LedVehicleComponent"],
        children: [
            {
                path: 'createDisplay',
                component: _create_display_create_display_component__WEBPACK_IMPORTED_MODULE_4__["CreateDisplayComponent"]
            },
            {
                path: 'unreviewedDisplay',
                component: _unreviewed_display_unreviewed_display_component__WEBPACK_IMPORTED_MODULE_5__["UnreviewedDisplayComponent"],
            },
            {
                path: 'reviewedDisplay',
                component: _reviewed_display_reviewed_display_component__WEBPACK_IMPORTED_MODULE_6__["ReviewedDisplayComponent"],
            },
            {
                path: '', redirectTo: 'createDisplay', pathMatch: 'full'
            },
        ]
    }
];
let LedVehicleRoutingModule = class LedVehicleRoutingModule {
};
LedVehicleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LedVehicleRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/led-vehicle/led-vehicle.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/led-vehicle.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#led-vehicle {\r\n    padding-left: 20px;\r\n    float: left;\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL2xlZC12ZWhpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sZWQtdmVoaWNsZS9sZWQtdmVoaWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlZC12ZWhpY2xlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/led-vehicle/led-vehicle.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/led-vehicle.component.ts ***!
  \****************************************************************/
/*! exports provided: LedVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedVehicleComponent", function() { return LedVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LedVehicleComponent = class LedVehicleComponent {
    constructor() { }
    ngOnInit() {
    }
};
LedVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-led-vehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./led-vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/led-vehicle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./led-vehicle.component.css */ "./src/app/dashboard/led-vehicle/led-vehicle.component.css")).default]
    })
], LedVehicleComponent);



/***/ }),

/***/ "./src/app/dashboard/led-vehicle/led-vehicle.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/led-vehicle.module.ts ***!
  \*************************************************************/
/*! exports provided: LedVehicleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedVehicleModule", function() { return LedVehicleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _led_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./led-vehicle-routing.module */ "./src/app/dashboard/led-vehicle/led-vehicle-routing.module.ts");
/* harmony import */ var _led_vehicle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./led-vehicle.component */ "./src/app/dashboard/led-vehicle/led-vehicle.component.ts");
/* harmony import */ var _create_display_create_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-display/create-display.component */ "./src/app/dashboard/led-vehicle/create-display/create-display.component.ts");
/* harmony import */ var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-mydatepicker */ "./node_modules/angular-mydatepicker/fesm2015/angular-mydatepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _unreviewed_display_unreviewed_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unreviewed-display/unreviewed-display.component */ "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.ts");
/* harmony import */ var _reviewed_display_reviewed_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviewed-display/reviewed-display.component */ "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_14__);















let LedVehicleModule = class LedVehicleModule {
};
LedVehicleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_led_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["LedVehicleComponent"], _create_display_create_display_component__WEBPACK_IMPORTED_MODULE_5__["CreateDisplayComponent"], _unreviewed_display_unreviewed_display_component__WEBPACK_IMPORTED_MODULE_11__["UnreviewedDisplayComponent"], _reviewed_display_reviewed_display_component__WEBPACK_IMPORTED_MODULE_12__["ReviewedDisplayComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _led_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_3__["LedVehicleRoutingModule"],
            angular_mydatepicker__WEBPACK_IMPORTED_MODULE_6__["AngularMyDatePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__["SelectDropDownModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
        ]
    })
], LedVehicleModule);



/***/ }),

/***/ "./src/app/dashboard/led-vehicle/led-vehicle.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/led-vehicle.service.ts ***!
  \**************************************************************/
/*! exports provided: LedVehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedVehicleService", function() { return LedVehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _mock_unreviewed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock.unreviewed */ "./src/app/dashboard/led-vehicle/mock.unreviewed.ts");
/* harmony import */ var _mock_reviewed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock.reviewed */ "./src/app/dashboard/led-vehicle/mock.reviewed.ts");






let LedVehicleService = class LedVehicleService {
    constructor(http) {
        this.http = http;
    }
    createReport(report) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    }
    getUnreviewedDisplays() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_unreviewed__WEBPACK_IMPORTED_MODULE_4__["Unreviewed"]);
    }
    getReviewedDisplays() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_reviewed__WEBPACK_IMPORTED_MODULE_5__["Reviewed"]);
    }
    deleteUser(user) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
    }
};
LedVehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LedVehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LedVehicleService);



/***/ }),

/***/ "./src/app/dashboard/led-vehicle/mock.reviewed.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/mock.reviewed.ts ***!
  \********************************************************/
/*! exports provided: Reviewed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviewed", function() { return Reviewed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Reviewed = [
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min',
        review: 'approved'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min',
        review: 'not_approved'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min',
        review: 'approved'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min',
        review: 'approved'
    }
];


/***/ }),

/***/ "./src/app/dashboard/led-vehicle/mock.unreviewed.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/mock.unreviewed.ts ***!
  \**********************************************************/
/*! exports provided: Unreviewed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unreviewed", function() { return Unreviewed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Unreviewed = [
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '02 Aug 18',
        area: 'Ranchi',
        vehicle: 'HR67B046',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '03 Aug 19',
        area: 'Gollu',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Bora',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    },
    {
        reportDate: '01 Aug 19',
        area: 'Chatra',
        vehicle: 'HR67B0486',
        displayTime: '9:45 AM To 12:30 PM - 2 Hrs 45 Min'
    }
];


/***/ }),

/***/ "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".badge-padding {\r\n    padding: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL3Jldmlld2VkLWRpc3BsYXkvcmV2aWV3ZWQtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sZWQtdmVoaWNsZS9yZXZpZXdlZC1kaXNwbGF5L3Jldmlld2VkLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReviewedDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewedDisplayComponent", function() { return ReviewedDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../led-vehicle.service */ "./src/app/dashboard/led-vehicle/led-vehicle.service.ts");



let ReviewedDisplayComponent = class ReviewedDisplayComponent {
    constructor(ledVehicleService) {
        this.ledVehicleService = ledVehicleService;
    }
    ngOnInit() {
        this.ledVehicleService.getReviewedDisplays().subscribe(res => {
            this.users = res;
        });
        this.cols = [
            { field: 'reportDate', header: 'Date' },
            { field: 'area', header: 'Area' },
            { field: 'vehicle', header: 'Vehicle No' },
            { field: 'displayTime', header: 'Display Time' },
            { field: 'review', header: 'Reviews' },
        ];
    }
};
ReviewedDisplayComponent.ctorParameters = () => [
    { type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"] }
];
ReviewedDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviewed-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reviewed-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reviewed-display.component.css */ "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.css")).default]
    })
], ReviewedDisplayComponent);



/***/ }),

/***/ "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .ui-table .ui-table-tbody > tr:nth-child(even) {\r\n    background-color: #fff5ec !important;\r\n}\r\n::ng-deep .ui-table .ui-table-caption, body .ui-table .ui-table-summary {\r\n    background-color: #FF9934 !important;\r\n}\r\n::ng-deep .ui-table .ui-table-thead > tr > th {\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL3VucmV2aWV3ZWQtZGlzcGxheS91bnJldmlld2VkLWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbGVkLXZlaGljbGUvdW5yZXZpZXdlZC1kaXNwbGF5L3VucmV2aWV3ZWQtZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVlYyAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAudWktdGFibGUgLnVpLXRhYmxlLWNhcHRpb24sIGJvZHkgLnVpLXRhYmxlIC51aS10YWJsZS1zdW1tYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk5MzQgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLnVpLXRhYmxlIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UnreviewedDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnreviewedDisplayComponent", function() { return UnreviewedDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../led-vehicle.service */ "./src/app/dashboard/led-vehicle/led-vehicle.service.ts");



let UnreviewedDisplayComponent = class UnreviewedDisplayComponent {
    constructor(ledVehicleService) {
        this.ledVehicleService = ledVehicleService;
    }
    ngOnInit() {
        this.ledVehicleService.getUnreviewedDisplays().subscribe(res => {
            this.users = res;
        });
        this.cols = [
            { field: 'reportDate', header: 'Date' },
            { field: 'area', header: 'Area' },
            { field: 'vehicle', header: 'Vehicle No' },
            { field: 'displayTime', header: 'Display Time' },
            { field: 'delete', header: '' },
        ];
    }
    /**
     * delete
     */
    delete(user) {
        console.log('About to delete an user: ' + JSON.stringify(user));
        this.ledVehicleService.deleteUser(user).subscribe(res => {
            // success block delete user
        });
    }
};
UnreviewedDisplayComponent.ctorParameters = () => [
    { type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"] }
];
UnreviewedDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unreviewed-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unreviewed-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unreviewed-display.component.css */ "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.css")).default]
    })
], UnreviewedDisplayComponent);



/***/ })

}]);
//# sourceMappingURL=led-vehicle-led-vehicle-module-es2015.js.map