import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ShowLanguagePageGuard implements CanActivate {
  selectLangauge: boolean = false;
  constructor(private router: Router, private translate: TranslateService) {
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
    return !this.selectLangauge;
  }

  async getData() {
    const val = await Storage.get({ key: 'lang' });
    console.log('lang value :' + val.value);
    console.log('opened is ' + this.selectLangauge);
    if (val.value == null) {
      this.selectLangauge = true;
    } else {
      this.router.navigate(['/on-boarding']);
      this.selectLangauge = false;
    }
  }
}
