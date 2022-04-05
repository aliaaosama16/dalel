import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GeneralSectionResponse, UserData } from 'src/app/models/general';
import { FilterData } from 'src/app/models/item';
import { SectionsResponse } from 'src/app/models/sections';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ItemsService } from 'src/app/services/items/items.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage implements OnInit {
  title: string;
  currentlangauge: string;
  platform: any;
  userData: UserData;
  countries: GeneralSectionResponse[];

  categories: GeneralSectionResponse[];
  selectedCategories: string[];
  options: GeneralSectionResponse[];
  selectedOptions: string[];
  filterData: FilterData;
  constructor(
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private items: ItemsService,
    private auth: AuthService,
    private router: Router
  ) {
    this.platform = this.util.platform;
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();

    this.auth.getUserIDObservable().subscribe((val) => {
      this.userData = {
        lang: this.langaugeservice.getLanguage(),
        user_id: val == 0 ? 1 : val,
      };
      this.getAllFilterData(this.userData);
    });
  }

  getAllFilterData(filterData: UserData) {
    this.util.showLoadingSpinner().then((__) => {
      this.items.data(filterData).subscribe(
        (data: SectionsResponse) => {
          if (data.key == 1) {
            this.countries = data.data.countries;
            this.categories = data.data.categories;
            this.options = data.data.options;
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }
  selectPlace(ev) {
    console.log(ev);
  }

  chooseCategory(categoryId) {
    console.log('cat id :' + categoryId);
    this.selectedCategories.push(categoryId);
  }

  chooseOption(optionId) {
    console.log('cat id :' + optionId);
    this.selectedOptions.push(optionId);
  }

  getItemsByFilters() {
    this.auth.getUserIDObservable().subscribe((val) => {
      console.log('user id :' + val);

      this.filterData = {
        user_id: val,
        title: this.title,
        lang: this.currentlangauge,
        categories: this.selectedCategories,
      };
    });

    // const navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(this.filterData),
    //   },
    // };
    this.util.setFilters(this.filterData);

    console.log('filters ' + JSON.stringify(this.filterData));
    this.router.navigate(['/tabs/main/search-results']);
  }
}
