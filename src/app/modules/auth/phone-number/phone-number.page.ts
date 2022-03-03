import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit {
  inputFocusPhone:boolean=false;
  inputFocusPhoneIcon:string='./../../../../assets/icon/phone-active.svg';
  inputInFocusPhoneIcon:string='./../../../../assets/icon/phone-inactive.svg';

  constructor(private router:Router) { }

  ngOnInit() {
  }


  sendVerificationCode(){
    this.router.navigateByUrl('/code');
  }

  focusPhone(focusStatus:boolean){
    console.log('input focus'+focusStatus);
    this.inputFocusPhone=focusStatus;
  }
}
