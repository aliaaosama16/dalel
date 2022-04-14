import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  @Input() images: any;
  currentlangauge: string = '';

  configSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: false,
    effect: 'fade',
    autoplay: false,
    zoom: {
      maxRatio: 5,
    },
  };

  constructor(
    private language: LanguageService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.currentlangauge = this.language.getLanguage();
    console.log(JSON.stringify(this.images));
  }
  
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
