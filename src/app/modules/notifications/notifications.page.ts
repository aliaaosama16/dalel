import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  currentlangauge: string;

  notifications:any[]=[
    {
    id:1,text:'تم الموافقة على طلبك',date:'الأن',isRead:true
  },
  {
    id:2,text:'تم الموافقة على طلبك',date:'الأن',isRead:false
  },
  {
    id:3,text:'تم الموافقة على طلبك',date:'الأن',isRead:true
  },
  {
    id:4,text:'تم الموافقة على طلبك',date:'الأن',isRead:false
  },
  {
    id:5,text:'تم الموافقة على طلبك',date:'الأن',isRead:true
  },
  {
    id:6,text:'تم الموافقة على طلبك',date:'الأن',isRead:false
  },
  {
    id:7,text:'تم الموافقة على طلبك',date:'الأن',isRead:true
  },
]

  constructor(private menuCtrl:MenuController,private langaugeservice:LanguageService) { }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

  openMenu(){
    this.menuCtrl.open();
  }
}
