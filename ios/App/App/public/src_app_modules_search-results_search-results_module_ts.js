"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_search-results_search-results_module_ts"],{

/***/ 49998:
/*!*************************************************************************!*\
  !*** ./src/app/modules/search-results/search-results-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsPageRoutingModule": () => (/* binding */ SearchResultsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _search_results_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results.page */ 63384);




const routes = [
    {
        path: '',
        component: _search_results_page__WEBPACK_IMPORTED_MODULE_0__.SearchResultsPage
    }
];
let SearchResultsPageRoutingModule = class SearchResultsPageRoutingModule {
};
SearchResultsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchResultsPageRoutingModule);



/***/ }),

/***/ 40487:
/*!*****************************************************************!*\
  !*** ./src/app/modules/search-results/search-results.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsPageModule": () => (/* binding */ SearchResultsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _search_results_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results-routing.module */ 49998);
/* harmony import */ var _search_results_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-results.page */ 63384);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let SearchResultsPageModule = class SearchResultsPageModule {
};
SearchResultsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _search_results_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchResultsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ],
        declarations: [_search_results_page__WEBPACK_IMPORTED_MODULE_1__.SearchResultsPage]
    })
], SearchResultsPageModule);



/***/ }),

/***/ 63384:
/*!***************************************************************!*\
  !*** ./src/app/modules/search-results/search-results.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsPage": () => (/* binding */ SearchResultsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_results_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search-results.page.html */ 47541);
/* harmony import */ var _search_results_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-results.page.scss */ 24617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/items/items.service */ 17118);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);







let SearchResultsPage = class SearchResultsPage {
    constructor(langaugeservice, util, items) {
        this.langaugeservice = langaugeservice;
        this.util = util;
        this.items = items;
        this.currentlangauge = '';
        this.noResults = false;
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
        console.log('filters ', this.util.filters);
        this.getResultsItemsByFilters(this.util.filters);
    }
    getResultsItemsByFilters(filterData) {
        this.util.showLoadingSpinner().then((__) => {
            this.items.allDepartmentsByFilters(filterData).subscribe((data) => {
                if (data.key == 1) {
                    console.log('resultItems data : ' + JSON.stringify(data));
                    if (data.data.length == 0) {
                        this.noResults = true;
                    }
                    this.resultItems = data.data;
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
};
SearchResultsPage.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService },
    { type: src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_2__.ItemsService }
];
SearchResultsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-search-results',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_results_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_results_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchResultsPage);



/***/ }),

/***/ 47541:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/search-results/search-results.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header class=\"header-height\" [title]=\"'search-results'\" [isEditable]=\"false\" [backwardRoute]=\"'/tabs/main'\" [isMain]=\"false\">\n</app-header>\n\n<ion-content class=\"ion-padding\" >\n\n  <div *ngIf=\"noResults\" class=\"no-data\">\n    <p>{{\"no results for this search\"|translate}}</p>\n   </div>\n  \n  <div class=\"search-result\" *ngFor=\"let item of resultItems \">\n    <ion-item lines=\"none\"  detail=\"false\" routerLink=\"/tabs/main/categories/1/{{item.id}}\">\n      <ion-thumbnail slot=\"start\" [ngClass]=\"  currentlangauge == 'ar' ? 'image-margin-right' : 'image-margin-left'  \">\n        <img [src]=\"item.first_image\">\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-start\">\n\n        <ion-text>\n          <h3 class=\"dark-black-color fn-16 dalel-SemiBold\"> {{item?.title}}</h3>\n        </ion-text>\n\n        <div class=\"address-container\">\n          <ion-button disabled='true' color=\"secondary\">\n            <ion-icon color=\"secondary\" slot=\"start\" src=\"./../../../assets/icon/pin-white.svg\"></ion-icon>\n          </ion-button>\n\n          <p class=\"primary-color fn-10 dalel-Regular\"> {{item?.city_title}} - {{item?.neighborhood_title}}</p>\n        </div>\n\n        <div class=\"price-container\">\n          <ion-button disabled='true' color=\"secondary\">\n            <span class=\"white-color fn-10 dalel-Bold\"> {{item?.price}} {{'currency'|translate}}\n              /{{'one night'|translate}} </span>\n          </ion-button>\n          <ion-button disabled='true' color=\"primary\">\n            <div class=\"rating\">\n              <div class=\"rating-value\">\n                <span class=\"white-color fn-12 dalel-Regular\">{{item?.rate}}</span>\n              </div>\n\n              <div class=\"rating-icon\">\n                <ion-icon class=\"fn-10\" color=\"secondary\" slot=\"start\" name=\"star\"></ion-icon>\n              </div>\n            </div>\n          </ion-button>\n        </div>\n\n      </ion-label>\n    </ion-item>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 24617:
/*!*****************************************************************!*\
  !*** ./src/app/modules/search-results/search-results.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".search-result {\n  margin-bottom: 16px;\n  border-radius: 10px;\n  border: 1px solid var(--ion-color-primary);\n  padding: 11px;\n}\n.search-result ion-item::part(native) {\n  padding-inline-end: 0px !important;\n  padding-inline-start: 0px !important;\n}\n.search-result ion-item::part(native) .item-inner {\n  padding-inline-end: 0px !important;\n}\n.search-result .image-margin-right {\n  margin: 0px 0 0 10px !important;\n  margin-inline: 0px 10px !important;\n}\n.search-result .image-margin-left {\n  margin: 0px 10px 0 0px !important;\n  margin-inline: 0px 10px !important;\n}\n.search-result ion-thumbnail {\n  width: 100px;\n  height: 100px;\n}\n.search-result ion-thumbnail img {\n  border-radius: 10px;\n}\n.search-result ion-label {\n  margin-top: -3px !important;\n}\n.search-result ion-label h3 {\n  margin: 0px;\n  font-size: 16px;\n}\n.search-result ion-label ion-button.button-disabled {\n  opacity: 1 !important;\n}\n.search-result ion-label .address-container {\n  display: flex;\n}\n.search-result ion-label .address-container ion-button::part(native) {\n  padding-inline-end: 0px !important;\n  box-shadow: none !important;\n}\n.search-result ion-label .address-container p {\n  margin-top: 6px;\n}\n.search-result ion-label .price-container {\n  margin-top: 4px;\n}\n.search-result ion-label .price-container .rating {\n  display: flex;\n}\n.search-result ion-label .price-container .rating .rating-icon {\n  margin: 1px 4px;\n}\n.search-result ion-label .price-container ion-button::part(native) {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtBQUNKO0FBQUk7RUFDRSxrQ0FBQTtBQUVOO0FBRUU7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0FBQUo7QUFHRTtFQUNFLGlDQUFBO0VBQ0Esa0NBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFGSjtBQUdJO0VBQ0UsbUJBQUE7QUFETjtBQUlFO0VBQ0UsMkJBQUE7QUFGSjtBQUdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFETjtBQUlJO0VBQ0UscUJBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtBQUhOO0FBS007RUFDRSxrQ0FBQTtFQUNBLDJCQUFBO0FBSFI7QUFLTTtFQUNFLGVBQUE7QUFIUjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBTU07RUFDRSxhQUFBO0FBSlI7QUFLUTtFQUNFLGVBQUE7QUFIVjtBQU1NO0VBQ0UsMkJBQUE7QUFKUiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXJlc3VsdCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMTFweDtcblxuICBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgICAuaXRlbS1pbm5lciB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5pbWFnZS1tYXJnaW4tcmlnaHQge1xuICAgIG1hcmdpbjogMHB4IDAgMCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWlubGluZTogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWFnZS1tYXJnaW4tbGVmdCB7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwIDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1pbmxpbmU6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBpbWd7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfVxuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IC0zcHggIWltcG9ydGFudDtcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uLmJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFkZHJlc3MtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIGlvbi1idXR0b246OnBhcnQobmF0aXZlKSB7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByaWNlLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAucmF0aW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLnJhdGluZy1pY29ue1xuICAgICAgICAgIG1hcmdpbjogMXB4IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbjo6cGFydChuYXRpdmUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_search-results_search-results_module_ts.js.map