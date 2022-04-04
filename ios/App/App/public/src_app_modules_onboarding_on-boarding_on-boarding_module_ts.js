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
/* harmony import */ var _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./on-boarding.page.html */ 12190);
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
        template: _Users_efadhmac_Desktop_dalil_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <swiper\n    #swiper\n    [config]=\"config\"\n    [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    (slideChange)=\"swiperSlideChanged($event)\"\n    *ngIf=\"getIntro\"\n  >\n    <ng-template swiperSlide>\n      <div class=\"boarding\">\n        <h5 class=\"boardng-title\">{{introData?.data?.first_title}}</h5>\n\n        <p class=\"boardng-subtitle\">{{introData?.data?.first_desc}}</p>\n\n        <div\n          class=\"boarding-buttons\"\n          [ngClass]=\"currentlangauge=='ar' ? '':'custom-row'\"\n        >\n          <div>\n            <ion-button\n              [disabled]=\"slidingNotAvailable\"\n              expand=\"block\"\n              class=\"btn-custom\"\n              (click)=\"nextSlide($event)\"\n            >\n              <span>{{\"next\"|translate}}</span>\n            </ion-button>\n          </div>\n          <div (click)=\"skipBoarding()\">\n            <div class=\"ion-text-center skip\">\n              <span> {{\"skip\"|translate}} </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template swiperSlide>\n      <div class=\"boarding\">\n        <h5 class=\"boardng-title\">{{introData?.data?.second_title}}</h5>\n\n        <p class=\"boardng-subtitle\">{{introData?.data?.second_desc}}</p>\n\n        <div\n          class=\"boarding-buttons\"\n          [ngClass]=\"currentlangauge=='ar' ? '':'custom-row'\"\n        >\n          <div>\n            <ion-button\n              [disabled]=\"slidingNotAvailable\"\n              expand=\"block\"\n              class=\"btn-custom\"\n              (click)=\"nextSlide($event)\"\n            >\n              <span>{{\"next\"|translate}}</span>\n            </ion-button>\n          </div>\n          <div (click)=\"skipBoarding()\">\n            <div class=\"ion-text-center skip\">\n              <span> {{\"skip\"|translate}} </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template swiperSlide>\n      <div class=\"boarding\">\n        <h5 class=\"boardng-title\">{{introData?.data?.third_title}}</h5>\n\n        <p class=\"boardng-subtitle\">{{introData?.data?.third_desc}}</p>\n\n        <div\n          class=\"boarding-buttons\"\n          [ngClass]=\"currentlangauge=='ar' ? '':'custom-row'\"\n        >\n          <div>\n            <ion-button\n              [disabled]=\"slidingNotAvailable\"\n              expand=\"block\"\n              class=\"btn-custom\"\n              (click)=\"start()\"\n            >\n              <span>{{\"start\"|translate}}</span>\n            </ion-button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </swiper>\n</ion-content>\n");

/***/ }),

/***/ 22415:
/*!**********************************************************************!*\
  !*** ./src/app/modules/onboarding/on-boarding/on-boarding.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('boarding.svg') center\n    center/cover no-repeat;\n}\n\n:root[dir=rtl] .swiper-pagination-bullets {\n  top: 23% !important;\n  right: 32px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-align: right;\n}\n\n:root[dir=ltr] .swiper-pagination-bullets {\n  top: 23% !important;\n  right: 32px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-align: left;\n}\n\n.swiper {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.boarding-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.boarding-buttons div {\n  flex-direction: row;\n}\n\n.boarding {\n  padding: 50px 36px 0;\n}\n\n.boarding img {\n  width: 100%;\n  height: 300px !important;\n  object-fit: contain;\n}\n\n.boarding .custom-row {\n  padding-top: 16px;\n}\n\n.boarding .boardng-title {\n  font-size: 24px;\n  font-family: \"Cairo-Bold\";\n  color: var(--ion-color-secondary);\n  margin: 0 0 10px 0;\n}\n\n.boarding .boardng-subtitle {\n  font-size: 14px;\n  font-family: \"Cairo-Regular\";\n  margin: 0 0 100px 0;\n}\n\n.boarding .btn-custom {\n  width: 100% !important;\n  margin: 0px !important;\n  --color: var(--ion-color-white);\n  font-size: 16;\n  font-family: \"Cairo-Bold\";\n  height: 48px;\n}\n\n.swiper-pagination-bullet-active {\n  background-color: var(--ion-color-primary) !important;\n  height: 10px;\n  width: 30px !important;\n  border-radius: 10px;\n  height: 20 !important;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  background-color: var(--ion-color-primary) !important;\n  height: 10px;\n  width: 15px;\n  border-radius: 10px;\n}\n\n.swiper-pagination-bullet-inactive {\n  background-color: rgba(var(--ion-color-primary), 0.5) !important;\n  height: 10px;\n  width: 15px;\n  border-radius: 10px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uLWJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzBCQUFBO0FBRUY7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBS0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBSUU7RUFDRSxtQkFBQTtBQUZKOztBQUtBO0VBQ0Usb0JBQUE7QUFGRjs7QUFHRTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtBQURKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFNQTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BOztFQUdFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0VBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUpGIiwiZmlsZSI6Im9uLWJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9hcmRpbmcuc3ZnKSBjZW50ZXJcbiAgICBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xufVxuXG46cm9vdFtkaXI9XCJydGxcIl0ge1xuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgdG9wOiAyMyUgIWltcG9ydGFudDtcbiAgICByaWdodDogIDMycHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5cbjpyb290W2Rpcj1cImx0clwiXSB7XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICB0b3A6IDIzJSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAgMzJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuXG4uc3dpcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZGluZy1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbi5ib2FyZGluZyB7XG4gIHBhZGRpbmc6IDUwcHggMzZweCAwO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5jdXN0b20tcm93IHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuICAuYm9hcmRuZy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvLUJvbGRcIjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG4gIC5ib2FyZG5nLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2Fpcm8tUmVndWxhclwiO1xuICAgIG1hcmdpbjogMCAwIDEwMHB4IDA7XG4gIH1cblxuICAuYnRuLWN1c3RvbSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgZm9udC1zaXplOiAxNjtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1Cb2xkXCI7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAyMCAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LFxuLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c1xuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgMC41KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_on-boarding_on-boarding_module_ts.js.map