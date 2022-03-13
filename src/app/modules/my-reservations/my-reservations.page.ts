import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.page.html',
  styleUrls: ['./my-reservations.page.scss'],
})
export class MyReservationsPage implements OnInit {
  reservationsType: string = 'old';

  oldReservations = [
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'ر.س',
      perUnit: 'ليلة',
      rating: 3,
    },
  ];
  currentReservations = [
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'ر.س',
      perUnit: 'ليلة',
      rating: 3,
    },
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'ر.س',
      perUnit: 'ليلة',
      rating: 3,
    },
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'ر.س',
      perUnit: 'ليلة',
      rating: 3,
    },
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'ر.س',
      perUnit: 'ليلة',
      rating: 3,
    },
  ];
  constructor() {}

  ngOnInit() {}

  reservationsTypeChange($event) {}
}
