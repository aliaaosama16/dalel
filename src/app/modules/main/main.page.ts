import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { SwiperOptions } from 'swiper';
import { TranslateService } from '@ngx-translate/core';
import { ItemDetails } from 'src/app/models/itemDetails';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

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
    pagination: {
      el:'.swiper-pagination',
      clickable:true
    },
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

  categoryItems: ItemDetails[] = [
    {
      id: 1,
      catID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      address: 'حي الرمال',
      rating: '3+',
      price: 3000,
      unit: 'currency',
      perUnit: 'one night',
      isFav: true,
      description: '',
      reservationRules: '',
      image: './../../../assets/images/1024-500.png',
      leftTime: '',
    },
    {
      id: 1,
      catID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      address: 'حي الرمال',
      rating: '3+',
      price: 3000,
      unit: 'currency',
      perUnit: 'one night',
      isFav: true,
      description: '',
      reservationRules: '',
      image: './../../../assets/images/1024-500.png',
      leftTime: '',
    },
    {
      id: 1,
      catID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      address: 'حي الرمال',
      rating: '3+',
      price: 3000,
      unit: 'currency',
      perUnit: 'one night',
      isFav: true,
      description: '',
      reservationRules: '',
      image: './../../../assets/images/1024-500.png',
      leftTime: '',
    },
  ];

  constructor(
    private menuCtrl: MenuController,
    public modalController: ModalController,
    private langaugeservice: LanguageService,
    private router: Router,
    private dataService: DataService,
    private utilities: UtilitiesService
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
      this.utilities.showMessage('please enter search text');
    }
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

  // this.utilities.showLoadingSpinner().then((__) => {
  //   this.loanCalcService.getSocialStatus(gender).subscribe(
  //     (data) => {
  //       // console.log(data);
  //       this.socialStatus = data;
  //       this.utilities.dismissLoading();
  //     },
  //     (err) => {
  //       this.utilities.dismissLoading();
  //     }
  //   );
  // });
}
