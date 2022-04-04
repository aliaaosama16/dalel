import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selectedTab = 'main';
  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  tabsData = [
    {
      tabName: 'main',
      tabActiveIcon: './../../../assets/icon/main-icon-active.svg',
      tabNotActiveIcon: './../../../assets/icon/main-icon-inactive.svg',
    },
    {
      tabName: 'notifications',
      tabActiveIcon: './../../../assets/icon/notifications-icon-active.svg',
      tabNotActiveIcon:
        './../../../assets/icon/notifications-icon-inactive.svg',
    },
    {
      tabName: 'profile',
      tabActiveIcon: './../../../assets/icon/profile-icon-active.svg',
      tabNotActiveIcon: './../../../assets/icon/profile-icon-inactive.svg',
    },
    {
      tabName: 'my-reservations',
      tabActiveIcon: './../../../assets/icon/reservations-icon-active.svg',
      tabNotActiveIcon: './../../../assets/icon/reservations-icon-inactive.svg',
    },
  ];

  constructor() {}

  ngOnInit() {}

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
  }
}
