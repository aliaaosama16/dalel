"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_login-register_login-register_module_ts"],{

/***/ 38113:
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/login-register/login-register-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRegisterPageRoutingModule": () => (/* binding */ LoginRegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-register.page */ 80437);




const routes = [
    {
        path: '',
        component: _login_register_page__WEBPACK_IMPORTED_MODULE_0__.LoginRegisterPage
    }
];
let LoginRegisterPageRoutingModule = class LoginRegisterPageRoutingModule {
};
LoginRegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginRegisterPageRoutingModule);



/***/ }),

/***/ 64418:
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/login-register/login-register.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRegisterPageModule": () => (/* binding */ LoginRegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-register-routing.module */ 38113);
/* harmony import */ var _login_register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-register.page */ 80437);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let LoginRegisterPageModule = class LoginRegisterPageModule {
};
LoginRegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRegisterPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_register_page__WEBPACK_IMPORTED_MODULE_1__.LoginRegisterPage]
    })
], LoginRegisterPageModule);



/***/ }),

/***/ 80437:
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/login-register/login-register.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRegisterPage": () => (/* binding */ LoginRegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-register.page.html */ 48231);
/* harmony import */ var _login_register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-register.page.scss */ 18066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);
/* harmony import */ var src_app_models_loginData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/loginData */ 80261);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90466);












let LoginRegisterPage = class LoginRegisterPage {
    constructor(langaugeservice, router, formBuilder, menuCtrl, util, auth, translate) {
        this.langaugeservice = langaugeservice;
        this.router = router;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.util = util;
        this.auth = auth;
        this.translate = translate;
        this.inputLoginType = 'password';
        this.iconLoginName = 'eye-off-outline';
        this.iconRegisterName = 'eye-off-outline';
        this.inputRegisterType = 'password';
        this.iconRegisterConfirmName = 'eye-off-outline';
        this.inputRegisterConfirmType = 'password';
        this.authType = 'signin';
        this.inputFocusPerson = false;
        this.inputFocusPersonIcon = './../../../../assets/icon/person-active.svg';
        this.inputInFocusPersonIcon = './../../../../assets/icon/person-inactive.svg';
        this.inputFocusEmail = false;
        this.inputFocusEmailIcon = './../../../../assets/icon/email-active.svg';
        this.inputInFocusEmailIcon = './../../../../assets/icon/email-inactive.svg';
        this.inputFocusPhone = false;
        this.inputFocusPhoneIcon = './../../../../assets/icon/phone-active.svg';
        this.inputInFocusPhoneIcon = './../../../../assets/icon/phone-inactive.svg';
        this.inputFocusPassword = false;
        this.inputFocusPasswordIcon = './../../../../assets/icon/password-active.svg';
        this.inputInFocusPasswordIcon = './../../../../assets/icon/password-inactive.svg';
        this.inputFocusConfirmPassword = false;
        this.inputFocusConfirmPasswordIcon = './../../../../assets/icon/password-active.svg';
        this.inputInFocusConfirmPasswordIcon = './../../../../assets/icon/password-inactive.svg';
        this.isRegisterSubmitted = false;
        this.isSignInSubmitted = false;
        this.menuCtrl.enable(false, 'main');
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        this.buildForm();
    }
    buildForm() {
        this.registerForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
            phoneNumber: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^05/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10),
                    //10
                ],
            ],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
        });
        this.signinForm = this.formBuilder.group({
            phoneNumber: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^05/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10),
                    //10
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
        });
    }
    authTypeChange(ev) {
        console.log('Segment changed', ev.detail.value);
    }
    get registerErrorControl() {
        return this.registerForm.controls;
    }
    get signinErrorControl() {
        return this.signinForm.controls;
    }
    signUp() {
        this.isRegisterSubmitted = true;
        console.log(this.registerForm.value);
        if (this.registerForm.valid) {
            if (this.registerForm.value.password ==
                this.registerForm.value.confirmPassword) {
                this.registerData = {
                    lang: this.langaugeservice.getLanguage(),
                    first_name: this.registerForm.value.userName,
                    email: this.registerForm.value.email,
                    phone: this.registerForm.value.phoneNumber,
                    password: this.registerForm.value.password,
                };
                this.util.showLoadingSpinner().then((__) => {
                    this.auth.register(this.registerData).subscribe((data) => {
                        if (data.key == 1) {
                            console.log('register res :' + JSON.stringify(data));
                            this.util.showMessage(data.msg);
                            this.auth.userID.next(data.data.id);
                            this.auth.storeStatusAfterRegisteration(data);
                            this.router.navigateByUrl('/code');
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
            else {
                this.translate.instant('both password and confirm password should be equal');
            }
        }
        else {
            console.log(this.signinForm.value);
            return false;
        }
    }
    signIn() {
        this.isSignInSubmitted = true;
        console.log('signinForm : ' + JSON.stringify(this.signinForm.value));
        if (this.signinForm.valid) {
            this.loginData = {
                lang: this.langaugeservice.getLanguage(),
                phone: this.signinForm.value.phoneNumber,
                password: this.signinForm.value.password,
                device_id: this.util.deviceID,
            };
            this.util.showLoadingSpinner().then((__) => {
                this.auth.login(this.loginData).subscribe((data) => {
                    if (data.key == 1) {
                        console.log('login res :' + JSON.stringify(data));
                        if (data.status == src_app_models_loginData__WEBPACK_IMPORTED_MODULE_4__.Status.Active) {
                            this.router.navigateByUrl('/tabs/main');
                            // window.location.reload();
                            this.auth.storeStatusAfterLogin(data);
                            this.auth.setUserID(data.data.id);
                        }
                        else if (data.status == src_app_models_loginData__WEBPACK_IMPORTED_MODULE_4__.Status.NonActive) {
                            this.router.navigateByUrl('/code');
                        }
                        else if (data.status == src_app_models_loginData__WEBPACK_IMPORTED_MODULE_4__.Status.Blocked) {
                            this.util.showMessage('you are blocked.Contact with management');
                        }
                    }
                    else {
                        this.util.showMessage(data.msg);
                    }
                    this.util.dismissLoading();
                }, (err) => {
                    this.util.dismissLoading();
                });
            });
            // return false;
        }
        else {
            return false;
            console.log(this.signinForm.value);
        }
    }
    forgetPassword() {
        this.router.navigateByUrl('/password');
    }
    changAuthType(authType) {
        this.authType = authType;
    }
    // change icon beside input : just for style
    focusPerson(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusPerson = focusStatus;
    }
    focusEmail(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusEmail = focusStatus;
    }
    focusPhone(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusPhone = focusStatus;
    }
    focusPassword(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusPassword = focusStatus;
    }
    focusConfirmPassword(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusConfirmPassword = focusStatus;
    }
    showLoginPassword() {
        this.showLoginPass = !this.showLoginPass;
        this.iconLoginName = this.showLoginPass ? 'eye-outline' : 'eye-off-outline';
        this.inputLoginType = this.showLoginPass ? 'text' : 'password';
    }
    showRegisterPassword() {
        this.showLRegisterPass = !this.showLRegisterPass;
        this.iconRegisterName = this.showLRegisterPass
            ? 'eye-outline'
            : 'eye-off-outline';
        this.inputRegisterType = this.showLRegisterPass ? 'text' : 'password';
    }
    showRegisterConfirmPassword() {
        this.showLRegisterConfirmPass = !this.showLRegisterConfirmPass;
        this.iconRegisterConfirmName = this.showLRegisterConfirmPass
            ? 'eye-outline'
            : 'eye-off-outline';
        this.inputRegisterConfirmType = this.showLRegisterConfirmPass
            ? 'text'
            : 'password';
    }
};
LoginRegisterPage.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_3__.UtilitiesService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
LoginRegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login-register',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginRegisterPage);



/***/ }),

/***/ 48231:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/login-register/login-register.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [ngClass]=\"authType=='register' ? 'bg-left' : 'bg-right' \">\n  <div class=\"auth-login-register\">\n    <div class=\"logo\">\n      <img src=\"../../../../assets/images/logo.svg\" />\n    </div>\n\n    <ion-card class=\"auth-container\">\n      <ion-segment\n        (ionChange)=\"authTypeChange($event)\"\n        value=\"register\"\n        [(ngModel)]=\"authType\"\n      >\n        <ion-segment-button value=\"register\" class=\"register-btn\">\n          <ion-label>{{\"register\"|translate}}</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"signin\" class=\"signin-btn\">\n          <ion-label>{{\"signin\"|translate}}</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <form\n        class=\"auth-form\"\n        *ngIf=\" authType=='register'\"\n        (ngSubmit)=\"signUp()\"\n        [formGroup]=\"registerForm\"\n      >\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPerson ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPerson?inputFocusPersonIcon:inputInFocusPersonIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPerson(true)\"\n            (ionBlur)=\"focusPerson(false)\"\n            placeholder=\"{{'user-name'|translate}}\"\n            type=\"text\"\n            formControlName=\"userName\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isRegisterSubmitted && registerErrorControl .userName.errors?.required\"\n        >\n          {{'please enter user name' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isRegisterSubmitted && registerErrorControl .userName.errors?.minlength\"\n        >\n          {{'user name should be min 2 chars long' | translate}}\n        </div>\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPhone ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPhone?inputFocusPhoneIcon:inputInFocusPhoneIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPhone(true)\"\n            (ionBlur)=\"focusPhone(false)\"\n            placeholder=\"{{'phone-number'|translate}}\"\n            type=\"tel\"\n            formControlName=\"phoneNumber\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isRegisterSubmitted && registerErrorControl .phoneNumber.errors?.required\"\n        >\n          {{'please enter phone number' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isRegisterSubmitted && registerErrorControl .phoneNumber.errors?.minlength\"\n        >\n          {{'phone number should be 10 numbers' | translate}}\n        </div>\n\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusEmail ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusEmail?inputFocusEmailIcon:inputInFocusEmailIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusEmail(true)\"\n            (ionBlur)=\"focusEmail(false)\"\n            placeholder=\"{{'email-address'|translate}}\"\n            type=\"email\"\n            formControlName=\"email\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isRegisterSubmitted && registerErrorControl .email.errors?.required \"\n        >\n          {{'please enter email' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isRegisterSubmitted && registerErrorControl .email.errors?.pattern \"\n        >\n          {{'please enter valid email' | translate}}\n        </div>\n\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPassword ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPassword?inputFocusPasswordIcon:inputInFocusPasswordIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPassword(true)\"\n            (ionBlur)=\"focusPassword(false)\"\n            placeholder=\"{{'password'|translate}}\"\n            [type]=\"inputRegisterType\"\n            formControlName=\"password\"\n          ></ion-input>\n          <ion-icon (click)=\"showRegisterPassword()\"\n          item-end\n          color=\"primary\"\n          [name]=\"iconRegisterName\"\n        ></ion-icon>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isRegisterSubmitted && registerErrorControl .password.errors?.required\"\n        >\n          {{'please enter password' | translate}}\n        </div>\n\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusConfirmPassword ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusConfirmPassword?inputFocusConfirmPasswordIcon:inputInFocusConfirmPasswordIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusConfirmPassword(true)\"\n            (ionBlur)=\"focusConfirmPassword(false)\"\n            placeholder=\"{{'confirm-password'|translate}}\"\n            [type]=\"inputRegisterConfirmType\"\n            formControlName=\"confirmPassword\"\n          ></ion-input>\n          <ion-icon (click)=\"showRegisterConfirmPassword()\"\n          item-end\n          color=\"primary\"\n          [name]=\"iconRegisterConfirmName\"\n        ></ion-icon>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isRegisterSubmitted &&  (registerErrorControl.confirmPassword.value!=registerErrorControl .password.value)\"\n        >\n          {{'both password and confirm password should be equal' | translate}}\n        </div>\n\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"auth-btn\"> {{ \"sign-up\"|translate}} </span>\n        </ion-button>\n      </form>\n\n      <form\n        class=\"auth-form\"\n        *ngIf=\" authType=='signin'\"\n        (ngSubmit)=\"signIn()\"\n        [formGroup]=\"signinForm\"\n      >\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPhone ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPhone?inputFocusPhoneIcon:inputInFocusPhoneIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPhone(true)\"\n            (ionBlur)=\"focusPhone(false)\"\n            placeholder=\"{{'phone-number'|translate}}\"\n            type=\"tel\"\n            formControlName=\"phoneNumber\"\n          ></ion-input>\n       \n        </ion-item>\n       \n        <div\n          class=\"error-box\"\n          *ngIf=\" isSignInSubmitted && signinErrorControl.phoneNumber.errors?.required\"\n        >\n          {{'please enter phone number' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isSignInSubmitted && signinErrorControl.phoneNumber.errors?.minlength\"\n        >\n          {{'phone number should be 10 numbers' | translate}}\n        </div>\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPassword ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPassword?inputFocusPasswordIcon:inputInFocusPasswordIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPassword(true)\"\n            (ionBlur)=\"focusPassword(false)\"\n            placeholder=\"{{'password'|translate}}\"\n            [type]=\"inputLoginType\"\n            formControlName=\"password\"\n          ></ion-input>\n          <ion-icon (click)=\"showLoginPassword()\"\n          item-end\n          color=\"primary\"\n          [name]=\"iconLoginName\"\n        ></ion-icon>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isSignInSubmitted && signinErrorControl.password.errors?.required\"\n        >\n          {{'please enter password' | translate}}\n        </div>\n\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"auth-btn\"> {{\"login\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n    <div class=\"auth-page-rest\">\n      <div *ngIf=\" authType=='signin'\">\n        <p (click)=\"forgetPassword()\" class=\"forget-password\">\n          {{\"forget-password\"|translate}}\n        </p>\n        <p (click)=\"changAuthType('register')\" class=\"auth-text\">\n          {{\"register\"|translate}}\n        </p>\n      </div>\n\n      <div *ngIf=\" authType=='register'\">\n        <p (click)=\"changAuthType('signin')\" class=\"auth-text\">\n          {{\"have an account\"|translate}}\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 18066:
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/login-register/login-register.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content.bg-left {\n  --background: url('authBg-left.png') 0 0 /100% 100% no-repeat;\n}\n\nion-content.bg-right {\n  --background: url('authBg-right.png') 0 0 /100% 100%\n    no-repeat;\n}\n\nion-item {\n  --highlight-color-focused:var(--ion-color-primary);\n  --highlight-color-valid:var(--ion-color-primary);\n  --highlight-color-invalid:var(--ion-color-primary);\n}\n\nion-segment {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZEQUFBO0FBQ0Y7O0FBRUE7RUFDRTthQUFBO0FBRUY7O0FBR0E7RUFDRSxrREFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJnLWxlZnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXV0aEJnLWxlZnQucG5nKSAwIDAgLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi1jb250ZW50LmJnLXJpZ2h0IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F1dGhCZy1yaWdodC5wbmcpIDAgMCAvMTAwJSAxMDAlXG4gICAgbm8tcmVwZWF0O1xufVxuXG5cbmlvbi1pdGVte1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLXNlZ21lbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_login-register_login-register_module_ts.js.map