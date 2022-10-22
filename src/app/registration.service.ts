import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFrontEnd } from './user-front-end';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

  public loginUserFromRemote(user :UserFrontEnd):Observable<any>{
    alert(user.emailID + " " + user.password + " " + user.firstName) ;
    return this.http.post("http://localhost:9000/login",user)

  }

  public registerUserFromRemote(user :UserFrontEnd):Observable<any>{
    return this.http.post("http://localhost:9000/registerUser",user)

  }

  public creatUserAccount(user :UserFrontEnd):Observable<any>{
    return this.http.post("http://localhost:9000/createAccount",user)

  }
}
