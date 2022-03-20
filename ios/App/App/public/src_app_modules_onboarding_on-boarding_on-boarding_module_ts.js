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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 44269);








swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_3__.EffectCards, swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFade]);
let OnBoardingPage = class OnBoardingPage {
    constructor(langaugeservice, router, menuCtrl) {
        this.langaugeservice = langaugeservice;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.slidingNotAvailable = false;
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: true,
            // effect: 'fade',
        };
        this.menuCtrl.enable(false, 'main');
    }
    // ionViewWillEnter() {
    //   this.menuCtrl.enable(false);
    // }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        console.log(this.currentlangauge);
    }
    skipBoarding() {
        console.log('skip boarding pages');
        this.router.navigateByUrl('/login-register');
    }
    nextSlide(ev) {
        console.log('pointerId : ' + ev.pointerId);
        if (ev.pointerId <= 5 && ev.pointerId >= 3) {
            this.swiper.swiperRef.slideNext(500);
        }
        else {
            this.slidingNotAvailable = true;
        }
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
OnBoardingPage.propDecorators = {
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['swiper',] }]
};
OnBoardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-on-boarding',
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <swiper\n    #swiper\n    [config]=\"config\"\n    [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\" (slideChange)=\"swiperSlideChanged($event)\"\n  >\n    <ng-template swiperSlide *ngFor=\"let i of [{},{},{}]\">\n      <div class=\"boarding\">\n        <h5 class=\"boardng-title\">{{\"test_title\"|translate}}</h5>\n\n        <p class=\"boardng-subtitle\">{{\"test_subtitle\"|translate}}</p>\n\n        <ion-row [ngClass]=\"currentlangauge=='ar' ? '':'custom-row'\">\n          <ion-col size=\"10\">\n            <ion-button [disabled]=\"slidingNotAvailable\" expand=\"block\" class=\"btn-custom\" (click)=\"nextSlide($event)\" >\n              <span>{{\"next\"|translate}}</span>\n            </ion-button>\n          </ion-col>\n\n          <ion-col text-center size=\"2\" (click)=\"skipBoarding()\">\n            <div class=\"ion-text-center skip\">\n              <span> {{\"skip\"|translate}} </span>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ng-template>\n  </swiper>\n</ion-content>\n");

/***/ }),

/***/ 22415:
/*!**********************************************************************!*\
  !*** ./src/app/modules/onboarding/on-boarding/on-boarding.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('boarding.svg') center center/cover\n    no-repeat;\n}\n\n.swiper {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-pagination {\n  position: fixed;\n  top: 0px;\n  padding-bottom: 3px;\n  text-align: start;\n  height: 20 !important;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.boarding {\n  padding: 50px 36px 0;\n}\n\n.boarding .custom-row {\n  padding-top: 16px;\n}\n\n.boarding ion-col {\n  padding: 0px !important;\n}\n\n.boarding ion-col .skip {\n  padding-top: 15px;\n}\n\n.boarding ion-col .skip span {\n  color: var(--ion-color-black);\n  font-size: 14px;\n  font-family: \"Cairo-SemiBold\";\n}\n\n.boarding .boardng-title {\n  font-size: 24px;\n  font-family: \"Cairo-Bold\";\n  color: var(--ion-color-secondary);\n  margin: 0 0 10px 0;\n}\n\n.boarding .boardng-subtitle {\n  font-size: 14px;\n  font-family: \"Cairo-Regular\";\n  margin: 0 0 64px 0;\n}\n\n.boarding .btn-custom {\n  width: 45% !important;\n  margin: 0px !important;\n  --color: var(--ion-color-white);\n  font-size: 16;\n  font-family: \"Cairo-Bold\";\n  height: 48px;\n}\n\n.swiper-pagination-bullet-active {\n  background-color: var(--ion-color-primary) !important;\n  height: 10px;\n  width: 30px !important;\n  border-radius: 10px;\n  height: 20 !important;\n}\n\n.swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal {\n  height: 20 !important;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  background-color: var(--ion-color-primary) !important;\n  height: 10px;\n  width: 15px;\n  border-radius: 10px;\n}\n\n.swiper-pagination-bullet-inactive {\n  background-color: rgba(var(--ion-color-primary), 0.5) !important;\n  height: 10px;\n  width: 15px;\n  border-radius: 10px;\n  opacity: 0.5;\n}\n\n.swiper-pagination-bullets {\n  top: 23% !important;\n  right: 36px;\n  left: 32px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {\n  height: 21 !important;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uLWJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO2FBQUE7QUFFRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQWdCSSxvQkFBQTtBQWZKOztBQUNDO0VBQ0MsaUJBQUE7QUFDRjs7QUFDRTtFQUNFLHVCQUFBO0FBQ0o7O0FBQUk7RUFDRSxpQkFBQTtBQUVOOztBQURNO0VBQ0UsNkJBQUE7RUFDRixlQUFBO0VBQ0EsNkJBQUE7QUFHTjs7QUFFRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0E7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBR0E7O0VBR0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxnRUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUVBLFdBQUE7RUFFQSxxQkFBQTtFQUVBLHdCQUFBO0VBQUEsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUpGIiwiZmlsZSI6Im9uLWJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9hcmRpbmcuc3ZnKSBjZW50ZXIgY2VudGVyL2NvdmVyXG4gICAgbm8tcmVwZWF0O1xufVxuXG4uc3dpcGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBoZWlnaHQ6MjAgIWltcG9ydGFudDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufVxuLmJvYXJkaW5nIHtcblxuIC5jdXN0b20tcm93e1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiB9XG4gIGlvbi1jb2x7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLnNraXB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tU2VtaUJvbGRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgICBwYWRkaW5nOiA1MHB4IDM2cHggMDtcbiAgLmJvYXJkbmctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1Cb2xkXCI7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgbWFyZ2luOjAgMCAxMHB4IDA7XG4gIH1cbiAgLmJvYXJkbmctc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvLVJlZ3VsYXJcIjtcbiAgICBtYXJnaW46MCAwIDY0cHggMDtcbiAgfVxuXG4gIC5idG4tY3VzdG9tIHtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tQm9sZFwiO1xuICAgIGhlaWdodDogNDhweDtcbiAgfVxufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMjAgIWltcG9ydGFudDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbiBzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwge1xuICBoZWlnaHQ6IDIwICFpbXBvcnRhbnQ7XG59XG4uc3dpcGVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LFxuLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c1xuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgMC41KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgdG9wOiAyMyUgIWltcG9ydGFudDtcblxuICByaWdodDogMzZweDtcblxuICBsZWZ0OiAzMnB4ICFpbXBvcnRhbnQ7XG5cbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbCB7XG4gIGhlaWdodDogMjEgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_on-boarding_on-boarding_module_ts.js.map