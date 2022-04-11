"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_phone-number_phone-number_module_ts"],{

/***/ 85167:
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/phone-number/phone-number-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNumberPageRoutingModule": () => (/* binding */ PhoneNumberPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _phone_number_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-number.page */ 35887);




const routes = [
    {
        path: '',
        component: _phone_number_page__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberPage
    }
];
let PhoneNumberPageRoutingModule = class PhoneNumberPageRoutingModule {
};
PhoneNumberPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhoneNumberPageRoutingModule);



/***/ }),

/***/ 26963:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/phone-number/phone-number.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNumberPageModule": () => (/* binding */ PhoneNumberPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _phone_number_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-number-routing.module */ 85167);
/* harmony import */ var _phone_number_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-number.page */ 35887);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let PhoneNumberPageModule = class PhoneNumberPageModule {
};
PhoneNumberPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _phone_number_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_phone_number_page__WEBPACK_IMPORTED_MODULE_1__.PhoneNumberPage]
    })
], PhoneNumberPageModule);



/***/ }),

/***/ 35887:
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/phone-number/phone-number.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNumberPage": () => (/* binding */ PhoneNumberPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_phone_number_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./phone-number.page.html */ 42714);
/* harmony import */ var _phone_number_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-number.page.scss */ 91615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);







let PhoneNumberPage = class PhoneNumberPage {
    constructor(router, menuCtrl, platform, location) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.location = location;
        this.inputFocusPhone = false;
        this.inputFocusPhoneIcon = './../../../../assets/icon/phone-active.svg';
        this.inputInFocusPhoneIcon = './../../../../assets/icon/phone-inactive.svg';
        this.menuCtrl.enable(false, 'main');
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.location.back();
        });
    }
    // ionViewWillEnter() {
    //   this.menuCtrl.enable(false);
    // }
    ngOnInit() { }
    sendVerificationCode() {
        this.router.navigateByUrl('/code');
    }
    focusPhone(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusPhone = focusStatus;
    }
};
PhoneNumberPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
PhoneNumberPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-phone-number',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_phone_number_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_phone_number_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhoneNumberPage);



/***/ }),

/***/ 42714:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/phone-number/phone-number.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <div class=\"auth-login-register\">\n    <div class=\"logo\">\n      <img src=\"../../../../assets/images/logo.svg\" />\n    </div>\n\n    <ion-card class=\"auth-container\">\n      <div class=\"auth-container-title\">\n        <h5>{{\"phone-number\"|translate}}</h5>\n      </div>\n\n      <div class=\"auth-container-sub-title\">\n        <p>{{\"enter phone-number to send code\"|translate}}</p>\n      </div>\n\n      <form class=\"auth-form\" (ngSubmit)=\"sendVerificationCode()\">\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPhone ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPhone?inputFocusPhoneIcon:inputInFocusPhoneIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPhone(true)\"\n            (ionBlur)=\"focusPhone(false)\"\n            placeholder=\"{{'phone-number'|translate}}\"\n            type=\"number\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"auth-btn\"> {{\"confirm\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 91615:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/phone-number/phone-number.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('authBg-right.png') 0 0 /100% 100%\n    no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLW51bWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTthQUFBO0FBRUoiLCJmaWxlIjoicGhvbmUtbnVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hdXRoQmctcmlnaHQucG5nKSAwIDAgLzEwMCUgMTAwJVxuICAgICAgbm8tcmVwZWF0O1xuICB9XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_phone-number_phone-number_module_ts.js.map