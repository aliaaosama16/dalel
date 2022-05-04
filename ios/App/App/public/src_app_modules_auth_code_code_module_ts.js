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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_code_page__WEBPACK_IMPORTED_MODULE_1__.CodePage],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./code.page.html */ 20083);
/* harmony import */ var _code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.page.scss */ 47180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/data.service */ 34257);











let CodePage = class CodePage {
    constructor(router, auth, menuCtrl, util, language, platform, location, data) {
        this.router = router;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.util = util;
        this.language = language;
        this.platform = platform;
        this.location = location;
        this.data = data;
        this.inputFocusNumber1 = false;
        this.inputFocusNumber2 = false;
        this.inputFocusNumber3 = false;
        this.inputFocusNumber4 = false;
        this.menuCtrl.enable(false, 'main');
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.location.back();
        });
    }
    ngOnInit() { }
    confirmVerificationCode() {
        this.code = parseInt(this.codeValues);
        console.log('code is :' + this.codeValues.substring(9));
        this.activationData = {
            lang: this.language.getLanguage(),
            user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
            code: this.codeValues.substring(9),
            device_id: this.util.deviceID,
        };
        this.util.showLoadingSpinner().then((__) => {
            this.auth.activeAccount(this.activationData).subscribe((data) => {
                if (data.key == 1) {
                    console.log('activeAccount  res :' + JSON.stringify(data));
                    this.util.showMessage(data.msg);
                    this.util.showMessage('login now');
                    this.data.setPreviousPage('signin');
                    this.router.navigateByUrl('/login-register');
                }
                else {
                    this.util.showMessage(data.msg);
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
    next(ev, nextInput, current) {
        console.log('input value :  ' + ev.target.value, nextInput);
        if (current == 'n1') {
            this.inputFocusNumber1 = true;
        }
        else if (current == 'n2') {
            this.inputFocusNumber2 = true;
        }
        else if (current == 'n3') {
            this.inputFocusNumber3 = true;
        }
        else if (current == 'n4') {
            this.inputFocusNumber4 = true;
        }
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
    onOtpChange($event) {
        console.log('numbers' + JSON.stringify($event));
    }
};
CodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService }
];
CodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-code',
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_code_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <div class=\"auth-login-register\">\n    <div class=\"logo\">\n      <img src=\"../../../../assets/images/logo.svg\" />\n    </div>\n\n    <ion-card class=\"auth-container\">\n      <div class=\"auth-container-title\">\n        <h5 class=\"fn-24 dalel-Bold\">{{\"code-verification\"|translate}}</h5>\n      </div>\n\n      <div class=\"auth-container-sub-title fn-14 dalel-Regular\">\n        <p>{{\"enter code sent to mobile\"|translate}}</p>\n      </div>\n\n      <form class=\"auth-form\" (ngSubmit)=\"confirmVerificationCode()\">\n        <div class=\"code-conatiner\">\n          <div>\n            <ion-item\n              lines=\"none\"\n              [ngClass]=\"inputFocusNumber1 ? 'code-focused' : 'code-unfocused' \"\n            >\n              <ion-input\n                class=\"otp\"\n                #n1\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n2,'n1')\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n          </div>\n          <div>\n            <ion-item\n              lines=\"none\"\n              [ngClass]=\"inputFocusNumber2 ? 'code-focused' : 'code-unfocused' \"\n            >\n              <ion-input\n                class=\"otp\"\n                #n2\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n3,'n2')\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n          </div>\n          <div>\n            <ion-item\n              lines=\"none\"\n              [ngClass]=\"inputFocusNumber3 ? 'code-focused' : 'code-unfocused' \"\n            >\n              <ion-input\n                class=\"otp\"\n                #n3\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n4,'n3')\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n          </div>\n          <div>\n            <ion-item\n              lines=\"none\"\n              [ngClass]=\"inputFocusNumber4 ? 'code-focused' : 'code-unfocused' \"\n            >\n              <ion-input\n                class=\"otp\"\n                #n4\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,'','n4')\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n          </div>\n        </div>\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"fn-16 dalel-Bold\"> {{\"confirm\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 47180:
/*!**************************************************!*\
  !*** ./src/app/modules/auth/code/code.page.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('authBg-right.png') 0 0 /100% 100%\n    no-repeat;\n}\n\n.code-conatiner {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-bottom: 24px;\n}\n\n.code-conatiner ion-item {\n  margin-right: 9px;\n  margin-left: 9px;\n  margin-bottom: 0px !important;\n}\n\n.code-conatiner ion-item ion-input {\n  text-align: center;\n  --padding-end: 0px !important;\n}\n\n.code-conatiner ion-item ion-input .native-input {\n  font-size: 24px !important;\n  padding: 0px;\n  margin: 0px;\n  font-family: \"Cairo-SemiBold\";\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.code-conatiner .code-unfocused::part(native) {\n  --border-color: var(--ion-color-secondary) !important;\n  border-bottom-color: var(--ion-color-secondary) !important;\n}\n\n.code-conatiner .code-focused::part(native) {\n  --border-color: var(--ion-color-primary) !important;\n  border-bottom-color: var(--ion-color-primary) !important;\n  background-color: var(--ion-color-primary) !important;\n}\n\n.code-conatiner .code-focused ion-input {\n  --color: var(--ion-color-white) !important;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-item::part(native) {\n  padding: 6px 0px !important;\n  text-align: center;\n}\n\nion-item::part(native) .item-inner {\n  padding-inline-end: 0px !important;\n}\n\nion-button {\n  margin-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7YUFBQTtBQUVGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBRUk7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0FBQU47O0FBQ007RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBQ1I7O0FBS0k7RUFDRSxxREFBQTtFQUNBLDBEQUFBO0FBSE47O0FBUUk7RUFDRSxtREFBQTtFQUNBLHdEQUFBO0VBQ0EscURBQUE7QUFOTjs7QUFTSTtFQUNFLDBDQUFBO0FBUE47O0FBZ0JBO0VBUUUsbUNBQUE7QUFwQkY7O0FBYUU7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBWEo7O0FBWUk7RUFDRSxrQ0FBQTtBQVZOOztBQWtCQTtFQUNFLG1CQUFBO0FBZkYiLCJmaWxlIjoiY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F1dGhCZy1yaWdodC5wbmcpIDAgMCAvMTAwJSAxMDAlXG4gICAgbm8tcmVwZWF0O1xufVxuXG4uY29kZS1jb25hdGluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgaW9uLWl0ZW17XG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICAgIC5uYXRpdmUtaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tU2VtaUJvbGRcIjtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvZGUtdW5mb2N1c2VkIHtcbiAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgLmNvZGUtZm9jdXNlZCB7XG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgIFxuICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxufVxuXG5cblxuXG5pb24taXRlbSB7XG4gICY6OnBhcnQobmF0aXZlKSB7XG4gICAgcGFkZGluZzogNnB4IDBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuaXRlbS1pbm5lciB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn1cblxuXG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_code_code_module_ts.js.map