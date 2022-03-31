import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChnagePasswordPageRoutingModule } from './chnage-password-routing.module';

import { ChnagePasswordPage } from './chnage-password.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChnagePasswordPageRoutingModule,
    TranslateModule ,
    ReactiveFormsModule
  ],
  declarations: [ChnagePasswordPage]
})
export class ChnagePasswordPageModule {}
