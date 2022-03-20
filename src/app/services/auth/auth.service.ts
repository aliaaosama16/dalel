import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }


  login(){ 
    this.httpclient.post(environment.BASE_URL,{});
  }

  register(){ 
    this.httpclient.post(environment.BASE_URL,{});
  }

  forgetPassword(){
    this.httpclient.post(environment.BASE_URL,{});
  }
}
