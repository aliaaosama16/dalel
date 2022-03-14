import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {
  currentlangauge: string;

  itemDetails:any={
    id: 1,
    categoryID: 1,
    name: 'اسم تجريبي',
    city: 'الرياض',
    address:'حي الرمال',
    rating: '3+',
    price: 3000,
    unit: 'ر.س',
    perUnit:'ليلة',
    isFav:true
  }
  constructor(
    private menuCtrl: MenuController,
    private langaugeservice: LanguageService
  ) {}

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  openMenu() {
    this.menuCtrl.open();
  }
}
