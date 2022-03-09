import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyReservationsDetailsPageRoutingModule } from './my-reservations-details-routing.module';

import { MyReservationsDetailsPage } from './my-reservations-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyReservationsDetailsPageRoutingModule
  ],
  declarations: [MyReservationsDetailsPage]
})
export class MyReservationsDetailsPageModule {}
