import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { ActivationData } from 'src/app/models/activationData';
import { AuthResponse } from 'src/app/models/loginData';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data/data.service';

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
    private language: LanguageService,
    private platform: Platform,
    private location: Location,
    private data:DataService
  ) {
    this.menuCtrl.enable(false, 'main');
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.location.back();
    });
  }

  ngOnInit() {}

  confirmVerificationCode() {
    this.code = parseInt(this.codeValues);
    console.log('code is :' + this.codeValues.substring(9));

    this.activationData = {
      lang: this.language.getLanguage(),
      user_id: this.auth.userID.value == 0 ? 1 : this.auth.userID.value,
      code: this.codeValues.substring(9),
      device_id: this.util.deviceID,
    };

    this.util.showLoadingSpinner().then((__) => {
      this.auth.activeAccount(this.activationData).subscribe(
        (data: AuthResponse) => {
          if (data.key == 1) {
            console.log('activeAccount  res :' + JSON.stringify(data));
            this.util.showMessage(data.msg);
            this.util.showMessage('login now');
            this.data.setPreviousPage('signin');
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

  next(ev, nextInput, current) {
    console.log('input value :  ' + ev.target.value, nextInput);

    if (current == 'n1') {
      this.inputFocusNumber1 = true;
    } else if (current == 'n2') {
      this.inputFocusNumber2 = true;
    } else if (current == 'n3') {
      this.inputFocusNumber3 = true;
    } else if (current == 'n4') {
      this.inputFocusNumber4 = true;
    }
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

  onOtpChange($event) {
    console.log('numbers' + JSON.stringify($event));
  }
}
