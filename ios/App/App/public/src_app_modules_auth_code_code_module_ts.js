"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_code_code_module_ts"],{

/***/ 66781:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/code/code-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodePageRoutingModule": () => (/* binding */ CodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code.page */ 81281);




const routes = [
    {
        path: '',
        component: _code_page__WEBPACK_IMPORTED_MODULE_0__.CodePage
    }
];
let CodePageRoutingModule = class CodePageRoutingModule {
};
CodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CodePageRoutingModule);



/***/ }),

/***/ 8410:
/*!**************************************************!*\
  !*** ./src/app/modules/auth/code/code.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodePageModule": () => (/* binding */ CodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-routing.module */ 66781);
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.page */ 81281);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let CodePageModule = class CodePageModule {
};
CodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _code_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_code_page__WEBPACK_IMPORTED_MODULE_1__.CodePage]
    })
], CodePageModule);



/***/ }),

/***/ 81281:
/*!************************************************!*\
  !*** ./src/app/modules/auth/code/code.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodePage": () => (/* binding */ CodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./code.page.html */ 20083);
/* harmony import */ var _code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.page.scss */ 47180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);






let CodePage = class CodePage {
    constructor(router, menuCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.inputFocusNumber1 = false;
        this.inputFocusNumber2 = false;
        this.inputFocusNumber3 = false;
        this.inputFocusNumber4 = false;
        this.menuCtrl.enable(false, 'main');
    }
    // ionViewWillEnter() {
    //   this.menuCtrl.enable(false);
    // }
    ngOnInit() { }
    confirmVerificationCode() {
        this.code = parseInt(this.codeValues);
        console.log('code is :' + this.codeValues.substring(9));
        this.router.navigateByUrl('/tabs');
    }
    focusNumber1(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusNumber1 = focusStatus;
    }
    focusNumber2(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusNumber2 = focusStatus;
    }
    focusNumber3(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusNumber3 = focusStatus;
    }
    focusNumber4(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusNumber4 = focusStatus;
    }
    next(ev, nextInput) {
        console.log(ev.target.value);
        const input = ev.target;
        const length = input.value.length;
        console.log('length is ' + length);
        const maxLength = input.attributes.maxlength.value;
        console.log('maxLength is ' + maxLength);
        this.codeValues += ev.target.value;
        console.log(this.codeValues);
        if (length >= maxLength) {
            nextInput.setFocus();
        }
    }
    focusFristNumber() { }
};
CodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
CodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-code',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_code_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_code_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodePage);



/***/ }),

/***/ 20083:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/code/code.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <div class=\"auth-login-register\">\n    <div class=\"logo\">\n      <img src=\"../../../../assets/images/logo.svg\" />\n    </div>\n\n    <ion-card class=\"auth-container\">\n      <div class=\"auth-container-title\">\n        <h5>{{\"code-verification\"|translate}}</h5>\n      </div>\n\n      <div class=\"auth-container-sub-title\">\n        <p>{{\"enter code sent to mobile\"|translate}}</p>\n      </div>\n\n      <form class=\"auth-form\" (ngSubmit)=\"confirmVerificationCode()\">\n        <ion-row>\n          <ion-col size=\"3\" [ngClass]=\"inputFocusNumber1 ? 'focused' : 'unfocused' \">\n            <ion-item lines=\"none\" >\n              <ion-input\n                class=\"otp\"\n                #n1\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n2)\"\n                (ionFocus)=\"focusNumber1(true)\"\n                (ionBlur)=\"focusNumber1(false)\"\n                type=\"number\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-item lines=\"none\" [ngClass]=\"inputFocusNumber2 ? 'focused' : 'unfocused' \">\n              <ion-input\n                class=\"otp\"\n                #n2\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n3)\"\n                (ionFocus)=\"focusNumber2(true)\"\n                (ionBlur)=\"focusNumber2(false)\"\n                type=\"number\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"3\" [ngClass]=\"inputFocusNumber3 ? 'focused' : 'unfocused' \">\n            <ion-item lines=\"none\" >\n              <ion-input\n                class=\"otp\"\n                #n3\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n4)\"\n                (ionFocus)=\"focusNumber3(true)\"\n                (ionBlur)=\"focusNumber3(false)\"\n                type=\"number\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"3\" [ngClass]=\"inputFocusNumber4 ? 'focused' : 'unfocused' \">\n            <ion-item lines=\"none\" >\n              <ion-input\n                class=\"otp\"\n                #n4\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,'')\"\n                (ionFocus)=\"focusNumber4(true)\"\n                (ionBlur)=\"focusNumber4(false)\"\n                type=\"number\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"auth-btn\"> {{\"confirm\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 47180:
/*!**************************************************!*\
  !*** ./src/app/modules/auth/code/code.page.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('authBg-right.png') 0 0 /100% 100%\n    no-repeat;\n}\n\n.auth-form ion-item {\n  margin-bottom: 0px !important;\n}\n\nion-row {\n  margin-bottom: 24px;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-button {\n  margin-bottom: 32px;\n}\n\nion-input {\n  text-align: center;\n  --padding-end: 0px !important;\n}\n\nion-input .native-input {\n  font-size: 24px !important;\n  padding: 0px;\n  margin: 0px;\n  font-family: \"Cairo-SemiBold\";\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.focused ion-item::part(native) {\n  --background: var(--ion-color-primary) !important;\n}\n\n.focused ion-input {\n  --color: var(--ion-color-white) !important;\n}\n\nion-item::part(native) {\n  padding: 6px 0px !important;\n  text-align: center;\n}\n\nion-item::part(native) .item-inner {\n  padding-inline-end: 0px !important;\n}\n\n.code-verification-container {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7YUFBQTtBQUVGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxtQ0FBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7QUFNRjs7QUFMRTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFPSjs7QUFIRTtFQUNFLGlEQUFBO0FBTUo7O0FBSkU7RUFDRSwwQ0FBQTtBQU1KOztBQURBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUhFO0VBQ0Usa0NBQUE7QUFLSjs7QUFEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUlGIiwiZmlsZSI6ImNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hdXRoQmctcmlnaHQucG5nKSAwIDAgLzEwMCUgMTAwJVxuICAgIG5vLXJlcGVhdDtcbn1cbi5hdXRoLWZvcm0gaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbmlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuaW9uLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgLm5hdGl2ZS1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvLVNlbWlCb2xkXCI7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLmZvY3VzZWQge1xuICBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pbnB1dHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgcGFkZGluZzogNnB4IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jb2RlLXZlcmlmaWNhdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_code_code_module_ts.js.map