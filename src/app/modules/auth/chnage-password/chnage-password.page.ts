import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {
  ChangePasswordData,
  ForgetPasswordData,
} from 'src/app/models/forgetPassword';
import { AuthResponse } from 'src/app/models/loginData';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-chnage-password',
  templateUrl: './chnage-password.page.html',
  styleUrls: ['./chnage-password.page.scss'],
})
export class ChnagePasswordPage implements OnInit {
  public changePasswordForm: FormGroup;
  changePasswordData: ChangePasswordData;
  ischangePasswordSubmitted = false;

  passwordType: string = 'password';
  iconName: string = 'eye-off-outline';
  showPasswordStatus: boolean;

  confirmPasswordType: string = 'password';
  confirmIconName: string = 'eye-off-outline';
  showConfirmPasswordStatus: boolean;

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

  inputFocusCodeVerification: boolean = false;
  inputFocusCodeVerificationIcon: string =
    './../../../../assets/icon/verified-active.png';
  inputInFocusCodeVerificationIcon: string =
    './../../../../assets/icon/verified-active.png';

  constructor(
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    private util: UtilitiesService,
    private router: Router,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.menuCtrl.enable(false, 'main');
    this.buildForm();
  }

  ngOnInit() {}

  passwordChange() {
    this.ischangePasswordSubmitted = true;
    console.log(
      'change pass form : ' + JSON.stringify(this.changePasswordForm.value)
    );
    if (this.changePasswordForm.valid) {
      if (
        this.changePasswordForm.value.password ==
        this.changePasswordForm.value.confirmPassword
      ) {
        console.log('user id : '+this.activatedRoute.snapshot.paramMap.get('userID'));
        this.changePasswordData = {
          user_id: parseInt(
            this.activatedRoute.snapshot.paramMap.get('userID')
          ),
          code: this.changePasswordForm.value.code,
          password: this.changePasswordForm.value.password,
        };

        this.util.showLoadingSpinner().then((__) => {
          this.auth.changePassword(this.changePasswordData).subscribe(
            (data: AuthResponse) => {
              if (data.key == 1) {
                console.log('changePassword res :' + JSON.stringify(data));
                this.util.showMessage(data.msg);
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
    }
  }

  buildForm() {
    this.changePasswordForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get changePasswordErrorControl() {
    return this.changePasswordForm.controls;
  }

  focusCodeVerification(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusCodeVerification = focusStatus;
  }
  focusPassword(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPassword = focusStatus;
  }

  focusConfirmPassword(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusConfirmPassword = focusStatus;
  }

  showPassword() {
    this.showPasswordStatus = !this.showPasswordStatus;
    this.iconName = this.showPasswordStatus ? 'eye-outline' : 'eye-off-outline';
    this.passwordType = this.showPasswordStatus ? 'text' : 'password';
  }

  showConfirmPassword() {
    this.showConfirmPasswordStatus = !this.showConfirmPasswordStatus;
    this.confirmPasswordType = this.showConfirmPasswordStatus
      ? 'eye-outline'
      : 'eye-off-outline';
    this.confirmIconName = this.showConfirmPasswordStatus ? 'text' : 'password';
  }
}
