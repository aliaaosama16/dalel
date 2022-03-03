import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


  const routes: Routes = [
    {
      path: '',
      component: TabsPage,
      children: [
        {
          path: 'main',
          loadChildren: () => import('./../main/main.module').then( m => m.MainPageModule)
        },

        {
          path: 'notifications',
          loadChildren: () => import('./../notifications/notifications.module').then( m => m.NotificationsPageModule)
        },

        {
          path: 'profile',
          loadChildren: () => import('./../profile/profile.module').then( m => m.ProfilePageModule)
        },
        {
          path: 'my-reservations',
          loadChildren: () => import('./../my-reservations/my-reservations.module').then( m => m.MyReservationsPageModule)
        },
        {
          path: '',
          redirectTo: '/tabs/main',
          pathMatch: 'full'
        }
      ]
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
