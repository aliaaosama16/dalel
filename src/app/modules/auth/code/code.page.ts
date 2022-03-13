import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
  constructor(private router: Router,private menuCtrl:MenuController) {
    this.menuCtrl.enable(false,'main')
  }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  // }

  ngOnInit() {}

  confirmVerificationCode() {
    this.code = parseInt(this.codeValues);
    console.log('code is :' + this.codeValues.substring(9));

    this.router.navigateByUrl('/tabs');
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
