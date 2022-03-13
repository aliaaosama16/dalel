import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import {TranslateService} from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  currentlangauge: string;
  constructor(private langaugeservice: LanguageService,private menuCtrl:MenuController) {
    this.menuCtrl.enable(false, 'main');
  }
  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  // }
  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
  }

  chooseLanguage(ev) {
    console.log(ev.detail.value);
    this.langaugeservice.setLanguage(ev.detail.value);
    window.location.reload();
  }
}
