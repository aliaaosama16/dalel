"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_my-reservations_my-reservations_module_ts"],{

/***/ 92107:
/*!***************************************************************************!*\
  !*** ./src/app/modules/my-reservations/my-reservations-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReservationsPageRoutingModule": () => (/* binding */ MyReservationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _my_reservations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-reservations.page */ 5942);




const routes = [
    {
        path: '',
        component: _my_reservations_page__WEBPACK_IMPORTED_MODULE_0__.MyReservationsPage
    }
];
let MyReservationsPageRoutingModule = class MyReservationsPageRoutingModule {
};
MyReservationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyReservationsPageRoutingModule);



/***/ }),

/***/ 40121:
/*!*******************************************************************!*\
  !*** ./src/app/modules/my-reservations/my-reservations.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReservationsPageModule": () => (/* binding */ MyReservationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _my_reservations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-reservations-routing.module */ 92107);
/* harmony import */ var _my_reservations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-reservations.page */ 5942);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let MyReservationsPageModule = class MyReservationsPageModule {
};
MyReservationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_reservations_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyReservationsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ],
        declarations: [_my_reservations_page__WEBPACK_IMPORTED_MODULE_1__.MyReservationsPage]
    })
], MyReservationsPageModule);



/***/ }),

/***/ 5942:
/*!*****************************************************************!*\
  !*** ./src/app/modules/my-reservations/my-reservations.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReservationsPage": () => (/* binding */ MyReservationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_reservations_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-reservations.page.html */ 80017);
/* harmony import */ var _my_reservations_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-reservations.page.scss */ 50938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);





let MyReservationsPage = class MyReservationsPage {
    constructor(langaugeservice) {
        this.langaugeservice = langaugeservice;
        this.reservationsType = 'old';
        this.oldReservations = [
            {
                id: 1,
                name: 'rests',
                image: './../../../assets/images/1024-500.png',
                city: 'الرياض',
                country: 'المملكة العربية السعودية',
                price: 1120,
                unit: 'currency',
                perUnit: 'one night',
                rating: 3,
            },
        ];
        this.currentReservations = [
            {
                id: 1,
                name: 'rests',
                image: './../../../assets/images/1024-500.png',
                city: 'الرياض',
                country: 'المملكة العربية السعودية',
                price: 1120,
                unit: 'currency',
                perUnit: 'one night',
                rating: 3,
            },
            {
                id: 1,
                name: 'rests',
                image: './../../../assets/images/1024-500.png',
                city: 'الرياض',
                country: 'المملكة العربية السعودية',
                price: 1120,
                unit: 'currency',
                perUnit: 'one night',
                rating: 3,
            },
            {
                id: 1,
                name: 'rests',
                image: './../../../assets/images/1024-500.png',
                city: 'الرياض',
                country: 'المملكة العربية السعودية',
                price: 1120,
                unit: 'currency',
                perUnit: 'one night',
                rating: 3,
            },
            {
                id: 1,
                name: 'rests',
                image: './../../../assets/images/1024-500.png',
                city: 'الرياض',
                country: 'المملكة العربية السعودية',
                price: 1120,
                unit: 'currency',
                perUnit: 'one night',
                rating: 3,
            },
        ];
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
    }
    reservationsTypeChange($event) { }
};
MyReservationsPage.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService }
];
MyReservationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-reservations',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_reservations_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_reservations_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyReservationsPage);



/***/ }),

/***/ 80017:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/my-reservations/my-reservations.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'my-reservations'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n></app-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-segment\n    (ionChange)=\"reservationsTypeChange($event)\"\n    value=\"register\"\n    [(ngModel)]=\"reservationsType\"\n  >\n    <ion-segment-button\n      value=\"old\"\n      [ngClass]=\"reservationsType=='old' ?'selected':'old-unselected'\"\n    >\n      <ion-label>{{\"old\"|translate}}</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button\n      value=\"current\"\n      [ngClass]=\"reservationsType=='current' ?'selected':'current-unselected'\"\n    >\n      <ion-label>{{\"current\"|translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"reservationsType=='old'\">\n    <ion-card\n      class=\"ion-no-margin\"\n      *ngFor=\"let item of oldReservations\"\n      routerLink=\"/tabs/my-reservations/my-reservations-details\"\n    >\n      <div class=\"container\">\n        <img src=\"./../../../assets/images/1024-500.png\" />\n\n\n        <div class=\"price\">\n          <p class=\"fn-15 dalel-SemiBold secondary-color\">{{item.price}}   {{item.perUnit|translate}}/ {{item.unit|translate}}</p>\n        </div>\n\n        <div class=\"title\"  [ngStyle]=\"currentlangauge=='ar'?{'right': '13px'} : {'left': '13px'}\">\n          <p class=\"fn-14 dalel-Bold white-color\">{{item.name|translate}}</p>\n        </div>\n\n        <div class=\"location\" [ngStyle]=\"currentlangauge=='ar'?{'right': '10px'} : {'left': '10px'}\">\n          <ion-icon\n            src=\"./../../../assets/icon/pin-underline.svg\"\n            color=\"primary\"\n          ></ion-icon>\n        </div>\n\n        <div class=\"location-address\" [ngStyle]=\"currentlangauge=='ar'?{'right': '35px'} : {'left': '35px'}\">\n          <p class=\"fn-10 dalel-Regular white-color\">{{item.city}} - {{item.country}}</p>\n        </div>\n\n        <div class=\"rating\" [ngStyle]=\"currentlangauge=='ar'?{'left': '16px'} : {'right': '16px'}\">\n          <span class=\"white-color\"> {{item.rating}}</span>\n          <ion-icon name=\"star\" color=\"secondary\"></ion-icon>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"reservationsType=='current'\">\n    <ion-card\n      class=\"ion-no-margin\"\n      *ngFor=\"let item of currentReservations\"\n      routerLink=\"/tabs/my-reservations/my-reservations-details\"\n    >\n      <div class=\"container\">\n        <img src=\"./../../../assets/images/1024-500.png\" />\n\n        <div class=\"price\">\n          <p class=\"fn-15 dalel-SemiBold white-color\">{{item.price}}   {{item.perUnit|translate}}/ {{item.unit|translate}}</p>\n        </div>\n\n        <div class=\"title\"  [ngStyle]=\"currentlangauge=='ar'?{'right': '13px'} : {'left': '13px'}\">\n          <p class=\"fn-14 dalel-Bold white-color\">{{item.name|translate}}</p>\n        </div>\n\n        <div class=\"location\" [ngStyle]=\"currentlangauge=='ar'?{'right': '10px'} : {'left': '10px'}\">\n          <ion-icon\n            src=\"./../../../assets/icon/pin-underline.svg\"\n            color=\"primary\"\n          ></ion-icon>\n        </div>\n\n        <div class=\"location-address\" [ngStyle]=\"currentlangauge=='ar'?{'right': '35px'} : {'left': '35px'}\">\n          <p class=\"fn-10 dalel-Regular white-color\">{{item.city}} - {{item.country}}</p>\n        </div>\n\n        <div class=\"rating\" [ngStyle]=\"currentlangauge=='ar'?{'left': '16px'} : {'right': '16px'}\">\n          <span class=\"white-color\"> {{item.rating}}</span>\n          <ion-icon name=\"star\" color=\"secondary\"></ion-icon>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 50938:
/*!*******************************************************************!*\
  !*** ./src/app/modules/my-reservations/my-reservations.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-segment {\n  border-radius: 10px !important;\n  margin-bottom: 24px;\n  --background:var(--ion-color-orange-light);\n}\nion-segment .selected {\n  background-image: linear-gradient(to left, var(--ion-color-primary), var(--ion-color-secondary));\n  --border-radius: 10px !important;\n}\nion-segment .old-unselected {\n  --border-radius: 0 10px 10px 0 !important;\n}\nion-segment .current-unselected {\n  --border-radius: 10px 0 0 10px !important;\n}\nion-segment-button {\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  height: 48px;\n  --background: var(--ion-color-orange-light);\n  --color-checked: var(--ion-color-white);\n  --color: var(--ion-color-secondary);\n  --background-checked: var(--ion-color-primary);\n  --border-radius: 10px !important;\n  --indicator-color: none;\n}\nion-segment-button ion-label {\n  font-size: 14px;\n  font-family: \"Cairo-SemiBold\";\n}\nion-card {\n  margin-bottom: 16px;\n}\nion-card .container {\n  position: relative;\n  height: 158px;\n}\nion-card .container .price {\n  position: absolute;\n  left: 16px;\n  top: 16px;\n  color: var(--ion-color-secondary);\n}\nion-card .container .price p {\n  font-size: 14px;\n  margin: 0px;\n  font-family: \"Cairo-Bold\";\n}\nion-card .container img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  object-position: initial;\n}\nion-card .container .title {\n  position: absolute;\n  bottom: 30px;\n  margin-bottom: 7px;\n}\nion-card .container .title p {\n  margin: 0px;\n}\nion-card .container .location {\n  position: absolute;\n  bottom: 5px;\n}\nion-card .container .location ion-icon {\n  font-size: 20px;\n}\nion-card .container .location-address {\n  position: absolute;\n  font-size: 10px;\n  bottom: 13px;\n}\nion-card .container .location-address p {\n  margin: 0px;\n}\nion-card .container .rating {\n  position: absolute;\n  bottom: 16px;\n  text-align: center;\n  padding: 2px 0px;\n  width: 40px;\n  height: 25px;\n  background-color: var(--ion-color-primary);\n  border-radius: 5px;\n}\nion-card .container .rating ion-icon {\n  font-size: 12px;\n  margin-top: 5px;\n}\nion-card .container .rating span {\n  margin: 0 4px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXJlc2VydmF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDRjtBQUFFO0VBQ0UsZ0dBQUE7RUFLQSxnQ0FBQTtBQUZKO0FBSUU7RUFDRSx5Q0FBQTtBQUZKO0FBS0U7RUFDRSx5Q0FBQTtBQUhKO0FBTUE7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQUhGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUFGSjtBQUtBO0VBQ0UsbUJBQUE7QUFGRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBRko7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtBQUZOO0FBR007RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRFI7QUFJSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUZOO0FBTUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtBQU5OO0FBT007RUFFRSxXQUFBO0FBTlI7QUFXSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQVROO0FBYU07RUFDRSxlQUFBO0FBWFI7QUFnQkk7RUFDRSxrQkFBQTtFQUdBLGVBQUE7RUFDQSxZQUFBO0FBaEJOO0FBa0JNO0VBQ0UsV0FBQTtBQWhCUjtBQW9CSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFuQk47QUFvQk07RUFDRSxlQUFBO0VBRUEsZUFBQTtBQW5CUjtBQXFCTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBbkJSIiwiZmlsZSI6Im15LXJlc2VydmF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1vcmFuZ2UtbGlnaHQpO1xuICAuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIGxlZnQsXG4gICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gICAgICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxuICAgICk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9sZC11bnNlbGVjdGVkIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jdXJyZW50LXVuc2VsZWN0ZWQge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5pb24tc2VnbWVudC1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDhweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itb3JhbmdlLWxpZ2h0KTsgXG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvcjogbm9uZTtcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tU2VtaUJvbGRcIjtcbiAgfVxufVxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDE1OHB4O1xuXG4gICAgLnByaWNlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICB0b3A6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tQm9sZFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBvYmplY3QtcG9zaXRpb246IGluaXRpYWw7XG4gICAgICAvL2JvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgLy8gcmlnaHQ6IDEzcHg7XG4gICAgLy8gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgcCB7XG4gICAgICAgLy8gZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIC8vICBmb250LWZhbWlseTogXCJDYWlyby1TZW1pQm9sZFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5sb2NhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIC8vcmlnaHQ6IDEwcHg7XG4gICAgIC8vIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgLy8gZm9udC1mYW1pbHk6IFwiQ2Fpcm8tUmVndWxhclwiO1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICAvL3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgIC5sb2NhdGlvbi1hZGRyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgIC8vIGZvbnQtZmFtaWx5OiBcIkNhaXJvLVJlZ3VsYXJcIjtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGJvdHRvbTogMTNweDtcbiAgICAgIC8vcmlnaHQ6IDM1cHg7XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJhdGluZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDE2cHg7XG4gICAgIC8vIGxlZnQ6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycHggMHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_my-reservations_my-reservations_module_ts.js.map