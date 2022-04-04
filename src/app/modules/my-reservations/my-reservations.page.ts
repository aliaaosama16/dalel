import { Component, OnInit } from '@angular/core';
import {
  Order,
  OrderResponse,
  OrderStatus,
  UserOrdersData,
} from 'src/app/models/orders';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { ReservationsService } from 'src/app/services/reservations/reservations.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.page.html',
  styleUrls: ['./my-reservations.page.scss'],
})
export class MyReservationsPage implements OnInit {
  current = OrderStatus.current;
  old = OrderStatus.finish;
  reservationsType: OrderStatus = OrderStatus.current;
  currentlangauge: string;
  userOrdersData: UserOrdersData;
  platform: any;
  oldReservations: Order[];
  currentReservations: Order[];
  constructor(
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private auth: AuthService,
    private reservationsService: ReservationsService
  ) {
    this.platform = this.util.platform;
    this.showOrdersByStatus(OrderStatus.current);
  }

  showOrdersByStatus(orderStatus: OrderStatus) {
    this.auth.getUserIDObservable().subscribe((val) => {
      this.userOrdersData = {
        lang: this.langaugeservice.getLanguage(),
        user_id: val == 0 ? 1 : val,
        status: orderStatus == 0 ? 'current' : 'finish',
      };
      console.log(JSON.stringify(this.userOrdersData));
      this.showAllOrdersByID(this.userOrdersData);
    });
  }

  showAllOrdersByID(userOrdersData: UserOrdersData) {
    console.log(JSON.stringify(userOrdersData));
    this.util.showLoadingSpinner().then((__) => {
      this.reservationsService.showAllOrdersByID(userOrdersData).subscribe(
        (data: OrderResponse) => {
          if (data.key == 1) {
            this.util.showMessage(data.msg);
            if (userOrdersData.status == 'current') {
              this.currentReservations = data.data;
            } else if (userOrdersData.status == 'finish') {
              this.oldReservations = data.data;
            }
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
    console.log(this.currentlangauge);
  }

  reservationsTypeChange($event) {
    console.log($event.detail.value);
    if ($event.detail.value == 0) {
      this.showOrdersByStatus(OrderStatus.current);
    } else if ($event.detail.value == 1) {
      this.showOrdersByStatus(OrderStatus.finish);
    }
  }
}
