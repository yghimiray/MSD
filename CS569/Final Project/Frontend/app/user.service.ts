import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
usersUrl : string = 'http://localhost:3000/users/'


  constructor(private httpClient :HttpClient) { }

login(loginUser: any){
  return this.httpClient.post(this.usersUrl+"login", loginUser)
}

signUp(signUpUser:any){
return this.httpClient.post(this.usersUrl,signUpUser)
}

searchAllusers(){
  return this.httpClient.get(this.usersUrl)
}



}
