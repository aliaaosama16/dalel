import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { SwiperOptions } from 'swiper';
import { SearchFilterPage } from '../search-filter/search-filter.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  searchText: string;
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
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  async openFilterModal() {
    const modal = await this.modalController.create({
      component: SearchFilterPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
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
