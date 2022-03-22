"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_tabs_tabs_module_ts"],{

/***/ 37350:
/*!************************************************!*\
  !*** ./src/app/guards/isAuth/is-auth.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthGuard": () => (/* binding */ IsAuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);





let IsAuthGuard = class IsAuthGuard {
    constructor(authService, router, util) {
        this.authService = authService;
        this.router = router;
        this.util = util;
    }
    canActivate(route, state) {
        console.log('is auth guard :' + this.authService.logined.value);
        if (this.authService.logined.value) {
            return this.authService.logined.value;
        }
        else {
            this.util.showMessage('please login first');
            this.router.navigateByUrl('/login-register');
            return this.authService.logined.value;
        }
    }
};
IsAuthGuard.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService }
];
IsAuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], IsAuthGuard);



/***/ }),

/***/ 53647:
/*!*****************************************************!*\
  !*** ./src/app/modules/tabs/tabs-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_guards_isAuth_is_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/isAuth/is-auth.guard */ 37350);
/* harmony import */ var src_app_services_resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/resolver/data-resolver.service */ 8873);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ 71622);






const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__.TabsPage,
        children: [
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_modules_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../main/main.module */ 47366)).then((m) => m.MainPageModule),
                    },
                    {
                        path: 'categories',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/categories/categories.module */ 81550)).then((m) => m.CategoriesPageModule),
                    },
                    {
                        path: 'categories/:id',
                        resolve: {
                            name: src_app_services_resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_1__.DataResolverService,
                        },
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_category-list_category-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/category-list/category-list.module */ 15450)).then((m) => m.CategoryListPageModule),
                    },
                    {
                        path: 'categories/:id/:subCatId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_modules_category-details_category-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/category-details/category-details.module */ 47260)).then((m) => m.CategoryDetailsPageModule),
                    },
                    {
                        path: 'search-filter',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_search-filter_search-filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/search-filter/search-filter.module */ 7395)).then((m) => m.SearchFilterPageModule),
                    },
                    {
                        path: 'search-results',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_search-results_search-results_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/search-results/search-results.module */ 40487)).then((m) => m.SearchResultsPageModule),
                    },
                    {
                        path: 'reservation',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_modules_reservation_reservation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/reservation/reservation.module */ 86391)).then((m) => m.ReservationPageModule),
                    },
                    {
                        path: 'reservation-payment',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_modules_reservation-payment_reservation-payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/reservation-payment/reservation-payment.module */ 84475)).then((m) => m.ReservationPaymentPageModule),
                    },
                ],
            },
            {
                path: 'notifications',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../notifications/notifications.module */ 74193)).then((m) => m.NotificationsPageModule),
            },
            {
                path: 'profile',
                canActivate: [src_app_guards_isAuth_is_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthGuard],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/profile/profile.module */ 77010)).then((m) => m.ProfilePageModule),
                    },
                    {
                        path: 'edit-profile',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_auth_edit-profile_edit-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/auth/edit-profile/edit-profile.module */ 97119)).then((m) => m.EditProfilePageModule),
                    },
                ],
            },
            {
                path: 'my-reservations',
                canActivate: [src_app_guards_isAuth_is_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthGuard],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_my-reservations_my-reservations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../my-reservations/my-reservations.module */ 40121)).then((m) => m.MyReservationsPageModule),
                    },
                    {
                        path: 'my-reservations-details',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_my-reservations-details_my-reservations-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../my-reservations-details/my-reservations-details.module */ 80845)).then((m) => m.MyReservationsDetailsPageModule),
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/tabs/main',
                pathMatch: 'full',
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 44838:
/*!*********************************************!*\
  !*** ./src/app/modules/tabs/tabs.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 53647);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 71622);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 71622:
/*!*******************************************!*\
  !*** ./src/app/modules/tabs/tabs.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 26618);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 88835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let TabsPage = class TabsPage {
    constructor() {
        this.selectedTab = 'main';
        this.tabsData = [
            {
                'tabName': 'main',
                'tabActiveIcon': './../../../assets/icon/main-icon-active.svg',
                'tabNotActiveIcon': './../../../assets/icon/main-icon-inactive.svg',
            },
            {
                'tabName': 'notifications',
                'tabActiveIcon': './../../../assets/icon/notifications-icon-active.svg',
                'tabNotActiveIcon': './../../../assets/icon/notifications-icon-inactive.svg',
            },
            {
                'tabName': 'profile',
                'tabActiveIcon': './../../../assets/icon/profile-icon-active.svg',
                'tabNotActiveIcon': './../../../assets/icon/profile-icon-inactive.svg',
            },
            {
                'tabName': 'my-reservations',
                'tabActiveIcon': './../../../assets/icon/reservations-icon-active.svg',
                'tabNotActiveIcon': './../../../assets/icon/reservations-icon-inactive.svg',
            }
        ];
    }
    ngOnInit() {
    }
    setCurrentTab() {
        this.selectedTab = this.tabs.getSelected();
    }
};
TabsPage.ctorParameters = () => [];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['tabs', { static: false },] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tabs',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 9171:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);





let AuthService = class AuthService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.logined = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
    }
    isLogined() {
        this.logined.next(true);
    }
    isLogout() {
        this.logined.next(false);
    }
    login() {
        this.httpclient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL, {});
    }
    register() {
        this.httpclient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL, {});
    }
    forgetPassword() {
        this.httpclient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL, {});
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 34257:
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 8873:
/*!************************************************************!*\
  !*** ./src/app/services/resolver/data-resolver.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 26618:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/tabs/tabs.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs #tabs (ionTabsDidChange)=\"setCurrentTab()\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [ngClass]=\"selectedTab==tab.tabName?'selected':''\" [tab]=\"tab.tabName\" *ngFor=\"let tab of tabsData\">\n      <ion-icon\n        [src]=\"selectedTab==tab.tabName? tab.tabActiveIcon:tab.tabNotActiveIcon\"\n      ></ion-icon>\n      <ion-label [ngClass]=\"selectedTab==tab.tabName?'selected-label':''\" > {{tab.tabName|translate}} </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ 88835:
/*!*********************************************!*\
  !*** ./src/app/modules/tabs/tabs.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-label {\n  font-size: 12px;\n  font-family: \"Cairo-Regular\";\n  color: var(--ion-color-secondary);\n}\n\n.selected-label {\n  color: var(--ion-color-primary);\n}\n\nion-tab-bar {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-tab-button {\n  position: relative;\n}\n\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\n\nion-tab-button.tab-selected::before {\n  width: 15%;\n  height: 18px;\n  content: \"\";\n  border-radius: 50%;\n  position: absolute;\n  top: -20%;\n  right: 42%;\n  margin: 0 auto;\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBQUU7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUFDSiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tUmVndWxhclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5zZWxlY3RlZC1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tdGFiLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi10YWItYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC8vIGRlZmF1bHQgY2FzZVxuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbiAgLy8gc2VsZWN0ZWQgY2FzZVxuICAmLnRhYi1zZWxlY3RlZDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMThweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjAlO1xuICAgIHJpZ2h0OiA0MiU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_tabs_tabs_module_ts.js.map