(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["common"],{/***/"./src/app/common/api.service.ts":/*!***************************************!*\
  !*** ./src/app/common/api.service.ts ***!
  \***************************************/ /*! exports provided: ApiService */ /***/function srcAppCommonApiServiceTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ApiService",function(){return ApiService});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");var ApiService=function ApiService(){this.API_BASE_URL="http://ec2-52-15-97-155.us-east-2.compute.amazonaws.com:8080/led/";// District API
this.API_DISTRICT_API="district";this.API_AREA_API="area"};ApiService=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({providedIn:"root"})],ApiService);/***/},/***/"./src/app/common/http.service.ts":/*!****************************************!*\
  !*** ./src/app/common/http.service.ts ***!
  \****************************************/ /*! exports provided: HttpService */ /***/function srcAppCommonHttpServiceTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpService",function(){return HttpService});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");/* harmony import */var _common_api_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../common/api.service */"./src/app/common/api.service.ts");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var _dashboard_district_mock_district__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ../dashboard/district/mock.district */"./src/app/dashboard/district/mock.district.ts");var HttpService=/*#__PURE__*/function(){function HttpService(httpClient,apiService){this.httpClient=httpClient;this.apiService=apiService}var _proto=HttpService.prototype;_proto.getById=function getById(apiName,id){var requestUrl=this.apiService.API_BASE_URL+apiName+"/"+id;return this.httpClient.get(requestUrl,{headers:new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({"Content-Type":"application/json"})/*,
            params: new HttpParams().set('id', id)*/})};_proto.getAll=function getAll(apiName){var requestUrl=this.apiService.API_BASE_URL+apiName;return this.httpClient.get(requestUrl);// return of(Districts);
};_proto.getAllArea=function getAllArea(apiName){var requestUrl=this.apiService.API_BASE_URL+apiName;// return this.httpClient.get(requestUrl);
return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_dashboard_district_mock_district__WEBPACK_IMPORTED_MODULE_5__["Area"])};_proto.put=function put(apiName,id,data){var requestUrl=this.apiService.API_BASE_URL+apiName+"/"+id;return this.httpClient.put(requestUrl,data,{headers:new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({"Content-Type":"application/json"})})};_proto.post=function post(apiName,data){var requestUrl=this.apiService.API_BASE_URL+apiName;return this.httpClient.post(requestUrl,data,{headers:new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({"Content-Type":"application/json"})})};_proto.delete=function _delete(apiName,id){var requestUrl=this.apiService.API_BASE_URL+apiName+"/"+id;return this.httpClient.delete(requestUrl,{headers:new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({"Content-Type":"application/json"})})};return HttpService}();HttpService.ctorParameters=function(){return[{type:_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]},{type:_common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]}]};HttpService=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({providedIn:"root"})],HttpService);/***/},/***/"./src/app/dashboard/district/mock.district.ts":/*!*****************************************************!*\
  !*** ./src/app/dashboard/district/mock.district.ts ***!
  \*****************************************************/ /*! exports provided: Districts, Area */ /***/function srcAppDashboardDistrictMockDistrictTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Districts",function(){return Districts});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Area",function(){return Area});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");var Districts=[{id:"ranchi",districtName:"Ranchi"}];var Area=[{areaName:"Bokaro Gramin",districtName:"Bokaro"}];/***/}}]);//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map