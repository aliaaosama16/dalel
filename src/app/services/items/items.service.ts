import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/general';
import { HomeResponse } from 'src/app/models/home';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpclient: HttpClient) { }
  

  sections(data: UserData): Observable<GeneralResponse> {
    return this.httpclient.post<GeneralResponse>(
      `${environment.BASE_URL}sections`,
      data
    );
  }

 

  home(data: UserData): Observable<HomeResponse> {
    return this.httpclient.post<HomeResponse>(
      `${environment.BASE_URL}sections`,
      data
    );
  }
}
