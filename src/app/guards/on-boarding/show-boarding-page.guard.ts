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
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class ShowBoardingPageGuard implements CanActivate {
  opened: boolean = false;
  constructor(private router: Router) {
    this.getData();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.opened;
  }

  async getData() {
    const val = await Storage.get({ key: 'openBoarding' });
    console.log('openBoarding value :' + val.value);
    console.log('opened is ' + this.opened);
    if (val.value == null) {
      this.opened = true;
    } else {
      this.router.navigate(['/tabs/main']);
      this.opened = false;
    }
  }
}
