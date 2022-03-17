import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ItemDetails } from 'src/app/models/itemDetails';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  categoryID: string;
  categoryName: string;
  currentlangauge: string;
  categoriesList: ItemDetails[] = [
    {
      id: 1,
      catID: 4,
      name: 'اسم تجريبي',
      city: 'مكه المكرمة',
      address: 'الحرم',
      rating: '3+',
      price: 3000,
      unit: 'currency',
      perUnit: 'one night',
      isFav: true,
      description: '',
      reservationRules: '',
      image:  './../../../assets/images/1024-500.png',
      leftTime: '',
    },
    {
      id: 2,
      catID: 2,
      name: 'اسم تجريبي',
      city: 'الرياض',
      address: 'حي الرمال',
      rating: '3+',
      price: 3000,
      unit: 'currency',
      perUnit: 'one night',
      isFav: true,
      description: '',
      reservationRules: '',
      image:  './../../../assets/images/1024-500.png',
      leftTime: '',
    },
    {
      id: 3,
      catID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      address: 'حي الرمال',
      rating: '3+',
      price: 3000,
      unit: 'currency',
      perUnit: 'one night',
      isFav: true,
      description: '',
      reservationRules: '',
      image:  './../../../assets/images/1024-500.png',
      leftTime: '',
    },
    {
      id: 4,
      catID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      address: 'حي الرمال',
      rating: '3+',
      price: 3000,
      unit: 'currency',
      perUnit: 'one night',
      isFav: true,
      description: '',
      reservationRules: '',
      image:  './../../../assets/images/1024-500.png',
      leftTime: '',
    }
  ];
  constructor(
    private menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private langaugeservice:LanguageService
  ) {}

  ngOnInit() {
    console.log(`category list data ${JSON.stringify(this.activatedRoute.snapshot.data)}`)
    if (this.activatedRoute.snapshot.data['name']) {
      this.categoryName = this.activatedRoute.snapshot.data['name'];
      console.log(`categoryName is ${this.categoryName}`);
    }
    this.categoryID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`category id is ${this.categoryID}`);

   
      this.currentlangauge = this.langaugeservice.getLanguage();
      console.log(this.currentlangauge);
    
  }

  openMenu() {
    this.menuCtrl.open();
  }
}
