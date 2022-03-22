import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.page.html',
  styleUrls: ['./my-reservations.page.scss'],
})
export class MyReservationsPage implements OnInit {
  reservationsType: string = 'old';
  currentlangauge: string;
  platform: any;
  oldReservations = [
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'currency',
      perUnit: 'one night',
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
      unit: 'currency',
      perUnit: 'one night',
      rating: 3,
    },
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'currency',
      perUnit: 'one night',
      rating: 3,
    },
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'currency',
      perUnit: 'one night',
      rating: 3,
    },
    {
      id: 1,
      name: 'rests',
      image: './../../../assets/images/1024-500.png',
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      price: 1120,
      unit: 'currency',
      perUnit: 'one night',
      rating: 3,
    },
  ];
  constructor(
    private langaugeservice: LanguageService,
    private util: UtilitiesService
  ) {
    this.platform = this.util.platform;
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  reservationsTypeChange($event) {}
}
