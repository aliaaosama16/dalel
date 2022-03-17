import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selected: string = '';
  constructor(
    private platform: Platform,
    private translate: TranslateService
  ) {}

  async setInitialAppLanguage() {
    // let language = this.translate.getBrowserLang();
    // console.log(`lang is ${language }`)

    const lang = await Storage.get({ key: 'lang' });
    console.log(`stored lang is ${lang.value}`);
    console.log(`stored lang is obj `+JSON.stringify(lang));
    if (lang.value != null) {
      if (lang.value == 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
      this.setLanguage(lang.value);
      console.log(`stored lang is ${lang.value}`);
      this.selected = lang.value;
      this.translate.setDefaultLang(lang.value);
    } else if (lang.value == null) {
      console.log(`no language`);
      document.documentElement.dir = 'rtl';
      this.setLanguage("ar");
      this.selected = 'ar';
      this.translate.setDefaultLang('ar');
    }
  }

  getLanguage() {
    return this.platform.isRTL ? 'ar' : 'en';
  }

  async setLanguage(lng:string) {
    console.log('set this language :' + lng);
    this.translate.use(lng);
    this.selected = lng;
    await Storage.set({
      key: 'lang',
      value: lng,
    });
  }
}
