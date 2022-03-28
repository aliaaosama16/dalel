import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NotificationsData,
  NotificationsInfo,
  NotificationsResponse,
} from 'src/app/models/notifications';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private httpclient: HttpClient) {}

  showNotification(data: NotificationsData): Observable<NotificationsResponse> {
    return this.httpclient.post<NotificationsResponse>(
      `${environment.BASE_URL}show-notification`,
      data
    );
  }

  deleteNotification(
    data: NotificationsInfo
  ): Observable<NotificationsResponse> {
    return this.httpclient.post<NotificationsResponse>(
      `${environment.BASE_URL}delete-notification`,
      data
    );
  }
}