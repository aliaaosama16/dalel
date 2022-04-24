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
<<<<<<< HEAD
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favourites.page.html */ 25615);
=======
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favourites.page.html */ 25615);
>>>>>>> 834fbd3340ffd4e17fcb852b513b68d626caa195
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
        this.UserData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value,
        };
        this.showFavourites(this.UserData);
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
    doRefresh($event) {
        this.UserData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value,
        };
        this.favService.showFavourites(this.UserData).subscribe((data) => {
            if (data.key == 1) {
                if (data.data.length == 0) {
                    this.noFavourites = true;
                }
                this.favourites = data.data;
            }
            $event.target.complete();
        }, (err) => {
            $event.target.complete();
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
<<<<<<< HEAD
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
=======
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
>>>>>>> 834fbd3340ffd4e17fcb852b513b68d626caa195
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'favourites'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n<ion-content class=\"custom-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"noFavourites\" class=\"no-data\">\n    <p>{{\"no favourites items\"|translate}}</p>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        sizeXs=\"6\"\n        sizeSm=\"4\"\n        sizeMd=\"4\"\n        sizeLg=\"4\"\n        sizeMd=\"4\"\n        *ngFor=\"let item of favourites\"\n      >\n        <ion-card class=\"ion-no-margin\">\n          <div class=\"fav-container\">\n            <div class=\"fav-part price\">\n              <img [src]=\"item?.first_image\" />\n\n              <div class=\"price-container\">\n                <span class=\"white-color fn-12 dalel-Regular\"\n                  >{{item.price}} {{'currency'|translate}}</span\n                >\n              </div>\n            </div>\n            <div class=\"fav-part details\">\n              <div class=\"name\">\n                <p class=\"fn-14 dalel-Bold dark-black-color\">{{item.title}}</p>\n              </div>\n              <div class=\"rating-address-container\">\n                <div class=\"address-container\">\n                  <ion-icon name=\"location-sharp\" color=\"primary\"></ion-icon>\n                  <p class=\"fn-14 dalel-Regular dark-black-color\">\n                     {{item.city_title}}\n                  </p>\n                </div>\n\n                <div class=\"rating-container\" *ngIf=\"item.saler_rate!=0\">\n                  <ion-icon color=\"secondary\" slot=\"end\" name=\"star\"></ion-icon>\n                  <span class=\"white-color fn-10 dalel-Regular\"\n                    >{{item.rate}}</span\n                  >\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 79636:
/*!*********************************************************!*\
  !*** ./src/app/modules/favourites/favourites.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".custom-padding {\n  padding: 9px !important;\n}\n\nion-card {\n  box-shadow: none !important;\n  border-radius: 10px;\n}\n\nion-card .fav-container {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\nion-card .fav-container .fav-part img {\n  height: 140px;\n  object-fit: cover;\n  object-position: right;\n  filter: brightness(0.62);\n  width: 100%;\n}\n\nion-card .fav-container .details {\n  padding: 4px 13px;\n  background-color: rgba(var(--ion-color-secondary-rgb), 0.33);\n  margin-top: -9px;\n  height: 78px;\n}\n\nion-card .fav-container .details .name p {\n  margin-bottom: 0px;\n}\n\nion-card .fav-container .details .rating-address-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-card .fav-container .details .rating-address-container div {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n}\n\nion-card .fav-container .details .rating-address-container .address-container ion-icon {\n  font-size: 18px;\n  height: 20px;\n}\n\nion-card .fav-container .details .rating-address-container .address-container p {\n  margin: 0px;\n}\n\nion-card .fav-container .details .rating-address-container .rating-container {\n  background-color: var(--ion-color-primary);\n  border-radius: 5px;\n  padding: 3px 8px;\n}\n\nion-card .fav-container .details .rating-address-container .rating-container ion-icon {\n  font-size: 12px;\n  margin: 2px;\n}\n\nion-card .fav-container .details .rating-address-container .rating-container span {\n  margin: 2px;\n}\n\nion-card .fav-container .price {\n  position: relative;\n}\n\nion-card .fav-container .price .price-container {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: var(--ion-color-secondary);\n  border-radius: 5px;\n  padding: 2px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBR0o7O0FBRE07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQUdSOztBQUNJO0VBQ0UsaUJBQUE7RUFDQSw0REFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUVRO0VBQ0Usa0JBQUE7QUFBVjs7QUFHTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRFI7O0FBRVE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFWOztBQUlVO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGWjs7QUFJVTtFQUNFLFdBQUE7QUFGWjs7QUFNUTtFQVVFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWJWOztBQUVVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFBWjs7QUFHVTtFQUNFLFdBQUE7QUFEWjs7QUFXSTtFQUNFLGtCQUFBO0FBVE47O0FBV007RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVFIiLCJmaWxlIjoiZmF2b3VyaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXBhZGRpbmcge1xuICBwYWRkaW5nOiA5cHggIWltcG9ydGFudCA7XG59XG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLmZhdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmZhdi1wYXJ0IHtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IHJpZ2h0O1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42Mik7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIHBhZGRpbmc6IDRweCAxM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuMzMpO1xuICAgICAgbWFyZ2luLXRvcDogLTlweDtcbiAgICAgIGhlaWdodDogNzhweDtcblxuICAgICAgLm5hbWUge1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yYXRpbmctYWRkcmVzcy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkcmVzcy1jb250YWluZXIge1xuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmF0aW5nLWNvbnRhaW5lciB7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJpY2Uge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAucHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAycHggMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBpb24tYnV0dG9uLmJ1dHRvbi1kaXNhYmxlZCB7XG4gIC8vICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAvLyB9XG5cbiAgLy8gaW9uLWJ1dHRvbiB7XG4gIC8vICAgbWFyZ2luOiAwcHg7XG4gIC8vICAgaW9uLWljb24ge1xuICAvLyAgICAgZm9udC1zaXplOiAxNnB4O1xuICAvLyAgIH1cbiAgLy8gICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAvLyAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgLy8gICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGlvbi1jYXJkLWNvbnRlbnQge1xuICAvLyAgIHBhZGRpbmc6IDRweCAxM3B4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAwLjMzKTtcbiAgLy8gICBtYXJnaW4tdG9wOiAtOXB4O1xuICAvLyB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_favourites_favourites_module_ts.js.map