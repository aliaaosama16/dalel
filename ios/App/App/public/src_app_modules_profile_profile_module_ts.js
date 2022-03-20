"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_profile_profile_module_ts"],{

/***/ 58986:
/*!***********************************************************!*\
  !*** ./src/app/modules/profile/profile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 83272);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 77010:
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 58986);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 83272);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 83272:
/*!*************************************************!*\
  !*** ./src/app/modules/profile/profile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 73400);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 37444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);






let ProfilePage = class ProfilePage {
    constructor(menuCtrl, langaugeservice) {
        this.menuCtrl = menuCtrl;
        this.langaugeservice = langaugeservice;
        this.userData = {
            name: 'aliaa',
            phone: '01077262662',
            email: 'engaliaa@gmail.com'
        };
    }
    ngOnInit() { }
    openMenu() {
        this.menuCtrl.open();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 73400:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/profile/profile.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"'profile'\" [backwardRoute]=\"'/tabs/main'\" [forwardRoute]=\"'/tabs/profile/edit-profile'\"\n  [isEditable]=\"true\" [isMain]=\"false\"></app-header>\n\n<ion-content class=\"ion-padding\">\n\n\n  <div class=\"profile-card-wrapper\">\n\n    <ion-card class=\"ion-no-margin ion-padding\">\n\n      <div class=\"img-wrapper\">\n        <img src=\"./../../../assets/icon/person-inactive.svg\" />\n      </div>\n      <div class=\"ion-text-center\">\n        <h4 class=\"dark-black-color fn-16 dalel-Bold name\">{{userData.name}}</h4>\n      </div>\n      <ion-item lines=\"none\">\n        <ion-icon item-start color=\"primary\" src=\"'./../../../../assets/icon/person-inactive.svg\"></ion-icon>\n        <ion-input readonly=\"true\" [value]=\"userData.name\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon item-start color=\"primary\" src=\"'./../../../../assets/icon/phone-inactive.svg\"></ion-icon>\n        <ion-input readonly=\"true\" [value]=\"userData.phone\" type=\"nummber\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon item-start color=\"primary\" src=\"'./../../../../assets/icon/email-inactive.svg\"></ion-icon>\n        <ion-input readonly=\"true\" [value]=\"userData.email\" type=\"email\"></ion-input>\n      </ion-item>\n    </ion-card>\n\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ 37444:
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".profile-card-wrapper ion-card {\n  overflow: visible;\n  position: relative;\n  padding-top: 60px;\n  margin-top: 25px;\n}\n.profile-card-wrapper ion-card .img-wrapper {\n  position: absolute;\n  left: 50%;\n  top: -40px;\n  transform: translateX(-50%);\n}\n.profile-card-wrapper ion-card .img-wrapper img {\n  border-radius: 10px;\n  width: 80px;\n  height: 80px;\n}\n.profile-card-wrapper ion-card .name {\n  margin-bottom: 24px;\n  margin-top: 0px;\n}\n.profile-card-wrapper ion-item {\n  --border-color: var(--ion-color-secondary);\n  --border-radius: 10px;\n  --border-width: 1px;\n  margin-bottom: 16px;\n}\n.profile-card-wrapper ion-item ion-icon {\n  width: 20px !important;\n  height: 20px !important;\n}\n.profile-card-wrapper ion-item ion-input {\n  --color: var(--ion-color-secondary);\n  font-size: 14px;\n  margin: 0 5px;\n  --ion-font-family: \"Cairo-Regular\";\n}\n.profile-card-wrapper .picture-wrapper {\n  width: 80px;\n  margin: auto;\n}\n.profile-card-wrapper .picture-wrapper ion-icon {\n  font-size: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBQU47QUFDTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDUjtBQUdJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBRE47QUFNRTtFQUNFLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFLSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFITjtBQUtJO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBSE47QUFPRTtFQUNFLFdBQUE7RUFJQSxZQUFBO0FBUko7QUFZSTtFQUNFLGVBQUE7QUFWTiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNhcmQtd3JhcHBlciB7XG4gIGlvbi1jYXJkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcblxuICAgIC5pbWctd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IC00MHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmFtZXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICB9XG4gIFxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBpb24taWNvbiB7XG4gICAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAtLWlvbi1mb250LWZhbWlseTogXCJDYWlyby1SZWd1bGFyXCI7XG4gICAgfVxuICB9XG5cbiAgLnBpY3R1cmUtd3JhcHBlciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgLy9ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLy9oZWlnaHQ6IDgwcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8vIHBhZGRpbmc6IDE2cHg7XG4gICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_profile_profile_module_ts.js.map