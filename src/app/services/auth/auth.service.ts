import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthData, AuthResponse } from 'src/app/models/loginData';
import { RegisterData, RegisterResponse } from 'src/app/models/registerData';
import { UserData, UserResponse } from 'src/app/models/userData';
import { environment } from 'src/environments/environment';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logined = new BehaviorSubject(true);
  userID = new BehaviorSubject(0);
  userToken: string = '';

  constructor(private httpclient: HttpClient) {}

  isLogined() {
    this.logined.next(true);
  }

  isLogout() {
    this.logined.next(false);
  }

  setUserID(userID:number){
    this.userID.next(userID);
  }


  removeUserID(){
    this.userID.next(0);
  }

  
  getUserIDObservable(): Observable<number>{
    return this.userID.asObservable();
  }

  // async storeLoginStatus(status: boolean) {
  //   await Storage.set({
  //     key: 'logined',
  //     value: status.toString(),
  //   });
  // }

  async storeToken(token: string) {
    await Storage.set({
      key: 'USER-TOKEN',
      value: token,
    });
  }

  async removeToken() {
    await Storage.remove({
      key: 'USER-TOKEN',
    });
  }

  async getUserToken() {
    const val = await Storage.get({ key: 'USER-TOKEN' });
    this.userToken = val.value;
  }

  userData(data: UserData): Observable<UserResponse> {
    return this.httpclient.post<UserResponse>(
      `${environment.BASE_URL}show-user`,
      data
    );
  }

  login(data: AuthData): Observable<AuthResponse> {
    return this.httpclient.post<AuthResponse>(
      `${environment.BASE_URL}login`,
      data
    );
  }

  register(data: RegisterData): Observable<RegisterResponse> {
    return this.httpclient.post<RegisterResponse>(
      `${environment.BASE_URL}register`,
      data
    );
  }

  logout(data: AuthData): Observable<AuthResponse> {
    return this.httpclient.post<AuthResponse>(
      `${environment.BASE_URL}logout`,
      data
    );
  }

  forgetPassword() {
    this.httpclient.post(environment.BASE_URL, {});
  }
}
