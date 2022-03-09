import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyReservationsDetailsPage } from './my-reservations-details.page';

const routes: Routes = [
  {
    path: '',
    component: MyReservationsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyReservationsDetailsPageRoutingModule {}
