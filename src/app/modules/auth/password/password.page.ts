import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  inputFocusPassword: boolean = false;
  inputFocusPasswordIcon: string =
    './../../../../assets/icon/password-active.svg';
  inputInFocusPasswordIcon: string =
    './../../../../assets/icon/password-inactive.svg';

  inputFocusConfirmPassword: boolean = false;
  inputFocusConfirmPasswordIcon: string =
    './../../../../assets/icon/password-active.svg';
  inputInFocusConfirmPasswordIcon: string =
    './../../../../assets/icon/password-inactive.svg';

  constructor(private menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'main-content');
  }

  ngOnInit() {}

  passwordChange() {}

  focusPassword(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPassword = focusStatus;
  }

  focusConfirmPassword(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusConfirmPassword = focusStatus;
  }
}
