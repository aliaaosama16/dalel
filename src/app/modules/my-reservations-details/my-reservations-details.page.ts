import { Component, OnInit } from "@angular/core";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
  selector: "app-my-reservations-details",
  templateUrl: "./my-reservations-details.page.html",
  styleUrls: ["./my-reservations-details.page.scss"],
})
export class MyReservationsDetailsPage implements OnInit {
  reservationDetails = {
    name: "اسم الاستراحه",
    rating: '3+',
    id: 1,
    image: "./../../../assets/images/1024-500.png",
    city: "الرياض",
    address: " حي الرمال",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
    arrivalTime:'‏12.00 مساءا',
    leftTime:'‏12.00 صباحا',
    arrivalDate:'الاربعاء 22/02/2022',
    leftDate:'السبت 25/02/2022',
    isFav: true,
    description:'',
    reservationRules:''  
  
  };
  currentlangauge: string;
  constructor(private langaugeservice: LanguageService) {}

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
  }
}
