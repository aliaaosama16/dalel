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
  title: string = '';
  rooms:number[];
  people:number[];
  max_area:number;
  min_area:number;
  max_price:number;
  min_price:number;
  currentlangauge: string;
  platform: any;
  userData: UserData;
  countries: GeneralSectionResponse[];
  categories: GeneralSectionResponse[];
  selectedCategories: string[] = [];
  options: GeneralSectionResponse[];
  selectedOptions: string[] = [];
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

  chooseCategory(category: GeneralSectionResponse) {
    this.selectedCategories.push(category.id.toString());
    console.log(
      'selected Categories :' + JSON.stringify(this.selectedCategories)
    );
  }

  chooseOption(option: GeneralSectionResponse) {
    this.selectedOptions.push(option.id.toString());
    console.log('selected optiopns :' + JSON.stringify(this.selectedOptions));
  }

  getItemsByFilters() {
    this.auth.getUserIDObservable().subscribe((val) => {
      console.log('user id :' + val);

      this.filterData = {
        user_id: val,
        title: this.title,
        lang: this.currentlangauge,
        categories: this.selectedCategories,
        options: this.selectedOptions,
      };
    });

    this.util.setFilters(this.filterData);

    console.log('filters ' + JSON.stringify(this.filterData));
    this.router.navigate(['/tabs/main/search-results']);
  }

  chooseCountry($event) {
    console.log('country : ' + $event);
  }

  chooseCity($event) {
    console.log('country : ' + $event);
  }
  chooseNeiborhoods($event) {
    console.log('country : ' + $event);
  }
}
