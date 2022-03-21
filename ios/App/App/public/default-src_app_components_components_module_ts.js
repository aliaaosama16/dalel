"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 57693:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-button/custom-button.component */ 7001);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 37899);
/* harmony import */ var _custom_details_custom_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-details/custom-details.component */ 29379);
/* harmony import */ var _custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-card/custom-card.component */ 46463);









let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_0__.CustomButtonComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _custom_details_custom_details_component__WEBPACK_IMPORTED_MODULE_2__.CustomDetailsComponent,
            _custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_3__.CustomCardComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild(),
        ],
        exports: [
            _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_0__.CustomButtonComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _custom_details_custom_details_component__WEBPACK_IMPORTED_MODULE_2__.CustomDetailsComponent,
            _custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_3__.CustomCardComponent
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 7001:
/*!*********************************************************************!*\
  !*** ./src/app/components/custom-button/custom-button.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomButtonComponent": () => (/* binding */ CustomButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-button.component.html */ 31495);
/* harmony import */ var _custom_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-button.component.scss */ 11932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let CustomButtonComponent = class CustomButtonComponent {
    constructor() { }
    ngOnInit() { }
    openMenu() {
    }
};
CustomButtonComponent.ctorParameters = () => [];
CustomButtonComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CustomButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-custom-button',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_button_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_custom_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomButtonComponent);



/***/ }),

/***/ 46463:
/*!*****************************************************************!*\
  !*** ./src/app/components/custom-card/custom-card.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCardComponent": () => (/* binding */ CustomCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-card.component.html */ 74427);
/* harmony import */ var _custom_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-card.component.scss */ 99617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);






let CustomCardComponent = class CustomCardComponent {
    constructor(languageService, router) {
        this.languageService = languageService;
        this.router = router;
        this.navigateTo = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.currentlangauge = this.languageService.getLanguage();
    }
    navigate(route) {
        console.log('all object ' + JSON.stringify(this.itemDetails));
        console.log('current route is :  ' + route);
        this.navigateTo.emit(route);
        this.router.navigate([`/${route}/${this.itemDetails.catID}/${this.itemDetails.id}`]);
    }
};
CustomCardComponent.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CustomCardComponent.propDecorators = {
    itemDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    forwardRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    navigateTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CustomCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-custom-card',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_custom_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomCardComponent);



/***/ }),

/***/ 29379:
/*!***********************************************************************!*\
  !*** ./src/app/components/custom-details/custom-details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomDetailsComponent": () => (/* binding */ CustomDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-details.component.html */ 28372);
/* harmony import */ var _custom_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-details.component.scss */ 99075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);





let CustomDetailsComponent = class CustomDetailsComponent {
    constructor(langaugeservice) {
        this.langaugeservice = langaugeservice;
    }
    ngOnInit() {
        console.log('is detailed ' + this.isDetailed);
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(JSON.stringify(this.ItemDetails));
    }
};
CustomDetailsComponent.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService }
];
CustomDetailsComponent.propDecorators = {
    ItemDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isDetailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CustomDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-custom-details',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_custom_details_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomDetailsComponent);



/***/ }),

/***/ 37899:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 20669);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 70228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);






let HeaderComponent = class HeaderComponent {
    constructor(menuCtrl, router) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.navigateTo = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    openMenu() {
        this.menuCtrl.open();
    }
    navigate(route) {
        console.log('current route is :  ' + route);
        this.navigateTo.emit(route);
        this.router.navigateByUrl(route);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isEditable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isMain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    forwardRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    backwardRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    navigateTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 31495:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/custom-button/custom-button.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-button expand=\"block\" routerLink=\"/tabs/main/reservation\">\n    <span class=\"auth-btn fn-16 white-color dalel-Bold\"> {{ \"confirm reservation\"|translate}} </span>\n  </ion-button>");

/***/ }),

/***/ 74427:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/custom-card/custom-card.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"margin-bottom\" (click)=\"navigate(forwardRoute)\">\n  <div class=\"container\">\n    <img [src]=\"itemDetails.image\" />\n    <div\n      class=\"title\"\n      [ngStyle]=\"currentlangauge == 'ar' ? { right: '13px' } : { left: '13px' }\"\n    >\n      <p class=\"fn-14 dalel-Bold white-color\">{{ itemDetails.name }}</p>\n    </div>\n    <div\n      class=\"location\"\n      [ngStyle]=\"currentlangauge == 'ar' ? { right: '10px' } : { left: '10px' }\"\n    >\n      <ion-icon name=\"location-sharp\" color=\"primary\"></ion-icon>\n    </div>\n    <div\n      class=\"location-address\"\n      [ngStyle]=\"currentlangauge == 'ar' ? { right: '30px' } : { left: '30px' }\"\n    >\n      <p class=\"fn-14 dalel-Regular white-color\">{{ itemDetails.city }}</p>\n    </div>\n    <div\n      class=\"address-detail\"\n      [ngStyle]=\"currentlangauge == 'ar' ? { left: '10px' } : { right: '10px' }\"\n    >\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"white\"></ion-icon>\n    </div>\n  </div>\n</ion-card>\n");

/***/ }),

/***/ 28372:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/custom-details/custom-details.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"item-details\" >\n  <div class=\"name-rating-container\">\n    <div class=\"name\">\n      <h5 class=\"fn-16 dalel-Bold\"> {{ ItemDetails.name|translate }}</h5>\n    </div>\n\n    <div class=\"rating\">\n      <div class=\"rating-address-container\">\n        <div class=\"rating-container\">\n          <ion-icon color=\"secondary\" slot=\"start\" name=\"star\"></ion-icon>\n          <span class=\"white-color fn-12 dalel-Regular\">{{\n            ItemDetails.rating\n          }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"address-price-container\">\n    <ion-item lines=\"none\" class=\"address\" [ngClass]=\"isDetailed ? 'details' : ''\">\n      <ion-label>\n        <p class=\"fn-14 dalel-Regular dark-black-color\">\n           {{ ItemDetails.city }} - {{ ItemDetails.address }}\n        </p>\n      </ion-label>\n      <ion-icon slot=\"start\" name=\"location-sharp\" color=\"primary\"></ion-icon>\n    </ion-item>\n\n    <div class=\"price\">\n      <p\n        class=\"fn-10 dalel-Bold primary-color\"\n        [ngClass]=\"currentlangauge == 'ar' ? 'float-left' : 'float-right'\"\n      >\n         {{ ItemDetails.price }} {{ ItemDetails.perUnit |translate }}/{{\n          ItemDetails.unit|translate\n        }}\n      </p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 20669:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/header/header.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n\n\n\n  <ion-toolbar class=\"my-toolbar\">\n    <ion-buttons slot=\"start\" class=\"menu-icon\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon src=\"./../../../assets/icon/menu.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title\n      class=\"ion-text-start primary-color dalel-Bold fn-18 custom-title\"\n      >{{ title | translate }}</ion-title\n    >\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"isEditable\" (click)=\"navigate(forwardRoute)\">\n        <ion-icon\n          slot=\"icon-only\"\n          src=\"./../../../assets/icon/edit.svg\"\n        ></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!isMain\" (click)=\"navigate(backwardRoute)\">\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"arrow-forward-outline\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <section >\n\n \n\n  <div class=\"curve\"></div>\n  <div style=\"display: flex;  align-items: center;\">\n    <div style=\"flex-direction: row;\">\n      <ion-button  (click)=\"openMenu()\">\n        <ion-icon  src=\"./../../../assets/icon/menu.svg\"></ion-icon>\n      </ion-button>\n    </div>\n    <div style=\"flex-direction: row;\">\n      <ion-title class=\"ion-text-start primary-color dalel-Bold fn-18 custom-title\">{{ title | translate }}</ion-title>\n\n    </div>\n  </div>\n</section> -->\n");

/***/ }),

/***/ 11932:
/*!***********************************************************************!*\
  !*** ./src/app/components/custom-button/custom-button.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".btn-custom {\n  margin: 0 5%;\n  --color: var(--ion-color-white);\n  font-size: 16;\n  font-family: \"Cairo-Bold\";\n  height: 48px;\n}\n\nion-button::part(native) {\n  height: 50px !important;\n  background-image: linear-gradient(to left, var(--ion-color-primary), var(--ion-color-secondary));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtFQUNBLGdHQUFBO0FBQ0oiLCJmaWxlIjoiY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY3VzdG9tIHtcbiAgICBtYXJnaW46IDAgNSU7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDE2O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvLUJvbGRcIjtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b246OnBhcnQobmF0aXZlKSB7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gbGVmdCxcbiAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgICAgIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpXG4gICAgKTtcbiAgfVxuICAiXX0= */";

/***/ }),

/***/ 99617:
/*!*******************************************************************!*\
  !*** ./src/app/components/custom-card/custom-card.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin: 0 0 16px 0 !important;\n}\n\n.container {\n  position: relative;\n  height: 140px;\n}\n\n.container img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  object-position: initial;\n}\n\n.container .title {\n  position: absolute;\n  bottom: 30px;\n}\n\n.container .title p {\n  margin: 0px;\n}\n\n.container .location {\n  position: absolute;\n  bottom: 5px;\n}\n\n.container .location ion-icon {\n  font-size: 20px;\n}\n\n.container .location-address {\n  position: absolute;\n  bottom: 9px;\n}\n\n.container .location-address p {\n  margin: 0px;\n}\n\n.container .address-detail {\n  position: absolute;\n  bottom: 5px;\n}\n\n.container .address-detail ion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUVGOztBQURFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBR0o7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNFLFdBQUE7QUFHTjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNJO0VBQ0UsZUFBQTtBQUNOOztBQUdFO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0FBRko7O0FBR0k7RUFDRSxXQUFBO0FBRE47O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFISjs7QUFJSTtFQUNFLGVBQUE7QUFGTiIsImZpbGUiOiJjdXN0b20tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICBtYXJnaW46IDAgMCAxNnB4IDAgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTQwcHg7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGluaXRpYWw7XG4gIH1cblxuICAudGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24tYWRkcmVzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgYm90dG9tOiA5cHg7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cblxuICAuYWRkcmVzcy1kZXRhaWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 99075:
/*!*************************************************************************!*\
  !*** ./src/app/components/custom-details/custom-details.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".item-details .name-rating-container {\n  display: flex;\n  justify-content: space-between;\n}\n.item-details .name-rating-container .name {\n  flex-direction: row;\n}\n.item-details .name-rating-container .name h5 {\n  margin-top: 6px !important;\n}\n.item-details .name-rating-container .rating .rating-address-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-details .name-rating-container .rating .rating-address-container div {\n  flex-direction: row;\n  display: flex;\n}\n.item-details .name-rating-container .rating .rating-address-container .address-container ion-icon {\n  font-size: 18px;\n  height: 20px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container {\n  background-color: var(--ion-color-primary);\n  border-radius: 5px;\n  padding: 12px 6px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container ion-icon {\n  font-size: 12px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container span {\n  margin: -6px 4px;\n}\n.item-details .address-price-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-details .address-price-container .address,\n.item-details .address-price-container .price {\n  flex-direction: row;\n}\n.item-details .address-price-container .address p,\n.item-details .address-price-container .price p {\n  display: inline-block;\n  margin: 0px;\n  white-space: nowrap;\n}\n.item-details .address-price-container .address ion-icon,\n.item-details .address-price-container .price ion-icon {\n  margin: 0px;\n}\n.item-details .address-price-container .address > ion-label {\n  margin-bottom: 6px;\n}\n.item-details .address-price-container ion-item {\n  --background: var(--ion-color-white);\n}\n.item-details .address-price-container ion-item::part(native) {\n  text-align: center;\n  padding-inline-end: 0px !important;\n  padding-inline-start: 0px !important;\n}\n.item-details .address-price-container ion-item::part(native) .item-inner {\n  --inner-border-width: 0px;\n}\n.item-details .address-price-container .details {\n  --background: var(--ion-color-orange-light) !important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQUo7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFBTTtFQUNFLDBCQUFBO0FBRVI7QUFFTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFDUTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQUNWO0FBR1U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQURaO0FBS1E7RUFRRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFWVjtBQUNVO0VBQ0UsZUFBQTtBQUNaO0FBQ1U7RUFDRSxnQkFBQTtBQUNaO0FBVUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVJKO0FBU0k7O0VBRUUsbUJBQUE7QUFQTjtBQVFNOztFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTFI7QUFPTTs7RUFDRSxXQUFBO0FBSlI7QUFRSTtFQUNFLGtCQUFBO0FBTk47QUFTSTtFQUNFLG9DQUFBO0FBUE47QUFTSTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtBQVBOO0FBUU07RUFDRSx5QkFBQTtBQU5SO0FBVUk7RUFDRSx1REFBQTtBQVJOIiwiZmlsZSI6ImN1c3RvbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tZGV0YWlscyB7XG4gIC5uYW1lLXJhdGluZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5uYW1lIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBoNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAucmF0aW5nIHtcbiAgICAgIC5yYXRpbmctYWRkcmVzcy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZHJlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJhdGluZy1jb250YWluZXIge1xuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IC02cHggNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWRkcmVzcy1wcmljZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmFkZHJlc3MsXG4gICAgLnByaWNlIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFkZHJlc3MgPiBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICB9XG4gICAgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW9yYW5nZS1saWdodCkgIWltcG9ydGFudCA7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 70228:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background-color: #fbeee3;\n  --min-height: 120px !important;\n}\n\nion-toolbar {\n  --background: url('wave30.jpg') no-repeat 100% 100% !important;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  --min-height: 139px !important;\n  --padding-end: 0px !important;\n  --padding-start: 0px !important;\n  --opacity: 1 !important;\n}\n\nion-toolbar .toolbar-container {\n  padding-inline-start: 0px !important;\n  padding-inline-end: 0px !important;\n}\n\nion-toolbar .custom-title {\n  padding: 0 47px !important;\n  margin-top: 4px !important;\n}\n\nion-toolbar .menu-icon ion-button::part(native) {\n  width: 40px !important;\n  height: 40px !important;\n}\n\nion-toolbar .menu-icon ion-icon {\n  font-size: 40px !important;\n}\n\nsection {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100px;\n  background: #fbeee3;\n}\n\n.curve {\n  position: absolute;\n  height: 140px;\n  width: 100%;\n  bottom: 0;\n  text-align: center;\n}\n\n.curve::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 55% 50%;\n  width: 65%;\n  height: 107%;\n  transform: translate(-66%, 75%);\n  background-color: white;\n}\n\n.curve::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 100% 50%;\n  width: 78%;\n  height: 100%;\n  background-color: #fbeee3;\n  transform: translate(30%, 12%);\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFHQTtFQUNBLDhEQUFBO0VBRUUsc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJRTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7QUFGSjs7QUFJRTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUFGSjs7QUFNSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFKTjs7QUFNSTtFQUNFLDBCQUFBO0FBSk47O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBTkYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1oZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmVlZTM7XG4gIC0tbWluLWhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyIHtcbi0tYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dhdmUzMC5qcGdcIikgbm8tcmVwZWF0IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xuICAvLy0tYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5zdmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLS1taW4taGVpZ2h0OiAxMzlweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIFxuXG4gIC50b29sYmFyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmN1c3RvbS10aXRsZSB7XG4gICAgcGFkZGluZzogMCA0N3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWVudS1pY29uIHtcbiAgICBpb24tYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBcbiAgYmFja2dyb3VuZDogICNmYmVlZTM7XG59XG5cbi5jdXJ2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3VydmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDU1JSA1MCU7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBoZWlnaHQ6IDEwNyU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTY2JSwgNzUlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1cnZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgNTAlO1xuICB3aWR0aDogNzglO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmVlZTM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSwgMTIlKTtcbiAgei1pbmRleDogMTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map