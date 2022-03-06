# dalel




to prevent flickering:
-webkit-transform-style: preserve-3d;   
-webkit-backface-visibility: hidden;
===============================================================
add icon and splash:

1- npm install -g cordova-res
2- Now we need to create a resources folder at the top of our project and put in two files:
    icon.(png|jpg) must be at least 1024×1024px
    splash.(png|jpg) must be at least 2732×2732px
3- 
make sure you run these
ionic build
ionic cap add ios
ionic cap add android

4- then run these:

cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy


main page:

.header-img {
  
  img {
    width: 100%;
  }

  .title {
    position: absolute;

    right: 18%;
    top: 21%;
    p {
      font-size: 18px;
      font-family: "Cairo-Bold";
      color: var(--ion-color-primary);
    }
  }

  .icon {
    position: absolute;
    right: 16px;
    top: 28%;
    ion-icon {
      width: 40px;
      height: 40px;
    }
  }
 
}


ion-header {
  ion-toolbar {
    --background: #ffeee3 !important;
  }
}

.search-bar {
  height: 55px;
  border-radius: 25px;
  border: 1px solid #e1e1e1;
}

.slider-section {
  .custom-swiper {
    border-radius: 10px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    position: fixed;
    top: 0px;
    padding-bottom: 3px;
    text-align: start;
    height: 20 !important;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .categories-section {
    margin-top: 16px;
    display: flex;

    padding: 0 16px !important;
    ion-row {
      ion-col {
        .title {
          font-size: 18px !important;
          font-family: "Cairo-Bold" !important;
          margin: 0px;
        }

        .sub-title {
          font-size: 14px;
          font-family: "Cairo-Regular" !important;
          color: var(--ion-color-primary) !important;
        }
      }
    }
  }
}


<ion-header class="ion-no-border">
    <div class="header-img">
        <img src="../../../assets/icon/bg.svg">

        <div class="icon" (click)="openMenu()">
            <ion-icon src="./../../assets/icon/menu-icon.svg">
            </ion-icon>
        </div>

        <div class="title">
            <p>{{"main"|translate}}</p>
        </div>
    </div>
</ion-header>


<ion-content>
    <div class="search-section">
        <ion-row class="ion-align-items-center ion-justify-content-center">
            <ion-col size="10">
                <ion-item class="search-bar" lines="none">
                    <ion-input placeholder="{{'user-name'|translate}}" type="text"></ion-input>
                    <ion-icon item-start color="primary" name="search">
                    </ion-icon>
                </ion-item>
            </ion-col>
            <ion-col size="2" class="ion-align-self-center ion-float-right">
                <ion-fab-button color="secondary">
                    <ion-icon color="white" name="funnel-outline"></ion-icon>
                </ion-fab-button>
            </ion-col>
        </ion-row>
    </div>


    <div class="slider-section ion-padding">
        <swiper #swiper [config]="config" class="custom-swiper" [dir]="currentlangauge == 'ar' ? 'rtl' : 'ltr'">
            <ng-template swiperSlide *ngFor="let i of [{},{},{}]">
                <img src="./../../../assets/icon/1024-500.png">
            </ng-template>
        </swiper>
    </div>

    <div class="categories-section">
        <!-- <ion-row > -->
        <!-- class="ion-text-start" -->
        <!-- <ion-col size="4"> -->
        <div>
            <h5 class="title"> {{"categories"|translate}} </h5>
        </div>

        <!-- </ion-col>
          <ion-col size="4"></ion-col>
          <ion-col size="4"> -->
        <!-- class="ion-text-end" -->
        <div>
            <p class="sub-title"> {{"show-all"|translate}} </p>
        </div>


        <!-- </ion-col>
      </ion-row> -->


    </div>

</ion-content>

 input:focus {
      border-color: var(--ion-color-);
    }
