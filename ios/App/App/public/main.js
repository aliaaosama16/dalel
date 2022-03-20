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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



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
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 60810)).then((m) => m.FolderPageModule),
    },
    {
        path: 'language',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_language_language_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/language/language.module */ 68561)).then((m) => m.LanguagePageModule),
    },
    {
        path: 'on-boarding',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_modules_onboarding_on-boarding_on-boarding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/onboarding/on-boarding/on-boarding.module */ 30643)).then((m) => m.OnBoardingPageModule),
    },
    {
        path: 'login-register',
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/contact-us/contact-us.module */ 46965)).then((m) => m.ContactUsPageModule),
    },
    {
        path: 'policy',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_policy_policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/policy/policy.module */ 93589)).then((m) => m.PolicyPageModule),
    },
    {
        path: 'about',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/about/about.module */ 89423)).then((m) => m.AboutPageModule),
    },
    {
        path: 'favourites',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_favourites_favourites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/favourites/favourites.module */ 79814)).then((m) => m.FavouritesPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/language/language.service */ 40301);






let AppComponent = class AppComponent {
    constructor(platform, languageService) {
        this.platform = platform;
        this.languageService = languageService;
        this.currentLanguage = '';
        this.selectedIndex = 0;
        this.pages = [
            {
                title: 'main',
                url: '/tabs/main',
                iconActive: './../assets/icon/home-active.svg',
                iconInActive: './../assets/icon/home-inactive.svg',
            },
            {
                title: 'contact-us',
                url: '/contact-us',
                iconActive: './../assets/icon/contact-active.svg',
                iconInActive: './../assets/icon/contact-inactive.svg',
            },
            {
                title: 'policy',
                url: '/policy',
                iconActive: './../assets/icon/policy-active.svg',
                iconInActive: './../assets/icon/policy-inactive.svg',
            },
            {
                title: 'about',
                url: '/about',
                iconActive: './../assets/icon/about-active.svg',
                iconInActive: './../assets/icon/about-inactive.svg',
            },
            {
                title: 'favourites',
                url: '/favourites',
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
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ 29260);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);











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
            ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule,
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
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



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
            // let language = this.translate.getBrowserLang();
            // console.log(`lang is ${language }`)
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
                this.setLanguage("ar");
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
    production: false
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" menuId=\"main\">\n      <ion-header class=\"header-image ion-no-border\">\n        <img\n          [ngClass]=\"currentLanguage == 'ar' ? 'image-right' : 'image-left'\"\n          src=\"./../assets/images/512.png\"\n        />\n      </ion-header>\n\n      <ion-content class=\"my-menu-content\">\n        <ion-list class=\"ion-padding\">\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let p of pages; let i = index\"\n            (click)=\"selectedIndex = i\"\n            routerDirection=\"root\"\n            [routerLink]=\"[p.url]\"\n            [class.selected]=\"selectedIndex == i\"\n          >\n            <ion-item lines=\"none\" detail=\"false\">\n              <ion-icon\n                slot=\"start\"\n                [src]=\"selectedIndex == i ? p.iconActive : p.iconInActive\"\n                [ngClass]=\"currentLanguage == 'ar' ? 'icon-ar' : 'icon-en'\"\n              ></ion-icon>\n              <ion-label\n                [ngStyle]=\"\n                  currentLanguage == 'ar'\n                    ? { 'margin-right': '10px' }\n                    : { 'margin-left': '10px' }\n                \"\n                >{{ p.title | translate }}  </ion-label\n              >\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n\n      <ion-footer class=\"ion-padding logout-section ion-no-border\">\n        <ion-item lines=\"none\" detail=\"false\" routerLink=\"/login-register\">\n          <ion-icon slot=\"start\" src=\"./../assets/icon/logout.svg\"></ion-icon>\n          <ion-label>{{ \"logout\" | translate }}</ion-label>\n        </ion-item>\n      </ion-footer>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

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
module.exports = ".header-image img {\n  height: 250px;\n  width: 100%;\n  object-fit: cover;\n}\n.header-image .image-right {\n  border-radius: 0px 0px 80px 0px !important;\n}\n.header-image .image-left {\n  border-radius: 0px 0px 80px 0px !important;\n}\n.my-menu-content ion-item ion-icon {\n  font-size: 16px;\n}\n.my-menu-content ion-item .icon-ar {\n  margin: 0px 8px 0 0;\n}\n.my-menu-content ion-item .icon-en {\n  margin: 0px 0 0 8px;\n}\n.my-menu-content ion-item .icon-margin-left {\n  margin: 0 0 0 10px;\n}\n.my-menu-content ion-item .icon-margin-right {\n  margin: 0 10px 0 0;\n}\n.my-menu-content .selected ion-item::part(native) {\n  background-image: linear-gradient(to left, var(--ion-color-primary), var(--ion-color-secondary));\n  border-radius: 30px;\n  width: 80%;\n  color: var(--ion-color-white);\n}\n.my-menu-content ion-label {\n  font-size: 16px;\n}\n.logout-section ion-item {\n  margin-bottom: 8px;\n}\n.logout-section ion-item ion-icon {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1FO0VBQ0UsMENBQUE7QUFKSjtBQU9FO0VBQ0UsMENBQUE7QUFMSjtBQWFJO0VBQ0UsZUFBQTtBQVZOO0FBYUk7RUFDRSxtQkFBQTtBQVhOO0FBY0k7RUFFRSxtQkFBQTtBQWJOO0FBZ0JJO0VBQ0Usa0JBQUE7QUFkTjtBQWlCSTtFQUNFLGtCQUFBO0FBZk47QUFtQkk7RUFDRSxnR0FBQTtFQUtBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBckJOO0FBbURFO0VBQ0UsZUFBQTtBQWpESjtBQXNFRTtFQUNFLGtCQUFBO0FBbkVKO0FBb0VJO0VBQ0UsZUFBQTtBQWxFTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tbWVudSBpb24tY29udGVudCB7XG4vLyAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbi8vIH1cbi5oZWFkZXItaW1hZ2Uge1xuICBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAuaW1hZ2UtcmlnaHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggODBweCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWFnZS1sZWZ0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggODBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5teS1tZW51LWNvbnRlbnQge1xuICBpb24taXRlbSB7XG4gICAgLy9tYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5pY29uLWFye1xuICAgICAgbWFyZ2luOiAwcHggOHB4IDAgMCA7XG4gICAgfVxuXG4gICAgLmljb24tZW57XG4gICAgICBcbiAgICAgIG1hcmdpbjogMHB4IDAgMCA4cHg7XG4gICAgfVxuXG4gICAgLmljb24tbWFyZ2luLWxlZnQge1xuICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICAgIH1cblxuICAgIC5pY29uLW1hcmdpbi1yaWdodCB7XG4gICAgICBtYXJnaW46IDAgMTBweCAwIDA7XG4gICAgfVxuICB9XG4gIC5zZWxlY3RlZCB7XG4gICAgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGxlZnQsXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSlcbiAgICAgICk7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC5zZWxlY3RlZEFyYWJpYyB7XG4gIC8vICAgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gIC8vICAgICAgIHRvIHJpZ2h0LFxuICAvLyAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIC8vICAgICAgIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpXG4gIC8vICAgICApO1xuICAvLyAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLy8gICAgIHdpZHRoOiA4MCU7XG4gIC8vICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyAuc2VsZWN0ZWRFbmdsaXNoIHtcbiAgLy8gICBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgLy8gICAgICAgdG8gbGVmdCxcbiAgLy8gICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAvLyAgICAgICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxuICAvLyAgICAgKTtcbiAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC8vICAgICB3aWR0aDogODAlO1xuICAvLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAvLyAuYWN0aXZlLWl0ZW0ge1xuICAvLyAgIGlvbi1idXR0b246OnBhcnQobmF0aXZlKSB7XG4gIC8vICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgLy8gICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgLy8gICAgIC8vICAgdG8gbGVmdCxcbiAgLy8gICAgIC8vICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAvLyAgICAgLy8gICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxuICAvLyAgICAgLy8gKTtcblxuICAvLyAgICAgLy8gc3Bhbi5idXR0b24taW5uZXJ7XG4gIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIC8vICAgICBmb250LXNpemU6IDE2cHg7XG4gIC8vICAgICAvL31cbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuLmxvZ291dC1zZWN0aW9uIHtcbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1idXR0b24ge1xuLy8gICB3aWR0aDogNzAlO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tY29udGVudCB7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuLy8gICAtLXBhZGRpbmctZW5kOiA4cHg7XG4vLyAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbi8vICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4vLyAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbi8vIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbi8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbi8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbi8vICAgZm9udC1zaXplOiAyMnB4O1xuLy8gICBmb250LXdlaWdodDogNjAwO1xuXG4vLyAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcblxuLy8gICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4vLyAgIGNvbG9yOiAjNzU3NTc1O1xuXG4vLyAgIG1pbi1oZWlnaHQ6IDI2cHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbi8vICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuLy8gICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4vLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyB9XG5cbi8vIC8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbi8vIC8vICAgY29sb3I6ICM2MTZlN2U7XG4vLyAvLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4vLyB9XG5cbi8vIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4vLyAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbi8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbi8vICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbi8vICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyAgIGNvbG9yOiAjNzM4NDlhO1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbi8vICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbi8vICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuLy8gICBtYXJnaW4tYm90dG9tOiA4cHg7XG4vLyB9XG5cbi8vIGlvbi1ub3RlIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBmb250LXNpemU6IDE2cHg7XG5cbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuLy8gfVxuXG4vLyBpb24taXRlbS5zZWxlY3RlZCB7XG4vLyAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vIH1cbiJdfQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map