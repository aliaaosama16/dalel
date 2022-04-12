import { Component, OnInit } from '@angular/core';
import { StaticPageData, StaticPageResponse } from 'src/app/models/staticPage';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GeneralService } from 'src/app/services/general/general.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.page.html',
  styleUrls: ['./policy.page.scss'],
})
export class PolicyPage implements OnInit {
  conditionData: StaticPageData;
  conditionDataResponse: StaticPageResponse;
  constructor(
    private util: UtilitiesService,
    private general: GeneralService,
    private language: LanguageService,
    private auth: AuthService
  ) {
    //this.auth.getUserIDObservable().subscribe((val) => {
      // console.log('user id :' + val);
      // if (val != 0) {
        this.conditionData = {
          lang: this.language.getLanguage(),
          user_id:this.auth.userID.value, // val,
          title: 'condition',
        };
    //   }
    // });

    this.getIntroData(this.conditionData);
  }

  ngOnInit() {}

  getIntroData(data: StaticPageData) {
    this.util.showLoadingSpinner().then((__) => {
      this.general.staticPages(data).subscribe(
        (data: StaticPageResponse) => {
          this.conditionDataResponse = data;
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  doRefresh($event) {
    this.auth.getUserIDObservable().subscribe((val) => {
      console.log('user id :' + val);
      if (val != 0) {
        this.conditionData = {
          lang: this.language.getLanguage(),
          user_id: val,
          title: 'condition',
        };
      }
    });
    this.general.staticPages(this.conditionData).subscribe(
      (data: StaticPageResponse) => {
        this.conditionDataResponse = data;
        $event.target.complete();
      },
      (err) => {
        $event.target.complete();
      }
    );
  }
}
