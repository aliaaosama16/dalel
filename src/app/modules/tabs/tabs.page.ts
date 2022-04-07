import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selectedTab = 'main';
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  noOfNotifications: number;
  isLogined: boolean = false;

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

  constructor(private auth: AuthService) {
    if (this.auth.isAuthenticated.value) {
      this.isLogined = this.auth.isAuthenticated.value;
      this.auth.getNoOfNotifications().subscribe((val) => {
        if (val != 0) {
          this.noOfNotifications = val;
        }else{
          this.noOfNotifications=0;
        }
      });
      
    }
  }

  ngOnInit() {}

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
  }
}
