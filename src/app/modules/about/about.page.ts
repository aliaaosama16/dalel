import { Component, OnInit } from '@angular/core';
import { StaticPageData, StaticPageResponse } from 'src/app/models/staticPage';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GeneralService } from 'src/app/services/general/general.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  aboutData: StaticPageData;
  aboutDataResponse: StaticPageResponse;
  constructor(
    private util: UtilitiesService,
    private general:GeneralService,
    private language: LanguageService
  ) {
    this.aboutData = {
      lang: this.language.getLanguage(),
      user_id: 1,
      title: 'about',
    };
    this.getIntroData(this.aboutData);
  }

  ngOnInit() {}

  getIntroData(data: StaticPageData) {
    this.util.showLoadingSpinner().then((__) => {
      this.general.staticPages(data).subscribe(
        (data: StaticPageResponse) => {
          this.aboutDataResponse = data;
          console.log('aboutData ' + JSON.stringify(this.aboutDataResponse));
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }
}
