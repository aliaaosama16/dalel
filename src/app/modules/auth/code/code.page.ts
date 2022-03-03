import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  inputFocusPhone:boolean=false;
  constructor() { }

  ngOnInit() {
  }


  confirmVerificationCode(){

  }

  focusPhone(focusStatus:boolean){
    console.log('input focus'+focusStatus);
    this.inputFocusPhone=focusStatus;
  }

  next(ev,nextInput){
   console.log(ev)
   nextInput.setFocus()
  }
}
