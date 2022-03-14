import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  favourites:any[]=[
    {
      name:'اسم تجريبي',
      city:'الرياض',
      rating:'3+',
      price:3000,
      unit:'ر.س'
    },
    {
      name:'اسم تجريبي',
      city:'الرياض',
      rating:'3+',
      price:3000,
      unit:'ر.س'
    },{
      name:'اسم تجريبي',
      city:'الرياض',
      rating:'3+',
      price:3000,
      unit:'ر.س'
    },{
      name:'اسم تجريبي',
      city:'الرياض',
      rating:'3+',
      price:3000,
      unit:'ر.س'
    },{
      name:'اسم تجريبي',
      city:'الرياض',
      rating:'3+',
      price:3000,
      unit:'ر.س'
    },{
      name:'اسم تجريبي',
      city:'الرياض',
      rating:'3+',
      price:3000,
      unit:'ر.س'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
