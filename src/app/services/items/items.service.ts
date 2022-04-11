import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CountryData,
  CountryResponse,
  GeneralSection,
  GeneralSectionResponse,
  Language,
  CitysData,
  UserData,
} from 'src/app/models/general';
import { HomeResponse } from 'src/app/models/home';
import {
  DepartmentDetailsResponse,
  DepartmentResponse,
  FilterData,
  SectionData,
} from 'src/app/models/item';
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

  getCitiesByCountryID(data: CountryData): Observable<GeneralSectionResponse> {
    return this.httpclient.post<GeneralSectionResponse>(
      `${environment.BASE_URL}cities`,
      data
    );
  }

  getNeighborhoodsByCityID(data: CitysData): Observable<CountryResponse> {
    return this.httpclient.post<CountryResponse>(
      `${environment.BASE_URL}neighborhoods`,
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

  allDepartmentsByFilters(data: FilterData): Observable<DepartmentResponse> {
    return this.httpclient.post<DepartmentResponse>(
      `${environment.BASE_URL}all-departments`,
      data
    );
  }

  showDepartmentByID(
    data: ShowDepartmetData
  ): Observable<DepartmentDetailsResponse> {
    return this.httpclient.post<DepartmentDetailsResponse>(
      `${environment.BASE_URL}show-department`,
      data
    );
  }
}
