import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Injectable({
  providedIn: 'root',
})
export class CanEnterLoginPageGuard implements CanActivate {

  constructor(
     private util: UtilitiesService,
     private router: Router,
     private authService:AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.util.showMessage('please login first');
      this.router.navigateByUrl('/login-register');
      return false;
    }
  }
}
