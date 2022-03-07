import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from 'src/app/services/resolver/data-resolver.service';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./../main/main.module').then((m) => m.MainPageModule),
          },
          {
            path: 'categories',
            loadChildren: () =>
              import('./../../modules/categories/categories.module').then(
                (m) => m.CategoriesPageModule
              ),
          },
          {
            path: 'categories/:id',
            resolve: {
              special: DataResolverService
            },
            loadChildren: () =>
              import('./../../modules/category-list/category-list.module').then(
                (m) => m.CategoryListPageModule
              ),
          },
          {
            path: 'categories/:id/:subCatId',
            loadChildren: () =>
              import(
                './../../modules/category-details/category-details.module'
              ).then((m) => m.CategoryDetailsPageModule),
          },
        ],
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./../notifications/notifications.module').then(
            (m) => m.NotificationsPageModule
          ),
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('./../profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'my-reservations',
        loadChildren: () =>
          import('./../my-reservations/my-reservations.module').then(
            (m) => m.MyReservationsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
