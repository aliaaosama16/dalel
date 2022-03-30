import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePageRoutingModule } from './code-routing.module';

import { CodePage } from './code.page';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodePageRoutingModule,
    TranslateModule,
    NgOtpInputModule
  ],
  declarations: [CodePage]
})
export class CodePageModule {}
