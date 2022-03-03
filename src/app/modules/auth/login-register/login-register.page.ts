import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {
  currentlangauge: string;
  authType:string='register';
  inputFocusPerson:boolean=false;
  inputFocusPersonIcon:string='./../../../../assets/icon/person-active.svg';
  inputInFocusPersonIcon:string='./../../../../assets/icon/person-inactive.svg';

  inputFocusEmail:boolean=false;
  inputFocusEmailIcon:string='./../../../../assets/icon/email-active.svg';
  inputInFocusEmailIcon:string='./../../../../assets/icon/email-inactive.svg';

  inputFocusPhone:boolean=false;
  inputFocusPhoneIcon:string='./../../../../assets/icon/phone-active.svg';
  inputInFocusPhoneIcon:string='./../../../../assets/icon/phone-inactive.svg';

  inputFocusPassword:boolean=false;
  inputFocusPasswordIcon:string='./../../../../assets/icon/password-active.svg';
  inputInFocusPasswordIcon:string='./../../../../assets/icon/password-inactive.svg';

  inputFocusConfirmPassword:boolean=false;
  inputFocusConfirmPasswordIcon:string='./../../../../assets/icon/password-active.svg';
  inputInFocusConfirmPasswordIcon:string='./../../../../assets/icon/password-inactive.svg';
  
  constructor(
    private langaugeservice: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentlangauge=this.langaugeservice.getLanguage();
  }

  authTypeChange(ev: any) {
    console.log('Segment changed', ev.detail.value);
  }

  signUp(){
     // api call for register new account  
     
     this.router.navigateByUrl('/phone-number');
  }

  signIn(){
     // api call for login current user    
  }

  forgetPassword(){
    this.router.navigateByUrl('/password');
  }

  changAuthType(authType:string){
    this.authType=authType;
  }

  focusPerson(focusStatus:boolean){
    console.log('input focus'+focusStatus);
    this.inputFocusPerson=focusStatus;
  }

  focusEmail(focusStatus:boolean){
    console.log('input focus'+focusStatus);
    this.inputFocusEmail=focusStatus;
  }

  focusPhone(focusStatus:boolean){
    console.log('input focus'+focusStatus);
    this.inputFocusPhone=focusStatus;
  }

  focusPassword(focusStatus:boolean){
    console.log('input focus'+focusStatus);
    this.inputFocusPassword=focusStatus;
  }

  focusConfirmPassword(focusStatus:boolean){
    console.log('input focus'+focusStatus);
    this.inputFocusConfirmPassword=focusStatus;
  }
}
