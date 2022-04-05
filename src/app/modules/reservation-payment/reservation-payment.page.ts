import { Component, OnInit } from '@angular/core';
import { DepartmentDetailsResponse, Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data/data.service';
import { LanguageService } from 'src/app/services/language/language.service';
import * as moment from 'moment';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  OrderDataResponse,
  PaymentMethod,
  StoreOrderData,
} from 'src/app/models/orders';
import { ItemsService } from 'src/app/services/items/items.service';
import { ActivatedRoute } from '@angular/router';
import { ShowDepartmetData } from 'src/app/models/sections';
import { ReservationsService } from 'src/app/services/reservations/reservations.service';
@Component({
  selector: 'app-reservation-payment',
  templateUrl: './reservation-payment.page.html',
  styleUrls: ['./reservation-payment.page.scss'],
})
export class ReservationPaymentPage implements OnInit {
  platform: any;
  itemDetails: Item;
  orderData: StoreOrderData;
  currentlangauge: string;
  departmentData: ShowDepartmetData;
  paymentMethod: boolean=false;
  constructor(
    private langaugeservice: LanguageService,
    private dataService: DataService,
    private language: LanguageService,
    private util: UtilitiesService,
    private auth: AuthService,
    private items: ItemsService,
    private activatedRoute: ActivatedRoute,
    private reservationsService: ReservationsService
  ) {
    this.platform = this.util.platform;
    console.log(this.activatedRoute.snapshot.paramMap.get('departmetId'));
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    this.auth.getUserIDObservable().subscribe((val) => {
      this.orderData = {
        lang: this.langaugeservice.getLanguage(),
        user_id: val,
        department_id: parseInt(
          this.activatedRoute.snapshot.paramMap.get('departmetId')
        ),
        start_date:
          this.getDay(
            this.dataService.getDates().from,
            this.language.getLanguage()
          ) +
          ' ' +
          this.getFormattedDate(
            this.dataService.getDates().from,
            'L',
            this.language.getLanguage()
          ),
        start_time: this.getTime(
          this.dataService.getDates().from,
          this.language.getLanguage()
        ),
        end_date:
          this.getDay(
            this.dataService.getDates().to,
            this.language.getLanguage()
          ) +
          ' ' +
          this.getFormattedDate(
            this.dataService.getDates().to,
            'L',
            this.language.getLanguage()
          ),
        end_time: this.getTime(
          this.dataService.getDates().to,
          this.language.getLanguage()
        ),
      };
      console.log('order data intial :' + JSON.stringify(this.orderData));
    });

    this.getItemDetails();
  }

  getItemDetails() {
    this.auth.getUserIDObservable().subscribe((val) => {
      this.departmentData = {
        lang: this.langaugeservice.getLanguage(),
        department_id: parseInt(
          this.activatedRoute.snapshot.paramMap.get('departmetId')
        ),
        user_id: val == 0 ? 1 : val,
      };
    });

    this.util.showLoadingSpinner().then((__) => {
      this.items.showDepartmentByID(this.departmentData).subscribe(
        (data: DepartmentDetailsResponse) => {
          if (data.key == 1) {
            this.itemDetails = data.data;
            this.orderData.total_after_promo =
              (this.getDatesDifference(
                this.dataService.getDates().from,
                this.dataService.getDates().to
              ) +
                1) *
              this.itemDetails.price;
            console.log('total : ' + this.orderData.total_after_promo);
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  getFormattedDate(date, format: any, lang?) {
    return moment(date).format(format);
  }

  getDay(date, lang) {
    return moment(date).locale(lang).format('dddd');
  }

  getTime(date, lang?) {
    let str = moment(date).format('LTS'); //hh:ii:ss
    str = str.substring(0, str.length - 3);
    return str;
  }

  getDatesDifference(dateFrom, dateTo) {
    let days = Math.floor(
      (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
        1000 /
        60 /
        60 /
        24
    );
    return days;
  }

  setOrderData() {
    if(this.paymentMethod){
      this.auth.getUserIDObservable().subscribe((val) => {
        this.orderData = {
          lang: this.langaugeservice.getLanguage(),
          user_id: val,
          department_id: parseInt(
            this.activatedRoute.snapshot.paramMap.get('departmetId')
          ),
          start_date: this.getFormattedDate(
            this.dataService.getDates().from,
            'YYYY-MM-DD',
            this.language.getLanguage()
          ),
          start_time: this.getTime(
            this.dataService.getDates().from,
            this.language.getLanguage()
          ),
          start_day: this.getDay(
            this.dataService.getDates().from,
            this.language.getLanguage()
          ),
          end_date: this.getFormattedDate(
            this.dataService.getDates().to,
            'YYYY-MM-DD',
            this.language.getLanguage()
          ),
          end_time: this.getTime(
            this.dataService.getDates().to,
            this.language.getLanguage()
          ),
          end_day: this.getDay(
            this.dataService.getDates().to,
            this.language.getLanguage()
          ),
          total_after_promo:
            (this.getDatesDifference(
              this.dataService.getDates().from,
              this.dataService.getDates().to
            ) +
              1) *
            this.itemDetails.price,
          total_before_promo:
            (this.getDatesDifference(
              this.dataService.getDates().from,
              this.dataService.getDates().to
            ) +
              1) *
            this.itemDetails.price,
          payment_method: PaymentMethod.cash
        };
        console.log(
          'order data to send to backend : ' + JSON.stringify(this.orderData)
        );
  
        console.log(
          'days :  ' +
            this.getDatesDifference(
              this.dataService.getDates().from,
              this.dataService.getDates().to
            )
        );
      });
      this.storeOrder(this.orderData);
    }else{
      console.log('please choose payment method');
      this.util.showMessage('choose payment method');
    }
    
    // console.log(
    //   'check choose payment_method : ' + this.orderData.payment_method
    // );
    // if (this.orderData.payment_method == undefined) {
    //   console.log('please choose payment method');
    //   this.util.showMessage('choose payment method');
    // } else {
    //   this.storeOrder(this.orderData);
    // }
  }

  setPaymentMethod($event) {
    this.paymentMethod=$event.detail.value
    // if ($event.detail.value) {
    //   this.orderData.payment_method = PaymentMethod.cash;
    //   //this.setOrderData();
    //   this.paymentMethod=true;
    // } else {
    //   this.paymentMethod=fa
    //   console.log(' choose payment method');
    //   this.util.showMessage('choose payment method');
    // }
  }

  storeOrder(storeData: StoreOrderData) {
    this.util.showLoadingSpinner().then((__) => {
      this.reservationsService.storeOrder(storeData).subscribe(
        (data: OrderDataResponse) => {
          if (data.key == 1) {
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }
}
