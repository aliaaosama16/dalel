import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import Swiper, {
  Navigation,
  Pagination,
  SwiperOptions,
  EffectCards,
} from 'swiper';
Swiper.use([Navigation, Pagination, EffectCards]);

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OnBoardingPage implements OnInit {
  currentlangauge: string;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: true,
  };

  constructor(
    private langaugeservice: LanguageService,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, 'main');
  }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  // }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  skipBoarding() {
    console.log('skip boarding pages');
    this.router.navigateByUrl('/login-register');
  }
}
