import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthResponse } from 'src/app/models/loginData';
import { UserData, UserResponse } from 'src/app/models/userData';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  platform: any;
  userData: UserData;
  userResponse: UserResponse;
  constructor(
    private menuCtrl: MenuController,
    private util: UtilitiesService,
    private auth: AuthService,
    private language: LanguageService
  ) {
    this.auth.getUserIDObservable().subscribe((val) => {
      this.userData = {
        lang: this.language.getLanguage(),
        user_id: val,
      };
    });
    this.platform = this.util.platform;
    this.util.showLoadingSpinner().then((__) => {
      this.auth.userData(this.userData).subscribe(
        (data: UserResponse) => {
          if (data.key == 1) {
            this.userResponse = data;
            console.log('user all data :' + JSON.stringify(this.userResponse));
            this.auth.getStoredUserID();
          } else {
            this.util.showMessage(data.msg);
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  ngOnInit() {}

  openMenu() {
    this.menuCtrl.open();
  }
}
