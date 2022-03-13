import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyReservationsDetailsPageRoutingModule } from './my-reservations-details-routing.module';

import { MyReservationsDetailsPage } from './my-reservations-details.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyReservationsDetailsPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [MyReservationsDetailsPage]
})
export class MyReservationsDetailsPageModule {}
