import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShowLanguagePageGuard } from './guards/language/show-language-page.guard';
import { ShowBoardingPageGuard } from './guards/on-boarding/show-boarding-page.guard';
import { DataResolverService } from './services/resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'language',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./modules/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'language',
    canActivate:[ShowLanguagePageGuard],
    loadChildren: () =>
      import('./modules/language/language.module').then(
        (m) => m.LanguagePageModule
      ),
  },
  {
    path: 'on-boarding',
    canActivate:[ShowBoardingPageGuard],
    loadChildren: () =>
      import('./modules/onboarding/on-boarding/on-boarding.module').then(
        (m) => m.OnBoardingPageModule
      ),
  },
  {
    path: 'login-register',
    resolve: {
     page : DataResolverService,
    },
    loadChildren: () =>
      import('./modules/auth/login-register/login-register.module').then(
        (m) => m.LoginRegisterPageModule
      ),
  },
  {
    path: 'phone-number',
    loadChildren: () =>
      import('./modules/auth/phone-number/phone-number.module').then(
        (m) => m.PhoneNumberPageModule
      ),
  },
  {
    path: 'code',
    loadChildren: () =>
      import('./modules/auth/code/code.module').then((m) => m.CodePageModule),
  },
  {
    path: 'password',
    loadChildren: () =>
      import('./modules/auth/password/password.module').then(
        (m) => m.PasswordPageModule
      ),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./modules/notifications/notifications.module').then(
        (m) => m.NotificationsPageModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./modules/contact-us/contact-us.module').then(
        (m) => m.ContactUsPageModule
      ),
  },
  {
    path: 'policy',
    loadChildren: () =>
      import('./modules/policy/policy.module').then((m) => m.PolicyPageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'favourites',
    loadChildren: () =>
      import('./modules/favourites/favourites.module').then(
        (m) => m.FavouritesPageModule
      ),
  },
 
  {
    path: 'chnage-password/:userID',
    loadChildren: () => import('./modules/auth/chnage-password/chnage-password.module').then( m => m.ChnagePasswordPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./modules/image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
