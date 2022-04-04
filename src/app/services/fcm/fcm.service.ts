import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root',
})
export class FcmService {
  constructor() {
    //if (Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === 'android') {
    if (Capacitor.isNativePlatform()) {
      this.initFcm();
    }
  }

  async initFcm() {
    // let permStatus = await PushNotifications.checkPermissions();

    // if (permStatus.receive === 'prompt') {
    //   permStatus = await PushNotifications.requestPermissions();
    // }

    // if (permStatus.receive !== 'granted') {
    //   throw new Error('User denied permissions!');
    // }
    await PushNotifications.checkPermissions().then(async (permission) => {
      if (permission.receive == 'granted') {
        await PushNotifications.register();
      }
    });

    await PushNotifications.addListener('registration', (token) => {
      console.info('Registration token: ', token.value);
      //alert('Registration token:' + token.value);
    });
    await PushNotifications.addListener('registrationError', (err) => {
      console.error('Registration error: ', err.error);
     // alert('Registration error:' + err.error);
    });
    await PushNotifications.addListener(
      'pushNotificationReceived',
      (notification) => {
        console.log(
          'Push notification received: ',
          JSON.stringify(notification)
        );
       // alert('Push notification received: ' + JSON.stringify(notification));
      }
    );

    await PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification) => {
        console.log(
          'Push notification action performed',
          notification.actionId,
          notification.inputValue
        );
        alert(
          'Push notification action performed' +
            notification.actionId +
            notification.inputValue
        );
      }
    );
  }
}
