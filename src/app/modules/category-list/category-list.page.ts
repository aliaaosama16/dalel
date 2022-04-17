import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  InfiniteScrollCustomEvent,
  IonInfiniteScroll,
  MenuController,
  Platform,
} from '@ionic/angular';
import { Location } from '@angular/common';

import { DepartmentResponse, Item, SectionData } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items/items.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  noItems: boolean = false;
  currentPage: number;
  categoryID: string;
  categoryName: string;
  currentlangauge: string;
  platform: any;
  sectionAllItems: Item[];
  sectionData: SectionData;

  constructor(
    private menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private items: ItemsService,
    private plt: Platform,
    private location: Location
  ) {
    this.platform = this.util.platform;
    //this.loadItems();
    this.plt.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.location.back();
    });
  }

  goBack(){
    this.location.back();
  }
  ngOnInit() {
    console.log(
      `category list data ${JSON.stringify(this.activatedRoute.snapshot.data)}`
    );
    if (this.activatedRoute.snapshot.data['name']) {
      this.categoryName = this.activatedRoute.snapshot.data['name'];
      console.log(`categoryName is ${this.categoryName}`);
    }

    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
    this.getAllDepartmentsBySectionID();
  }

  getAllDepartmentsBySectionID() {
    this.sectionData = {
      lang: this.langaugeservice.getLanguage(),
      section_id: parseInt(this.activatedRoute.snapshot.paramMap.get('id')),
    };
    this.util.showLoadingSpinner().then((__) => {
      this.items.allDepartmentsBySectionID(this.sectionData).subscribe(
        (data: DepartmentResponse) => {
          if (data.key == 1) {
            console.log('sections data : ' + JSON.stringify(data));
            if (data.data.length == 0) {
              this.noItems = true;
            }
            this.sectionAllItems = data.data;
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  loadItems(event?: InfiniteScrollCustomEvent) {
    // call api to get all categorey items
    let newResults = { results: [], totel_pages: 10 };
    //this.categoriesList=[...this.categoriesList,...newResults];

    //this.categoriesList.concat(...newResults);
    this.sectionAllItems.push(...newResults.results);
    // after get data
    event?.target.complete();
    if (event) {
      event.target.disabled = newResults.totel_pages === this.currentPage;
    }
  }

  openMenu() {
    this.menuCtrl.open();
  }

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

  doRefresh($event) {
    if (this.activatedRoute.snapshot.data['name']) {
      this.categoryName = this.activatedRoute.snapshot.data['name'];
      console.log(`categoryName is ${this.categoryName}`);
    }

    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);

    this.sectionData = {
      lang: this.langaugeservice.getLanguage(),
      section_id: parseInt(this.activatedRoute.snapshot.paramMap.get('id')),
    };
    this.items.allDepartmentsBySectionID(this.sectionData).subscribe(
      (data: DepartmentResponse) => {
        if (data.key == 1) {
          console.log('sections data : ' + JSON.stringify(data));
          if (data.data.length == 0) {
            this.noItems = true;
          }
          this.sectionAllItems = data.data;
        }
        $event.target.complete();
      },
      (err) => {
        $event.target.complete();
      }
    );
  }
}
