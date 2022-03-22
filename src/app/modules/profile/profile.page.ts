import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  platform:any;
  userData=
   {
    name:'aliaa',
    phone:'01077262662',
    email:'engaliaa@gmail.com'
   }
  ;
  constructor(
    private menuCtrl: MenuController,
    private util:UtilitiesService
  ) {
    this.platform = this.util.platform;
  }

  ngOnInit() {}

  openMenu() {
    this.menuCtrl.open();
  }
}
