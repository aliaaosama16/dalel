import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData, LoginResponse } from 'src/app/models/loginData';
import { RegisterData, RegisterResponse } from 'src/app/models/registerData';
import { UserData, UserResponse } from 'src/app/models/userData';
import { environment } from 'src/environments/environment';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logined = new BehaviorSubject(true);
  userToken: string = '';

  constructor(private httpclient: HttpClient) {}

  isLogined() {
    this.logined.next(true);
  }

  isLogout() {
    this.logined.next(false);
  }

  async storeToken(token: string) {
    await Storage.set({
      key: 'USER-TOKEN',
      value: token,
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

  login(data: LoginData): Observable<LoginResponse> {
    return this.httpclient.post<LoginResponse>(
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

  logout(data: LoginData): Observable<LoginResponse> {
    return this.httpclient.post<LoginResponse>(
      `${environment.BASE_URL}logout`,
      data
    );
  }

  forgetPassword() {
    this.httpclient.post(environment.BASE_URL, {});
  }

  // authentication(dataModel: NicSsoResponse) {
  //   return this._http.post<AuthenticationResponse>(
  //     `${environment.baseUrl}/authentication/mobileAuthenticateByLogId`,
  //     dataModel
  //   );
  // }

  // register(dataModel: RegisterationRequest) {
  //   return this._http.post<AuthenticationResponse>(
  //     `${environment.baseUrl}/authentication/registerNewUser`,
  //     dataModel
  //   );
  //}
}
