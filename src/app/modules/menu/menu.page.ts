import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'main',
      url: '/tabs/main'
    },
    {
      title: 'contact-us',
      url: '/menu/contact-us'
    },
    {
      title: 'policy',
      url: '/menu/policy'
    },
    {
      title: 'about',
      url: '/menu/about'
    },
    {
      title: 'favourites',
      url: '/menu/favourites'
    }
  ];
  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
  }
  // ionViewWillEnter() {
  //   this.menuCtrl.enable(true);
  // }
}
