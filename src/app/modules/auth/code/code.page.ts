import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  inputFocusPhone: boolean = false;
  codeValues: string;
  code: number;
  constructor() {}

  ngOnInit() {}

  confirmVerificationCode() {
    this.code = parseInt(this.codeValues);
    console.log('code is :'+this.codeValues.substring(9));
  }

  focusPhone(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPhone = focusStatus;
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

  focusFristNumber(){
    
  }
}
