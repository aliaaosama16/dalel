import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
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

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: google.maps.Map;
  home: google.maps.Marker;
  lat: number=0;
  long: number=0;
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
  constructor(
    private menuCtrl: MenuController,
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private auth: AuthService,
    private plt: Platform,
    private items: ItemsService,
    private activatedRoute: ActivatedRoute,
    private favouritesService: FavouritesService
  ) {
    this.platform = this.util.platform;
   
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  ionViewWillEnter() {
    console.log(
      'dept id :' +
        parseInt(this.activatedRoute.snapshot.paramMap.get('departmetId'))
    );
    this.getItemDetails();
    this.loadMap();
    this.loadItemPosition();
  }

  getItemDetails() {
    this.auth.getUserIDObservable().subscribe((val) => {
      this.departmentData = {
        lang: this.langaugeservice.getLanguage(),
        department_id: parseInt(
          this.activatedRoute.snapshot.paramMap.get('departmetId')
        ),
        user_id: val == 0 ? 1 : val,
      };
    });

    this.util.showLoadingSpinner().then((__) => {
      this.items.showDepartmentByID(this.departmentData).subscribe(
        (data: DepartmentDetailsResponse) => {
          if (data.key == 1) {
            console.log('showDepartmentByID data : ' + JSON.stringify(data));
            this.itemDetails = data.data;
            this.lat = this.itemDetails.lat;
            this.long = this.itemDetails.lng;
            console.log('lat is :'+ this.lat + 'long is :'+  this.long)
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

      // this.addMarker(
      //   31.0283322, 31.3617836,
      //   '<b>My castle</b><br>Come and get your princess'
      // );
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

    // ------------ info window for item --------------- //
    // let infoWindow = new google.maps.InfoWindow({
    //   content: info
    // });
    // this.home.addListener('click', () => {
    //   infoWindow.open(this.map, this.home);
    // });
  }

  openMenu() {
    this.menuCtrl.open();
  }

  reserve() {}

  addToFavourite() {
    this.auth.getUserIDObservable().subscribe((val) => {
      console.log('get id from behavour subject if just logined' + val);
      if (val != 0) {
        this.favDepartmentData = {
          lang: this.langaugeservice.getLanguage(),
          user_id: val,
          department_id: parseInt(
            this.activatedRoute.snapshot.paramMap.get('departmetId')
          ),
        };
      }
    });

    this.util.showLoadingSpinner().then((__) => {
      this.favouritesService
        .addRemoveFavourite(this.favDepartmentData)
        .subscribe(
          (data: GeneralResponse) => {
            if (data.key == 1) {
              console.log('addRemoveFavourite : ' + JSON.stringify(data));
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
}
