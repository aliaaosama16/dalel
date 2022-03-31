import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ForgetPasswordData } from 'src/app/models/forgetPassword';
import { AuthResponse } from 'src/app/models/loginData';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  public forgetPasswordForm: FormGroup;
  isForgetPasswordSubmitted = false;
  forgetPasswordData: ForgetPasswordData;

  inputFocusPhone: boolean = false;
  inputFocusPhoneIcon: string = './../../../../assets/icon/phone-active.svg';
  inputInFocusPhoneIcon: string =
    './../../../../assets/icon/phone-inactive.svg';

  constructor(
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    private util: UtilitiesService,
    private langaugeservice: LanguageService,
    private auth: AuthService,
    private router: Router
  ) {
    
    this.menuCtrl.enable(false, 'main');
    this.buildForm();
  }

  ngOnInit() {}

  forgetPassword() {
    console.log(
      'change pass form : ' + JSON.stringify(this.forgetPasswordForm.value)
    );
    if (this.forgetPasswordForm.valid) {
      this.forgetPasswordData = {
        lang: this.langaugeservice.getLanguage(),
        phone: this.forgetPasswordForm.value.phoneNumber,
      };
      this.util.showLoadingSpinner().then((__) => {
        this.auth.forgetPassword(this.forgetPasswordData).subscribe(
          (data: AuthResponse) => {
            if (data.key == 1) {
              console.log('login res :' + JSON.stringify(data));
              this.util.showMessage(data.msg);
              this.router.navigateByUrl('/chnage-password/' + data.data.id);
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
  }

  buildForm() {
    this.forgetPasswordForm = this.formBuilder.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^05/),
          Validators.minLength(10),
          Validators.maxLength(10),
          //10
        ],
      ],
    });
  }

  get forgetPasswordErrorControl() {
    return this.forgetPasswordForm.controls;
  }

  focusPhone(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPhone = focusStatus;
  }
}
