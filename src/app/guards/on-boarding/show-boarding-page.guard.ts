import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Injectable({
  providedIn: 'root',
})
export class ShowBoardingPageGuard implements CanActivate {
  opened: boolean = false;
  constructor(private util: UtilitiesService, private router: Router) {
    this.openBoardingBefore();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      console.log(this.opened)
    return this.opened;
  }

  openBoardingBefore() {
    const openBoarding = this.util.getDataByKey('openBoarding');
    console.log(`guard stored openBoarding :` + JSON.stringify(openBoarding));
    if (openBoarding) {
      this.opened = true;
      this.router.navigate(['/tabs/main']);
    }else{
      this.opened = false;
    }
  }
}
