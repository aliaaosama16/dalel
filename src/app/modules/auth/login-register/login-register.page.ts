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
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {
  currentlangauge: string;

  authType: string = 'register';
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
    private formBuilder: FormBuilder,private menuCtrl:MenuController) {
      this.menuCtrl.enable(false,'main-content')
    
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
    // api call for register new account
    this.isRegisterSubmitted = true;
    console.log(this.registerForm.value);
    // if (!this.registerForm.valid) {
    //   console.log('Please provide all the required values!');
    //   return false;
    // } else {
    //   console.log(this.registerForm.value);
    // }

    this.router.navigateByUrl('/phone-number');
  }

  signIn() {
    // api call for login current user
    this.isSignInSubmitted = true;
    // console.log('signinForm : '+this.signinForm.value);
    // if (!this.signinForm.valid) {
    //   console.log('Please provide all the required values!');
    //   return false;
    // } else {
    //   console.log(this.signinForm.value);
    // }

    this.router.navigateByUrl('/tabs/main');
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
}
