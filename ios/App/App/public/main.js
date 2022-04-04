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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_favourites_favourites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/favourites/favourites.module */ 79814)).then((m) => m.FavouritesPageModule),
    },
    {
        path: 'chnage-password/:userID',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_chnage-password_chnage-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/chnage-password/chnage-password.module */ 3027)).then(m => m.ChnagePasswordPageModule)
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
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
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
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/push-notifications */ 6727);














let AppComponent = class AppComponent {
    constructor(platform, languageService, util, router, auth, alertController, translate, network, menuCtrl) {
        this.platform = platform;
        this.languageService = languageService;
        this.util = util;
        this.router = router;
        this.auth = auth;
        this.alertController = alertController;
        this.translate = translate;
        this.network = network;
        this.menuCtrl = menuCtrl;
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
        this.initFcm();
    }
    initFcm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let permStatus = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.checkPermissions();
            if (permStatus.receive === 'prompt') {
                permStatus = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.requestPermissions();
            }
            if (permStatus.receive !== 'granted') {
                throw new Error('User denied permissions!');
            }
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.register();
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.addListener('registration', (token) => {
                console.info('Registration token: ', token.value);
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.addListener('registrationError', (err) => {
                console.error('Registration error: ', err.error);
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
                console.log('Push notification received: ', notification);
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
                console.log('Push notification action performed', notification.actionId, notification.inputValue);
            });
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.languageService.setInitialAppLanguage();
            this.currentLanguage = this.languageService.getLanguage();
            console.log(`language is ${this.currentLanguage}`);
            this.util.getPlatformType();
            this.util.getDeviceID();
            // this.getLoginStatus();
        });
    }
    getLoginStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loginStatus = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({ key: 'status' });
            if (loginStatus.value == _models_loginData__WEBPACK_IMPORTED_MODULE_2__.Status.Active) {
                this.auth.isLogined();
                this.auth.getLoginedObservable().subscribe((val) => {
                    this.logined = val;
                });
            }
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.auth.getUserIDObservable().subscribe((val) => {
                this.logoutData = {
                    lang: this.languageService.getLanguage(),
                    user_id: val,
                    device_id: this.util.deviceID,
                };
            });
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
                    this.auth.isLogout();
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
                useClass: _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_2__.InterceptorService,
                multi: true
            }],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 872);






let AuthService = class AuthService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.userID = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
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
        var _a;
        this.isLogined();
        this.setUserID(data.data.id);
        this.storeToken((_a = data.data) === null || _a === void 0 ? void 0 : _a.api_token);
        this.store('status', data.status);
        this.store('userID', data.data.id);
    }
    removeRegistrationData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.removeToken();
            this.removeUserID();
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({ key: 'activation-status' });
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({ key: 'confirmation-status' });
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({ key: 'status' });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key: 'userID' });
            this.setUserID(parseInt(val.value));
        });
    }
    getUserIDObservable() {
        return this.userID.asObservable();
    }
    getLoginedObservable() {
        return this.isAuthenticated.asObservable();
    }
    storeToken(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: 'USER-TOKEN',
                value: token,
            });
        });
    }
    removeToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
                key: 'USER-TOKEN',
            });
        });
    }
    storeActivationStatus(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: 'activation-status',
                value: status.toString(),
            });
        });
    }
    store(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
                key: key,
                value: value,
            });
        });
    }
    getUserToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../network/network.service */ 33401);
/* harmony import */ var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/utilities.service */ 11062);







let InterceptorService = class InterceptorService {
    constructor(network, util) {
        this.network = network;
        this.util = util;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                console.log('http request response', event);
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.network.getNetworkStatus();
            this.network.getNetworkStatusObservable().subscribe((status) => {
                console.log('current network status : ' + status);
                if (!status) {
                    this.util.showMessage('connection error');
                }
            });
            console.error(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
};
InterceptorService.ctorParameters = () => [
    { type: _network_network_service__WEBPACK_IMPORTED_MODULE_0__.NetworkService },
    { type: _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService }
];
InterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/network */ 35609);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 41119);




let NetworkService = class NetworkService {
    constructor() {
        this.networkStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    }
    listenToNetwork() {
        _capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network.addListener('networkStatusChange', (status) => {
            console.log('Network status changed', status);
        });
    }
    getNetworkStatus() {
        _capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network.getStatus().then((status) => {
            this.networkStatus.next(status.connected);
        });
    }
    getNetworkStatusObservable() {
        return this.networkStatus.asObservable();
    }
};
NetworkService.ctorParameters = () => [];
NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], NetworkService);



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