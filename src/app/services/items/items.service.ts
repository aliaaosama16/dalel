import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralSection, Language, UserData } from 'src/app/models/general';
import { HomeResponse } from 'src/app/models/home';
import { DepartmentDetailsResponse, DepartmentResponse, SectionData } from 'src/app/models/item';
import { SectionsResponse, ShowDepartmetData } from 'src/app/models/sections';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private httpclient: HttpClient) {}

  data(data: UserData): Observable<SectionsResponse> {
    return this.httpclient.post<SectionsResponse>(
      `${environment.BASE_URL}sections`,
      data
    );
  }

  home(data: UserData): Observable<HomeResponse> {
    return this.httpclient.post<HomeResponse>(
      `${environment.BASE_URL}home`,
      data
    );
  }

  allDepartments(data: Language): Observable<DepartmentResponse> {
    return this.httpclient.post<DepartmentResponse>(
      `${environment.BASE_URL}all-departments`,
      data
    );
  }
  
  allDepartmentsBySectionID(data: SectionData): Observable<DepartmentResponse> {
    return this.httpclient.post<DepartmentResponse>(
      `${environment.BASE_URL}all-departments`,
      data
    );
  }

  showDepartmentByID(data:ShowDepartmetData): Observable<DepartmentDetailsResponse> {
    return this.httpclient.post<DepartmentDetailsResponse>(
      `${environment.BASE_URL}show-department`,
      data
    );
  }
}
