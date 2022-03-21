import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   logined = new BehaviorSubject(false);

  constructor(private httpclient:HttpClient) { }


  isLogined(){
    this.logined.next(true);
  }

  isLogout(){
    this.logined.next(false);
  }


  login(){ 
    this.httpclient.post(environment.BASE_URL,{});
  }

  register(){ 
    this.httpclient.post(environment.BASE_URL,{});
  }

  forgetPassword(){
    this.httpclient.post(environment.BASE_URL,{});
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
