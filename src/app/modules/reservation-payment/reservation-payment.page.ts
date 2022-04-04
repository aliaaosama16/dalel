import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data/data.service';
import { LanguageService } from 'src/app/services/language/language.service';
import * as moment from 'moment';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
@Component({
  selector: 'app-reservation-payment',
  templateUrl: './reservation-payment.page.html',
  styleUrls: ['./reservation-payment.page.scss'],
})
export class ReservationPaymentPage implements OnInit {
  platform: any;
  ItemDetails = {
    name: 'اسم الاستراحه',
    rating: '3+',
    id: 1,
    image: './../../../assets/images/1024-500.png',
    city: 'الرياض',
    address: ' السعودية',
    price: 1120,
    unit: 'currency',
    perUnit: 'one night',
    arrivalTime: '‏12.00 مساءا',
    leftTime: '‏12.00 صباحا',
    arrivalDate: '',
    leftDate: '',
    isFav: false,
    description: '',
    reservationRules: '',
    catID: 0,
  };

  currentlangauge: string;
  constructor(
    private langaugeservice: LanguageService,
    private dataService: DataService,
    private language: LanguageService,
    private util: UtilitiesService
  ) {
    this.platform = this.util.platform;
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    this.ItemDetails.arrivalDate =
      this.getDay(
        this.dataService.getDates().from,
        this.language.getLanguage()
      ) +
      this.getFormattedDate(
        this.dataService.getDates().from,
        this.language.getLanguage()
      );

    this.ItemDetails.leftDate =
      this.getDay(this.dataService.getDates().to, this.language.getLanguage()) +
      this.getFormattedDate(
        this.dataService.getDates().to,
        this.language.getLanguage()
      );
  }

  getFormattedDate(date, lang) {
    return moment(date).format('L');
  }

  getDay(date, lang) {
    return moment(date).locale(lang).format('dddd');
  }
}
