import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { Order, OrderData, OrderDataResponse } from 'src/app/models/orders';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { ReservationsService } from 'src/app/services/reservations/reservations.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-my-reservations-details',
  templateUrl: './my-reservations-details.page.html',
  styleUrls: ['./my-reservations-details.page.scss'],
})
export class MyReservationsDetailsPage implements OnInit {
  orderDetials: Order;
  currentlangauge: string;
  platform: any;
  orderData: OrderData;
  constructor(
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private reservationsService: ReservationsService,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.platform = this.util.platform;

    this.showOrdersByID();
  }

  showOrdersByID() {
    this.auth.getUserIDObservable().subscribe((val) => {
      this.orderData = {
        lang: this.langaugeservice.getLanguage(),
        user_id: val == 0 ? 1 : val,
        order_id: parseInt(this.activatedRoute.snapshot.paramMap.get('id')),
      };
      console.log(JSON.stringify(this.orderData));
      this.showAllOrdersByID(this.orderData);
    });
  }

  showAllOrdersByID(orderData: OrderData) {
    console.log(JSON.stringify(orderData));
    this.util.showLoadingSpinner().then((__) => {
      this.reservationsService.showOrderByID(orderData).subscribe(
        (data: OrderDataResponse) => {
          if (data.key == 1) {
            this.util.showMessage(data.msg);
            console.log('order data :' + JSON.stringify(data.data));
            this.orderDetials=data.data
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
  }
}
