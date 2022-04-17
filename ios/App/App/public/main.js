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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _guards_language_show_language_page_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/language/show-language-page.guard */ 24909);
/* harmony import */ var _guards_on_boarding_show_boarding_page_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/on-boarding/show-boarding-page.guard */ 91542);
/* harmony import */ var _services_resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/resolver/data-resolver.service */ 8873);






const routes = [
    {
        path: '',
        redirectTo: 'language',
        pathMatch: 'full',
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/tabs/tabs.module */ 44838)).then((m) => m.TabsPageModule),
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
        resolve: {
            page: _services_resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_2__.DataResolverService,
        },
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_login-register_login-register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/login-register/login-register.module */ 64418)).then((m) => m.LoginRegisterPageModule),
    },
    {
        path: 'phone-number',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_phone-number_phone-number_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/phone-number/phone-number.module */ 26963)).then((m) => m.PhoneNumberPageModule),
    },
    {
        path: 'code',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_code_code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/code/code.module */ 8410)).then((m) => m.CodePageModule),
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_favourites_favourites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/favourites/favourites.module */ 79814)).then((m) => m.FavouritesPageModule),
    },
    {
        path: 'chnage-password/:userID',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_chnage-password_chnage-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/chnage-password/chnage-password.module */ 3027)).then(m => m.ChnagePasswordPageModule)
    },
    {
        path: 'image-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_image-modal_image-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/image-modal/image-modal.module */ 75202)).then(m => m.ImageModalPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _models_loginData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/loginData */ 80261);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ 9171);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/language/language.service */ 40301);
/* harmony import */ var _services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/utilities/utilities.service */ 11062);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_network_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/network/network.service */ 33401);
/* harmony import */ var _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/fcm/fcm.service */ 50701);














let AppComponent = class AppComponent {
    constructor(platform, languageService, util, router, auth, alertController, translate, network, menuCtrl, fcmService) {
        this.platform = platform;
        this.languageService = languageService;
        this.util = util;
        this.router = router;
        this.auth = auth;
        this.alertController = alertController;
        this.translate = translate;
        this.network = network;
        this.menuCtrl = menuCtrl;
        this.fcmService = fcmService;
        this.currentLanguage = '';
        this.logined = this.auth.isAuthenticated.value;
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
            {
                title: 'settings',
                url: '/tabs/main/settings',
                iconActive: './../assets/icon/settings-active.svg',
                iconInActive: './../assets/icon/settings-non-active.svg',
            },
        ];
        this.initializeApp();
        this.auth.getLoginedObservable().subscribe((val) => {
            this.logined = val;
        });
        console.log('logined : ' + this.logined);
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.languageService.setInitialAppLanguage();
            this.currentLanguage = this.languageService.getLanguage();
            console.log(`language is ${this.currentLanguage}`);
            this.util.getPlatformType();
            this.util.getDeviceID();
            this.getLoginStatus();
            this.fcmService.initFcm();
        });
    }
    getLoginStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loginStatus = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({ key: 'status' });
            if (loginStatus.value == _models_loginData__WEBPACK_IMPORTED_MODULE_2__.Status.Active) {
                this.auth.isLogined();
            }
            this.getUserNotifications();
        });
    }
    getUserNotifications() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const userID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({ key: 'userID' });
            console.log('stored user id : ' + parseInt(userID.value));
            this.auth.setNoOfNotifications(parseInt(userID.value));
            this.auth.userID.next(parseInt(userID.value));
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.logoutData = {
                lang: this.languageService.getLanguage(),
                user_id: this.auth.userID.value,
                device_id: this.util.deviceID,
            };
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: this.translate.instant('confirm logout'),
                buttons: [
                    {
                        text: this.translate.instant('ok'),
                        handler: () => {
                            this.logoutService();
                            this.menuCtrl.close();
                            this.router.navigateByUrl('/tabs/main');
                        },
                    },
                    {
                        text: this.translate.instant('cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    logoutService() {
        this.util.showLoadingSpinner().then((__) => {
            this.auth.logout(this.logoutData).subscribe((data) => {
                if (data.key == 1) {
                    console.log('login res :' + JSON.stringify(data));
                    this.auth.removeRegistrationData();
                }
                else {
                    this.util.showMessage(data.msg);
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService },
    { type: _services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__.UtilitiesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_8__.FcmService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 82003);
/* harmony import */ var _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/interceptor/interceptor.service */ 56600);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot({
                backButtonText: '',
                mode: 'md',
                scrollAssist: false,
                scrollPadding: false,
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient],
                },
            }),
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
                useClass: _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_2__.InterceptorService,
                multi: true,
            },
        ],
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
        this.savedLangauge = false;
    }
    canActivate(route, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'lang' });
            console.log('lang value :' + val.value);
            console.log('opened is ' + this.savedLangauge);
            if (val.value == null) {
                this.savedLangauge = true;
            }
            else {
                this.router.navigate(['/on-boarding']);
                this.savedLangauge = false;
            }
            return this.savedLangauge;
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
        //this.getData();
    }
    canActivate(_route, state) {
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
            return this.opened;
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

/***/ 80261:
/*!*************************************!*\
  !*** ./src/app/models/loginData.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["NonActive"] = "non-active";
    Status["Blocked"] = "blocked";
})(Status || (Status = {}));


/***/ }),

/***/ 9171:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var _language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/language.service */ 40301);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifications/notifications.service */ 31670);








let AuthService = class AuthService {
    constructor(httpclient, languageService, userNotifications) {
        this.httpclient = httpclient;
        this.languageService = languageService;
        this.userNotifications = userNotifications;
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this.userID = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
        this.noOfNotifications = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
        this.userToken = '';
    }
    storeStatusAfterRegisteration(data) {
        var _a;
        this.storeToken((_a = data.data) === null || _a === void 0 ? void 0 : _a.api_token);
        this.store('activation-status', data.data.is_active);
        this.store('confirmation-status', data.data.is_confirmed);
        this.setUserID(data.data.id);
    }
    storeStatusAfterLogin(data) {
        var _a, _b, _c, _d;
        this.isLogined();
        this.setUserID((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.id);
        this.storeToken((_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.api_token);
        this.store('status', data.status);
        this.storeUserId((_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.id);
        this.setNoOfNotifications((_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.id);
    }
    storeUserId(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: "userID",
                value: id.toString(),
            });
        });
    }
    removeRegistrationData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isLogout();
            this.removeToken();
            this.removeUserID();
            this.noOfNotifications.next(0);
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({ key: 'activation-status' });
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({ key: 'confirmation-status' });
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({ key: 'status' });
            //await Storage.clear();
        });
    }
    isLogined() {
        this.isAuthenticated.next(true);
    }
    isLogout() {
        this.isAuthenticated.next(false);
    }
    setUserID(userID) {
        console.log('set id to behavour sybject ' + userID);
        this.userID.next(userID);
    }
    removeUserID() {
        this.userID.next(0);
    }
    getStoredUserID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key: 'userID' });
            this.setUserID(parseInt(val.value));
            this.setNoOfNotifications(parseInt(val.value));
        });
    }
    setNoOfNotifications(userId) {
        // this.getUserIDObservable().subscribe((userID) => {
        //   if (userID) {
        const userData = {
            lang: this.languageService.getLanguage(),
            user_id: userId,
        };
        this.userNotifications.showNotification(userData).subscribe((data) => {
            if (data.key == 1) {
                this.noOfNotifications.next(data.data.length);
            }
        }, (err) => { });
        // }
        //});
    }
    getNoOfNotifications() {
        return this.noOfNotifications.asObservable();
    }
    getUserIDObservable() {
        return this.userID.asObservable();
    }
    getLoginedObservable() {
        return this.isAuthenticated.asObservable();
    }
    storeToken(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: 'USER-TOKEN',
                value: token,
            });
        });
    }
    removeToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
                key: 'USER-TOKEN',
            });
        });
    }
    storeActivationStatus(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: 'activation-status',
                value: status.toString(),
            });
        });
    }
    store(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: key,
                value: value,
            });
        });
    }
    getUserToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key: 'USER-TOKEN' });
            this.userToken = val.value;
        });
    }
    userData(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}show-user`, data);
    }
    updateUserData(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}update-user`, data);
    }
    login(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}login`, data);
    }
    register(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}register`, data);
    }
    activeAccount(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}active-account`, data);
    }
    logout(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}logout`, data);
    }
    forgetPassword(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}forget-password`, data);
    }
    changePassword(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}reset-password`, data);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 34257:
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let DataService = class DataService {
    constructor() {
        this.previousPage = '';
        this.data = [];
        this.dates = { from: '', to: '' };
    }
    setData(id, data) {
        console.log(JSON.stringify(data));
        this.data[id] = data;
    }
    getData(id) {
        return this.data[id];
    }
    setPreviousPage(val) {
        this.previousPage = val;
    }
    getPreviousPage() {
        return this.previousPage;
    }
    setDates(dates) {
        this.dates = dates;
        console.log('selected dates ' + JSON.stringify(dates));
    }
    getDates() {
        return this.dates;
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], DataService);



/***/ }),

/***/ 50701:
/*!*********************************************!*\
  !*** ./src/app/services/fcm/fcm.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FcmService": () => (/* binding */ FcmService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/push-notifications */ 6727);




let FcmService = class FcmService {
    constructor() {
        //if (Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === 'android') {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.isNativePlatform()) {
            this.initFcm();
        }
    }
    initFcm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // let permStatus = await PushNotifications.checkPermissions();
            // if (permStatus.receive === 'prompt') {
            //   permStatus = await PushNotifications.requestPermissions();
            // }
            // if (permStatus.receive !== 'granted') {
            //   throw new Error('User denied permissions!');
            // }
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.checkPermissions().then((permission) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                if (permission.receive == 'granted') {
                    yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.register();
                }
            }));
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registration', (token) => {
                console.info('Registration token: ', token.value);
                //alert('Registration token:' + token.value);
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registrationError', (err) => {
                console.error('Registration error: ', err.error);
                // alert('Registration error:' + err.error);
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
                console.log('Push notification received: ', JSON.stringify(notification));
                // alert('Push notification received: ' + JSON.stringify(notification));
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
                console.log('Push notification action performed', notification.actionId, notification.inputValue);
                alert('Push notification action performed' +
                    notification.actionId +
                    notification.inputValue);
            });
        });
    }
};
FcmService.ctorParameters = () => [];
FcmService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], FcmService);



/***/ }),

/***/ 56600:
/*!*************************************************************!*\
  !*** ./src/app/services/interceptor/interceptor.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorService": () => (/* binding */ InterceptorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../network/network.service */ 33401);
/* harmony import */ var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/utilities.service */ 11062);






let InterceptorService = class InterceptorService {
    constructor(network, util) {
        this.network = network;
        this.util = util;
    }
    intercept(request, next) {
        return next.handle(request).pipe(
        // map((event: HttpEvent<any>) => {
        //   if (event instanceof HttpResponse) {
        //     console.log('http request response', event);
        //   }
        //   return event;
        // }),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            this.network.listenToNetwork();
            // this.network.getNetworkStatusObservable().subscribe((status) => {
            //   console.log('current network status : '+status);
            //   if (!status) {
            //     this.util.showMessage('connection error');
            //   }
            // });
            console.error(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
};
InterceptorService.ctorParameters = () => [
    { type: _network_network_service__WEBPACK_IMPORTED_MODULE_0__.NetworkService },
    { type: _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService }
];
InterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], InterceptorService);



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
                //this.setLanguage('ar');
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

/***/ 33401:
/*!*****************************************************!*\
  !*** ./src/app/services/network/network.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/network */ 35609);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/utilities.service */ 11062);





let NetworkService = class NetworkService {
    constructor(util) {
        this.util = util;
        this.networkStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    }
    listenToNetwork() {
        _capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network.addListener('networkStatusChange', (status) => {
            console.log('Network status changed', status);
            if (!status) {
                this.util.showMessage('connection error');
            }
            this.networkStatus.next(status.connected);
        });
    }
    getNetworkStatus() {
        _capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network.getStatus().then((status) => {
            if (!status) {
                this.util.showMessage('connection error');
            }
            this.networkStatus.next(status.connected);
        });
    }
    getNetworkStatusObservable() {
        return this.networkStatus.asObservable();
    }
};
NetworkService.ctorParameters = () => [
    { type: _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService }
];
NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], NetworkService);



/***/ }),

/***/ 31670:
/*!*****************************************************************!*\
  !*** ./src/app/services/notifications/notifications.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let NotificationsService = class NotificationsService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    showNotification(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}show-notification`, data);
    }
    deleteNotification(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}delete-notification`, data);
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], NotificationsService);



/***/ }),

/***/ 8873:
/*!************************************************************!*\
  !*** ./src/app/services/resolver/data-resolver.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataResolverService": () => (/* binding */ DataResolverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.service */ 34257);



let DataResolverService = class DataResolverService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    resolve(route) {
        let id = route.paramMap.get('id');
        return this.dataService.getData(id);
    }
};
DataResolverService.ctorParameters = () => [
    { type: _data_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService }
];
DataResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], DataResolverService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/toast */ 85188);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 2233);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/device */ 94219);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);









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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__.Toast.show({
                text: this.translate.instant(message),
            });
        });
    }
    storeData(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: key,
                value: value,
            });
        });
    }
    getDataByKey(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key: key });
            console.log('openBoarding stored value :' + JSON.stringify(val));
            this.getValue(val.value);
        });
    }
    getValue(value) {
        return value;
    }
    showLoadingSpinner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('show loading');
            this.loading = yield this.loadingCtrl.create({
                mode: 'ios',
                spinner: 'crescent',
                cssClass: 'my-loading-class',
                backdropDismiss: false,
                animated: true
            });
            this.loading.present();
            return this.loading;
        });
    }
    dismissLoading() {
        console.log('hide loading');
        this.loadingCtrl.dismiss();
    }
    getUserLocation() {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const locationStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.requestPermissions().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const device = yield (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId()).uuid;
            this.setDeviceID(device);
        });
    }
    setFilters(filtersData) {
        this.filtersData = filtersData;
    }
    get filters() {
        return this.filtersData;
    }
    setClosedDates(closedDates) {
        this.closedDates = closedDates;
    }
    get itemClosedDates() {
        return this.closedDates;
    }
    getFormattedDate(date, format, lang) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).format(format);
    }
    getDay(date, lang) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).locale(lang).format('dddd');
    }
    getTime(date, lang) {
        let str = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('LTS'); //hh:ii:ss
        str = str.substring(0, str.length - 3);
        return str;
    }
    getDatesDifference(dateFrom, dateTo) {
        let days = Math.floor((new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
            1000 /
            60 /
            60 /
            24);
        return days;
    }
};
UtilitiesService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform }
];
UtilitiesService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
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
    Google_API_KEY: 'AIzaSyDl02ktqMdvzEwH-_oa7RREoI8Gr-6c9eQ',
    ImageBaseUrl: 'https://dalell.online/public/'
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" menuId=\"main\">\n      <ion-header class=\"header-image ion-no-border\">\n        <img\n          [ngClass]=\"currentLanguage == 'ar' ? 'image-right' : 'image-left'\"\n          src=\"./../assets/images/512.png\"\n        />\n      </ion-header>\n\n      <ion-content class=\"my-menu-content\">\n        <ion-list class=\"ion-padding\">\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let p of pages; let i = index\"\n            (click)=\"selectedIndex = i\"\n            routerDirection=\"root\"\n            [routerLink]=\"[p.url]\"\n            [class.selected]=\"selectedIndex == i\"\n          >\n            <ion-item lines=\"none\" detail=\"false\">\n              <ion-icon\n                slot=\"start\"\n                [src]=\"selectedIndex == i ? p.iconActive : p.iconInActive\"\n                [ngClass]=\"currentLanguage == 'ar' ? 'icon-ar' : 'icon-en'\"\n              ></ion-icon>\n              <ion-label\n                [ngStyle]=\"\n                  currentLanguage == 'ar'\n                    ? { 'margin-right': '10px' }\n                    : { 'margin-left': '10px' }\n                \"\n                >{{ p.title | translate }}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n\n      <ion-footer *ngIf=\"logined\" class=\"ion-padding logout-section ion-no-border\">\n        <ion-item lines=\"none\" detail=\"false\" (click)=\"logout()\">\n          <ion-icon slot=\"start\" src=\"./../assets/icon/logout.svg\"></ion-icon>\n          <ion-label>{{ \"logout\" | translate }}</ion-label>\n        </ion-item>\n      </ion-footer>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 32139,
	"./af.js": 32139,
	"./ar": 22600,
	"./ar-dz": 81001,
	"./ar-dz.js": 81001,
	"./ar-kw": 99842,
	"./ar-kw.js": 99842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 15452,
	"./ar-ma.js": 15452,
	"./ar-sa": 11802,
	"./ar-sa.js": 11802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 22600,
	"./az": 96375,
	"./az.js": 96375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 85236,
	"./bg.js": 85236,
	"./bm": 81704,
	"./bm.js": 81704,
	"./bn": 94506,
	"./bn-bd": 34466,
	"./bn-bd.js": 34466,
	"./bn.js": 94506,
	"./bo": 47891,
	"./bo.js": 47891,
	"./br": 93348,
	"./br.js": 93348,
	"./bs": 84848,
	"./bs.js": 84848,
	"./ca": 35928,
	"./ca.js": 35928,
	"./cs": 31839,
	"./cs.js": 31839,
	"./cv": 59151,
	"./cv.js": 59151,
	"./cy": 35761,
	"./cy.js": 35761,
	"./da": 56686,
	"./da.js": 56686,
	"./de": 85177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 54407,
	"./de-ch.js": 54407,
	"./de.js": 85177,
	"./dv": 79729,
	"./dv.js": 79729,
	"./el": 60430,
	"./el.js": 60430,
	"./en-au": 28430,
	"./en-au.js": 28430,
	"./en-ca": 61139,
	"./en-ca.js": 61139,
	"./en-gb": 56747,
	"./en-gb.js": 56747,
	"./en-ie": 79466,
	"./en-ie.js": 79466,
	"./en-il": 52121,
	"./en-il.js": 52121,
	"./en-in": 41167,
	"./en-in.js": 41167,
	"./en-nz": 62030,
	"./en-nz.js": 62030,
	"./en-sg": 43646,
	"./en-sg.js": 43646,
	"./eo": 73126,
	"./eo.js": 73126,
	"./es": 38819,
	"./es-do": 69293,
	"./es-do.js": 69293,
	"./es-mx": 65304,
	"./es-mx.js": 65304,
	"./es-us": 66068,
	"./es-us.js": 66068,
	"./es.js": 38819,
	"./et": 23291,
	"./et.js": 23291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 70043,
	"./fa.js": 70043,
	"./fi": 16138,
	"./fi.js": 16138,
	"./fil": 11466,
	"./fil.js": 11466,
	"./fo": 76803,
	"./fo.js": 76803,
	"./fr": 65523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 69001,
	"./fr-ch.js": 69001,
	"./fr.js": 65523,
	"./fy": 21116,
	"./fy.js": 21116,
	"./ga": 66151,
	"./ga.js": 66151,
	"./gd": 93094,
	"./gd.js": 93094,
	"./gl": 11279,
	"./gl.js": 11279,
	"./gom-deva": 64458,
	"./gom-deva.js": 64458,
	"./gom-latn": 66320,
	"./gom-latn.js": 66320,
	"./gu": 78658,
	"./gu.js": 78658,
	"./he": 52153,
	"./he.js": 52153,
	"./hi": 98732,
	"./hi.js": 98732,
	"./hr": 84960,
	"./hr.js": 84960,
	"./hu": 76339,
	"./hu.js": 76339,
	"./hy-am": 11862,
	"./hy-am.js": 11862,
	"./id": 71068,
	"./id.js": 71068,
	"./is": 61260,
	"./is.js": 61260,
	"./it": 1007,
	"./it-ch": 78063,
	"./it-ch.js": 78063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 92390,
	"./jv.js": 92390,
	"./ka": 35958,
	"./ka.js": 35958,
	"./kk": 67216,
	"./kk.js": 67216,
	"./km": 61061,
	"./km.js": 61061,
	"./kn": 24060,
	"./kn.js": 24060,
	"./ko": 55216,
	"./ko.js": 55216,
	"./ku": 50894,
	"./ku.js": 50894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 38381,
	"./lo.js": 38381,
	"./lt": 56118,
	"./lt.js": 56118,
	"./lv": 67889,
	"./lv.js": 67889,
	"./me": 94274,
	"./me.js": 94274,
	"./mi": 39226,
	"./mi.js": 39226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 27938,
	"./ml.js": 27938,
	"./mn": 35456,
	"./mn.js": 35456,
	"./mr": 94393,
	"./mr.js": 94393,
	"./ms": 93647,
	"./ms-my": 33049,
	"./ms-my.js": 33049,
	"./ms.js": 93647,
	"./mt": 26097,
	"./mt.js": 26097,
	"./my": 66277,
	"./my.js": 66277,
	"./nb": 67245,
	"./nb.js": 67245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 42557,
	"./nl-be": 20478,
	"./nl-be.js": 20478,
	"./nl.js": 42557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 83131,
	"./oc-lnc.js": 83131,
	"./pa-in": 51731,
	"./pa-in.js": 51731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 41178,
	"./pt-br": 56558,
	"./pt-br.js": 56558,
	"./pt.js": 41178,
	"./ro": 84138,
	"./ro.js": 84138,
	"./ru": 73380,
	"./ru.js": 73380,
	"./sd": 42889,
	"./sd.js": 42889,
	"./se": 22774,
	"./se.js": 22774,
	"./si": 53776,
	"./si.js": 53776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 93871,
	"./sl.js": 93871,
	"./sq": 44228,
	"./sq.js": 44228,
	"./sr": 40774,
	"./sr-cyrl": 61928,
	"./sr-cyrl.js": 61928,
	"./sr.js": 40774,
	"./ss": 83176,
	"./ss.js": 83176,
	"./sv": 52422,
	"./sv.js": 52422,
	"./sw": 71621,
	"./sw.js": 71621,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 18025,
	"./te.js": 18025,
	"./tet": 53934,
	"./tet.js": 53934,
	"./tg": 99958,
	"./tg.js": 99958,
	"./th": 84251,
	"./th.js": 84251,
	"./tk": 65494,
	"./tk.js": 65494,
	"./tl-ph": 38568,
	"./tl-ph.js": 38568,
	"./tlh": 73158,
	"./tlh.js": 73158,
	"./tr": 49574,
	"./tr.js": 49574,
	"./tzl": 64311,
	"./tzl.js": 64311,
	"./tzm": 99990,
	"./tzm-latn": 42380,
	"./tzm-latn.js": 42380,
	"./tzm.js": 99990,
	"./ug-cn": 52356,
	"./ug-cn.js": 52356,
	"./uk": 54934,
	"./uk.js": 54934,
	"./ur": 84515,
	"./ur.js": 84515,
	"./uz": 40058,
	"./uz-latn": 41875,
	"./uz-latn.js": 41875,
	"./uz.js": 40058,
	"./vi": 13325,
	"./vi.js": 13325,
	"./x-pseudo": 39208,
	"./x-pseudo.js": 39208,
	"./yo": 18742,
	"./yo.js": 18742,
	"./zh-cn": 42378,
	"./zh-cn.js": 42378,
	"./zh-hk": 21074,
	"./zh-hk.js": 21074,
	"./zh-mo": 74671,
	"./zh-mo.js": 74671,
	"./zh-tw": 20259,
	"./zh-tw.js": 20259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header-image img {\n  height: 250px;\n  width: 100%;\n  object-fit: cover;\n}\n.header-image .image-right {\n  border-radius: 0px 0px 80px 0px !important;\n}\n.header-image .image-left {\n  border-radius: 0px 0px 80px 0px !important;\n}\n.my-menu-content ion-item ion-icon {\n  font-size: 16px;\n}\n.my-menu-content ion-item .icon-ar {\n  margin: 0px 8px 0 0;\n}\n.my-menu-content ion-item .icon-en {\n  margin: 0px 0 0 8px;\n}\n.my-menu-content ion-item .icon-margin-left {\n  margin: 0 0 0 10px;\n}\n.my-menu-content ion-item .icon-margin-right {\n  margin: 0 10px 0 0;\n}\n.my-menu-content .selected ion-item::part(native) {\n  background-image: linear-gradient(to left, var(--ion-color-primary), var(--ion-color-secondary));\n  border-radius: 30px;\n  width: 80%;\n  color: var(--ion-color-white);\n}\n.my-menu-content ion-label {\n  font-size: 16px;\n}\n.logout-section ion-item {\n  margin-bottom: 8px;\n}\n.logout-section ion-item ion-icon {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsMENBQUE7QUFESjtBQUlFO0VBQ0UsMENBQUE7QUFGSjtBQVFJO0VBQ0UsZUFBQTtBQUxOO0FBUUk7RUFDRSxtQkFBQTtBQU5OO0FBU0k7RUFDRSxtQkFBQTtBQVBOO0FBVUk7RUFDRSxrQkFBQTtBQVJOO0FBV0k7RUFDRSxrQkFBQTtBQVROO0FBY007RUFDRSxnR0FBQTtFQUtBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBaEJSO0FBcUJFO0VBQ0UsZUFBQTtBQW5CSjtBQXdCRTtFQUNFLGtCQUFBO0FBckJKO0FBc0JJO0VBQ0UsZUFBQTtBQXBCTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltYWdlIHtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG5cbiAgLmltYWdlLXJpZ2h0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW1hZ2UtbGVmdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4MHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5teS1tZW51LWNvbnRlbnQge1xuICBpb24taXRlbSB7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5pY29uLWFyIHtcbiAgICAgIG1hcmdpbjogMHB4IDhweCAwIDA7XG4gICAgfVxuXG4gICAgLmljb24tZW4ge1xuICAgICAgbWFyZ2luOiAwcHggMCAwIDhweDtcbiAgICB9XG5cbiAgICAuaWNvbi1tYXJnaW4tbGVmdCB7XG4gICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgfVxuXG4gICAgLmljb24tbWFyZ2luLXJpZ2h0IHtcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICB9XG4gIH1cbiAgLnNlbGVjdGVkIHtcbiAgICBpb24taXRlbSB7XG4gICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgdG8gbGVmdCxcbiAgICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gICAgICAgICAgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSlcbiAgICAgICAgKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmxvZ291dC1zZWN0aW9uIHtcbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map