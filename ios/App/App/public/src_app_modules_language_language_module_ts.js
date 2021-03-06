"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_language_language_module_ts"],{

/***/ 25504:
/*!*************************************************************!*\
  !*** ./src/app/modules/language/language-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePageRoutingModule": () => (/* binding */ LanguagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.page */ 94701);




const routes = [
    {
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_0__.LanguagePage
    }
];
let LanguagePageRoutingModule = class LanguagePageRoutingModule {
};
LanguagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LanguagePageRoutingModule);



/***/ }),

/***/ 68561:
/*!*****************************************************!*\
  !*** ./src/app/modules/language/language.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePageModule": () => (/* binding */ LanguagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _language_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language-routing.module */ 25504);
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.page */ 94701);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let LanguagePageModule = class LanguagePageModule {
};
LanguagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _language_routing_module__WEBPACK_IMPORTED_MODULE_0__.LanguagePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_1__.LanguagePage]
    })
], LanguagePageModule);



/***/ }),

/***/ 94701:
/*!***************************************************!*\
  !*** ./src/app/modules/language/language.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePage": () => (/* binding */ LanguagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_language_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./language.page.html */ 42026);
/* harmony import */ var _language_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.page.scss */ 92077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);






let LanguagePage = class LanguagePage {
    constructor(langaugeservice, menuCtrl) {
        this.langaugeservice = langaugeservice;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, 'main');
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
    }
    chooseLanguage(ev) {
        console.log(ev.detail.value);
        if (ev.detail.value) {
            this.selectLanguage = true;
        }
        this.langaugeservice.setLanguage(ev.detail.value);
        if (ev.detail.value == 'ar') {
            document.documentElement.dir = 'rtl';
        }
        else {
            document.documentElement.dir = 'ltr';
        }
        // window.location.reload();
    }
};
LanguagePage.ctorParameters = () => [
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
LanguagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-language',
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_language_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LanguagePage);



/***/ }),

/***/ 42026:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/language/language.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <div\n    class=\"language\"\n    [ngClass]=\"currentlangauge == 'ar' ? 'arabic_padding' : 'english_padding'\"\n  >\n    <ion-list>\n      <ion-radio-group (ionChange)=\"chooseLanguage($event)\">\n        <ion-list-header>\n          <ion-label>\n            <h5 class=\"title\">{{ \"choose_langauge\"|translate}}</h5></ion-label\n          >\n        </ion-list-header>\n\n        <ion-item class=\"lang-item\" lines=\"none\">\n          <ion-radio\n            value=\"ar\"\n            slot=\"start\"\n            [ngClass]=\"currentlangauge == 'ar' ? 'arabic' : 'english'\"\n          ></ion-radio>\n          <ion-label class=\"lang-label\">{{'arabic'|translate}}</ion-label>\n        </ion-item>\n\n        <ion-item class=\"lang-item\" lines=\"none\">\n          <ion-radio\n            value=\"en\"\n            slot=\"start\"\n            [ngClass]=\"currentlangauge == 'en' ? 'english' : 'arabic'\"\n          ></ion-radio>\n          <ion-label class=\"lang-label\"> {{'english'|translate}}</ion-label>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-button\n      expand=\"block\"\n      [disabled]=\"!selectLanguage\"\n      class=\"btn-custom fn-16 dalel-Bold\"\n      routerLink=\"/on-boarding\"\n      routerDirection=\"forward\"\n    >\n      <span>{{\"start\"|translate}}</span>\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 92077:
/*!*****************************************************!*\
  !*** ./src/app/modules/language/language.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('bg.svg') no-repeat center center /cover;\n}\n\n.language ion-list-header {\n  padding-inline-start: 0px !important;\n}\n\n.language ion-item::part(native) {\n  text-align: center;\n  padding-inline-end: 0px !important;\n  padding-inline-start: 0px !important;\n}\n\n.language ion-item::part(native) .item-inner {\n  --inner-border-width: 0px;\n}\n\n.language .title {\n  font-family: \"Cairo-Bold\";\n  font-size: 22px;\n}\n\n.language ion-list {\n  background: none;\n  padding-top: 50px;\n}\n\n.language ion-list .lang-item {\n  --background: none;\n}\n\n.language ion-list .lang-item .input-wrapper {\n  flex: none;\n  margin-left: auto;\n}\n\n.language ion-list .lang-item .lang-label {\n  font-family: \"Cairo-SemiBold\";\n  font-size: 16px;\n  display: contents;\n}\n\n.language ion-list .lang-item .arabic {\n  margin-left: 10px;\n}\n\n.language ion-list .lang-item .english {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBEQUFBO0FBQ0Y7O0FBS0U7RUFDRSxvQ0FBQTtBQUZKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0FBRko7O0FBSUk7RUFDRSx5QkFBQTtBQUZOOztBQUtFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBS0k7RUFDRSxrQkFBQTtBQUhOOztBQUlNO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBRlI7O0FBSU07RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZSOztBQUtNO0VBQ0UsaUJBQUE7QUFIUjs7QUFNTTtFQUNFLGtCQUFBO0FBSlIiLCJmaWxlIjoibGFuZ3VhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvY292ZXI7XG59XG5cblxuLmxhbmd1YWdlIHtcblxuICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgXG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbiAgICB9XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJDYWlyby1Cb2xkXCI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIGlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuXG4gICAgLmxhbmctaXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuICAgICAgLmxhbmctbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJDYWlyby1TZW1pQm9sZFwiO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgICAgfVxuXG4gICAgICAuYXJhYmljIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5lbmdsaXNoIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuIFxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_language_language_module_ts.js.map