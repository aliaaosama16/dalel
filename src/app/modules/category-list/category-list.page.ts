import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  categoriesList: any[] = [
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    { name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
