import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { SwiperOptions } from 'swiper';
import { SearchFilterPage } from '../search-filter/search-filter.page';
import { Toast } from '@capacitor/toast';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  searchText: string = '';
  currentlangauge: string;

  configSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: true,
  };
  configContent: SwiperOptions = {
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

  categories: any[] = [
    { id: 1, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 2, name: 'chalets', image: './../../../assets/images/1024-500.png' },
    { id: 3, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 4, name: 'chalets', image: './../../../assets/images/1024-500.png' },
    { id: 5, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 6, name: 'chalets', image: './../../../assets/images/1024-500.png' },
    { id: 7, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 8, name: 'chalets', image: './../../../assets/images/1024-500.png' },
    { id: 9, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 10, name: 'rests', image: './../../../assets/images/1024-500.png' },
  ];

  categoryItems: any[] = [
    {
      name: 'اسم تجريبي',
      location: 'الرياض',
      image: './../../../assets/images/1024-500.png',
      id: 1,
    },
    {
      name: 'اسم تجريبي',
      location: 'الرياض',
      image: './../../../assets/images/1024-500.png',
      id: 2,
    },
    {
      name: 'اسم تجريبي',
      location: 'الرياض',
      image: './../../../assets/images/1024-500.png',
      id: 3,
    },
    {
      name: 'اسم تجريبي',
      location: 'الرياض',
      image: './../../../assets/images/1024-500.png',
      id: 4,
    },
    {
      name: 'اسم تجريبي',
      location: 'الرياض',
      image: './../../../assets/images/1024-500.png',
      id: 5,
    },
    {
      name: 'اسم تجريبي',
      location: 'الرياض',
      image: './../../../assets/images/1024-500.png',
      id: 6,
    },
    {
      name: 'اسم تجريبي',
      location: 'الرياض',
      image: './../../../assets/images/1024-500.png',
      id: 7,
    },
    {
      name: 'اسم تجريبي',
      location: 'الرياض',
      image: './../../../assets/images/1024-500.png',
      id: 8,
    },
  ];

  constructor(
    private menuCtrl: MenuController,
    public modalController: ModalController,
    private langaugeservice: LanguageService,
    private router: Router,
    private dataService: DataService,
    private translate: TranslateService
  ) {
    this.menuCtrl.enable(true, 'main');
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
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
      this.router.navigateByUrl('/tabs/main/search-results');
    } else {
      this.errorMessage();
    }
  }

  async errorMessage() {
    await Toast.show({
      text: this.translate.instant('please enter search text'),
    });
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
}
