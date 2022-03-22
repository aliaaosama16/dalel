import { Component, OnInit } from '@angular/core';
import { ItemDetails } from 'src/app/models/itemDetails';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  platform:any;
  favourites: ItemDetails[] = [
    {
      id: 1,
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
      id: 2,
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
    },
    {
      id: 5,
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
      id: 6,
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

    

  ];
  constructor(private util:UtilitiesService) {
    this.platform=this.util.platform;
  }

  ngOnInit() {}
}
