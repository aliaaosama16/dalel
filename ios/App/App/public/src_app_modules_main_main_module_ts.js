"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_main_main_module_ts"],{

/***/ 20325:
/*!*****************************************************!*\
  !*** ./src/app/modules/main/main-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 90591);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 47366:
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 20325);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 90591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 98980);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);










let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 90591:
/*!*******************************************!*\
  !*** ./src/app/modules/main/main.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./main.page.html */ 24736);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 96734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data/data.service */ 34257);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/items/items.service */ 17118);











let MainPage = class MainPage {
    constructor(menuCtrl, modalController, langaugeservice, router, dataService, util, auth, items) {
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.langaugeservice = langaugeservice;
        this.router = router;
        this.dataService = dataService;
        this.util = util;
        this.auth = auth;
        this.items = items;
        this.searchText = '';
        this.platform = '';
        this.configSlider = {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: true,
            effect: 'fade',
            autoplay: true,
        };
        this.configCategories = {
            slidesPerView: 2.1,
            spaceBetween: 10,
            pagination: false,
            breakpoints: {
                '@0.75': {
                    slidesPerView: 3.2,
                    spaceBetween: 10,
                },
                '@1.00': {
                    slidesPerView: 4.3,
                    spaceBetween: 10,
                },
                '@1.50': {
                    slidesPerView: 5.4,
                    spaceBetween: 10,
                },
            },
        };
        this.configNearBy = {
            slidesPerView: 2.3,
            spaceBetween: 10,
            pagination: false,
            breakpoints: {
                '@0.75': {
                    slidesPerView: 3.3,
                    spaceBetween: 10,
                },
                '@1.00': {
                    slidesPerView: 4.4,
                    spaceBetween: 10,
                },
                '@1.50': {
                    slidesPerView: 5.5,
                    spaceBetween: 10,
                },
            },
        };
        this.menuCtrl.enable(true, 'main');
        this.util.getUserLocation();
        this.platform = this.util.platform;
        this.currentlangauge = this.langaugeservice.getLanguage();
        this.auth.getUserToken();
        this.UserData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
        };
        this.getHomeData(this.UserData);
    }
    ngOnInit() { }
    getDate($event) {
        console.log($event.target.value);
    }
    isDateEnabled(dateIsoString) {
        const date = new Date(dateIsoString);
        if (date.getUTCFullYear() === 2022
            && date.getUTCMonth() === 0
            && date.getUTCDate() === 1) {
            // Disables January 1, 2022
            return false;
        }
        return true;
    }
    getHomeData(userData) {
        this.util.showLoadingSpinner().then((__) => {
            this.items.home(userData).subscribe((data) => {
                if (data.key == 1) {
                    this.sections = data.data.sections;
                    this.Sliders = data.data.sliders;
                    this.nearDepartments = data.data.near_departments;
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
    openMenu() {
        this.menuCtrl.open();
    }
    categoryList(categoryName, categoryID) {
        this.dataService.setData(categoryID, categoryName);
        this.router.navigateByUrl(`/tabs/main/categories/${categoryID}`);
    }
    showResults() {
        console.log(`this.searchText is ${this.searchText}`);
        if (this.searchText != '') {
            this.getItemsByFilters(this.searchText);
        }
        else {
            this.util.showMessage('please enter search text');
        }
    }
    getItemsByFilters(searcText) {
        // this.auth.getUserIDObservable().subscribe((val) => {
        this.filterData = {
            user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
            title: searcText,
            lang: this.langaugeservice.getLanguage(),
        };
        // });
        this.util.setFilters(this.filterData);
        console.log('filters ' + JSON.stringify(this.filterData));
        this.router.navigate(['/tabs/main/search-results']);
    }
    showAllCategories() {
        this.router.navigateByUrl('/tabs/main/categories');
    }
    openCatList(catID, catName) {
        this.dataService.setData(catID, catName);
        this.router.navigateByUrl(`/tabs/main/categories/${catID}`);
    }
    doRefresh($event) {
        // this.auth.getUserIDObservable().subscribe((val) => {
        this.UserData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value, //e//val == 0 ? 1 : val,
        };
        this.items.home(this.UserData).subscribe((data) => {
            if (data.key == 1) {
                this.sections = data.data.sections;
                this.Sliders = data.data.sliders;
                this.nearDepartments = data.data.near_departments;
            }
            $event.target.complete();
        }, (err) => {
            $event.target.complete();
        });
        //});
    }
};
MainPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_6__.ItemsService }
];
MainPage.propDecorators = {
    datetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonDatetime, { static: true },] }]
};
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-main',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainPage);



/***/ }),

/***/ 24736:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/main/main.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"'main'\" [isMain]=\"true\" class=\"header-height\"></app-header>\n\n<ion-content class=\"ion-safe-area\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <!-- <ion-datetime  (ionChange)=\"getDate($event)\"presentation=\"time-date\" locale=\"en\"></ion-datetime> -->\n\n  <div class=\"search-section ion-padding-horizontal ion-safe-area-top\">\n    <div class=\"search-input\">\n      <ion-item lines=\"none\" class=\"search-wrapper\">\n        <ion-input\n          type=\"search\"\n          [(ngModel)]=\"searchText\"\n          enterkeyhint=\"search\"\n          placeholder=\"{{'search here'|translate}}\"\n        ></ion-input>\n        <ion-icon\n          item-start\n          color=\"primary\"\n          name=\"search\"\n          (click)=\"showResults()\"\n        ></ion-icon>\n      </ion-item>\n    </div>\n    <div\n      class=\"search-filter\"\n      [ngClass]=\"currentlangauge == 'ar'?'margin-right':'margin-left'\"\n    >\n      <ion-fab-button\n        size=\"small\"\n        color=\"secondary\"\n        routerLink=\"/tabs/main/search-filter\"\n      >\n        <ion-icon name=\"funnel-outline\" color=\"white\"></ion-icon>\n      </ion-fab-button>\n    </div>\n  </div>\n\n  <div class=\"slider-section ion-padding\">\n    <swiper\n      #swiper\n      [config]=\"configSlider\"\n      class=\"custom-swiper\"\n      [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    >\n      <ng-template swiperSlide *ngFor=\"let slide of Sliders\">\n        <img [src]=\"slide.image\" />\n      </ng-template>\n    </swiper>\n  </div>\n\n  <div class=\"categories-section ion-padding-horizontal\">\n    <div class=\"categories-section-title\">\n      <div>\n        <h5 class=\"categories-title fn-18 dalel-Bold\">\n          {{\"categories\"|translate}}\n        </h5>\n      </div>\n      <div routerLink=\"/tabs/main/categories\">\n        <p class=\"categories-sub-title fn-14 dalel-Regular\">\n          {{\"show all\"|translate}}\n        </p>\n      </div>\n    </div>\n\n    <swiper\n      #swiper\n      [config]=\"configCategories\"\n      class=\"custom-swiper\"\n      [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    >\n      <ng-template swiperSlide *ngFor=\"let cat of sections\">\n        <ion-card\n          class=\"ion-no-margin\"\n          (click)=\"categoryList(cat.title,cat.id)\"\n        >\n          <ion-item>\n            <ion-thumbnail>\n              <img [src]=\"cat.image\" />\n            </ion-thumbnail>\n            <ion-label class=\"cat-title-text fn-16 dalel-SemiBold\">\n              {{cat.title|translate}}\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ng-template>\n    </swiper>\n  </div>\n\n  <div class=\"naerby-section ion-padding-horizontal\">\n    <div class=\"naerby-section-title\">\n      <div>\n        <h5 class=\"fn-18 dalel-Bold\">{{\"nearby places\"|translate}}</h5>\n      </div>\n    </div>\n\n    <swiper\n      #swiper\n      [config]=\"configNearBy\"\n      class=\"custom-swiper\"\n      [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    >\n      <ng-template swiperSlide *ngFor=\"let item of nearDepartments\">\n        <app-custom-card\n          [itemDetails]=\"item\"\n          [forwardRoute]=\"'/tabs/main'\"\n          [cardBrightness]=\"'0.62'\"\n        ></app-custom-card>\n      </ng-template>\n    </swiper>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 96734:
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".swiper-slide {\n  align-items: self-start;\n}\n\n.search-section {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.search-section .search-input {\n  flex-direction: row;\n  flex-grow: 6;\n}\n\n.search-section .search-input .search-wrapper {\n  border: 1px solid var(--ion-color-light-gray);\n  border-radius: 25px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);\n  height: 40px !important;\n}\n\n.search-section .search-input .search-wrapper ion-input {\n  --placeholder-color: var(--ion-color-lighted-gray);\n  --placeholder-opacity: 1;\n  font-size: 12px;\n  --padding-top: 0px !important;\n}\n\n.search-section .search-input .search-wrapper ion-icon {\n  margin-bottom: 7px;\n}\n\n.search-section .margin-right {\n  margin: 0px 12px 0px 0px;\n}\n\n.search-section .margin-left {\n  margin: 0px 0px 0px 12px;\n}\n\n.search-section .search-filter {\n  flex-direction: row;\n}\n\n.search-section .search-filter ion-fab-button {\n  margin: 0px;\n}\n\n.search-section .search-filter ion-fab-button ion-icon {\n  font-size: 16px;\n}\n\n.search-section .search-filter ion-fab-button::part(native) button.button-native {\n  height: 40px !important;\n  width: 40px !important;\n}\n\n.slider-section {\n  position: relative;\n}\n\n.slider-section .swiper-pagination-bullets {\n  position: absolute;\n  text-align: center !important;\n  height: 10px;\n  width: 15px;\n  bottom: 0 !important;\n  background-color: var(--ion-color-primary) !important;\n}\n\n.slider-section .swiper-pagination-bullet {\n  height: 10px !important;\n  width: 15px !important;\n  display: inline-block;\n  border-radius: 10px !important;\n  background: var(--ion-color-secondary) !important;\n  opacity: rgb(var(--ion-color-secondary-rgb), 0.5) !important;\n}\n\n.slider-section img {\n  border-radius: 10px;\n  height: 160px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.categories-section .categories-section-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.categories-section .categories-section-title > div {\n  flex-direction: row;\n}\n\n.categories-section .cat-title-text {\n  margin: 10px;\n}\n\n.categories-section ion-thumbnail {\n  margin: 0px;\n}\n\n.categories-section ion-thumbnail img {\n  border-radius: 5px;\n}\n\n.categories-section .categories-sub-title {\n  color: var(--ion-color-primary);\n  white-space: nowrap;\n}\n\n.categories-section ion-item::part(native) {\n  padding-inline-start: 0px;\n}\n\n.naerby-section {\n  margin-bottom: 23px;\n}\n\n.naerby-section .naerby-section-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.naerby-section .naerby-section-title div {\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFHSTtFQUNFLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0FBRE47O0FBR007RUFDRSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBRFI7O0FBR007RUFDRSxrQkFBQTtBQURSOztBQU1FO0VBQ0Usd0JBQUE7QUFKSjs7QUFPRTtFQUNFLHdCQUFBO0FBTEo7O0FBUUU7RUFDRSxtQkFBQTtBQU5KOztBQU9JO0VBQ0UsV0FBQTtBQUxOOztBQU1NO0VBQ0UsZUFBQTtBQUpSOztBQU9RO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQUxWOztBQWNBO0VBQ0Usa0JBQUE7QUFYRjs7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscURBQUE7QUFYSjs7QUFjRTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaURBQUE7RUFDQSw0REFBQTtBQVpKOztBQWVFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBYko7O0FBa0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBZko7O0FBa0JFO0VBQ0UsbUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsWUFBQTtBQWpCSjs7QUFvQkU7RUFDRSxXQUFBO0FBbEJKOztBQW1CSTtFQUNFLGtCQUFBO0FBakJOOztBQXFCRTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUFuQko7O0FBc0JFO0VBQ0UseUJBQUE7QUFwQko7O0FBd0JBO0VBQ0UsbUJBQUE7QUFyQkY7O0FBdUJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBckJKOztBQXNCSTtFQUNFLG1CQUFBO0FBcEJOIiwiZmlsZSI6Im1haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5zd2lwZXItc2xpZGUge1xuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWdyb3c6IDY7XG5cbiAgICAuc2VhcmNoLXdyYXBwZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWdyYXkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2IoMCAwIDAgLyA4JSk7XG4gICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcblxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZWQtZ3JheSk7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXJnaW4tcmlnaHQge1xuICAgIG1hcmdpbjogMHB4IDEycHggMHB4IDBweDtcbiAgfVxuICBcbiAgLm1hcmdpbi1sZWZ0IHtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDEycHg7XG4gIH1cblxuICAuc2VhcmNoLWZpbHRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgICAgYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICAgICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICB9XG5cbn1cblxuLnNsaWRlci1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogcmdiKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMC41KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuLmNhdGVnb3JpZXMtc2VjdGlvbiB7XG4gIC5jYXRlZ29yaWVzLXNlY3Rpb24tdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmNhdGVnb3JpZXMtc2VjdGlvbi10aXRsZSA+IGRpdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5jYXQtdGl0bGUtdGV4dCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5cbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cblxuICAuY2F0ZWdvcmllcy1zdWItdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gIH1cbn1cblxuLm5hZXJieS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcblxuICAubmFlcmJ5LXNlY3Rpb24tdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGRpdiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_main_main_module_ts.js.map