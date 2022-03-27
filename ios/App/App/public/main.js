(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _guards_language_show_language_page_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/language/show-language-page.guard */ 24909);
/* harmony import */ var _guards_on_boarding_show_boarding_page_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/on-boarding/show-boarding-page.guard */ 91542);





const routes = [
    {
        path: '',
        redirectTo: 'language',
        pathMatch: 'full',
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/tabs/tabs.module */ 44838)).then((m) => m.TabsPageModule),
    },
    {
        path: 'language',
        canActivate: [_guards_language_show_language_page_guard__WEBPACK_IMPORTED_MODULE_0__.ShowLanguagePageGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_language_language_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/language/language.module */ 68561)).then((m) => m.LanguagePageModule),
    },
    {
        path: 'on-boarding',
        canActivate: [_guards_on_boarding_show_boarding_page_guard__WEBPACK_IMPORTED_MODULE_1__.ShowBoardingPageGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_onboarding_on-boarding_on-boarding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/onboarding/on-boarding/on-boarding.module */ 30643)).then((m) => m.OnBoardingPageModule),
    },
    {
        path: 'login-register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_auth_login-register_login-register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/login-register/login-register.module */ 64418)).then((m) => m.LoginRegisterPageModule),
    },
    {
        path: 'phone-number',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_phone-number_phone-number_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/phone-number/phone-number.module */ 26963)).then((m) => m.PhoneNumberPageModule),
    },
    {
        path: 'code',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_auth_code_code_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/code/code.module */ 8410)).then((m) => m.CodePageModule),
    },
    {
        path: 'password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_password_password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/password/password.module */ 35596)).then((m) => m.PasswordPageModule),
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/notifications/notifications.module */ 74193)).then((m) => m.NotificationsPageModule),
    },
    {
        path: 'contact-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/contact-us/contact-us.module */ 46965)).then((m) => m.ContactUsPageModule),
    },
    {
        path: 'policy',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_policy_policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/policy/policy.module */ 93589)).then((m) => m.PolicyPageModule),
    },
    {
        path: 'about',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/about/about.module */ 89423)).then((m) => m.AboutPageModule),
    },
    {
        path: 'favourites',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_favourites_favourites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/favourites/favourites.module */ 79814)).then((m) => m.FavouritesPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _guards_language_show_language_page_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/language/show-language-page.guard */ 24909);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/language/language.service */ 40301);
/* harmony import */ var _services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/utilities/utilities.service */ 11062);








let AppComponent = class AppComponent {
    constructor(platform, languageService, langaugeGuard, util) {
        this.platform = platform;
        this.languageService = languageService;
        this.langaugeGuard = langaugeGuard;
        this.util = util;
        this.currentLanguage = '';
        this.pages = [
            {
                title: 'main',
                url: '/tabs/main',
                iconActive: './../assets/icon/home-active.svg',
                iconInActive: './../assets/icon/home-inactive.svg',
            },
            {
                title: 'contact-us',
                url: '/tabs/main/contact-us',
                iconActive: './../assets/icon/contact-active.svg',
                iconInActive: './../assets/icon/contact-inactive.svg',
            },
            {
                title: 'policy',
                url: '/tabs/main/policy',
                iconActive: './../assets/icon/policy-active.svg',
                iconInActive: './../assets/icon/policy-inactive.svg',
            },
            {
                title: 'about',
                url: '/tabs/main/about',
                iconActive: './../assets/icon/about-active.svg',
                iconInActive: './../assets/icon/about-inactive.svg',
            },
            {
                title: 'favourites',
                url: '/tabs/main/favourites',
                iconActive: './../assets/icon/heart-active.svg',
                iconInActive: './../assets/icon/heart-inactive.svg',
            },
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.languageService.setInitialAppLanguage();
            this.currentLanguage = this.languageService.getLanguage();
            console.log(`language is ${this.currentLanguage}`);
            this.util.getPlatformType();
            this.util.getDeviceID();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _guards_language_show_language_page_guard__WEBPACK_IMPORTED_MODULE_2__.ShowLanguagePageGuard },
    { type: _services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 82003);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot({
                backButtonText: '',
                mode: 'md',
                scrollAssist: false,
                scrollPadding: false,
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient],
                },
            }),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 24909:
/*!*************************************************************!*\
  !*** ./src/app/guards/language/show-language-page.guard.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowLanguagePageGuard": () => (/* binding */ ShowLanguagePageGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 872);




let ShowLanguagePageGuard = class ShowLanguagePageGuard {
    constructor(router) {
        this.router = router;
        this.selectLangauge = false;
        this.getData();
    }
    canActivate(route, state) {
        return this.selectLangauge;
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'lang' });
            console.log('lang value :' + val.value);
            console.log('opened is ' + this.selectLangauge);
            if (val.value == null) {
                this.selectLangauge = true;
            }
            else {
                this.router.navigate(['/on-boarding']);
                this.selectLangauge = false;
            }
        });
    }
};
ShowLanguagePageGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ShowLanguagePageGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ShowLanguagePageGuard);



/***/ }),

/***/ 91542:
/*!****************************************************************!*\
  !*** ./src/app/guards/on-boarding/show-boarding-page.guard.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowBoardingPageGuard": () => (/* binding */ ShowBoardingPageGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 872);




let ShowBoardingPageGuard = class ShowBoardingPageGuard {
    constructor(router) {
        this.router = router;
        this.opened = false;
        this.getData();
    }
    canActivate(route, state) {
        return this.opened;
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'openBoarding' });
            console.log('openBoarding value :' + val.value);
            console.log('opened is ' + this.opened);
            if (val.value == null) {
                this.opened = true;
            }
            else {
                this.router.navigate(['/tabs/main']);
                this.opened = false;
            }
        });
    }
};
ShowBoardingPageGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ShowBoardingPageGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ShowBoardingPageGuard);



/***/ }),

/***/ 40301:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 90466);





let LanguageService = class LanguageService {
    constructor(platform, translate) {
        this.platform = platform;
        this.translate = translate;
        this.selected = '';
    }
    setInitialAppLanguage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const lang = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'lang' });
            console.log(`stored lang is ${lang.value}`);
            console.log(`stored lang is obj ` + JSON.stringify(lang));
            if (lang.value != null) {
                if (lang.value == 'ar') {
                    document.documentElement.dir = 'rtl';
                }
                else {
                    document.documentElement.dir = 'ltr';
                }
                this.setLanguage(lang.value);
                console.log(`stored lang is ${lang.value}`);
                this.selected = lang.value;
                this.translate.setDefaultLang(lang.value);
            }
            else if (lang.value == null) {
                console.log(`no language`);
                document.documentElement.dir = 'rtl';
                //  this.setLanguage('ar');
                this.selected = 'ar';
                this.translate.setDefaultLang('ar');
            }
        });
    }
    getLanguage() {
        return this.platform.isRTL ? 'ar' : 'en';
    }
    setLanguage(lng) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log('set this language :' + lng);
            this.translate.use(lng);
            this.selected = lng;
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                key: 'lang',
                value: lng,
            });
        });
    }
};
LanguageService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService }
];
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], LanguageService);



/***/ }),

/***/ 11062:
/*!*********************************************************!*\
  !*** ./src/app/services/utilities/utilities.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesService": () => (/* binding */ UtilitiesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/toast */ 85188);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 2233);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/device */ 94219);








let UtilitiesService = class UtilitiesService {
    constructor(translate, loadingCtrl, plt) {
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.userLocation = { lat: 0, lng: 0 };
    }
    setPlatform(val) {
        console.log('current platform is ' + val);
        this.platform = val;
    }
    setDeviceID(val) {
        console.log('deviceID is ' + val);
        this.deviceID = val;
    }
    showMessage(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__.Toast.show({
                text: this.translate.instant(message),
            });
        });
    }
    storeData(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: key,
                value: value,
            });
        });
    }
    getDataByKey(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key: key });
            console.log('openBoarding stored value :' + JSON.stringify(val));
            this.getValue(val.value);
        });
    }
    getValue(value) {
        return value;
    }
    showLoadingSpinner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                mode: 'md',
                spinner: 'dots',
                cssClass: 'my-loading-class',
                backdropDismiss: false,
            });
            this.loading.present();
            return this.loading;
        });
    }
    getUserLocation() {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const locationStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.requestPermissions().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (res['location'] == 'granted') {
                    const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition();
                    console.log(coordinates);
                    this.userLocation.lat = coordinates['coords'].latitude;
                    this.userLocation.lng = coordinates['coords'].longitude;
                }
            }));
            resolve(locationStatus);
        }));
    }
    getPlatformType() {
        return new Promise((resolve, reject) => {
            if (this.plt.is('android')) {
                this.setPlatform('android');
            }
            else if (this.plt.is('ios')) {
                this.setPlatform('ios');
            }
            resolve(this.platform);
        });
    }
    getDeviceID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const device = yield (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId()).uuid;
            this.setDeviceID(device);
        });
    }
    dismissLoading() {
        this.loadingCtrl.dismiss();
    }
};
UtilitiesService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
UtilitiesService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], UtilitiesService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    BASE_URL: 'https://dalell.online/api/',
    Google_API_KEY: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" menuId=\"main\">\n      <ion-header class=\"header-image ion-no-border\">\n        <img\n          [ngClass]=\"currentLanguage == 'ar' ? 'image-right' : 'image-left'\"\n          src=\"./../assets/images/512.png\"\n        />\n      </ion-header>\n\n      <ion-content class=\"my-menu-content\">\n        <ion-list class=\"ion-padding\">\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let p of pages; let i = index\"\n            (click)=\"selectedIndex = i\"\n            routerDirection=\"root\"\n            [routerLink]=\"[p.url]\"\n            [class.selected]=\"selectedIndex == i\"\n          >\n            <ion-item lines=\"none\" detail=\"false\">\n              <ion-icon\n                slot=\"start\"\n                [src]=\"selectedIndex == i ? p.iconActive : p.iconInActive\"\n                [ngClass]=\"currentLanguage == 'ar' ? 'icon-ar' : 'icon-en'\"\n              ></ion-icon>\n              <ion-label\n                [ngStyle]=\"\n                  currentLanguage == 'ar'\n                    ? { 'margin-right': '10px' }\n                    : { 'margin-left': '10px' }\n                \"\n                >{{ p.title | translate }}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n\n      <ion-footer class=\"ion-padding logout-section ion-no-border\">\n        <ion-item lines=\"none\" detail=\"false\" routerLink=\"/login-register\">\n          <ion-icon slot=\"start\" src=\"./../assets/icon/logout.svg\"></ion-icon>\n          <ion-label>{{ \"logout\" | translate }}</ion-label>\n        </ion-item>\n      </ion-footer>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header-image img {\n  height: 250px;\n  width: 100%;\n  object-fit: cover;\n}\n.header-image .image-right {\n  border-radius: 0px 0px 80px 0px !important;\n}\n.header-image .image-left {\n  border-radius: 0px 0px 80px 0px !important;\n}\n.my-menu-content ion-item ion-icon {\n  font-size: 16px;\n}\n.my-menu-content ion-item .icon-ar {\n  margin: 0px 8px 0 0;\n}\n.my-menu-content ion-item .icon-en {\n  margin: 0px 0 0 8px;\n}\n.my-menu-content ion-item .icon-margin-left {\n  margin: 0 0 0 10px;\n}\n.my-menu-content ion-item .icon-margin-right {\n  margin: 0 10px 0 0;\n}\n.my-menu-content .selected ion-item::part(native) {\n  background-image: linear-gradient(to left, var(--ion-color-primary), var(--ion-color-secondary));\n  border-radius: 30px;\n  width: 80%;\n  color: var(--ion-color-white);\n}\n.my-menu-content ion-label {\n  font-size: 16px;\n}\n.logout-section ion-item {\n  margin-bottom: 8px;\n}\n.logout-section ion-item ion-icon {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsMENBQUE7QUFESjtBQUlFO0VBQ0UsMENBQUE7QUFGSjtBQVFJO0VBQ0UsZUFBQTtBQUxOO0FBUUk7RUFDRSxtQkFBQTtBQU5OO0FBU0k7RUFDRSxtQkFBQTtBQVBOO0FBVUk7RUFDRSxrQkFBQTtBQVJOO0FBV0k7RUFDRSxrQkFBQTtBQVROO0FBYUk7RUFDRSxnR0FBQTtFQUtBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBZk47QUFtQkU7RUFDRSxlQUFBO0FBakJKO0FBc0JFO0VBQ0Usa0JBQUE7QUFuQko7QUFvQkk7RUFDRSxlQUFBO0FBbEJOIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2Uge1xuICBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAuaW1hZ2UtcmlnaHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggODBweCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWFnZS1sZWZ0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm15LW1lbnUtY29udGVudCB7XG4gIGlvbi1pdGVtIHtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLmljb24tYXIge1xuICAgICAgbWFyZ2luOiAwcHggOHB4IDAgMDtcbiAgICB9XG5cbiAgICAuaWNvbi1lbiB7XG4gICAgICBtYXJnaW46IDBweCAwIDAgOHB4O1xuICAgIH1cblxuICAgIC5pY29uLW1hcmdpbi1sZWZ0IHtcbiAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICB9XG5cbiAgICAuaWNvbi1tYXJnaW4tcmlnaHQge1xuICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICAgIH1cbiAgfVxuICAuc2VsZWN0ZWQge1xuICAgIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byBsZWZ0LFxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpXG4gICAgICApO1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICB9XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4ubG9nb3V0LXNlY3Rpb24ge1xuICBpb24taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map