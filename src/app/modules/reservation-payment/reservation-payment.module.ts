import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPaymentPageRoutingModule } from './reservation-payment-routing.module';

import { ReservationPaymentPage } from './reservation-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPaymentPageRoutingModule
  ],
  declarations: [ReservationPaymentPage]
})
export class ReservationPaymentPageModule {}
