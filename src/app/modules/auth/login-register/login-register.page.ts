import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { AuthData, AuthResponse } from 'src/app/models/loginData';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterData } from 'src/app/models/registerData';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {
  currentlangauge: string;
  loginData: AuthData;
  registerData: RegisterData;
  showLoginPass: boolean;
  inputLoginType: any = 'password';
  iconLoginName: string = 'eye-off-outline';

  showLRegisterPass: boolean;
  iconRegisterName: string = 'eye-off-outline';
  inputRegisterType: any = 'password';

  showLRegisterConfirmPass: boolean;
  iconRegisterConfirmName: string = 'eye-off-outline';
  inputRegisterConfirmType: any = 'password';

  authType: string = 'signin';
  inputFocusPerson: boolean = false;
  inputFocusPersonIcon: string = './../../../../assets/icon/person-active.svg';
  inputInFocusPersonIcon: string =
    './../../../../assets/icon/person-inactive.svg';

  inputFocusEmail: boolean = false;
  inputFocusEmailIcon: string = './../../../../assets/icon/email-active.svg';
  inputInFocusEmailIcon: string =
    './../../../../assets/icon/email-inactive.svg';

  inputFocusPhone: boolean = false;
  inputFocusPhoneIcon: string = './../../../../assets/icon/phone-active.svg';
  inputInFocusPhoneIcon: string =
    './../../../../assets/icon/phone-inactive.svg';

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

  public registerForm: FormGroup;
  isRegisterSubmitted = false;

  public signinForm: FormGroup;
  isSignInSubmitted = false;
  constructor(
    private langaugeservice: LanguageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private util: UtilitiesService,
    private auth: AuthService,
    private translate: TranslateService
  ) {
    this.menuCtrl.enable(false, 'main');
  }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
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
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signinForm = this.formBuilder.group({
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
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  authTypeChange(ev: any) {
    console.log('Segment changed', ev.detail.value);
  }

  get registerErrorControl() {
    return this.registerForm.controls;
  }

  get signinErrorControl() {
    return this.signinForm.controls;
  }

  signUp() {
    this.isRegisterSubmitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      if (
        this.registerForm.value.password ==
        this.registerForm.value.confirmPassword
      ) {
        this.registerData = {
          lang: this.langaugeservice.getLanguage(),
          first_name: this.registerForm.value.userName,
          email: this.registerForm.value.email,
          phone: this.registerForm.value.phoneNumber,
          password: this.registerForm.value.password,
        };
        this.util.showLoadingSpinner().then((__) => {
          this.auth.register(this.registerData).subscribe(
            (data: AuthResponse) => {
              if (data.key == 1) {
                console.log('register res :' + JSON.stringify(data));
                this.util.showMessage(data.msg);
                this.auth.storeStatusAfterRegisteration(data);
                this.router.navigateByUrl('/code');
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
      } else {
        this.translate.instant(
          'both password and confirm password should be equal'
        );
      }
    } else {
      console.log(this.signinForm.value);
      return false;
    }
  }

  signIn() {
    this.isSignInSubmitted = true;

    console.log('signinForm : ' + JSON.stringify(this.signinForm.value));
    if (this.signinForm.valid) {
      this.loginData = {
        lang: this.langaugeservice.getLanguage(),
        phone: this.signinForm.value.phoneNumber,
        password: this.signinForm.value.password,
        device_id: this.util.deviceID,
      };
      this.util.showLoadingSpinner().then((__) => {
        this.auth.login(this.loginData).subscribe(
          (data: AuthResponse) => {
            if (data.key == 1) {
              console.log('login res :' + JSON.stringify(data));
              this.router.navigateByUrl('/tabs/main');
              this.auth.storeStatusAfterLogin(data);
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
      // return false;
    } else {
      return false;
      console.log(this.signinForm.value);
    }
  }

  forgetPassword() {
    this.router.navigateByUrl('/password');
  }

  changAuthType(authType: string) {
    this.authType = authType;
  }

  // change icon beside input : just for style
  focusPerson(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPerson = focusStatus;
  }

  focusEmail(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusEmail = focusStatus;
  }

  focusPhone(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPhone = focusStatus;
  }

  focusPassword(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPassword = focusStatus;
  }

  focusConfirmPassword(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusConfirmPassword = focusStatus;
  }

  showLoginPassword() {
    this.showLoginPass = !this.showLoginPass;
    this.iconLoginName = this.showLoginPass ? 'eye-outline' : 'eye-off-outline';
    this.inputLoginType = this.showLoginPass ? 'text' : 'password';
  }
  showRegisterPassword() {
    this.showLRegisterPass = !this.showLRegisterPass;
    this.iconRegisterName = this.showLRegisterPass
      ? 'eye-outline'
      : 'eye-off-outline';
    this.inputRegisterType = this.showLRegisterPass ? 'text' : 'password';
  }
  showRegisterConfirmPassword() {
    this.showLRegisterConfirmPass = !this.showLRegisterConfirmPass;
    this.iconRegisterConfirmName = this.showLRegisterConfirmPass
      ? 'eye-outline'
      : 'eye-off-outline';
    this.inputRegisterConfirmType = this.showLRegisterConfirmPass
      ? 'text'
      : 'password';
  }
}
