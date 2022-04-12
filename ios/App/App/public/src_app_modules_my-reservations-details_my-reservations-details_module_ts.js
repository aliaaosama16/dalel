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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_reservations_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-reservations-details.page.html */ 38347);
/* harmony import */ var _my_reservations_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-reservations-details.page.scss */ 73029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reservations/reservations.service */ 29105);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);









let MyReservationsDetailsPage = class MyReservationsDetailsPage {
    constructor(langaugeservice, util, reservationsService, auth, activatedRoute) {
        this.langaugeservice = langaugeservice;
        this.util = util;
        this.reservationsService = reservationsService;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.platform = this.util.platform;
        this.showOrdersByID();
    }
    showOrdersByID() {
        // this.auth.getUserIDObservable().subscribe((val) => {
        this.orderData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value,
            order_id: parseInt(this.activatedRoute.snapshot.paramMap.get('id')),
        };
        console.log(JSON.stringify(this.orderData));
        this.showAllOrdersByID(this.orderData);
        //  });
    }
    showAllOrdersByID(orderData) {
        console.log(JSON.stringify(orderData));
        this.util.showLoadingSpinner().then((__) => {
            this.reservationsService.showOrderByID(orderData).subscribe((data) => {
                if (data.key == 1) {
                    // this.util.showMessage(data.msg);
                    console.log('order data :' + JSON.stringify(data.data));
                    this.orderDetials = data.data;
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
    }
};
MyReservationsDetailsPage.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__.UtilitiesService },
    { type: src_app_services_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_4__.ReservationsService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
MyReservationsDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-my-reservations-details',
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"'my-reservations-details'\" [isEditable]=\"false\" [backwardRoute]=\"'/tabs/my-reservations'\"\n  [isMain]=\"false\" class=\"header-height\"></app-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"container\">\n    <img [src]=\"orderDetials?.department_image \" />\n  </div>\n  <app-custom-details [OrderDetails]=\"orderDetials\" [isDetailed]=\"false\"></app-custom-details>\n\n  <div class=\"details\">\n    <h5 class=\"fn-14 dalel-Bold primary-color\">\n      {{\"my-reservations-details\"|translate}}\n    </h5>\n\n    <div class=\"arrival-date-spacer\">\n      <p class=\"arrival fn-14 dalel-Regular\">\n        <img src=\"./../../../assets/icon/calender.svg\" />\n        <span [ngClass]=\"currentlangauge == 'ar' ?  'margin-right' :'margin-left'\">\n          {{orderDetials?.start_time}}\n        </span>\n      </p>\n\n      <p class=\"arrival fn-14 dalel-Regular\">\n        <span> {{\"arrival-date\"|translate}} :{{orderDetials?.start_date}} </span>\n      </p>\n    </div>\n\n    <div class=\"left-date-spacer\">\n      <p class=\"arrival fn-14 dalel-Regular\">\n        <img src=\"./../../../assets/icon/calender.svg\" />\n        <span [ngClass]=\"currentlangauge == 'ar' ?  'margin-right':'margin-left'\">\n          {{orderDetials?.end_time}}\n        </span>\n      </p>\n\n      <p class=\"arrival fn-14 dalel-Regular\">\n        <span> {{\"left-date\"|translate}} :{{orderDetials?.end_date}} </span>\n      </p>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ 73029:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/my-reservations-details/my-reservations-details.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  margin-bottom: 16px;\n}\n.container img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  object-position: initial;\n  border-radius: 10px;\n  filter: brightness(0.34);\n}\nion-button.button-disabled {\n  opacity: 1 !important;\n}\nion-button {\n  margin: 0px;\n}\nion-button ion-icon {\n  font-size: 16px;\n}\nion-button::part(native) {\n  padding-inline-start: 10px !important;\n  padding-inline-end: 10px !important;\n}\n.name-rating-container {\n  display: flex;\n  justify-content: space-between;\n}\n.name-rating-container .name, .name-rating-container .rating {\n  flex-direction: row;\n}\n.name-rating-container .name h5, .name-rating-container .rating h5 {\n  margin-top: 10px !important;\n}\n.address-price-container {\n  margin-top: 13px;\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.address-price-container .address, .address-price-container .price {\n  flex-direction: row;\n}\n.address-price-container .address p, .address-price-container .price p {\n  display: inline-block;\n  margin: 0px;\n}\n.nameandrating h5 {\n  margin: 10px 0;\n}\n.addressandprice {\n  margin-bottom: 16px;\n}\n.addressandprice p {\n  margin: 0px !important;\n}\n.addressandprice ion-col ion-icon {\n  font-size: 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.details {\n  background-color: var(--ion-color-orange-light);\n  border-radius: 10px;\n  padding: 10px 12px;\n}\n.details p {\n  margin: 0px !important;\n}\n.details h5 {\n  margin: 0px !important;\n}\n.details .arrival img {\n  display: inline-block;\n}\n.details .arrival-date-spacer {\n  margin-top: 6px;\n}\n.details .left-date-spacer {\n  margin-top: 10px;\n}\n.details .margin-left {\n  margin-left: 6px;\n}\n.details .margin-right {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXJlc2VydmF0aW9ucy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFFSjtBQUVBO0VBQ0UscUJBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFBRTtFQUNFLHFDQUFBO0VBQ0EsbUNBQUE7QUFFSjtBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBREY7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFDSTtFQUNFLDJCQUFBO0FBQ047QUFJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURGO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBQ0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFDTjtBQUtFO0VBQ0UsY0FBQTtBQUZKO0FBS0E7RUFhRSxtQkFBQTtBQWRGO0FBRUU7RUFDRSxzQkFBQTtBQUFKO0FBS0k7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUhOO0FBU0E7RUFDRSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVFFO0VBQ0Usc0JBQUE7QUFOSjtBQVFFO0VBQ0Usc0JBQUE7QUFOSjtBQVVJO0VBQ0UscUJBQUE7QUFSTjtBQVlFO0VBQ0UsZUFBQTtBQVZKO0FBWUU7RUFDRSxnQkFBQTtBQVZKO0FBWUU7RUFDRSxnQkFBQTtBQVZKO0FBWUU7RUFDRSxpQkFBQTtBQVZKIiwiZmlsZSI6Im15LXJlc2VydmF0aW9ucy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBpbml0aWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMzQpO1xuICB9XG59XG5cbmlvbi1idXR0b24uYnV0dG9uLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgJjo6cGFydChuYXRpdmUpIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuXG4ubmFtZS1yYXRpbmctY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC5uYW1lLCAucmF0aW5ne1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaDV7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5hZGRyZXNzLXByaWNlLWNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuYWRkcmVzcywgLnByaWNle1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubmFtZWFuZHJhdGluZyB7XG4gIGg1IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxufVxuLmFkZHJlc3NhbmRwcmljZSB7XG4gIHAge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tY29sIHtcbiAgICAvL3BhZGRpbmctdG9wOiAxMHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5kZXRhaWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW9yYW5nZS1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcblxuICBwIHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIGg1IHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFycml2YWwge1xuICAgIGltZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmFycml2YWwtZGF0ZS1zcGFjZXIge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICAubGVmdC1kYXRlLXNwYWNlciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAubWFyZ2luLWxlZnR7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgfVxuICAubWFyZ2luLXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_my-reservations-details_my-reservations-details_module_ts.js.map