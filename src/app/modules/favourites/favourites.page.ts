import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  favourites: any[] = [
    {
      id: 1,
      categoryID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      rating: '3+',
      price: 3000,
     unit: "currency",
 
    },
    {
      id: 2,
      categoryID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      rating: '3+',
      price: 3000,
     unit: "currency",
 
    },
    {
      id: 3,
      categoryID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      rating: '3+',
      price: 3000,
     unit: "currency",
 
    },
    {
      id: 4,
      categoryID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      rating: '3+',
      price: 3000,
     unit: "currency",
 
    },
    {
      id: 5,
      categoryID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      rating: '3+',
      price: 3000,
     unit: "currency",
 
    },
    {
      id: 6,
      categoryID: 1,
      name: 'اسم تجريبي',
      city: 'الرياض',
      rating: '3+',
      price: 3000,
     unit: "currency",
 
    },
  ];
  constructor() {}

  ngOnInit() {}
}
