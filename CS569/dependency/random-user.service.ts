import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private client: HttpClient) { }
  
getData(){
return this.client.get('https://randomuser.me/api/?results=10')
}

saveLocally(key:string, value: any):void {
localStorage.setItem(key,value)
}

getCachedData(key:string){
  return of (localStorage.getItem(key))
}


}
