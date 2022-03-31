import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  currentlangauge:string;
  constructor(private langaugeservice:LanguageService) { }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
  }

  chooseLanguage(ev) {
    console.log(ev.detail.value);
    this.langaugeservice.setLanguage(ev.detail.value);

    if (ev.detail.value == 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    window.location.reload();
  }
}
