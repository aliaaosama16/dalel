"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_policy_policy_module_ts"],{

/***/ 3417:
/*!*********************************************************!*\
  !*** ./src/app/modules/policy/policy-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyPageRoutingModule": () => (/* binding */ PolicyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policy.page */ 3933);




const routes = [
    {
        path: '',
        component: _policy_page__WEBPACK_IMPORTED_MODULE_0__.PolicyPage
    }
];
let PolicyPageRoutingModule = class PolicyPageRoutingModule {
};
PolicyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PolicyPageRoutingModule);



/***/ }),

/***/ 93589:
/*!*************************************************!*\
  !*** ./src/app/modules/policy/policy.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyPageModule": () => (/* binding */ PolicyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policy-routing.module */ 3417);
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policy.page */ 3933);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let PolicyPageModule = class PolicyPageModule {
};
PolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolicyPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_1__.PolicyPage]
    })
], PolicyPageModule);



/***/ }),

/***/ 3933:
/*!***********************************************!*\
  !*** ./src/app/modules/policy/policy.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyPage": () => (/* binding */ PolicyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_policy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./policy.page.html */ 18072);
/* harmony import */ var _policy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policy.page.scss */ 38033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let PolicyPage = class PolicyPage {
    constructor() { }
    ngOnInit() {
    }
};
PolicyPage.ctorParameters = () => [];
PolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-policy',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_policy_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PolicyPage);



/***/ }),

/***/ 18072:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/policy/policy.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'policy'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n<ion-content class=\"ion-padding\">\n  <ion-card class=\"ion-padding\">\n    <div class=\"content\">\n      <p class=\"fn-14 dalel-Regular gray-black-color\">\n        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي\n        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة\n        التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسومهناك حقيقة مثبتة منذ\n        زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على\n        الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم\n        استخدام طريقة لوريم إيبسوم هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى\n        المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل\n        توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم\n        إيبسومهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما\n        سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في\n        الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم\n      </p>\n    </div>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 38033:
/*!*************************************************!*\
  !*** ./src/app/modules/policy/policy.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".content p {\n  margin: 0px !important;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLDZCQUFBO0FBQVIiLCJmaWxlIjoicG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_policy_policy_module_ts.js.map