function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["led-vehicle-led-vehicle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardLedVehicleCreateDisplayCreateDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <h3>Create Display Report</h3>\r\n  <div id=\"create-display\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-12 col-lg-12\">\r\n        <!-- <div>\r\n          <h5>\r\n            DISPLAY REPORT DETAILS\r\n          </h5>\r\n        </div> -->\r\n        <div>\r\n          <div class=\"row\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-sm-12\" style=\"padding-right: 0px;padding-left: 0px;\">\r\n              <form class=\"row detail\" name=\"form\" #report=\"ngForm\">\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"padding-right: 0px;\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Date *</label>\r\n                    <div class=\"input-box-container\">\r\n                      <div class=\"input-group\">\r\n                        <input class=\"input-box form-control\" placeholder=\"Click to select a date\" angular-mydatepicker\r\n                          name=\"mydate\" (click)=\"dp.toggleCalendar()\" [(ngModel)]=\"createDisplayRequest.createdAt\"\r\n                          [options]=\"myDpOptions\" #dp=\"angular-mydatepicker\" />\r\n                        <div class=\"input-group-append\">\r\n                          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dp.toggleCalendar()\" style=\"background-color: #FF9934; border-color: #FF9934\">\r\n                            <i class=\"fa fa-calendar-o\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Vehicle No *</label>\r\n                    <ngx-select-dropdown (change)=\"selectionChanged($event)\" [config]=\"config\" [options]=\"options\"\r\n                      [(ngModel)]=\"createDisplayRequest.vehicleNo\" name=\"vehicleNo\"></ngx-select-dropdown>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Vehicle Stay Area </label>\r\n                    <input type=\"text\" id=\"stayArea\" name=\"stayArea\" class=\"form-control\"\r\n                      [(ngModel)]=\"createDisplayRequest.vehicleStayArea\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"position: relative; top: -38px;\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Reporting Time *</label>\r\n                    <ngb-timepicker [(ngModel)]=\"createDisplayRequest.reportingtime\" [meridian]=\"meridian\"\r\n                      name=\"reportingtime\"></ngb-timepicker>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Closing Place *</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Closing Place\" name=\"closingPlace\"\r\n                      [(ngModel)]=\"createDisplayRequest.closingPlace\" required=\"true\">\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\" style=\"position: relative; top: -38px;\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Close Time *</label>\r\n                    <ngb-timepicker [(ngModel)]=\"createDisplayRequest.closingTime\" [meridian]=\"meridian\"\r\n                      name=\"closingTime\"></ngb-timepicker>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                  <div class=\"form-group is-required-short\">\r\n                    <label class=\"control-label\">Distance *</label>\r\n                    <input type=\"number\" id=\"distance\" class=\"form-control\" placeholder=\"\" name=\"distance\"\r\n                      [(ngModel)]=\"createDisplayRequest.distance\" required=\"true\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                </div>\r\n\r\n                <div class=\"col-md-6 col-sm-4 col-xs-6\" style=\"margin-top: -35px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" style=\"margin-bottom: 10px; padding-top: 0px;\">Kilometer Picture</label>\r\n                    <input type=\"file\" name=\"uploaddriver\" id=\"uploaddriver\" class=\"filestyle\"\r\n                      data-placeholder=\"No file\" data-classbutton=\"btn btn-primary\"\r\n                      data-classicon=\"glyphicon glyphicon-folder-open\" tabindex=\"-1\"\r\n                      style=\"position: absolute; clip: rect(0px, 0px, 0px, 0px);\"\r\n                      (change)=\"handlekilometerPictureName($event.target.files)\">\r\n                    <div class=\"bootstrap-filestyle input-group\"><input type=\"text\" class=\"form-control \"\r\n                        placeholder=\"No file\" disabled=\"\"> <span class=\"group-span-filestyle input-group-btn\"\r\n                        tabindex=\"0\"><label for=\"uploaddriver\" class=\"btn btn-default\" style=\"background-color: #FF9934;border: 1px solid #FF9934; margin-left: -2px;\">\r\n                            <i class=\"fa fa-folder-open-o\" style=\"padding-right: 5px; color: white\"></i>\r\n                          <span class=\"buttonText\" style=\"font-size: 15px; color: white;\">Choose file</span></label></span></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-4 col-xs-6\" style=\"margin-top: -35px;\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" style=\"margin-bottom: 10px; padding-top: 0px;\">Stage Video</label>\r\n                    <input type=\"file\" name=\"uploaddriver\" id=\"uploaddriver\" class=\"filestyle\"\r\n                      data-placeholder=\"getPlaceHolder()\" data-classbutton=\"btn btn-primary\"\r\n                      data-classicon=\"glyphicon glyphicon-folder-open\" tabindex=\"-1\"\r\n                      style=\"position: absolute; clip: rect(0px, 0px, 0px, 0px);\"\r\n                      (change)=\"handlekilometerPictureName($event.target.files)\">\r\n                    <div class=\"bootstrap-filestyle input-group\"><input type=\"text\" class=\"form-control \"\r\n                        placeholder=\"No file\" disabled=\"\"> <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\">\r\n                        <label for=\"uploaddriver\" class=\"btn btn-default \" style=\"background-color: #FF9934;border: 1px solid #FF9934; margin-left: -2px;\">\r\n                            <i class=\"fa fa-folder-open-o\" style=\"padding-right: 5px; color: white\"></i>\r\n                          <span class=\"buttonText\" style=\"font-size: 15px; color: white;\">Choose file</span></label></span></div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <div class=\"row\" style=\"margin-left: 15px; margin-top: 45px;\">\r\n                <div style=\"float: left;\">\r\n                  <div>\r\n                    <div class=\"p-20\">\r\n                      <button type=\"submit\" style=\"background-color: #FF9934; border-color: #FF9934\"\r\n                        name=\"btcreatereport\" (click)=\"submitReport()\" value=\"Foo\" id=\"btcreatereport\"\r\n                        class=\"ladda-button btn btn-primary waves-effect waves-light\" data-style=\"zoom-out\">\r\n                        <span aria-hidden=\"true\"></span><span class=\"ladda-label\">Create Display Report</span><span\r\n                          class=\"btn-label btn-label-right\">\r\n                        </span><span class=\"ladda-spinner\"></span></button>\r\n                        <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-secondary\" data-style=\"zoom-out\" style=\"margin-left: 20px\">\r\n                          <span class=\"ladda-label\">Cancel</span>\r\n                         </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/led-vehicle.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/led-vehicle.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardLedVehicleLedVehicleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"led-vehicle\" class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-lg-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardLedVehicleReviewedDisplayReviewedDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"float: right; padding: 10px 0px; position: relative; z-index: 10;\">\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"unreviewedDisplay()\" style=\"margin-right:20px;\">Unreviewed Display</button>\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"createDisplay()\">Create Display</button>\r\n</div>\r\n<div style=\"float: left\">\r\n  <!-- <div>\r\n    <h3>Reviewed Display Report</h3>\r\n  </div> -->\r\n\r\n  <p-table [columns]=\"cols\" [value]=\"users\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"8\" #dt>\r\n    <ng-template pTemplate=\"caption\">\r\n      Users List\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n          {{col.header}}\r\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <input *ngSwitchDefault pInputText type=\"text\"\r\n            (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n          <span *ngSwitchCase=\"'review'\"></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n      <tr>\r\n        <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n          <span *ngSwitchDefault> {{user[col.field]}} </span>\r\n          <span *ngSwitchCase=\"'status'\">\r\n            <span *ngIf=\"user[col.field].toLowerCase() === 'approved'\" class=\"badge badge-success badge-padding\">Approved</span>\r\n            <span *ngIf=\"user[col.field].toLowerCase() !== 'approved'\" class=\"badge badge-warning badge-padding\">Not\r\n              Approved</span>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardLedVehicleUnreviewedDisplayUnreviewedDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"float: right; padding: 10px 0px; position: relative; z-index: 10;\">\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"reviewedDisplay()\" style=\"margin-right:20px;\">Reviewed Display</button>\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"createDisplay()\">Create Display</button>\r\n</div>\r\n<div style=\"float: left\">\r\n  <!-- <div>\r\n      <h3>Unreviewed Display Report</h3>\r\n  </div> -->\r\n<p-table [columns]=\"cols\" [value]=\"users\" sortMode=\"multiple\" [paginator]=\"true\" [rows]=\"10\" #dt>\r\n  <ng-template pTemplate=\"caption\">\r\n    Users List\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n        {{col.header}}\r\n        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n        <input *ngSwitchDefault pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n        <span *ngSwitchCase=\"'delete'\"></span>\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-user let-columns=\"columns\">\r\n    <tr> \r\n      <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n        <span *ngSwitchDefault> {{user[col.field]}} </span>\r\n        <button *ngSwitchCase=\"'delete'\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"delete(user)\">Delete</button> \r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/create-display/create-display.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/create-display/create-display.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardLedVehicleCreateDisplayCreateDisplayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#create-display {\n  border: 2px solid antiquewhite; }\n\n.row {\n  margin: 15px 0; }\n\nlabel {\n  margin-bottom: 0;\n  margin-left: 1px; }\n\n.form-group {\n  margin-bottom: 0px; }\n\n::ng-deep .btn-link {\n  color: #FF9934 !important; }\n\n::ng-deep .btn-outline-primary {\n  color: #FF9934 !important;\n  border-color: #FF9934 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL2NyZWF0ZS1kaXNwbGF5L0M6XFxsZWRWYW5cXGRlcGxveWVlXFxEdW1tYVxcbGVkdmFuL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGxlZC12ZWhpY2xlXFxjcmVhdGUtZGlzcGxheVxcY3JlYXRlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sZWQtdmVoaWNsZS9jcmVhdGUtZGlzcGxheS9jcmVhdGUtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjcmVhdGUtZGlzcGxheSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhbnRpcXVld2hpdGU7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tbGVmdDogMXB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5idG4tbGluayB7XHJcbiAgY29sb3I6ICNGRjk5MzQgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjRkY5OTM0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRkY5OTM0ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/create-display/create-display.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/create-display/create-display.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: CreateDisplayComponent */

  /***/
  function srcAppDashboardLedVehicleCreateDisplayCreateDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateDisplayComponent", function () {
      return CreateDisplayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../led-vehicle.service */
    "./src/app/dashboard/led-vehicle/led-vehicle.service.ts");
    /* harmony import */


    var _create_display_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-display.model */
    "./src/app/dashboard/led-vehicle/create-display/create-display.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CreateDisplayComponent =
    /*#__PURE__*/
    function () {
      function CreateDisplayComponent(ledVehicleService, router) {
        _classCallCheck(this, CreateDisplayComponent);

        this.ledVehicleService = ledVehicleService;
        this.router = router;
        this.meridian = true;
        this.myDpOptions = {
          dateRange: false,
          dateFormat: 'dd-mm-yyyy' // other options are here...

        };
        this.myDateInit = true;
        this.options = [{
          id: 34,
          name: 'Chatra : HR67B0486'
        }, {
          id: 35,
          name: 'Ranchi Gramin 1 : HR67B-0692'
        }, {
          id: 36,
          name: 'Saraikela : HR67B1643'
        }, {
          id: 37,
          name: 'Gumla : HR67B2906'
        }, {
          id: 38,
          name: 'Jamshedpur  1 : HR67B3045'
        }, {
          id: 39,
          name: 'Garhwa : HR67B3164'
        }, {
          id: 40,
          name: 'Godda : HR67B3248'
        }, {
          id: 41,
          name: 'Deoghar : HR67B3372'
        }, {
          id: 42,
          name: 'Sahebganj : HR67B4355'
        }, {
          id: 43,
          name: 'Koderma : HR67B4622'
        }, {
          id: 44,
          name: 'Daltonganj : HR67B5344'
        }, {
          id: 45,
          name: 'Dhanbad 1 : HR67B5653'
        }, {
          id: 46,
          name: 'Ramgarh : HR67B-5993'
        }, {
          id: 47,
          name: 'Bokaro Gramin : HR67B7564'
        }, {
          id: 48,
          name: 'Hazaribagh 2 : HR67B7610'
        }, {
          id: 49,
          name: 'Giridih : HR67B8547'
        }, {
          id: 50,
          name: 'Pakur : HR67B9184'
        }, {
          id: 51,
          name: 'Dumka 2 : HR67B9402'
        }, {
          id: 52,
          name: 'Jamtara : HR67B9813'
        }, {
          id: 53,
          name: 'Dumka 1 : JH01CT0168'
        }, {
          id: 54,
          name: 'Simdega : JH01CT1600'
        }, {
          id: 55,
          name: 'Lohardaga : JH01CT1911'
        }, {
          id: 56,
          name: 'Jamshedpur Gramin 2 : JH01CT2363'
        }, {
          id: 57,
          name: 'Jamshedpur Gramin 3 : JH01CT2874'
        }, {
          id: 58,
          name: 'Ranchi Gramin 2 : JH01CT4662'
        }, {
          id: 59,
          name: 'Ranchi Gramin 3 : JH01CT4969'
        }, {
          id: 60,
          name: 'Khunti : JH01CT5336'
        }, {
          id: 61,
          name: 'Chaibasa : JH01CT5887'
        }, {
          id: 62,
          name: 'Hazaribagh 1 : JH01CT7124'
        }, {
          id: 63,
          name: 'Dhanbad Gramin : JH01CT7839'
        }, {
          id: 64,
          name: 'Latehar : JH01CT9469'
        }, {
          id: 65,
          name: 'Saraikela : JH01DA2075'
        }, {
          id: 66,
          name: 'Garhwa : JH01DA5497'
        }, {
          id: 67,
          name: 'Lohardaga : JH01DD0602'
        }, {
          id: 68,
          name: 'Koderma : JH01DD-0638'
        }, {
          id: 69,
          name: 'Sahebganj : JH01DD0840'
        }];
        this.config = {
          displayKey: 'name',
          search: true,
          height: '200px',
          placeholder: 'Select',
          customComparator: function customComparator() {},
          limitTo: this.options.length,
          moreText: 'more',
          noResultsFound: 'No results found!',
          searchPlaceholder: 'Search',
          searchOnKey: 'name'
        }; // this.createDisplayRequest.date = null;

        this.createDisplayRequest = new _create_display_model__WEBPACK_IMPORTED_MODULE_3__["CreateDisplayRequest"]();
        this.createDisplayRequest.createdAt = null;
      }

      _createClass(CreateDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createDisplayRequest.reportingtime = {
            hour: 13,
            minute: 30
          };
          this.createDisplayRequest.closingTime = {
            hour: 18,
            minute: 30
          };
          this.options = [].concat(_toConsumableArray(this.options), [{
            id: 70,
            name: 'Daltonganj : JH01DD0956'
          }]);

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
          } else {
            // Initialize to today with javascript date object
            this.createDisplayRequest.createdAt = {
              isRange: false,
              singleDate: {
                jsDate: new Date()
              }
            };
          }
        }
      }, {
        key: "toggleMeridian",
        value: function toggleMeridian() {
          this.meridian = !this.meridian;
        }
      }, {
        key: "getDefaultValueSet",
        value: function getDefaultValueSet() {
          var createDisplayRequest = {};
          createDisplayRequest.districtAreaName = '';
          createDisplayRequest.districtName = '';
          createDisplayRequest.generalHourPictureName = '';
          createDisplayRequest.id = 0;
          createDisplayRequest.kilometerPictureName = '';
          createDisplayRequest.reportDate = '';
          createDisplayRequest.status = '';
          createDisplayRequest.updatedAt = '';
          createDisplayRequest.display = [];
          var display = new _create_display_model__WEBPACK_IMPORTED_MODULE_3__["Display"]();
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
      }, {
        key: "selectionChanged",
        value: function selectionChanged(event) {
          console.log(event);
        }
      }, {
        key: "submitReport",
        value: function submitReport() {
          this.createDisplayRequest = Object.assign(this.getDefaultValueSet(), this.createDisplayRequest);

          if (this.createDisplayRequest.distance) {
            this.createDisplayRequest.distance = this.createDisplayRequest.distance.toString();
          }

          var closingTime = this.createDisplayRequest.closingTime.hour + ':' + this.createDisplayRequest.closingTime.minute;
          this.createDisplayRequest.closingTime = closingTime;
          var reportingTime = this.createDisplayRequest.reportingtime.hour + ':' + this.createDisplayRequest.reportingtime.minute;
          this.createDisplayRequest.reportingtime = reportingTime;

          if (this.createDisplayRequest && this.createDisplayRequest.vehicleNo) {
            this.createDisplayRequest.vehicleNo = this.createDisplayRequest.vehicleNo.name;
          } // tslint:disable-next-line:max-line-length
          // tslint:disable-next-line:no-unused-expression
          // tslint:disable-next-line:max-line-length


          this.createDisplayRequest.createdAt = this.createDisplayRequest.createdAt.singleDate.date.year + '-' + this.createDisplayRequest.createdAt.singleDate.date.month + '-' + this.createDisplayRequest.createdAt.singleDate.date.day;
          this.ledVehicleService.createReport(this.createDisplayRequest).subscribe(function (res) {}, function (err) {});
          console.log('form submition');
        }
      }, {
        key: "handlekilometerPictureName",
        value: function handlekilometerPictureName(files) {
          this.createDisplayRequest.kilometerPictureName = files.item(0).name.toString();
        }
      }, {
        key: "handleVideoFileName",
        value: function handleVideoFileName(files) {
          this.createDisplayRequest.generalHourPictureName = files.item(0).name.toString();
        }
      }, {
        key: "getPlaceHolder",
        value: function getPlaceHolder() {
          return this.createDisplayRequest.kilometerPictureName ? this.createDisplayRequest.kilometerPictureName : 'No file';
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigateByUrl('dashboard/ledVehicle/reviewedDisplay');
        }
      }]);

      return CreateDisplayComponent;
    }();

    CreateDisplayComponent.ctorParameters = function () {
      return [{
        type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('report', {
      static: false
    })], CreateDisplayComponent.prototype, "report", void 0);
    CreateDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-display',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-display.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/create-display/create-display.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-display.component.scss */
      "./src/app/dashboard/led-vehicle/create-display/create-display.component.scss")).default]
    })], CreateDisplayComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/create-display/create-display.model.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/create-display/create-display.model.ts ***!
    \******************************************************************************/

  /*! exports provided: CreateDisplayRequest, VehicleNo, Display */

  /***/
  function srcAppDashboardLedVehicleCreateDisplayCreateDisplayModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateDisplayRequest", function () {
      return CreateDisplayRequest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleNo", function () {
      return VehicleNo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Display", function () {
      return Display;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CreateDisplayRequest = function CreateDisplayRequest() {
      _classCallCheck(this, CreateDisplayRequest);
    };

    var VehicleNo = function VehicleNo() {
      _classCallCheck(this, VehicleNo);
    };

    var Display = function Display() {
      _classCallCheck(this, Display);
    };
    /***/

  },

  /***/
  "./src/app/dashboard/led-vehicle/led-vehicle-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/led-vehicle-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LedVehicleRoutingModule */

  /***/
  function srcAppDashboardLedVehicleLedVehicleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LedVehicleRoutingModule", function () {
      return LedVehicleRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _led_vehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./led-vehicle.component */
    "./src/app/dashboard/led-vehicle/led-vehicle.component.ts");
    /* harmony import */


    var _create_display_create_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-display/create-display.component */
    "./src/app/dashboard/led-vehicle/create-display/create-display.component.ts");
    /* harmony import */


    var _unreviewed_display_unreviewed_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./unreviewed-display/unreviewed-display.component */
    "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.ts");
    /* harmony import */


    var _reviewed_display_reviewed_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reviewed-display/reviewed-display.component */
    "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.ts");

    var routes = [{
      path: '',
      component: _led_vehicle_component__WEBPACK_IMPORTED_MODULE_3__["LedVehicleComponent"],
      children: [{
        path: 'createDisplay',
        component: _create_display_create_display_component__WEBPACK_IMPORTED_MODULE_4__["CreateDisplayComponent"]
      }, {
        path: 'unreviewedDisplay',
        component: _unreviewed_display_unreviewed_display_component__WEBPACK_IMPORTED_MODULE_5__["UnreviewedDisplayComponent"]
      }, {
        path: 'reviewedDisplay',
        component: _reviewed_display_reviewed_display_component__WEBPACK_IMPORTED_MODULE_6__["ReviewedDisplayComponent"]
      }, {
        path: '',
        redirectTo: 'createDisplay',
        pathMatch: 'full'
      }]
    }];

    var LedVehicleRoutingModule = function LedVehicleRoutingModule() {
      _classCallCheck(this, LedVehicleRoutingModule);
    };

    LedVehicleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LedVehicleRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/led-vehicle.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/led-vehicle.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardLedVehicleLedVehicleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#led-vehicle {\n  padding-left: 20px;\n  float: left;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL0M6XFxsZWRWYW5cXGRlcGxveWVlXFxEdW1tYVxcbGVkdmFuL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGxlZC12ZWhpY2xlXFxsZWQtdmVoaWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbGVkLXZlaGljbGUvbGVkLXZlaGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVkLXZlaGljbGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/led-vehicle.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/led-vehicle.component.ts ***!
    \****************************************************************/

  /*! exports provided: LedVehicleComponent */

  /***/
  function srcAppDashboardLedVehicleLedVehicleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LedVehicleComponent", function () {
      return LedVehicleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LedVehicleComponent =
    /*#__PURE__*/
    function () {
      function LedVehicleComponent() {
        _classCallCheck(this, LedVehicleComponent);
      }

      _createClass(LedVehicleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LedVehicleComponent;
    }();

    LedVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-led-vehicle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./led-vehicle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/led-vehicle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./led-vehicle.component.scss */
      "./src/app/dashboard/led-vehicle/led-vehicle.component.scss")).default]
    })], LedVehicleComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/led-vehicle.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/led-vehicle.module.ts ***!
    \*************************************************************/

  /*! exports provided: LedVehicleModule */

  /***/
  function srcAppDashboardLedVehicleLedVehicleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LedVehicleModule", function () {
      return LedVehicleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _led_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./led-vehicle-routing.module */
    "./src/app/dashboard/led-vehicle/led-vehicle-routing.module.ts");
    /* harmony import */


    var _led_vehicle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./led-vehicle.component */
    "./src/app/dashboard/led-vehicle/led-vehicle.component.ts");
    /* harmony import */


    var _create_display_create_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-display/create-display.component */
    "./src/app/dashboard/led-vehicle/create-display/create-display.component.ts");
    /* harmony import */


    var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-mydatepicker */
    "./node_modules/angular-mydatepicker/fesm2015/angular-mydatepicker.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-select-dropdown */
    "./node_modules/ngx-select-dropdown/dist/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _unreviewed_display_unreviewed_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./unreviewed-display/unreviewed-display.component */
    "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.ts");
    /* harmony import */


    var _reviewed_display_reviewed_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./reviewed-display/reviewed-display.component */
    "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var primeng_primeng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/primeng */
    "./node_modules/primeng/primeng.js");
    /* harmony import */


    var primeng_primeng__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_14__);

    var LedVehicleModule = function LedVehicleModule() {
      _classCallCheck(this, LedVehicleModule);
    };

    LedVehicleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_led_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["LedVehicleComponent"], _create_display_create_display_component__WEBPACK_IMPORTED_MODULE_5__["CreateDisplayComponent"], _unreviewed_display_unreviewed_display_component__WEBPACK_IMPORTED_MODULE_11__["UnreviewedDisplayComponent"], _reviewed_display_reviewed_display_component__WEBPACK_IMPORTED_MODULE_12__["ReviewedDisplayComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _led_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_3__["LedVehicleRoutingModule"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_6__["AngularMyDatePickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_9__["SelectDropDownModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]]
    })], LedVehicleModule);
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/led-vehicle.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/led-vehicle.service.ts ***!
    \**************************************************************/

  /*! exports provided: LedVehicleService */

  /***/
  function srcAppDashboardLedVehicleLedVehicleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LedVehicleService", function () {
      return LedVehicleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/api.service */
    "./src/app/common/api.service.ts");

    var LedVehicleService =
    /*#__PURE__*/
    function () {
      function LedVehicleService(httpClient, apiService) {
        _classCallCheck(this, LedVehicleService);

        this.httpClient = httpClient;
        this.apiService = apiService;
      }

      _createClass(LedVehicleService, [{
        key: "createReport",
        value: function createReport(report) {
          var requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY;
          return this.httpClient.post(requestUrl, report); // return of({});
        }
      }, {
        key: "getUnreviewedDisplays",
        value: function getUnreviewedDisplays() {
          var requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY_UN_REVIEWED;
          return this.httpClient.get(requestUrl); // return of(Unreviewed);
        }
      }, {
        key: "getReviewedDisplays",
        value: function getReviewedDisplays() {
          var requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY_REVIEWED;
          return this.httpClient.get(requestUrl); // return of(Reviewed);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(user) {
          var requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY + '/' + user.id;
          return this.httpClient.delete(requestUrl); // return of();
        }
      }]);

      return LedVehicleService;
    }();

    LedVehicleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    LedVehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LedVehicleService);
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardLedVehicleReviewedDisplayReviewedDisplayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".badge-padding {\n  padding: 6px; }\n\n::ng-deep .ui-table .ui-table-caption, body .ui-table .ui-table-summary {\n  background-color: #FF9934 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL3Jldmlld2VkLWRpc3BsYXkvQzpcXGxlZFZhblxcZGVwbG95ZWVcXER1bW1hXFxsZWR2YW4vc3JjXFxhcHBcXGRhc2hib2FyZFxcbGVkLXZlaGljbGVcXHJldmlld2VkLWRpc3BsYXlcXHJldmlld2VkLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbGVkLXZlaGljbGUvcmV2aWV3ZWQtZGlzcGxheS9yZXZpZXdlZC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG59XHJcbjo6bmctZGVlcCAudWktdGFibGUgLnVpLXRhYmxlLWNhcHRpb24sIGJvZHkgLnVpLXRhYmxlIC51aS10YWJsZS1zdW1tYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk5MzQgIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ReviewedDisplayComponent */

  /***/
  function srcAppDashboardLedVehicleReviewedDisplayReviewedDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewedDisplayComponent", function () {
      return ReviewedDisplayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../led-vehicle.service */
    "./src/app/dashboard/led-vehicle/led-vehicle.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ReviewedDisplayComponent =
    /*#__PURE__*/
    function () {
      function ReviewedDisplayComponent(ledVehicleService, router) {
        _classCallCheck(this, ReviewedDisplayComponent);

        this.ledVehicleService = ledVehicleService;
        this.router = router;
      }

      _createClass(ReviewedDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ledVehicleService.getReviewedDisplays().subscribe(function (res) {
            _this.users = res;
          });
          this.cols = [{
            field: 'reportDate',
            header: 'Date'
          }, {
            field: 'vechicleStayArea',
            header: 'Area'
          }, {
            field: 'vechicleNo',
            header: 'Vehicle No'
          }, {
            field: 'reportingTime',
            header: 'Display Time'
          }, {
            field: 'status',
            header: 'Reviews'
          }];
        }
      }, {
        key: "createDisplay",
        value: function createDisplay() {
          this.router.navigateByUrl('dashboard/ledVehicle/createDisplay');
        }
      }, {
        key: "unreviewedDisplay",
        value: function unreviewedDisplay() {
          this.router.navigateByUrl('dashboard/ledVehicle/unreviewedDisplay');
        }
      }]);

      return ReviewedDisplayComponent;
    }();

    ReviewedDisplayComponent.ctorParameters = function () {
      return [{
        type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ReviewedDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reviewed-display',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reviewed-display.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reviewed-display.component.scss */
      "./src/app/dashboard/led-vehicle/reviewed-display/reviewed-display.component.scss")).default]
    })], ReviewedDisplayComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardLedVehicleUnreviewedDisplayUnreviewedDisplayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .ui-table .ui-table-tbody > tr:nth-child(even) {\n  background-color: #fff5ec !important; }\n\n::ng-deep .ui-table .ui-table-caption, body .ui-table .ui-table-summary {\n  background-color: #FF9934 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZC12ZWhpY2xlL3VucmV2aWV3ZWQtZGlzcGxheS9DOlxcbGVkVmFuXFxkZXBsb3llZVxcRHVtbWFcXGxlZHZhbi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxsZWQtdmVoaWNsZVxcdW5yZXZpZXdlZC1kaXNwbGF5XFx1bnJldmlld2VkLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBb0MsRUFBQTs7QUFFeEM7RUFDSSxvQ0FBb0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sZWQtdmVoaWNsZS91bnJldmlld2VkLWRpc3BsYXkvdW5yZXZpZXdlZC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVlYyAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAudWktdGFibGUgLnVpLXRhYmxlLWNhcHRpb24sIGJvZHkgLnVpLXRhYmxlIC51aS10YWJsZS1zdW1tYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk5MzQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: UnreviewedDisplayComponent */

  /***/
  function srcAppDashboardLedVehicleUnreviewedDisplayUnreviewedDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnreviewedDisplayComponent", function () {
      return UnreviewedDisplayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../led-vehicle.service */
    "./src/app/dashboard/led-vehicle/led-vehicle.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UnreviewedDisplayComponent =
    /*#__PURE__*/
    function () {
      function UnreviewedDisplayComponent(ledVehicleService, router) {
        _classCallCheck(this, UnreviewedDisplayComponent);

        this.ledVehicleService = ledVehicleService;
        this.router = router;
      }

      _createClass(UnreviewedDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.cols = [{
            field: 'reportDate',
            header: 'Date'
          }, {
            field: 'districtAreaName',
            header: 'Area'
          }, {
            field: 'vechicleNo',
            header: 'Vehicle No'
          }, {
            field: 'reportingTime',
            header: 'Display Time'
          }, {
            field: 'delete',
            header: ''
          }];
          this.ledVehicleService.getUnreviewedDisplays().subscribe(function (res) {
            _this2.users = res;
          });
        }
        /**
         * delete
         */

      }, {
        key: "delete",
        value: function _delete(user) {
          console.log('About to delete an user: ' + JSON.stringify(user));
          this.ledVehicleService.deleteUser(user).subscribe(function (res) {// success block delete user
          });
        }
      }, {
        key: "createDisplay",
        value: function createDisplay() {
          this.router.navigateByUrl('dashboard/ledVehicle/createDisplay');
        }
      }, {
        key: "reviewedDisplay",
        value: function reviewedDisplay() {
          this.router.navigateByUrl('dashboard/ledVehicle/reviewedDisplay');
        }
      }]);

      return UnreviewedDisplayComponent;
    }();

    UnreviewedDisplayComponent.ctorParameters = function () {
      return [{
        type: _led_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["LedVehicleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UnreviewedDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unreviewed-display',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unreviewed-display.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unreviewed-display.component.scss */
      "./src/app/dashboard/led-vehicle/unreviewed-display/unreviewed-display.component.scss")).default]
    })], UnreviewedDisplayComponent);
    /***/
  }
}]); //# sourceMappingURL=led-vehicle-led-vehicle-module-es2015.js.map
//# sourceMappingURL=led-vehicle-led-vehicle-module-es5.js.map