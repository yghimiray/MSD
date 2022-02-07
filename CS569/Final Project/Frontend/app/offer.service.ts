import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
offerUrl:string = 'http://localhost:3000/offers/'

constructor(private httpClient :HttpClient) {}

addOffer(offer:any){
  return this.httpClient.post(this.offerUrl,offer)
}  

searchOpenoffers(){
  return this.httpClient.get(this.offerUrl+'openoffers')
}

searchClosedoffers(){
  return this.httpClient.get(this.offerUrl+'closedoffers')
}

searchOfferById(offer_id: any){
  return this.httpClient.get(this.offerUrl+ offer_id)
}

addComment(offer_id: any, comment:any){
  return this.httpClient.put(this.offerUrl+'comment/' + offer_id, comment)
}


}
