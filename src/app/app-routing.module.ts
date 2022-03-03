import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'language',// 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./modules/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'on-boarding',
    loadChildren: () => import('./modules/onboarding/on-boarding/on-boarding.module').then( m => m.OnBoardingPageModule)
  },
  {
    path: 'login-register',
    loadChildren: () => import('./modules/auth/login-register/login-register.module').then( m => m.LoginRegisterPageModule)
  },
  {
    path: 'phone-number',
    loadChildren: () => import('./modules/auth/phone-number/phone-number.module').then( m => m.PhoneNumberPageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./modules/auth/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./modules/auth/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/auth/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./modules/auth/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
