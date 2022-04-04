import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/general';
import { DepartmentDetailsResponse, DepartmentResponse } from 'src/app/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private httpclient: HttpClient) {}

  showFavourites(data: UserData): Observable<DepartmentResponse> {
    return this.httpclient.post<DepartmentResponse>(
      `${environment.BASE_URL}show-favourites`,
      data
    );
  }
}
