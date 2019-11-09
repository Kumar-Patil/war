(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["led-vehicle-led-vehicle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h3>Create Display Report</h3>\r\n  <div id=\"create-display\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-12 col-lg-12\">\r\n        <!-- <div>\r\n          <h5>\r\n            DISPLAY REPORT DETAILS\r\n          </h5>\r\n        </div> -->\r\n        <div>\r\n          <div class=\"row\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-sm-12\" style=\"padding-right: 0px;padding-left: 0px;\">\r\n              <form class=\"row detail\" name=\"form\" #report=\"ngForm\">\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"padding-right: 0px;\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Date *</label>\r\n                    <div class=\"input-box-container\">\r\n                      <div class=\"input-group\">\r\n                        <input class=\"input-box form-control\" placeholder=\"Click to select a date\" angular-mydatepicker\r\n                          name=\"mydate\" (click)=\"dp.toggleCalendar()\" [(ngModel)]=\"createDisplayRequest.createdAt\"\r\n                          [options]=\"myDpOptions\" #dp=\"angular-mydatepicker\" />\r\n                        <div class=\"input-group-append\">\r\n                          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dp.toggleCalendar()\" style=\"background-color: #FF9934; border-color: #FF9934\">\r\n                            <i class=\"fa fa-calendar-o\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Vehicle No *</label>\r\n                    <ngx-select-dropdown (change)=\"selectionChanged($event)\" [config]=\"config\" [options]=\"options\"\r\n                      [(ngModel)]=\"createDisplayRequest.vehicleNo\" name=\"vehicleNo\"></ngx-select-dropdown>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Vehicle Stay Area </label>\r\n                    <input type=\"text\" id=\"stayArea\" name=\"stayArea\" class=\"form-control\"\r\n                      [(ngModel)]=\"createDisplayRequest.vehicleStayArea\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"position: relative; top: -38px;\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Reporting Time *</label>\r\n                    <ngb-timepicker [(ngModel)]=\"createDisplayRequest.reportingtime\" [meridian]=\"meridian\"\r\n                      name=\"reportingtime\"></ngb-timepicker>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Closing Place *</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Closing Place\" name=\"closingPlace\"\r\n                      [(ngModel)]=\"createDisplayRequest.closingPlace\" required=\"true\">\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"position: relative; top: -38px;\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Close Time *</label>\r\n                    <ngb-timepicker [(ngModel)]=\"createDisplayRequest.closingTime\" [meridian]=\"meridian\"\r\n                      name=\"closingTime\"></ngb-timepicker>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Distance *</label>\r\n                    <input type=\"number\" id=\"distance\" class=\"form-control\" placeholder=\"\" name=\"distance\"\r\n                      [(ngModel)]=\"createDisplayRequest.distance\" required=\"true\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                </div>\r\n\r\n                <div class=\"col-md-6 col-sm-4 col-xs-6\" style=\"margin-top: -35px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" style=\"margin-bottom: 10px; padding-top: 0px;\">Kilometer Picture</label>\r\n                    <input type=\"file\" name=\"uploaddriver\" id=\"uploaddriver\" class=\"filestyle\"\r\n                      data-placeholder=\"No file\" data-classbutton=\"btn btn-primary\"\r\n                      data-classicon=\"glyphicon glyphicon-folder-open\" tabindex=\"-1\"\r\n                      style=\"position: absolute; clip: rect(0px, 0px, 0px, 0px);\"\r\n                      (change)=\"handlekilometerPictureName($event.target.files)\">\r\n                    <div class=\"bootstrap-filestyle input-group\"><input type=\"text\" class=\"form-control \"\r\n                        placeholder=\"No file\" disabled=\"\"> <span class=\"group-span-filestyle input-group-btn\"\r\n                        tabindex=\"0\"><label for=\"uploaddriver\" class=\"btn btn-default\" style=\"background-color: #FF9934;border: 1px solid #FF9934; margin-left: -2px;\">\r\n                            <i class=\"fa fa-folder-open-o\" style=\"padding-right: 5px; color: white\"></i>\r\n                          <span class=\"buttonText\" style=\"font-size: 15px; color: white;\">Choose file</span></label></span></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-4 col-xs-6\" style=\"margin-top: -35px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" style=\"margin-bottom: 10px; padding-top: 0px;\">Stage Video</label>\r\n                    <input type=\"file\" name=\"uploaddriver\" id=\"uploaddriver\" class=\"filestyle\"\r\n                      data-placeholder=\"getPlaceHolder()\" data-classbutton=\"btn btn-primary\"\r\n                      data-classicon=\"glyphicon glyphicon-folder-open\" tabindex=\"-1\"\r\n                      style=\"position: absolute; clip: rect(0px, 0px, 0px, 0px);\"\r\n                      (change)=\"handlekilometerPictureName($event.target.files)\">\r\n                    <div class=\"bootstrap-filestyle input-group\"><input type=\"text\" class=\"form-control \"\r\n                        placeholder=\"No file\" disabled=\"\"> <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\">\r\n                        <label for=\"uploaddriver\" class=\"btn btn-default \" style=\"background-color: #FF9934;border: 1px solid #FF9934; margin-left: -2px;\">\r\n                            <i class=\"fa fa-folder-open-o\" style=\"padding-right: 5px; color: white\"></i>\r\n                          <span class=\"buttonText\" style=\"font-size: 15px; color: white;\">Choose file</span></label></span></div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <div class=\"row\" style=\"margin-left: 15px; margin-top: 45px;\">\r\n                <div style=\"float: left;\">\r\n                  <div>\r\n                    <div class=\"p-20\">\r\n                      <button type=\"submit\" style=\"background-color: #FF9934; border-color: #FF9934\"\r\n                        name=\"btcreatereport\" (click)=\"submitReport()\" value=\"Foo\" id=\"btcreatereport\"\r\n                        class=\"ladda-button btn btn-primary waves-effect waves-light\" data-style=\"zoom-out\">\r\n                        <span aria-hidden=\"true\"></span><span class=\"ladda-label\">Create Display Report</span><span\r\n                          class=\"btn-label btn-label-right\">\r\n                        </span><span class=\"ladda-spinner\"></span></button>\r\n                        <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-secondary\" data-style=\"zoom-out\" style=\"margin-left: 20px\">\r\n                          <span class=\"ladda-label\">Cancel</span>\r\n                         </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"float: right; padding: 10px 0px; position: relative; z-index: 10;\">\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"unreviewedDisplay()\" style=\"margin-right:20px;\">Unreviewed Display</button>\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"createDisplay()\">Create Display</button>\r\n</div>\r\n<div style=\"float: left\">\r\n  <!-- <div>\r\n    <h3>Reviewed Display Report</h3>\r\n  </div> -->\r\n\r\n  <p-table [columns]=\"cols\" [value]=\"users\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"8\" #dt>\r\n    <ng-template pTemplate=\"caption\">\r\n      Users List\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n          {{col.header}}\r\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <input *ngSwitchDefault pInputText type=\"text\"\r\n            (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n          <span *ngSwitchCase=\"'review'\"></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n      <tr>\r\n        <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <span *ngSwitchDefault> {{user[col.field]}} </span>\r\n          <span *ngSwitchCase=\"'status'\">\r\n            <span *ngIf=\"user[col.field].toLowerCase() === 'approved'\" class=\"badge badge-success badge-padding\">Approved</span>\r\n            <span *ngIf=\"user[col.field].toLowerCase() !== 'approved'\" class=\"badge badge-warning badge-padding\">Not\r\n              Approved</span>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"float: right; padding: 10px 0px; position: relative; z-index: 10;\">\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"reviewedDisplay()\" style=\"margin-right:20px;\">Reviewed Display</button>\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"createDisplay()\">Create Display</button>\r\n</div>\r\n<div style=\"float: left\">\r\n  <!-- <div>\r\n      <h3>Unreviewed Display Report</h3>\r\n  </div> -->\r\n<p-table [columns]=\"cols\" [value]=\"users\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"10\" #dt>\r\n  <ng-template pTemplate=\"caption\">\r\n    Users List\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n        {{col.header}}\r\n        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n        <input *ngSwitchDefault pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n        <span *ngSwitchCase=\"'delete'\"></span>\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n    <tr> \r\n      <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n        <span *ngSwitchDefault> {{user[col.field]}} </span>\r\n        <button *ngSwitchCase=\"'delete'\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"delete(user)\">Delete</button> \r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n</div>");

/***/ }),

/***/ "./src/app/dashboard/led-vehicle/create-display/create-display.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/create-display/create-display.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#create-display {\n  border: 2px solid antiquewhite; }\n\n.row {\n  margin: 15px 0; }\n\nlabel {\n  margin-bottom: 0;\n  margin-left: 1px; }\n\n.form-group {\n  margin-bottom: 0px; }\n\n::ng-deep .btn-link {\n  color: #FF9934 !important; }\n\n::ng-deep .btn-outline-primary {\n  color: #FF9934 !important;\n  border-color: #FF9934 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL2NyZWF0ZS1kaXNwbGF5L0M6XFxsZWRWYW5cXGRlcGxveWVlXFxicmFuY2hcXGxlZHZhbi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxsZWQtdmVoaWNsZVxcY3JlYXRlLWRpc3BsYXlcXGNyZWF0ZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUI7RUFDekIsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbGVkLXZlaGljbGUvY3JlYXRlLWRpc3BsYXkvY3JlYXRlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3JlYXRlLWRpc3BsYXkge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYW50aXF1ZXdoaXRlO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbjo6bmctZGVlcCAuYnRuLWxpbmsge1xyXG4gIGNvbG9yOiAjRkY5OTM0ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICBjb2xvcjogI0ZGOTkzNCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI0ZGOTkzNCAhaW1wb3J0YW50O1xyXG59Il19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreateDisplayComponent = class CreateDisplayComponent {
    constructor(ledVehicleService, router) {
        this.ledVehicleService = ledVehicleService;
        this.router = router;
        this.meridian = true;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: 'dd-mm-yyyy'
            // other options are here...
        };
        this.myDateInit = true;
        this.options = [{ id: 34, name: 'Chatra : HR67B0486' },
            { id: 35, name: 'Ranchi Gramin 1 : HR67B-0692' },
            { id: 36, name: 'Saraikela : HR67B1643' },
            { id: 37, name: 'Gumla : HR67B2906' },
            { id: 38, name: 'Jamshedpur  1 : HR67B3045' },
            { id: 39, name: 'Garhwa : HR67B3164' },
            { id: 40, name: 'Godda : HR67B3248' },
            { id: 41, name: 'Deoghar : HR67B3372' },
            { id: 42, name: 'Sahebganj : HR67B4355' },
            { id: 43, name: 'Koderma : HR67B4622' },
            { id: 44, name: 'Daltonganj : HR67B5344' },
            { id: 45, name: 'Dhanbad 1 : HR67B5653' },
            { id: 46, name: 'Ramgarh : HR67B-5993' },
            { id: 47, name: 'Bokaro Gramin : HR67B7564' },
            { id: 48, name: 'Hazaribagh 2 : HR67B7610' },
            { id: 49, name: 'Giridih : HR67B8547' },
            { id: 50, name: 'Pakur : HR67B9184' },
            { id: 51, name: 'Dumka 2 : HR67B9402' },
            { id: 52, name: 'Jamtara : HR67B9813' },
            { id: 53, name: 'Dumka 1 : JH01CT0168' },
            { id: 54, name: 'Simdega : JH01CT1600' },
            { id: 55, name: 'Lohardaga : JH01CT1911' },
            { id: 56, name: 'Jamshedpur Gramin 2 : JH01CT2363' },
            { id: 57, name: 'Jamshedpur Gramin 3 : JH01CT2874' },
            { id: 58, name: 'Ranchi Gramin 2 : JH01CT4662' },
            { id: 59, name: 'Ranchi Gramin 3 : JH01CT4969' },
            { id: 60, name: 'Khunti : JH01CT5336' },
            { id: 61, name: 'Chaibasa : JH01CT5887' },
            { id: 62, name: 'Hazaribagh 1 : JH01CT7124' },
            { id: 63, name: 'Dhanbad Gramin : JH01CT7839' },
            { id: 64, name: 'Latehar : JH01CT9469' },
            { id: 65, name: 'Saraikela : JH01DA2075' },
            { id: 66, name: 'Garhwa : JH01DA5497' },
            { id: 67, name: 'Lohardaga : JH01DD0602' },
            { id: 68, name: 'Koderma : JH01DD-0638' },
            { id: 69, name: 'Sahebganj : JH01DD0840' },
        ];
        this.config = {
            displayKey: 'name',
            search: true,
            height: '200px',
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
        this.options = [...this.options, { id: 70, name: 'Daltonganj : JH01DD0956' }];
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
    getDefaultValueSet() {
        let createDisplayRequest = {};
        createDisplayRequest.districtAreaName = '';
        createDisplayRequest.districtName = '';
        createDisplayRequest.generalHourPictureName = '';
        createDisplayRequest.id = 0;
        createDisplayRequest.kilometerPictureName = '';
        createDisplayRequest.reportDate = '';
        createDisplayRequest.status = '';
        createDisplayRequest.updatedAt = '';
        createDisplayRequest.display = [];
        const display = new _create_display_model__WEBPACK_IMPORTED_MODULE_3__["Display"]();
        display.displayArea = '';
        display.displayPictureName = '';
        display.displayTimingTo = '';
        display.peopleViewed = '';
        createDisplayRequest.display.push(display);
        createDisplayRequest.display[0].displayPictureName = '';
        createDisplayRequest.display[0].displayTimingFrom = '';
        createDisplayRequest.display[0].displayTimingTo = '';
        return createDisplayRequest;
    }
    selectionChanged(event) {
        console.log(event);
    }
    submitReport() {
        this.createDisplayRequest = Object.assign(this.getDefaultValueSet(), this.createDisplayRequest);
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
        }, (err) => {
        });
        console.log('form submition');
    }
    handlekilometerPictureName(files) {
        this.createDisplayRequest.kilometerPictureName = files.item(0).name.toString();
    }
    handleVideoFileName(files) {
        this.createDisplayRequest.generalHourPictureName = files.item(0).name.toString();
    }
    getPlaceHolder() {
        return this.createDisplayRequest.kilometerPictureName ? this.createDisplayRequest.kilometerPictureName : 'No file';
    }
    cancel() {
        this.router.navigateByUrl('dashboard/ledVehicle/reviewedDisplay');
    }
};
CreateDisplayComponent.ctorParameters = () => [
    { type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('report', { static: false })
], CreateDisplayComponent.prototype, "report", void 0);
CreateDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-display.component.scss */ "./src/app/dashboard/led-vehicle/create-display/create-display.component.scss")).default]
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

/***/ "./src/app/dashboard/led-vehicle/led-vehicle.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/led-vehicle.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#led-vehicle {\n  padding-left: 20px;\n  float: left;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL0M6XFxsZWRWYW5cXGRlcGxveWVlXFxicmFuY2hcXGxlZHZhbi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxsZWQtdmVoaWNsZVxcbGVkLXZlaGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL2xlZC12ZWhpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlZC12ZWhpY2xlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */");

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
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./led-vehicle.component.scss */ "./src/app/dashboard/led-vehicle/led-vehicle.component.scss")).default]
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
/* harmony import */ var src_app_common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/api.service */ "./src/app/common/api.service.ts");




let LedVehicleService = class LedVehicleService {
    constructor(httpClient, apiService) {
        this.httpClient = httpClient;
        this.apiService = apiService;
    }
    createReport(report) {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY;
        return this.httpClient.post(requestUrl, report);
        // return of({});
    }
    getUnreviewedDisplays() {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY_UN_REVIEWED;
        return this.httpClient.get(requestUrl);
        // return of(Unreviewed);
    }
    getReviewedDisplays() {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY_REVIEWED;
        return this.httpClient.get(requestUrl);
        // return of(Reviewed);
    }
    deleteUser(user) {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY + '/' + user.id;
        return this.httpClient.delete(requestUrl);
        // return of();
    }
};
LedVehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
LedVehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LedVehicleService);



/***/ }),

/***/ "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".badge-padding {\n  padding: 6px; }\n\n::ng-deep .ui-table .ui-table-caption, body .ui-table .ui-table-summary {\n  background-color: #FF9934 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL3Jldmlld2VkLWRpc3BsYXkvQzpcXGxlZFZhblxcZGVwbG95ZWVcXGJyYW5jaFxcbGVkdmFuL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGxlZC12ZWhpY2xlXFxyZXZpZXdlZC1kaXNwbGF5XFxyZXZpZXdlZC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL3Jldmlld2VkLWRpc3BsYXkvcmV2aWV3ZWQtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG46Om5nLWRlZXAgLnVpLXRhYmxlIC51aS10YWJsZS1jYXB0aW9uLCBib2R5IC51aS10YWJsZSAudWktdGFibGUtc3VtbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5OTM0ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ReviewedDisplayComponent = class ReviewedDisplayComponent {
    constructor(ledVehicleService, router) {
        this.ledVehicleService = ledVehicleService;
        this.router = router;
    }
    ngOnInit() {
        this.ledVehicleService.getReviewedDisplays().subscribe(res => {
            this.users = res;
        });
        this.cols = [
            { field: 'reportDate', header: 'Date' },
            { field: 'vechicleStayArea', header: 'Area' },
            { field: 'vechicleNo', header: 'Vehicle No' },
            { field: 'reportingTime', header: 'Display Time' },
            { field: 'status', header: 'Reviews' },
        ];
    }
    createDisplay() {
        this.router.navigateByUrl('dashboard/ledVehicle/createDisplay');
    }
    unreviewedDisplay() {
        this.router.navigateByUrl('dashboard/ledVehicle/unreviewedDisplay');
    }
};
ReviewedDisplayComponent.ctorParameters = () => [
    { type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ReviewedDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviewed-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reviewed-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reviewed-display.component.scss */ "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.scss")).default]
    })
], ReviewedDisplayComponent);



/***/ }),

/***/ "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .ui-table .ui-table-tbody > tr:nth-child(even) {\n  background-color: #fff5ec !important; }\n\n::ng-deep .ui-table .ui-table-caption, body .ui-table .ui-table-summary {\n  background-color: #FF9934 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL3VucmV2aWV3ZWQtZGlzcGxheS9DOlxcbGVkVmFuXFxkZXBsb3llZVxcYnJhbmNoXFxsZWR2YW4vc3JjXFxhcHBcXGRhc2hib2FyZFxcbGVkLXZlaGljbGVcXHVucmV2aWV3ZWQtZGlzcGxheVxcdW5yZXZpZXdlZC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbGVkLXZlaGljbGUvdW5yZXZpZXdlZC1kaXNwbGF5L3VucmV2aWV3ZWQtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZWMgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLnVpLXRhYmxlIC51aS10YWJsZS1jYXB0aW9uLCBib2R5IC51aS10YWJsZSAudWktdGFibGUtc3VtbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5OTM0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UnreviewedDisplayComponent = class UnreviewedDisplayComponent {
    constructor(ledVehicleService, router) {
        this.ledVehicleService = ledVehicleService;
        this.router = router;
    }
    ngOnInit() {
        this.cols = [
            { field: 'reportDate', header: 'Date' },
            { field: 'districtAreaName', header: 'Area' },
            { field: 'vechicleNo', header: 'Vehicle No' },
            { field: 'reportingTime', header: 'Display Time' },
            { field: 'delete', header: '' },
        ];
        this.ledVehicleService.getUnreviewedDisplays().subscribe(res => {
            this.users = res;
        });
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
    createDisplay() {
        this.router.navigateByUrl('dashboard/ledVehicle/createDisplay');
    }
    reviewedDisplay() {
        this.router.navigateByUrl('dashboard/ledVehicle/reviewedDisplay');
    }
};
UnreviewedDisplayComponent.ctorParameters = () => [
    { type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UnreviewedDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unreviewed-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unreviewed-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unreviewed-display.component.scss */ "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.scss")).default]
    })
], UnreviewedDisplayComponent);



/***/ })

}]);
//# sourceMappingURL=led-vehicle-led-vehicle-module-es2015.js.map