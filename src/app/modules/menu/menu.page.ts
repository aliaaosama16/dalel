import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
