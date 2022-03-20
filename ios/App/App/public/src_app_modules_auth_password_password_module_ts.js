"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_password_password_module_ts"],{

/***/ 76350:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/password/password-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageRoutingModule": () => (/* binding */ PasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.page */ 30989);




const routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_0__.PasswordPage
    }
];
let PasswordPageRoutingModule = class PasswordPageRoutingModule {
};
PasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordPageRoutingModule);



/***/ }),

/***/ 35596:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/password/password.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageModule": () => (/* binding */ PasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-routing.module */ 76350);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page */ 30989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_1__.PasswordPage]
    })
], PasswordPageModule);



/***/ }),

/***/ 30989:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/password/password.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./password.page.html */ 66933);
/* harmony import */ var _password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page.scss */ 58565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let PasswordPage = class PasswordPage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.inputFocusPassword = false;
        this.inputFocusPasswordIcon = './../../../../assets/icon/password-active.svg';
        this.inputInFocusPasswordIcon = './../../../../assets/icon/password-inactive.svg';
        this.inputFocusConfirmPassword = false;
        this.inputFocusConfirmPasswordIcon = './../../../../assets/icon/password-active.svg';
        this.inputInFocusConfirmPasswordIcon = './../../../../assets/icon/password-inactive.svg';
        this.menuCtrl.enable(false, 'main');
    }
    // ionViewWillEnter() {
    //   this.menuCtrl.enable(false);
    // }
    ngOnInit() { }
    passwordChange() { }
    focusPassword(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusPassword = focusStatus;
    }
    focusConfirmPassword(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusConfirmPassword = focusStatus;
    }
};
PasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
PasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-password',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_password_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordPage);



/***/ }),

/***/ 66933:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/password/password.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <div class=\"auth-login-register\">\n    <div class=\"logo\">\n      <img src=\"../../../../assets/images/logo.svg\" />\n    </div>\n\n    <ion-card class=\"auth-container\">\n   \n      <div class=\"auth-container-title\">\n        <h5> {{ \"password-change\"|translate}}  </h5>\n      </div>\n      \n\n      <form class=\"auth-form\" (ngSubmit)=\"passwordChange()\">\n       \n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPassword ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPassword?inputFocusPasswordIcon:inputInFocusPasswordIcon}}\"\n          ></ion-icon>\n          <ion-input (ionFocus)=\"focusPassword(true)\" (ionBlur)=\"focusPassword(false)\"\n            placeholder=\"{{'password'|translate}}\"\n            type=\"password\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusConfirmPassword ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusConfirmPassword?inputFocusConfirmPasswordIcon:inputInFocusConfirmPasswordIcon}}\"\n          ></ion-icon>\n          <ion-input (ionFocus)=\"focusConfirmPassword(true)\" (ionBlur)=\"focusConfirmPassword(false)\"\n            placeholder=\"{{'confirm-password'|translate}}\"\n            type=\"password\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"auth-btn\"> {{\"confirm\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n   \n  </div>\n</ion-content>\n");

/***/ }),

/***/ 58565:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/password/password.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('authBg-left.png') 0 0 /100% 100%\n    no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO2FBQUE7QUFFSiIsImZpbGUiOiJwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXV0aEJnLWxlZnQucG5nKSAwIDAgLzEwMCUgMTAwJVxuICAgICAgbm8tcmVwZWF0O1xuICB9XG5cbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_password_password_module_ts.js.map