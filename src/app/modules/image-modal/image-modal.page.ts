import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import Swiper, {
  Navigation,
  Pagination,
  SwiperOptions,
  EffectCards,
  Zoom,
} from 'swiper';
Swiper.use([Navigation, Pagination, EffectCards,Zoom]);
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  @Input() images: any;
  @Input() imageID:number;
  currentlangauge: string = '';
  @ViewChild('swiper') imageSwiper: any;

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
    console.log('this.currentImage '+this.imageID)
    this.currentlangauge = this.language.getLanguage();
    console.log(JSON.stringify(this.images));
    this.imageSwiper.swiperRef.slideTo(this.imageID, 400);
  }

  ngAfterViewInit(): void {
    this.imageSwiper.swiperRef.slideTo(this.imageID, 400);

    console.log(this.imageSwiper.swiperRef);
  }
  
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
