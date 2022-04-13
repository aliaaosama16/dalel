import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { GeneralResponse } from 'src/app/models/general';
import {
  AddRemoveFavourite,
  DepartmentDetailsResponse,
  Item,
} from 'src/app/models/item';
import { ShowDepartmetData } from 'src/app/models/sections';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FavouritesService } from 'src/app/services/favourites/favourites.service';
import { ItemsService } from 'src/app/services/items/items.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { SwiperOptions } from 'swiper';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: google.maps.Map;
  home: google.maps.Marker;
  lat: number = 0;
  long: number = 0;
  infowindow = new google.maps.InfoWindow();
  departmentData: ShowDepartmetData;
  favDepartmentData: AddRemoveFavourite;
  currentlangauge: string;
  platform: any;
  configSlider: SwiperOptions = {
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
  itemDetails: Item;
  dataLoaded: boolean = false;
  constructor(
    private menuCtrl: MenuController,
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private auth: AuthService,
    private plt: Platform,
    private items: ItemsService,
    private activatedRoute: ActivatedRoute,
    private favouritesService: FavouritesService,
    private router: Router,
    private modalCtrl: ModalController
  ) {
    this.platform = this.util.platform;
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    this.getItemDetails();
  }

  async getItemDetails() {
    this.departmentData = {
      lang: this.langaugeservice.getLanguage(),
      department_id: parseInt(
        this.activatedRoute.snapshot.paramMap.get('departmetId')
      ),
      user_id: this.auth.userID.value,
    };

    await this.util.showLoadingSpinner().then((__) => {
      this.items.showDepartmentByID(this.departmentData).subscribe(
        (data: DepartmentDetailsResponse) => {
          if (data.key == 1) {
            this.dataLoaded = true;
            this.itemDetails = data.data;
            this.lat = this.itemDetails.lat;
            this.long = this.itemDetails.lng;
            this.loadMap();
            this.loadItemPosition();
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  loadMap() {
    let latLng = new google.maps.LatLng(this.lat, this.long);

    let styles: google.maps.MapTypeStyle[] = [
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ];

    let mapOptions: google.maps.MapOptions = {
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

  reserve() {}

  addToFavourite() {
    // this.auth.getUserIDObservable().subscribe((val) => {
    //   if (val != 0) {
    this.favDepartmentData = {
      lang: this.langaugeservice.getLanguage(),
      user_id: this.auth.userID.value, //val,
      department_id: parseInt(
        this.activatedRoute.snapshot.paramMap.get('departmetId')
      ),
    };
    //   }
    // });

    this.util.showLoadingSpinner().then((__) => {
      this.favouritesService
        .addRemoveFavourite(this.favDepartmentData)
        .subscribe(
          (data: GeneralResponse) => {
            if (data.key == 1) {
              this.itemDetails.is_favourite = !this.itemDetails.is_favourite;
            }
            this.util.dismissLoading();
          },
          (err) => {
            this.util.dismissLoading();
          }
        );
    });
  }

  storeOrder() {
    console.log('is logined : ' + this.auth.isAuthenticated.value);
    if (this.auth.isAuthenticated.value) {
      this.util.setClosedDates(this.itemDetails?.closed_date);
      this.router.navigate(['/tabs/main/reservation/', this.itemDetails?.id]);
    } else {
      this.util.showMessage('login now');
      this.router.navigateByUrl('/login-register');
    }
  }

  async openPreview(itemImages) {
    const modal = await this.modalCtrl.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        images: itemImages,
      },
    });
    modal.present();
  }

  doRefresh($event) {
    this.departmentData = {
      lang: this.langaugeservice.getLanguage(),
      department_id: parseInt(
        this.activatedRoute.snapshot.paramMap.get('departmetId')
      ),
      user_id: this.auth.userID.value,
    };

      this.items.showDepartmentByID(this.departmentData).subscribe(
        (data: DepartmentDetailsResponse) => {
          if (data.key == 1) {
            this.dataLoaded = true;
            this.itemDetails = data.data;
            this.lat = this.itemDetails.lat;
            this.long = this.itemDetails.lng;
            this.loadMap();
            this.loadItemPosition();
          }
          $event.target.complete();
        },
        (err) => {
          $event.target.complete();
        }
      );
   
  }
}
