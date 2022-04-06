"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_category-list_category-list_module_ts"],{

/***/ 81733:
/*!***********************************************************************!*\
  !*** ./src/app/modules/category-list/category-list-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListPageRoutingModule": () => (/* binding */ CategoryListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _category_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-list.page */ 59250);




const routes = [
    {
        path: '',
        component: _category_list_page__WEBPACK_IMPORTED_MODULE_0__.CategoryListPage
    }
];
let CategoryListPageRoutingModule = class CategoryListPageRoutingModule {
};
CategoryListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryListPageRoutingModule);



/***/ }),

/***/ 15450:
/*!***************************************************************!*\
  !*** ./src/app/modules/category-list/category-list.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListPageModule": () => (/* binding */ CategoryListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _category_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-list-routing.module */ 81733);
/* harmony import */ var _category_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-list.page */ 59250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let CategoryListPageModule = class CategoryListPageModule {
};
CategoryListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _category_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryListPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_category_list_page__WEBPACK_IMPORTED_MODULE_1__.CategoryListPage]
    })
], CategoryListPageModule);



/***/ }),

/***/ 59250:
/*!*************************************************************!*\
  !*** ./src/app/modules/category-list/category-list.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListPage": () => (/* binding */ CategoryListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./category-list.page.html */ 47728);
/* harmony import */ var _category_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-list.page.scss */ 97800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/items/items.service */ 17118);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);









let CategoryListPage = class CategoryListPage {
    constructor(menuCtrl, activatedRoute, langaugeservice, util, items) {
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.langaugeservice = langaugeservice;
        this.util = util;
        this.items = items;
        this.noItems = false;
        this.platform = this.util.platform;
        //this.loadItems();
    }
    ngOnInit() {
        console.log(`category list data ${JSON.stringify(this.activatedRoute.snapshot.data)}`);
        if (this.activatedRoute.snapshot.data['name']) {
            this.categoryName = this.activatedRoute.snapshot.data['name'];
            console.log(`categoryName is ${this.categoryName}`);
        }
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
        this.getAllDepartmentsBySectionID();
    }
    getAllDepartmentsBySectionID() {
        this.sectionData = {
            lang: this.langaugeservice.getLanguage(),
            section_id: parseInt(this.activatedRoute.snapshot.paramMap.get('id')),
        };
        this.util.showLoadingSpinner().then((__) => {
            this.items.allDepartmentsBySectionID(this.sectionData).subscribe((data) => {
                if (data.key == 1) {
                    console.log('sections data : ' + JSON.stringify(data));
                    //this.sections = data.data.sections;
                    if (data.data.length == 0) {
                        this.noItems = true;
                    }
                    this.sectionAllItems = data.data;
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
    loadItems(event) {
        // call api to get all categorey items
        let newResults = { results: [], totel_pages: 10 };
        //this.categoriesList=[...this.categoriesList,...newResults];
        //this.categoriesList.concat(...newResults);
        this.sectionAllItems.push(...newResults.results);
        // after get data
        event === null || event === void 0 ? void 0 : event.target.complete();
        if (event) {
            event.target.disabled = newResults.totel_pages === this.currentPage;
        }
    }
    openMenu() {
        this.menuCtrl.open();
    }
    //:InfiniteScrollCustomEvent
    loadData(event) {
        this.currentPage++;
        this.loadItems(event);
        // setTimeout(() => {
        //   console.log('Done');
        //   event.target.complete();
        //   // App logic to determine if all data is loaded
        //   // and disable the infinite scroll
        //   if (this.categoriesList.length === 1000) {
        //     event.target.disabled = true;
        //   }
        // }, 500);
    }
};
CategoryListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService },
    { type: src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_2__.ItemsService }
];
CategoryListPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll,] }]
};
CategoryListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-category-list',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_category_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryListPage);



/***/ }),

/***/ 47728:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/category-list/category-list.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"{{categoryName|translate}}\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n\n<ion-content class=\"ion-padding\" >\n  <div *ngIf=\"noItems\" class=\"no-data\">\n    <p>{{\"no items in this section\"|translate}}</p>\n   </div>\n  \n  <app-custom-card\n    [itemDetails]=\"item\"\n    [forwardRoute]=\"'/tabs/main'\"\n    *ngFor=\"let item of sectionAllItems\"\n  ></app-custom-card>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ 97800:
/*!***************************************************************!*\
  !*** ./src/app/modules/category-list/category-list.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".menu-container {\n  position: relative;\n}\n.menu-container img {\n  width: 100%;\n}\nion-header .menu-icon {\n  position: absolute;\n  top: 30%;\n  right: 16px;\n}\nion-header .menu-icon img {\n  width: 40px;\n  height: 40px;\n}\nion-header .menu-title {\n  position: absolute;\n  top: 37%;\n  right: 18%;\n  font-size: 18px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\nion-header .menu-title p {\n  margin: 0px;\n}\nion-header .back-icon {\n  position: absolute;\n  top: 33%;\n  left: 16px;\n}\nion-header .back-icon ion-icon {\n  font-size: 25px;\n}\nion-card {\n  margin-bottom: 16px;\n}\nion-card .container {\n  position: relative;\n  height: 150px;\n}\nion-card .container img {\n  width: 100%;\n  height: 152px;\n  object-fit: cover;\n  object-position: initial;\n}\nion-card .container .title {\n  position: absolute;\n  bottom: 30px;\n  margin-bottom: 4px;\n}\nion-card .container .title p {\n  margin: 0px;\n}\nion-card .container .location {\n  position: absolute;\n  bottom: 5px;\n}\nion-card .container .location ion-icon {\n  font-size: 20px;\n}\nion-card .container .location-address {\n  position: absolute;\n  bottom: 9px;\n}\nion-card .container .location-address p {\n  margin: 0px;\n}\nion-card .container .address-detail {\n  position: absolute;\n  bottom: 5px;\n}\nion-card .container .address-detail ion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ047QUFHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQURKO0FBRUk7RUFDRSxXQUFBO0FBQU47QUFHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFESjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBSUE7RUFDRSxtQkFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFESjtBQUVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBQU47QUFHSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUlBLGtCQUFBO0FBSk47QUFDTTtFQUNFLFdBQUE7QUFDUjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRk47QUFJTTtFQUNFLGVBQUE7QUFGUjtBQU1JO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0FBTE47QUFNTTtFQUNFLFdBQUE7QUFKUjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBTk47QUFPTTtFQUNFLGVBQUE7QUFMUiIsImZpbGUiOiJjYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5pb24taGVhZGVyIHtcbiAgLm1lbnUtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gIH1cblxuICAubWVudS10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzclO1xuICAgIHJpZ2h0OiAxOCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cbiAgLmJhY2staWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzMlO1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgfVxufVxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTUycHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogaW5pdGlhbDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5sb2NhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDVweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBib3R0b206IDlweDtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkcmVzcy1kZXRhaWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiA1cHg7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_category-list_category-list_module_ts.js.map