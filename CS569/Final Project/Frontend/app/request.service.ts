import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requestUrl:string = 'http://localhost:3000/requests/'

  constructor(private httpClient :HttpClient) {}


  addrequest(request:any){
    return this.httpClient.post(this.requestUrl, request)
  }

  searchOpenrequests(){
    return this.httpClient.get(this.requestUrl+'openrequests')
  }

  searchClosedrequests(){
    return this.httpClient.get(this.requestUrl+'closedrequests')
  }

  changeStatus(id:any, changes:any){
    return this.httpClient.put(this.requestUrl +'status/'+id, changes);
  }
  
  
addComment(request_id: any, comment:any){
  return this.httpClient.put(this.requestUrl+'comment/' + request_id, comment)
}

searchRequestById(request_id: any){
  return this.httpClient.get(this.requestUrl+ request_id)
}


}
