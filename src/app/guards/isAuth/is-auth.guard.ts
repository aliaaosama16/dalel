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
  isLogined: boolean;
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
    console.log('is auth guard :' + this.authService.logined.value);
    this.authService.getLoginedObservable().subscribe((val) => {
      this.isLogined = val;
    });
    this.authService.getStoredUserID();
    if (this.isLogined) {
      return true;
    } else {
      this.util.showMessage('please login first');
      this.router.navigateByUrl('/login-register');
      return false;
    }
  }
}
