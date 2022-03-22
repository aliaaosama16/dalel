import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  public contactForm: FormGroup;
  platform:any;
  isContactSubmitted: boolean = false;

  inputFocusPerson: boolean = false;
  inputFocusPersonIcon: string = './../../../../assets/icon/person-active.svg';
  inputInFocusPersonIcon: string =
    './../../../../assets/icon/person-inactive.svg';

  inputFocusPhone: boolean = false;
  inputFocusPhoneIcon: string = './../../../../assets/icon/phone-active.svg';
  inputInFocusPhoneIcon: string =
    './../../../../assets/icon/phone-inactive.svg';

  inputFocusMessage: boolean = false;
  inputFocusMessageIcon: string =
    './../../../../assets/icon/message-active.svg';
  inputInFocusMessageIcon: string =
    './../../../../assets/icon/message-inactive.svg';

  constructor(private formBuilder: FormBuilder,private util:UtilitiesService) {
    this.platform=this.util.platform;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
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
      message: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    });
  }

  focusPerson(status: boolean) {}

  focusPhone(status: boolean) {}

  focusMessage(status: boolean) {}

  get contactErrorControl() {
    return this.contactForm.controls;
  }

  sendMessage() {}
}
