webpackJsonp([1,4],{

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(442);


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LISA2Component; });
var LISA2Component = (function () {
    function LISA2Component() {
    }
    LISA2Component.prototype.toDate = function (d) {
        //   console.log(d);
        if (d != null) {
            if (typeof d === "Date") {
                return d.toLocaleDateString();
            }
            else if (typeof d === "string") {
                var s = d;
                if (s.length > 0) {
                    d = new Date(s);
                    return d.toLocaleDateString();
                }
            }
        }
        return '-';
    };
    return LISA2Component;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/lisa2-component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message() {
    }
    return Message;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/message.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__(67);
/* unused harmony export AUTH_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AUTH_PROVIDERS = [{ provide: SecurityService, useClass: SecurityService }];
var SecurityService = (function () {
    function SecurityService(http, router) {
        this.http = http;
        this.router = router;
    }
    SecurityService.prototype.login = function (user, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var parms = JSON.stringify({ action: "login", user: user, password: password });
        var url = __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */].getWebServer() + 'ABWLoginServlet';
        console.log(url);
        return this.http.post(url, parms, options)
            .map(this.extract)
            .catch(this.handleError);
    };
    SecurityService.prototype.logout = function () {
        localStorage.removeItem('userToken');
    };
    SecurityService.prototype.getToken = function () {
        return localStorage.getItem('userToken');
    };
    SecurityService.prototype.isLoggedIn = function () {
        return this.getToken() != null;
    };
    SecurityService.prototype.handleError = function (error) {
        console.log('login Error');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json();
            if (body) {
                errMsg = body.fehler;
            }
        }
        if (!errMsg) {
            errMsg = 'Fehler bei der Kommunikation mit dem WEB-Server.';
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    SecurityService.prototype.extract = function (res) {
        console.log('login' + res);
        var result = res.json();
        if (result.token) {
            localStorage.setItem('userToken', result.token);
            return null;
        }
        else if (result.fehler) {
            return result.fehler;
        }
        else {
            this.handleError(res);
        }
        return res.text();
    };
    SecurityService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SecurityService);
    return SecurityService;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/security.service.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AbstractService = (function () {
    function AbstractService(http, router) {
        this.http = http;
    }
    AbstractService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        console.log('handelError');
        var errMsg;
        console.log(error);
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.fehler || JSON.stringify(body);
            errMsg = "" + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error('Handel:' + errMsg);
        // this.router.navigate(['/error', errMsg]);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    AbstractService.prototype.extractMessage = function (res) {
        console.log('extract Message' + res);
        this.message = res.json();
        return this.message;
    };
    AbstractService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AbstractService);
    return AbstractService;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/abstract.service.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbwProjektDetail; });
var AbwProjektDetail = (function () {
    function AbwProjektDetail() {
    }
    return AbwProjektDetail;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/abw-projekt-detail.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abstract_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjektdetailService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjektdetailService = (function (_super) {
    __extends(ProjektdetailService, _super);
    function ProjektdetailService(http, router) {
        _super.call(this, http, router);
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */].getWebServer() + 'ABWProjektDetailServlet';
    }
    ProjektdetailService.prototype.read = function (projektId, liegenschaftId) {
        console.log("readAbw");
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var token = localStorage.getItem('userToken');
        params.set('projektId', projektId);
        params.set('liegenschaftId', liegenschaftId);
        params.set('token', token);
        return this.http.get(this.url, {
            search: params
        }).map(this.extract)
            .catch(this.handleError);
    };
    ProjektdetailService.prototype.update = function (abw) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var token = localStorage.getItem('userToken');
        var parms = JSON.stringify({ action: "update", token: token, object: abw });
        return this.http.post(this.url, parms, options)
            .map(this.extractMessage)
            .catch(this.handleError);
    };
    ProjektdetailService.prototype.delete = function (projektId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var token = localStorage.getItem('userToken');
        var parms = JSON.stringify({ action: "delete", object: projektId, token: token });
        return this.http.post(this.url, parms, options)
            .map(this.extract)
            .catch(this.handleError);
    };
    ProjektdetailService.prototype.extract = function (res) {
        var any = res.json();
        if (any.fehler) {
            throw any;
        }
        var body = res.json();
        if (body) {
            console.log(body.beginn);
            console.log(body.status);
            return body;
        }
        return null;
    };
    ProjektdetailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProjektdetailService);
    return ProjektdetailService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_5__abstract_service__["a" /* AbstractService */]));
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/projektdetail.service.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WE; });
var WE = (function () {
    function WE() {
        this.liegenschaftId = '';
        this.liegenschaftNr = '';
        this.bezeichnung = '';
        this.bezeichnungBw = '';
        this.bezeichnungBima = '';
        this.nutzung = '';
        this.kompzBauMgmt = ' ';
        this.weNrBw = '';
        this.weNrBima = '';
        this.bwdlz = '';
        this.kompz = '';
        this.bimaFm = '';
        this.bundesland = '';
        this.plz = '';
        this.ort = '';
        this.regBez = '';
        this.ffe = '';
        this.ffeAdresse = '';
        this.flaeche = '';
        this.hbt = '';
        this.bde = '';
        this.bedAdresse = '';
    }
    return WE;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/we.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 441;


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(561);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/main.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Abwasser; });
var Abwasser = (function () {
    function Abwasser() {
    }
    return Abwasser;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/abwasser.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__security_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(securityService) {
        this.securityService = securityService;
        this.title = 'INKA Berichtswesen';
    }
    AppComponent.prototype.ngOnInit = function () {
        var map = new ol.Map({
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }).extend([
                new ol.control.ZoomToExtent({
                    extent: [
                        813079.7791264898, 5929220.284081122,
                        848966.9639063801, 7036863.986909639
                    ]
                })
            ]),
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'map',
            view: new ol.View({
                projection: 'EPSG:900913',
                center: [1075000.0, 6843000.0],
                zoom: 14
            })
        });
    };
    AppComponent.prototype.isLoggedIn = function () {
        console.log("loggedIn");
        return this.securityService.isLoggedIn();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(745),
            styles: [__webpack_require__(733)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/app.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inka_lak_liste_inka_lak_liste_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inka2_abwasser_inka2_abwasser_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inka2_we_inka2_we_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inka2_admin_inka2_admin_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inka_lak_a_inka_lak_a_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__inka_we_suche_inka_we_suche_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__inka_lak_b_inka_lak_b_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__inka_lak_fkl_inka_lak_fkl_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__error_error_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_datatable__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__map_map_component__ = __webpack_require__(574);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__inka_we_suche_inka_we_suche_component__["a" /* InkaWeSucheComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */] },
    { path: 'inka-we', component: __WEBPACK_IMPORTED_MODULE_9__inka2_we_inka2_we_component__["a" /* Inka2WeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'inka-we/:liegenschaftId', component: __WEBPACK_IMPORTED_MODULE_9__inka2_we_inka2_we_component__["a" /* Inka2WeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'inka-we-suche', component: __WEBPACK_IMPORTED_MODULE_13__inka_we_suche_inka_we_suche_component__["a" /* InkaWeSucheComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'inka-lak-a/:projektId/:liegenschaftId', component: __WEBPACK_IMPORTED_MODULE_12__inka_lak_a_inka_lak_a_component__["a" /* InkaLakAComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'inka-lak-b/:projektId/:liegenschaftId', component: __WEBPACK_IMPORTED_MODULE_14__inka_lak_b_inka_lak_b_component__["a" /* InkaLakBComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'inka-lak-fkl/:projektId/:liegenschaftId', component: __WEBPACK_IMPORTED_MODULE_15__inka_lak_fkl_inka_lak_fkl_component__["a" /* InkaLakFklComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_19__map_map_component__["a" /* MapComponent */] },
    { path: 'error/:errorMessage', component: __WEBPACK_IMPORTED_MODULE_16__error_error_component__["a" /* ErrorComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_13__inka_we_suche_inka_we_suche_component__["a" /* InkaWeSucheComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__inka_lak_liste_inka_lak_liste_component__["a" /* InkaLakListeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__inka2_abwasser_inka2_abwasser_component__["a" /* Inka2AbwasserComponent */],
                __WEBPACK_IMPORTED_MODULE_9__inka2_we_inka2_we_component__["a" /* Inka2WeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__inka2_admin_inka2_admin_component__["a" /* Inka2AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_12__inka_lak_a_inka_lak_a_component__["a" /* InkaLakAComponent */],
                __WEBPACK_IMPORTED_MODULE_13__inka_we_suche_inka_we_suche_component__["a" /* InkaWeSucheComponent */],
                __WEBPACK_IMPORTED_MODULE_14__inka_lak_b_inka_lak_b_component__["a" /* InkaLakBComponent */],
                __WEBPACK_IMPORTED_MODULE_15__inka_lak_fkl_inka_lak_fkl_component__["a" /* InkaLakFklComponent */],
                __WEBPACK_IMPORTED_MODULE_16__error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__map_map_component__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__security_service__["a" /* SecurityService */], __WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/app.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.get(params['errorMessage']);
        });
    }
    ErrorComponent.prototype.get = function (s) {
        console.log('errorComponent' + s);
        this.errorMessage = s;
    };
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(746),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], ErrorComponent);
    return ErrorComponent;
    var _a;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/error.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lisa2_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaLakAComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InkaLakAComponent = (function (_super) {
    __extends(InkaLakAComponent, _super);
    function InkaLakAComponent(route, router, service) {
        var _this = this;
        _super.call(this);
        this.route = route;
        this.router = router;
        this.service = service;
        this.projekt = new __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__["a" /* AbwProjektDetail */]();
        this.projekt.phase = 'LAK A';
        this.route.params.subscribe(function (params) {
            _this.get(params['projektId'], params['liegenschaftId']);
        });
    }
    InkaLakAComponent.prototype.ngOnInit = function () {
    };
    InkaLakAComponent.prototype.read = function () {
        if (this.projekt.projektId) {
            this.get(this.projekt.projektId, this.liegenschaftId);
        }
    };
    InkaLakAComponent.prototype.get = function (projektId, liegenschaftId) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        console.log('Projekt:' + projektId);
        // beim neu Anlegen wird die ID auf 'A' gesetzt, um dem Server mitzuteilen, dass ein Projekt der Phases LAK A angelegt werden soll.
        // der Server ermittelt die möglichen Kostenarten und schickt diese zurück
        if (!projektId) {
            projektId = 'A';
        }
        this.liegenschaftId = liegenschaftId;
        this.service.read(projektId, liegenschaftId)
            .subscribe(function (p) { return _this.projekt = p; }, function (error) { return _this.message.fehler = error; });
    };
    InkaLakAComponent.prototype.update = function (p) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            if (!p.projektNr) {
                this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
                return;
            }
            console.log(JSON.stringify(p));
            this.service.update(p)
                .subscribe(function (message) { return _this.message = message; }, function (error) { return _this.fehler(error); });
        }
    };
    InkaLakAComponent.prototype.fehler = function (error) {
        this.message.fehler = error;
        console.log(this.message.fehler);
    };
    InkaLakAComponent.prototype.delete = function (p) {
        var _this = this;
        /* let test = confirm("Löschen?");
         console.log(test);
         if (test == true) {
          */
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            console.log(JSON.stringify(p));
            this.service.delete(p.projektId)
                .subscribe(function (message) { return _this.message = message; }, function (error) { return _this.fehler(error); });
            this.router.navigate(['/inka-we', this.liegenschaftId]);
        }
        //}
    };
    Object.defineProperty(InkaLakAComponent.prototype, "beginn", {
        get: function () {
            return this.toDate(this.projekt.beginn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InkaLakAComponent.prototype, "ende", {
        get: function () {
            return this.toDate(this.projekt.ende);
        },
        enumerable: true,
        configurable: true
    });
    InkaLakAComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inka-lak-a',
            providers: [__WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */]],
            template: __webpack_require__(747),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */]) === 'function' && _c) || Object])
    ], InkaLakAComponent);
    return InkaLakAComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_3__lisa2_component__["a" /* LISA2Component */]));
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-lak-a.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lisa2_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaLakBComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InkaLakBComponent = (function (_super) {
    __extends(InkaLakBComponent, _super);
    function InkaLakBComponent(route, router, service) {
        var _this = this;
        _super.call(this);
        this.route = route;
        this.router = router;
        this.service = service;
        this.projekt = new __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__["a" /* AbwProjektDetail */]();
        this.projekt.phase = 'LAK B';
        this.route.params.subscribe(function (params) {
            _this.get(params['projektId'], params['liegenschaftId']);
        });
    }
    InkaLakBComponent.prototype.ngOnInit = function () {
    };
    InkaLakBComponent.prototype.get = function (projektId, liegenschaftId) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        console.log('Projekt:' + projektId);
        // beim neu Anlegen wird die ID auf 'B' gesetzt, um dem Server mitzuteilen, dass ein Projekt der Phases LAK B angelegt werden soll.
        // der Server ermittelt die möglichen Kostenarten und schickt diese zurück
        if (!projektId) {
            projektId = 'B';
        }
        this.liegenschaftId = liegenschaftId;
        this.service.read(projektId, liegenschaftId)
            .subscribe(function (p) { return _this.projekt = p; }, function (error) { return _this.message.fehler = error; });
    };
    InkaLakBComponent.prototype.update = function (p) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            if (!p.projektNr) {
                this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
                return;
            }
            console.log(JSON.stringify(p));
            this.service.update(p)
                .subscribe(function (message) { return _this.message = message; }, function (error) { return _this.fehler(error); });
        }
    };
    InkaLakBComponent.prototype.fehler = function (error) {
        this.message.fehler = error;
        console.log(this.message.fehler);
    };
    InkaLakBComponent.prototype.delete = function (p) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            console.log(JSON.stringify(p));
            this.service.delete(p.projektId)
                .subscribe(function (abw) { return _this.projekt = abw; }, function (error) { return _this.message = error; });
            this.router.navigate(['/inka-we', this.liegenschaftId]);
        }
    };
    Object.defineProperty(InkaLakBComponent.prototype, "beginn", {
        get: function () {
            return this.toDate(this.projekt.beginn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InkaLakBComponent.prototype, "ende", {
        get: function () {
            return this.toDate(this.projekt.ende);
        },
        enumerable: true,
        configurable: true
    });
    InkaLakBComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inka-lak-b',
            providers: [__WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */]],
            template: __webpack_require__(748),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */]) === 'function' && _c) || Object])
    ], InkaLakBComponent);
    return InkaLakBComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_3__lisa2_component__["a" /* LISA2Component */]));
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-lak-b.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lisa2_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaLakFklComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InkaLakFklComponent = (function (_super) {
    __extends(InkaLakFklComponent, _super);
    function InkaLakFklComponent(route, router, service) {
        var _this = this;
        _super.call(this);
        this.route = route;
        this.router = router;
        this.service = service;
        this.projekt = new __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__["a" /* AbwProjektDetail */]();
        this.projekt.phase = 'LAK KL';
        this.route.params.subscribe(function (params) {
            _this.get(params['projektId'], params['liegenschaftId']);
        });
    }
    InkaLakFklComponent.prototype.ngOnInit = function () {
    };
    InkaLakFklComponent.prototype.read = function () {
        if (this.projekt.projektId) {
            this.get(this.projekt.projektId, this.liegenschaftId);
        }
    };
    InkaLakFklComponent.prototype.get = function (projektId, liegenschaftId) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        console.log('Projekt:' + projektId);
        this.liegenschaftId = liegenschaftId;
        // beim neu Anlegen wird die ID auf 'KL' gesetzt, um dem Server mitzuteilen, dass ein Projekt der Phases LAK KL angelegt werden soll.
        // der Server ermittelt die möglichen Kostenarten und schickt diese zurück
        if (!projektId) {
            projektId = 'KL';
        }
        this.service.read(projektId, liegenschaftId)
            .subscribe(function (p) { return _this.projekt = p; }, function (error) { return _this.message.fehler = error; });
    };
    InkaLakFklComponent.prototype.update = function (p) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            if (!p.projektNr) {
                this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
                return;
            }
            console.log(JSON.stringify(p));
            this.service.update(p)
                .subscribe(function (message) { return _this.message = message; }, function (error) { return _this.fehler(error); });
        }
    };
    InkaLakFklComponent.prototype.fehler = function (error) {
        this.message.fehler = error;
        console.log(this.message.fehler);
    };
    InkaLakFklComponent.prototype.delete = function (p) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            console.log(JSON.stringify(p));
            this.service.delete(p.projektId)
                .subscribe(function (message) { return _this.message = message; }, function (error) { return _this.fehler(error); });
            this.router.navigate(['/inka-we', this.liegenschaftId]);
        }
    };
    Object.defineProperty(InkaLakFklComponent.prototype, "beginn", {
        get: function () {
            return this.toDate(this.projekt.beginn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InkaLakFklComponent.prototype, "ende", {
        get: function () {
            return this.toDate(this.projekt.ende);
        },
        enumerable: true,
        configurable: true
    });
    InkaLakFklComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inka-lak-fkl',
            providers: [__WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */]],
            template: __webpack_require__(749),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */]) === 'function' && _c) || Object])
    ], InkaLakFklComponent);
    return InkaLakFklComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_3__lisa2_component__["a" /* LISA2Component */]));
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-lak-fkl.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lisa2_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lak_liste_service__ = __webpack_require__(567);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaLakListeComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InkaLakListeComponent = (function (_super) {
    __extends(InkaLakListeComponent, _super);
    function InkaLakListeComponent(route, router, service) {
        _super.call(this);
        this.route = route;
        this.router = router;
        this.service = service;
        this.loading = false;
    }
    InkaLakListeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getWE(params['liegenschaftId']);
        });
    };
    InkaLakListeComponent.prototype.getWE = function (liegenschaftId) {
        this.liegenschaftId = liegenschaftId;
        if (liegenschaftId) {
            this.search();
        }
        else {
            this.liegenschaftId = localStorage.getItem('liegenschaftId');
            this.search();
        }
    };
    InkaLakListeComponent.prototype.search = function () {
        var _this = this;
        this.loading = true;
        this.projekte = new Array();
        this.service.searchLaks(this.liegenschaftId)
            .subscribe(function (wes) { return _this.getLaks(wes); }, function (error) { return _this.getError(error); });
    };
    InkaLakListeComponent.prototype.getLaks = function (laks) {
        this.projekte = laks;
        this.loading = false;
    };
    InkaLakListeComponent.prototype.getError = function (s) {
        console.log('Fehler: ' + s);
        //this.route.navigate(['/error', s]);
    };
    InkaLakListeComponent.prototype.datum = function () {
        return 'x';
    };
    InkaLakListeComponent.prototype.navigate = function (lak) {
        if ('LAK A' == lak.phase) {
            this.navigateA(lak);
        }
        else if ('LAK B' == lak.phase) {
            this.navigateB(lak);
        }
        else if ('LAK KL' == lak.phase) {
            this.navigateFkl(lak);
        }
        else if ('U' == lak.phase) {
            this.navigateUntersuchung(lak);
        }
    };
    InkaLakListeComponent.prototype.navigateA = function (lak) {
        console.log('LAK-Nav: ' + lak);
        var projektId = '';
        if (lak != null) {
            projektId = lak.projektId;
        }
        var liegenschaftId = this.liegenschaftId;
        this.router.navigate(['/inka-lak-a', projektId, liegenschaftId]);
    };
    InkaLakListeComponent.prototype.navigateB = function (lak) {
        var projektId = 'B';
        if (lak != null) {
            projektId = lak.projektId;
        }
        var liegenschaftId = this.liegenschaftId;
        this.router.navigate(['/inka-lak-b', projektId, liegenschaftId]);
    };
    InkaLakListeComponent.prototype.navigateFkl = function (lak) {
        console.log('LAK-Nav: ' + lak);
        var projektId = 'KL';
        if (lak != null) {
            projektId = lak.projektId;
        }
        var liegenschaftId = this.liegenschaftId;
        this.router.navigate(['/inka-lak-fkl', projektId, liegenschaftId]);
    };
    InkaLakListeComponent.prototype.navigateUntersuchung = function (lak) {
        console.log('LAK-Nav: ' + lak);
        var projektId = 'U';
        if (lak != null) {
            projektId = lak.projektId;
        }
        var liegenschaftId = this.liegenschaftId;
        this.router.navigate(['/inka-lak-a', projektId, liegenschaftId]);
    };
    InkaLakListeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inka-lak-liste',
            providers: [__WEBPACK_IMPORTED_MODULE_3__lak_liste_service__["a" /* LakListeService */]],
            template: __webpack_require__(750),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__lak_liste_service__["a" /* LakListeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__lak_liste_service__["a" /* LakListeService */]) === 'function' && _c) || Object])
    ], InkaLakListeComponent);
    return InkaLakListeComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_2__lisa2_component__["a" /* LISA2Component */]));
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-lak-liste.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abstract_service__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LakListeService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LakListeService = (function (_super) {
    __extends(LakListeService, _super);
    function LakListeService(http, router) {
        _super.call(this, http, router);
        this.http = http;
        this.urlLak = __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */].getWebServer() + 'ABWProjektSucheServlet';
    }
    LakListeService.prototype.searchLaks = function (liegenschaftId) {
        console.log("search Projekte:");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var parms = JSON.stringify({ action: "search", liegenschaftId: liegenschaftId });
        return this.http.post(this.urlLak, parms, options)
            .map(this.extractLak)
            .catch(this.handleError);
    };
    LakListeService.prototype.extractLak = function (res) {
        console.log("Projekte:" + res.json());
        var body = res.json();
        if (body) {
            return body;
        }
        return null;
    };
    LakListeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LakListeService);
    return LakListeService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_6__abstract_service__["a" /* AbstractService */]));
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/lak-liste.service.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__we__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaWeSucheComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InkaWeSucheComponent = (function () {
    function InkaWeSucheComponent(router, service) {
        this.router = router;
        this.service = service;
        this.loading = false;
        console.log('Konstruktor WE Suche');
        localStorage.removeItem('we');
    }
    InkaWeSucheComponent.prototype.ngOnInit = function () {
        console.log('init WE Suche');
        console.log('init WE Suche:' + this.we);
        this.loading = false;
        if (this.we == null) {
            this.we = new __WEBPACK_IMPORTED_MODULE_3__we__["a" /* WE */]();
        }
        this.we.abwasserspezifischeInfos = true;
        var sWe = localStorage.getItem('we.bezeichnung');
        if (sWe != null) {
            this.we.bezeichnung = sWe;
            this.search();
        }
    };
    InkaWeSucheComponent.prototype.search = function () {
        var _this = this;
        console.log('search');
        this.loading = true;
        this.wes = new Array();
        this.service.searchWE(this.we)
            .subscribe(function (wes) { return _this.getWEs(wes); }, function (error) { return _this.getError(error); });
    };
    InkaWeSucheComponent.prototype.getWEs = function (wes) {
        this.wes = wes;
        this.loading = false;
    };
    InkaWeSucheComponent.prototype.getError = function (s) {
        console.log('Fehler: ' + s);
        this.router.navigate(['/error', s]);
    };
    InkaWeSucheComponent.prototype.onSelection = function (u) {
        // console.log("select:" + JSON.stringify(u));
        localStorage.setItem('we.bezeichnung', this.we.bezeichnung);
    };
    InkaWeSucheComponent.prototype.navigate = function (we) {
        console.log('WE-Suche: ' + we);
        var id = we.liegenschaftId;
        localStorage.setItem('liegenschaftId', id);
        console.log('WE-Suche: ' + we.liegenschaftId);
        this.router.navigate(['/inka-we', id]);
    };
    InkaWeSucheComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inka-we-suche',
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]],
            template: __webpack_require__(751),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === 'function' && _b) || Object])
    ], InkaWeSucheComponent);
    return InkaWeSucheComponent;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-we-suche.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abstract_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbwasserService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AbwasserService = (function (_super) {
    __extends(AbwasserService, _super);
    function AbwasserService(http, router) {
        _super.call(this, http, router);
        this.http = http;
        this.urlABW = __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */].getWebServer() + 'AbwasserServlet';
    }
    AbwasserService.prototype.readAbw = function (liegenschaftId) {
        console.log("readAbw");
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        params.set('liegenschaftId', liegenschaftId);
        console.log(liegenschaftId);
        return this.http.get(this.urlABW, {
            search: params
        }).map(this.extractAbwasser)
            .catch(this.handleError);
    };
    AbwasserService.prototype.updateAbw = function (abw) {
        console.log("updateAbw");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var parms = JSON.stringify({ action: "update", object: abw });
        console.log("update:" + parms);
        return this.http.post(this.urlABW, parms, options)
            .map(this.extractMessage)
            .catch(this.handleError);
    };
    AbwasserService.prototype.deleteAbw = function (abw) {
        console.log("deleteAbw");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var parms = JSON.stringify({ action: "delete", object: abw });
        return this.http.post(this.urlABW, parms, options)
            .map(this.extractAbwasser)
            .catch(this.handleError);
    };
    AbwasserService.prototype.extractAbwasser = function (res) {
        console.log('extract Abwasser' + res);
        var body = res.json();
        if (body) {
            console.log("extracted Abwasser:" + JSON.stringify(body));
            return body;
        }
        return null;
    };
    AbwasserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AbwasserService);
    return AbwasserService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_5__abstract_service__["a" /* AbstractService */]));
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/abwasser.service.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abwasser__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abwasser_service__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inka2AbwasserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Inka2AbwasserComponent = (function () {
    function Inka2AbwasserComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.abw = new __WEBPACK_IMPORTED_MODULE_0__abwasser__["a" /* Abwasser */]();
        this.route.params.subscribe(function (params) {
            _this.getAbw(params['liegenschaftId']);
        });
    }
    Inka2AbwasserComponent.prototype.ngOnInit = function () {
    };
    Inka2AbwasserComponent.prototype.read = function () {
        this.getAbw(this.abw.liegenschaftId);
    };
    Inka2AbwasserComponent.prototype.getAbw = function (liegenschaftId) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_1__message__["a" /* Message */]();
        console.log('ABW:' + liegenschaftId);
        if (liegenschaftId) {
            this.service.readAbw(liegenschaftId)
                .subscribe(function (abw) { _this.abw = abw; console.log(abw); }, function (error) { return _this.message.fehler = error; });
        }
        else {
            var lid = localStorage.getItem('liegenschaftId');
            this.service.readAbw(lid)
                .subscribe(function (abw) { _this.abw = abw; console.log(abw); }, function (error) { return _this.message.fehler = error; });
        }
    };
    Inka2AbwasserComponent.prototype.update = function (abw) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_1__message__["a" /* Message */]();
        if (abw != null) {
            if (abw.liegenschaftId == null) {
                var lid = localStorage.getItem('liegenschaftId');
                abw.liegenschaftId = lid;
            }
            console.log(JSON.stringify(abw));
            this.service.updateAbw(abw)
                .subscribe(function (message) { return _this.message = message; }, function (error) { return _this.message.fehler = error; });
        }
    };
    Inka2AbwasserComponent.prototype.delete = function (abw) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_1__message__["a" /* Message */]();
        if (abw != null) {
            console.log(JSON.stringify(abw));
            this.service.deleteAbw(abw)
                .subscribe(function (abw) { return _this.abw = abw; }, function (error) { return _this.message.fehler = error; });
        }
    };
    Inka2AbwasserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inka2-abwasser',
            providers: [__WEBPACK_IMPORTED_MODULE_3__abwasser_service__["a" /* AbwasserService */]],
            template: __webpack_require__(752),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__abwasser_service__["a" /* AbwasserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__abwasser_service__["a" /* AbwasserService */]) === 'function' && _b) || Object])
    ], Inka2AbwasserComponent);
    return Inka2AbwasserComponent;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka2-abwasser.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__we__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inka2AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Inka2AdminComponent = (function () {
    function Inka2AdminComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.we = new __WEBPACK_IMPORTED_MODULE_1__we__["a" /* WE */]();
        this.route.params.subscribe(function (params) {
            _this.getWE(params['liegenschaftId']);
        });
    }
    Inka2AdminComponent.prototype.ngOnInit = function () {
    };
    Inka2AdminComponent.prototype.getWE = function (id) {
        console.log('WE:' + id);
        if (id) {
            this.readWE(id);
        }
        else {
            var lid = localStorage.getItem('liegenschaftId');
            this.readWE(lid);
        }
    };
    Inka2AdminComponent.prototype.readWE = function (id) {
        var _this = this;
        this.service.readWE(id)
            .subscribe(function (we) { return _this.we = we; }, function (error) { return _this.errorMessage = error; });
    };
    Inka2AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inka2-admin',
            providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]],
            template: __webpack_require__(753),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === 'function' && _b) || Object])
    ], Inka2AdminComponent);
    return Inka2AdminComponent;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka2-admin.component.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__we__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inka2WeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Inka2WeComponent = (function () {
    function Inka2WeComponent() {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__we__["a" /* WE */]();
    }
    Inka2WeComponent.prototype.ngOnInit = function () {
    };
    Inka2WeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inka2-we',
            template: __webpack_require__(754),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [])
    ], Inka2WeComponent);
    return Inka2WeComponent;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka2-we.component.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(576);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(router, securityService) {
        this.router = router;
        this.securityService = securityService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.error = null;
        this.securityService.login(this.user.name, this.user.password)
            .subscribe(function (err) { return _this.start(err); }, function (error) { return _this.error = error; });
        this.router.navigate(['/inka_we-suche']);
    };
    LoginComponent.prototype.logout = function () {
        this.securityService.logout();
    };
    LoginComponent.prototype.start = function (err) {
        console.log('logoin' + err);
        if (err) {
            this.error = err;
        }
        else {
            this.router.navigate(['/inka_we-suche']);
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            providers: [__WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]],
            template: __webpack_require__(755),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/login.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(route, service) {
        this.route = route;
        this.service = service;
        this.bingVisible = false;
    }
    MapComponent.prototype.ngOnInit = function () {
        var lid = localStorage.getItem('liegenschaftId');
        console.log('init Map' + lid);
        if (this.liegenschaftId != lid) {
            this.liegenschaftId = lid;
            this.readFeature(lid);
        }
    };
    MapComponent.prototype.toggleBing = function () {
        this.bingVisible = !this.bingVisible;
        this.bing.setVisible(this.bingVisible);
        this.osm.setVisible(!this.bingVisible);
    };
    MapComponent.prototype.readFeature = function (liegenschaftId) {
        var _this = this;
        this.service.readSDMGeom(liegenschaftId)
            .subscribe(function (geom) { return _this.showMap(geom); }, function (error) { return _this.errorMessage = error; });
    };
    MapComponent.prototype.showMap = function (res) {
        var geojsonObject = res;
        console.log('showMap:' + geojsonObject);
        var style = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'green',
                width: 2
            }),
            fill: new ol.style.Fill({
                color: 'rgba(0, 255, 0, 0.0)' //praktisch kein fill
            })
        });
        var vectorSource = new ol.source.Vector();
        //vectorSource.addFeature(new ol.Feature(new ol.geom.Circle([9.9254,54.4616], 0.01)));
        var f = new ol.format.GeoJSON().readFeature(geojsonObject);
        vectorSource.addFeature(f);
        var vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: style
        });
        /////////////////////////////////////////////////////////////////////////
        /*let wmsLayer=new ol.layer.Image({
                 extent: [-13884991, 2870341, -7455066, 6338219],
                 source: new ol.source.ImageWMS({
                   url: 'https://www.lisa-geobasisdatenportal.de/gbd/wms_dop',
                   params: {'LAYERS': 'rgb'},
                   ratio: 1
                  
                 })
               })
       */
        this.bing = new ol.layer.Tile({
            visible: true,
            preload: Infinity,
            source: new ol.source.BingMaps({
                key: 'An_EETE4FaBQqKg82luTnuju1sAU6HpSitEvBfy9GTSksYgStw9Oei5KsGDV0Hok',
                imagerySet: 'AerialWithLabels'
            })
        });
        ///////////////////////////////////////////////////////////////////////////////////
        var extent = vectorSource.getExtent();
        this.osm =
            new ol.layer.Tile({
                source: new ol.source.OSM()
            });
        var map = new ol.Map({
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }).extend([
                new ol.control.ZoomToExtent({
                    extent: extent
                })
            ]),
            layers: [
                this.bing,
                this.osm,
                vectorLayer
            ],
            target: 'map',
            view: new ol.View({
                projection: 'EPSG:3857',
                center: [0, 0],
                zoom: 4
            })
        });
        console.log(extent);
        //map.getView().fit(extent, map.getSize());
        map.getView().fit(extent, map.getSize());
        //map.getView().setZoom(10);
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]],
            template: __webpack_require__(756),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === 'function' && _b) || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/map.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(router, securityService) {
        this.router = router;
        this.securityService = securityService;
    }
    LoggedInGuard.prototype.canActivate = function () {
        var ok = this.securityService.isLoggedIn();
        if (!ok) {
            this.router.navigate(['/login']);
        }
        return ok;
    };
    LoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]) === 'function' && _b) || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/logged-in-guard.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/user.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/environment.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
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
    function DataService(http, router) {
        this.http = http;
        this.router = router;
        this.urlSQL = 'SQLServlet';
        this.urlWE = 'WEServlet';
        this.urlABW = 'WESucheServlet';
        this.getWebServerUrl();
    }
    DataService.prototype.extractWE = function (res) {
        var body = res.json();
        return body;
    };
    DataService.prototype.extractSingleWE = function (res) {
        var body = res.json();
        return body;
    };
    DataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log('Handel:' + errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    DataService.getWebServer = function () {
        return this.webServer;
    };
    DataService.prototype.readWE = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        params.set('liegenschaftId', id);
        console.log(id);
        return this.http.get(DataService.getWebServer() + this.urlWE, {
            search: params
        }).map(this.extractSingleWE)
            .catch(this.handleError);
    };
    DataService.prototype.readSDMGeom = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        params.set('liegenschaftId', id);
        return this.http.get(DataService.getWebServer() + 'WKTServlet', {
            //return this.http.get('http://localhost:8182/' + 'WKTServlet', {
            search: params
        }).map(this.extractGeom)
            .catch(this.handleError);
    };
    DataService.prototype.extractGeom = function (res) {
        var body = res.json();
        console.log('extract Geom' + body);
        if (body) {
            var geom = body;
            return geom;
        }
        return null;
    };
    DataService.prototype.searchWE = function (we) {
        if (DataService.getWebServer() == null) {
            this.getWebServerUrl();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var token = localStorage.getItem('userToken');
        var parms = JSON.stringify({ action: "search", token: token, we: we });
        var url = DataService.getWebServer() + this.urlABW;
        return this.http.post(url, parms, options)
            .map(this.extractWE)
            .catch(this.handleError);
    };
    DataService.prototype.getWebServerUrl = function () {
        // const params: URLSearchParams = new URLSearchParams();
        return this.http.get("/xclient.config", null)
            .map(this.extractWebServer)
            .catch(this.handleError);
    };
    DataService.prototype.extractWebServer = function (res) {
        DataService.webServer = res.text();
        return DataService.webServer;
    };
    //private static webServer: string = "http://localhost:8182/SQLServer/";//
    //private static webServer: string = "http://192.168.137.57:8080/SQLServer/";
    //private static webServer: string = "http://192.168.137.76:8182/SQLServer/";
    DataService.webServer = "/"; //
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DataService);
    return DataService;
    var _a, _b;
}());
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/data.service.js.map

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = " \n.ng-invalid  {\n  border-left: 5px solid #c94442; /* red */\n}\n \n.ng-valid  {\n  border-left: 5px solid green; /* red */\n}"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ".ng-invalid  {\n  border-left: 5px solid #c94442;\n}\n \n.ng-valid  {\n  border-left: 5px solid green; \n}"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = " \n.ng-invalid  {\n  border-left: 5px solid #c94442; /* red */\n}\n \n.ng-valid  {\n  border-left: 5px solid green; /* red */\n}"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "\ninput[type=\"checkbox\"] {\n    margin-top: .75em;\n}"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "\ninput[type=\"checkbox\"] {\n    margin-top: .75em;\n}\n \n.ng-invalid  {\n  border-left: 5px solid #c94442; /* red */\n}\n \n.ng-valid  {\n  border-left: 5px solid green; /* red */\n}"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<!--NAVBAR aus view-source:https://getbootstrap.com/examples/navbar/-->\n\n<div class=\"container\">\n    <!-- Static navbar -->\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n                    aria-controls=\"navbar\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    </button>\n                <a class=\"navbar-left\" href=\"#\"><img src=\"logo_klein.png\" alt=\"INKA Berichtswesen\" style=\"height:50px\"></a>\n            </div>\n            <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"active\"><a routerLink=\"/\">Home</a></li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Wirtschaftseinheit <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\"  disabled>\n                            <li><a routerLink=\"/inka-we-suche\">Suchen</a></li>\n                            <li><a routerLink=\"/inka-we\" >Bearbeiten</a></li>\n                           <!--li><a routerLink=\"/map\" >Karte</a></li-->\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">LAK <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/inka-lak-a\">Teil A anlegen</a></li>\n                            <li><a routerLink=\"/inka-lak-b\">Teil B anlegen</a></li>\n                            <li><a routerLink=\"/inka-lak-fkl\">für kleine Liegenschaften anlegen</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                        </ul>\n                    </li>\n\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a routerLink=\"/hilfe\" >Hilfe</a></li>\n                    <li><a routerLink=\"/login\" >Logout</a></li> \n                    <!--li><a routerLink=\"/inka-admin\" routerLinkActive=\"active\">ADMIN</a></li--> \n              \n                </ul>\n            </div>\n            <!--/.nav-collapse -->\n        </div>\n        <!--/.container-fluid -->\n    </nav>\n\n\n    <router-outlet>\n    </router-outlet>\n  </div>\n<!--div id=\"map\" class=\"map\"></div-->\n\n<!-- /container -->"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" style=\"color:red\">\n  Fehlermeldung\n</h1>\n{{errorMessage}}"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Wollen Sie wirklich löschen?</h4>\n      </div>\n      <div class=\"modal-body\">\n        <button class=\"btn btn-danger btn-block\" data-dismiss=\"modal\" title=\"Löschen\" (click)=\"delete(projekt)\"> Löschen </button>\n        <button class=\"btn btn-info btn-block\" data-dismiss=\"modal\" title=\"a\"> Abbrechen </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row \">\n  <div class=\"col-sm-4\">\n    <app-inka2-admin>\n    </app-inka2-admin>\n  </div>\n  <div class=\"col-sm-8\">\n    <div>\n      <div class=\"row\">\n        <div class=\"enlarge col-sm-5 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#bb0000\"> {{message.fehler}} </div>\n        <div class=\"enlarge col-sm-4 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#000000\"> {{message.ok}} </div>\n        <div class=\"col-sm-1\"><button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"rückgängig\" (click)=\"read()\" align=\"right\"> <i class=\"glyphicon glyphicon-refresh\"> </i></button></div>\n        <div class=\"col-sm-1\">\n          <button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"speichern\" (click)=\"update(projekt)\" align=\"right\"\n            [disabled]=\"!f.form.valid\"> <i class=\"glyphicon glyphicon-ok\">  </i></button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"löschen\" data-toggle=\"modal\" data-target=\"#myModal\"\n            align=\"right\"> <i class=\"glyphicon glyphicon-remove\"> </i></button>\n        </div>\n      </div>\n      <h3 *ngIf=\"projekt.phase == 'LAK A'\" style=\"text-align:center\">LAK Teil A</h3>\n      <h3 *ngIf=\"projekt.phase == 'U'\" style=\"text-align:center\">Untersuchung</h3>\n      <form class=\"form form-horizontal\" name=\"f\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n        <fieldset>\n          <div class=\"row\">\n            <label for=\"projektNr\" class=\"control-label col-sm-4\">Projekt Nr. *</label>\n            <div class=\"col-sm-4\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektNr\" [(ngModel)]=\"projekt.projektNr\" name=\"projektNr\" required>\n            </div>\n            <div *ngIf=\"f?.controls?.projektNr?.hasError('')\">\n              Dieses Feld ist ein Pflichtfeld.\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"projektName\" class=\"control-label col-sm-4\">Projektname</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektName\" [(ngModel)]=\"projekt.projektName\" name=\"projektName\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"auftraggeber\" class=\"control-label col-sm-4\">Auftraggeber *</label>\n            <div class=\"col-sm-8\">\n              <!--input type=\"text\" class=\"form-control  text-left\" id=\"projektName\"  [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"-->\n              <select class=\"input-large form-control\" id=\"auftraggeber\" [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\" required>\n              <option  value=\"KompZ BauMgmt Düsseldorf\">KompZ BauMgmt Düsseldorf</option>\n              <option  value=\"KompZ BauMgmt Hannover\">KompZ BauMgmt Hannover</option>\n              <option value=\"KompZ BauMgmt Kiel\" >KompZ BauMgmt Kiel</option>\n              <option  value=\"KompZ BauMgmt München\">KompZ BauMgmt München</option>\n              <option  value=\"KompZ BauMgmt Strausberg\">KompZ BauMgmt Strausberg</option>\n              <option value=\"KompZ BauMgmt Stuttgart\" >KompZ BauMgmt Stuttgart</option>\n              <option  value=\"WBV Nord\">WBV Nord</option>\n              <option  value=\"WBV Ost\">WBV Ost</option>\n              <option  value=\"WBV Süd\">WBV Süd</option>\n              <option value=\"WBV West\" >WBV West</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"durchfStelle\" class=\"control-label col-sm-4\">Durchf. Stelle</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"durchfStelle\" [(ngModel)]=\"projekt.durchfStelle\" name=\"durchfStelle\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"bemerkung\" class=\"control-label col-sm-4\">Kommentar durchführende Stelle</label>\n            <div class=\"col-sm-8\">\n              <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"bemerkung\" [(ngModel)]=\"projekt.bemerkung\" name=\"bemerkung\"></textarea>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"projektLeiter\" class=\"control-label col-sm-4\">Sachbearb. BdE (Fz)</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektLeiter\" [(ngModel)]=\"projekt.projektLeiter\" name=\"projektLeiter\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"beginn\" class=\"control-label col-sm-4\">Beauftragung</label>\n            <div class=\"col-sm-4\">\n              <input type=\"date\" class=\"form-control  text-left\" id=\"beginn\" [(ngModel)]=\"projekt.beginn\" name=\"beginn\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"ende\" class=\"control-label col-sm-4\">Fertigstellung</label>\n            <div class=\"col-sm-4\">\n              <input type=\"date\" class=\"form-control  text-left\" id=\"ende\" [(ngModel)]=\"projekt.ende\" name=\"ende\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"status\" class=\"control-label col-sm-4\">Status</label>\n\n            <div class=\"col-sm-8\">\n              <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n              <select class=\"input-large form-control\" id=\"status\" [(ngModel)]=\"projekt.status\" name=\"status\" required>\n              <option value=\"geplant\" >geplant</option>\n              <option  value=\"FfE beauftragt\">FfE beauftragt</option>\n              <option  value=\"BdE beauftragt\">BdE beauftragt</option>\n              <option  value=\"fertiggestellt\">fertiggestellt</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"extAuftragnehmer\" class=\"control-label col-sm-4\">Ing.-Büro</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"extAuftragnehmer\" [(ngModel)]=\"projekt.extAuftragnehmer\" name=\"extAuftragnehmer\">\n            </div>\n          </div>\n          <div style=\"background-color:#e0f0e0\">\n            <div class=\"row\">\n              <label class=\"control-label col-sm-4\">Sofortmaßnahmen</label>\n            </div>\n            <div class=\"row\">\n              <label for=\"statusZkl5\" class=\"control-label col-sm-4\">Status *</label>\n              <div class=\"col-sm-8\">\n                <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n                <select class=\"input-large form-control\" id=\"statusZkl5\" [(ngModel)]=\"projekt.statusZkl5\" name=\"statusZkl5\">\n              <option  value=\"kein Bedarf\">kein Bedarf</option>\n              <option  value=\"zu veranlassen\">zu veranlassen</option>\n              <option  value=\"veranlasst\">veranlasst</option>\n              <option value=\"in Bearbeitung\">in Bearbeitung </option>\n              <option value=\"abgeschlossen\">abgeschlossen</option>\n              <option value=\"unbekannt\">unbekannt</option>\n              </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"sachstandZkl5\" class=\"control-label col-sm-4\">Sachstand</label>\n\n              <div class=\"col-sm-8\">\n                <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"sachstandZkl5\" [(ngModel)]=\"projekt.sachstandZkl5\" name=\"sachstandZkl5\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"kommentarFfe\" class=\"control-label col-sm-4\">Kommentar FfE</label>\n              <div class=\"col-sm-8\">\n                <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"kommentarFfe\" [(ngModel)]=\"projekt.kommentarFfe\" name=\"kommentarFfe\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"inspektion\" class=\"control-label col-sm-4\">TV Inspektion von</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"inspektionBeginn\" [(ngModel)]=\"projekt.inspektionBeginn\" name=\"inspektionBeginn\">\n              </div>\n              <label for=\"inspektionEnde\" class=\"control-label col-sm-1\">bis</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"inspektionEnde\" [(ngModel)]=\"projekt.inspektionEnde\" name=\"inspektionEnde\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"inspekteur\" class=\"control-label col-sm-4\">Inspektionsfirma</label>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control  text-left\" id=\"inspekteur\" [(ngModel)]=\"projekt.inspekteur\" name=\"inspekteur\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <table *ngIf=\"projekt.kosten!=null && projekt.kosten.length>0\" class=\"table table-striped table-hover\" [mfData]=\"projekt.kosten\"\n                #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                <thead>\n                  <th align=\"center\">\n                    <mfDefaultSorter by=\"kostenart\">Kostenart</mfDefaultSorter>\n                  </th>\n                  <th>\n                    <mfDefaultSorter by=\"kosten\" align=\"right\">Kosten (Brutto)</mfDefaultSorter>\n                  </th>\n                </thead>\n                <tbody>\n\n                  <tr *ngFor=\"let k of mf.data ; let in = index\">\n                    <td>{{k.kostenart}}</td>\n                    <td>\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"k.kosten\" name=\"kosten-{{in}}\">\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <td colspan=\"5\">\n                      <mfBootstrapPaginator [rowsOnPageSet]=\"[10,20,100]\">test</mfBootstrapPaginator>\n                    </td>\n                  </tr>\n                </tfoot>\n                </table>\n            </div>\n          </div>\n\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Wollen Sie wirklich löschen?</h4>\n      </div>\n      <div class=\"modal-body\">\n        <button class=\"btn btn-danger btn-block\" data-dismiss=\"modal\" title=\"Löschen\" (click)=\"delete(projekt)\"> Löschen </button>\n        <button class=\"btn btn-info btn-block\" data-dismiss=\"modal\" title=\"a\"> Abbrechen </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row \">\n    <div class=\"col-sm-4\">\n        <app-inka2-admin>\n        </app-inka2-admin>\n    </div>\n    <div class=\"col-sm-8\">\n        <div>\n            <div class=\"row\">\n                <div class=\"enlarge col-sm-5 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#bb0000\"> {{message.fehler}} </div>\n                <div class=\"enlarge col-sm-4 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#000000\"> {{message.ok}} </div>\n                <div class=\"col-sm-1\"><button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"rückgängig\" (click)=\"read()\" align=\"right\"> <i class=\"glyphicon glyphicon-refresh\"> </i></button></div>\n                <div class=\"col-sm-1\">\n                    <button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"speichern\" (click)=\"update(projekt)\" align=\"right\"\n                        [disabled]=\"!f.form.valid\"> <i class=\"glyphicon glyphicon-ok\">  </i></button>\n                </div>\n                <div class=\"col-sm-1\">\n                    <button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"löschen\" data-toggle=\"modal\" data-target=\"#myModal\" align=\"right\"> <i class=\"glyphicon glyphicon-remove\"> </i></button>\n                </div>\n            </div>\n            <h3 style=\"text-align:center\">LAK Teil B</h3>\n            <form class=\"form form-horizontal\" name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n                <fieldset>\n                    <div class=\"row\">\n                        <label for=\"projektNr\" class=\"control-label col-sm-4\">Projekt Nr. *</label>\n                        <div class=\"col-sm-4\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"projektNr\" [(ngModel)]=\"projekt.projektNr\" name=\"projektNr\" required>\n                        </div>\n                        <div *ngIf=\"f?.controls?.projektNr?.hasError('')\">\n                            Dieses Feld ist ein Pflichtfeld.\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"projektName\" class=\"control-label col-sm-4\">Projektname</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"projektName\" [(ngModel)]=\"projekt.projektName\" name=\"projektName\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"auftraggeber\" class=\"control-label col-sm-4\">Auftraggeber *</label>\n                        <div class=\"col-sm-8\">\n                            <!--input type=\"text\" class=\"form-control  text-left\" id=\"projektName\"  [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"-->\n                            <select class=\"input-large form-control\" id=\"auftraggeber\" [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\" required>\n              <option  value=\"KompZ BauMgmt Düsseldorf\">KompZ BauMgmt Düsseldorf</option>\n              <option  value=\"KompZ BauMgmt Hannover\">KompZ BauMgmt Hannover</option>\n              <option value=\"KompZ BauMgmt Kiel\" >KompZ BauMgmt Kiel</option>\n              <option  value=\"KompZ BauMgmt München\">KompZ BauMgmt München</option>\n              <option  value=\"KompZ BauMgmt Strausberg\">KompZ BauMgmt Strausberg</option>\n              <option value=\"KompZ BauMgmt Stuttgart\" >KompZ BauMgmt Stuttgart</option>\n              <option  value=\"WBV Nord\">WBV Nord</option>\n              <option  value=\"WBV Ost\">WBV Ost</option>\n              <option  value=\"WBV Süd\">WBV Süd</option>\n              <option value=\"WBV West\" >WBV West</option>\n              </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"durchfStelle\" class=\"control-label col-sm-4\">Durchf. Stelle</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"durchfStelle\" [(ngModel)]=\"projekt.durchfStelle\" name=\"durchfStelle\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"bemerkung\" class=\"control-label col-sm-4\">Kommentar durchführende Stelle</label>\n                        <div class=\"col-sm-8\">\n                            <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"bemerkung\" [(ngModel)]=\"projekt.bemerkung\" name=\"bemerkung\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"projektLeiter\" class=\"control-label col-sm-4\">Sachbearb. BdE (Fz)</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"projektLeiter\" [(ngModel)]=\"projekt.projektLeiter\" name=\"projektLeiter\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"beginn\" class=\"control-label col-sm-4\">Beauftragung</label>\n                        <div class=\"col-sm-4\">\n                            <input type=\"date\" class=\"form-control  text-left\" id=\"beginn\" [(ngModel)]=\"projekt.beginn\" name=\"beginn\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"ende\" class=\"control-label col-sm-4\">Fertigstellung</label>\n                        <div class=\"col-sm-4\">\n                            <input type=\"date\" class=\"form-control  text-left\" id=\"ende\" [(ngModel)]=\"projekt.ende\" name=\"ende\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"status\" class=\"control-label col-sm-4\">Status *</label>\n\n                        <div class=\"col-sm-4\">\n                            <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n                            <select class=\"input-large form-control\" id=\"status\" [(ngModel)]=\"projekt.status\" name=\"status\" required>\n              <option value=\"geplant\" >geplant</option>\n              <option  value=\"FfE beauftragt\">FfE beauftragt</option>\n              <option  value=\"BdE beauftragt\">BdE beauftragt</option>\n              <option  value=\"fertiggestellt\">fertiggestellt</option> </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"extAuftragnehmer\" class=\"control-label col-sm-4\">Ing.-Büro</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"extAuftragnehmer\" [(ngModel)]=\"projekt.extAuftragnehmer\" name=\"extAuftragnehmer\">\n                        </div>\n                    </div>\n                    <div style=\"background-color:#e0e0f0\">\n                        <div class=\"row\">\n                            <label class=\"control-label col-sm-4\">Baumaßnahmen</label>\n                        </div>\n\n                        <div class=\"row\">\n                            <label for=\"baumassnahmeBeginn\" class=\"control-label col-sm-4\">Beginn</label>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control  text-left\" id=\"baumassnahmeBeginn\" [(ngModel)]=\"projekt.baumassnahmeBeginn\" name=\"baumassnahmeBeginn\">\n                            </div>\n                            <label for=\"baumassnahmeEnde\" class=\"control-label col-sm-1\">Ende</label>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control  text-left\" id=\"baumassnahmeEnde\" [(ngModel)]=\"projekt.baumassnahmeEnde\" name=\"baumassnahmeEnde\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"baumassnahmeNr\" class=\"control-label col-sm-4\"> Nummer(n)</label>\n                            <div class=\"col-sm-8\">\n                                <input type=\"text\" class=\"form-control  text-left\" id=\"baumassnahmeNr\" [(ngModel)]=\"projekt.baumassnahmeNr\" name=\"baumassnahmeNr\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"baumassnahmeKosten\" class=\"control-label col-sm-4\"> Geschätzte Kosten</label>\n                            <div class=\"col-sm-3\">\n                                <input type=\"number\" class=\"form-control  text-left\" id=\"baumassnahmeKosten\" [(ngModel)]=\"projekt.baumassnahmeKosten\" name=\"baumassnahmeKosten\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <table *ngIf=\"projekt.kosten!=null && projekt.kosten.length>0\" class=\"table table-striped table-hover\" [mfData]=\"projekt.kosten\"\n                                #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                                <thead>\n                                    <th align=\"center\">\n                                        <mfDefaultSorter by=\"kostenart\">Kostenart</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"kosten\" align=\"right\">Kosten (Brutto)</mfDefaultSorter>\n                                    </th>\n                                </thead>\n                                <tbody>\n\n                                    <tr *ngFor=\"let k of mf.data\">\n                                        <td>{{k.kostenart}}</td>\n                                        <td>\n                                            <input type=\"number\" class=\"form-control\" id=\"kosten\" [(ngModel)]=\"k.kosten\" name=\"kosten\">\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tfoot>\n                                    <tr>\n                                        <td colspan=\"5\">\n                                            <mfBootstrapPaginator [rowsOnPageSet]=\"[10,20,100]\">test</mfBootstrapPaginator>\n                                        </td>\n                                    </tr>\n                                </tfoot>\n                                </table>\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Wollen Sie wirklich löschen?</h4>\n      </div>\n      <div class=\"modal-body\">\n        <button class=\"btn btn-danger btn-block\" data-dismiss=\"modal\" title=\"Löschen\" (click)=\"delete(projekt)\"> Löschen </button>\n        <button class=\"btn btn-info btn-block\" data-dismiss=\"modal\" title=\"a\"> Abbrechen </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row \">\n  <div class=\"col-sm-4\">\n    <app-inka2-admin>\n    </app-inka2-admin>\n  </div>\n  <div class=\"col-sm-8\">\n    <div>\n      <div class=\"row\">\n        <div class=\"enlarge col-sm-5 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#bb0000\"> {{message.fehler}} </div>\n        <div class=\"enlarge col-sm-4 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#000000\"> {{message.ok}} </div>\n        <div class=\"col-sm-1\"><button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"rückgängig\" (click)=\"read()\" align=\"right\"> <i class=\"glyphicon glyphicon-refresh\"> </i></button></div>\n        <div class=\"col-sm-1\"><button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"speichern\" (click)=\"update(projekt)\" align=\"right\"\n            [disabled]=\"!f.form.valid\"> <i class=\"glyphicon glyphicon-ok\" >  </i></button></div>\n        <div class=\"col-sm-1\"><button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"löschen\" data-toggle=\"modal\" data-target=\"#myModal\" align=\"right\"> <i class=\"glyphicon glyphicon-remove\"> </i></button></div>\n      </div>\n      <h3 style=\"text-align:center\">LAK für kleine Liegenschaften</h3>\n      <form class=\"form form-horizontal\" name=\"f\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n        <fieldset>\n          <div class=\"row\">\n            <label for=\"projektNr\" class=\"control-label col-sm-4\">Projekt Nr. *</label>\n            <div class=\"col-sm-4\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektNr\" [(ngModel)]=\"projekt.projektNr\" name=\"projektNr\" required>\n            </div>\n            <div *ngIf=\"f?.controls?.projektNr?.hasError('')\">\n              Dieses Feld ist ein Pflichtfeld.\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"projektName\" class=\"control-label col-sm-4\">Projektname</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektName\" [(ngModel)]=\"projekt.projektName\" name=\"projektName\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"auftraggeber\" class=\"control-label col-sm-4\">Auftraggeber *</label>\n            <div class=\"col-sm-8\">\n              <!--input type=\"text\" class=\"form-control  text-left\" id=\"projektName\"  [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"-->\n              <select class=\"input-large form-control\" id=\"auftraggeber\" [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\" required>\n              <option  value=\"KompZ BauMgmt Düsseldorf\">KompZ BauMgmt Düsseldorf</option>\n              <option  value=\"KompZ BauMgmt Hannover\">KompZ BauMgmt Hannover</option>\n              <option value=\"KompZ BauMgmt Kiel\" >KompZ BauMgmt Kiel</option>\n              <option  value=\"KompZ BauMgmt München\">KompZ BauMgmt München</option>\n              <option  value=\"KompZ BauMgmt Strausberg\">KompZ BauMgmt Strausberg</option>\n              <option value=\"KompZ BauMgmt Stuttgart\" >KompZ BauMgmt Stuttgart</option>\n              <option  value=\"WBV Nord\">WBV Nord</option>\n              <option  value=\"WBV Ost\">WBV Ost</option>\n              <option  value=\"WBV Süd\">WBV Süd</option>\n              <option value=\"WBV West\" >WBV West</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"durchfStelle\" class=\"control-label col-sm-4\">Durchf. Stelle</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"durchfStelle\" [(ngModel)]=\"projekt.durchfStelle\" name=\"durchfStelle\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"bemerkung\" class=\"control-label col-sm-4\">Kommentar durchführende Stelle</label>\n            <div class=\"col-sm-8\">\n              <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"bemerkung\" [(ngModel)]=\"projekt.bemerkung\" name=\"bemerkung\"></textarea>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"projektLeiter\" class=\"control-label col-sm-4\">Sachbearb. BdE (Fz)</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektLeiter\" [(ngModel)]=\"projekt.projektLeiter\" name=\"projektLeiter\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"beginn\" class=\"control-label col-sm-4\">Beauftragung</label>\n            <div class=\"col-sm-4\">\n              <input type=\"date\" class=\"form-control  text-left\" id=\"beginn\" [(ngModel)]=\"projekt.beginn\" name=\"beginn\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"ende\" class=\"control-label col-sm-4\">Fertigstellung</label>\n            <div class=\"col-sm-4\">\n              <input type=\"date\" class=\"form-control  text-left\" id=\"ende\" [(ngModel)]=\"projekt.ende\" name=\"ende\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"status\" class=\"control-label col-sm-4\">Status</label>\n\n            <div class=\"col-sm-8\">\n              <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n              <select class=\"input-large form-control\" id=\"status\" [(ngModel)]=\"projekt.status\" name=\"status\" required>\n              <option value=\"geplant\" >geplant</option>\n              <option  value=\"FfE beauftragt\">FfE beauftragt</option>\n              <option  value=\"BdE beauftragt\">BdE beauftragt</option>\n              <option  value=\"fertiggestellt\">fertiggestellt</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"extAuftragnehmer\" class=\"control-label col-sm-4\">Ing.-Büro</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"extAuftragnehmer\" [(ngModel)]=\"projekt.extAuftragnehmer\" name=\"extAuftragnehmer\">\n            </div>\n          </div>\n          <div style=\"background-color:#e0f0e0\">\n            <div class=\"row\">\n              <label class=\"control-label col-sm-4\">Sofortmaßnahmen</label>\n            </div>\n            <div class=\"row\">\n              <label for=\"statusZkl5\" class=\"control-label col-sm-4\">Status *</label>\n              <div class=\"col-sm-8\">\n                <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n                <select class=\"input-large form-control\" id=\"statusZkl5\" [(ngModel)]=\"projekt.statusZkl5\" name=\"statusZkl5\">\n              <option  value=\"kein Bedarf\">kein Bedarf</option>\n              <option  value=\"zu veranlassen\">zu veranlassen</option>\n              <option  value=\"veranlasst\">veranlasst</option>\n              <option value=\"in Bearbeitung\">in Bearbeitung </option>\n              <option value=\"abgeschlossen\">abgeschlossen</option>\n              <option value=\"unbekannt\">unbekannt</option>\n              </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"sachstandZkl5\" class=\"control-label col-sm-4\">Sachstand</label>\n\n              <div class=\"col-sm-8\">\n                <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"sachstandZkl5\" [(ngModel)]=\"projekt.sachstandZkl5\" name=\"sachstandZkl5\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"kommentarFfe\" class=\"control-label col-sm-4\">Kommentar FfE</label>\n              <div class=\"col-sm-8\">\n                <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"kommentarFfe\" [(ngModel)]=\"projekt.kommentarFfe\" name=\"kommentarFfe\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"inspektion\" class=\"control-label col-sm-4\">TV Inspektion von</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"inspektionBeginn\" [(ngModel)]=\"projekt.inspektionBeginn\" name=\"inspektionBeginn\">\n              </div>\n              <label for=\"inspektionEnde\" class=\"control-label col-sm-1\">bis</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"inspektionEnde\" [(ngModel)]=\"projekt.inspektionEnde\" name=\"inspektionEnde\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"inspekteur\" class=\"control-label col-sm-4\">Inspektionsfirma</label>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control  text-left\" id=\"inspekteur\" [(ngModel)]=\"projekt.inspekteur\" name=\"inspekteur\">\n              </div>\n            </div>\n          </div>\n\n          <div style=\"background-color:#e0e0f0\">\n            <div class=\"row\">\n              <label class=\"control-label col-sm-4\">Baumaßnahmen</label>\n            </div>\n\n            <div class=\"row\">\n              <label for=\"baumassnahmeBeginn\" class=\"control-label col-sm-4\">Beginn</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"baumassnahmeBeginn\" [(ngModel)]=\"projekt.baumassnahmeBeginn\" name=\"baumassnahmeBeginn\">\n              </div>\n              <label for=\"baumassnahmeEnde\" class=\"control-label col-sm-1\">Ende</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"baumassnahmeEnde\" [(ngModel)]=\"projekt.baumassnahmeEnde\" name=\"baumassnahmeEnde\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"baumassnahmeNr\" class=\"control-label col-sm-4\"> Nummer(n)</label>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control  text-left\" id=\"baumassnahmeNr\" [(ngModel)]=\"projekt.baumassnahmeNr\" name=\"baumassnahmeNr\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"baumassnahmeKosten\" class=\"control-label col-sm-4\"> Geschätzte Kosten</label>\n              <div class=\"col-sm-3\">\n                <input type=\"number\" class=\"form-control  text-left\" id=\"baumassnahmeKosten\" [(ngModel)]=\"projekt.baumassnahmeKosten\" name=\"baumassnahmeKosten\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <table *ngIf=\"projekt.kosten!=null && projekt.kosten.length>0\" class=\"table table-striped table-hover\" [mfData]=\"projekt.kosten\"\n                #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                <thead>\n                  <th align=\"center\">\n                    <mfDefaultSorter by=\"kostenart\">Kostenart</mfDefaultSorter>\n                  </th>\n                  <th>\n                    <mfDefaultSorter by=\"kosten\" align=\"right\">Kosten (Brutto)</mfDefaultSorter>\n                  </th>\n                </thead>\n                <tbody>\n\n                  <tr *ngFor=\"let k of mf.data ; let in = index\">\n                    <td>{{k.kostenart}}</td>\n                    <td>\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"k.kosten\" name=\"kosten-{{in}}\">\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <td colspan=\"5\">\n                      <mfBootstrapPaginator [rowsOnPageSet]=\"[10,20,100]\">test</mfBootstrapPaginator>\n                    </td>\n                  </tr>\n                </tfoot>\n              </table>\n            </div>\n          </div>\n\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-color:#d0d0d0\">\n  <!-- Trigger the modal with a button -->\n\n  <!-- Modal -->\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Projekt anlegen</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bitte wählen Sie die Art des Projektes</p>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"LAK Teil A\" (click)=\"navigateA(null)\"> LAK Teil A </button>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"LAK Teil B\" (click)=\"navigateB(null)\"> LAK Teil B </button>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"LAK für kleine Liegenschaften\" (click)=\"navigateFkl(null)\" > LAK für kleine Liegenschaften </button>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"Untersuchung\" (click)=\"navigateUntersuchung(null)\"> Untersuchung</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-striped table-hover\" [mfData]=\"wes\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n    <thead>\n      <!--th align=\"right\">Id</th-->\n      <th align=\"center\">\n        <mfDefaultSorter by=\"phase\">Phase</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"projektNr\">Projekt-Nr.</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"projektName\">Projektname</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"beginn\">Beginn</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"ende\">Ende</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"leiter\">Projektleiter</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"kosten\">Kosten</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"status\">Status</mfDefaultSorter>\n      </th>\n      <th align=\"center\"></th>\n \n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let p of projekte\">\n        <!--td align=\"center\">{{user.id}}</td-->\n        <td>{{p.phase}}</td>\n        <td>{{p.projektNr}}</td>\n        <td>{{p.projektName}}</td>\n        <td>{{toDate(p.beginn)}}</td>\n        <td>{{toDate(p.ende)}}</td>\n        <td>{{p.projektLeiter}}</td>\n        <td>{{p.kostenBrutto}}</td>\n        <td>{{p.status}}</td>\n\n        <td>\n          <div class=\"pull-right\">\n            <button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"bearbeiten\" (click)=\"navigate(p)\">\n            <span div class=\"glyphicon glyphicon-pencil\"></span>\n           </button>\n          </div>\n        </td>\n        \n      </tr>\n      <tr>\n        <!--td align=\"center\">{{user.id}}</td-->\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n\n        <td>\n          <div class=\"pull-right\">\n            <button type=\"button\" class=\"btn btn-primary \" data-toggle=\"modal\" data-target=\"#myModal\">\n\n            <span div class=\"glyphicon glyphicon-plus\"></span>\n           </button>\n          </div>\n        </td>\n       \n      </tr>\n\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan=\"5\">\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n        </td>\n      </tr>\n    </tfoot>\n  </table>\n</div>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-color:#d0d0d0\">\n  <h3>Suche nach Wirtschaftseinheiten</h3>\n  <form class=\"form form-horizontal\">\n    <fieldset>\n      <div class=\"row\">\n        <div class=\"form-group col-sm-3\">\n          <label for=\"liegenschaftNr\" class=\"control-label col-xs-8\">Liegenschaft-Nr.:</label>\n          <input type=\"text\" class=\" col-xs-4 text-left\" id=\"liegenschaftNr\" size=30  [(ngModel)]=\"we.liegenschaftNr\" name=\"liegenschaftNr\">\n        </div>\n        <div class=\"form-group col-sm-2\">\n          <label for=\"weNrBw\" class=\"control-label col-xs-7\">BW:</label>\n          <input type=\"text\" class=\" col-xs-5 text-left\" id=\"weNrBw\" size=30  [(ngModel)]=\"we.weNrBw\" name=\"weNrBw\">\n        </div>\n        <div class=\"form-group col-sm-2\">\n          <label for=\"weNrBima\" class=\"control-label col-xs-7\">BImA:</label>\n          <input type=\"text\" class=\" col-xs-5 text-left\" id=\"weNrBima\" size=30  [(ngModel)]=\"we.weNrBima\" name=\"weNrBima\">\n        </div>\n\n        <div class=\"form-group col-sm-4\">\n          <label for=\"bezeichnung\" class=\"control-label col-xs-5\">Bezeichnung:</label>\n          <input type=\"text\" class=\"col-xs-7\" id=\"bezeichnung\" size=30  [(ngModel)]=\"we.bezeichnung\" name=\"bezeichnung\">\n        </div>\n        <div class=\"form-group col-sm-1\">\n          <div>\n            <button  class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"suchen\" (click)=\"search()\">\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin fa-1x\"> </i>\n              <span div *ngIf=\"!loading\" class=\"glyphicon glyphicon-search\"></span>\n            </button>\n            <!--a class=\"enlarge \" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"delete(we)\"> <i class=\"fa fa-eraser fa-2x\" style=\"color:#bb0000\"> </i></a-->\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-sm-4\">\n          <label for=\"abwasserspezifischeInfos\" class=\"control-label col-sm-8\">abwasserspezifische Informationen:</label>\n          <input type=\"checkbox\" class=\"col-sm-2\" id=\"abwasserspezifischeInfos\"  style=\"vertical-align:baseline;\"  [(ngModel)]=\"we.abwasserspezifischeInfos\"\n            name=\"abwasserspezifischeInfos\">\n        </div>\n        <div class=\"form-group col-sm-4\">\n          <label for=\"imSDM\" class=\"control-label col-sm-10\">Bundeswehr Liegenschaft:</label>\n          <input type=\"checkbox\" class=\"col-sm-2\" id=\"imSDM\"  [(ngModel)]=\"we.imSDM\" name=\"imSDM\">\n        </div>\n        <div class=\"form-group col-sm-4\">\n          <label for=\"imBima\" class=\"control-label col-sm-10\">BImA Liegenschaft:          </label>\n          <input type=\"checkbox\" class=\"col-sm-2\"  id=\"imBima\"  [(ngModel)]=\"we.imBima\" name=\"imBima\">\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n<table *ngIf=\"wes!=null && wes.length>0\" class=\"table table-striped table-hover\" [mfData]=\"wes\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n\n  <thead>\n    <!--th align=\"right\">Id</th-->\n    <!--th align=\"center\">Liegenschafts-Nr.</th>\n    <th align=\"center\">Bundeswehr WE</th>\n    <th align=\"center\">BIMA WE</th-->\n    <th align=\"center\">\n      <mfDefaultSorter by=\"liegenschaftNr\">Lieg.-Nr.</mfDefaultSorter>\n    </th>\n    <th align=\"center\">\n      <mfDefaultSorter by=\"weNrBw\">BW WE</mfDefaultSorter>\n    </th>\n    <th align=\"center\">\n      <mfDefaultSorter by=\"weNrBima\">BIMA WE</mfDefaultSorter>\n    </th>\n    <th align=\"center\">\n      <mfDefaultSorter by=\"bezeichnung\">Bezeichnung</mfDefaultSorter>\n    </th>\n    <th class=\"pull-right\"></th>\n\n  </thead>\n  <tbody>\n\n    <tr *ngFor=\"let we of mf.data\" (mousedown)=\"onSelection(we)\">\n      <td>{{we.liegenschaftNr}}</td>\n      <td>{{we.weNrBw}}</td>\n      <td>{{we.weNrBima}}</td>\n      <td>{{we.bezeichnung}}</td>\n      <td>\n        <div class=\"pull-right\">\n           <button  class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"bearbeiten\" (click)=\"navigate(we)\">\n            <span div class=\"glyphicon glyphicon-pencil\"></span>\n           </button>\n\n          <!--a class=\"enlarge \" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"delete(we)\"> <i class=\"fa fa-eraser fa-2x\" style=\"color:#bb0000\"> </i></a-->\n        </div>\n      </td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"5\">\n        <mfBootstrapPaginator [rowsOnPageSet]=\"[10,20,100]\">test</mfBootstrapPaginator>\n      </td>\n    </tr>\n  </tfoot>\n</table>\n<p align=\"center\" style=\"color:gray\" *ngIf=\"loading != false\">Liegenschaften werden geladen</p>\n<p align=\"center\" style=\"color:gray\" *ngIf=\"loading == false && wes!=null  && wes.length==0 \">keine Liegenschaften gefunden</p>\n<p align=\"center\" style=\"color:gray\" *ngIf=\"loading == false && wes!=null  && wes.length>0 \">{{wes.length}} Liegenschaften gefunden</p>"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<!-- Modal fuer Fehlermeldung-->\n  <div id=\"errModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Fehlermeldung</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{message.fehler}} </p>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"Meldung\"> Ok</button>\n        </div>\n      </div>\n    </div>\n  </div><div>\n  <div class=\"row\">\n    <div class=\"enlarge col-sm-5 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#bb0000\"> {{message.fehler}} </div>\n    <div class=\"enlarge col-sm-4 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#000000\"> {{message.ok}} </div>\n    <div class=\"col-sm-1\"><button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"rückgängig\" (click)=\"read()\" align=\"right\"> <i class=\"glyphicon glyphicon-refresh\"> </i></button></div>\n    <div class=\"col-sm-1\"><button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"speichern\" (click)=\"update(abw)\" align=\"right\" [disabled]=\"!f.form.valid\"    > <i class=\"glyphicon glyphicon-ok\">  </i></button></div>\n    <div class=\"col-sm-1\"><button class=\"btn btn-primary btn-block\" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"delete(abw)\" align=\"right\"> <i class=\"glyphicon glyphicon-remove\"> </i></button></div>\n  </div>\n  <h3 style=\"text-align:right\">Abwasserspezifische Informationen zur WE</h3>\n  <form class=\"form form-horizontal\" name=\"f\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n    <fieldset>\n      <div class=\"row\">\n        <label for=\"awtVorhanden\" class=\"control-label col-sm-4\">Entwässerungssys. vorhanden</label>\n        <div class=\"col-sm-8\">\n          <select class=\"input-large form-control\" id=\"awtVorhanden\"  [(ngModel)]=\"abw.awtVorhanden\" name=\"awtVorhanden\" required >\n              <!--option value=\"{{abw.awtVorhanden}}\">{{abw.awtVorhanden}}</option-->\n              <option value=\"Ja\" >Ja</option>\n              <option value=\"geringer Umfang\">geringer Umfang</option>\n              <option value=\"Nein\" >Nein</option>\n              <option value=\"keine Angabe\">keine Angabe</option>\n        </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"baujAwtanl\" class=\"control-label col-sm-4\">Baujahr</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control input4\" id=\"baujAwtanl\" size=4 maxlength=4  [(ngModel)]=\"abw.baujAwtanl\"\n            name=\"baujAwtanl\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"gesUnters\" class=\"control-label col-sm-4\">gesetzl. geford. Erstüberprüfung</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" class=\"form-control\" id=\"gesUnters\" [(ngModel)]=\"abw.gesUnters\" name=\"gesUnters\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <label for=\"datum1Untersuchung\" class=\"control-label col-sm-4\">Erstuntersuchung</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" class=\"form-control\" id=\"datum1Untersuchung\" size=30  [(ngModel)]=\"abw.datum1untersg\" name=\"datum1Untersuchung\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <label for=\"laengeNetz\" class=\"control-label  col-sm-4\">gesamte Netzlänge [m]</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control\" id=\"laengeNetz\" size=30  [(ngModel)]=\"abw.laengeNetz\" name=\"laengeNetz\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"artAbw\" class=\"control-label col-sm-4\">Abwasserart</label>\n        <div class=\"col-sm-8\">\n          <textarea class=\"form-control\" id=\"artAbw\"  [(ngModel)]=\"abw.artAbw\" name=\"artAbw\"></textarea>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"datumLetzteUnters\" class=\"control-label  col-sm-4\">letzte Untersuchung</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" class=\"form-control\" id=\"datumLetzteUnters\" size=30  [(ngModel)]=\"abw.datumLetzteUnters\" name=\"datumLetzteUnters\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"wsz\" class=\"control-label  col-sm-4\">WSZ</label>\n        <div class=\"col-sm-8\">\n          <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n          <select class=\"input-large form-control\" id=\"wsz\"  [(ngModel)]=\"abw.wsz\" name=\"wsz\">\n              <option value=\"I\" >I</option>\n              <option value=\"II\" >II</option>\n              <option value=\"III A\" >III A</option>\n              <option value=\"III B\" >III B</option>\n              <option value=\"Nein\" >Nein</option>\n              <option value=\"Unbekannt\" >Unbekannt</option>              \n        </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"wassergefStoffe\" class=\"control-label  col-sm-4\"> wassergefährdende Stoffe</label>\n        <div class=\"col-sm-8\">\n          <input type=\"checkbox\" class=\"text-left\" id=\"wassergefStoffe\"  [(ngModel)]=\"abw.wassergefStoffe\" name=\"wassergefStoffe\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"ueberprFristen\" class=\"control-label  col-sm-4\">Überprüfungsintervall [Jahre]</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control\" id=\"ueberprFristen\" size=30  [(ngModel)]=\"abw.ueberprFristen\" name=\"ueberprFristen\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"einlArt\" class=\"control-label  col-sm-4\">Einleitungsart</label>\n        <div class=\"col-sm-8\">\n          <textarea type=\"text\" class=\"form-control\" id=\"einlArt\" size=6  [(ngModel)]=\"abw.einlArt\" name=\"einlArt\"></textarea>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"gsb\" class=\"control-label  col-sm-4\"> Gewässerschutzbeauftr. erf.</label>\n        <div class=\"col-sm-8\">\n          <input type=\"checkbox\" class=\"text-left\" id=\"gsb\"  [(ngModel)]=\"abw.gsb\" name=\"gsb\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"naechstesLak\" class=\"control-label col-sm-4\">nächstes LAK geplant [Jahr]</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control input4\" id=\"naechstesLak\" size=4  [(ngModel)]=\"abw.naechstesLak\" name=\"naechstesLak\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"naechsteUnters\" class=\"control-label col-sm-4\">nächste Untersuchung</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" class=\"form-control\" id=\"naechsteUnters\"  [(ngModel)]=\"abw.naechsteUnters\" name=\"naechsteUnters\">\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-color:#d0d0d0\">\n  <h3>Wirtschaftseinheit</h3>\n\n  <form class=\"form-horizontal\">\n    <fieldset>\n      <p>{{we.liegenschaftNr}} {{we.bezeichnung}}</p>\n      <p>{{we.bundesland}} </p>\n      <p>{{we.regbez}} </p>\n      <p>{{we.plz}} {{we.ort}} </p>\n      <p>Fläche [ha]: {{we.flaeche}} </p>\n\n        <p>\n          FfE:<br>{{we.ffe}}<br>{{we.ffeAdresse}}\n        </p>\n        <p>\n          BdE:<br>{{we.bde}}<br>{{we.bdeAdresse}}\n        </p>\n      \n      <div style=\"background-color:#50a050; margin:5px; \">\n        <p ><strong>\n          Bundeswehr\n          </strong>\n        </p>\n        <p>\n          WE: {{we.weNrBw}} {{we.bezeichnungBw}}\n        </p>\n        <p>\n          Kompetenzzentrum {{we.kompz}}\n        </p>\n        <p>\n          BwDLZ:{{we.bwdlz}}\n        </p>\n        <p>\n          HBT: {{we.hbt}}\n        </p>\n        \n      </div>\n     <div style=\"background-color:#9090f0; margin:5px; \">\n        <p ><strong>\n          BImA\n          </strong>\n        </p>\n        <p>\n          WE: {{we.weNrBima}} {{we.bezeichnungBima}}\n        </p>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row \">\n    <div class=\"form-group col-sm-4\">\n      <app-inka2-admin>\n      </app-inka2-admin>\n      <!--app-map></app-map-->\n    </div>\n    <div class=\"form-group col-sm-8\">\n      <app-inka2-abwasser>\n      </app-inka2-abwasser>\n    </div>\n  </div>\n  <app-inka-lak-liste>\n  </app-inka-lak-liste>\n</div>"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-6 col-md-offset-3\">\n    <div class=\"alert alert-info\">\n        <br />\n        \n    </div>\n    <h2>Anmeldung</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Benutzer</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.name\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Benutzername ist erforderlich</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Passwort</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Ein Passwort ist erforderlich</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Anmelden</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n    </form>\n    \n</div>"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "\n <!-- BING example select id=\"layer-select\">\n       <option value=\"Aerial\">Aerial</option>\n       <option value=\"AerialWithLabels\" selected>Aerial with labels</option>\n       <option value=\"Road\">Road</option>\n       <option value=\"collinsBart\">Collins Bart</option>\n       <option value=\"ordnanceSurvey\">Ordnance Survey</option>\n     </select-->\n<div id=\"map\" name=\"map\"  class=\"map\"></div>\n<div><input type=\"checkbox\" class=\"text-left\" id=\"bingVisible\"  [(ngModel)]=\"bingVisible\" name=\"bingVisible\" (click)=\"toggleBing()\">Bing</div>"

/***/ })

},[1022]);
//# sourceMappingURL=main.bundle.map