import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUsData, ContactUsResponse } from 'src/app/models/contactUs';
import { Intro, IntroData } from 'src/app/models/intro';
import { StaticPageData, StaticPageResponse } from 'src/app/models/staticPage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor(private httpclient: HttpClient) {}

  intro(): Observable<Intro> {
    return this.httpclient.get<Intro>(`${environment.BASE_URL}intro`);
  }

  staticPages(data: StaticPageData): Observable<StaticPageResponse> {
    return this.httpclient.post<StaticPageResponse>(
      `${environment.BASE_URL}page`,
      data
    );
  }

  contactUs(data: ContactUsData): Observable<ContactUsResponse> {
    return this.httpclient.post<ContactUsResponse>(
      `${environment.BASE_URL}contact-us`,
      data
    );
  }
}
