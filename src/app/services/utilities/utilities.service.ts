import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@capacitor/storage';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  public loading: any;
  constructor(
    private translate: TranslateService,
    private loadingCtrl: LoadingController
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
    this.getValue(val);
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
}
