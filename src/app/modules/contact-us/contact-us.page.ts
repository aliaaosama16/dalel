import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsData} from 'src/app/models/contactUs';
import { GeneralResponse } from 'src/app/models/general';
import { GeneralService } from 'src/app/services/general/general.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  public contactForm: FormGroup;
  contactData: ContactUsData;
  platform: any;
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

  constructor(
    private formBuilder: FormBuilder,
    private util: UtilitiesService,
    private general: GeneralService,
    private language: LanguageService
  ) {
    this.platform = this.util.platform;
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

  focusPerson(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPerson = focusStatus;
  }

  focusPhone(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusPhone = focusStatus;
  }

  focusMessage(focusStatus: boolean) {
    console.log('input focus' + focusStatus);
    this.inputFocusMessage = focusStatus;
  }

  get contactErrorControl() {
    return this.contactForm.controls;
  }

  sendMessage() {
    this.contactData = {
      lang: this.language.getLanguage(),
      name: this.contactForm.value.userName,
      phone: this.contactForm.value.phoneNumber,
      message: this.contactForm.value.message,
    };
    this.util.showLoadingSpinner().then((__) => {
      this.general.contactUs(this.contactData).subscribe(
        (data: GeneralResponse) => {
          if (data.key == 1) {
            console.log('contact us  res :' + JSON.stringify(data));
            this.util.showMessage(data.msg);
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
