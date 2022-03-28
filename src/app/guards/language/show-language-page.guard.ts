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
  savedLangauge: boolean = false;
  constructor(private router: Router) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const val = await Storage.get({ key: 'lang' });
    console.log('lang value :' + val.value);
    console.log('opened is ' + this.savedLangauge);
    if (val.value == null) {
      this.savedLangauge = true;
    } else {
      this.router.navigate(['/on-boarding']);
      this.savedLangauge = false;
    }
    return this.savedLangauge;
  }
}
