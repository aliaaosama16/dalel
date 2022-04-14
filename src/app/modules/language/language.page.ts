import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  currentlangauge: string;
  selectLanguage: boolean;
  constructor(
    private langaugeservice: LanguageService,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, 'main');
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
  }

  chooseLanguage(ev) {
    console.log(ev.detail.value);
    if (ev.detail.value) {
      this.selectLanguage = true;
    }
    this.langaugeservice.setLanguage(ev.detail.value);

    if (ev.detail.value == 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    // window.location.reload();
  }
}
