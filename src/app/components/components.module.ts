import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CustomButtonComponent } from './custom-button/custom-button.component';


@NgModule({
  declarations: [
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
  ],
  exports: [
    CustomButtonComponent
  ]
})
export class ComponentsModule { }
