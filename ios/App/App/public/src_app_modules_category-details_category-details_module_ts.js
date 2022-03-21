"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_category-details_category-details_module_ts"],{

/***/ 12015:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/category-details/category-details-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDetailsPageRoutingModule": () => (/* binding */ CategoryDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _category_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-details.page */ 92647);




const routes = [
    {
        path: '',
        component: _category_details_page__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailsPage
    }
];
let CategoryDetailsPageRoutingModule = class CategoryDetailsPageRoutingModule {
};
CategoryDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryDetailsPageRoutingModule);



/***/ }),

/***/ 47260:
/*!*********************************************************************!*\
  !*** ./src/app/modules/category-details/category-details.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDetailsPageModule": () => (/* binding */ CategoryDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _category_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-details-routing.module */ 12015);
/* harmony import */ var _category_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-details.page */ 92647);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 98980);










let CategoryDetailsPageModule = class CategoryDetailsPageModule {
};
CategoryDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _category_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
        ],
        declarations: [_category_details_page__WEBPACK_IMPORTED_MODULE_1__.CategoryDetailsPage]
    })
], CategoryDetailsPageModule);



/***/ }),

/***/ 92647:
/*!*******************************************************************!*\
  !*** ./src/app/modules/category-details/category-details.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDetailsPage": () => (/* binding */ CategoryDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./category-details.page.html */ 39917);
/* harmony import */ var _category_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-details.page.scss */ 13576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);






let CategoryDetailsPage = class CategoryDetailsPage {
    constructor(menuCtrl, langaugeservice) {
        this.menuCtrl = menuCtrl;
        this.langaugeservice = langaugeservice;
        this.configSlider = {
            slidesPerView: 3.5,
            spaceBetween: 6,
            pagination: false,
            breakpoints: {
                '@0.75': {
                    slidesPerView: 4.3,
                    spaceBetween: 10,
                },
                '@1.00': {
                    slidesPerView: 5.4,
                    spaceBetween: 10,
                },
                '@1.50': {
                    slidesPerView: 6.5,
                    spaceBetween: 10,
                },
            },
        };
        this.itemDetails = {
            id: 1,
            catID: 1,
            name: 'اسم تجريبي',
            city: 'الرياض',
            address: 'حي الرمال',
            rating: '3+',
            price: 3000,
            unit: 'currency',
            perUnit: 'one night',
            isFav: true,
            description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسومهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم',
            reservationRules: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسومهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم',
            image: '',
            leftTime: ''
        };
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
    }
    openMenu() {
        this.menuCtrl.open();
    }
    reserve() { }
    addToFavourite() {
        this.itemDetails.isFav = !this.itemDetails.isFav;
        // api 
    }
};
CategoryDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService }
];
CategoryDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-category-details',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_category_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryDetailsPage);



/***/ }),

/***/ 39917:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/category-details/category-details.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'details'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n></app-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"item-image\">\n    <img src=\"./../../../assets/images/1024-500.png\" />\n    <ion-icon\n      (click)=\"addToFavourite()\"\n      [ngClass]=\"currentlangauge =='ar' ?'fav-ar':'fav-en' \"\n      [src]=\"itemDetails.isFav ? './../../../assets/icon/fav-active.svg' :'./../../../assets/icon/fav-inactive.svg'\"\n    ></ion-icon>\n\n    <div class=\"details-container ion-padding\">\n      <app-custom-details\n        [ItemDetails]=\"itemDetails\"\n        [isDetailed]=\"true\"\n      ></app-custom-details>\n    </div>\n  </div>\n\n  <div class=\"services\">\n    <div>\n      <ion-icon src=\"./../../../assets/icon/icon1.svg\"></ion-icon>\n      <p class=\"fn-14 dalel-Regular secondary-color\">{{\"chalet\"|translate}}</p>\n    </div>\n    <div>\n      <ion-icon src=\"./../../../assets/icon/space.svg\"></ion-icon>\n      <p class=\"fn-14 dalel-Regular secondary-color\">450 م</p>\n    </div>\n    <div>\n      <ion-icon src=\"./../../../assets/icon/bed.svg\"></ion-icon>\n      <p class=\"fn-14 dalel-Regular secondary-color\">10 غرف</p>\n    </div>\n    <div>\n      <ion-icon src=\"./../../../assets/icon/icon4.svg\"></ion-icon>\n      <p class=\"fn-14 dalel-Regular secondary-color\">4 حمام</p>\n    </div>\n  </div>\n\n  <div class=\"description\">\n    <h5 class=\"fn-16 dalel-SemiBold\">{{\"description\"|translate}}</h5>\n    <p class=\"fn-12 dalel-Regular\">{{itemDetails.description}}</p>\n  </div>\n\n  <div class=\"place-images\">\n    <div class=\"header\">\n      <div>\n        <h5 class=\"fn-16 dalel-SemiBold\">{{\"place-images\"|translate}}</h5>\n      </div>\n      <div>\n        <ion-icon src=\"./../../../assets/icon/place.svg\"></ion-icon>\n      </div>\n    </div>\n\n    <swiper\n      #swiper\n      [config]=\"configSlider\"\n      class=\"custom-swiper\"\n      [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    >\n      <ng-template\n        swiperSlide\n        *ngFor=\"let cat of [{},{},{},{},{},{},{},{},{},{},{},{}]\"\n      >\n        <img src=\"./../../../assets/images/512.png\" />\n      </ng-template>\n    </swiper>\n  </div>\n  <div class=\"map-container\">\n    <div class=\"header\">\n      <div>\n        <h5 class=\"fn-16 dalel-SemiBold\">{{\"map\"|translate}}</h5>\n      </div>\n    </div>\n    <div #map class=\"map\"></div>\n  </div>\n\n  <div class=\"rules\">\n    <div class=\"header\">\n      <div>\n        <h5 class=\"fn-16 dalel-SemiBold\">{{\"reservation-rules\"|translate}}</h5>\n      </div>\n    </div>\n    <div>\n      <p class=\"fn-12 dalel-Regular\">{{itemDetails.reservationRules}}</p>\n    </div>\n  </div>\n\n  <ion-button expand=\"block\" routerLink=\"/tabs/main/reservation\">\n    <span class=\"auth-btn fn-16 white-color dalel-Bold\">\n      {{ \"reserve now\"|translate}}\n    </span>\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ 13576:
/*!*********************************************************************!*\
  !*** ./src/app/modules/category-details/category-details.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".item-image {\n  position: relative;\n}\n.item-image img {\n  border-radius: 16px;\n}\n.item-image .fav-ar {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n}\n.item-image .fav-en {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.details-container {\n  position: absolute;\n  width: 92%;\n  margin: 0 var(--ion-padding, 16px);\n  bottom: -60px;\n  border-radius: 10px;\n  background-color: var(--ion-color-orange-light);\n}\n.item-details {\n  position: absolute;\n  width: 92%;\n  margin: 0 var(--ion-padding, 16px);\n  bottom: -60px;\n  border-radius: 10px;\n  background-color: var(--ion-color-orange-light);\n}\n.item-details .name-rating-container {\n  display: flex;\n  justify-content: space-between;\n}\n.item-details .name-rating-container .name {\n  flex-direction: row;\n}\n.item-details .name-rating-container .name h5 {\n  margin-top: 6px !important;\n}\n.item-details .name-rating-container .rating .rating-address-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-details .name-rating-container .rating .rating-address-container div {\n  flex-direction: row;\n  display: flex;\n}\n.item-details .name-rating-container .rating .rating-address-container .address-container ion-icon {\n  font-size: 18px;\n  height: 20px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container {\n  background-color: var(--ion-color-primary);\n  border-radius: 5px;\n  padding: 12px 6px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container ion-icon {\n  font-size: 12px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container span {\n  margin: -6px 4px;\n}\n.item-details .address-price-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-details .address-price-container .address,\n.item-details .address-price-container .price {\n  flex-direction: row;\n}\n.item-details .address-price-container .address p,\n.item-details .address-price-container .price p {\n  display: inline-block;\n  margin: 0px;\n}\n.services {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n  background-color: #fcfcfc;\n  padding: 17px 13px;\n  margin-top: 70px;\n  margin-bottom: 24px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n.services div {\n  flex-direction: row;\n  text-align: center;\n}\n.services div p {\n  margin: 0px;\n}\n.description {\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 10px;\n  padding: 12px;\n  margin-bottom: 16px;\n}\n.description h5 {\n  margin: 0px;\n}\n.description p {\n  color: rgb(var(--ion-color-dark-black-rgb), 0.55);\n}\n.place-images {\n  margin-bottom: 16px;\n}\n.place-images img {\n  border-radius: 10px;\n}\n.place-images .header {\n  display: flex;\n  justify-content: space-between;\n}\n.place-images .header h5 {\n  margin-bottom: 8px;\n  margin-top: 0px;\n}\n.place-images .header div {\n  flex-direction: row;\n}\n.map-container .map {\n  height: 100px;\n  border: 1px solid #80808042;\n  border-radius: 10px;\n}\n.rules p {\n  color: rgb(var(--ion-color-dark-black-rgb), 0.55);\n}\n.btn-custom {\n  margin: 0 5%;\n  --color: var(--ion-color-white);\n  font-size: 16;\n  font-family: \"Cairo-Bold\";\n  height: 48px;\n}\nion-button::part(native) {\n  height: 50px !important;\n  background-image: linear-gradient(to left, var(--ion-color-primary), var(--ion-color-secondary));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBREo7QUFLQTtFQUNFLGtCQUFBO0VBRUEsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFIRjtBQUtBO0VBQ0Usa0JBQUE7RUFFQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUhGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFGSjtBQUdJO0VBQ0UsbUJBQUE7QUFETjtBQUVNO0VBQ0UsMEJBQUE7QUFBUjtBQUlNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUdRO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBRFY7QUFLVTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBSFo7QUFPUTtFQVFFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVpWO0FBR1U7RUFDRSxlQUFBO0FBRFo7QUFHVTtFQUNFLGdCQUFBO0FBRFo7QUFZRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVko7QUFXSTs7RUFFRSxtQkFBQTtBQVROO0FBVU07O0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBUFI7QUFhQTtFQUNFLGFBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQVhGO0FBWUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBVko7QUFXSTtFQUNFLFdBQUE7QUFUTjtBQWNBO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVhGO0FBWUU7RUFDRSxXQUFBO0FBVko7QUFZRTtFQUNFLGlEQUFBO0FBVko7QUFjQTtFQUNFLG1CQUFBO0FBWEY7QUFZRTtFQUNFLG1CQUFBO0FBVko7QUFZRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQVZKO0FBV0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFUTjtBQVdJO0VBQ0UsbUJBQUE7QUFUTjtBQWVFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWlCRTtFQUNFLGlEQUFBO0FBZEo7QUFrQkE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBZkY7QUFrQkE7RUFDRSx1QkFBQTtFQUNBLGdHQUFBO0FBZkYiLCJmaWxlIjoiY2F0ZWdvcnktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cblxuICAuZmF2LWFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNnB4O1xuICAgIGxlZnQ6IDE2cHg7XG4gIH1cblxuICAuZmF2LWVuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNnB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICB9XG59XG5cbi5kZXRhaWxzLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvL2hlaWdodDogNjBweDtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiAwIHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgYm90dG9tOiAtNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW9yYW5nZS1saWdodCk7XG59XG4uaXRlbS1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvL2hlaWdodDogNjBweDtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiAwIHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgYm90dG9tOiAtNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW9yYW5nZS1saWdodCk7XG4gIC5uYW1lLXJhdGluZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5uYW1lIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBoNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAucmF0aW5nIHtcbiAgICAgIC5yYXRpbmctYWRkcmVzcy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZHJlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJhdGluZy1jb250YWluZXIge1xuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IC02cHggNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWRkcmVzcy1wcmljZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmFkZHJlc3MsXG4gICAgLnByaWNlIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnNlcnZpY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIHBhZGRpbmc6IDE3cHggMTNweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYigwIDAgMCAvIDE2JSk7IC8vIHZhcigtLWlvbi1jb2xvci1kYXJrLWJsYWNrLXJnYiwgMC4xNik7XG4gIGRpdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGg1IHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBwIHtcbiAgICBjb2xvcjogcmdiKHZhcigtLWlvbi1jb2xvci1kYXJrLWJsYWNrLXJnYiksIDAuNTUpO1xuICB9XG59XG5cbi5wbGFjZS1pbWFnZXMge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaDUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gIH1cbn1cblxuLm1hcC1jb250YWluZXIge1xuICAubWFwIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA0MjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbi5ydWxlcyB7XG4gIHAge1xuICAgIGNvbG9yOiByZ2IodmFyKC0taW9uLWNvbG9yLWRhcmstYmxhY2stcmdiKSwgMC41NSk7XG4gIH1cbn1cblxuLmJ0bi1jdXN0b20ge1xuICBtYXJnaW46IDAgNSU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMTY7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvLUJvbGRcIjtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG5pb24tYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGxlZnQsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpXG4gICk7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_category-details_category-details_module_ts.js.map