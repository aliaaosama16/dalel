import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit {
  inputFocusPhone: boolean = false;
  inputFocusPhoneIcon: string = './../../../../assets/icon/phone-active.svg';
  inputInFocusPhoneIcon: string =
    './../../../../assets/icon/phone-inactive.svg';

  constructor(private router: Router, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'main');
  }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  // }
  ngOnInit() {}

  sendVerificationCode() {
    this.router.navigateByUrl('/code');
  }

  focusPhone(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPhone = focusStatus;
  }
}
