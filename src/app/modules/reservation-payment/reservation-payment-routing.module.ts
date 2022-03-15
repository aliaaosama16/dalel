import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationPaymentPage } from './reservation-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationPaymentPageRoutingModule {}
