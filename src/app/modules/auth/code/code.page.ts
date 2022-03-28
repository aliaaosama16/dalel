import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ActivationData } from 'src/app/models/activationData';
import { AuthResponse } from 'src/app/models/loginData';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  inputFocusNumber1: boolean = false;
  inputFocusNumber2: boolean = false;
  inputFocusNumber3: boolean = false;
  inputFocusNumber4: boolean = false;
  codeValues: string;
  code: number;
  activationData: ActivationData;
  constructor(
    private router: Router,
    private auth: AuthService,
    private menuCtrl: MenuController,
    private util: UtilitiesService,
    private language: LanguageService
  ) {
    this.menuCtrl.enable(false, 'main');
  }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  // }

  ngOnInit() {}

  confirmVerificationCode() {
    this.code = parseInt(this.codeValues);
    console.log('code is :' + this.codeValues.substring(9));

    this.auth.getUserIDObservable().subscribe((val) => {
      this.activationData = {
        lang: this.language.getLanguage(),
        user_id: val,
        code: this.codeValues.substring(9),
        device_id: this.util.deviceID,
      };
    });
    this.util.showLoadingSpinner().then((__) => {
      this.auth.activeAccount(this.activationData).subscribe(
        (data: AuthResponse) => {
          if (data.key == 1) {
            console.log('activeAccount  res :' + JSON.stringify(data));
            this.util.showMessage(data.msg);
            this.util.showMessage('login now');
            this.router.navigateByUrl('/login-register');
          } else {
            this.util.showMessage(data.msg);
          }
          this.util.dismissLoading();
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });
  }

  focusNumber1(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusNumber1 = focusStatus;
  }

  focusNumber2(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusNumber2 = focusStatus;
  }

  focusNumber3(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusNumber3 = focusStatus;
  }

  focusNumber4(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusNumber4 = focusStatus;
  }

  next(ev, nextInput) {
    console.log(ev.target.value);

    const input = ev.target;
    const length = input.value.length;
    console.log('length is ' + length);
    const maxLength = input.attributes.maxlength.value;
    console.log('maxLength is ' + maxLength);
    this.codeValues += ev.target.value;
    console.log(this.codeValues);
    if (length >= maxLength) {
      nextInput.setFocus();
    }
  }

  focusFristNumber() {}
}
