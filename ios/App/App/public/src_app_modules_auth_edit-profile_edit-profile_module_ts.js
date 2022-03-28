"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_edit-profile_edit-profile_module_ts"],{

/***/ 6585:
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/edit-profile/edit-profile-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 67306);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 97119:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/edit-profile/edit-profile.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 6585);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 67306);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 67306:
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/edit-profile/edit-profile.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-profile.page.html */ 8413);
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss */ 61501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);









let EditProfilePage = class EditProfilePage {
    constructor(menuCtrl, formBuilder, util, auth, language) {
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.util = util;
        this.auth = auth;
        this.language = language;
        this.getData = false;
        this.isProfileSubmitted = false;
        this.inputFocusPerson = false;
        this.inputFocusPersonIcon = './../../../../assets/icon/person-active.svg';
        this.inputInFocusPersonIcon = './../../../../assets/icon/person-inactive.svg';
        this.inputFocusEmail = false;
        this.inputFocusEmailIcon = './../../../../assets/icon/email-active.svg';
        this.inputInFocusEmailIcon = './../../../../assets/icon/email-inactive.svg';
        this.inputFocusPhone = false;
        this.inputFocusPhoneIcon = './../../../../assets/icon/phone-active.svg';
        this.inputInFocusPhoneIcon = './../../../../assets/icon/phone-inactive.svg';
        this.auth.getUserIDObservable().subscribe((val) => {
            this.userData = {
                lang: this.language.getLanguage(),
                user_id: val,
            };
        });
        this.util.showLoadingSpinner().then((__) => {
            this.auth.userData(this.userData).subscribe((data) => {
                this.userResponse = data;
                console.log('user all data :' + JSON.stringify(this.userResponse));
                this.buildForm();
                this.util.dismissLoading();
                this.getData = true;
            }, (err) => {
                this.util.dismissLoading();
                this.getData = false;
            });
        });
    }
    ngOnInit() { }
    openMenu() {
        this.menuCtrl.open();
    }
    get profileErrorControl() {
        return this.profileForm.controls;
    }
    buildForm() {
        this.profileForm = this.formBuilder.group({
            userName: [
                this.userResponse.data.first_name,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)],
            ],
            phoneNumber: [
                this.userResponse.data.phone,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^05/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10),
                    //10
                ],
            ],
            email: [
                this.userResponse.data.email,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
                ],
            ],
        });
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
    editProfile() {
        this.auth.getUserIDObservable().subscribe((val) => {
            this.updateUserData = {
                lang: this.language.getLanguage(),
                user_id: val,
                first_name: this.profileForm.value.userName,
                email: this.profileForm.value.email,
                phone: this.profileForm.value.phoneNumber
            };
        });
        console.log('edited data is ' + JSON.stringify(this.profileForm.value));
        this.util.showLoadingSpinner().then((__) => {
            this.auth.updateUserData(this.updateUserData).subscribe((data) => {
                this.userResponse = data;
                console.log('user all data :' + JSON.stringify(this.userResponse));
                if (data.key == 1) {
                    this.util.showMessage(data.msg);
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService }
];
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-profile',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProfilePage);



/***/ }),

/***/ 8413:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/edit-profile/edit-profile.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'edit profile'\"\n  [isEditable]=\"false\"\n  [isMain]=\"false\"\n  [backwardRoute]=\"'/tabs/profile'\"\n></app-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"auth-login-register\" *ngIf=\"getData\">\n    <ion-card class=\"auth-container\">\n      <form\n        class=\"auth-form\"\n        (ngSubmit)=\"editProfile()\"\n        [formGroup]=\"profileForm\"\n      >\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPerson ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPerson?inputFocusPersonIcon:inputInFocusPersonIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPerson(true)\"\n            (ionBlur)=\"focusPerson(false)\"\n            placeholder=\"{{'user-name'|translate}}\"\n            type=\"text\"\n            formControlName=\"userName\"\n            [value]=\"userResponse.data.first_name\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isProfileSubmitted && profileErrorControl.userName.errors?.required\"\n        >\n          {{'please enter user name' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isProfileSubmitted && profileErrorControl.userName.errors?.minlength\"\n        >\n          {{'user name should be min 2 chars long' | translate}}\n        </div>\n\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPhone ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPhone?inputFocusPhoneIcon:inputInFocusPhoneIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPhone(true)\"\n            (ionBlur)=\"focusPhone(false)\"\n            placeholder=\"{{'phone-number'|translate}}\"\n            type=\"tel\"\n            formControlName=\"phoneNumber\"\n            [value]=\"userResponse.data.phone\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isProfileSubmitted && profileErrorControl .phoneNumber.errors?.required\"\n        >\n          {{'please enter phone number' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isProfileSubmitted && profileErrorControl.phoneNumber.errors?.minlength\"\n        >\n          {{'phone number should be 10 numbers' | translate}}\n        </div>\n\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusEmail ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusEmail?inputFocusEmailIcon:inputInFocusEmailIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusEmail(true)\"\n            (ionBlur)=\"focusEmail(false)\"\n            placeholder=\"{{'email-address'|translate}}\"\n            type=\"email\"\n            formControlName=\"email\"\n            [value]=\"userResponse.data.email\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isProfileSubmitted && profileErrorControl.email.errors?.required \"\n        >\n          {{'please enter email' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isProfileSubmitted && profileErrorControl.email.errors?.pattern \"\n        >\n          {{'please enter valid email' | translate}}\n        </div>\n\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"auth-btn\"> {{ \"save\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 61501:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/edit-profile/edit-profile.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --border-color: var(--ion-color-secondary);\n  --border-radius: 10px;\n  --border-width: 1px;\n  margin-bottom: 16px;\n  --highlight-color-focused:var(--ion-color-primary);\n  --highlight-color-valid:var(--ion-color-primary);\n  --highlight-color-invalid:var(--ion-color-primary);\n}\nion-item ion-icon {\n  width: 20px !important;\n  height: 20px !important;\n}\nion-item ion-input {\n  --color: var(--ion-color-secondary);\n  font-size: 14px;\n  margin: 0 5px;\n  --ion-font-family: \"Cairo-Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUlBLGtEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtBQUZKO0FBS0k7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBSE47QUFLSTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUhOIiwiZmlsZSI6ImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblxuXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgIC0taW9uLWZvbnQtZmFtaWx5OiBcIkNhaXJvLVJlZ3VsYXJcIjtcbiAgICB9XG4gIH1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_edit-profile_edit-profile_module_ts.js.map