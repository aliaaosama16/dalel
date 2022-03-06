import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  searchText:string;
  currentlangauge: string;

  configSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: true,
  };
  configContent: SwiperOptions = {
    slidesPerView: 2.3,
    spaceBetween: 10,
    pagination: true,
  };

  constructor(
    private menuCtrl:MenuController,public modalController: ModalController,
    private langaugeservice: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }
  

  openMenu(){
    this.menuCtrl.open();
  }

  openFilterModal(){

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component:'search-filter' ,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
