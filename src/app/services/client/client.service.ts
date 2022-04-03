import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponse, UserData } from 'src/app/models/general';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpclient: HttpClient) { }

  updateLocation(data: Location): Observable<GeneralResponse> {
    return this.httpclient.post<GeneralResponse>(
      `${environment.BASE_URL}update-location`,
      data
    );
  }

  
}
