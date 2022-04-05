import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthGuard } from 'src/app/guards/isAuth/is-auth.guard';
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
              name: DataResolverService,
            },
            loadChildren: () =>
              import('./../../modules/category-list/category-list.module').then(
                (m) => m.CategoryListPageModule
              ),
          },
          {
            path: 'categories/:sectionId/:departmetId',
            loadChildren: () =>
              import(
                './../../modules/category-details/category-details.module'
              ).then((m) => m.CategoryDetailsPageModule),
          },
          {
            path: 'search-filter',
            loadChildren: () =>
              import('./../../modules/search-filter/search-filter.module').then(
                (m) => m.SearchFilterPageModule
              ),
          },
          {
            path: 'search-results',
            loadChildren: () =>
              import(
                './../../modules/search-results/search-results.module'
              ).then((m) => m.SearchResultsPageModule),
          },
          {
            path: 'reservation/:departmetId',
            loadChildren: () =>
              import('./../../modules/reservation/reservation.module').then(
                (m) => m.ReservationPageModule
              ),
          },
          {
            path: 'reservation-payment/:departmetId',
            loadChildren: () =>
              import(
                './../../modules/reservation-payment/reservation-payment.module'
              ).then((m) => m.ReservationPaymentPageModule),
          },
          {
            path: 'contact-us',
            loadChildren: () =>
              import('./../../modules/contact-us/contact-us.module').then(
                (m) => m.ContactUsPageModule
              ),
          },
          {
            path: 'policy',
            loadChildren: () =>
              import('./../../modules/policy/policy.module').then(
                (m) => m.PolicyPageModule
              ),
          },
          {
            path: 'about',
            loadChildren: () =>
              import('./../../modules/about/about.module').then(
                (m) => m.AboutPageModule
              ),
          },
          {
            path: 'favourites',
            canActivate: [IsAuthGuard],
            loadChildren: () =>
              import('./../../modules/favourites/favourites.module').then(
                (m) => m.FavouritesPageModule
              ),
          },
          {
            path: 'settings',
            loadChildren: () =>
              import('./../../modules/settings/settings.module').then(
                (m) => m.SettingsPageModule
              ),
          },
        ],
      },
      {
        path: 'notifications',
        canActivate: [IsAuthGuard],
        loadChildren: () =>
          import('./../notifications/notifications.module').then(
            (m) => m.NotificationsPageModule
          ),
      },
      {
        path: 'profile',
        canActivate: [IsAuthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./../../modules/profile/profile.module').then(
                (m) => m.ProfilePageModule
              ),
          },
          {
            path: 'edit-profile',
            loadChildren: () =>
              import(
                './../../modules/auth/edit-profile/edit-profile.module'
              ).then((m) => m.EditProfilePageModule),
          },
        ],
      },
      {
        path: 'my-reservations',
        canActivate: [IsAuthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./../my-reservations/my-reservations.module').then(
                (m) => m.MyReservationsPageModule
              ),
          },
          {
            path: 'my-reservations-details/:id',
            loadChildren: () =>
              import(
                './../my-reservations-details/my-reservations-details.module'
              ).then((m) => m.MyReservationsDetailsPageModule),
          },
        ],
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
