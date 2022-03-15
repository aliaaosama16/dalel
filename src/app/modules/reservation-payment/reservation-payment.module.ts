import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPaymentPageRoutingModule } from './reservation-payment-routing.module';

import { ReservationPaymentPage } from './reservation-payment.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPaymentPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [ReservationPaymentPage]
})
export class ReservationPaymentPageModule {}
