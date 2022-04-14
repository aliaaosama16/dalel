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
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_results_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search-results.page.html */ 47541);
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
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_results_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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

module.exports = ".search-result {\n  margin-bottom: 16px;\n  border-radius: 10px;\n  border: 1px solid var(--ion-color-primary);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);\n  padding: 11px;\n}\n.search-result ion-button {\n  height: 30px;\n}\n.search-result ion-item::part(native) {\n  padding-inline-end: 0px !important;\n  padding-inline-start: 0px !important;\n}\n.search-result ion-item::part(native) .item-inner {\n  padding-inline-end: 0px !important;\n}\n.search-result .image-margin-right {\n  margin-top: 0px;\n}\n.search-result .image-margin-left {\n  margin: 0px 10px 0 0px !important;\n  margin-inline: 0px 10px !important;\n}\n.search-result ion-thumbnail {\n  width: 100px;\n  height: 100px;\n}\n.search-result ion-thumbnail img {\n  border-radius: 10px;\n}\n.search-result ion-label {\n  margin-top: -3px !important;\n}\n.search-result ion-label h3 {\n  margin: 0px;\n  font-size: 16px;\n}\n.search-result ion-label ion-button.button-disabled {\n  opacity: 1 !important;\n}\n.search-result ion-label .address-container {\n  display: flex;\n}\n.search-result ion-label .address-container ion-button::part(native) {\n  padding-inline-end: 0px !important;\n  box-shadow: none !important;\n}\n.search-result ion-label .address-container p {\n  margin-top: 6px;\n}\n.search-result ion-label .price-container {\n  margin-top: 4px;\n}\n.search-result ion-label .price-container .rating {\n  display: flex;\n}\n.search-result ion-label .price-container .rating .rating-icon {\n  margin: 1px 4px;\n}\n.search-result ion-label .price-container ion-button::part(native) {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFDRTtFQUNFLGtDQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUFJO0VBQ0Usa0NBQUE7QUFFTjtBQUVFO0VBR0UsZUFBQTtBQUZKO0FBS0U7RUFDRSxpQ0FBQTtFQUNBLGtDQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBSko7QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFNRTtFQUNFLDJCQUFBO0FBSko7QUFLSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBSE47QUFNSTtFQUNFLHFCQUFBO0FBSk47QUFPSTtFQUNFLGFBQUE7QUFMTjtBQU9NO0VBQ0Usa0NBQUE7RUFDQSwyQkFBQTtBQUxSO0FBT007RUFDRSxlQUFBO0FBTFI7QUFTSTtFQUNFLGVBQUE7QUFQTjtBQVFNO0VBQ0UsYUFBQTtBQU5SO0FBT1E7RUFDRSxlQUFBO0FBTFY7QUFRTTtFQUNFLDJCQUFBO0FBTlIiLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2IoMCAwIDAgLyA4JSk7XG4gIHBhZGRpbmc6IDExcHg7XG5cbiAgaW9uLWJ1dHRvbntcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuaW1hZ2UtbWFyZ2luLXJpZ2h0IHtcbiAgICAvLyBtYXJnaW46IDBweCAwIDAgMTBweCAhaW1wb3J0YW50O1xuICAgIC8vIG1hcmdpbi1pbmxpbmU6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgLmltYWdlLW1hcmdpbi1sZWZ0IHtcbiAgICBtYXJnaW46IDBweCAxMHB4IDAgMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWlubGluZTogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10aHVtYm5haWwge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGltZ3tcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24uYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYWRkcmVzcy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgaW9uLWJ1dHRvbjo6cGFydChuYXRpdmUpIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJpY2UtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIC5yYXRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAucmF0aW5nLWljb257XG4gICAgICAgICAgbWFyZ2luOiAxcHggNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_search-results_search-results_module_ts.js.map