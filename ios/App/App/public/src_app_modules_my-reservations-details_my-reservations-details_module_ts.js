"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_my-reservations-details_my-reservations-details_module_ts"],{

/***/ 72783:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/my-reservations-details/my-reservations-details-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReservationsDetailsPageRoutingModule": () => (/* binding */ MyReservationsDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _my_reservations_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-reservations-details.page */ 99911);




const routes = [
    {
        path: '',
        component: _my_reservations_details_page__WEBPACK_IMPORTED_MODULE_0__.MyReservationsDetailsPage
    }
];
let MyReservationsDetailsPageRoutingModule = class MyReservationsDetailsPageRoutingModule {
};
MyReservationsDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyReservationsDetailsPageRoutingModule);



/***/ }),

/***/ 80845:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/my-reservations-details/my-reservations-details.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReservationsDetailsPageModule": () => (/* binding */ MyReservationsDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _my_reservations_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-reservations-details-routing.module */ 72783);
/* harmony import */ var _my_reservations_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-reservations-details.page */ 99911);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let MyReservationsDetailsPageModule = class MyReservationsDetailsPageModule {
};
MyReservationsDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_reservations_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyReservationsDetailsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ],
        declarations: [_my_reservations_details_page__WEBPACK_IMPORTED_MODULE_1__.MyReservationsDetailsPage]
    })
], MyReservationsDetailsPageModule);



/***/ }),

/***/ 99911:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/my-reservations-details/my-reservations-details.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReservationsDetailsPage": () => (/* binding */ MyReservationsDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_reservations_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-reservations-details.page.html */ 38347);
/* harmony import */ var _my_reservations_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-reservations-details.page.scss */ 73029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);






let MyReservationsDetailsPage = class MyReservationsDetailsPage {
    constructor(langaugeservice, util) {
        this.langaugeservice = langaugeservice;
        this.util = util;
        this.ItemDetails = {
            name: "اسم الاستراحه",
            rating: '3+',
            id: 1,
            image: "./../../../assets/images/1024-500.png",
            city: "الرياض",
            address: " حي الرمال",
            price: 1120,
            unit: "currency",
            perUnit: "one night",
            arrivalTime: '‏12.00 مساءا',
            leftTime: '‏12.00 صباحا',
            arrivalDate: 'الاربعاء 22/02/2022',
            leftDate: 'السبت 25/02/2022',
            isFav: true,
            description: '',
            reservationRules: '',
            catID: 0
        };
        this.platform = this.util.platform;
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
    }
};
MyReservationsDetailsPage.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_3__.UtilitiesService }
];
MyReservationsDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-my-reservations-details",
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_reservations_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_reservations_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyReservationsDetailsPage);



/***/ }),

/***/ 38347:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/my-reservations-details/my-reservations-details.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'my-reservations-details'\"\n  [isEditable]=\"false\"\n  [backwardRoute]=\"'/tabs/my-reservations'\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n<ion-content class=\"ion-padding\" >\n  <div class=\"container\">\n    <img [src]=\"ItemDetails.image \" />\n  </div>\n  <app-custom-details\n    [ItemDetails]=\"ItemDetails\"\n    [isDetailed]=\"false\"\n  ></app-custom-details>\n\n  <div class=\"details\">\n    <h5 class=\"fn-14 dalel-Bold primary-color\">\n      {{\"my-reservations-details\"|translate}}\n    </h5>\n\n    <div class=\"arrival-date-spacer\">\n      <p class=\"arrival fn-14 dalel-Regular\">\n        <img src=\"./../../../assets/icon/calender.svg\" />\n        <span\n          [ngClass]=\"currentlangauge == 'ar' ?  'margin-right' :'margin-left'\"\n        >\n          {{ItemDetails.arrivalTime}}\n        </span>\n      </p>\n\n      <p class=\"arrival fn-14 dalel-Regular\">\n        <span> {{\"arrival-date\"|translate}} :{{ItemDetails.leftTime}} </span>\n      </p>\n    </div>\n\n    <div class=\"left-date-spacer\">\n      <p class=\"arrival fn-14 dalel-Regular\">\n        <img src=\"./../../../assets/icon/calender.svg\" />\n        <span\n          [ngClass]=\"currentlangauge == 'ar' ?  'margin-right':'margin-left'\"\n        >\n          {{ItemDetails.leftTime}}\n        </span>\n      </p>\n\n      <p class=\"arrival fn-14 dalel-Regular\">\n        <span> {{\"arrival-date\"|translate}} :{{ItemDetails.leftDate}} </span>\n      </p>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 73029:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/my-reservations-details/my-reservations-details.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  margin-bottom: 16px;\n}\n.container img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  object-position: initial;\n  border-radius: 10px;\n}\nion-button.button-disabled {\n  opacity: 1 !important;\n}\nion-button {\n  margin: 0px;\n}\nion-button ion-icon {\n  font-size: 16px;\n}\nion-button::part(native) {\n  padding-inline-start: 10px !important;\n  padding-inline-end: 10px !important;\n}\n.name-rating-container {\n  display: flex;\n  justify-content: space-between;\n}\n.name-rating-container .name, .name-rating-container .rating {\n  flex-direction: row;\n}\n.name-rating-container .name h5, .name-rating-container .rating h5 {\n  margin-top: 10px !important;\n}\n.address-price-container {\n  margin-top: 13px;\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.address-price-container .address, .address-price-container .price {\n  flex-direction: row;\n}\n.address-price-container .address p, .address-price-container .price p {\n  display: inline-block;\n  margin: 0px;\n}\n.nameandrating h5 {\n  margin: 10px 0;\n}\n.addressandprice {\n  margin-bottom: 16px;\n}\n.addressandprice p {\n  margin: 0px !important;\n}\n.addressandprice ion-col ion-icon {\n  font-size: 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.details {\n  background-color: var(--ion-color-orange-light);\n  border-radius: 10px;\n  padding: 10px 12px;\n}\n.details p {\n  margin: 0px !important;\n}\n.details h5 {\n  margin: 0px !important;\n}\n.details .arrival img {\n  display: inline-block;\n}\n.details .arrival-date-spacer {\n  margin-top: 6px;\n}\n.details .left-date-spacer {\n  margin-top: 10px;\n}\n.details .margin-left {\n  margin-left: 6px;\n}\n.details .margin-right {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXJlc2VydmF0aW9ucy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBRUE7RUFDRSxxQ0FBQTtFQUNBLG1DQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtBQUVKO0FBREk7RUFDRSwyQkFBQTtBQUdOO0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7QUFFSjtBQURJO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBR047QUFHRTtFQUNFLGNBQUE7QUFBSjtBQUdBO0VBYUUsbUJBQUE7QUFaRjtBQUFFO0VBQ0Usc0JBQUE7QUFFSjtBQUdJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFETjtBQU9BO0VBQ0UsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7QUFNRTtFQUNFLHNCQUFBO0FBSko7QUFNRTtFQUNFLHNCQUFBO0FBSko7QUFRSTtFQUNFLHFCQUFBO0FBTk47QUFVRTtFQUNFLGVBQUE7QUFSSjtBQVVFO0VBQ0UsZ0JBQUE7QUFSSjtBQVVFO0VBQ0UsZ0JBQUE7QUFSSjtBQVVFO0VBQ0UsaUJBQUE7QUFSSiIsImZpbGUiOiJteS1yZXNlcnZhdGlvbnMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogaW5pdGlhbDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbmlvbi1idXR0b24uYnV0dG9uLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbjo6cGFydChuYXRpdmUpIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lLXJhdGluZy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLm5hbWUsIC5yYXRpbmd7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoNXtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLmFkZHJlc3MtcHJpY2UtY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5hZGRyZXNzLCAucHJpY2V7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwe1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICB9XG59XG5cbi5uYW1lYW5kcmF0aW5nIHtcbiAgaDUge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG59XG4uYWRkcmVzc2FuZHByaWNlIHtcbiAgcCB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1jb2wge1xuICAgIC8vcGFkZGluZy10b3A6IDEwcHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmRldGFpbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itb3JhbmdlLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuXG4gIHAge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDUge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXJyaXZhbCB7XG4gICAgaW1nIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIH1cblxuICAuYXJyaXZhbC1kYXRlLXNwYWNlciB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG4gIC5sZWZ0LWRhdGUtc3BhY2VyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5tYXJnaW4tbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICB9XG4gIC5tYXJnaW4tcmlnaHR7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_my-reservations-details_my-reservations-details_module_ts.js.map