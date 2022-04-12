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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 37899);
/* harmony import */ var _custom_details_custom_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-details/custom-details.component */ 29379);
/* harmony import */ var _custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-card/custom-card.component */ 46463);








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _custom_details_custom_details_component__WEBPACK_IMPORTED_MODULE_1__.CustomDetailsComponent,
            _custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_2__.CustomCardComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild(),
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _custom_details_custom_details_component__WEBPACK_IMPORTED_MODULE_1__.CustomDetailsComponent,
            _custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_2__.CustomCardComponent
        ]
    })
], ComponentsModule);



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
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-card.component.html */ 74427);
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
        console.log('custom card : ' + this.cardBrightness);
        this.cardBrightness = `brightness(${this.cardBrightness})`;
    }
    navigate(route) {
        this.router.navigateByUrl(`/${route}/categories/${this.itemDetails.section_id}/${this.itemDetails.id}`);
    }
};
CustomCardComponent.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CustomCardComponent.propDecorators = {
    cardBrightness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    itemDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    forwardRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    navigateTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CustomCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-custom-card',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-details.component.html */ 28372);
/* harmony import */ var _custom_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-details.component.scss */ 99075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);





let CustomDetailsComponent = class CustomDetailsComponent {
    constructor(langaugeservice) {
        this.langaugeservice = langaugeservice;
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log('CustomDetailsComponent : ' + JSON.stringify(this.OrderDetails));
    }
};
CustomDetailsComponent.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService }
];
CustomDetailsComponent.propDecorators = {
    ItemDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    OrderDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isDetailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CustomDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-custom-details',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 20669);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 70228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);







let HeaderComponent = class HeaderComponent {
    constructor(menuCtrl, language, router) {
        this.menuCtrl = menuCtrl;
        this.language = language;
        this.router = router;
        this.navigateTo = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.currentLanguage = this.language.getLanguage();
    }
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isEditable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isMain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    forwardRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    backwardRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    navigateTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"margin-bottom\" (click)=\"navigate(forwardRoute)\">\n  <div class=\"container\">\n    <img [src]=\"itemDetails.first_image\" [style.filter]=\"cardBrightness\" />\n    <div class=\"title\" [ngClass]=\"currentlangauge == 'ar' ? 'title-ar':'title-en'\">\n      <p class=\"fn-14 dalel-Bold white-color\">{{ itemDetails.title }}</p>\n    </div>\n    <div class=\"location\" [ngClass]=\"currentlangauge == 'ar' ? 'location-ar':'location-en'    \">\n      <ion-icon name=\"location-sharp\" color=\"primary\"></ion-icon>\n    </div>\n    <div class=\"location-address\" [ngClass]=\"currentlangauge == 'ar'? 'location-address-ar':'location-address-en'\">\n      <p class=\"fn-14 dalel-Regular white-color\">{{ itemDetails.city_title }}</p>\n    </div>\n    <div class=\"address-detail\" [ngClass]=\"currentlangauge == 'ar'? 'address-detail-ar':'address-detail-en'\">\n      <ion-icon name=\"arrow-forward-circle-outline\" color=\"white\"></ion-icon>\n    </div>\n  </div>\n</ion-card>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"item-details\">\n  <div class=\"name-rating-container\">\n    <div class=\"name\">\n      <h5 class=\"fn-16 dalel-Bold\">\n         {{ ItemDetails?.title || OrderDetails?.department_title }}\n      </h5>\n    </div>\n\n    <div class=\"rating\">\n      <div class=\"rating-address-container\">\n        <div class=\"rating-container\">\n          <ion-icon color=\"secondary\" slot=\"start\" name=\"star\"></ion-icon>\n          <span class=\"white-color fn-12 dalel-Regular\">{{\n            ItemDetails?.rate || OrderDetails?.department_rate\n          }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"address-price-container\">\n    <ion-item\n      lines=\"none\"\n      class=\"address\"\n      [ngClass]=\"isDetailed ? 'details' : ''\"\n    >\n      <ion-label>\n        <p class=\"fn-14 dalel-Regular dark-black-color\">\n           {{\n            ItemDetails?.city_title || OrderDetails?.department_city_title\n          }}\n          -\n          {{\n            ItemDetails?.neighborhood_title ||\n              OrderDetails?.department_neighborhood_title\n          }}\n        </p>\n      </ion-label>\n      <ion-icon slot=\"start\" name=\"location-sharp\" color=\"primary\"></ion-icon>\n    </ion-item>\n\n    <div class=\"price\">\n      <p\n        class=\"fn-10 dalel-Bold primary-color\"\n        [ngClass]=\"currentlangauge == 'ar' ? 'float-left' : 'float-right'\"\n      >\n         {{ ItemDetails?.price || OrderDetails?.department_price }}\n        {{ \"currency\" | translate }}/{{ \"one night\" | translate }}\n      </p>\n    </div>\n  </div>\n</div>\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"my-toolbar\">\n    <ion-buttons slot=\"start\" class=\"menu-icon\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon [ngClass]=\"currentLanguage=='ar'? '':'direction-en'\" src=\"./../../../assets/icon/menu.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title appHighLight\n      class=\"ion-text-start primary-color dalel-Bold fn-18 custom-title\"\n      >{{ title | translate }}</ion-title\n    >\n    <ion-buttons slot=\"end\" class=\"arrow-edit-btns\">\n      <ion-button  *ngIf=\"isEditable\" (click)=\"navigate(forwardRoute)\">\n        <ion-icon\n          slot=\"icon-only\"\n          src=\"./../../../assets/icon/edit.svg\"\n        ></ion-icon>\n      </ion-button>\n      <ion-button  *ngIf=\"!isMain\" (click)=\"navigate(backwardRoute)\">\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"arrow-forward-outline\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <section >\n\n \n\n  <div class=\"curve\"></div>\n  <div style=\"display: flex;  align-items: center;\">\n    <div style=\"flex-direction: row;\">\n      <ion-button  (click)=\"openMenu()\">\n        <ion-icon  src=\"./../../../assets/icon/menu.svg\"></ion-icon>\n      </ion-button>\n    </div>\n    <div style=\"flex-direction: row;\">\n      <ion-title class=\"ion-text-start primary-color dalel-Bold fn-18 custom-title\">{{ title | translate }}</ion-title>\n\n    </div>\n  </div>\n</section> -->\n");

/***/ }),

/***/ 99617:
/*!*******************************************************************!*\
  !*** ./src/app/components/custom-card/custom-card.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin: 0 0 16px 0 !important;\n}\n\n.container {\n  position: relative;\n  height: 140px;\n}\n\n.container img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  object-position: initial;\n  border-radius: 5px;\n}\n\n.container .title {\n  position: absolute;\n  bottom: 30px;\n}\n\n.container .title p {\n  margin: 0px;\n}\n\n.container .location {\n  position: absolute;\n  bottom: 5px;\n}\n\n.container .location ion-icon {\n  font-size: 20px;\n}\n\n.container .location-address {\n  position: absolute;\n  bottom: 9px;\n}\n\n.container .location-address p {\n  margin: 0px;\n}\n\n.container .address-detail {\n  position: absolute;\n  bottom: 5px;\n}\n\n.container .address-detail ion-icon {\n  font-size: 25px;\n}\n\n.container .title-ar {\n  right: 13px;\n}\n\n.container .title-en {\n  left: 13px;\n}\n\n.container .location-ar {\n  right: 10px;\n}\n\n.container .location-en {\n  left: 10px;\n}\n\n.container .location-address-ar {\n  right: 30px;\n}\n\n.container .location-address-en {\n  left: 30px;\n}\n\n.container .address-detail-ar {\n  left: 10px;\n}\n\n.container .address-detail-en {\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUVGOztBQURFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBRUEsa0JBQUE7QUFFSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUVJO0VBQ0UsV0FBQTtBQUFOOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUk7RUFDRSxlQUFBO0FBRk47O0FBTUU7RUFDRSxrQkFBQTtFQUVBLFdBQUE7QUFMSjs7QUFNSTtFQUNFLFdBQUE7QUFKTjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQU5KOztBQU9JO0VBQ0UsZUFBQTtBQUxOOztBQVNFO0VBQ0UsV0FBQTtBQVBKOztBQVVFO0VBQ0UsVUFBQTtBQVJKOztBQVdFO0VBQ0UsV0FBQTtBQVRKOztBQVlFO0VBQ0UsVUFBQTtBQVZKOztBQWFFO0VBQ0UsV0FBQTtBQVhKOztBQWNFO0VBQ0UsVUFBQTtBQVpKOztBQWVFO0VBQ0UsVUFBQTtBQWJKOztBQWdCRTtFQUNFLFdBQUE7QUFkSiIsImZpbGUiOiJjdXN0b20tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIDAgMTZweCAwICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBpbml0aWFsO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vb3BhY2l0eTogMC42MjtcbiAgICAvL2ZpbHRlcjogYnJpZ2h0bmVzcygwLjYyKTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5sb2NhdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5sb2NhdGlvbi1hZGRyZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBib3R0b206IDlweDtcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5hZGRyZXNzLWRldGFpbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUtYXIge1xuICAgIHJpZ2h0OiAxM3B4O1xuICB9XG5cbiAgLnRpdGxlLWVuIHtcbiAgICBsZWZ0OiAxM3B4O1xuICB9XG5cbiAgLmxvY2F0aW9uLWFyIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxuXG4gIC5sb2NhdGlvbi1lbiB7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuXG4gIC5sb2NhdGlvbi1hZGRyZXNzLWFyIHtcbiAgICByaWdodDogMzBweDtcbiAgfVxuXG4gIC5sb2NhdGlvbi1hZGRyZXNzLWVuIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG5cbiAgLmFkZHJlc3MtZGV0YWlsLWFyIHtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmFkZHJlc3MtZGV0YWlsLWVuIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuIl19 */";

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

module.exports = "ion-header {\n  --background: none !important;\n  background: var(--ion-color-orange-light);\n  min-height: 60px;\n  margin-bottom: 50px;\n  position: relative;\n}\nion-header::before {\n  content: \"\";\n  position: absolute;\n  bottom: -30px;\n  background: url('wave00.png');\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100px;\n}\nion-toolbar {\n  --background: none !important;\n}\nion-toolbar .toolbar-container {\n  padding-inline-start: 0px !important;\n  padding-inline-end: 0px !important;\n}\nion-toolbar .custom-title {\n  padding: 0px !important;\n  margin-top: 18px !important;\n}\nion-toolbar .menu-icon ion-button::part(native) {\n  width: 50px !important;\n  height: 50px !important;\n}\nion-toolbar .menu-icon ion-icon {\n  font-size: 40px !important;\n}\nion-toolbar .menu-icon .direction-en {\n  transform: rotateY(180deg);\n}\nion-toolbar .arrow-edit-btns ion-button::part(native) {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDRSw2QkFBQTtBQUNGO0FBQUU7RUFDRSxvQ0FBQTtFQUNBLGtDQUFBO0FBRUo7QUFBRTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUVJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUFOO0FBRUk7RUFDRSwwQkFBQTtBQUFOO0FBR0k7RUFDRSwwQkFBQTtBQUROO0FBS0k7RUFDRSxnQkFBQTtBQUhOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW9yYW5nZS1saWdodCk7XG5cbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTMwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dhdmUwMC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgLnRvb2xiYXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY3VzdG9tLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgLy8wIDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWVudS1pY29uIHtcbiAgICBpb24tYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZGlyZWN0aW9uLWVue1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuICB9XG4gIC5hcnJvdy1lZGl0LWJ0bnMge1xuICAgIGlvbi1idXR0b246OnBhcnQobmF0aXZlKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map