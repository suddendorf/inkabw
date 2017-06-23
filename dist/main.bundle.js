webpackJsonp([1,4],{

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 128;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LISA2Component; });
var LISA2Component = (function () {
    function LISA2Component() {
    }
    LISA2Component.prototype.toDate = function (d) {
        //   console.log(d);
        if (d != null) {
            if (d instanceof Date) {
                return d.toLocaleDateString();
            }
            else if (d instanceof String) {
                var s = d;
                if (s.length > 0) {
                    d = new Date(s.toString());
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(217);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/main.js.map

/***/ }),

/***/ 215:
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__security_service__ = __webpack_require__(57);
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
    }
    AppComponent.prototype.ngOnInit = function () {
        this.securityService.checkLogin();
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(403),
        styles: [__webpack_require__(391)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/app.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inka_lak_liste_inka_lak_liste_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inka2_abwasser_inka2_abwasser_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inka2_we_inka2_we_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inka2_admin_inka2_admin_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inka_lak_a_inka_lak_a_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__inka_we_suche_inka_we_suche_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__inka_lak_b_inka_lak_b_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__inka_lak_fkl_inka_lak_fkl_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__error_error_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_datatable__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__map_map_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_2_dropdown_multiselect__ = __webpack_require__(235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    return AppModule;
}());
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
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_20_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__security_service__["a" /* SecurityService */], __WEBPACK_IMPORTED_MODULE_5__security_logged_in_guard__["a" /* LoggedInGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/app.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
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
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(404),
        styles: [__webpack_require__(392)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/error.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_collapse__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__liegenschaft_rumpf__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projektdetail_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__we__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaLakAComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function InkaLakAComponent(route, router, service, dataService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.service = service;
        _this.dataService = dataService;
        _this.projekt = new __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__["a" /* AbwProjektDetail */]();
        _this.lieg = new Array(); //sek
        _this.summeKosten = 0;
        _this.projekt.phase = 'LAK A';
        _this.route.params.subscribe(function (params) {
            _this.get(params['projektId'], params['liegenschaftId']);
        });
        return _this;
    }
    InkaLakAComponent.prototype.ngOnInit = function () {
        var c = localStorage.getItem('collapsed');
    };
    InkaLakAComponent.prototype.isLand = function () {
        return sessionStorage.getItem("userGroup") == "32";
    };
    InkaLakAComponent.prototype.isFFE = function () {
        return sessionStorage.getItem("userGroup") == "33";
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
            .subscribe(function (p) { return _this.readSekLgs(p); }, //sek
        function (//sek
            error) { return _this.message.fehler = error; });
        //sek
        if (!this.lieg || this.lieg.length == 0) {
            var we = new __WEBPACK_IMPORTED_MODULE_8__we__["a" /* WE */]();
            we.abwasserspezifischeInfos = true;
            this.dataService.searchWE(we)
                .subscribe(function (l) { return _this.assign(l); }, function (error) { return _this.message.fehler = error; });
        }
    };
    //sek
    InkaLakAComponent.prototype.assign = function (l) {
        this.lieg = new Array();
        for (var _i = 0, l_1 = l; _i < l_1.length; _i++) {
            var i = l_1[_i];
            //let bez: string = i.bezeichnung + "(Bw:" + i.weNrBw + "; BImA:" + i.weNrBima + ")";
            // let re = / /gi;
            var bez = i.bezeichnung; //.replace(re, "_");
            this.lieg.push({ id: i.liegenschaftId, title: bez, weNrBw: i.weNrBw, weNrBima: i.weNrBima, bezeichnung: i.bezeichnung });
        }
        this.summe();
    };
    InkaLakAComponent.prototype.summe = function () {
        this.summeKosten = 0;
        for (var _i = 0, _a = this.projekt.kosten; _i < _a.length; _i++) {
            var k = _a[_i];
            this.summeKosten += k.kosten;
        }
        console.log("kosten:" + this.summeKosten);
    };
    InkaLakAComponent.prototype.deleteLiegenschaft = function (l) {
        this.projekt.liegenschaften = this.projekt.liegenschaften.filter(function (obj) { return obj !== l; });
    };
    //sek
    InkaLakAComponent.prototype.addLiegenschaft = function () {
        // Workaround fuer Bug in IE10
        var ele = document.getElementById("neueLiegenschaft");
        this.neueLiegenschaft = ele.value;
        // Ende Workaround
        if (!this.neueLiegenschaft) {
            this.fehler("Bitte wählen Sie eine Liegenschaft aus.");
            return;
        }
        for (var _i = 0, _a = this.lieg; _i < _a.length; _i++) {
            var l = _a[_i];
            console.log(l.title);
            console.log(this.neueLiegenschaft);
            if (this.neueLiegenschaft == l.title) {
                var sek = new __WEBPACK_IMPORTED_MODULE_5__liegenschaft_rumpf__["a" /* LiegenschaftRumpf */]();
                sek.liegenschaftid = l.id;
                sek.rang = 2;
                sek.sdmwenr = l.weNrBw;
                sek.bimawenr = l.weNrBima;
                sek.bezeichnung = l.bezeichnung;
                for (var _b = 0, _c = this.projekt.liegenschaften; _b < _c.length; _b++) {
                    var sekAlt = _c[_b];
                    if (sekAlt.liegenschaftid == sek.liegenschaftid) {
                        this.fehler("Die Liegenschaft ist bereits zugeordnert.");
                        return;
                    }
                }
                this.projekt.liegenschaften.push(sek);
                this.neueLiegenschaft = null;
                return;
            }
        }
        this.fehler(this.neueLiegenschaft + " nicht gefunden. Bitte wählen Sie eine Liegenschaft aus der Liste aus.");
    };
    InkaLakAComponent.prototype.readSekLgs = function (p) {
        this.projekt = p;
        for (var _i = 0, _a = p.liegenschaften; _i < _a.length; _i++) {
            var l = _a[_i];
            if (l.rang == 1) {
                this.primaer = l.liegenschaftid;
            }
            console.log("Sekundäre Liegenschaft:" + l.liegenschaftid + ":" + l.rang);
        }
    };
    InkaLakAComponent.prototype.checkPrimaer = function (l) {
        var ok = this.primaer == l.liegenschaftid;
        return ok;
    };
    InkaLakAComponent.prototype.update = function (p) {
        var _this = this;
        this.summe();
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            if (!p.projektNr) {
                this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
                return;
            }
            if (p.status == 'Altdaten') {
                this.message.fehler = 'Der Status Altdaten ist bei der Datensatzänderung nicht erlaubt.';
                return;
            }
            console.log(JSON.stringify(p.kosten));
            //sek
            for (var _i = 0, _a = p.liegenschaften; _i < _a.length; _i++) {
                var l = _a[_i];
                if (l.liegenschaftid == this.primaer) {
                    l.rang = 1;
                }
                else {
                    l.rang = 2;
                }
            }
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
    return InkaLakAComponent;
}(__WEBPACK_IMPORTED_MODULE_3__toggle_collapse__["a" /* ToggleCollapse */]));
InkaLakAComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inka-lak-a',
        providers: [__WEBPACK_IMPORTED_MODULE_6__projektdetail_service__["a" /* ProjektdetailService */], __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
        template: __webpack_require__(405),
        styles: [__webpack_require__(393)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__projektdetail_service__["a" /* ProjektdetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__projektdetail_service__["a" /* ProjektdetailService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]) === "function" && _d || Object])
], InkaLakAComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-lak-a.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_collapse__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__liegenschaft_rumpf__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__we__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaLakBComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function InkaLakBComponent(route, router, service, dataService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.service = service;
        _this.dataService = dataService;
        _this.projekt = new __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__["a" /* AbwProjektDetail */]();
        _this.lieg = new Array(); //sek
        _this.projekt.phase = 'LAK B';
        _this.route.params.subscribe(function (params) {
            _this.get(params['projektId'], params['liegenschaftId']);
        });
        return _this;
    }
    InkaLakBComponent.prototype.ngOnInit = function () {
    };
    InkaLakBComponent.prototype.isLand = function () {
        return sessionStorage.getItem("userGroup") == "32";
    };
    InkaLakBComponent.prototype.isFFE = function () {
        return sessionStorage.getItem("userGroup") == "33";
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
            .subscribe(function (p) { return _this.readSekLgs(p); }, //sek,
        function (//sek,
            error) { return _this.message.fehler = error; });
        //sek
        if (this.lieg.length == 0) {
            var we = new __WEBPACK_IMPORTED_MODULE_8__we__["a" /* WE */]();
            we.abwasserspezifischeInfos = true;
            this.dataService.searchWE(we)
                .subscribe(function (l) { return _this.assign(l); }, function (error) { return _this.message.fehler = error; });
        }
    };
    //sek
    InkaLakBComponent.prototype.assign = function (l) {
        this.lieg = new Array();
        for (var _i = 0, l_1 = l; _i < l_1.length; _i++) {
            var i = l_1[_i];
            //let bez: string = i.bezeichnung + "(Bw:" + i.weNrBw + "; BImA:" + i.weNrBima + ")";
            // let re = / /gi;
            var bez = i.bezeichnung; //.replace(re, "_");
            this.lieg.push({ id: i.liegenschaftId, title: bez, weNrBw: i.weNrBw, weNrBima: i.weNrBima, bezeichnung: i.bezeichnung });
        }
    }; //sek
    InkaLakBComponent.prototype.addLiegenschaft = function () {
        // Workaround fuer Bug in IE10
        var ele = document.getElementById("neueLiegenschaft");
        this.neueLiegenschaft = ele.value;
        // Ende Workaround
        if (!this.neueLiegenschaft) {
            this.fehler("Bitte wählen Sie eine Liegenschaft aus.");
            return;
        }
        for (var _i = 0, _a = this.lieg; _i < _a.length; _i++) {
            var l = _a[_i];
            console.log(l.title);
            console.log(this.neueLiegenschaft);
            if (this.neueLiegenschaft == l.title) {
                var sek = new __WEBPACK_IMPORTED_MODULE_6__liegenschaft_rumpf__["a" /* LiegenschaftRumpf */]();
                sek.liegenschaftid = l.id;
                sek.rang = 2;
                sek.sdmwenr = l.weNrBw;
                sek.bimawenr = l.weNrBima;
                sek.bezeichnung = l.bezeichnung;
                for (var _b = 0, _c = this.projekt.liegenschaften; _b < _c.length; _b++) {
                    var sekAlt = _c[_b];
                    if (sekAlt.liegenschaftid == sek.liegenschaftid) {
                        this.fehler("Die Liegenschaft ist bereits zugeordnert.");
                        return;
                    }
                }
                this.projekt.liegenschaften.push(sek);
                this.neueLiegenschaft = null;
                return;
            }
        }
        this.fehler(this.neueLiegenschaft + " nicht gefunden. Bitte wählen Sie eine Liegenschaft aus der Liste aus.");
    };
    //sek
    InkaLakBComponent.prototype.readSekLgs = function (p) {
        this.projekt = p;
        for (var _i = 0, _a = p.liegenschaften; _i < _a.length; _i++) {
            var l = _a[_i];
            if (l.rang == 1) {
                this.primaer = l.liegenschaftid;
            }
            console.log("Sekundäre Liegenschaft:" + l.liegenschaftid + ":" + l.rang);
        }
    };
    //sek
    InkaLakBComponent.prototype.checkPrimaer = function (l) {
        var ok = this.primaer == l.liegenschaftid;
        return ok;
    };
    InkaLakBComponent.prototype.update = function (p) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            if (!p.projektNr) {
                this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
                return;
            }
            if (p.status == 'Altdaten') {
                this.message.fehler = 'Der Status Altdaten ist bei der Datensatzänderung nicht erlaubt.';
                return;
            }
            //sek
            for (var _i = 0, _a = p.liegenschaften; _i < _a.length; _i++) {
                var l = _a[_i];
                if (l.liegenschaftid == this.primaer) {
                    l.rang = 1;
                }
                else {
                    l.rang = 2;
                }
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
    return InkaLakBComponent;
}(__WEBPACK_IMPORTED_MODULE_3__toggle_collapse__["a" /* ToggleCollapse */]));
InkaLakBComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inka-lak-b',
        providers: [__WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */], __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
        template: __webpack_require__(406),
        styles: [__webpack_require__(394)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]) === "function" && _d || Object])
], InkaLakBComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-lak-b.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_collapse__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__liegenschaft_rumpf__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__we__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaLakFklComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function InkaLakFklComponent(route, router, service, dataService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.service = service;
        _this.dataService = dataService;
        _this.projekt = new __WEBPACK_IMPORTED_MODULE_4__abw_projekt_detail__["a" /* AbwProjektDetail */]();
        _this.lieg = new Array(); //sek
        _this.summeKosten = 0;
        _this.projekt.phase = 'LAK KL';
        _this.route.params.subscribe(function (params) {
            _this.get(params['projektId'], params['liegenschaftId']);
        });
        return _this;
    }
    InkaLakFklComponent.prototype.ngOnInit = function () {
    };
    InkaLakFklComponent.prototype.summe = function () {
        this.summeKosten = 0;
        if (this.projekt && this.projekt.kosten) {
            for (var _i = 0, _a = this.projekt.kosten; _i < _a.length; _i++) {
                var k = _a[_i];
                this.summeKosten += k.kosten;
            }
            console.log("kosten:" + this.summeKosten);
        }
    };
    InkaLakFklComponent.prototype.isLand = function () {
        return sessionStorage.getItem("userGroup") == "32";
    };
    InkaLakFklComponent.prototype.isFFE = function () {
        return sessionStorage.getItem("userGroup") == "33";
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
            .subscribe(function (p) { return _this.readSekLgs(p); }, //sek
        function (//sek
            error) { return _this.message.fehler = error; });
        //sek
        if (this.lieg.length == 0) {
            var we = new __WEBPACK_IMPORTED_MODULE_8__we__["a" /* WE */]();
            we.abwasserspezifischeInfos = true;
            this.dataService.searchWE(we)
                .subscribe(function (l) { return _this.assign(l); }, function (error) { return _this.message.fehler = error; });
        }
    };
    //sek
    InkaLakFklComponent.prototype.assign = function (l) {
        this.lieg = new Array();
        for (var _i = 0, l_1 = l; _i < l_1.length; _i++) {
            var i = l_1[_i];
            //let bez: string = i.bezeichnung + "(Bw:" + i.weNrBw + "; BImA:" + i.weNrBima + ")";
            // let re = / /gi;
            var bez = i.bezeichnung; //.replace(re, "_");
            this.lieg.push({ id: i.liegenschaftId, title: bez, weNrBw: i.weNrBw, weNrBima: i.weNrBima, bezeichnung: i.bezeichnung });
        }
    }; //sek
    InkaLakFklComponent.prototype.addLiegenschaft = function () {
        // Workaround fuer Bug in IE10
        var ele = document.getElementById("neueLiegenschaft");
        this.neueLiegenschaft = ele.value;
        // Ende Workaround
        if (!this.neueLiegenschaft) {
            this.fehler("Bitte wählen Sie eine Liegenschaft aus.");
            return;
        }
        for (var _i = 0, _a = this.lieg; _i < _a.length; _i++) {
            var l = _a[_i];
            console.log(l.title);
            console.log(this.neueLiegenschaft);
            if (this.neueLiegenschaft == l.title) {
                var sek = new __WEBPACK_IMPORTED_MODULE_6__liegenschaft_rumpf__["a" /* LiegenschaftRumpf */]();
                sek.liegenschaftid = l.id;
                sek.rang = 2;
                sek.sdmwenr = l.weNrBw;
                sek.bimawenr = l.weNrBima;
                sek.bezeichnung = l.bezeichnung;
                for (var _b = 0, _c = this.projekt.liegenschaften; _b < _c.length; _b++) {
                    var sekAlt = _c[_b];
                    if (sekAlt.liegenschaftid == sek.liegenschaftid) {
                        this.fehler("Die Liegenschaft ist bereits zugeordnert.");
                        return;
                    }
                }
                this.projekt.liegenschaften.push(sek);
                this.neueLiegenschaft = null;
                return;
            }
        }
        this.fehler(this.neueLiegenschaft + " nicht gefunden. Bitte wählen Sie eine Liegenschaft aus der Liste aus.");
    };
    //sek
    InkaLakFklComponent.prototype.readSekLgs = function (p) {
        this.projekt = p;
        for (var _i = 0, _a = p.liegenschaften; _i < _a.length; _i++) {
            var l = _a[_i];
            if (l.rang == 1) {
                this.primaer = l.liegenschaftid;
            }
            console.log("Sekundäre Liegenschaft:" + l.liegenschaftid + ":" + l.rang);
        }
    };
    //sek
    InkaLakFklComponent.prototype.checkPrimaer = function (l) {
        var ok = this.primaer == l.liegenschaftid;
        return ok;
    };
    InkaLakFklComponent.prototype.update = function (p) {
        var _this = this;
        this.summe();
        this.message = new __WEBPACK_IMPORTED_MODULE_2__message__["a" /* Message */]();
        if (p != null) {
            if (!p.projektNr) {
                this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
                return;
            }
            if (p.status == 'Altdaten') {
                this.message.fehler = 'Der Status Altdaten ist bei der Datensatzänderung nicht erlaubt.';
                return;
            }
            console.log(JSON.stringify(p));
            //sek
            for (var _i = 0, _a = p.liegenschaften; _i < _a.length; _i++) {
                var l = _a[_i];
                if (l.liegenschaftid == this.primaer) {
                    l.rang = 1;
                }
                else {
                    l.rang = 2;
                }
            }
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
    return InkaLakFklComponent;
}(__WEBPACK_IMPORTED_MODULE_3__toggle_collapse__["a" /* ToggleCollapse */]));
InkaLakFklComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inka-lak-fkl',
        providers: [__WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */], __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
        template: __webpack_require__(407),
        styles: [__webpack_require__(395)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__projektdetail_service__["a" /* ProjektdetailService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]) === "function" && _d || Object])
], InkaLakFklComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-lak-fkl.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lisa2_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lak_liste_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkaLakListeComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.service = service;
        _this.loading = false;
        return _this;
    }
    InkaLakListeComponent.prototype.isLand = function () {
        return sessionStorage.getItem("userGroup") == "32";
    };
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
            this.liegenschaftId = sessionStorage.getItem('liegenschaftId');
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
    return InkaLakListeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__lisa2_component__["a" /* LISA2Component */]));
InkaLakListeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inka-lak-liste',
        providers: [__WEBPACK_IMPORTED_MODULE_3__lak_liste_service__["a" /* LakListeService */]],
        template: __webpack_require__(408),
        styles: [__webpack_require__(396)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__lak_liste_service__["a" /* LakListeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__lak_liste_service__["a" /* LakListeService */]) === "function" && _c || Object])
], InkaLakListeComponent);

var _a, _b, _c;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-lak-liste.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abstract_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LakListeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var _this = _super.call(this, http, router) || this;
        _this.http = http;
        _this.urlLak = __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */].getWebServer() + 'ABWProjektSucheServlet';
        return _this;
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
    return LakListeService;
}(__WEBPACK_IMPORTED_MODULE_6__abstract_service__["a" /* AbstractService */]));
LakListeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LakListeService);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/lak-liste.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__security_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__we__ = __webpack_require__(51);
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
    function InkaWeSucheComponent(router, service, securityService) {
        this.router = router;
        this.service = service;
        this.securityService = securityService;
        this.loading = false;
        console.log('Konstruktor WE Suche');
        sessionStorage.removeItem('we');
    }
    InkaWeSucheComponent.prototype.ngOnInit = function () {
        this.securityService.checkLogin();
        console.log('init WE Suche');
        console.log('init WE Suche:' + this.we);
        this.loading = false;
        if (this.we == null) {
            this.we = new __WEBPACK_IMPORTED_MODULE_4__we__["a" /* WE */]();
        }
        this.we.abwasserspezifischeInfos = true;
        var sWe = sessionStorage.getItem('we.bezeichnung');
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
        sessionStorage.setItem('we.bezeichnung', this.we.bezeichnung); //suchparameter
        sessionStorage.setItem('title', u.bezeichnung + " (Bw:" + u.weNrBw + "; BImA:" + u.weNrBima + ")");
    };
    InkaWeSucheComponent.prototype.navigate = function (we) {
        console.log('WE-Suche: ' + we);
        var id = we.liegenschaftId;
        sessionStorage.setItem('liegenschaftId', id);
        console.log('WE-Suche: ' + we.liegenschaftId);
        this.router.navigate(['/inka-we', id]);
    };
    return InkaWeSucheComponent;
}());
InkaWeSucheComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inka-we-suche',
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]],
        template: __webpack_require__(409),
        styles: [__webpack_require__(397)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__security_service__["a" /* SecurityService */]) === "function" && _c || Object])
], InkaWeSucheComponent);

var _a, _b, _c;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka-we-suche.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abstract_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbwasserService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var _this = _super.call(this, http, router) || this;
        _this.http = http;
        _this.urlABW = __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */].getWebServer() + 'AbwasserServlet';
        return _this;
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
    return AbwasserService;
}(__WEBPACK_IMPORTED_MODULE_5__abstract_service__["a" /* AbstractService */]));
AbwasserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AbwasserService);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/abwasser.service.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abwasser__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abwasser_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
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
        this.mySettings = {
            enableSearch: false,
            checkedStyle: 'glyphicon',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 5,
            displayAllSelectedText: false
        };
        this.myTexts = {
            checkAll: 'alle auswählen',
            uncheckAll: 'alle abwählen',
            checked: 'ausgewählt',
            checkedPlural: 'ausgewählt',
            searchPlaceholder: 'suchen',
            defaultTitle: 'auswählen',
            allSelected: 'alle ausgewählt',
        };
        this.route.params.subscribe(function (params) {
            _this.getAbw(params['liegenschaftId']);
        });
    }
    Inka2AbwasserComponent.prototype.ngOnInit = function () {
        this.einlArt = [
            { id: 'öffentliches Kanalnetz', name: 'öffentliches Kanalnetz' },
            { id: 'privates Kanalnetz', name: 'privates Kanalnetz' },
            { id: 'Gewässer', name: 'Gewässer' }
        ];
        this.artAbw = [
            { id: 'Regenwasser', name: 'Regenwasser' },
            { id: 'häuslich', name: 'häuslich' },
            { id: 'gewerblich oder industriell', name: 'gewerblich oder industriell' },
            { id: 'unbekannt', name: 'unbekannt' }
        ];
        //this.einlArtAuswahl=[2];
    };
    Inka2AbwasserComponent.prototype.onChange = function () {
        console.log(this.einlArtAuswahl);
    };
    Inka2AbwasserComponent.prototype.read = function () {
        this.getAbw(this.abw.liegenschaftId);
        console.log("UserGroup: " + sessionStorage.getItem("userGroup"));
    };
    Inka2AbwasserComponent.prototype.getAbw = function (liegenschaftId) {
        var _this = this;
        this.isLand = sessionStorage.getItem("userGroup") == "32";
        this.isBima = sessionStorage.getItem("userGroup") == "35";
        this.message = new __WEBPACK_IMPORTED_MODULE_1__message__["a" /* Message */]();
        console.log('ABW:' + liegenschaftId);
        if (liegenschaftId) {
            this.service.readAbw(liegenschaftId)
                .subscribe(function (abw) { return _this.readABW(abw); }, function (error) { return _this.message.fehler = error; });
        }
        else {
            var lid = sessionStorage.getItem('liegenschaftId');
            this.service.readAbw(lid)
                .subscribe(function (abw) { _this.readABW(abw); }, function (error) { return _this.message.fehler = error; });
        }
    };
    Inka2AbwasserComponent.prototype.readABW = function (abw) {
        console.log(abw);
        this.abw = abw;
        this.einlArtAuswahl = abw.einlArt;
        this.artAbwAuswahl = abw.artAbw;
    };
    Inka2AbwasserComponent.prototype.update = function (abw) {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_1__message__["a" /* Message */]();
        if (abw != null) {
            if (abw.liegenschaftId == null) {
                var lid = sessionStorage.getItem('liegenschaftId');
                abw.liegenschaftId = lid;
            }
            abw.artAbw = this.artAbwAuswahl;
            abw.einlArt = this.einlArtAuswahl;
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
    return Inka2AbwasserComponent;
}());
Inka2AbwasserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-inka2-abwasser',
        providers: [__WEBPACK_IMPORTED_MODULE_3__abwasser_service__["a" /* AbwasserService */]],
        template: __webpack_require__(410),
        styles: [__webpack_require__(398)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__abwasser_service__["a" /* AbwasserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__abwasser_service__["a" /* AbwasserService */]) === "function" && _b || Object])
], Inka2AbwasserComponent);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka2-abwasser.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__we__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__(25);
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
            var lid = sessionStorage.getItem('liegenschaftId');
            this.readWE(lid);
        }
    };
    Inka2AdminComponent.prototype.readWE = function (id) {
        var _this = this;
        this.service.readWE(id)
            .subscribe(function (we) { return _this.we = we; }, function (error) { return _this.errorMessage = error; });
    };
    return Inka2AdminComponent;
}());
Inka2AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inka2-admin',
        providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]],
        template: __webpack_require__(411),
        styles: [__webpack_require__(399)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _b || Object])
], Inka2AdminComponent);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka2-admin.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__we__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_collapse__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inka2WeComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Inka2WeComponent = (function (_super) {
    __extends(Inka2WeComponent, _super);
    function Inka2WeComponent() {
        var _this = _super.call(this) || this;
        _this.model = new __WEBPACK_IMPORTED_MODULE_1__we__["a" /* WE */]();
        return _this;
    }
    Inka2WeComponent.prototype.ngOnInit = function () {
    };
    return Inka2WeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__toggle_collapse__["a" /* ToggleCollapse */]));
Inka2WeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inka2-we',
        template: __webpack_require__(412),
        styles: [__webpack_require__(400)]
    }),
    __metadata("design:paramtypes", [])
], Inka2WeComponent);

//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/inka2-we.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(232);
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        providers: [__WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]],
        template: __webpack_require__(413),
        styles: [__webpack_require__(401)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/login.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(25);
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
        this.karte = true;
    }
    MapComponent.prototype.ngOnInit = function () {
        var lid = sessionStorage.getItem('liegenschaftId');
        console.log('init Map' + lid);
        if (this.liegenschaftId != lid) {
            this.liegenschaftId = lid;
            this.readFeature(lid);
        }
        this.title = sessionStorage.getItem('title');
    };
    MapComponent.prototype.toggleBing = function () {
        this.karte = !this.karte;
        this.bing.setVisible(!this.karte);
        this.osm.setVisible(this.karte);
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
                // use maxZoom 19 to see stretched tiles instead of the BingMaps
                // "no photos at this zoom level" tiles
                // maxZoom: 19
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
                //this.bing,
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
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]],
        template: __webpack_require__(414),
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/map.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_service__ = __webpack_require__(57);
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
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/logged-in-guard.js.map

/***/ }),

/***/ 232:
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/environment.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
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






var DataService = DataService_1 = (function () {
    function DataService(http, router) {
        this.http = http;
        this.router = router;
        // private static webServer: string = "http://192.168.137.152:8182/SQLServer/";
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
        return this.http.get(DataService_1.getWebServer() + this.urlWE, {
            search: params
        }).map(this.extractSingleWE)
            .catch(this.handleError);
    };
    DataService.prototype.readSDMGeom = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        params.set('liegenschaftId', id);
        return this.http.get(DataService_1.getWebServer() + 'WKTServlet', {
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
        if (DataService_1.getWebServer() == null) {
            this.getWebServerUrl();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var token = sessionStorage.getItem('userToken');
        var parms = JSON.stringify({ action: "search", token: token, we: we });
        var url = DataService_1.getWebServer() + this.urlABW;
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
        DataService_1.webServer = res.text();
        return DataService_1.webServer;
    };
    return DataService;
}());
DataService.webServer = "/inkabw/";
DataService = DataService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DataService);

var DataService_1, _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/data.service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = " \n.ng-invalid  {\n  border-left: 5px solid #c94442; /* red */\n}\n \n.ng-valid  {\n  border-left: 5px solid green; /* red */\n}"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = ".ng-invalid  {\n  border-left: 5px solid #c94442;\n}\n \n.ng-valid  {\n  border-left: 5px solid green; \n}"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = " \n.ng-invalid  {\n  border-left: 5px solid #c94442; /* red */\n}\n \n.ng-valid  {\n  border-left: 5px solid green; /* red */\n}"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "\ninput[type=\"checkbox\"] {\n    margin-top: 20px;\n}\n\ninput {\n    padding-left: 2px;\n    padding-right: 2px;\n}"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "\ninput[type=\"checkbox\"] {\n    margin-top: .75em;\n}\n \n.ng-invalid  {\n  border-left: 5px solid #c94442; /* red */\n}\n \n.ng-valid  {\n  border-left: 5px solid green; /* red */\n}\n.multiselect-parent .dropdown-toggle {\n  width:100%;\n}\n.multiselect-parent .dropdown-menu {\n  width:100%;\n}"

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<!--NAVBAR aus view-source:https://getbootstrap.com/examples/navbar/-->\n\n<div class=\"container\">\n    <!-- Static navbar -->\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n                    aria-controls=\"navbar\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    </button>\n                <a class=\"navbar-left\" href=\"#\"><img src=\"logo_klein.png\" alt=\"INKA Berichtswesen\" style=\"height:50px\"></a>\n            </div>\n            <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a routerLink=\"/\">Suche</a></li>\n                    <li><a routerLink=\"/inka-we\">Wirtschaftseinheit</a></li>\n                    <li><a routerLink=\"/map\" >Lage</a></li>\n<!--                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Wirtschaftseinheit <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\"  disabled>\n                            <li><a routerLink=\"/inka-we-suche\">Suchen</a></li>\n                            <li><a routerLink=\"/inka-we\" >Bearbeiten</a></li>\n                            \n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">LAK <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/inka-lak-a\">Teil A anlegen</a></li>\n                            <li><a routerLink=\"/inka-lak-b\">Teil B anlegen</a></li>\n                            <li><a routerLink=\"/inka-lak-fkl\">für kleine Liegenschaften anlegen</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                        </ul>\n                    </li>\n -->\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a href=\"/INKABWHilfe.pdf\" target=\"_blank\">Hilfe</a></li>\n                    <li><a routerLink=\"/login\" >Abmelden</a></li> \n                    <!--li><a routerLink=\"/inka-admin\" routerLinkActive=\"active\">ADMIN</a></li-->               \n                </ul>\n            </div>\n            <!--/.nav-collapse -->\n        </div>\n        <!--/.container-fluid -->\n    </nav>\n\n\n    <router-outlet>\n    </router-outlet>\n  </div>\n<!--div id=\"map\" class=\"map\"></div-->\n\n<!-- /container -->"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" style=\"color:red\">\n  Fehlermeldung\n</h1>\n{{errorMessage}}"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Wollen Sie wirklich löschen?</h4>\n      </div>\n      <div class=\"modal-body\">\n        <button class=\"btn btn-danger \" data-dismiss=\"modal\" title=\"Löschen\" (click)=\"delete(projekt)\"> Löschen </button>\n        <button class=\"btn btn-info\" data-dismiss=\"modal\" title=\"a\"> Abbrechen </button>\n      </div>\n    </div>\n  </div>\n</div>\n<h3 align=\"center\">\n  <a routerLink=\"/inka-we\">\n         {{title}}\n        </a>\n</h3>\n<div class=\"row \">\n  <div *ngIf=\"!collapse\" class=\"col-sm-4\">\n    <button class=\"btn btn-info align-baseline pull-right\" type=\"button\" (click)=\"toggleCollapse()\"> <i class=\"glyphicon glyphicon-menu-left\"></i></button>\n\n    <app-inka2-admin>\n    </app-inka2-admin>\n  </div>\n  <div *ngIf=\"collapse\" class=\"col-sm-1\">\n    <button *ngIf=\"collapse\" class=\"btn btn-info align-baseline pull-left break\" type=\"button\" (click)=\"toggleCollapse()\"> <i class=\"glyphicon glyphicon-tags\"></i></button><br>\n  </div>\n  <div [ngClass]=\"colSize()\">\n    <div>\n      <div class=\"row\">\n        <div class=\"enlarge col-sm-5 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#bb0000\"> {{message.fehler}} </div>\n        <div class=\"enlarge col-sm-4 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#000000\"> {{message.ok}} </div>\n        <div class=\"col-sm-1\">\n          <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"rückgängig\" (click)=\"read()\" align=\"right\"> <i class=\"glyphicon glyphicon-refresh\"> </i></button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"speichern\" (click)=\"update(projekt)\" align=\"right\" [disabled]=\"!f.form.valid && !(isLand() || isFFE())\"> <i class=\"glyphicon glyphicon-ok\">  </i></button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"löschen\" data-toggle=\"modal\" data-target=\"#myModal\" [disabled]=\"!isLand()\"\n            align=\"right\"> <i class=\"glyphicon glyphicon-remove\"> </i></button>\n        </div>\n      </div>\n      <h3 *ngIf=\"projekt.phase == 'LAK A'\" style=\"text-align:center\">LAK Teil A</h3>\n      <h3 *ngIf=\"projekt.phase == 'U'\" style=\"text-align:center\">Untersuchung</h3>\n      <form class=\"form form-horizontal\" name=\"f\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n        <fieldset>\n          <div class=\"row\">\n            <label for=\"projektNr\" class=\"control-label col-sm-4\">Projekt-Nr. *</label>\n            <div class=\"col-sm-4\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektNr\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektNr\"\n                name=\"projektNr\" required>\n            </div>\n            <div *ngIf=\"f?.controls?.projektNr?.hasError('')\">\n              Dieses Feld ist ein Pflichtfeld.\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"projektName\" class=\"control-label col-sm-4\">Projektname</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektName\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektName\"\n                name=\"projektName\">\n            </div>\n          </div>\n          <!-- ------------------------------------------ Sekundäre Liegenschaften ---------------------------------------------------- -->\n          <div class=\"row\">\n            <label for=\"liegenschaften\" class=\"control-label col-sm-4\">Liegenschaften</label>\n            <div class=\"col-sm-8\">\n              <table *ngIf=\"projekt.liegenschaften!=null && projekt.liegenschaften.length>0\" class=\"table table-striped table-hover\">\n                <thead>\n                  <th align=\"center\">\n                    Primär\n                  </th>\n                  <th align=\"center\">\n                    Bw-We\n                  </th>\n                  <th align=\"center\">\n                    BImA-We\n                  </th>\n                  <th align=\"center\">\n                    Bezeichnung\n                  </th>\n                  <th></th>\n                </thead>\n                <tbody>\n\n                  <tr *ngFor=\"let k of projekt.liegenschaften ; let in = index\">\n                    <td><input type=\"radio\" id=\"vi\" name=\"rang\" [(ngModel)]=\"primaer\" [disabled]=\"!isLand()\" [value]=\"k.liegenschaftid\"></td>\n                    <td>{{k.sdmwenr}}</td>\n                    <td>{{k.bimawenr}}</td>\n                    <td>{{k.bezeichnung}}</td>\n                    <!--td>\n                      <input type=\"number\" class=\"form-control\" [disabled]=\"!isLand()\" [(ngModel)]=\"k.kosten\" name=\"kosten-{{in}}\">\n                    </td-->\n                    <td>\n                      <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"deleteLiegenschaft(k)\" [disabled]=\"checkPrimaer(k) || !isLand()\"> <i class=\"glyphicon glyphicon-minus\"> </i></button>\n                    </td>\n                  </tr>\n                  <tr>\n                    \n                    <td colspan=\"4\">                      \n                      <input list=\"liegListe\" class=\"form-control\" id=\"neueLiegenschaft\" [disabled]=\"!isLand()\" name=\"neueLiegenschaft\" [(ngModel)]=\"neueLiegenschaft\" (click)=\"fehler(null)\" >\n                      <datalist id=\"liegListe\">\n                        <option *ngFor=\"let i of lieg\" [value]=\"i.title\" [label]=\"i.title\"></option>\n                        <!--option *ngFor=\"let i of liegBez\" [value]=\"i\">{{i}}</option-->\n                        \n                      </datalist>\n                    </td>\n                    <td> <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"neu\" (click)=\"addLiegenschaft()\"> <i class=\"glyphicon glyphicon-plus\"> </i></button></td>\n                  </tr>\n                </tbody>\n\n              </table>\n            </div>\n          </div>\n          <!-- ---------------------------------------------------------------------------------------------- -->\n          <div class=\"row\">\n            <label for=\"auftraggeber\" class=\"control-label col-sm-4\">Auftraggeber *</label>\n            <div class=\"col-sm-8\">\n              <!--input type=\"text\" class=\"form-control  text-left\" id=\"projektName\"  [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"-->\n              <select class=\"input-large form-control\" id=\"auftraggeber\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"\n                required>\n                <option value=\"KompZ BauMgmt Düsseldorf\">KompZ BauMgmt Düsseldorf</option>\n                <option value=\"KompZ BauMgmt Hannover\">KompZ BauMgmt Hannover</option>\n                <option value=\"KompZ BauMgmt Kiel\">KompZ BauMgmt Kiel</option>\n                <option value=\"KompZ BauMgmt München\">KompZ BauMgmt München</option>\n                <option value=\"KompZ BauMgmt Strausberg\">KompZ BauMgmt Strausberg</option>\n                <option value=\"KompZ BauMgmt Stuttgart\">KompZ BauMgmt Stuttgart</option>\n                <option value=\"WBV Nord\">WBV Nord</option>\n                <option value=\"WBV Ost\">WBV Ost</option>\n                <option value=\"WBV Süd\">WBV Süd</option>\n                <option value=\"WBV West\">WBV West</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"durchfStelle\" class=\"control-label col-sm-4\">Durchf. Stelle</label>\n            <div class=\"col-sm-8\">\n              <input list=\"stellenListe\" class=\"form-control\" id=\"durchfStelle\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.durchfStelle\"\n                name=\"durchfStelle\">\n                <datalist id=\"stellenListe\">\n                  <option *ngFor=\"let i of projekt.durchfStellen\" [value]=\"i\">{{i}}</option>\n                </datalist>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"bemerkung\" class=\"control-label col-sm-4\">Kommentar durchführende Stelle</label>\n            <div class=\"col-sm-8\">\n              <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"bemerkung\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.bemerkung\"\n                name=\"bemerkung\"></textarea>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"projektLeiter\" class=\"control-label col-sm-4\">Sachbearb. BdE (Fz)</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektLeiter\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektLeiter\"\n                name=\"projektLeiter\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"beginn\" class=\"control-label col-sm-4\">Beauftragung</label>\n            <div class=\"col-sm-4\">\n              <input type=\"date\" class=\"form-control  text-left\" id=\"beginn\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.beginn\" name=\"beginn\"\n                data-toggle=\"tooltip\" title=\"Datum\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"ende\" class=\"control-label col-sm-4\">Fertigstellung</label>\n            <div class=\"col-sm-4\">\n              <input type=\"date\" class=\"form-control  text-left\" id=\"ende\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.ende\" name=\"ende\"\n                data-toggle=\"tooltip\" title=\"Datum\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"status\" class=\"control-label col-sm-4\">Status *</label>\n\n            <div class=\"col-sm-8\">\n              <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n              <select class=\"input-large form-control\" id=\"status\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.status\" name=\"status\" required>\n              <option value=\"geplant\" >geplant</option>\n              <option  value=\"FfE beauftragt\">FfE beauftragt</option>\n              <option  value=\"BdE beauftragt\">BdE beauftragt</option>\n              <option  value=\"fertiggestellt\">fertiggestellt</option>\n              <option  value=\"Altdaten\">Altdaten</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"extAuftragnehmer\" class=\"control-label col-sm-4\">Ing.-Büro</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"extAuftragnehmer\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.extAuftragnehmer\"\n                name=\"extAuftragnehmer\">\n            </div>\n          </div>\n          <div style=\"background-color:#e0f0e0\">\n            <div class=\"row\">\n              <label class=\"control-label col-sm-4\">Sofortmaßnahmen</label>\n            </div>\n            <div class=\"row\">\n              <label for=\"statusZkl5\" class=\"control-label col-sm-4\">Status </label>\n              <div class=\"col-sm-8\">\n                <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n                <select class=\"input-large form-control\" id=\"statusZkl5\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.statusZkl5\" name=\"statusZkl5\">\n              <option  value=\"kein Bedarf\">kein Bedarf</option>\n              <option  value=\"zu veranlassen\">zu veranlassen</option>\n              <option  value=\"veranlasst\">veranlasst</option>\n              <option value=\"in Bearbeitung\">in Bearbeitung </option>\n              <option value=\"abgeschlossen\">abgeschlossen</option>\n              <option value=\"unbekannt\">unbekannt</option>\n              </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"sachstandZkl5\" class=\"control-label col-sm-4\">Sachstand</label>\n\n              <div class=\"col-sm-8\">\n                <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"sachstandZkl5\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.sachstandZkl5\"\n                  name=\"sachstandZkl5\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"kommentarFfe\" class=\"control-label col-sm-4\">Kommentar FfE</label>\n              <div class=\"col-sm-8\">\n                <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"kommentarFfe\" [disabled]=\"!(isLand() || isFFE())\" [(ngModel)]=\"projekt.kommentarFfe\"\n                  name=\"kommentarFfe\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"inspektion\" class=\"control-label col-sm-4\">TV Inspektion von</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"inspektionBeginn\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.inspektionBeginn\"\n                  name=\"inspektionBeginn\" data-toggle=\"tooltip\" title=\"Datum\">\n              </div>\n              <label for=\"inspektionEnde\" class=\"control-label col-sm-1\">bis</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"inspektionEnde\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.inspektionEnde\"\n                  name=\"inspektionEnde\" data-toggle=\"tooltip\" title=\"Datum\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"inspekteur\" class=\"control-label col-sm-4\">Inspektionsfirma</label>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control  text-left\" id=\"inspekteur\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.inspekteur\"\n                  name=\"inspekteur\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <!--label  class=\"control-label col-sm-4\">Kosten</label-->\n            <div class=\"col-sm-12\">\n              <table *ngIf=\"projekt.kosten!=null && projekt.kosten.length>0\" class=\"table table-striped table-hover\" [mfData]=\"projekt.kosten\"\n                #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                <thead>\n                  <th align=\"center\">\n                    Kostenart\n                  </th>\n                  <th>\n                    Kosten (Brutto) [€]\n                  </th>\n                </thead>\n                <tbody>\n\n                  <tr *ngFor=\"let k of mf.data ; let in = index\">\n                    <td>{{k.kostenart}}</td>\n                    <td>\n                      <input type=\"number\" class=\"form-control\" [disabled]=\"!isLand()\" [(ngModel)]=\"k.kosten\" name=\"kosten-{{in}}\" (blur)=\"summe()\">\n                    </td>\n\n                  </tr>\n                  <tr>\n                    <td>Summe:</td>\n                    <td>\n                      <input type=\"number\" class=\"form-control\" [disabled]=\"true\" [(ngModel)]=\"summeKosten\" name=\"kosten-summe\" (click)=\"summe()\">\n                    </td>\n                  </tr>\n                </tbody>\n\n                </table>\n            </div>\n          </div>\n\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Wollen Sie wirklich löschen?</h4>\n            </div>\n            <div class=\"modal-body\">\n                <button class=\"btn btn-danger \" data-dismiss=\"modal\" title=\"Löschen\" (click)=\"delete(projekt)\"> Löschen </button>\n                <button class=\"btn btn-info \" data-dismiss=\"modal\" title=\"a\"> Abbrechen </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<h3 align=\"center\">\n    <a routerLink=\"/inka-we\">\n         {{title}}\n        </a>\n</h3>\n<div class=\"row \">\n    <div *ngIf=\"!collapse\" class=\"col-sm-4\">\n        <button class=\"btn btn-info align-baseline pull-right\" type=\"button\" (click)=\"toggleCollapse()\"> <i class=\"glyphicon glyphicon-menu-left\"></i></button>\n        <app-inka2-admin>\n        </app-inka2-admin>\n    </div>\n    <button *ngIf=\"collapse\" class=\"btn btn-info align-baseline pull-left break\" type=\"button\" (click)=\"toggleCollapse()\"> <i class=\"glyphicon glyphicon-tags\"></i></button><br>\n    <div [ngClass]=\"colSize()\">\n        <div>\n            <div class=\"row\">\n                <div class=\"enlarge col-sm-5 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#bb0000\"> {{message.fehler}} </div>\n                <div class=\"enlarge col-sm-4 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#000000\"> {{message.ok}} </div>\n                <div class=\"col-sm-1\"><button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"rückgängig\" (click)=\"read()\" align=\"right\"> <i class=\"glyphicon glyphicon-refresh\"> </i></button></div>\n                <div class=\"col-sm-1\">\n                    <button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"speichern\" (click)=\"update(projekt)\" align=\"right\"\n                        [disabled]=\"!f.form.valid && !isLand()\"> <i class=\"glyphicon glyphicon-ok\">  </i></button>\n                </div>\n                <div class=\"col-sm-1\">\n                    <button class=\"btn btn-primary \" data-toggle=\"tooltip\" [disabled]=\"!isLand()\" title=\"löschen\" data-toggle=\"modal\"\n                        data-target=\"#myModal\" align=\"right\"> <i class=\"glyphicon glyphicon-remove\"> </i></button>\n                </div>\n            </div>\n            <h3 style=\"text-align:center\">LAK Teil B</h3>\n            <form class=\"form form-horizontal\" name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n                <fieldset>\n                    <div class=\"row\">\n                        <label for=\"projektNr\" class=\"control-label col-sm-4\">Projekt-Nr. *</label>\n                        <div class=\"col-sm-4\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"projektNr\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektNr\"\n                                name=\"projektNr\" required>\n                        </div>\n                        <div *ngIf=\"f?.controls?.projektNr?.hasError('')\">\n                            Dieses Feld ist ein Pflichtfeld.\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"projektName\" class=\"control-label col-sm-4\">Projektname</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"projektName\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektName\"\n                                name=\"projektName\">\n                        </div>\n                    </div>\n                       <!-- ------------------------------------------ Sekundäre Liegenschaften ---------------------------------------------------- -->\n          <div class=\"row\">\n            <label for=\"liegenschaften\" class=\"control-label col-sm-4\">Liegenschaften</label>\n            <div class=\"col-sm-8\">\n              <table *ngIf=\"projekt.liegenschaften!=null && projekt.liegenschaften.length>0\" class=\"table table-striped table-hover\">\n                <thead>\n                  <th align=\"center\">\n                    Primär\n                  </th>\n                  <th align=\"center\">\n                    Bw-We\n                  </th>\n                  <th align=\"center\">\n                    BImA-We\n                  </th>\n                  <th align=\"center\">\n                    Bezeichnung\n                  </th>\n                  <th></th>\n                </thead>\n                <tbody>\n\n                  <tr *ngFor=\"let k of projekt.liegenschaften ; let in = index\">\n                    <td><input type=\"radio\" id=\"vi\" name=\"rang\" [(ngModel)]=\"primaer\" [disabled]=\"!isLand()\" [value]=\"k.liegenschaftid\"></td>\n                    <td>{{k.sdmwenr}}</td>\n                    <td>{{k.bimawenr}}</td>\n                    <td>{{k.bezeichnung}}</td>\n                    <!--td>\n                      <input type=\"number\" class=\"form-control\" [disabled]=\"!isLand()\" [(ngModel)]=\"k.kosten\" name=\"kosten-{{in}}\">\n                    </td-->\n                    <td>\n                      <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"deleteLiegenschaft(k)\" [disabled]=\"checkPrimaer(k) || !isLand()\"> <i class=\"glyphicon glyphicon-minus\"> </i></button>\n                    </td>\n                  </tr>\n                  <tr>\n\n                    <td colspan=\"4\">\n                      <input list=\"liegListe\" class=\"form-control\" id=\"neueLiegenschaft\" [disabled]=\"!isLand()\" name=\"neueLiegenschaft\" [(ngModel)]=\"neueLiegenschaft\"\n                        (click)=\"fehler(null)\">\n                        <datalist id=\"liegListe\">\n                          <option *ngFor=\"let i of lieg\" [value]=\"i.title\" [label]=\"i.title\"></option>\n                          <!--option *ngFor=\"let i of liegBez\" [value]=\"i\">{{i}}</option-->\n\n                        </datalist>\n                    </td>\n                    <td> <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"neu\" (click)=\"addLiegenschaft()\"> <i class=\"glyphicon glyphicon-plus\"> </i></button></td>\n                  </tr>\n                </tbody>\n\n              </table>\n            </div>\n          </div>\n          <!-- ---------------------------------------------------------------------------------------------- -->\n       \n                    <div class=\"row\">\n                        <label for=\"auftraggeber\" class=\"control-label col-sm-4\">Auftraggeber *</label>\n                        <div class=\"col-sm-8\">\n                            <!--input type=\"text\" class=\"form-control  text-left\" id=\"projektName\"  [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"-->\n                            <select class=\"input-large form-control\" id=\"auftraggeber\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"\n                                required>\n                                <option value=\"KompZ BauMgmt Düsseldorf\">KompZ BauMgmt Düsseldorf</option>\n                                <option value=\"KompZ BauMgmt Hannover\">KompZ BauMgmt Hannover</option>\n                                <option value=\"KompZ BauMgmt Kiel\">KompZ BauMgmt Kiel</option>\n                                <option value=\"KompZ BauMgmt München\">KompZ BauMgmt München</option>\n                                <option value=\"KompZ BauMgmt Strausberg\">KompZ BauMgmt Strausberg</option>\n                                <option value=\"KompZ BauMgmt Stuttgart\">KompZ BauMgmt Stuttgart</option>\n                                <option value=\"WBV Nord\">WBV Nord</option>\n                                <option value=\"WBV Ost\">WBV Ost</option>\n                                <option value=\"WBV Süd\">WBV Süd</option>\n                                <option value=\"WBV West\">WBV West</option>\n                                </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"durchfStelle\" class=\"control-label col-sm-4\">Durchf. Stelle</label>\n                        <div class=\"col-sm-8\">\n                            <input list=\"stellenListe\" class=\"form-control\" id=\"durchfStelle\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.durchfStelle\"\n                                name=\"durchfStelle\">\n                                <datalist id=\"stellenListe\">\n                                    <option *ngFor=\"let i of projekt.durchfStellen\" [value]=\"i\">{{i}}</option>\n                                </datalist>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"bemerkung\" class=\"control-label col-sm-4\">Kommentar durchführende Stelle</label>\n                        <div class=\"col-sm-8\">\n                            <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"bemerkung\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.bemerkung\"\n                                name=\"bemerkung\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"projektLeiter\" class=\"control-label col-sm-4\">Sachbearb. BdE (Fz)</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"projektLeiter\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektLeiter\"\n                                name=\"projektLeiter\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"beginn\" class=\"control-label col-sm-4\">Beauftragung</label>\n                        <div class=\"col-sm-4\">\n                            <input type=\"date\" class=\"form-control  text-left\" id=\"beginn\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.beginn\" name=\"beginn\" data-toggle=\"tooltip\" title=\"Datum\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"ende\" class=\"control-label col-sm-4\">Fertigstellung</label>\n                        <div class=\"col-sm-4\">\n                            <input type=\"date\" class=\"form-control  text-left\" id=\"ende\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.ende\" name=\"ende\" data-toggle=\"tooltip\" title=\"Datum\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"status\" class=\"control-label col-sm-4\">Status *</label>\n\n                        <div class=\"col-sm-4\">\n                            <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n                            <select class=\"input-large form-control\" id=\"status\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.status\" name=\"status\" required>\n              <option value=\"geplant\" >geplant</option>\n              <option  value=\"FfE beauftragt\">FfE beauftragt</option>\n              <option  value=\"BdE beauftragt\">BdE beauftragt</option>\n              <option  value=\"fertiggestellt\">fertiggestellt</option> \n              <option value=\"Altdaten\">Altdaten</option>\n              </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"extAuftragnehmer\" class=\"control-label col-sm-4\">Ing.-Büro</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control  text-left\" id=\"extAuftragnehmer\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.extAuftragnehmer\"\n                                name=\"extAuftragnehmer\">\n                        </div>\n                    </div>\n                    <div style=\"background-color:#e0e0f0\">\n                        <div class=\"row\">\n                            <label class=\"col-sm-12\">Festgelegter Bedarf an Baumaßnahmen</label>\n                            \n                        </div>\n\n                        <div class=\"row\">\n                            <label for=\"baumassnahmeBeginn\" class=\"control-label col-sm-4\">Beginn</label>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control  text-left\" id=\"baumassnahmeBeginn\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.baumassnahmeBeginn\"\n                                    name=\"baumassnahmeBeginn\" data-toggle=\"tooltip\" title=\"Datum\">\n                            </div>\n                            <label for=\"baumassnahmeEnde\" class=\"control-label col-sm-1\">Ende</label>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control  text-left\" id=\"baumassnahmeEnde\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.baumassnahmeEnde\"\n                                    name=\"baumassnahmeEnde\" data-toggle=\"tooltip\" title=\"Datum\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"baumassnahmeNr\" class=\"control-label col-sm-4\"> Nummer(n)</label>\n                            <div class=\"col-sm-8\">\n                                <input type=\"text\" class=\"form-control  text-left\" id=\"baumassnahmeNr\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.baumassnahmeNr\"\n                                    name=\"baumassnahmeNr\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"baumassnahmeKosten\" class=\"control-label col-sm-4\"> Geschätzte Kosten [€]</label>\n                            <div class=\"col-sm-3\">\n                                <input type=\"number\" class=\"form-control  text-left\" id=\"baumassnahmeKosten\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.baumassnahmeKosten\"\n                                    name=\"baumassnahmeKosten\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <table *ngIf=\"projekt.kosten!=null && projekt.kosten.length>0\" class=\"table table-striped table-hover\" [mfData]=\"projekt.kosten\"\n                                #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                                <thead>\n                                    <th align=\"center\">\n                                        Kostenart\n                                    </th>\n                                    <th>\n                                       Kosten (Brutto) [€]\n                                    </th>\n                                </thead>\n                                <tbody>\n\n                                    <tr *ngFor=\"let k of mf.data\">\n                                        <td>{{k.kostenart}}</td>\n                                        <td>\n                                            <input type=\"number\" class=\"form-control\" id=\"kosten\" [disabled]=\"!isLand()\" [(ngModel)]=\"k.kosten\" name=\"kosten\">\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                \n                                </table>\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Wollen Sie wirklich löschen?</h4>\n      </div>\n      <div class=\"modal-body\">\n        <button class=\"btn btn-danger \" data-dismiss=\"modal\" title=\"Löschen\" (click)=\"delete(projekt)\"> Löschen </button>\n        <button class=\"btn btn-info \" data-dismiss=\"modal\" title=\"a\"> Abbrechen </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<h3 align=\"center\">\n  <a routerLink=\"/inka-we\">\n         {{title}}\n        </a>\n</h3>\n<div class=\"row \">\n  <div *ngIf=\"!collapse\" class=\"col-sm-4\">\n    <button class=\"btn btn-info align-baseline pull-right\" type=\"button\" (click)=\"toggleCollapse()\"> <i class=\"glyphicon glyphicon-menu-left\"></i></button>\n    <app-inka2-admin>\n    </app-inka2-admin>\n  </div>\n  <button *ngIf=\"collapse\" class=\"btn btn-info align-baseline pull-left break\" type=\"button\" (click)=\"toggleCollapse()\"> <i class=\"glyphicon glyphicon-tags\"></i></button><br>\n  <div [ngClass]=\"colSize()\">\n    <div>\n      <div class=\"row\">\n        <div class=\"enlarge col-sm-5 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#bb0000\"> {{message.fehler}} </div>\n        <div class=\"enlarge col-sm-4 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#000000\"> {{message.ok}} </div>\n        <div class=\"col-sm-1\"><button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"rückgängig\" (click)=\"read()\" align=\"right\"> <i class=\"glyphicon glyphicon-refresh\"> </i></button></div>\n        <div class=\"col-sm-1\">\n          <button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"speichern\" (click)=\"update(projekt)\" align=\"right\"\n            [disabled]=\"!f.form.valid && !(isLand() || isFFE())\"> <i class=\"glyphicon glyphicon-ok\">  </i></button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"löschen\" [disabled]=\"!isLand()\" data-toggle=\"modal\"\n            data-target=\"#myModal\" align=\"right\"> <i class=\"glyphicon glyphicon-remove\"> </i></button>\n        </div>\n      </div>\n      <h3 style=\"text-align:center\">LAK für kleine Liegenschaften</h3>\n      <form class=\"form form-horizontal\" name=\"f\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n        <fieldset>\n          <div class=\"row\">\n            <label for=\"projektNr\" class=\"control-label col-sm-4\">Projekt-Nr. *</label>\n            <div class=\"col-sm-4\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektNr\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektNr\"\n                name=\"projektNr\" required>\n            </div>\n            <div *ngIf=\"f?.controls?.projektNr?.hasError('')\">\n              Dieses Feld ist ein Pflichtfeld.\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"projektName\" class=\"control-label col-sm-4\">Projektname</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektName\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektName\"\n                name=\"projektName\">\n            </div>\n          </div>\n          <!-- ------------------------------------------ Sekundäre Liegenschaften ---------------------------------------------------- -->\n          <div class=\"row\">\n            <label for=\"liegenschaften\" class=\"control-label col-sm-4\">Liegenschaften</label>\n            <div class=\"col-sm-8\">\n              <table *ngIf=\"projekt.liegenschaften!=null && projekt.liegenschaften.length>0\" class=\"table table-striped table-hover\">\n                <thead>\n                  <th align=\"center\">\n                    Primär\n                  </th>\n                  <th align=\"center\">\n                    Bw-We\n                  </th>\n                  <th align=\"center\">\n                    BImA-We\n                  </th>\n                  <th align=\"center\">\n                    Bezeichnung\n                  </th>\n                  <th></th>\n                </thead>\n                <tbody>\n\n                  <tr *ngFor=\"let k of projekt.liegenschaften ; let in = index\">\n                    <td><input type=\"radio\" id=\"vi\" name=\"rang\" [(ngModel)]=\"primaer\" [disabled]=\"!isLand()\" [value]=\"k.liegenschaftid\"></td>\n                    <td>{{k.sdmwenr}}</td>\n                    <td>{{k.bimawenr}}</td>\n                    <td>{{k.bezeichnung}}</td>\n                    <!--td>\n                      <input type=\"number\" class=\"form-control\" [disabled]=\"!isLand()\" [(ngModel)]=\"k.kosten\" name=\"kosten-{{in}}\">\n                    </td-->\n                    <td>\n                      <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"deleteLiegenschaft(k)\" [disabled]=\"checkPrimaer(k) || !isLand()\"> <i class=\"glyphicon glyphicon-minus\"> </i></button>\n                    </td>\n                  </tr>\n                  <tr>\n\n                    <td colspan=\"4\">\n                      <input list=\"liegListe\" class=\"form-control\" id=\"neueLiegenschaft\" [disabled]=\"!isLand()\" name=\"neueLiegenschaft\" [(ngModel)]=\"neueLiegenschaft\"\n                        (click)=\"fehler(null)\">\n                        <datalist id=\"liegListe\">\n                          <option *ngFor=\"let i of lieg\" [value]=\"i.title\" [label]=\"i.title\"></option>\n                          <!--option *ngFor=\"let i of liegBez\" [value]=\"i\">{{i}}</option-->\n\n                        </datalist>\n                    </td>\n                    <td> <button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"neu\" (click)=\"addLiegenschaft()\"> <i class=\"glyphicon glyphicon-plus\"> </i></button></td>\n                  </tr>\n                </tbody>\n\n              </table>\n            </div>\n          </div>\n          <!-- ---------------------------------------------------------------------------------------------- -->\n          <div class=\"row\">\n            <label for=\"auftraggeber\" class=\"control-label col-sm-4\">Auftraggeber *</label>\n            <div class=\"col-sm-8\">\n              <!--input type=\"text\" class=\"form-control  text-left\" id=\"projektName\"  [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"-->\n              <select class=\"input-large form-control\" id=\"auftraggeber\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.auftraggeber\" name=\"auftraggeber\"\n                required>\n                <option value=\"KompZ BauMgmt Düsseldorf\">KompZ BauMgmt Düsseldorf</option>\n                <option value=\"KompZ BauMgmt Hannover\">KompZ BauMgmt Hannover</option>\n                <option value=\"KompZ BauMgmt Kiel\">KompZ BauMgmt Kiel</option>\n                <option value=\"KompZ BauMgmt München\">KompZ BauMgmt München</option>\n                <option value=\"KompZ BauMgmt Strausberg\">KompZ BauMgmt Strausberg</option>\n                <option value=\"KompZ BauMgmt Stuttgart\">KompZ BauMgmt Stuttgart</option>\n                <option value=\"WBV Nord\">WBV Nord</option>\n                <option value=\"WBV Ost\">WBV Ost</option>\n                <option value=\"WBV Süd\">WBV Süd</option>\n                <option value=\"WBV West\">WBV West</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"durchfStelle\" class=\"control-label col-sm-4\">Durchf. Stelle</label>\n            <div class=\"col-sm-8\">\n              <input list=\"stellenListe\" class=\"form-control\" id=\"durchfStelle\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.durchfStelle\"\n                name=\"durchfStelle\">\n                <datalist id=\"stellenListe\">\n                  <option *ngFor=\"let i of projekt.durchfStellen\" [value]=\"i\">{{i}}</option>\n                </datalist>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"bemerkung\" class=\"control-label col-sm-4\">Kommentar durchführende Stelle</label>\n            <div class=\"col-sm-8\">\n              <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"bemerkung\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.bemerkung\"\n                name=\"bemerkung\"></textarea>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"projektLeiter\" class=\"control-label col-sm-4\">Sachbearb. BdE (Fz)</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"projektLeiter\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.projektLeiter\"\n                name=\"projektLeiter\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"beginn\" class=\"control-label col-sm-4\">Beauftragung</label>\n            <div class=\"col-sm-4\">\n              <input type=\"date\" class=\"form-control  text-left\" id=\"beginn\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.beginn\" name=\"beginn\"\n                data-toggle=\"tooltip\" title=\"Datum\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"ende\" class=\"control-label col-sm-4\">Fertigstellung</label>\n            <div class=\"col-sm-4\">\n              <input type=\"date\" class=\"form-control  text-left\" id=\"ende\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.ende\" name=\"ende\"\n                data-toggle=\"tooltip\" title=\"Datum\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"status\" class=\"control-label col-sm-4\">Status *</label>\n\n            <div class=\"col-sm-8\">\n              <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n              <select class=\"input-large form-control\" id=\"status\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.status\" name=\"status\" required>\n              <option value=\"geplant\" >geplant</option>\n              <option  value=\"FfE beauftragt\">FfE beauftragt</option>\n              <option  value=\"BdE beauftragt\">BdE beauftragt</option>\n              <option  value=\"fertiggestellt\">fertiggestellt</option>\n              <option value=\"Altdaten\">Altdaten</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label for=\"extAuftragnehmer\" class=\"control-label col-sm-4\">Ing.-Büro</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control  text-left\" id=\"extAuftragnehmer\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.extAuftragnehmer\"\n                name=\"extAuftragnehmer\">\n            </div>\n          </div>\n          <div style=\"background-color:#e0f0e0\">\n            <div class=\"row\">\n              <label class=\"control-label col-sm-4\">Sofortmaßnahmen</label>\n            </div>\n            <div class=\"row\">\n              <label for=\"statusZkl5\" class=\"control-label col-sm-4\">Status </label>\n              <div class=\"col-sm-8\">\n                <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n                <select class=\"input-large form-control\" id=\"statusZkl5\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.statusZkl5\" name=\"statusZkl5\">\n              <option  value=\"kein Bedarf\">kein Bedarf</option>\n              <option  value=\"zu veranlassen\">zu veranlassen</option>\n              <option  value=\"veranlasst\">veranlasst</option>\n              <option value=\"in Bearbeitung\">in Bearbeitung </option>\n              <option value=\"abgeschlossen\">abgeschlossen</option>\n              <option value=\"unbekannt\">unbekannt</option>\n              </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"sachstandZkl5\" class=\"control-label col-sm-4\">Sachstand</label>\n\n              <div class=\"col-sm-8\">\n                <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"sachstandZkl5\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.sachstandZkl5\"\n                  name=\"sachstandZkl5\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"kommentarFfe\" class=\"control-label col-sm-4\">Kommentar FfE</label>\n              <div class=\"col-sm-8\">\n                <textarea cols=\"50\" rows=\"3\" class=\"form-control  text-left\" id=\"kommentarFfe\" [disabled]=\"!(isLand() || isFFE())\" [(ngModel)]=\"projekt.kommentarFfe\"\n                  name=\"kommentarFfe\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"inspektion\" class=\"control-label col-sm-4\">TV Inspektion von</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"inspektionBeginn\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.inspektionBeginn\"\n                  name=\"inspektionBeginn\" data-toggle=\"tooltip\" title=\"Datum\">\n              </div>\n              <label for=\"inspektionEnde\" class=\"control-label col-sm-1\">bis</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"inspektionEnde\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.inspektionEnde\"\n                  name=\"inspektionEnde\" data-toggle=\"tooltip\" title=\"Datum\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"inspekteur\" class=\"control-label col-sm-4\">Inspektionsfirma</label>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control  text-left\" id=\"inspekteur\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.inspekteur\"\n                  name=\"inspekteur\">\n              </div>\n            </div>\n          </div>\n\n          <div style=\"background-color:#e0e0f0\">\n            <div class=\"row\">\n              <label class=\"col-sm-12\">Festgelegter Bedarf an Baumaßnahmen</label>\n            </div>\n            <div class=\"row\">\n              <label for=\"baumassnahmeBeginn\" class=\"control-label col-sm-4\">Beginn</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"baumassnahmeBeginn\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.baumassnahmeBeginn\"\n                  name=\"baumassnahmeBeginn\" data-toggle=\"tooltip\" title=\"Datum\">\n              </div>\n              <label for=\"baumassnahmeEnde\" class=\"control-label col-sm-1\">Ende</label>\n              <div class=\"col-sm-3\">\n                <input type=\"date\" class=\"form-control  text-left\" id=\"baumassnahmeEnde\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.baumassnahmeEnde\"\n                  name=\"baumassnahmeEnde\" data-toggle=\"tooltip\" title=\"Datum\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"baumassnahmeNr\" class=\"control-label col-sm-4\"> Nummer(n)</label>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control  text-left\" id=\"baumassnahmeNr\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.baumassnahmeNr\"\n                  name=\"baumassnahmeNr\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <label for=\"baumassnahmeKosten\" class=\"control-label col-sm-4\"> Geschätzte Kosten [€]</label>\n              <div class=\"col-sm-3\">\n                <input type=\"number\" class=\"form-control  text-left\" id=\"baumassnahmeKosten\" [disabled]=\"!isLand()\" [(ngModel)]=\"projekt.baumassnahmeKosten\"\n                  name=\"baumassnahmeKosten\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <table *ngIf=\"projekt.kosten!=null && projekt.kosten.length>0\" class=\"table table-striped table-hover\" [mfData]=\"projekt.kosten\"\n                #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                <thead>\n                  <th align=\"center\">\n                    Kostenart\n                  </th>\n                  <th>\n                    Kosten (Brutto) [€]\n                  </th>\n                </thead>\n                <tbody>\n\n                  <tr *ngFor=\"let k of mf.data ; let in = index\">\n                    <td>{{k.kostenart}}</td>\n                    <td>\n                      <input type=\"number\" class=\"form-control\" [disabled]=\"!isLand()\" [(ngModel)]=\"k.kosten\" name=\"kosten-{{in}}\" (blur)=\"summe()\">\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Summe:</td>\n                    <td>\n                      <input type=\"number\" class=\"form-control\" [disabled]=\"true\" [(ngModel)]=\"summeKosten\" name=\"kosten-summe\" (click)=\"summe()\">\n                    </td>\n                  </tr>\n                </tbody>\n\n                </table>\n            </div>\n          </div>\n\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-color:#d0d0d0\">\n  <!-- Trigger the modal with a button -->\n\n  <!-- Modal -->\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Projekt anlegen</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bitte wählen Sie die Art des Projektes</p>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"LAK Teil A\" (click)=\"navigateA(null)\"> LAK Teil A </button>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"LAK Teil B\" (click)=\"navigateB(null)\"> LAK Teil B </button>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"LAK für kleine Liegenschaften\" (click)=\"navigateFkl(null)\" > LAK für kleine Liegenschaften </button>\n          <button class=\"btn btn-primary btn-block\" data-dismiss=\"modal\" title=\"Untersuchung\" (click)=\"navigateUntersuchung(null)\"> Untersuchung</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-striped table-hover\" [mfData]=\"projekte\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n    <thead>\n      <!--th align=\"right\">Id</th-->\n      <th align=\"center\">\n        <mfDefaultSorter by=\"phase\">Phase</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"projektNr\">Projekt-Nr.</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"projektName\">Projektname</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"beginn\">Beginn</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"ende\">Ende</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"projektLeiter\">Projektleiter</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"kostenBrutto\">Kosten [€]</mfDefaultSorter>\n      </th>\n      <th align=\"center\">\n        <mfDefaultSorter by=\"status\">Status</mfDefaultSorter>\n      </th>\n      <th align=\"center\"></th>\n \n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let p of mf.data\">\n        <!--td align=\"center\">{{user.id}}</td-->\n        <td>{{p.phase}}</td>\n        <td>{{p.projektNr}}</td>\n        <td>{{p.projektName}}</td>\n        <td>{{toDate(p.beginn)}}</td>\n        <td>{{toDate(p.ende)}}</td>\n        <td>{{p.projektLeiter}}</td>\n        <td>{{p.kostenBrutto}}</td>\n        <td>{{p.status}}</td>\n\n        <td>\n          <div class=\"pull-right\">\n            <button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"bearbeiten\" (click)=\"navigate(p)\">\n            <span div class=\"glyphicon glyphicon-pencil\"></span>\n           </button>\n          </div>\n        </td>\n        \n      </tr>\n      <tr>\n        <!--td align=\"center\">{{user.id}}</td-->\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n        <td> </td>\n\n        <td>\n          <div class=\"pull-right\">\n            <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!isLand()\" data-toggle=\"modal\" data-target=\"#myModal\">\n\n            <span div class=\"glyphicon glyphicon-plus\"></span>\n           </button>\n          </div>\n        </td>\n       \n      </tr>\n\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan=\"5\">\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n        </td>\n      </tr>\n    </tfoot>\n  </table>\n</div>"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-color:#d0d0d0\">\n  <h3>Suche nach Wirtschaftseinheiten</h3>\n  <form class=\"form form-horizontal\">\n    <fieldset>\n      <div class=\"row no-gutters\">\n        <div class=\"form-group col-sm-3\">\n          <label for=\"liegenschaftNr\" class=\"control-label col-xs-8\">Liegenschafts-Nr.:</label>\n          <input type=\"text\" class=\" col-xs-4 text-left\" id=\"liegenschaftNr\" [(ngModel)]=\"we.liegenschaftNr\" name=\"liegenschaftNr\">\n        </div>\n        <div class=\"form-group col-sm-2\">\n          <label for=\"weNrBw\" class=\"control-label col-xs-5\">Bw:</label>\n          <input type=\"text\" class=\" col-xs-7 text-left\" id=\"weNrBw\" [(ngModel)]=\"we.weNrBw\" name=\"weNrBw\">\n        </div>\n        <div class=\"form-group col-sm-3\">\n          <label for=\"weNrBima\" class=\"control-label col-xs-5\">BImA:</label>\n          <input type=\"text\" class=\" col-xs-7 text-left\" id=\"weNrBima\" [(ngModel)]=\"we.weNrBima\" name=\"weNrBima\">\n        </div>\n\n        <div class=\"form-group col-sm-4\">\n          <label for=\"bezeichnung\" class=\"control-label col-xs-5\">Bezeichnung:</label>\n          <input type=\"text\" class=\"col-xs-7\" id=\"bezeichnung\" [(ngModel)]=\"we.bezeichnung\" name=\"bezeichnung\">\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-sm-4\">\n          <label for=\"abwasserspezifischeInfos\" class=\"control-label col-sm-8\">abwasserspezifische Informationen:</label>\n          <input type=\"checkbox\" class=\"col-sm-2\" id=\"abwasserspezifischeInfos\" style=\"vertical-align:baseline;\" [(ngModel)]=\"we.abwasserspezifischeInfos\"\n            name=\"abwasserspezifischeInfos\">\n        </div>\n        <div class=\"form-group col-sm-4\">\n          <label for=\"imSDM\" class=\"control-label col-sm-10\">Bundeswehr Liegenschaft:</label>\n          <input type=\"checkbox\" class=\"col-sm-2\" id=\"imSDM\" [(ngModel)]=\"we.imSDM\" name=\"imSDM\">\n        </div>\n        <div class=\"form-group col-sm-3\">\n          <label for=\"imBima\" class=\"control-label col-sm-10\">BImA Liegenschaft:          </label>\n          <input type=\"checkbox\" class=\"col-sm-2\" id=\"imBima\" [(ngModel)]=\"we.imBima\" name=\"imBima\">\n        </div>\n        <div class=\"form-group col-sm-1\">\n          <div>\n            <button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"suchen\" (click)=\"search()\">\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin fa-1x\"> </i>\n              <span div *ngIf=\"!loading\" class=\"glyphicon glyphicon-search\"></span>\n            </button>\n            <!--a class=\"enlarge \" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"delete(we)\"> <i class=\"fa fa-eraser fa-2x\" style=\"color:#bb0000\"> </i></a-->\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n<table *ngIf=\"wes!=null && wes.length>0\" class=\"table table-striped table-hover\" [mfData]=\"wes\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n\n  <thead>\n    <!--th align=\"right\">Id</th-->\n    <!--th align=\"center\">Liegenschafts-Nr.</th>\n    <th align=\"center\">Bundeswehr WE</th>\n    <th align=\"center\">BIMA WE</th-->\n    <th align=\"center\">\n      <mfDefaultSorter by=\"liegenschaftNr\">Liegenschafts-Nr.</mfDefaultSorter>\n    </th>\n    <th align=\"center\">\n      <mfDefaultSorter by=\"weNrBw\">Bw WE</mfDefaultSorter>\n    </th>\n    <th align=\"center\">\n      <mfDefaultSorter by=\"weNrBima\">BImA WE</mfDefaultSorter>\n    </th>\n    <th align=\"center\">\n      <mfDefaultSorter by=\"bezeichnung\">Bezeichnung</mfDefaultSorter>\n    </th>\n    <th class=\"pull-right\"></th>\n\n  </thead>\n  <tbody>\n\n    <tr *ngFor=\"let we of mf.data\" (mousedown)=\"onSelection(we)\">\n      <td>{{we.liegenschaftNr}}</td>\n      <td>{{we.weNrBw}}</td>\n      <td>{{we.weNrBima}}</td>\n      <td>{{we.bezeichnung}}</td>\n      <td>\n        <div class=\"pull-right\">\n          <button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"bearbeiten\" (click)=\"navigate(we)\">\n            <span div class=\"glyphicon glyphicon-pencil\"></span>\n           </button>\n\n          <!--a class=\"enlarge \" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"delete(we)\"> <i class=\"fa fa-eraser fa-2x\" style=\"color:#bb0000\"> </i></a-->\n        </div>\n      </td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"5\">\n        <mfBootstrapPaginator [rowsOnPageSet]=\"[10,20,100]\">test</mfBootstrapPaginator>\n      </td>\n    </tr>\n  </tfoot>\n</table>\n<p align=\"center\" style=\"color:gray\" *ngIf=\"loading != false\">Liegenschaften werden geladen</p>\n<p align=\"center\" style=\"color:gray\" *ngIf=\"loading == false && wes!=null  && wes.length==0 \">keine Liegenschaften gefunden</p>\n<p align=\"center\" style=\"color:gray\" *ngIf=\"loading == false && wes!=null  && wes.length>0 \">{{wes.length}} Liegenschaften gefunden</p>"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<!-- Modal fuer Fehlermeldung-->\n<div id=\"errModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Fehlermeldung</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{message.fehler}} </p>\n        <button class=\"btn btn-primary \" data-dismiss=\"modal\" title=\"Meldung\"> Ok</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div>\n  <div class=\"row\">\n    <div class=\"enlarge col-sm-5 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#bb0000\"> {{message.fehler}} </div>\n    <div class=\"enlarge col-sm-4 \" data-toggle=\"tooltip\" title=\"\" align=\"right\" style=\"color:#000000\"> {{message.ok}} </div>\n    <div class=\"col-sm-1\"><button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"rückgängig\" (click)=\"read()\" align=\"right\"> <i class=\"glyphicon glyphicon-refresh\"> </i></button></div>\n    <div class=\"col-sm-1\">\n      <button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"speichern\" (click)=\"update(abw)\" align=\"right\" [disabled]=\"!f.form.valid && !(isLand || isBima)\"> <i class=\"glyphicon glyphicon-ok\">  </i></button>\n    </div>\n    <div class=\"col-sm-1\"><button class=\"btn btn-primary \" data-toggle=\"tooltip\" title=\"löschen\" (click)=\"delete(abw)\" align=\"right\" [disabled]=\"!(isLand || isBima)\"> <i class=\"glyphicon glyphicon-remove\"> </i></button></div>\n  </div>\n  <h3 style=\"text-align:right\">Abwasserspezifische Informationen zur WE</h3>\n  <form class=\"form form-horizontal\" name=\"f\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n    <fieldset>\n      <div class=\"row\">\n        <label for=\"awtVorhanden\" class=\"control-label col-sm-4\">Entwässerungssys. vorhanden</label>\n        <div class=\"col-sm-8\">\n          <select class=\"input-large form-control\" id=\"awtVorhanden\" [disabled]=\"!(isLand || isBima)\" [(ngModel)]=\"abw.awtVorhanden\"\n            name=\"awtVorhanden\" required>\n            <!--option value=\"{{abw.awtVorhanden}}\">{{abw.awtVorhanden}}</option-->\n            <option value=\"Ja\">Ja</option>\n            <option value=\"Nein\">Nein</option>\n            <option value=\"unbekannt\">unbekannt</option>\n            </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"baujAwtanl\" class=\"control-label col-sm-4\">Baujahr</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control input4\" [disabled]=\"!(isLand || isBima)\" id=\"baujAwtanl\" size=4 maxlength=4 [(ngModel)]=\"abw.baujAwtanl\"\n            name=\"baujAwtanl\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"gesUnters\" class=\"control-label col-sm-4\">gesetzl. geford. Erstüberprüfung</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" class=\"form-control\" [disabled]=\"!(isLand || isBima)\" id=\"gesUnters\" [(ngModel)]=\"abw.gesUnters\" name=\"gesUnters\" data-toggle=\"tooltip\" title=\"Datum\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <label for=\"datum1Untersuchung\" class=\"control-label col-sm-4\">Erstuntersuchung</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" class=\"form-control\" [disabled]=\"!(isLand || isBima)\" id=\"datum1Untersuchung\" size=30 [(ngModel)]=\"abw.datum1untersg\"\n            name=\"datum1Untersuchung\" data-toggle=\"tooltip\" title=\"Datum\">\n        </div>\n      </div>\n <div class=\"row\">\n        <label for=\"datumLetzteUnters\" class=\"control-label  col-sm-4\">letzte Untersuchung</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" class=\"form-control\" id=\"datumLetzteUnters\" size=30 [disabled]=\"!(isLand || isBima)\" [(ngModel)]=\"abw.datumLetzteUnters\"\n            name=\"datumLetzteUnters\" data-toggle=\"tooltip\" title=\"Datum\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"ueberprFristen\" class=\"control-label  col-sm-4\">Überprüfungsintervall [Jahre]</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control\" id=\"ueberprFristen\" size=30 [disabled]=\"!(isLand || isBima)\" [(ngModel)]=\"abw.ueberprFristen\"\n            name=\"ueberprFristen\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"naechsteUnters\" class=\"control-label col-sm-4\">nächste Untersuchung</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" class=\"form-control\" id=\"naechsteUnters\" [disabled]=\"!(isLand || isBima)\" [(ngModel)]=\"abw.naechsteUnters\"\n            name=\"naechsteUnters\" data-toggle=\"tooltip\" title=\"Datum\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"laengeNetz\" class=\"control-label  col-sm-4\">gesamte Netzlänge [m]</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control\" [disabled]=\"!(isLand || isBima)\" id=\"laengeNetz\" size=30 [(ngModel)]=\"abw.laengeNetz\"\n            name=\"laengeNetz\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"artAbw\" class=\"control-label col-sm-4\">Abwasserart</label>\n        <div class=\"col-sm-8\">\n          <ss-multiselect-dropdown name=\"artAbw\" id=\"artAbw\" [settings]=\"mySettings\" [texts]=\"myTexts\" [options]=\"artAbw\" [(ngModel)]=\"artAbwAuswahl\" [disabled]=\"!(isLand || isBima)\"></ss-multiselect-dropdown>\n        </div>\n      </div>\n     \n      <div class=\"row\">\n        <label for=\"wsz\" class=\"control-label  col-sm-4\">WSZ</label>\n        <div class=\"col-sm-8\">\n          <!--input type=\"text\" class=\"form-control\" id=\"wsz\" size=6  [(ngModel)]=\"abw.wsz\" name=\"wsz\"-->\n          <select class=\"input-large form-control\" id=\"wsz\" [disabled]=\"!(isLand || isBima)\" [(ngModel)]=\"abw.wsz\" name=\"wsz\">\n              <option value=\"I\" >I</option>\n              <option value=\"II\" >II</option>\n              <option value=\"III A\" >III A</option>\n              <option value=\"III B\" >III B</option>\n              <option value=\"Nein\" >Nein</option>\n              <option value=\"Nicht bekannt\" >Unbekannt</option>              \n        </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"wassergefStoffe\" class=\"control-label  col-sm-4\"> wassergefährdende Stoffe</label>\n        <div class=\"col-sm-8\">\n          <input type=\"checkbox\" class=\"text-left\" id=\"wassergefStoffe\" [disabled]=\"!(isLand || isBima)\" [(ngModel)]=\"abw.wassergefStoffe\"\n            name=\"wassergefStoffe\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"einlArt\" class=\"control-label  col-sm-4\">Einleitungsart</label>\n        <div class=\"col-sm-8\">\n          <ss-multiselect-dropdown name=\"einlArt\" id=\"einlArt\" [options]=\"einlArt\" [settings]=\"mySettings\" [texts]=\"myTexts\" [(ngModel)]=\"einlArtAuswahl\" (ngModelChange)=\"onChange($event)\" [disabled]=\"!(isLand || isBima)\"></ss-multiselect-dropdown>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <label for=\"gsb\" class=\"control-label  col-sm-4\"> Gewässerschutzbeauftr. erf.</label>\n        <div class=\"col-sm-8\">\n          <input type=\"checkbox\" class=\"text-left\" id=\"gsb\" [disabled]=\"!(isLand || isBima)\" [(ngModel)]=\"abw.gsb\" name=\"gsb\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"naechstesLak\" class=\"control-label col-sm-4\">nächstes LAK geplant [Jahr]</label>\n        <div class=\"col-sm-8\">\n          <input type=\"number\" class=\"form-control input4\" id=\"naechstesLak\" size=4 [disabled]=\"!(isLand || isBima)\" [(ngModel)]=\"abw.naechstesLak\"\n            name=\"naechstesLak\">\n        </div>\n      </div>\n      \n    </fieldset>\n\n\n  </form>\n\n</div>"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "\n  <div  class=\"container-fluid\" style=\"background-color:#d0d0d0\">\n   \n   <form class=\"form-horizontal\">\n    <fieldset>\n     <!--h3>{{we.liegenschaftNr}} {{we.bezeichnung}}</h3-->\n      <strong>ADMIN-Daten der Wirtschaftseinheit</strong>\n      <p>{{we.bundesland}}<br>\n      <span *ngIf=\"we.regbez\">{{we.regbez}}<br></span>\n      {{we.plz}} {{we.ort}}<br>\n      Fläche [ha]: {{we.flaeche}} </p>\n\n        <p>\n          <strong>Fachaufsichtführende Ebene:</strong><br>{{we.ffe}}<br>{{we.ffeAdresse}}\n        </p>\n        <p>\n          <strong>Baudurchführende Ebene:</strong><br>{{we.bde}}<br>{{we.bdeAdresse}}\n        </p>\n      \n      <div style=\"background-color:#50a050; margin:5px; \">\n        <p ><strong>\n          Bundeswehr (SASPF)\n          </strong>\n        </p>\n        <p>\n          WE: {{we.weNrBw}} {{we.bezeichnungBw}}\n        </p>\n        <p>\n          Kompetenzzentrum {{we.kompz}}\n        </p>\n        <p>\n          BwDLZ:{{we.bwdlz}}\n        </p>\n        <p>\n          HBT: {{we.hbt}}\n        </p>\n        \n      </div>\n     <div style=\"background-color:#9090f0; margin:5px; \">\n        <p ><strong>\n          BImA (BALIMA)\n          </strong>\n        </p>\n        <p>\n          WE: {{we.weNrBima}} {{we.bezeichnungBima}}\n        </p>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<div class=\"align-center\">\n  <h3 align=\"center\">\n         {{title}}\n  </h3>\n  <div class=\"row \">\n    <div *ngIf=\"!collapse\" class=\"form-group col-sm-4 collapse in\" id=\"collapseBeispiel\">\n      <button class=\"btn btn-info align-baseline pull-right\" type=\"button\" (click)=\"toggleCollapse()\"> <i class=\"glyphicon glyphicon-menu-left\"></i></button>\n\n      <app-inka2-admin>\n      </app-inka2-admin>\n      <!--app-map></app-map-->\n    </div>\n\n    <div *ngIf=\"!collapse\" class=\"form-group col-sm-8\">\n      <app-inka2-abwasser>\n      </app-inka2-abwasser>\n    </div>\n    <button *ngIf=\"collapse\" class=\"btn btn-info align-baseline pull-left break\" type=\"button\" (click)=\"toggleCollapse()\"> <i class=\"glyphicon glyphicon-tags\"></i></button><br>\n    <div *ngIf=\"collapse\" [ngClass]=\"colSize()\">\n      <app-inka2-abwasser>\n      </app-inka2-abwasser>\n    </div>\n  </div>\n  <app-inka-lak-liste>\n  </app-inka-lak-liste>\n</div>"

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-6 col-md-offset-3\">\n    <div class=\"alert alert-info\">\n        <br />\n        <h1>Berichtswesen Abwasser</h1>\n    </div>\n    <h2>Anmeldung</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Benutzer</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.name\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Benutzername ist erforderlich</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Passwort</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Ein Passwort ist erforderlich</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Anmelden</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n    </form>\n    \n</div>"

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<!-- BING example select id=\"layer-select\">\n       <option value=\"Aerial\">Aerial</option>\n       <option value=\"AerialWithLabels\" selected>Aerial with labels</option>\n       <option value=\"Road\">Road</option>\n       <option value=\"collinsBart\">Collins Bart</option>\n       <option value=\"ordnanceSurvey\">Ordnance Survey</option>\n     </select-->\n<h3 align=\"center\">\n      <a routerLink=\"/inka-we\">\n         {{title}}\n        </a>\n</h3>\n\n<div id=\"map\" name=\"map\" class=\"map\" style=\"width: 100%; height: 700px;\"></div>\n<div>\n      <button type=\"button\" class=\"button btn-primary\" id=\"bingVisible\"  name=\"bingVisible\" (click)=\"toggleBing()\">\n             <i *ngIf=\"karte\" class=\"glyphicon glyphicon-check\"></i>\n             <i *ngIf=\"!karte\" class=\"glyphicon glyphicon-unchecked\"></i>\n             \n      </button>\n      Karte\n</div>"

/***/ }),

/***/ 51:
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
/* unused harmony export AUTH_PROVIDERS */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SecurityService = (function () {
    function SecurityService(http, router, titleService) {
        this.http = http;
        this.router = router;
        this.titleService = titleService;
    }
    SecurityService.prototype.login = function (user, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var parms = JSON.stringify({ action: "login", user: user, password: password });
        var url = __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */].getWebServer() + 'ABWLoginServlet';
        console.log(url);
        this.titleService.setTitle("INKA Berichtswesen " + user);
        return this.http.post(url, parms, options)
            .map(this.extract)
            .catch(this.handleError);
    };
    SecurityService.prototype.logout = function () {
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userGroup');
    };
    SecurityService.prototype.getToken = function () {
        return sessionStorage.getItem('userToken');
    };
    SecurityService.prototype.getUserGroup = function () {
        return sessionStorage.getItem('userGroup');
    };
    SecurityService.prototype.isLoggedIn = function () {
        return this.getToken() != null;
    };
    SecurityService.prototype.checkLogin = function () {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
        }
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
    SecurityService.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    SecurityService.prototype.extract = function (res) {
        console.log('login' + res);
        var result = res.json();
        if (result.token && result.gruppe) {
            sessionStorage.setItem('userToken', result.token);
            sessionStorage.setItem('userGroup', result.gruppe);
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
    return SecurityService;
}());
SecurityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], SecurityService);

var AUTH_PROVIDERS = [{ provide: SecurityService, useClass: SecurityService }];
var _a, _b, _c;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/security.service.js.map

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(210);


/***/ }),

/***/ 74:
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lisa2_component__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleCollapse; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ToggleCollapse = (function (_super) {
    __extends(ToggleCollapse, _super);
    function ToggleCollapse() {
        var _this = _super.call(this) || this;
        _this.collapse = false;
        var lid = sessionStorage.getItem('title');
        _this.title = lid;
        var c = localStorage.getItem('collapsed');
        console.log(c);
        if (c == 'true') {
            _this.collapse = true;
        }
        else {
            _this.collapse = false;
        }
        return _this;
    }
    ToggleCollapse.prototype.toggleCollapse = function () {
        this.collapse = !this.collapse;
        var c = (this.collapse ? 'true' : 'false');
        console.log(c);
        localStorage.setItem('collapsed', c);
    };
    ToggleCollapse.prototype.colSize = function () {
        if (this.collapse) {
            return 'col-sm-12';
        }
        else {
            return 'col-sm-8';
        }
    };
    return ToggleCollapse;
}(__WEBPACK_IMPORTED_MODULE_0__lisa2_component__["a" /* LISA2Component */]));

//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/toggle-collapse.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
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
    return AbstractService;
}());
AbstractService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AbstractService);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/abstract.service.js.map

/***/ }),

/***/ 97:
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiegenschaftRumpf; });
var LiegenschaftRumpf = (function () {
    function LiegenschaftRumpf() {
    }
    return LiegenschaftRumpf;
}());

//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/liegenschaft-rumpf.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abstract_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjektdetailService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var _this = _super.call(this, http, router) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */].getWebServer() + 'ABWProjektDetailServlet';
        return _this;
    }
    ProjektdetailService.prototype.read = function (projektId, liegenschaftId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var token = sessionStorage.getItem('userToken');
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
        var token = sessionStorage.getItem('userToken');
        var parms = JSON.stringify({ action: "update", token: token, object: abw });
        return this.http.post(this.url, parms, options)
            .map(this.extractMessage)
            .catch(this.handleError);
    };
    ProjektdetailService.prototype.delete = function (projektId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var token = sessionStorage.getItem('userToken');
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
    return ProjektdetailService;
}(__WEBPACK_IMPORTED_MODULE_5__abstract_service__["a" /* AbstractService */]));
ProjektdetailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjektdetailService);

var _a, _b;
//# sourceMappingURL=/mnt/sdb1/home/suddendorf/angular/inkabw/src/projektdetail.service.js.map

/***/ })

},[681]);
//# sourceMappingURL=main.bundle.map