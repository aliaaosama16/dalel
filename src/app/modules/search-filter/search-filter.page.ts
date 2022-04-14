import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {
  CitysData,
  CountryData,
  GeneralSectionResponse,
  UserData,
} from 'src/app/models/general';
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
  rooms: number;
  people: number;
  max_area: number;
  min_area: number;
  max_price: number;
  min_price: number;
  currentlangauge: string;
  platform: any;
  userData: UserData;
  countries: GeneralSectionResponse[];
  cities: GeneralSectionResponse[];
  neighborhoods: GeneralSectionResponse[];
  categories: GeneralSectionResponse[];
  selectedCategories: string[] = [];
  options: GeneralSectionResponse[];
  selectedOptions: string[] = [];
  filterData: FilterData;
  country_id: number;
  city_id: number;
  neighborhood_id: number;
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

    //this.auth.getUserIDObservable().subscribe((val) => {
      this.userData = {
        lang: this.langaugeservice.getLanguage(),
        user_id: this.auth.userID.value,//val == 0 ? 1 : val,
      };
      this.getAllFilterData(this.userData);
   // });
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
        lang: this.langaugeservice.getLanguage(),
        categories: JSON.stringify(this.selectedCategories).replace(/\\/g, ''),
        options: JSON.stringify(this.selectedOptions).replace(/\\/g, ''),
        max_area: this.max_area,
        min_area: this.min_area,
        min_price: this.min_price,
        max_price: this.max_price,
        people_count: this.people,
        rooms_count: this.rooms,
        city_id: this.city_id,
        country_id: this.country_id,
        neighborhood_id: this.neighborhood_id,
      };
    });

    this.util.setFilters(JSON.stringify(this.filterData));
    console.log(this.filterData.categories.toString());
    console.log('filters ' + JSON.stringify(this.filterData));
    this.router.navigate(['/tabs/main/search-results']);
  }

  chooseCountry($event) {
    this.country_id = $event.detail.value;
    console.log('get cities by country ' + $event.detail.value);
    const countryData: CountryData = {
      country_id: $event.detail.value,
      lang: this.langaugeservice.getLanguage(),
    };
    this.util.showLoadingSpinner().then((__) => {
      this.items.getCitiesByCountryID(countryData).subscribe(
        (data: any) => {
          console.log('getCitiesByCountryID res :' + JSON.stringify(data));
          if (data.key == 1) {
            this.cities = data.data;
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  chooseCity($event) {
    this.city_id = $event.detail.value;
    console.log('get neighborhoods by city ' + $event.detail.value);
    const cityData: CitysData = {
      city_id: $event.detail.value,
      lang: this.langaugeservice.getLanguage(),
    };
    this.util.showLoadingSpinner().then((__) => {
      this.items.getNeighborhoodsByCityID(cityData).subscribe(
        (data: any) => {
          console.log('getCitiesByCountryID res :' + JSON.stringify(data));
          if (data.key == 1) {
            this.neighborhoods = data.data;
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  chooseNeiborhoods($event) {
    console.log('country : ' + $event);
    this.neighborhood_id = $event.detail.value;
  }

}
