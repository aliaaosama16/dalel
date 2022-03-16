import { Component, Input, OnInit } from '@angular/core';
import { ReservationDetails } from 'src/app/models/itemDetails';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-custom-details',
  templateUrl: './custom-details.component.html',
  styleUrls: ['./custom-details.component.scss'],
})
export class CustomDetailsComponent implements OnInit {

  @Input() reservationDetails: ReservationDetails;
  @Input() isDetailed:boolean;
  currentlangauge: string;
  constructor(private langaugeservice: LanguageService) {}

  ngOnInit() {
    console.log('is detailed '+this.isDetailed)
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(JSON.stringify(this.reservationDetails))
  }
}
