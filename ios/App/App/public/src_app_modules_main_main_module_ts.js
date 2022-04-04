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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./main.page.html */ 24736);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 96734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
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
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        this.configCategories = {
            slidesPerView: 2.5,
            spaceBetween: 10,
            pagination: false,
            breakpoints: {
                '@0.75': {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                },
                '@1.00': {
                    slidesPerView: 4.6,
                    spaceBetween: 10,
                },
                '@1.50': {
                    slidesPerView: 5.7,
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
        console.log('curret plt is ' + this.platform);
        this.auth.getUserIDObservable().subscribe((val) => {
            this.UserData = {
                lang: this.langaugeservice.getLanguage(),
                user_id: val == 0 ? 1 : val,
            };
            this.getHomeData(this.UserData);
        });
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
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
        this.auth.getUserToken();
        console.log(this.auth.userToken);
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
            this.router.navigateByUrl('/tabs/main/search-results');
        }
        else {
            this.util.showMessage('please enter search text');
        }
    }
    showAllCategories() {
        this.router.navigateByUrl('/tabs/main/categories');
    }
    openCatList(catID, catName) {
        this.dataService.setData(catID, catName);
        this.router.navigateByUrl(`/tabs/main/categories/${catID}`);
    }
    slideNext() {
        // const swiper = document.querySelector('.swiper').swiper;
        // Now you can use all slider methods like
        // swiper.slideNext();
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
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"'main'\" [isMain]=\"true\" class=\"header-height\"></app-header>\n\n<ion-content>\n  <div class=\"search-section ion-padding-horizontal\">\n    <div class=\"search-input\">\n      <ion-item lines=\"none\" class=\"search-wrapper\">\n        <ion-input\n          type=\"search\"\n          [(ngModel)]=\"searchText\"\n          placeholder=\"{{'search here'|translate}}\"\n        ></ion-input>\n        <ion-icon\n          item-start\n          color=\"primary\"\n          name=\"search\"\n          (click)=\"showResults()\"\n        ></ion-icon>\n      </ion-item>\n    </div>\n    <div\n      class=\"search-filter\"\n      [ngClass]=\"currentlangauge == 'ar'?'margin-right':'margin-left'\"\n    >\n      <ion-fab-button\n        size=\"small\"\n        color=\"secondary\"\n        routerLink=\"/tabs/main/search-filter\"\n      >\n        <ion-icon name=\"funnel-outline\" color=\"white\"></ion-icon>\n      </ion-fab-button>\n    </div>\n  </div>\n\n  <div class=\"slider-section ion-padding\">\n    <swiper\n      #swiper\n      [config]=\"configSlider\"\n      class=\"custom-swiper\"\n      [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    >\n      <ng-template swiperSlide *ngFor=\"let slide of Sliders\">\n        <img [src]=\"slide.image\" />\n      </ng-template>\n    </swiper>\n  </div>\n\n  <div class=\"categories-section ion-padding-horizontal\">\n    <div class=\"categories-section-title\">\n      <div>\n        <h5 class=\"categories-title\">{{\"categories\"|translate}}</h5>\n      </div>\n      <div routerLink=\"/tabs/main/categories\">\n        <p class=\"categories-sub-title\">{{\"show all\"|translate}}</p>\n      </div>\n    </div>\n\n    <swiper\n      #swiper\n      [config]=\"configCategories\"\n      class=\"custom-swiper\"\n      [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    >\n      <ng-template swiperSlide *ngFor=\"let cat of sections\">\n        <ion-card\n          class=\"ion-no-margin\"\n          (click)=\"categoryList(cat.title,cat.id)\"\n        >\n          <ion-item>\n            <ion-thumbnail>\n              <img [src]=\"cat.image\" />\n            </ion-thumbnail>\n            <ion-label class=\"cat-title-text\">\n              {{cat.title|translate}}\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ng-template>\n    </swiper>\n  </div>\n\n  <div class=\"naerby-section ion-padding-horizontal\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-align-self-start\">\n        <h5 class=\"categories-title\">{{\"nearby places\"|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <swiper\n      #swiper\n      [config]=\"configNearBy\"\n      class=\"custom-swiper\"\n      [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    >\n      <ng-template swiperSlide *ngFor=\"let item of nearDepartments\">\n        <app-custom-card\n          [itemDetails]=\"item\"\n          [forwardRoute]=\"'/tabs/main'\"\n        ></app-custom-card>\n      </ng-template>\n    </swiper>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 96734:
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".swiper-slide {\n  align-items: self-start;\n}\n\n.search-input {\n  flex-direction: row;\n  flex-grow: 6;\n}\n\n.search-filter {\n  flex-direction: row;\n}\n\n.margin-right {\n  margin: 0px 12px 0px 0px;\n}\n\n.margin-left {\n  margin: 0px 0px 0px 12px;\n}\n\n.search-section {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.search-section .search-bar-input {\n  padding-right: 0px;\n}\n\n.search-section .search-wrapper {\n  border: 1px solid #e1e1e1;\n  border-radius: 25px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);\n}\n\n.search-section ion-fab-button {\n  margin: 0px;\n}\n\n.search-section ion-fab-button ion-icon {\n  font-size: 16px;\n}\n\n.search-section ion-fab-button::part(native) button.button-native {\n  height: 40px !important;\n  width: 40px !important;\n}\n\n.search-section .filter-fab {\n  padding: 0px;\n  margin: 0px;\n}\n\n.search-section .filter-fab ion-fab-button {\n  margin: 0px;\n}\n\n.search-section ion-input {\n  --placeholder-color: #d4d4d4;\n  --placeholder-opacity: 1;\n  font-size: 16px;\n}\n\n.slider-section {\n  position: relative;\n}\n\n.slider-section .swiper-pagination-bullets {\n  position: absolute;\n  text-align: center !important;\n  height: 10px;\n  width: 15px;\n  bottom: 0 !important;\n  background-color: var(--ion-color-primary) !important;\n}\n\n.slider-section .swiper-pagination-bullet-active {\n  background-color: rgba(var(--ion-color-primary), 0.5) !important;\n  height: 10px;\n  width: 30px !important;\n  border-radius: 10px;\n  opacity: 0.5;\n}\n\n.slider-section .swiper-pagination-bullet-active {\n  background-color: var(--ion-color-primary) !important;\n  height: 10px;\n  width: 30px !important;\n  border-radius: 10px;\n  height: 20 !important;\n}\n\n.slider-section .swiper-pagination {\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  top: auto !important;\n  text-align: center;\n}\n\n.slider-section .swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal {\n  height: 20 !important;\n}\n\n.slider-section .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.slider-section .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  background-color: var(--ion-color-primary) !important;\n  height: 10px;\n  width: 15px;\n  border-radius: 10px;\n}\n\n.slider-section .swiper-pagination-bullets {\n  top: 37% !important;\n  right: 36px;\n  left: 32px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.slider-section .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {\n  height: 21 !important;\n  display: block;\n}\n\n.slider-section img {\n  border-radius: 10px;\n  height: 160px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.categories-section .categories-section-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.categories-section .categories-section-title > div {\n  flex-direction: row;\n}\n\n.categories-section .cat-title-text {\n  margin: 10px;\n  font-size: 16px;\n  font-family: \"Cairo-SemiBold\";\n}\n\n.categories-section ion-thumbnail {\n  margin: 0px;\n}\n\n.categories-section ion-thumbnail img {\n  border-radius: 5px;\n}\n\n.categories-section .categories-title {\n  font-size: 18px;\n  font-family: \"Cairo-Bold\";\n}\n\n.categories-section .categories-sub-title {\n  font-size: 14px;\n  font-family: \"Cairo-Regular\";\n  color: var(--ion-color-secondary);\n  white-space: nowrap;\n}\n\n.categories-section ion-item::part(native) {\n  padding-inline-start: 0px;\n}\n\n.naerby-section {\n  margin-bottom: 23px;\n}\n\n.naerby-section .categories-title {\n  font-size: 18px;\n  font-family: \"Cairo-Bold\";\n}\n\n.naerby-section .categories-sub-title {\n  font-size: 14px;\n  font-family: \"Cairo-Regular\";\n  color: var(--ion-color-secondary);\n  white-space: nowrap;\n}\n\n.naerby-section ion-item::part(native) {\n  padding-inline-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFHQTtFQUNFLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFRTtFQUNFLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7QUFESjs7QUFFSTtFQUNFLGVBQUE7QUFBTjs7QUFHTTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7QUFEUjs7QUFPRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBTEo7O0FBT0k7RUFDRSxXQUFBO0FBTE47O0FBU0U7RUFDRSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVBKOztBQVdBO0VBQ0Usa0JBQUE7QUFSRjs7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscURBQUE7QUFSSjs7QUFVRTtFQUNFLGdFQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUko7O0FBVUM7RUFDRyxxREFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFSSjs7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBUko7O0FBVUU7RUFDRSxxQkFBQTtBQVJKOztBQVVFOztFQUdFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVRKOztBQWFFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBWEo7O0FBY0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFaSjs7QUFjRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVpKOztBQWtCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWZKOztBQWtCRTtFQUNFLG1CQUFBO0FBaEJKOztBQWtCRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFoQko7O0FBa0JFO0VBQ0UsV0FBQTtBQWhCSjs7QUFpQkk7RUFDRSxrQkFBQTtBQWZOOztBQWtCRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQWhCSjs7QUFtQkU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBakJKOztBQW9CRTtFQUNFLHlCQUFBO0FBbEJKOztBQXNCQTtFQUNFLG1CQUFBO0FBbkJGOztBQW9CRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQWxCSjs7QUFxQkU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBbkJKOztBQXFCRTtFQUNFLHlCQUFBO0FBbkJKIiwiZmlsZSI6Im1haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5zd2lwZXItc2xpZGUge1xuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZ3JvdzogNjtcbn1cblxuLnNlYXJjaC1maWx0ZXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbjogMHB4IDEycHggMHB4IDBweDtcbn1cblxuLm1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAxMnB4O1xufVxuXG4uc2VhcmNoLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc2VhcmNoLWJhci1pbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5zZWFyY2gtd3JhcHBlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2IoMCAwIDAgLyA4JSk7XG4gIH1cblxuICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiBcblxuICAuZmlsdGVyLWZhYiB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgaW9uLWlucHV0IHtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZDRkNGQ0O1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLnNsaWRlci1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDIwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc3dpcGVyLXBhZ2luYXRpb24gc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyBzd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDIwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN3aXBlci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCxcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9IFxuXG5cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICAgIHRvcDogMzclICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDM2cHg7XG4gICAgbGVmdDogMzJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAuc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDIxICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgLy9tYXJnaW4tYm90dG9tOiAyM3B4O1xufVxuXG4uY2F0ZWdvcmllcy1zZWN0aW9uIHtcbiAgLmNhdGVnb3JpZXMtc2VjdGlvbi10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuY2F0ZWdvcmllcy1zZWN0aW9uLXRpdGxlID4gZGl2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5jYXQtdGl0bGUtdGV4dCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1TZW1pQm9sZFwiO1xuICB9XG4gIGlvbi10aHVtYm5haWwge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGltZ3tcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cbiAgLmNhdGVnb3JpZXMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1Cb2xkXCI7XG4gIH1cblxuICAuY2F0ZWdvcmllcy1zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1SZWd1bGFyXCI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICB9XG59XG5cbi5uYWVyYnktc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gIC5jYXRlZ29yaWVzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tQm9sZFwiO1xuICB9XG5cbiAgLmNhdGVnb3JpZXMtc3ViLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tUmVndWxhclwiO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gIH1cblxuICAvLyAuY29udGFpbmVyIHtcbiAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vICAgaGVpZ2h0OiAxNDBweDtcbiAgLy8gICBpbWcge1xuICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gIC8vICAgICBoZWlnaHQ6IDE0MHB4O1xuICAvLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC8vICAgICBvYmplY3QtcG9zaXRpb246IGluaXRpYWw7XG4gIC8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyAgIH1cblxuICAvLyAgIC50aXRsZSB7XG4gIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICAgICBib3R0b206IDMwcHg7XG4gIC8vICAgIC8vIHJpZ2h0OiAxM3B4O1xuICAvLyAgICAgY29sb3I6IHdoaXRlO1xuICAvLyAgICAgcCB7XG4gIC8vICAgICAgIC8vZm9udC1zaXplOiAxNHB4O1xuICAvLyAgICAgICBtYXJnaW46IDBweDtcbiAgLy8gICAgIC8vICBmb250LWZhbWlseTogXCJDYWlyby1Cb2xkXCI7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgLmxvY2F0aW9uIHtcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICAgIGJvdHRvbTogNXB4O1xuICAvLyAgIC8vICByaWdodDogMTBweDtcbiAgLy8gICAgLy8gZm9udC1zaXplOiAxNHB4O1xuICAvLyAgICAvLyBmb250LWZhbWlseTogXCJDYWlyby1SZWd1bGFyXCI7XG4gIC8vICAgICBpb24taWNvbiB7XG4gIC8vICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gICAubG9jYXRpb24tYWRkcmVzcyB7XG4gIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICAgLy8gIGNvbG9yOiB3aGl0ZTtcbiAgLy8gICAvLyAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tUmVndWxhclwiO1xuICAvLyAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gIC8vICAgICBib3R0b206IDlweDtcbiAgLy8gICAgLy8gcmlnaHQ6IDMwcHg7XG4gIC8vICAgICBwIHtcbiAgLy8gICAgICAgbWFyZ2luOiAwcHg7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgLmFkZHJlc3MtZGV0YWlsIHtcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICAgIGJvdHRvbTogNXB4O1xuICAvLyAgICAgLy9sZWZ0OiAxMHB4O1xuICAvLyAgICAgaW9uLWljb24ge1xuICAvLyAgICAgICBmb250LXNpemU6IDI1cHg7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_main_main_module_ts.js.map