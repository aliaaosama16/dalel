import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor() {}

  listenToNetwork() {
    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed', status);
    });
  }

  getNetworkStatus() {
    Network.getStatus().then((status) => {
      console.log('network status :' + JSON.stringify(status));
      console.log('network type '+status.connectionType);
    });
  }
}
