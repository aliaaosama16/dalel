import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HeaderComponent } from './header/header.component';
import { CustomDetailsComponent } from './custom-details/custom-details.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    HeaderComponent,
    CustomDetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
  ],
  exports: [
    CustomButtonComponent,
    HeaderComponent,
    CustomDetailsComponent
  ]
})
export class ComponentsModule { }
