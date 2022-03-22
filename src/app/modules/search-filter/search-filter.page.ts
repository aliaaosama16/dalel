import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage implements OnInit {
  currentlangauge: string;
  platform: any;
  constructor(
    private langaugeservice: LanguageService,
    private util: UtilitiesService
  ) {
    this.platform = this.util.platform;
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
  }

  selectPlace(ev) {
    console.log(ev);
  }
}
