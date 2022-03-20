"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_reservation_reservation_module_ts"],{

/***/ 22289:
/*!*******************************************************************!*\
  !*** ./src/app/modules/reservation/reservation-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationPageRoutingModule": () => (/* binding */ ReservationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _reservation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservation.page */ 77844);




const routes = [
    {
        path: '',
        component: _reservation_page__WEBPACK_IMPORTED_MODULE_0__.ReservationPage
    }
];
let ReservationPageRoutingModule = class ReservationPageRoutingModule {
};
ReservationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReservationPageRoutingModule);



/***/ }),

/***/ 86391:
/*!***********************************************************!*\
  !*** ./src/app/modules/reservation/reservation.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationPageModule": () => (/* binding */ ReservationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _reservation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservation-routing.module */ 22289);
/* harmony import */ var _reservation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.page */ 77844);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ion2-calendar */ 29260);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_3__);










let ReservationPageModule = class ReservationPageModule {
};
ReservationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _reservation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReservationPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            ion2_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule
        ],
        declarations: [_reservation_page__WEBPACK_IMPORTED_MODULE_1__.ReservationPage]
    })
], ReservationPageModule);



/***/ }),

/***/ 77844:
/*!*********************************************************!*\
  !*** ./src/app/modules/reservation/reservation.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationPage": () => (/* binding */ ReservationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reservation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reservation.page.html */ 31421);
/* harmony import */ var _reservation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.page.scss */ 96012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let ReservationPage = class ReservationPage {
    constructor() {
        this.optionsRange = {
            pickMode: 'range',
            showToggleButtons: true,
            showMonthPicker: true
        };
    }
    ngOnInit() {
    }
    onChange($event) {
        console.log($event);
    }
    reloadSource() {
    }
};
ReservationPage.ctorParameters = () => [];
ReservationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reservation',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reservation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reservation_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReservationPage);



/***/ }),

/***/ 31421:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/reservation/reservation.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'reservation'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isMain]=\"false\"\n></app-header>\n<ion-content class=\"ion-padding\">\n  <ion-calendar  [options]=\"optionsRange\"\n  [type]=\"type\"\n  [format]=\"'YYYY-MM-DD'\" (onChange)=\"onChange($event)\" [(ngModel)]=\"dateRange\"> </ion-calendar>\n\n  <ion-button expand=\"block\" routerLink=\"/tabs/main/reservation-payment\">\n    <span class=\"auth-btn fn-16 white-color dalel-Bold\">\n      {{ \"complete reservation\"|translate}}\n    </span>\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ 96012:
/*!***********************************************************!*\
  !*** ./src/app/modules/reservation/reservation.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".btn-custom {\n  margin: 0 5%;\n  --color: var(--ion-color-white);\n  font-size: 16;\n  font-family: \"Cairo-Bold\";\n  height: 48px;\n}\n\nion-button::part(native) {\n  height: 50px !important;\n  background-image: linear-gradient(to left, var(--ion-color-primary), var(--ion-color-secondary));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsZ0dBQUE7QUFDSiIsImZpbGUiOiJyZXNlcnZhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWN1c3RvbSB7XG4gICAgbWFyZ2luOiAwIDUlO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgZm9udC1zaXplOiAxNjtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1Cb2xkXCI7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG4gIFxuICBpb24tYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIGxlZnQsXG4gICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gICAgICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxuICAgICk7XG4gIH1cbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_reservation_reservation_module_ts.js.map