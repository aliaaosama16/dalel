import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
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
})
export class MainPage implements OnInit {
  searchText: string = '';
  currentlangauge: string;
  platform: string = '';
  UserData: UserData;

  configSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: true
    // {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  };
  configCategories: SwiperOptions = {
    slidesPerView: 2.5,
    spaceBetween: 10,
    pagination: false,
    breakpoints: {
      '@0.75': {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 4.6,
        spaceBetween: 10,
      },
      '@1.50': {
        slidesPerView: 5.7,
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
    console.log('curret plt is ' + this.platform);
  }
  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
    this.auth.getUserToken();
    console.log(this.auth.userToken);
    this.auth.getUserIDObservable().subscribe((val) => {
      this.UserData = {
        lang: this.langaugeservice.getLanguage(),
        user_id: val == 0 ? 1 : val,
      };
      this.getHomeData(this.UserData);
    });
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
    this.auth.getUserIDObservable().subscribe((val) => {
      console.log('user id :' + val);
      this.filterData = {
        user_id: val,
        title: searcText,
        lang: this.currentlangauge,
      };
    });

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

  slideNext() {
    // const swiper = document.querySelector('.swiper').swiper;
    // Now you can use all slider methods like
    // swiper.slideNext();
  }

  doRefresh($event){
    this.auth.getUserIDObservable().subscribe((val) => {
      this.UserData = {
        lang: this.langaugeservice.getLanguage(),
        user_id: val == 0 ? 1 : val,
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
    });
  }
}
