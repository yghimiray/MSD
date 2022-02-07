import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SNSService {

  url:string = 'https://pmifjqzufb.execute-api.us-east-1.amazonaws.com/v1/final-project'

  constructor(private httpClient :HttpClient) {}

  snsMessage(message:any){
    return this.httpClient.post(this.url, message)
  }

}
