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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favourites.page.html */ 25615);
/* harmony import */ var _favourites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.page.scss */ 79636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/favourites/favourites.service */ 62700);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);








let FavouritesPage = class FavouritesPage {
    constructor(util, auth, langaugeservice, favService) {
        this.util = util;
        this.auth = auth;
        this.langaugeservice = langaugeservice;
        this.favService = favService;
        this.noFavourites = false;
        this.platform = this.util.platform;
        // this.auth.getUserIDObservable().subscribe((val) => {
        this.UserData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value, //val == 0 ? 1 : val,
        };
        this.showFavourites(this.UserData);
        // });
    }
    ngOnInit() { }
    showFavourites(userData) {
        this.util.showLoadingSpinner().then((__) => {
            this.favService.showFavourites(userData).subscribe((data) => {
                if (data.key == 1) {
                    //this.util.showMessage(data.msg);
                    if (data.data.length == 0) {
                        this.noFavourites = true;
                    }
                    this.favourites = data.data;
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
};
FavouritesPage.ctorParameters = () => [
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__.UtilitiesService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService },
    { type: src_app_services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_3__.FavouritesService }
];
FavouritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-favourites',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'favourites'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n<ion-content class=\"custom-padding\">\n  <div *ngIf=\"noFavourites\" class=\"no-data\">\n    <p>{{\"no favourites items\"|translate}}</p>\n   </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        sizeXs=\"6\"\n        sizeSm=\"4\"\n        sizeMd=\"4\"\n        sizeLg=\"4\"\n        sizeMd=\"4\"\n        *ngFor=\"let item of favourites\"\n      >\n        <ion-card\n          class=\"ion-no-margin\"\n          routerLink=\"/tabs/main/categories/{{item.section_id}}/{{item.id}}\"\n          *ngIf=\"item!=null\"\n        >\n          <img [src]=\"item?.first_image\" />\n\n          <div class=\"price-container\">\n            <span class=\"white-color fn-12 dalel-Regular\"\n              >{{item.price}} {{'currency'|translate}}</span\n            >\n          </div>\n\n          <ion-card-content>\n            <div class=\"name\">\n              <p class=\"fn-14 dalel-Bold dark-black-color\">{{item.title}}</p>\n            </div>\n            <div class=\"rating-address-container\">\n              <div class=\"address-container\">\n                <ion-icon name=\"location-sharp\" color=\"primary\"></ion-icon>\n                <p class=\"fn-14 dalel-Regular dark-black-color\">\n                   {{item.city_title}}\n                </p>\n              </div>\n\n              <div class=\"rating-container\" *ngIf=\"item.saler_rate!=0\">\n                <ion-icon color=\"secondary\" slot=\"end\" name=\"star\"></ion-icon>\n                <span class=\"white-color fn-10 dalel-Regular\"\n                  >{{item.rate}}</span\n                >\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 79636:
/*!*********************************************************!*\
  !*** ./src/app/modules/favourites/favourites.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".custom-padding {\n  padding: 9px !important;\n}\n\nion-card {\n  box-shadow: none !important;\n  border-radius: 10px;\n}\n\nion-card img {\n  height: 140px;\n  object-fit: cover;\n  object-position: right;\n  filter: brightness(0.62);\n}\n\nion-card ion-button.button-disabled {\n  opacity: 1 !important;\n}\n\nion-card ion-button {\n  margin: 0px;\n}\n\nion-card ion-button ion-icon {\n  font-size: 16px;\n}\n\nion-card ion-button::part(native) {\n  padding-inline-start: 10px !important;\n  padding-inline-end: 10px !important;\n}\n\nion-card .price-container {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: var(--ion-color-secondary);\n  border-radius: 5px;\n  padding: 2px 16px;\n}\n\nion-card .rating-address-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-card .rating-address-container div {\n  flex-direction: row;\n  display: flex;\n}\n\nion-card .rating-address-container .address-container ion-icon {\n  font-size: 18px;\n  height: 20px;\n}\n\nion-card .rating-address-container .rating-container {\n  background-color: var(--ion-color-primary);\n  border-radius: 5px;\n  padding: 3px 8px;\n}\n\nion-card .rating-address-container .rating-container ion-icon {\n  font-size: 12px;\n  margin: 2px;\n}\n\nion-card .rating-address-container .rating-container span {\n  margin: 2px;\n}\n\nion-card ion-card-content {\n  padding: 4px 13px;\n  background-color: rgba(var(--ion-color-secondary-rgb), 0.33);\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFERTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFERTtFQUNFLHFCQUFBO0FBR0o7O0FBQUU7RUFDRSxXQUFBO0FBRUo7O0FBREk7RUFDRSxlQUFBO0FBR047O0FBREk7RUFDRSxxQ0FBQTtFQUNBLG1DQUFBO0FBR047O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUNJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBQ047O0FBR007RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtJO0VBU0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWE47O0FBQ007RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUNNO0VBQ0UsV0FBQTtBQUNSOztBQVFFO0VBQ0UsaUJBQUE7RUFDQSw0REFBQTtFQUNBLGdCQUFBO0FBTkoiLCJmaWxlIjoiZmF2b3VyaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXBhZGRpbmd7XG4gIHBhZGRpbmc6OXB4ICFpbXBvcnRhbnQgO1xufVxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGltZ3tcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgZmlsdGVyOmJyaWdodG5lc3MoMC42Mik7XG4gIH1cbiAgaW9uLWJ1dHRvbi5idXR0b24tZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAucHJpY2UtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAycHggMTZweDtcbiAgfVxuXG4gIC5yYXRpbmctYWRkcmVzcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGl2IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5hZGRyZXNzLWNvbnRhaW5lciB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yYXRpbmctY29udGFpbmVyIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgIH1cblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICB9XG4gIH1cblxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA0cHggMTNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMC4zMyk7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgIFxuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_favourites_favourites_module_ts.js.map