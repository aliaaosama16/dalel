import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ShowLanguagePageGuard implements CanActivate {
  selectedLangauge: boolean = false;
  constructor(
    private router: Router,
    private platform: Platform,
    private translate: TranslateService
  ) {
    this.setInitialAppLanguage();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return !this.selectedLangauge;
  }

  async setInitialAppLanguage() {
    const lang = await Storage.get({ key: 'lang' });
    console.log(`guard stored lang is obj ` + JSON.stringify(lang));
    if (lang.value != null) {
      this.selectedLangauge = true;
      //this.router.navigate(['/on-boarding']);
      if (lang.value == 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
      this.setLanguage(lang.value);
      console.log(`stored lang is ${lang.value}`);

      this.translate.setDefaultLang(lang.value);
    } else if (lang.value == null) {
      this.selectedLangauge = false;
      console.log(`no language`);
      document.documentElement.dir = 'rtl';
      this.setLanguage('ar');
      this.translate.setDefaultLang('ar');
    }
    this.router.navigateByUrl('/on-boarding');
  }

  getLanguage() {
    console.log('current lang is ' + this.platform.isRTL);
    return this.platform.isRTL ? 'ar' : 'en';
  }

  async setLanguage(lng: string) {
    console.log('set this language :' + lng);
    this.translate.use(lng);
    await Storage.set({
      key: 'lang',
      value: lng,
    });
  }
}
