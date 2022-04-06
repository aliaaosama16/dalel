"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_categories_categories_module_ts"],{

/***/ 35173:
/*!*****************************************************************!*\
  !*** ./src/app/modules/categories/categories-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageRoutingModule": () => (/* binding */ CategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page */ 86648);




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ 81550:
/*!*********************************************************!*\
  !*** ./src/app/modules/categories/categories.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageModule": () => (/* binding */ CategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories-routing.module */ 35173);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page */ 86648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriesPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_1__.CategoriesPage]
    })
], CategoriesPageModule);



/***/ }),

/***/ 86648:
/*!*******************************************************!*\
  !*** ./src/app/modules/categories/categories.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPage": () => (/* binding */ CategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./categories.page.html */ 28114);
/* harmony import */ var _categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page.scss */ 21205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/data.service */ 34257);
/* harmony import */ var src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/items/items.service */ 17118);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);











let CategoriesPage = class CategoriesPage {
    constructor(router, menuCtrl, dataService, util, items, langaugeservice, auth) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.util = util;
        this.items = items;
        this.langaugeservice = langaugeservice;
        this.auth = auth;
        this.noCategoriesData = false;
        this.platform = this.util.platform;
        this.auth.getUserIDObservable().subscribe((val) => {
            this.userData = {
                lang: this.langaugeservice.getLanguage(),
                user_id: val == 0 ? 1 : val,
            };
            this.getAllSections();
        });
    }
    ngOnInit() { }
    getAllSections() {
        this.util.showLoadingSpinner().then((__) => {
            this.items.data(this.userData).subscribe((data) => {
                if (data.key == 1) {
                    if (data.data.sections.length == 0) {
                        this.noCategoriesData = true;
                    }
                    this.sections = data.data.sections;
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
    openMenu() {
        this.menuCtrl.open();
    }
    openCatList(catID, catName) {
        this.dataService.setData(catID, catName);
        this.router.navigateByUrl(`/tabs/main/categories/${catID}`);
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_6__.UtilitiesService },
    { type: src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_4__.ItemsService },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
CategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-categories',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_categories_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoriesPage);



/***/ }),

/***/ 28114:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/categories/categories.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'categories'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n\n<ion-content >\n  <div *ngIf=\"noCategoriesData\" class=\"no-data\">\n    <p>{{'no Categories'|translate}}</p>\n   </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let cat of sections\">\n        <ion-card class=\"ion-no-margin\" (click)=\"openCatList(cat.id,cat.title)\">\n          <ion-item>\n            <ion-thumbnail>\n              <img [src]=\"cat.image\" />\n            </ion-thumbnail>\n            <ion-label> {{cat.title|translate}} </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 21205:
/*!*********************************************************!*\
  !*** ./src/app/modules/categories/categories.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".menu-container {\n  position: relative;\n}\n.menu-container img {\n  width: 100%;\n}\nion-card {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px !important;\n}\nion-header .menu-icon {\n  position: absolute;\n  top: 30%;\n  right: 16px;\n}\nion-header .menu-icon img {\n  width: 40px;\n  height: 40px;\n}\nion-header .menu-title {\n  position: absolute;\n  top: 35%;\n  right: 18%;\n  font-size: 18px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\nion-header .menu-title p {\n  margin: 0px;\n}\nion-header .back-icon {\n  position: absolute;\n  top: 33%;\n  left: 16px;\n}\nion-header .back-icon ion-icon {\n  font-size: 25px;\n}\nion-card ion-item::part(native) {\n  padding-inline-start: 0px;\n}\nion-card ion-thumbnail {\n  margin: 15px;\n}\nion-card ion-thumbnail img {\n  border-radius: 5px;\n}\nion-card ion-label {\n  font-size: 16px;\n  font-family: \"Cairo-SemiBold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBQ0E7RUFDRSxvSUFBQTtBQUVGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRU47QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBQ0k7RUFDRSxXQUFBO0FBQ047QUFHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFESjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBTUU7RUFDRSx5QkFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0FBSko7QUFNSTtFQUNFLGtCQUFBO0FBSk47QUFRRTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQU5KIiwiZmlsZSI6ImNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxcHggLTJweCxcbiAgICByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggMXB4IDVweCAwcHggIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIge1xuICAubWVudS1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tZW51LXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgcmlnaHQ6IDE4JTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5iYWNrLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMzJTtcbiAgICBsZWZ0OiAxNnB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNhcmQge1xuICBpb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICB9XG5cbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgbWFyZ2luOiAxNXB4O1xuXG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1TZW1pQm9sZFwiO1xuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_categories_categories_module_ts.js.map