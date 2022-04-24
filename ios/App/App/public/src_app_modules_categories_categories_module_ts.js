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
<<<<<<< HEAD
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./categories.page.html */ 28114);
=======
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./categories.page.html */ 28114);
>>>>>>> 834fbd3340ffd4e17fcb852b513b68d626caa195
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
        this.userData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
        };
        this.getAllSections();
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
    doRefresh($event) {
        this.userData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
        };
        this.items.data(this.userData).subscribe((data) => {
            if (data.key == 1) {
                if (data.data.sections.length == 0) {
                    this.noCategoriesData = true;
                }
                this.sections = data.data.sections;
            }
            $event.target.complete();
        }, (err) => {
            $event.target.complete();
        });
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
<<<<<<< HEAD
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_categories_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
=======
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_categories_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
>>>>>>> 834fbd3340ffd4e17fcb852b513b68d626caa195
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'categories'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n\n<ion-content >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"noCategoriesData\" class=\"no-data\">\n    <p>{{'no Categories'|translate}}</p>\n   </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let cat of sections\">\n        <ion-card class=\"ion-no-margin\" (click)=\"openCatList(cat.id,cat.title)\">\n          <!-- <ion-item>\n            <ion-thumbnail>\n              <img [src]=\"cat.image\" />\n            </ion-thumbnail>\n            <ion-label class=\"fn-16 dalel-SemiBold\"> {{cat.title|translate}} </ion-label>\n          </ion-item> -->\n          <div class=\"cat-container\">\n            <div class=\"cat-image\">\n              <img [src]=\"cat.image\" />\n            </div>\n            <div class=\"cat-title\">\n              <ion-label class=\"fn-16 dalel-SemiBold\"> {{cat.title|translate}} </ion-label>\n            </div>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 21205:
/*!*********************************************************!*\
  !*** ./src/app/modules/categories/categories.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  height: 80px;\n}\nion-card .cat-container {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  margin: 15px;\n}\nion-card .cat-container .cat-image,\nion-card .cat-container .cat-title {\n  flex-direction: row;\n}\nion-card .cat-container .cat-image > img {\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  object-fit: cover;\n  object-position: center;\n}\nion-card .cat-container .cat-title {\n  margin: 0 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBd0JFLFlBQUE7QUF0QkY7QUF1QkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFyQko7QUFzQkk7O0VBRUUsbUJBQUE7QUFwQk47QUFzQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQXBCTjtBQXNCSTtFQUNFLGFBQUE7QUFwQk4iLCJmaWxlIjoiY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIC8vIGlvbi1pdGVtIHtcbiAgLy8gICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAvLyAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgLy8gICAgIC5pdGVtLW5uZXJ7XG4gIC8vICAgICAgIC5pbnB1dC13cmFwcGVye1xuICAvLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gICBoZWlnaHQ6IDgwcHg7XG5cbiAgLy8gICBpb24tdGh1bWJuYWlsIHtcbiAgLy8gICAgIG1hcmdpbjogMTVweDtcblxuICAvLyAgICAgaW1nIHtcbiAgLy8gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyAgICAgICBoZWlnaHQ6IDUwcHg7XG4gIC8vICAgICAgIHdpZHRoOiA1MHB4O1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGhlaWdodDogODBweDtcbiAgLmNhdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIC5jYXQtaW1hZ2UsXG4gICAgLmNhdC10aXRsZSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAuY2F0LWltYWdlID4gaW1nIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhdC10aXRsZSB7XG4gICAgICBtYXJnaW46IDAgN3B4O1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_categories_categories_module_ts.js.map