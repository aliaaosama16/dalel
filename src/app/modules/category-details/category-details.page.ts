import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ItemDetails } from 'src/app/models/itemDetails';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {
  currentlangauge: string;
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
  itemDetails: ItemDetails = {
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
    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسومهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم',
    reservationRules: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسومهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم',
    image: '',
    leftTime: '',
    roomsNumber: 10,
    space: 450,
    bathRoomsNUmber:4,
  
  };
  constructor(
    private menuCtrl: MenuController,
    private langaugeservice: LanguageService,
    private authService: AuthService,
    private util: UtilitiesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  reserve() {}

  addToFavourite() {
    this.itemDetails.isFav = !this.itemDetails.isFav;

    if (this.authService.logined.value) {
      // call api to add to favourite
    } else {
      this.util.showMessage('please login first');
      this.router.navigateByUrl('/login-register');
      return this.authService.logined.value;
    }
  }
}
