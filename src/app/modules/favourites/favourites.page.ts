import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/general';
import {
  DepartmentDetailsResponse,
  DepartmentResponse,
  Item,
} from 'src/app/models/item';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FavouritesService } from 'src/app/services/favourites/favourites.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  platform: any;
  favourites: Item[];
  UserData: UserData;
  noFavourites: boolean = false;
  constructor(
    private util: UtilitiesService,
    private auth: AuthService,
    private langaugeservice: LanguageService,
    private favService: FavouritesService
  ) {
    this.platform = this.util.platform;
    this.UserData = {
      lang: this.langaugeservice.getLanguage(),
      user_id: this.auth.userID.value,
    };
    this.showFavourites(this.UserData);
  }

  ngOnInit() {}

  showFavourites(userData: UserData) {
    this.util.showLoadingSpinner().then((__) => {
      this.favService.showFavourites(userData).subscribe(
        (data: DepartmentResponse) => {
          if (data.key == 1) {
            //this.util.showMessage(data.msg);
            if (data.data.length == 0) {
              this.noFavourites = true;
            }
            this.favourites = data.data;
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  doRefresh($event) {
    this.UserData = {
      lang: this.langaugeservice.getLanguage(),
      user_id: this.auth.userID.value,
    };
    this.favService.showFavourites(this.UserData).subscribe(
      (data: DepartmentResponse) => {
        if (data.key == 1) {
          if (data.data.length == 0) {
            this.noFavourites = true;
          }
          this.favourites = data.data;
        }
        $event.target.complete();
      },
      (err) => {
        $event.target.complete();
      }
    );
  }
}
