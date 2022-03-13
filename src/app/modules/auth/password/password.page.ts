import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  inputFocusPassword:boolean=false;
  inputFocusPasswordIcon:string='./../../../../assets/icon/password-active.svg';
  inputInFocusPasswordIcon:string='./../../../../assets/icon/password-inactive.svg';

  inputFocusConfirmPassword:boolean=false;
  inputFocusConfirmPasswordIcon:string='./../../../../assets/icon/password-active.svg';
  inputInFocusConfirmPasswordIcon:string='./../../../../assets/icon/password-inactive.svg';
  
  constructor() { }

  ngOnInit() {
  }


  passwordChange(){

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
