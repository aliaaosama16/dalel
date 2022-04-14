import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CustomDetailsComponent } from './custom-details/custom-details.component';
import { CustomCardComponent } from './custom-card/custom-card.component';


@NgModule({
  declarations: [
    
    HeaderComponent,
    CustomDetailsComponent,
    CustomCardComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
  ],
  exports: [
 
    HeaderComponent,
    CustomDetailsComponent,
    CustomCardComponent
  ]
})
export class ComponentsModule { }
