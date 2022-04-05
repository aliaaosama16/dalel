import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Order } from 'src/app/models/orders';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-custom-details',
  templateUrl: './custom-details.component.html',
  styleUrls: ['./custom-details.component.scss'],
})
export class CustomDetailsComponent implements OnInit {
  @Input() ItemDetails?: Item;
  @Input() OrderDetails?: Order;
  @Input() isDetailed: boolean;
  currentlangauge: string;
  constructor(private langaugeservice: LanguageService) {}

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(
      'CustomDetailsComponent : ' + JSON.stringify(this.OrderDetails)
    );
  }
}
