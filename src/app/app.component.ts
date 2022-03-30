import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { ShowLanguagePageGuard } from './guards/language/show-language-page.guard';
import { AuthData, AuthResponse, Status } from './models/loginData';
import { AuthService } from './services/auth/auth.service';
import { LanguageService } from './services/language/language.service';
import { UtilitiesService } from './services/utilities/utilities.service';
import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@capacitor/network';
import { NetworkService } from './services/network/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentLanguage: string = '';
  selectedIndex: number;
  logoutData: AuthData;
  logined: boolean;

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
    private auth: AuthService,
    private alertController: AlertController,
    private translate: TranslateService,
    private network: NetworkService
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
      this.getLoginStatus();
    });
  }

  async getLoginStatus() {
    const loginStatus = await Storage.get({ key: 'status' });
    if (loginStatus.value == Status.Active) {
      this.auth.isLogined();
      this.auth.getLoginedObservable().subscribe((val) => {
        this.logined = val;
      });
    }
  }

  async logout() {
    this.auth.getUserIDObservable().subscribe((val) => {
      this.logoutData = {
        lang: this.languageService.getLanguage(),
        user_id: val,
        device_id: this.util.deviceID,
      };
    });

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: this.translate.instant('confirm logout'),
      buttons: [
        {
          text: this.translate.instant('ok'),
          handler: () => {
            this.logoutService();
          },
        },
        {
          text: this.translate.instant('cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
      ],
    });

    await alert.present();
  }

  logoutService() {
    this.util.showLoadingSpinner().then((__) => {
      this.auth.logout(this.logoutData).subscribe(
        (data: AuthResponse) => {
          if (data.key == 1) {
            console.log('login res :' + JSON.stringify(data));
            this.auth.isLogout();
            this.auth.removeRegistrationData();
            this.router.navigateByUrl('/tabs/main');
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
  }
}
