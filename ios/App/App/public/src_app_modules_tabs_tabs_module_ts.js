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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 872);






let IsAuthGuard = class IsAuthGuard {
    constructor(auth, router, util) {
        this.auth = auth;
        this.router = router;
        this.util = util;
    }
    canActivate(route, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loginStatus = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'status' });
            console.log('login status' + loginStatus.value);
            if (loginStatus.value == 'active') {
                this.auth.isLogined();
                return true;
            }
            else {
                this.router.navigateByUrl('/login-register');
                return false;
            }
        });
    }
};
IsAuthGuard.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService }
];
IsAuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
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
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../main/main.module */ 47366)).then((m) => m.MainPageModule),
                    },
                    {
                        path: 'categories',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/categories/categories.module */ 81550)).then((m) => m.CategoriesPageModule),
                    },
                    {
                        path: 'categories/:id',
                        resolve: {
                            name: src_app_services_resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_1__.DataResolverService,
                        },
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_category-list_category-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/category-list/category-list.module */ 15450)).then((m) => m.CategoryListPageModule),
                    },
                    {
                        path: 'categories/:sectionId/:departmetId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_category-details_category-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/category-details/category-details.module */ 47260)).then((m) => m.CategoryDetailsPageModule),
                    },
                    {
                        path: 'search-filter',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_search-filter_search-filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/search-filter/search-filter.module */ 7395)).then((m) => m.SearchFilterPageModule),
                    },
                    {
                        path: 'search-results',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_search-results_search-results_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/search-results/search-results.module */ 40487)).then((m) => m.SearchResultsPageModule),
                    },
                    {
                        path: 'reservation/:departmetId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_reservation_reservation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/reservation/reservation.module */ 86391)).then((m) => m.ReservationPageModule),
                    },
                    {
                        path: 'reservation-payment/:departmetId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_reservation-payment_reservation-payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/reservation-payment/reservation-payment.module */ 84475)).then((m) => m.ReservationPaymentPageModule),
                    },
                    {
                        path: 'contact-us',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/contact-us/contact-us.module */ 46965)).then((m) => m.ContactUsPageModule),
                    },
                    {
                        path: 'policy',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_policy_policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/policy/policy.module */ 93589)).then((m) => m.PolicyPageModule),
                    },
                    {
                        path: 'about',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/about/about.module */ 89423)).then((m) => m.AboutPageModule),
                    },
                    {
                        path: 'favourites',
                        canActivate: [src_app_guards_isAuth_is_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_favourites_favourites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/favourites/favourites.module */ 79814)).then((m) => m.FavouritesPageModule),
                    },
                    {
                        path: 'settings',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_modules_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/settings/settings.module */ 42479)).then((m) => m.SettingsPageModule),
                    },
                ],
            },
            {
                path: 'notifications',
                canActivate: [src_app_guards_isAuth_is_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthGuard],
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
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_my-reservations_my-reservations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../my-reservations/my-reservations.module */ 40121)).then((m) => m.MyReservationsPageModule),
                    },
                    {
                        path: 'my-reservations-details/:id',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_my-reservations-details_my-reservations-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../my-reservations-details/my-reservations-details.module */ 80845)).then((m) => m.MyReservationsDetailsPageModule),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
<<<<<<< HEAD
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 26618);
=======
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 26618);
>>>>>>> 834fbd3340ffd4e17fcb852b513b68d626caa195
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 88835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);





let TabsPage = class TabsPage {
    constructor(auth) {
        this.auth = auth;
        this.selectedTab = 'main';
        this.isLogined = false;
        this.tabsData = [
            {
                tabName: 'main',
                tabActiveIcon: './../../../assets/icon/main-icon-active.svg',
                tabNotActiveIcon: './../../../assets/icon/main-icon-inactive.svg',
            },
            {
                tabName: 'notifications',
                tabActiveIcon: './../../../assets/icon/notifications-icon-active.svg',
                tabNotActiveIcon: './../../../assets/icon/notifications-icon-inactive.svg',
            },
            {
                tabName: 'profile',
                tabActiveIcon: './../../../assets/icon/profile-icon-active.svg',
                tabNotActiveIcon: './../../../assets/icon/profile-icon-inactive.svg',
            },
            {
                tabName: 'my-reservations',
                tabActiveIcon: './../../../assets/icon/reservations-icon-active.svg',
                tabNotActiveIcon: './../../../assets/icon/reservations-icon-inactive.svg',
            },
        ];
        if (this.auth.isAuthenticated.value) {
            this.isLogined = this.auth.isAuthenticated.value;
            this.auth.getNoOfNotifications().subscribe((val) => {
                if (val != 0) {
                    this.noOfNotifications = val;
                }
                else {
                    this.noOfNotifications = 0;
                }
            });
        }
    }
    ngOnInit() { }
    setCurrentTab() {
        this.selectedTab = this.tabs.getSelected();
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['tabs', { static: false },] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
<<<<<<< HEAD
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
=======
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
>>>>>>> 834fbd3340ffd4e17fcb852b513b68d626caa195
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs #tabs (ionTabsDidChange)=\"setCurrentTab()\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button\n      [ngClass]=\"selectedTab==tab.tabName?'selected':''\"\n      [tab]=\"tab.tabName\"\n      *ngFor=\"let tab of tabsData\"\n    >\n      <ion-badge\n        *ngIf=\"tab.tabName=='notifications' && noOfNotifications!=0 && isLogined\"\n        color=\"primary\"\n      >\n        <span class=\"white-color\">{{noOfNotifications}}</span>\n      </ion-badge>\n      <ion-icon\n        [src]=\"selectedTab==tab.tabName? tab.tabActiveIcon:tab.tabNotActiveIcon\"\n      ></ion-icon>\n      <ion-label \n        class=\"fn-12 dalel-Regular animate__fadeInDown\"\n        color=\"secondary\"\n       \n      >\n        {{tab.tabName|translate}}\n      </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n<!-- [ngClass]=\"selectedTab==tab.tabName?'selected-label':''\" -->");

/***/ }),

/***/ 88835:
/*!*********************************************!*\
  !*** ./src/app/modules/tabs/tabs.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "@keyframes updown {\n  0% {\n    transform: translateY(-100%);\n  }\n  25% {\n    transform: translateY(-50%);\n  }\n  50% {\n    transform: translateY(-25%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n.selected-label {\n  color: var(--ion-color-primary);\n}\n.selected ion-icon {\n  animation: updown 1s cubic-bezier(0.1, 0.7, 0.55, 1.01);\n  animation-direction: alternate;\n}\nion-tab-button {\n  position: relative;\n}\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\nion-tab-button.tab-selected::before {\n  width: 15%;\n  height: 16px;\n  content: \"\";\n  border-radius: 50%;\n  position: absolute;\n  top: -20%;\n  right: 42%;\n  margin: 0 auto;\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSw0QkFBQTtFQUFGO0VBR0E7SUFDRSwyQkFBQTtFQURGO0VBSUE7SUFDRSwyQkFBQTtFQUZGO0VBS0E7SUFDRSx5QkFBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFLCtCQUFBO0FBSkY7QUFRRTtFQUNFLHVEQUFBO0VBQ0EsOEJBQUE7QUFMSjtBQVNBO0VBQ0Usa0JBQUE7QUFORjtBQVFFO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU5KO0FBU0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUFQSiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGtleWZyYW1lcyB1cGRvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxuXG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1JSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5zZWxlY3RlZC1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGlvbi1pY29uIHtcbiAgICBhbmltYXRpb246IHVwZG93biAxcyBjdWJpYy1iZXppZXIoMC4xLCAwLjcsIDAuNTUsIDEuMDEpO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgfVxufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gZGVmYXVsdCBjYXNlXG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgfVxuICAvLyBzZWxlY3RlZCBjYXNlXG4gICYudGFiLXNlbGVjdGVkOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yMCU7XG4gICAgcmlnaHQ6IDQyJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_tabs_tabs_module_ts.js.map