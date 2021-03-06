import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralResponse, UserData } from 'src/app/models/general';
import {
  AddRemoveFavourite,
  DepartmentDetailsResponse,
  DepartmentResponse,
} from 'src/app/models/item';
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

  addRemoveFavourite(data: AddRemoveFavourite): Observable<GeneralResponse> {
    return this.httpclient.post<GeneralResponse>(
      `${environment.BASE_URL}add-to-favourite`,
      data
    );
  }
}
