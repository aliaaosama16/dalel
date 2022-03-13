import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentLanguage:string='';
  selectedIndex:number=0;
  // public appPages = [
  //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];

  pages = [
    {
      title: 'main',
      url: '/tabs/main',
      iconActive:'./../assets/icon/home-active.svg',
      iconInActive:'./../assets/icon/home-inactive.svg'
    },
    {
      title: 'contact-us',
      url: '/contact-us',
      iconActive:'./../assets/icon/contact-active.svg',
      iconInActive:'./../assets/icon/contact-inactive.svg'
    },
    {
      title: 'policy',
      url: '/policy',
      iconActive:'./../assets/icon/policy-active.svg',
      iconInActive:'./../assets/icon/policy-inactive.svg'
    },
    {
      title: 'about',
      url: '/about',
      iconActive:'./../assets/icon/about-active.svg',
      iconInActive:'./../assets/icon/about-inactive.svg'
    },
    {
      title: 'favourites',
      url: '/favourites',
      iconActive:'./../assets/icon/fav-active.svg',
      iconInActive:'./../assets/icon/fav-inactive.svg'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private platform: Platform,
    private languageService: LanguageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.languageService.setInitialAppLanguage();
    //  this.currentLanguage=this.languageService.getLanguage();
      //console.log(`language is ${this.currentLanguage}`);
    });
  }
}
