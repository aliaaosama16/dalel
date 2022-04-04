import { Component, OnInit } from "@angular/core";
import { Item } from "src/app/models/item";
import { LanguageService } from "src/app/services/language/language.service";
import { UtilitiesService } from "src/app/services/utilities/utilities.service";

@Component({
  selector: "app-my-reservations-details",
  templateUrl: "./my-reservations-details.page.html",
  styleUrls: ["./my-reservations-details.page.scss"],
})
export class MyReservationsDetailsPage implements OnInit {
  ItemDetails:Item ;
  currentlangauge: string;
  platform:any;
  constructor(private langaugeservice: LanguageService,private util:UtilitiesService) {
    this.platform=this.util.platform;
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
  }
}
