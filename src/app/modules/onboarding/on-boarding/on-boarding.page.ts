import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import Swiper, {
  Navigation,
  Pagination,
  SwiperOptions,
  EffectCards,
  EffectFade,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Storage } from '@capacitor/storage';

Swiper.use([Navigation, Pagination, EffectCards, EffectFade]);

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OnBoardingPage implements OnInit, AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;
  slidingNotAvailable: boolean = false;
  currentlangauge: string;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: true,
    allowTouchMove:false
  };

  constructor(
    private langaugeservice: LanguageService,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, 'main');
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  async skipBoarding() {
    console.log('skip boarding pages');

    await Storage.set({
      key: 'openBoarding',
      value: 'true',
    });
    this.router.navigateByUrl('/tabs/main');
  }

  nextSlide(ev) {
    console.log('pointerId : ' + ev.pointerId);
    if (ev.pointerId <= 5 && ev.pointerId >= 3) {
      this.swiper.swiperRef.slideNext(500);
    } else {
      this.slidingNotAvailable = true;
    }
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  swiperSlideChanged(e) {
    console.log('changed: ', e);
  }
}
