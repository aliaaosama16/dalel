import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@capacitor/storage';
import { LoadingController, Platform } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  public loading: any;
  userLocation = { lat: 0, lng: 0 };
  constructor(
    private translate: TranslateService,
    private loadingCtrl: LoadingController,
    private plt: Platform
  ) {}

  async showMessage(message: string) {
    await Toast.show({
      text: this.translate.instant(message),
    });
  }

  async storeData(key, value) {
    await Storage.set({
      key: key,
      value: value,
    });
  }

  async getDataByKey(key) {
    const val = await Storage.get({ key: key });
    console.log('openBoarding stored value :' + JSON.stringify(val));
    this.getValue(val.value);
  }

  getValue(value): string {
    return value;
  }

  public async showLoadingSpinner() {
    this.loading = await this.loadingCtrl.create({
      mode: 'md',
      spinner: 'dots',
      cssClass: 'my-loading-class',
      backdropDismiss: false,
    });
    this.loading.present();
    return this.loading;
  }

  getUserLocation() {
    return new Promise(async (resolve, reject) => {
      const locationStatus = await Geolocation.requestPermissions().then(
        async (res) => {
          if (res['location'] == 'granted') {
            const coordinates = await Geolocation.getCurrentPosition();
            console.log(coordinates);
            this.userLocation.lat = coordinates['coords'].latitude;
            this.userLocation.lng = coordinates['coords'].longitude;
          }
        }
      );
      resolve(locationStatus);
      console.log('coordsss: ', JSON.stringify(this.userLocation));
    });
  }

  getPlatformType() {
    return new Promise((resolve, reject) => {
      let platform;
      if (this.plt.is('android')) {
        platform = 'android';
      } else if (this.plt.is('ios')) {
        platform = 'ios';
      }
      resolve(platform);
    });
  }
}
