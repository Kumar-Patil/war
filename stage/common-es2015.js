(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/common/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/common/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApiService = class ApiService {
    constructor() {
        this.API_BASE_URL = 'http://ec2-52-15-97-155.us-east-2.compute.amazonaws.com:8080/stageapi/api/v1/';
        // District API
        this.API_DISTRICT_API = 'district';
        this.API_AREA_API = 'area';
    }
};
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/common/http.service.ts":
/*!****************************************!*\
  !*** ./src/app/common/http.service.ts ***!
  \****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _dashboard_district_mock_district__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/district/mock.district */ "./src/app/dashboard/district/mock.district.ts");






let HttpService = class HttpService {
    constructor(httpClient, apiService) {
        this.httpClient = httpClient;
        this.apiService = apiService;
    }
    getById(apiName, id) {
        const requestUrl = this.apiService.API_BASE_URL + apiName + '/' + id;
        return this.httpClient.get(requestUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }) /*,
            params: new HttpParams().set('id', id)*/
        });
    }
    getAll(apiName) {
        const requestUrl = this.apiService.API_BASE_URL + apiName;
        // return this.httpClient.get(requestUrl);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_dashboard_district_mock_district__WEBPACK_IMPORTED_MODULE_5__["Districts"]);
    }
    getAllArea(apiName) {
        const requestUrl = this.apiService.API_BASE_URL + apiName;
        // return this.httpClient.get(requestUrl);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_dashboard_district_mock_district__WEBPACK_IMPORTED_MODULE_5__["Area"]);
    }
    put(apiName, id, data) {
        const requestUrl = this.apiService.API_BASE_URL + apiName + '/' + id;
        return this.httpClient.put(requestUrl, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
    post(apiName, data) {
        const requestUrl = this.apiService.API_BASE_URL + apiName;
        return this.httpClient.post(requestUrl, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
    delete(apiName, id) {
        const requestUrl = this.apiService.API_BASE_URL + apiName + '/' + id;
        return this.httpClient.delete(requestUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/dashboard/district/mock.district.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/district/mock.district.ts ***!
  \*****************************************************/
/*! exports provided: Districts, Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Districts", function() { return Districts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Districts = [
    {
        districtName: 'Bokaro',
        id: 'Bokaro'
    },
    {
        districtName: 'Chaibasa',
        id: 'Bokaro'
    },
    {
        districtName: 'Chatra',
        id: 'Bokaro'
    }, {
        districtName: 'Daltonganj',
        id: 'Bokaro'
    },
    {
        districtName: 'Deoghar',
        id: 'Bokaro'
    },
    {
        districtName: 'Dhanbad',
        id: 'Bokaro'
    },
    {
        districtName: 'Dumka',
        id: 'Bokaro'
    },
    {
        districtName: 'Garhwa',
        id: 'Bokaro'
    },
    {
        districtName: 'Giridih',
        id: 'Bokaro'
    },
    {
        districtName: 'Godda',
        id: 'Bokaro'
    },
    {
        districtName: 'Gumla',
        id: 'Bokaro'
    },
    {
        districtName: 'Hazaribagh',
        id: 'Bokaro'
    },
    {
        districtName: 'Jamshedpur',
        id: 'Bokaro'
    },
    {
        districtName: 'Jamtara',
        id: 'Bokaro'
    },
    {
        districtName: 'Khunti',
        id: 'Bokaro'
    },
    {
        districtName: 'Koderma',
        id: 'Bokaro'
    },
    {
        districtName: 'Latehar',
        id: 'Bokaro'
    },
    {
        districtName: 'Lohardaga',
        id: 'Bokaro'
    },
    {
        districtName: 'Pakur',
        id: 'Bokaro'
    },
    {
        districtName: 'Ramgarh',
        id: 'Bokaro'
    },
    {
        districtName: 'Ranchi',
        id: 'Bokaro'
    },
    {
        districtName: 'Sahebganj',
        id: 'Bokaro'
    },
    {
        districtName: 'Saraikela',
        id: 'Bokaro'
    },
    {
        districtName: 'Simdega',
        id: 'Bokaro'
    }
];
const Area = [
    {
        areaName: 'Bokaro1',
        districtName: 'Bokaro'
    },
    {
        areaName: 'Bokaro Gramin',
        districtName: 'Bokaro'
    },
    {
        areaName: 'Chaibasa',
        districtName: 'Chaibasa'
    },
    {
        areaName: 'Dhanbad Gramin',
        districtName: 'Dhanbad'
    },
    {
        areaName: 'Dumka 1',
        districtName: 'Dumka'
    },
    {
        areaName: 'Dumka 2',
        districtName: 'Dumka'
    },
    {
        areaName: 'Garhwa',
        districtName: 'Garhwa'
    },
    {
        areaName: 'Giridih',
        districtName: 'Giridih'
    },
    {
        areaName: 'Chaibasa',
        districtName: 'Chaibasa'
    },
    {
        areaName: 'Godda',
        districtName: 'Godda'
    },
    {
        areaName: 'Gumla',
        districtName: 'Gumla'
    },
    {
        areaName: 'Hazaribagh 1',
        districtName: 'Hazaribagh'
    },
    {
        areaName: 'Hazaribagh 2',
        districtName: 'Hazaribagh'
    },
    {
        areaName: 'Jamshedpur 1',
        districtName: 'Jamshedpur'
    },
    {
        areaName: 'Chaibasa',
        districtName: 'Chaibasa'
    },
    {
        areaName: 'Jamtara',
        districtName: 'Jamtara'
    },
    {
        areaName: 'Sahebganj',
        districtName: 'Sahebganj'
    },
    {
        areaName: 'Ranchi Gramin 1',
        districtName: 'Ranchi'
    },
    {
        areaName: 'Ranchi Gramin',
        districtName: 'Ranchi'
    },
    {
        areaName: 'Pakur',
        districtName: 'Pakur'
    },
    {
        areaName: 'Ramgarh',
        districtName: 'Ramgarh'
    },
    {
        areaName: 'Bokaro Gramin',
        districtName: 'Bokaro'
    },
    {
        areaName: 'Daltonganj gramin',
        districtName: 'Daltonganj'
    },
    {
        areaName: 'Chatra',
        districtName: 'Chatra'
    },
    {
        areaName: 'Daltonganj',
        districtName: 'Daltonganj'
    },
    {
        areaName: 'Deoghar Gramin',
        districtName: 'Deoghar'
    },
    {
        areaName: 'Dhanbad 1',
        districtName: 'Dhanbad'
    }
];


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map