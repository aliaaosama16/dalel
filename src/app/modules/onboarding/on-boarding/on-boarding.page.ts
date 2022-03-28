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
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import {  Intro, IntroData } from 'src/app/models/intro';
import { GeneralService } from 'src/app/services/general/general.service';

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
  nextClicked: number = 0;
  currentlangauge: string;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: true,
    //allowTouchMove: false,
  };
  introData: Intro;
  getIntro:boolean=false;

  constructor(
    private langaugeservice: LanguageService,
    private router: Router,
    private menuCtrl: MenuController,
    private util: UtilitiesService,
    private general: GeneralService
  ) {
    this.menuCtrl.enable(false, 'main');
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
    this.getIntroData();
  }

  async skipBoarding() {
    console.log('skip boarding pages');
    //this.setBoarding();
    this.router.navigateByUrl('/tabs/main');
  }

  getIntroData() {
    this.util.showLoadingSpinner().then((__) => {
      this.general.intro().subscribe(
        (data: Intro) => {
          this.introData = data;
          console.log('INTRO ' + JSON.stringify(this.introData));
          this.util.dismissLoading();
          this.getIntro=true;
        },
        (err) => {
          this.util.dismissLoading();
          this.getIntro=false;
        }
      );
    });
  }

  nextSlide(ev) {
    console.log('pointerId : ' + ev.pointerId);
    if (this.nextClicked < 3) {
      this.nextClicked++;
    } else {
      // this.setBoarding();

      // this.router.navigateByUrl('/tabs/main');
    }
  }

  start(){
    this.setBoarding();

      this.router.navigateByUrl('/tabs/main');
  }

  async setBoarding() {
    await Storage.set({
      key: 'openBoarding',
      value: 'true',
    });
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
