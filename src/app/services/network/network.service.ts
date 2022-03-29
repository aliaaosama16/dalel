import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor() {}
  networkStatus = new BehaviorSubject(false);

  listenToNetwork() {
    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed', status);
    });
  }

  getNetworkStatus() {
    Network.getStatus().then((status) => {
      this.networkStatus.next(status.connected);
      this.getNetworkStatusObservable().subscribe((status) =>
        console.log('current network status :' + status)
      );
    });
  }

  getNetworkStatusObservable(): Observable<boolean> {
    return this.networkStatus.asObservable();
  }
}
