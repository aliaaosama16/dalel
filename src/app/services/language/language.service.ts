import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selected: string='';
  constructor(
    private platform: Platform,
    private translate: TranslateService
  ) {}

  async setInitialAppLanguage() {
    // let language = this.translate.getBrowserLang();
    // console.log(`lang is ${language }`)
   
    const lang = await Storage.get({ key: 'lang' });
    console.log(`stored lang is ${lang.value}`)
    if (lang) {
      if(lang.value=='ar'){
        document.documentElement.dir = 'rtl';
      }else{
        document.documentElement.dir = 'ltr';
      }
      this.setLanguage(lang.value);
      console.log(`stored lang is ${lang.value}`)
      this.selected = lang.value;
      this.translate.setDefaultLang(lang.value);
    }else{
      this.setLanguage('ar');
      this.selected = 'ar';
      document.documentElement.dir = 'rtl';
      this.translate.setDefaultLang('ar');
    }

  }

  getLanguage() {
    return this.platform.isRTL ? 'ar' : 'en';
  }

  async setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    await Storage.set({
      key: 'lang',
      value: lng,
    });
   //
  }

  // const checkName = async () => {
  //   const { value } = await Storage.get({ key: 'name' });

  //   alert(`Hello ${value}!`);
  // };

  // const removeName = async () => {
  //   await Storage.remove({ key: 'name' });
  // };
}
