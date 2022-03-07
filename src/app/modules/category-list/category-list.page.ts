import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  categoriesList: any[] = [
    {id:1, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:2, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:3, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:4, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:5, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:6, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:7, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:8, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:9, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:10, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },
    {id:11, name: 'rests', image: './../../../assets/images/1024-500.png',location:'الرياض' },

   
  ];
  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
  }

  openMenu(){
   this.menuCtrl.open();
  }

}
