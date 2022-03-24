import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  NotificationsData,
  NotificationsDataResponse,
  NotificationsInfo,
  NotificationsResponse,
} from 'src/app/models/notifications';
import { LanguageService } from 'src/app/services/language/language.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
// import * as moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  currentlangauge: string;
  platform: any;
  notificationsData: NotificationsData;
  notifications: NotificationsDataResponse[];

  constructor(
    private menuCtrl: MenuController,
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private router: Router,
    private userNotifications: NotificationsService,
    private alertController: AlertController,
    private translate: TranslateService
  ) {
    this.platform = this.util.platform;
    this.notificationsData = {
      lang: this.langaugeservice.getLanguage(),
      user_id: 37,
    };
    this.showNotification(this.notificationsData);
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  showNotification(data: NotificationsData) {
    this.util.showLoadingSpinner().then((__) => {
      this.userNotifications.showNotification(data).subscribe(
        (data: NotificationsResponse) => {
          this.notifications = data.data;
          console.log('notifications' + JSON.stringify(this.notifications));
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  openOrederDetails(orderID) {
    this.router.navigateByUrl(
      `/tabs/my-reservations/my-reservations-details/` + orderID
    );
  }

  async deleteItem(notification_id: number) {
    const data: NotificationsInfo = {
      lang: this.langaugeservice.getLanguage(),
      notification_id: notification_id,
    };

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: this.translate.instant('confirm delete this notification'),
      buttons: [
        {
          text: this.translate.instant('cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: this.translate.instant('ok'),
          handler: () => {
            this.util.showLoadingSpinner().then((__) => {
              this.userNotifications.deleteNotification(data).subscribe(
                (data: NotificationsResponse) => {
                  console.log(
                    'delete item ' + JSON.stringify(this.notifications)
                  );
                  this.util.showMessage(data.msg);
                  this.util.dismissLoading();
                  this.showNotification(this.notificationsData);
                },
                (err) => {
                  this.util.dismissLoading();
                }
              );
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
