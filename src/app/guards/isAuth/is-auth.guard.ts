import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private util: UtilitiesService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      console.log('is auth guard :'+this.authService.logined.value);
    if (this.authService.logined) {
      return this.authService.logined;
    } else {
      this.util.showMessage('please login first');
      this.router.navigateByUrl('/login-register');
      return this.authService.logined;
    }
  }
}
