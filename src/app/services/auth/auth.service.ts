import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthData, AuthResponse } from 'src/app/models/loginData';
import { RegisterData, RegisterResponse } from 'src/app/models/registerData';
import { UpdateUserData, UserData, UserResponse } from 'src/app/models/userData';
import { environment } from 'src/environments/environment';
import { Storage } from '@capacitor/storage';
import {
  ActivationData,
  ActivationResponse,
} from 'src/app/models/activationData';
import { ForgetPasswordData } from 'src/app/models/forgetPassword';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = new BehaviorSubject(false);
  userID = new BehaviorSubject(0);
  userToken: string = '';

  constructor(private httpclient: HttpClient) {}

  storeStatusAfterRegisteration(data: AuthResponse) {
    this.storeToken(data.data?.api_token);
    this.store('activation-status', data.data.is_active);
    this.store('confirmation-status', data.data.is_confirmed);
    this.setUserID(data.data.id);
  }

  storeStatusAfterLogin(data: AuthResponse) {
    this.storeToken(data.data?.api_token);
    this.store('status', data.status);
    this.store('userID', data.data.id);
    this.setUserID(data.data.id);
    this.isLogined();
  }

  async removeRegistrationData() {
    this.removeToken();
    this.removeUserID();
    await Storage.remove({ key: 'activation-status' });
    await Storage.remove({ key: 'confirmation-status' });
    await Storage.remove({ key: 'status' });
  }

  isLogined() {
    this.isAuthenticated.next(true);
  }

  isLogout() {
    this.isAuthenticated.next(false);
  }

  setUserID(userID: number) {
    console.log('set id to behavour sybject '+userID);
    this.userID.next(userID);
  }

  removeUserID() {
    this.userID.next(0);
  }

  async getStoredUserID() {
    const val = await Storage.get({ key: 'userID' });
    this.setUserID(parseInt(val.value));
  }

  getUserIDObservable(): Observable<number> {
    return this.userID.asObservable();
  }

  getLoginedObservable(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

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

  async storeActivationStatus(status: boolean) {
    await Storage.set({
      key: 'activation-status',
      value: status.toString(),
    });
  }

  async store(key: any, value: any) {
    await Storage.set({
      key: key,
      value: value,
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

  updateUserData(data: UpdateUserData): Observable<UserResponse> {
    return this.httpclient.post<UserResponse>(
      `${environment.BASE_URL}update-user`,
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

  activeAccount(data: ActivationData): Observable<ActivationResponse> {
    return this.httpclient.post<ActivationResponse>(
      `${environment.BASE_URL}active-account`,
      data
    );
  }

  logout(data: AuthData): Observable<AuthResponse> {
    return this.httpclient.post<AuthResponse>(
      `${environment.BASE_URL}logout`,
      data
    );
  }

  forgetPassword(data: ForgetPasswordData): Observable<AuthResponse> {
    return this.httpclient.post<AuthResponse>(
      `${environment.BASE_URL}forget-password`,
      data
    );
  }
}
