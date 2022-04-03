import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  UserData,
  UserDataResponse,
  NotificationsInfo,
  NotificationsResponse,
} from 'src/app/models/notifications';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  currentlangauge: string;
  platform: any;
  UserData: UserData;
  notifications: UserDataResponse[];
  getNotifications: boolean = false;
  noNotifications: boolean = false;
  constructor(
    private menuCtrl: MenuController,
    private langaugeservice: LanguageService,
    private util: UtilitiesService,
    private router: Router,
    private userNotifications: NotificationsService,
    private alertController: AlertController,
    private translate: TranslateService,
    private auth: AuthService
  ) {
    this.platform = this.util.platform;
    this.auth.getStoredUserID();
    this.auth.getUserIDObservable().subscribe((val) => {
      console.log('user id :' + val);
      if (val != 0) {
        this.UserData = {
          lang: this.langaugeservice.getLanguage(),
          user_id: val,
        };
        this.showNotification(this.UserData);
      }
    });
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  showNotification(data: UserData) {
    this.util.showLoadingSpinner().then((__) => {
      this.userNotifications.showNotification(data).subscribe(
        (data: NotificationsResponse) => {
          if (data.key == 0) {
            console.log('no response');
            this.noNotifications = true;
          } else if (data.notification_count == 0 && data.key == 1) {
            console.log('no Notifications');
             this.noNotifications = true;
          } else {
            console.log(' Notifications');
            this.notifications = data.data;
            this.noNotifications = false;
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
          this.getNotifications = false;
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
                  this.showNotification(this.UserData);
                },
                (err) => {
                  this.util.dismissLoading();
                }
              );
            });
          },
        },
        {
          text: this.translate.instant('cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
      ],
    });

    await alert.present();
  }
}
