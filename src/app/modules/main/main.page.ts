import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  searchText:string;
  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
  }

  openMenu(){
    this.menuCtrl.open();
  }

  openFilterModal(){
    
  }

}
