import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any[] = [
    { id: 1, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 2, name: 'chalets', image: './../../../assets/images/1024-500.png' },
    { id: 3, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 4, name: 'chalets', image: './../../../assets/images/1024-500.png' },
    { id: 5, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 6, name: 'chalets', image: './../../../assets/images/1024-500.png' },
    { id: 7, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 8, name: 'chalets', image: './../../../assets/images/1024-500.png' },
    { id: 9, name: 'rests', image: './../../../assets/images/1024-500.png' },
    { id: 10, name: 'rests', image: './../../../assets/images/1024-500.png' },
  ];
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  openMenu() {
    this.menuCtrl.open();
  }

  openCatList(catID,catName) {
    this.dataService.setData(catID, catName);
    // go to categories list page
    this.router.navigateByUrl(`/tabs/main/categories/${catID}`);
  }
}
