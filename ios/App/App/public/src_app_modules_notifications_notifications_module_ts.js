"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_notifications_notifications_module_ts"],{

/***/ 58798:
/*!***********************************************************************!*\
  !*** ./src/app/modules/notifications/notifications-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 44733);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 74193:
/*!***************************************************************!*\
  !*** ./src/app/modules/notifications/notifications.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 58798);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 44733);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage],
    })
], NotificationsPageModule);



/***/ }),

/***/ 44733:
/*!*************************************************************!*\
  !*** ./src/app/modules/notifications/notifications.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notifications.page.html */ 74289);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 87326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);







// import * as moment from 'moment';
let NotificationsPage = class NotificationsPage {
    constructor(menuCtrl, langaugeservice, util) {
        this.menuCtrl = menuCtrl;
        this.langaugeservice = langaugeservice;
        this.util = util;
        this.notifications = [
            {
                id: 1,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: true,
            },
            {
                id: 2,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: false,
            },
            {
                id: 3,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: true,
            },
            {
                id: 4,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: false,
            },
            {
                id: 5,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: true,
            },
            {
                id: 6,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: false,
            },
            {
                id: 7,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: true,
            },
            {
                id: 8,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: false,
            },
            {
                id: 9,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: true,
            },
            {
                id: 10,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: false,
            },
            {
                id: 11,
                text: 'تم الموافقة على طلبك',
                date: 'منذ 10 دقائق',
                isRead: true,
            },
        ];
        this.platform = this.util.platform;
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
    }
    openMenu() {
        this.menuCtrl.open();
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_3__.UtilitiesService }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-notifications',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsPage);



/***/ }),

/***/ 74289:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/notifications/notifications.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'notifications'\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isEditable]=\"false\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n\n<ion-content class=\"ion-padding\" [ngClass]=\"platform=='android'?'md-header-height':'ios-header-height'\">\n  <ion-card class=\"ion-no-margin\">\n    <ion-item\n      *ngFor=\"let item of notifications\"\n      [ngClass]=\"item.isRead ? 'isRead' : ''\"\n    >\n      <ul>\n        <li>\n          <ion-label>\n            <h5 class=\"fn-14 dalel-Regular\">{{item.text}}</h5>\n            <p\n              item-start\n              class=\"fn-12 dalel-Regular secondary-color\"\n              [ngClass]=\"currentlangauge == 'ar' ? 'float-right' : 'float-left'\"\n            >\n              {{item.date}}\n            </p>\n          </ion-label>\n        </li>\n      </ul>\n    </ion-item>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 87326:
/*!***************************************************************!*\
  !*** ./src/app/modules/notifications/notifications.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ul {\n  list-style-image: url('dot-icon.svg');\n}\n\nion-item {\n  --border-color: var(--ion-color-white) !important;\n}\n\nion-item::part(native) {\n  text-align: center;\n  padding-inline-end: 0px !important;\n  padding-inline-start: 0px !important;\n}\n\nion-item::part(native) .item-inner {\n  --inner-border-width: 0px;\n}\n\n.isRead {\n  --background: rgba(var(--ion-color-primary-rgb), 0.15) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUFDRjs7QUFDQTtFQUNFLGlEQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7QUFHRjs7QUFERTtFQUNFLHlCQUFBO0FBR0o7O0FBQ0E7RUFDRSxpRUFBQTtBQUVGIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2RvdC1pY29uLnN2Z1wiKTtcbn1cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcblxuICAuaXRlbS1pbm5lciB7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbiAgfVxufVxuXG4uaXNSZWFkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpICFpbXBvcnRhbnQ7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_notifications_notifications_module_ts.js.map