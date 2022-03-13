import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  categoryID: string;
  categoryName: string;
  categoriesList: any[] = [
    {
      id: 1,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 2,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 3,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 4,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 5,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 6,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 7,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 8,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 9,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 10,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
    {
      id: 11,
      name: 'اسم تجريبي',
      image: './../../../assets/images/1024-500.png',
      location: 'الرياض',
    },
  ];
  constructor(
    private menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(`category list data ${JSON.stringify(this.activatedRoute.snapshot.data)}`)
    if (this.activatedRoute.snapshot.data['name']) {
      this.categoryName = this.activatedRoute.snapshot.data['name'];
      console.log(`categoryName is ${this.categoryName}`);
    }
    this.categoryID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`category id is ${this.categoryID}`);
  }

  openMenu() {
    this.menuCtrl.open();
  }
}
