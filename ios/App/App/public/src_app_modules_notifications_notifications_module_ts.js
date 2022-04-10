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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notifications.page.html */ 74289);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 87326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notifications/notifications.service */ 31670);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/storage */ 872);












let NotificationsPage = class NotificationsPage {
    constructor(menuCtrl, langaugeservice, util, router, userNotifications, alertController, translate, auth) {
        this.menuCtrl = menuCtrl;
        this.langaugeservice = langaugeservice;
        this.util = util;
        this.router = router;
        this.userNotifications = userNotifications;
        this.alertController = alertController;
        this.translate = translate;
        this.auth = auth;
        this.getNotifications = false;
        this.noNotifications = false;
        this.platform = this.util.platform;
        this.auth.getStoredUserID();
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
        this.auth.getUserIDObservable().subscribe((val) => {
            console.log('user id :' + val);
            if (val != 0) {
                this.UserData = {
                    lang: this.langaugeservice.getLanguage(),
                    user_id: val,
                };
                this.showNotification(this.UserData);
            }
        });
    }
    openMenu() {
        this.menuCtrl.open();
    }
    showNotification(notificationData) {
        this.userNotifications.showNotification(notificationData).subscribe((data) => {
            if (data.key == 1) {
                if (data.data.length == 0) {
                    this.noNotifications = true;
                }
                this.notifications = data.data;
            }
        }, (err) => { });
    }
    openOrederDetails(orderID) {
        this.router.navigateByUrl(`/tabs/my-reservations/my-reservations-details/` + orderID);
    }
    deleteItem(notification_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
                lang: this.langaugeservice.getLanguage(),
                notification_id: notification_id,
            };
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: this.translate.instant('confirm delete this notification'),
                buttons: [
                    {
                        text: this.translate.instant('ok'),
                        handler: () => {
                            this.util.showLoadingSpinner().then((__) => {
                                this.userNotifications.deleteNotification(data).subscribe((data) => {
                                    console.log('delete item ' + JSON.stringify(this.notifications));
                                    this.util.showMessage(data.msg);
                                    this.showNotification(this.UserData);
                                    this.updateNoOfNotifications();
                                    this.util.dismissLoading();
                                }, (err) => {
                                    this.util.dismissLoading();
                                });
                            });
                        },
                    },
                    {
                        text: this.translate.instant('cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    updateNoOfNotifications() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const userID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({ key: 'userID' });
            console.log('stored user id : ' + parseInt(userID.value));
            this.auth.setNoOfNotifications(parseInt(userID.value));
        });
    }
    doRefresh($event) {
        this.auth.getUserIDObservable().subscribe((val) => {
            console.log('user id :' + val);
            if (val != 0) {
                this.UserData = {
                    lang: this.langaugeservice.getLanguage(),
                    user_id: val,
                };
                this.userNotifications.showNotification(this.UserData).subscribe((data) => {
                    if (data.key == 1) {
                        if (data.data.length == 0) {
                            this.noNotifications = true;
                        }
                        this.notifications = data.data;
                    }
                    $event.target.complete();
                }, (err) => {
                    $event.target.complete();
                });
            }
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__.UtilitiesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-notifications',
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'notifications'\"\n  [backwardRoute]=\"'/tabs/main'\"\n  [isEditable]=\"false\"\n  [isMain]=\"false\"\n  class=\"header-height\"\n></app-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"noNotifications\" class=\"no-data\">\n    <p>{{\"no Notifications\"|translate}}</p>\n  </div>\n  <ion-card class=\"ion-no-margin\">\n    <ion-item-sliding *ngFor=\"let item of notifications\">\n      <ion-item (click)=\"openOrederDetails(item.order_id)\">\n        <ul>\n          <li>\n            <ion-label>\n              <h5 class=\"fn-14 dalel-Regular\">{{item.message}}</h5>\n              <p\n                item-start\n                class=\"fn-12 dalel-Regular secondary-color\"\n                [ngClass]=\"currentlangauge == 'ar' ? 'float-right' : 'float-left'\"\n              >\n                {{item.duration}}\n              </p>\n            </ion-label>\n          </li>\n        </ul>\n      </ion-item>\n      <ion-item-options side=\"end\" (click)=\"deleteItem(item.id)\">\n        <ion-item-option color=\"danger\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 87326:
/*!***************************************************************!*\
  !*** ./src/app/modules/notifications/notifications.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ul {\n  list-style-image: url('dot-icon.svg');\n}\n\nion-item::part(native) {\n  text-align: center;\n  padding-inline-end: 0px !important;\n  padding-inline-start: 0px !important;\n}\n\nion-item::part(native) .item-inner {\n  --inner-border-width: 0px;\n}\n\n.isRead {\n  --background: rgba(var(--ion-color-primary-rgb), 0.15) !important;\n}\n\n.alert-button-group.sc-ion-alert-md {\n  justify-content: space-around !important;\n}\n\n.alert-button-group.sc-ion-alert-ios {\n  justify-content: space-around !important;\n}\n\n.no-notifications {\n  margin-top: 40%;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUdFO0VBQ0UseUJBQUE7QUFESjs7QUFLQTtFQUNFLGlFQUFBO0FBRkY7O0FBS0E7RUFDRSx3Q0FBQTtBQUZGOztBQUlBO0VBQ0Usd0NBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBREYiLCJmaWxlIjoibm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZG90LWljb24uc3ZnXCIpO1xufVxuLy8gaW9uLWl0ZW0ge1xuLy8gICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50O1xuLy8gfVxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuXG4gIC5pdGVtLWlubmVyIHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICB9XG59XG5cbi5pc1JlYWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSkgIWltcG9ydGFudDtcbn1cblxuLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWR7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG4uYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3N7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5uby1ub3RpZmljYXRpb25ze1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_notifications_notifications_module_ts.js.map