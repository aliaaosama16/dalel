import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Injectable({
  providedIn: 'root',
})
export class ShowBoardingPageGuard implements CanActivate {
  constructor(private util:UtilitiesService){
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
    return true;
  }

   openBoardingBefore() {
   const openBoarding= this.util.getDataByKey('openBoarding');
    console.log(
      `guard stored openBoarding :` + JSON.stringify(openBoarding)
    );
    if (openBoarding) {
    }
  }
}
