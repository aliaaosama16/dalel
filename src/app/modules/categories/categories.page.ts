import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any[] = [
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
    { name: 'rests', image: './../../../assets/images/1024-500.png' },
  ];
  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {}

  openMenu() {
    this.menuCtrl.open();
  }
}
