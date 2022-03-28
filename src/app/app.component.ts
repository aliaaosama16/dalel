import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ShowLanguagePageGuard } from './guards/language/show-language-page.guard';
import { AuthData, AuthResponse } from './models/loginData';
import { AuthService } from './services/auth/auth.service';
import { LanguageService } from './services/language/language.service';
import { UtilitiesService } from './services/utilities/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentLanguage: string = '';
  selectedIndex: number;
  logoutData: AuthData;

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
    private util: UtilitiesService,
    private router: Router,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.languageService.setInitialAppLanguage();
      this.currentLanguage = this.languageService.getLanguage();
      console.log(`language is ${this.currentLanguage}`);
      this.util.getPlatformType();

      this.util.getDeviceID();
    });
  }

  logout() {

    this.auth.getUserIDObservable().subscribe((val) => {
      this.logoutData = {
        lang: this.languageService.getLanguage(),
        user_id: val,
        device_id: this.util.deviceID,
      };
    });
   
    this.util.showLoadingSpinner().then((__) => {
      this.auth.logout(this.logoutData).subscribe(
        (data: AuthResponse) => {
          if (data.key == 1) {
            console.log('login res :' + JSON.stringify(data));
            this.router.navigateByUrl('/login-register');
            this.auth.removeToken();
            this.auth.removeUserID();
            this.auth.removeRegistrationData();
          } else {
            this.util.showMessage(data.msg);
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
    this.router.navigateByUrl('/login-register');
  }
}
