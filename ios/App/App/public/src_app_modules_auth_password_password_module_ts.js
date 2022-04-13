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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./password.page.html */ 66933);
/* harmony import */ var _password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page.scss */ 58565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);











let PasswordPage = class PasswordPage {
    constructor(menuCtrl, formBuilder, util, langaugeservice, auth, router, platform, location) {
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.util = util;
        this.langaugeservice = langaugeservice;
        this.auth = auth;
        this.router = router;
        this.platform = platform;
        this.location = location;
        this.isForgetPasswordSubmitted = false;
        this.inputFocusPhone = false;
        this.inputFocusPhoneIcon = './../../../../assets/icon/phone-active.svg';
        this.inputInFocusPhoneIcon = './../../../../assets/icon/phone-inactive.svg';
        this.menuCtrl.enable(false, 'main');
        this.buildForm();
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.location.back();
        });
    }
    ngOnInit() { }
    forgetPassword() {
        console.log('change pass form : ' + JSON.stringify(this.forgetPasswordForm.value));
        if (this.forgetPasswordForm.valid) {
            this.forgetPasswordData = {
                lang: this.langaugeservice.getLanguage(),
                phone: this.forgetPasswordForm.value.phoneNumber,
            };
            this.util.showLoadingSpinner().then((__) => {
                this.auth.forgetPassword(this.forgetPasswordData).subscribe((data) => {
                    if (data.key == 1) {
                        console.log('login res :' + JSON.stringify(data));
                        this.util.showMessage(data.msg);
                        this.router.navigateByUrl('/chnage-password/' + data.data.id);
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
    }
    buildForm() {
        this.forgetPasswordForm = this.formBuilder.group({
            phoneNumber: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^05/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10),
                    //10
                ],
            ],
        });
    }
    get forgetPasswordErrorControl() {
        return this.forgetPasswordForm.controls;
    }
    focusPhone(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusPhone = focusStatus;
    }
};
PasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location }
];
PasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-password',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <div class=\"auth-login-register\">\n    <div class=\"logo\">\n      <img src=\"../../../../assets/images/logo.svg\" />\n    </div>\n\n    <ion-card class=\"auth-container\">\n      <div class=\"auth-container-title\">\n        <h5 class=\"fn-24 dalel-Bold\">{{ \"password-change\"|translate}}</h5>\n      </div>\n\n      <form\n        class=\"auth-form\"\n        (ngSubmit)=\"forgetPassword()\"\n        [formGroup]=\"forgetPasswordForm\"\n      >\n        <ion-item\n          lines=\"none\"\n          [ngClass]=\"inputFocusPhone ? 'focused' : 'unfocused' \"\n        >\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPhone?inputFocusPhoneIcon:inputInFocusPhoneIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPhone(true)\"\n            (ionBlur)=\"focusPhone(false)\"\n            placeholder=\"{{'phone-number'|translate}}\"\n            type=\"tel\"\n            formControlName=\"phoneNumber\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box fn-12\"\n          *ngIf=\"isForgetPasswordSubmitted && forgetPasswordErrorControl.phoneNumber.errors?.required\"\n        >\n          {{'please enter phone number' | translate}}\n        </div>\n\n        <div\n          class=\"error-box fn-12\"\n          *ngIf=\"isForgetPasswordSubmitted && forgetPasswordErrorControl.phoneNumber.errors?.minlength\"\n        >\n          {{'phone number should be 10 numbers' | translate}}\n        </div>\n\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"fn-16 dalel-Bold\"> {{\"change password\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 58565:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/password/password.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('authBg-left.png') 0 0 /100% 100%\n    no-repeat;\n}\n\nion-item {\n  --highlight-color-focused:var(--ion-color-primary);\n  --highlight-color-valid:var(--ion-color-primary);\n  --highlight-color-invalid:var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO2FBQUE7QUFFSjs7QUFHQTtFQUNFLGtEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtBQUFGIiwiZmlsZSI6InBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hdXRoQmctbGVmdC5wbmcpIDAgMCAvMTAwJSAxMDAlXG4gICAgICBuby1yZXBlYXQ7XG4gIH1cblxuICBcbmlvbi1pdGVte1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_password_password_module_ts.js.map