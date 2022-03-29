import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NetworkService } from '../network/network.service';
import { UtilitiesService } from '../utilities/utilities.service';
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private network: NetworkService,
    private util: UtilitiesService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('http request response', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.network.getNetworkStatus();
        this.network.getNetworkStatusObservable().subscribe((status) => {
          if (!status) {
            this.util.showMessage('connection error');
          }
        });

        console.error(error);
        return throwError(error);
      })
    );
  }
}
