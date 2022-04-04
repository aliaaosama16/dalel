import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { GeneralSectionResponse, UserData } from 'src/app/models/general';
import { SectionsResponse } from 'src/app/models/sections';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { ItemsService } from 'src/app/services/items/items.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  platform: any;
  sections: GeneralSectionResponse[];
  userData: UserData;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private dataService: DataService,
    private util: UtilitiesService,
    private items: ItemsService,
    private langaugeservice: LanguageService,
    private auth: AuthService
  ) {
    this.platform = this.util.platform;
    this.auth.getUserIDObservable().subscribe((val) => {
      this.userData = {
        lang: this.langaugeservice.getLanguage(),
        user_id: val == 0 ? 1 : val,
      };
      this.getAllSections();
    });
  }

  ngOnInit() {}

  getAllSections() {
    this.util.showLoadingSpinner().then((__) => {
      this.items.data(this.userData).subscribe(
        (data: SectionsResponse) => {
          if (data.key == 1) {
            this.sections = data.data.sections;
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }
  openMenu() {
    this.menuCtrl.open();
  }

  openCatList(catID, catName) {
    this.dataService.setData(catID, catName);
    this.router.navigateByUrl(`/tabs/main/categories/${catID}`);
  }
}
