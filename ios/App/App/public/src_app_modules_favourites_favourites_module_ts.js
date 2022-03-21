"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_favourites_favourites_module_ts"],{

/***/ 8054:
/*!*****************************************************************!*\
  !*** ./src/app/modules/favourites/favourites-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPageRoutingModule": () => (/* binding */ FavouritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites.page */ 20231);




const routes = [
    {
        path: '',
        component: _favourites_page__WEBPACK_IMPORTED_MODULE_0__.FavouritesPage
    }
];
let FavouritesPageRoutingModule = class FavouritesPageRoutingModule {
};
FavouritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouritesPageRoutingModule);



/***/ }),

/***/ 79814:
/*!*********************************************************!*\
  !*** ./src/app/modules/favourites/favourites.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPageModule": () => (/* binding */ FavouritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites-routing.module */ 8054);
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.page */ 20231);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let FavouritesPageModule = class FavouritesPageModule {
};
FavouritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritesPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ],
        declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_1__.FavouritesPage]
    })
], FavouritesPageModule);



/***/ }),

/***/ 20231:
/*!*******************************************************!*\
  !*** ./src/app/modules/favourites/favourites.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPage": () => (/* binding */ FavouritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favourites.page.html */ 25615);
/* harmony import */ var _favourites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.page.scss */ 79636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let FavouritesPage = class FavouritesPage {
    constructor() {
        this.favourites = [
            {
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
                description: '',
                reservationRules: '',
                image: './../../../assets/images/1024-500.png',
                leftTime: '',
            },
            {
                id: 2,
                catID: 1,
                name: 'اسم تجريبي',
                city: 'الرياض',
                address: 'حي الرمال',
                rating: '3+',
                price: 3000,
                unit: 'currency',
                perUnit: 'one night',
                isFav: true,
                description: '',
                reservationRules: '',
                image: './../../../assets/images/1024-500.png',
                leftTime: '',
            },
            {
                id: 3,
                catID: 1,
                name: 'اسم تجريبي',
                city: 'الرياض',
                address: 'حي الرمال',
                rating: '3+',
                price: 3000,
                unit: 'currency',
                perUnit: 'one night',
                isFav: true,
                description: '',
                reservationRules: '',
                image: './../../../assets/images/1024-500.png',
                leftTime: '',
            },
            {
                id: 4,
                catID: 1,
                name: 'اسم تجريبي',
                city: 'الرياض',
                address: 'حي الرمال',
                rating: '3+',
                price: 3000,
                unit: 'currency',
                perUnit: 'one night',
                isFav: true,
                description: '',
                reservationRules: '',
                image: './../../../assets/images/1024-500.png',
                leftTime: '',
            },
            {
                id: 5,
                catID: 1,
                name: 'اسم تجريبي',
                city: 'الرياض',
                address: 'حي الرمال',
                rating: '3+',
                price: 3000,
                unit: 'currency',
                perUnit: 'one night',
                isFav: true,
                description: '',
                reservationRules: '',
                image: './../../../assets/images/1024-500.png',
                leftTime: '',
            },
            {
                id: 6,
                catID: 1,
                name: 'اسم تجريبي',
                city: 'الرياض',
                address: 'حي الرمال',
                rating: '3+',
                price: 3000,
                unit: 'currency',
                perUnit: 'one night',
                isFav: true,
                description: '',
                reservationRules: '',
                image: './../../../assets/images/1024-500.png',
                leftTime: '',
            },
        ];
    }
    ngOnInit() { }
};
FavouritesPage.ctorParameters = () => [];
FavouritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-favourites',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favourites_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavouritesPage);



/***/ }),

/***/ 25615:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/favourites/favourites.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'favourites'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n></app-header>\n<ion-content class=\"custom-padding\">\n  <ion-grid >\n    <ion-row>\n      <ion-col\n        sizeXs=\"6\"\n        sizeSm=\"4\"\n        sizeMd=\"4\"\n        sizeLg=\"4\"\n        sizeMd=\"4\"\n        *ngFor=\"let item of favourites\"\n      >\n        <ion-card\n          class=\"ion-no-margin\"\n          routerLink=\"/tabs/main/categories/{{item.catID}}/{{item.id}}\"\n        >\n          <img src=\"./../../../assets/images/512.png\" />\n\n          <div class=\"price-container\">\n            <span class=\"white-color fn-12 dalel-Regular\"\n              >{{item.price}} {{item.unit|translate}}</span\n            >\n          </div>\n\n          <ion-card-content>\n            <!-- <app-custom-details [ItemDetails]=\"item\"></app-custom-details> -->\n            <div class=\"name\">\n              <p class=\"fn-14 dalel-Bold dark-black-color\">{{item.name}}</p>\n            </div>\n            <div class=\"rating-address-container\">\n              <div class=\"address-container\">\n                <ion-icon name=\"location-sharp\" color=\"primary\"></ion-icon>\n                <p class=\"fn-14 dalel-Regular dark-black-color\">\n                   {{item.city}}\n                </p>\n              </div>\n\n              <div class=\"rating-container\">\n                <ion-icon color=\"secondary\" slot=\"end\" name=\"star\"></ion-icon>\n                <span class=\"white-color fn-10 dalel-Regular\"\n                  >{{item.rating}}</span\n                >\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 79636:
/*!*********************************************************!*\
  !*** ./src/app/modules/favourites/favourites.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".custom-padding {\n  padding: 9px !important;\n}\n\nion-card {\n  border-radius: 10px;\n  position: relative;\n}\n\nion-card ion-button.button-disabled {\n  opacity: 1 !important;\n}\n\nion-card ion-button {\n  margin: 0px;\n}\n\nion-card ion-button ion-icon {\n  font-size: 16px;\n}\n\nion-card ion-button::part(native) {\n  padding-inline-start: 10px !important;\n  padding-inline-end: 10px !important;\n}\n\nion-card .price-container {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: var(--ion-color-secondary);\n  border-radius: 5px;\n  padding: 2px 16px;\n}\n\nion-card .rating-address-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-card .rating-address-container div {\n  flex-direction: row;\n  display: flex;\n}\n\nion-card .rating-address-container .address-container ion-icon {\n  font-size: 18px;\n  height: 20px;\n}\n\nion-card .rating-address-container .rating-container {\n  background-color: var(--ion-color-primary);\n  border-radius: 5px;\n  padding: 3px 8px;\n}\n\nion-card .rating-address-container .rating-container ion-icon {\n  font-size: 12px;\n  margin: 2px;\n}\n\nion-card .rating-address-container .rating-container span {\n  margin: 2px;\n}\n\nion-card ion-card-content {\n  padding: 4px 13px;\n  background-color: rgba(var(--ion-color-secondary-rgb), 0.33);\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBZ0JBLGtCQUFBO0FBYkY7O0FBRkU7RUFDRSxxQkFBQTtBQUlKOztBQURFO0VBQ0UsV0FBQTtBQUdKOztBQUZJO0VBQ0UsZUFBQTtBQUlOOztBQUFFO0VBQ0UscUNBQUE7RUFDQSxtQ0FBQTtBQUVKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFFSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUlNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGUjs7QUFNSTtFQVNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVpOOztBQUVNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFBUjs7QUFFTTtFQUNFLFdBQUE7QUFBUjs7QUFTRTtFQUNFLGlCQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtBQVBKIiwiZmlsZSI6ImZhdm91cml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1wYWRkaW5ne1xuICBwYWRkaW5nOjlweCAhaW1wb3J0YW50IDtcbn1cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaW9uLWJ1dHRvbi5idXR0b24tZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5wcmljZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xuICB9XG5cbiAgLnJhdGluZy1hZGRyZXNzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXYge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmFkZHJlc3MtY29udGFpbmVyIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJhdGluZy1jb250YWluZXIge1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgfVxuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDRweCAxM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAwLjMzKTtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_favourites_favourites_module_ts.js.map