import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userData=
   {
    name:'aliaa',
    phone:'01077262662',
    email:'engaliaa@gmail.com'
   }
  ;
  constructor(
    private menuCtrl: MenuController,
    private langaugeservice: LanguageService
  ) {}

  ngOnInit() {}

  openMenu() {
    this.menuCtrl.open();
  }
}
