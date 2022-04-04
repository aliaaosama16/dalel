import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  OrderData,
  OrderDataResponse,
  OrderResponse,
  StoreOrderData,
  UserOrdersData,
} from 'src/app/models/orders';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private httpclient: HttpClient) {}

  storeOrder(data: StoreOrderData): Observable<OrderDataResponse> {
    return this.httpclient.post<OrderDataResponse>(
      `${environment.BASE_URL}store-order`,
      data
    );
  }

  showAllOrdersByID(data: UserOrdersData): Observable<OrderResponse> {
    return this.httpclient.post<OrderResponse>(
      `${environment.BASE_URL}show-all-orders`,
      data
    );
  }
  
  showOrderByID(data: OrderData): Observable<OrderDataResponse> {
    return this.httpclient.post<OrderDataResponse>(
      `${environment.BASE_URL}show-order`,
      data
    );
  }
}
