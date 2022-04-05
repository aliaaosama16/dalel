import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentResponse, FilterData, Item } from 'src/app/models/item';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ItemsService } from 'src/app/services/items/items.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {
  currentlangauge: string = '';
  resultItems: Item[];
  constructor(
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private items:ItemsService
  ) {}

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
     console.log('filters ',this.util.filters);
    this.getResultsItemsByFilters(this.util.filters);
  }

  getResultsItemsByFilters(filterData:FilterData){
       this.util.showLoadingSpinner().then((__) => {
        this.items.allDepartmentsByFilters(filterData).subscribe(
          (data: DepartmentResponse) => {
            if (data.key == 1) {
              console.log('resultItems data : ' + JSON.stringify(data));
              this.resultItems = data.data;
            }
            this.util.dismissLoading();
          },
          (err) => {
            this.util.dismissLoading();
          }
        );
      });
    }
  
}
