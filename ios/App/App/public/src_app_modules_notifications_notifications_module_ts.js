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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notifications/notifications.service */ 31670);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);










// import * as moment from 'moment';
let NotificationsPage = class NotificationsPage {
    constructor(menuCtrl, langaugeservice, util, router, userNotifications, alertController, translate) {
        this.menuCtrl = menuCtrl;
        this.langaugeservice = langaugeservice;
        this.util = util;
        this.router = router;
        this.userNotifications = userNotifications;
        this.alertController = alertController;
        this.translate = translate;
        this.platform = this.util.platform;
        this.notificationsData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: 37,
        };
        this.showNotification(this.notificationsData);
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
    }
    openMenu() {
        this.menuCtrl.open();
    }
    showNotification(data) {
        this.util.showLoadingSpinner().then((__) => {
            this.userNotifications.showNotification(data).subscribe((data) => {
                this.notifications = data.data;
                console.log('notifications' + JSON.stringify(this.notifications));
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
    openOrederDetails(orderID) {
        this.router.navigateByUrl(`/tabs/my-reservations/my-reservations-details/` + orderID);
    }
    deleteItem(notification_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
                lang: this.langaugeservice.getLanguage(),
                notification_id: notification_id,
            };
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: this.translate.instant('confirm delete this notification'),
                buttons: [
                    {
                        text: this.translate.instant('cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        },
                    },
                    {
                        text: this.translate.instant('ok'),
                        handler: () => {
                            this.util.showLoadingSpinner().then((__) => {
                                this.userNotifications.deleteNotification(data).subscribe((data) => {
                                    console.log('delete item ' + JSON.stringify(this.notifications));
                                    this.util.showMessage(data.msg);
                                    this.util.dismissLoading();
                                    this.showNotification(this.notificationsData);
                                }, (err) => {
                                    this.util.dismissLoading();
                                });
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-notifications',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsPage);



/***/ }),

/***/ 31670:
/*!*****************************************************************!*\
  !*** ./src/app/services/notifications/notifications.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let NotificationsService = class NotificationsService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    showNotification(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}show-notification`, data);
    }
    deleteNotification(data) {
        return this.httpclient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL}delete-notification`, data);
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], NotificationsService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'notifications'\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isEditable]=\"false\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n<!-- [ngClass]=\"item.isRead ? 'isRead' : ''\" -->\n<ion-content\n  class=\"ion-padding\"\n  \n>\n  <ion-card class=\"ion-no-margin\">\n    <ion-item-sliding  *ngFor=\"let item of notifications\" >\n    <ion-item (click)=\"openOrederDetails(item.order_id)\">\n      <ul>\n        <li>\n          <ion-label>\n            <h5 class=\"fn-14 dalel-Regular\">{{item.message}}</h5>\n            <p\n              item-start\n              class=\"fn-12 dalel-Regular secondary-color\"\n              [ngClass]=\"currentlangauge == 'ar' ? 'float-right' : 'float-left'\"\n            >\n              {{item.duration}}\n            </p>\n          </ion-label>\n        </li>\n      </ul>\n    </ion-item>\n    <ion-item-options side=\"end\" (click)=\"deleteItem(item.id)\">\n      <ion-item-option color=\"danger\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n     \n    </ion-item-options>\n    </ion-item-sliding>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 87326:
/*!***************************************************************!*\
  !*** ./src/app/modules/notifications/notifications.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ul {\n  list-style-image: url('dot-icon.svg');\n}\n\nion-item::part(native) {\n  text-align: center;\n  padding-inline-end: 0px !important;\n  padding-inline-start: 0px !important;\n}\n\nion-item::part(native) .item-inner {\n  --inner-border-width: 0px;\n}\n\n.isRead {\n  --background: rgba(var(--ion-color-primary-rgb), 0.15) !important;\n}\n\n.alert-button-group.sc-ion-alert-md {\n  justify-content: space-around !important;\n}\n\n.alert-button-group.sc-ion-alert-ios {\n  justify-content: space-around !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUdFO0VBQ0UseUJBQUE7QUFESjs7QUFLQTtFQUNFLGlFQUFBO0FBRkY7O0FBS0E7RUFDRSx3Q0FBQTtBQUZGOztBQUlBO0VBQ0Usd0NBQUE7QUFERiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9kb3QtaWNvbi5zdmdcIik7XG59XG4vLyBpb24taXRlbSB7XG4vLyAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XG4vLyB9XG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgLml0ZW0taW5uZXIge1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLmlzUmVhZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuXG4uYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cbi5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3tcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_notifications_notifications_module_ts.js.map