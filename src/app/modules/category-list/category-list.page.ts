import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  InfiniteScrollCustomEvent,
  IonInfiniteScroll,
  MenuController,
} from '@ionic/angular';
import { Item } from 'src/app/models/item';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  currentPage: number;
  categoryID: string;
  categoryName: string;
  currentlangauge: string;
  platform: any;
  categoriesList: Item[];

  constructor(
    private menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private langaugeservice: LanguageService,
    private util: UtilitiesService
  ) {
    this.platform = this.util.platform;
    //this.loadItems();
  }

  ngOnInit() {
    console.log(
      `category list data ${JSON.stringify(this.activatedRoute.snapshot.data)}`
    );
    if (this.activatedRoute.snapshot.data['name']) {
      this.categoryName = this.activatedRoute.snapshot.data['name'];
      console.log(`categoryName is ${this.categoryName}`);
    }
    this.categoryID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`category id is ${this.categoryID}`);

    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  loadItems(event?: InfiniteScrollCustomEvent) {
    // call api to get all categorey items
    let newResults = { results: [], totel_pages: 10 };
    //this.categoriesList=[...this.categoriesList,...newResults];

    //this.categoriesList.concat(...newResults);
    this.categoriesList.push(...newResults.results);
    // after get data
    event?.target.complete();
    if (event) {
      event.target.disabled = newResults.totel_pages === this.currentPage;
    }
  }

  openMenu() {
    this.menuCtrl.open();
  }
  //:InfiniteScrollCustomEvent
  loadData(event) {
    this.currentPage++;
    this.loadItems(event);
    // setTimeout(() => {
    //   console.log('Done');
    //   event.target.complete();

    //   // App logic to determine if all data is loaded
    //   // and disable the infinite scroll
    //   if (this.categoriesList.length === 1000) {
    //     event.target.disabled = true;
    //   }
    // }, 500);
  }
}
