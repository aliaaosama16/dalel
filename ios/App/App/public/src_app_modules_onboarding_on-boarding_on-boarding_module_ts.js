"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_onboarding_on-boarding_on-boarding_module_ts"],{

/***/ 28872:
/*!******************************************************************************!*\
  !*** ./src/app/modules/onboarding/on-boarding/on-boarding-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnBoardingPageRoutingModule": () => (/* binding */ OnBoardingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _on_boarding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-boarding.page */ 35003);




const routes = [
    {
        path: '',
        component: _on_boarding_page__WEBPACK_IMPORTED_MODULE_0__.OnBoardingPage
    }
];
let OnBoardingPageRoutingModule = class OnBoardingPageRoutingModule {
};
OnBoardingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnBoardingPageRoutingModule);



/***/ }),

/***/ 30643:
/*!**********************************************************************!*\
  !*** ./src/app/modules/onboarding/on-boarding/on-boarding.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnBoardingPageModule": () => (/* binding */ OnBoardingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _on_boarding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-boarding-routing.module */ 28872);
/* harmony import */ var _on_boarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-boarding.page */ 35003);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 98980);









let OnBoardingPageModule = class OnBoardingPageModule {
};
OnBoardingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _on_boarding_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnBoardingPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule
        ],
        declarations: [_on_boarding_page__WEBPACK_IMPORTED_MODULE_1__.OnBoardingPage]
    })
], OnBoardingPageModule);



/***/ }),

/***/ 35003:
/*!********************************************************************!*\
  !*** ./src/app/modules/onboarding/on-boarding/on-boarding.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnBoardingPage": () => (/* binding */ OnBoardingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./on-boarding.page.html */ 12190);
/* harmony import */ var _on_boarding_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-boarding.page.scss */ 22415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 44269);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);
/* harmony import */ var src_app_services_general_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/general/general.service */ 55731);











swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_3__.EffectCards, swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFade]);
let OnBoardingPage = class OnBoardingPage {
    constructor(langaugeservice, router, menuCtrl, util, general) {
        this.langaugeservice = langaugeservice;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.util = util;
        this.general = general;
        this.slidingNotAvailable = false;
        this.nextClicked = 0;
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: true,
            //allowTouchMove: false,
        };
        this.getIntro = false;
        this.menuCtrl.enable(false, 'main');
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
        this.getIntroData();
    }
    skipBoarding() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('skip boarding pages');
            //this.setBoarding();
            this.router.navigateByUrl('/tabs/main');
        });
    }
    getIntroData() {
        this.util.showLoadingSpinner().then((__) => {
            this.general.intro().subscribe((data) => {
                this.introData = data;
                console.log('INTRO ' + JSON.stringify(this.introData));
                this.util.dismissLoading();
                this.getIntro = true;
            }, (err) => {
                this.util.dismissLoading();
                this.getIntro = false;
            });
        });
    }
    nextSlide(ev) {
        console.log('pointerId : ' + ev.pointerId);
        if (this.nextClicked < 3) {
            this.nextClicked++;
        }
        else {
            // this.setBoarding();
            // this.router.navigateByUrl('/tabs/main');
        }
    }
    start() {
        this.setBoarding();
        this.router.navigateByUrl('/tabs/main');
    }
    setBoarding() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.set({
                key: 'openBoarding',
                value: 'true',
            });
        });
    }
    ngAfterContentChecked() {
        if (this.swiper) {
            this.swiper.updateSwiper({});
        }
    }
    swiperSlideChanged(e) {
        console.log('changed: ', e);
    }
};
OnBoardingPage.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__.UtilitiesService },
    { type: src_app_services_general_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService }
];
OnBoardingPage.propDecorators = {
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['swiper',] }]
};
OnBoardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-on-boarding',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
        styles: [_on_boarding_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnBoardingPage);



/***/ }),

/***/ 12190:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/onboarding/on-boarding/on-boarding.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <swiper\n    #swiper\n    [config]=\"config\"\n    [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    (slideChange)=\"swiperSlideChanged($event)\"\n    *ngIf=\"getIntro\"\n  >\n    <ng-template swiperSlide>\n      <div class=\"boarding\">\n        <img [src]=\"introData?.data?.first_image\">\n        <h5 class=\"boardng-title\">{{introData?.data?.first_title}}</h5>\n\n        <p class=\"boardng-subtitle\">{{introData?.data?.first_desc}}</p>\n\n        <div\n          class=\"boarding-buttons\"\n          [ngClass]=\"currentlangauge=='ar' ? '':'custom-row'\"\n        >\n          <div>\n            <ion-button\n              [disabled]=\"slidingNotAvailable\"\n              expand=\"block\"\n              class=\"btn-custom\"\n              (click)=\"nextSlide($event)\"\n            >\n              <span>{{\"next\"|translate}}</span>\n            </ion-button>\n          </div>\n          <div (click)=\"skipBoarding()\">\n            <div class=\"ion-text-center skip\">\n              <span> {{\"skip\"|translate}} </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template swiperSlide>\n\n      <div class=\"boarding\">\n        <img [src]=\"introData?.data?.second_image\">\n        <h5 class=\"boardng-title\">{{introData?.data?.second_title}}</h5>\n\n        <p class=\"boardng-subtitle\">{{introData?.data?.second_desc}}</p>\n\n        <div\n          class=\"boarding-buttons\"\n          [ngClass]=\"currentlangauge=='ar' ? '':'custom-row'\"\n        >\n          <div>\n            <ion-button\n              [disabled]=\"slidingNotAvailable\"\n              expand=\"block\"\n              class=\"btn-custom\"\n              (click)=\"nextSlide($event)\"\n            >\n              <span>{{\"next\"|translate}}</span>\n            </ion-button>\n          </div>\n          <div (click)=\"skipBoarding()\">\n            <div class=\"ion-text-center skip\">\n              <span> {{\"skip\"|translate}} </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template swiperSlide>\n      <div class=\"boarding\">\n        <img [src]=\"introData?.data?.third_image\">\n        <h5 class=\"boardng-title\">{{introData?.data?.third_title}}</h5>\n\n        <p class=\"boardng-subtitle\">{{introData?.data?.third_desc}}</p>\n\n        <div\n          class=\"boarding-buttons\"\n          [ngClass]=\"currentlangauge=='ar' ? '':'custom-row'\"\n        >\n          <div>\n            <ion-button\n              [disabled]=\"slidingNotAvailable\"\n              expand=\"block\"\n              class=\"btn-custom\"\n              (click)=\"start()\"\n            >\n              <span>{{\"start\"|translate}}</span>\n            </ion-button>\n          </div>\n          <div (click)=\"skipBoarding()\">\n            <div class=\"ion-text-center skip\">\n              <span> {{\"skip\"|translate}} </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </swiper>\n</ion-content>\n");

/***/ }),

/***/ 22415:
/*!**********************************************************************!*\
  !*** ./src/app/modules/onboarding/on-boarding/on-boarding.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ":root[dir=rtl] .swiper-pagination-bullets {\n  top: 57% !important;\n  right: 32px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-align: right;\n}\n\n:root[dir=ltr] .swiper-pagination-bullets {\n  top: 57% !important;\n  right: 32px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-align: left;\n}\n\n.swiper {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.boarding-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.boarding-buttons div {\n  flex-direction: row;\n}\n\n.boarding {\n  padding: 50px 36px 0;\n}\n\n.boarding img {\n  width: 100%;\n  height: 300px !important;\n  object-fit: contain;\n}\n\n.boarding .custom-row {\n  padding-top: 16px;\n}\n\n.boarding .boardng-title {\n  font-size: 24px;\n  font-family: \"Cairo-Bold\";\n  color: var(--ion-color-secondary);\n  margin: 0 0 10px 0;\n}\n\n.boarding .boardng-subtitle {\n  font-size: 14px;\n  font-family: \"Cairo-Regular\";\n  margin: 0 0 100px 0;\n}\n\n.boarding .btn-custom {\n  width: 100% !important;\n  margin: 0px !important;\n  --color: var(--ion-color-white);\n  font-size: 16;\n  font-family: \"Cairo-Bold\";\n  height: 48px;\n}\n\n.swiper-pagination-bullet-active {\n  background-color: var(--ion-color-primary) !important;\n  height: 10px;\n  width: 30px !important;\n  border-radius: 10px;\n  height: 20 !important;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  background-color: var(--ion-color-primary) !important;\n  height: 10px;\n  width: 15px;\n  border-radius: 10px;\n}\n\n.swiper-pagination-bullet-inactive {\n  background-color: rgba(var(--ion-color-primary), 0.5) !important;\n  height: 10px;\n  width: 15px;\n  border-radius: 10px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uLWJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFVRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFTRTtFQUNFLG1CQUFBO0FBUEo7O0FBVUE7RUFDRSxvQkFBQTtBQVBGOztBQVFFO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFRRTtFQUNFLGlCQUFBO0FBTko7O0FBUUU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FBTko7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVdBO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBUkY7O0FBV0E7O0VBR0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxnRUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVEYiLCJmaWxlIjoib24tYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4vLyAgIC0tYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ib2FyZGluZy5zdmcpIGNlbnRlclxuLy8gICAgIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4vLyB9XG5cbjpyb290W2Rpcj1cInJ0bFwiXSB7XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICB0b3A6IDU3JSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAgMzJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuOnJvb3RbZGlyPVwibHRyXCJdIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICAgIHRvcDogNTclICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6ICAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5cbi5zd2lwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkaW5nLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuLmJvYXJkaW5nIHtcbiAgcGFkZGluZzogNTBweCAzNnB4IDA7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLmN1c3RvbS1yb3cge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICB9XG4gIC5ib2FyZG5nLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tQm9sZFwiO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIH1cbiAgLmJvYXJkbmctc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1SZWd1bGFyXCI7XG4gICAgbWFyZ2luOiAwIDAgMTAwcHggMDtcbiAgfVxuXG4gIC5idG4tY3VzdG9tIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDE2O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvLUJvbGRcIjtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDIwICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQsXG4uc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCAwLjUpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_on-boarding_on-boarding_module_ts.js.map