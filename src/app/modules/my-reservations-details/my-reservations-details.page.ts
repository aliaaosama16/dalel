import { Component, OnInit } from "@angular/core";
import { ItemDetails } from "src/app/models/itemDetails";
import { LanguageService } from "src/app/services/language/language.service";
import { UtilitiesService } from "src/app/services/utilities/utilities.service";

@Component({
  selector: "app-my-reservations-details",
  templateUrl: "./my-reservations-details.page.html",
  styleUrls: ["./my-reservations-details.page.scss"],
})
export class MyReservationsDetailsPage implements OnInit {
  ItemDetails:ItemDetails = {
    name: "اسم الاستراحه",
    rating: '3+',
    id: 1,
    image: "./../../../assets/images/1024-500.png",
    city: "الرياض",
    address: " حي الرمال",
    price: 1120,
    unit: "currency",
    perUnit: "one night",
    arrivalTime: '‏12.00 مساءا',
    leftTime: '‏12.00 صباحا',
    arrivalDate: 'الاربعاء 22/02/2022',
    leftDate: 'السبت 25/02/2022',
    isFav: true,
    description: '',
    reservationRules: '',
    catID: 0
  };
  currentlangauge: string;
  platform:any;
  constructor(private langaugeservice: LanguageService,private util:UtilitiesService) {
    this.platform=this.util.platform;
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
  }
}
