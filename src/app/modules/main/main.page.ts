import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime, MenuController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { SwiperOptions } from 'swiper';
import { FilterData, Item } from 'src/app/models/item';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ItemsService } from 'src/app/services/items/items.service';
import {
  GeneralSection,
  GeneralSectionResponse,
  UserData,
} from 'src/app/models/general';
import { HomeResponse } from 'src/app/models/home';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  searchText: string = '';
  currentlangauge: string;
  platform: string = '';
  UserData: UserData;

  configSlider: SwiperOptions;
  configCategories: SwiperOptions = {
    slidesPerView: 2.1,
    spaceBetween: 10,
    pagination: false,
    breakpoints: {
      '@0.75': {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 4.3,
        spaceBetween: 10,
      },
      '@1.50': {
        slidesPerView: 5.4,
        spaceBetween: 10,
      },
    },
  };

  configNearBy: SwiperOptions = {
    slidesPerView: 2.3,
    spaceBetween: 10,
    pagination: false,
    breakpoints: {
      '@0.75': {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 4.4,
        spaceBetween: 10,
      },
      '@1.50': {
        slidesPerView: 5.5,
        spaceBetween: 10,
      },
    },
  };
  sections: GeneralSectionResponse[];

  nearDepartments: Item[];
  Sliders: GeneralSectionResponse[];
  filterData: FilterData;
  constructor(
    private menuCtrl: MenuController,
    public modalController: ModalController,
    private langaugeservice: LanguageService,
    private router: Router,
    private dataService: DataService,
    public util: UtilitiesService,
    private auth: AuthService,
    private items: ItemsService
  ) {
    this.menuCtrl.enable(true, 'main');
    this.util.getUserLocation();
    this.platform = this.util.platform;
    this.currentlangauge = this.langaugeservice.getLanguage();
    this.auth.getUserToken();
    this.UserData = {
      lang: this.langaugeservice.getLanguage(),
      user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
    };
    this.getHomeData(this.UserData);
  }

  ngOnInit() {
    this.configSlider = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: true,
      effect: 'fade',
      autoplay: true,
    };
  }

  getDate($event) {
    console.log($event.target.value);
  }

  isDateEnabled(dateIsoString) {
    const date = new Date(dateIsoString);
    if (
      date.getUTCFullYear() === 2022 &&
      date.getUTCMonth() === 0 &&
      date.getUTCDate() === 1
    ) {
      return false;
    }
    return true;
  }
  
  getHomeData(userData: UserData) {
    this.util.showLoadingSpinner().then((__) => {
      this.items.home(userData).subscribe(
        (data: HomeResponse) => {
          if (data.key == 1) {
            this.sections = data.data.sections;
            this.Sliders = data.data.sliders;
            this.nearDepartments = data.data.near_departments;
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

  categoryList(categoryName, categoryID) {
    this.dataService.setData(categoryID, categoryName);
    this.router.navigateByUrl(`/tabs/main/categories/${categoryID}`);
  }

  showResults() {
    console.log(`this.searchText is ${this.searchText}`);
    if (this.searchText != '') {
      this.getItemsByFilters(this.searchText);
    } else {
      this.util.showMessage('please enter search text');
    }
  }

  getItemsByFilters(searcText: string) {
    this.filterData = {
      user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
      title: searcText,
      lang: this.langaugeservice.getLanguage(),
    };

    this.util.setFilters(this.filterData);

    console.log('filters ' + JSON.stringify(this.filterData));
    this.router.navigate(['/tabs/main/search-results']);
  }

  showAllCategories() {
    this.router.navigateByUrl('/tabs/main/categories');
  }

  openCatList(catID, catName) {
    this.dataService.setData(catID, catName);
    this.router.navigateByUrl(`/tabs/main/categories/${catID}`);
  }

  doRefresh($event) {
    this.UserData = {
      lang: this.langaugeservice.getLanguage(),
      user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
    };
    this.items.home(this.UserData).subscribe(
      (data: HomeResponse) => {
        if (data.key == 1) {
          this.sections = data.data.sections;
          this.Sliders = data.data.sliders;
          this.nearDepartments = data.data.near_departments;
        }
        $event.target.complete();
      },
      (err) => {
        $event.target.complete();
      }
    );
  }
}
