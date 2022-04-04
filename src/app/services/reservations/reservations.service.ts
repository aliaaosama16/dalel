import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderResponse, UserOrdersData } from 'src/app/models/orders';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private httpclient:HttpClient) { }
  // item reservation details before reserve
  // reserve
  // get all reservations : two types
  // get reservation details


  //store-order 

  //show-all-orders

  showAllOrdersByID(data: UserOrdersData): Observable<OrderResponse> {
    return this.httpclient.post<OrderResponse>(
      `${environment.BASE_URL}show-all-orders`,
      data
    );
  }
  // show-order

}
