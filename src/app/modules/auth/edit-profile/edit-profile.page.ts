import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserData } from 'src/app/models/general';
import { UpdateUserData,  UserResponse } from 'src/app/models/userData';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  userData: UserData;
  updateUserData:UpdateUserData;
  getData:boolean=false;
  userResponse: UserResponse;
  isProfileSubmitted: boolean = false;
  public profileForm: FormGroup;

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

  constructor(
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    private util: UtilitiesService,
    private auth: AuthService,
    private language: LanguageService
  ) {
    this.auth.getUserIDObservable().subscribe((val) => {
      this.userData = {
        lang: this.language.getLanguage(),
        user_id: val,
      };
    });
    this.util.showLoadingSpinner().then((__) => {
      this.auth.userData(this.userData).subscribe(
        (data: UserResponse) => {
          this.userResponse = data;
          console.log('user all data :' + JSON.stringify(this.userResponse));
          this.buildForm();
          this.util.dismissLoading();
          this.getData=true;
        },
        (err) => {
          this.util.dismissLoading();
          this.getData=false;
        }
      );
    });
  }
  ngOnInit() {}

  openMenu() {
    this.menuCtrl.open();
  }

  get profileErrorControl() {
    return this.profileForm.controls;
  }

  buildForm() {
    this.profileForm = this.formBuilder.group({
      userName: [
        this.userResponse.data.first_name,
        [Validators.required, Validators.minLength(2)],
      ],
      phoneNumber: [
        this.userResponse.data.phone,
        [
          Validators.required,
          Validators.pattern(/^05/),
          Validators.minLength(10),
          Validators.maxLength(10),
          //10
        ],
      ],
      email: [
        this.userResponse.data.email,
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    });
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

  editProfile() {
    this.auth.getUserIDObservable().subscribe((val) => {
      this.updateUserData = {
        lang: this.language.getLanguage(),
        user_id: val,
        first_name:this.profileForm.value.userName,
        email:this.profileForm.value.email,
        phone:this.profileForm.value.phoneNumber
      };
    });
    console.log('edited data is ' + JSON.stringify(this.profileForm.value));
    this.util.showLoadingSpinner().then((__) => {
      this.auth.updateUserData(this.updateUserData).subscribe(
        (data: UserResponse) => {
          this.userResponse = data;
          console.log('user all data :' + JSON.stringify(this.userResponse));
          if(data.key==1){
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
