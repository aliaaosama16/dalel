import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ShowLanguagePageGuard } from './guards/language/show-language-page.guard';
import { LanguageService } from './services/language/language.service';
import { UtilitiesService } from './services/utilities/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentLanguage: string = '';
  selectedIndex: number = 0;

  pages = [
    {
      title: 'main',
      url: '/tabs/main',
      iconActive: './../assets/icon/home-active.svg',
      iconInActive: './../assets/icon/home-inactive.svg',
    },
    {
      title: 'contact-us',
      url: '/tabs/main/contact-us',
      iconActive: './../assets/icon/contact-active.svg',
      iconInActive: './../assets/icon/contact-inactive.svg',
    },
    {
      title: 'policy',
      url: '/tabs/main/policy',
      iconActive: './../assets/icon/policy-active.svg',
      iconInActive: './../assets/icon/policy-inactive.svg',
    },
    {
      title: 'about',
      url: '/tabs/main/about',
      iconActive: './../assets/icon/about-active.svg',
      iconInActive: './../assets/icon/about-inactive.svg',
    },
    {
      title: 'favourites',
      url: '/tabs/main/favourites',
      iconActive: './../assets/icon/heart-active.svg',
      iconInActive: './../assets/icon/heart-inactive.svg',
    },
  ];
  constructor(
    private platform: Platform,
    private languageService: LanguageService,
    private langaugeGuard: ShowLanguagePageGuard,
    private util: UtilitiesService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.languageService.setInitialAppLanguage();
      this.currentLanguage = this.languageService.getLanguage();
      console.log(`language is ${this.currentLanguage}`);
      this.util.getPlatformType().then((val) => {
        this.util.setPlatform(val);
      });

      this.util.getDeviceID();
      // .then((val) => {
      //   console.log('device data'+JSON.stringify(val))
      //   this.util.setDeviceID(val);
      // });
    });
  }
}
