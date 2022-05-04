"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_category-details_category-details_module_ts"],{

/***/ 12015:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/category-details/category-details-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDetailsPageRoutingModule": () => (/* binding */ CategoryDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _category_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-details.page */ 92647);




const routes = [
    {
        path: '',
        component: _category_details_page__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailsPage
    }
];
let CategoryDetailsPageRoutingModule = class CategoryDetailsPageRoutingModule {
};
CategoryDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryDetailsPageRoutingModule);



/***/ }),

/***/ 47260:
/*!*********************************************************************!*\
  !*** ./src/app/modules/category-details/category-details.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDetailsPageModule": () => (/* binding */ CategoryDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _category_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-details-routing.module */ 12015);
/* harmony import */ var _category_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-details.page */ 92647);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 98980);










let CategoryDetailsPageModule = class CategoryDetailsPageModule {
};
CategoryDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _category_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
        ],
        declarations: [_category_details_page__WEBPACK_IMPORTED_MODULE_1__.CategoryDetailsPage]
    })
], CategoryDetailsPageModule);



/***/ }),

/***/ 92647:
/*!*******************************************************************!*\
  !*** ./src/app/modules/category-details/category-details.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDetailsPage": () => (/* binding */ CategoryDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
<<<<<<< HEAD
/* harmony import */ var _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./category-details.page.html */ 39917);
=======
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./category-details.page.html */ 39917);
>>>>>>> 834fbd3340ffd4e17fcb852b513b68d626caa195
/* harmony import */ var _category_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-details.page.scss */ 13576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/favourites/favourites.service */ 62700);
/* harmony import */ var src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/items/items.service */ 17118);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-modal/image-modal.page */ 90098);












let CategoryDetailsPage = class CategoryDetailsPage {
    constructor(menuCtrl, langaugeservice, util, auth, plt, items, activatedRoute, favouritesService, router, modalCtrl) {
        this.menuCtrl = menuCtrl;
        this.langaugeservice = langaugeservice;
        this.util = util;
        this.auth = auth;
        this.plt = plt;
        this.items = items;
        this.activatedRoute = activatedRoute;
        this.favouritesService = favouritesService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.lat = 0;
        this.long = 0;
        this.infowindow = new google.maps.InfoWindow();
        this.configSlider = {
            slidesPerView: 3.5,
            spaceBetween: 6,
            pagination: false,
            breakpoints: {
                '@0.75': {
                    slidesPerView: 4.3,
                    spaceBetween: 10,
                },
                '@1.00': {
                    slidesPerView: 5.4,
                    spaceBetween: 10,
                },
                '@1.50': {
                    slidesPerView: 6.5,
                    spaceBetween: 10,
                },
            },
        };
        this.dataLoaded = false;
        this.platform = this.util.platform;
    }
    ngOnInit() {
        this.currentlangauge = this.langaugeservice.getLanguage();
        this.getItemDetails();
    }
    getItemDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.departmentData = {
                lang: this.langaugeservice.getLanguage(),
                department_id: parseInt(this.activatedRoute.snapshot.paramMap.get('departmetId')),
                user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
            };
            yield this.util.showLoadingSpinner().then((__) => {
                this.items.showDepartmentByID(this.departmentData).subscribe((data) => {
                    if (data.key == 1) {
                        this.dataLoaded = true;
                        this.itemDetails = data.data;
                        this.lat = this.itemDetails.lat;
                        this.long = this.itemDetails.lng;
                        this.loadMap();
                        this.loadItemPosition();
                    }
                    this.util.dismissLoading();
                }, (err) => {
                    this.util.dismissLoading();
                });
            });
        });
    }
    loadMap() {
        let latLng = new google.maps.LatLng(this.lat, this.long);
        let styles = [
            {
                featureType: 'poi',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
        ];
        let mapOptions = {
            center: latLng,
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: styles,
            mapTypeControl: false,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
    loadItemPosition() {
        this.plt.ready().then(() => {
            this.focusMap(this.lat, this.long);
            this.addMarker(this.lat, this.long);
        });
    }
    focusMap(lat, lng) {
        let latLng = new google.maps.LatLng(lat, lng);
        this.map.setCenter(latLng);
        this.map.setZoom(15);
    }
    addMarker(lat, lng) {
        let latLng = new google.maps.LatLng(lat, lng);
        this.home = new google.maps.Marker({
            map: this.map,
            position: latLng,
            animation: google.maps.Animation.DROP,
            icon: '',
        });
    }
    openMenu() {
        this.menuCtrl.open();
    }
    reserve() { }
    addToFavourite() {
        // this.auth.getUserIDObservable().subscribe((val) => {
        //   if (val != 0) {
        this.favDepartmentData = {
            lang: this.langaugeservice.getLanguage(),
            user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
            department_id: parseInt(this.activatedRoute.snapshot.paramMap.get('departmetId')),
        };
        //   }
        // });
        this.util.showLoadingSpinner().then((__) => {
            this.favouritesService
                .addRemoveFavourite(this.favDepartmentData)
                .subscribe((data) => {
                if (data.key == 1) {
                    this.itemDetails.is_favourite = !this.itemDetails.is_favourite;
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
    storeOrder() {
        var _a, _b;
        console.log('is logined : ' + this.auth.isAuthenticated.value);
        if (this.auth.isAuthenticated.value) {
            this.util.setClosedDates((_a = this.itemDetails) === null || _a === void 0 ? void 0 : _a.closed_date);
            this.router.navigate(['/tabs/main/reservation/', (_b = this.itemDetails) === null || _b === void 0 ? void 0 : _b.id]);
        }
        else {
            this.util.showMessage('login now');
            this.router.navigateByUrl('/login-register');
        }
    }
    openPreview(itemImages, currentImage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__.ImageModalPage,
                cssClass: 'transparent-modal',
                componentProps: {
                    images: itemImages,
                    imageID: currentImage
                },
            });
            modal.present();
        });
    }
    doRefresh($event) {
        this.departmentData = {
            lang: this.langaugeservice.getLanguage(),
            department_id: parseInt(this.activatedRoute.snapshot.paramMap.get('departmetId')),
            user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
        };
        this.items.showDepartmentByID(this.departmentData).subscribe((data) => {
            if (data.key == 1) {
                this.dataLoaded = true;
                this.itemDetails = data.data;
                this.lat = this.itemDetails.lat;
                this.long = this.itemDetails.lng;
                this.loadMap();
                this.loadItemPosition();
            }
            $event.target.complete();
        }, (err) => {
            $event.target.complete();
        });
    }
};
CategoryDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_6__.UtilitiesService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: src_app_services_items_items_service__WEBPACK_IMPORTED_MODULE_4__.ItemsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_3__.FavouritesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
CategoryDetailsPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['map', { static: false },] }]
};
CategoryDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-category-details',
<<<<<<< HEAD
        template: _Users_efadhmac_Desktop_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
=======
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
>>>>>>> 834fbd3340ffd4e17fcb852b513b68d626caa195
        styles: [_category_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryDetailsPage);



/***/ }),

/***/ 39917:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/category-details/category-details.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"'details'\"\n  [isEditable]=\"false\"\n  [backwardRoute]='\"/tabs/main/categories\"'\n  [isMain]=\"false\"\n  [categoryId]=\"itemDetails?.section_id\"\n  class=\"header-height\"\n></app-header>\n\n<ion-content class=\"ion-padding\" >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"item-image\" *ngIf=\"itemDetails\">\n    <img [src]=\"itemDetails?.first_image\" />\n    <ion-icon\n      (click)=\"addToFavourite()\"\n      [ngClass]=\"currentlangauge =='ar' ?'fav-ar':'fav-en' \"\n      [src]=\"itemDetails?.is_favourite ? './../../../assets/icon/fav-active.svg' :'./../../../assets/icon/fav-inactive.svg'\"\n    >\n    </ion-icon>\n\n    <div class=\"details-container ion-padding\">\n      <app-custom-details\n        [ItemDetails]=\"itemDetails\"\n        [isDetailed]=\"true\"\n      ></app-custom-details>\n    </div>\n  </div>\n\n  <div class=\"services\" *ngIf=\"itemDetails\">\n    <div>\n      <ion-icon src=\"./../../../assets/icon/icon1.svg\"></ion-icon>\n      <p class=\"fn-14 dalel-Regular secondary-color\">\n        {{itemDetails?.section_title}}\n      </p>\n    </div>\n    <div>\n      <ion-icon src=\"./../../../assets/icon/space.svg\"></ion-icon>\n      <p class=\"fn-14 dalel-Regular secondary-color\">\n        {{itemDetails?.area}} {{'meter square'|translate}}\n      </p>\n    </div>\n    <div>\n      <ion-icon src=\"./../../../assets/icon/bed.svg\"></ion-icon>\n      <p class=\"fn-14 dalel-Regular secondary-color\">\n        {{itemDetails?.rooms_count}} {{'rooms'|translate}}\n      </p>\n    </div>\n    <div>\n      <ion-icon src=\"./../../../assets/icon/icon4.svg\"></ion-icon>\n      <p class=\"fn-14 dalel-Regular secondary-color\">\n        {{itemDetails?.bathrooms_count}} {{'bathroom'|translate}}\n      </p>\n    </div>\n  </div>\n\n  <div class=\"description\" *ngIf=\"itemDetails\">\n    <h5 class=\"fn-16 dalel-SemiBold\">{{\"description\"|translate}}</h5>\n    <p class=\"fn-12 dalel-Regular\">{{itemDetails?.desc}}</p>\n  </div>\n\n  <div class=\"place-images\" *ngIf=\"itemDetails\">\n    <div class=\"header\">\n      <div>\n        <h5 class=\"fn-16 dalel-SemiBold\">{{\"place-images\"|translate}}</h5>\n      </div>\n      <div>\n        <ion-icon src=\"./../../../assets/icon/place.svg\"></ion-icon>\n      </div>\n    </div>\n\n    <swiper\n      #swiper\n      [config]=\"configSlider\"\n      class=\"custom-swiper\"\n      [dir]=\"currentlangauge == 'ar' ? 'rtl' : 'ltr'\"\n    >\n      <ng-template swiperSlide *ngFor=\"let image of itemDetails?.images; let i = index\" >\n        <img (click)=\"openPreview(itemDetails?.images,i)\" class=\"slider-image\" [src]=\"image.image\" />\n      </ng-template>\n    </swiper>\n  </div>\n\n  <div class=\"map-container\">\n    <div class=\"header\" *ngIf=\"itemDetails\">\n      <div>\n        <h5 class=\"fn-16 dalel-SemiBold\">{{\"map\"|translate}}</h5>\n      </div>\n    </div>\n    <div #map class=\"map\"></div>\n  </div>\n\n  <div class=\"rules\" *ngIf=\"itemDetails\">\n    <div class=\"header\">\n      <h5 class=\"fn-16 dalel-SemiBold\">{{\"reservation-rules\"|translate}}</h5>\n    </div>\n    <div>\n      <p class=\"fn-12 dalel-Regular\">{{itemDetails?.order_desc}}</p>\n    </div>\n  </div>\n\n  <ion-button expand=\"block\" (click)=\" storeOrder()\" *ngIf=\"itemDetails\">\n    <span class=\"fn-16 white-color dalel-Bold\">\n      {{ \"reserve now\"|translate}}\n    </span>\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ 13576:
/*!*********************************************************************!*\
  !*** ./src/app/modules/category-details/category-details.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".item-image {\n  position: relative;\n}\n.item-image img {\n  border-radius: 16px;\n  width: 100%;\n  filter: brightness(0.53);\n}\n.item-image .fav-ar {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n}\n.item-image .fav-en {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.details-container {\n  position: absolute;\n  width: 92%;\n  margin: 0 var(--ion-padding, 16px);\n  bottom: -60px;\n  border-radius: 10px;\n  background-color: var(--ion-color-orange-light);\n}\n.item-details {\n  position: absolute;\n  width: 92%;\n  margin: 0 var(--ion-padding, 16px);\n  bottom: -60px;\n  border-radius: 10px;\n  background-color: var(--ion-color-orange-light);\n}\n.item-details .name-rating-container {\n  display: flex;\n  justify-content: space-between;\n}\n.item-details .name-rating-container .name {\n  flex-direction: row;\n}\n.item-details .name-rating-container .name h5 {\n  margin-top: 6px !important;\n}\n.item-details .name-rating-container .rating .rating-address-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-details .name-rating-container .rating .rating-address-container div {\n  flex-direction: row;\n  display: flex;\n}\n.item-details .name-rating-container .rating .rating-address-container .address-container ion-icon {\n  font-size: 18px;\n  height: 20px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container {\n  background-color: var(--ion-color-primary);\n  border-radius: 5px;\n  padding: 12px 6px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container ion-icon {\n  font-size: 12px;\n}\n.item-details .name-rating-container .rating .rating-address-container .rating-container span {\n  margin: -6px 4px;\n}\n.item-details .address-price-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-details .address-price-container .address,\n.item-details .address-price-container .price {\n  flex-direction: row;\n}\n.item-details .address-price-container .address p,\n.item-details .address-price-container .price p {\n  display: inline-block;\n  margin: 0px;\n}\n.services {\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n  background-color: var(--ion-color-white-gray);\n  padding: 17px 13px;\n  margin-top: 70px;\n  margin-bottom: 24px;\n  box-shadow: var(--custom-box-shadow);\n}\n.services div {\n  flex-direction: row;\n  text-align: center;\n}\n.services div p {\n  margin: 0px;\n}\n.description {\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 10px;\n  padding: 12px;\n  margin-bottom: 16px;\n}\n.description h5 {\n  margin: 0px;\n}\n.description p {\n  color: rgb(var(--ion-color-dark-black-rgb), 0.55);\n}\n.place-images {\n  margin-bottom: 16px;\n}\n.place-images img {\n  border-radius: 10px;\n}\n.place-images .header {\n  display: flex;\n  justify-content: space-between;\n}\n.place-images .header h5 {\n  margin-bottom: 8px;\n  margin-top: 0px;\n}\n.place-images .header div {\n  flex-direction: row;\n}\n.map-container .map {\n  height: 200px;\n  border: 1px solid #80808042;\n  border-radius: 10px;\n}\n.rules p {\n  color: rgb(var(--ion-color-dark-black-rgb), 0.55);\n}\nion-button::part(native) {\n  height: 50px !important;\n  background-image: linear-gradient(to left, var(--ion-color-primary), var(--ion-color-secondary));\n}\n.slider-image {\n  height: 100px;\n  width: 100px;\n  object-fit: cover;\n  object-position: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBREo7QUFLQTtFQUNFLGtCQUFBO0VBRUEsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFIRjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUZGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFESjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjtBQUNNO0VBQ0UsMEJBQUE7QUFDUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUVRO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBQVY7QUFJVTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRlo7QUFNUTtFQVFFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVhWO0FBRVU7RUFDRSxlQUFBO0FBQVo7QUFFVTtFQUNFLGdCQUFBO0FBQVo7QUFXRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFVSTs7RUFFRSxtQkFBQTtBQVJOO0FBU007O0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBTlI7QUFZQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQVRGO0FBVUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFTSTtFQUNFLFdBQUE7QUFQTjtBQVlBO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVRGO0FBVUU7RUFDRSxXQUFBO0FBUko7QUFVRTtFQUNFLGlEQUFBO0FBUko7QUFZQTtFQUNFLG1CQUFBO0FBVEY7QUFVRTtFQUNFLG1CQUFBO0FBUko7QUFVRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQVJKO0FBU0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFQTjtBQVNJO0VBQ0UsbUJBQUE7QUFQTjtBQWFFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWVFO0VBQ0UsaURBQUE7QUFaSjtBQW1CRTtFQUNFLHVCQUFBO0VBQ0EsZ0dBQUE7QUFoQko7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUF0QkYiLCJmaWxlIjoiY2F0ZWdvcnktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNTMpO1xuICB9XG5cbiAgLmZhdi1hciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTZweDtcbiAgICBsZWZ0OiAxNnB4O1xuICB9XG5cbiAgLmZhdi1lbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTZweDtcbiAgICByaWdodDogMTZweDtcbiAgfVxufVxuXG4uZGV0YWlscy1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiBcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiAwIHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgYm90dG9tOiAtNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW9yYW5nZS1saWdodCk7XG59XG4uaXRlbS1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDAgdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBib3R0b206IC02MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itb3JhbmdlLWxpZ2h0KTtcbiAgLm5hbWUtcmF0aW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLm5hbWUge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGg1IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5yYXRpbmcge1xuICAgICAgLnJhdGluZy1hZGRyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkcmVzcy1jb250YWluZXIge1xuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmF0aW5nLWNvbnRhaW5lciB7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTZweCA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hZGRyZXNzLXByaWNlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuYWRkcmVzcyxcbiAgICAucHJpY2Uge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHAge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2VydmljZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWlvbi1jb2xvci13aGl0ZS1ncmF5KTtcbiAgcGFkZGluZzogMTdweCAxM3B4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1jdXN0b20tYm94LXNoYWRvdyk7Ly8wIDNweCA2cHggcmdiKDAgMCAwIC8gMTYlKTsgXG4gIGRpdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGg1IHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBwIHtcbiAgICBjb2xvcjogcmdiKHZhcigtLWlvbi1jb2xvci1kYXJrLWJsYWNrLXJnYiksIDAuNTUpO1xuICB9XG59XG5cbi5wbGFjZS1pbWFnZXMge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaDUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gIH1cbn1cblxuLm1hcC1jb250YWluZXIge1xuICAubWFwIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA0MjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbi5ydWxlcyB7XG4gIHAge1xuICAgIGNvbG9yOiByZ2IodmFyKC0taW9uLWNvbG9yLWRhcmstYmxhY2stcmdiKSwgMC41NSk7XG4gIH1cbn1cblxuXG5cbmlvbi1idXR0b257XG4gICY6OnBhcnQobmF0aXZlKXtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBsZWZ0LFxuICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgICAgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSlcbiAgICApO1xuICB9XG59XG5cblxuLnNsaWRlci1pbWFnZXtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiByaWdodDtcbn1cblxuXG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_category-details_category-details_module_ts.js.map