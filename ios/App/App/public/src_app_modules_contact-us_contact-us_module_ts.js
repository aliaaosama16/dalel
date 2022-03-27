"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_contact-us_contact-us_module_ts"],{

/***/ 59412:
/*!*****************************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 25578);




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ 46965:
/*!*********************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 59412);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 25578);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage]
    })
], ContactUsPageModule);



/***/ }),

/***/ 25578:
/*!*******************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact-us.page.html */ 88736);
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss */ 8837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);






let ContactUsPage = class ContactUsPage {
    constructor(formBuilder, util) {
        this.formBuilder = formBuilder;
        this.util = util;
        this.isContactSubmitted = false;
        this.inputFocusPerson = false;
        this.inputFocusPersonIcon = './../../../../assets/icon/person-active.svg';
        this.inputInFocusPersonIcon = './../../../../assets/icon/person-inactive.svg';
        this.inputFocusPhone = false;
        this.inputFocusPhoneIcon = './../../../../assets/icon/phone-active.svg';
        this.inputInFocusPhoneIcon = './../../../../assets/icon/phone-inactive.svg';
        this.inputFocusMessage = false;
        this.inputFocusMessageIcon = './../../../../assets/icon/message-active.svg';
        this.inputInFocusMessageIcon = './../../../../assets/icon/message-inactive.svg';
        this.platform = this.util.platform;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.contactForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
            phoneNumber: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^05/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10),
                    //10
                ],
            ],
            message: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
                ],
            ],
        });
    }
    focusPerson(status) { }
    focusPhone(status) { }
    focusMessage(status) { }
    get contactErrorControl() {
        return this.contactForm.controls;
    }
    sendMessage() { }
};
ContactUsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__.UtilitiesService }
];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact-us',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactUsPage);



/***/ }),

/***/ 88736:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/contact-us/contact-us.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'contact-us'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n<ion-content class=\"ion-padding\" >\n\n\n  <div class=\"auth-login-register\">\n    <ion-card class=\"auth-container ion-no-margin\">\n\n      <div class=\"logo\">\n        <img src=\"./../../../assets/images/about-image.svg\" />\n      </div>\n      <form\n        class=\"auth-form\"\n        (ngSubmit)=\"sendMessage()\"\n        [formGroup]=\"contactForm\"\n      >\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPerson ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPerson?inputFocusPersonIcon:inputInFocusPersonIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPerson(true)\"\n            (ionBlur)=\"focusPerson(false)\"\n            placeholder=\"{{'user-name'|translate}}\"\n            type=\"text\"\n            formControlName=\"userName\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isContactSubmitted && contactErrorControl.userName.errors?.required\"\n        >\n          {{'please enter user name' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isContactSubmitted && contactErrorControl.userName.errors?.minlength\"\n        >\n          {{'user name should be min 2 chars long' | translate}}\n        </div>\n\n        <ion-item lines=\"none\" [ngClass]=\"inputFocusPhone ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusPhone?inputFocusPhoneIcon:inputInFocusPhoneIcon}}\"\n          ></ion-icon>\n          <ion-input\n            (ionFocus)=\"focusPhone(true)\"\n            (ionBlur)=\"focusPhone(false)\"\n            placeholder=\"{{'phone-number'|translate}}\"\n            type=\"tel\"\n            formControlName=\"phoneNumber\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isContactSubmitted && contactErrorControl.phoneNumber.errors?.required\"\n        >\n          {{'please enter phone number' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isContactSubmitted && contactErrorControl.phoneNumber.errors?.minlength\"\n        >\n          {{'phone number should be 10 numbers' | translate}}\n        </div>\n\n        <ion-item lines=\"none\" class=\"message\" [ngClass]=\"inputFocusMessage ? 'focused' : 'unfocused' \">\n          <ion-icon\n            item-start\n            color=\"primary\"\n            src=\"{{inputFocusMessage?inputFocusMessageIcon:inputInFocusMessageIcon}}\"\n          ></ion-icon>\n          <ion-textarea rows=\"5\"\n            (ionFocus)=\"focusMessage(true)\"\n            (ionBlur)=\"focusMessage(false)\"\n            placeholder=\"{{'your message'|translate}}\"\n            type=\"text\"\n            formControlName=\"message\"\n          ></ion-textarea>\n        </ion-item>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isContactSubmitted && contactErrorControl.email.errors?.required \"\n        >\n          {{'please enter email' | translate}}\n        </div>\n\n        <div\n          class=\"error-box\"\n          *ngIf=\"isContactSubmitted && contactErrorControl.email.errors?.pattern \"\n        >\n          {{'please enter valid email' | translate}}\n        </div>\n\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"auth-btn\"> {{ \"send\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 8837:
/*!*********************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  text-align: center;\n  margin: 24px 0 20px 0;\n}\n\n.message ion-textarea {\n  --placeholder-color: var(--ion-color-secondary);\n  --color: var(--ion-color-primary);\n  margin: 0px 10px !important;\n}\n\n.message ion-icon {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUdFO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtBQURKIiwiZmlsZSI6ImNvbnRhY3QtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjRweCAwIDIwcHggMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBpb24tdGV4dGFyZWEge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_contact-us_contact-us_module_ts.js.map