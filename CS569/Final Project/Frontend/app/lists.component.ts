import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OfferService } from './offer.service';
import { RequestService } from './request.service';

@Component({
  selector: 'app-lists',
  template: `
       <button (click)="seeAllUsers()" class="button" > See All Users </button> 
     <div class="flex-container">

<div class="flex-child">
<h2>Open Service Offers</h2>
<button (click)="goToAddOffer()" class="button" >Add Offer </button>
<nav>
<div *ngFor="let offer of openOffers">
  <a [routerLink]="['/','offerdetail']" [state]="{offer:offer,user:user}"> 
  <li>{{offer.postedTime | date: "MM/dd/YYYY"}}-{{offer.content}}-(Status #{{offer.status}})</li>
</a>
</div>
</nav>
</div>

<div class="flex-child">
<h2>Pending Service Requests</h2>
<button (click)="goToAddRequest()" class="button" >Add Request </button>
<nav>
<div *ngFor="let request of openRequests">
<a [routerLink]="['/','requestdetail']" [state]="{request:request, user:user}"> 
<li>{{request.postedTime | date: "MM/dd/YYYY"}}-{{request.content}}-(Status #{{request.status}})</li>
</a>
</div>
</nav>
</div>

</div>

<div class="flex-container">

<div class="flex-child-Inactive">
<h2>Expired Service Offers</h2>
<nav>
<div *ngFor="let offer of closedOffers">
  <!-- <a [routerLink]="['/','offerdetail']" [state]="{offer:offer,user:user}">  -->
  <li appChangeColor >{{offer.postedTime | date: "MM/dd/YYYY"}}-{{offer.content}}-(Status #{{offer.status}})</li>
<!-- </a> -->
</div>
</nav>
</div>

<div class="flex-child-Inactive">
<h2>Service Requests Not Pending </h2>
<nav>
<div *ngFor="let request of closedRequests">
<a [routerLink]="['/','requestclosed']" [state]="{request:request, user:user}"> 
<li appChangeColor >{{request.postedTime | date: "MM/dd/YYYY"}}-{{request.content}}-(Status #{{request.status}})</li>
</a>
</div>
</nav>
</div>

</div>

<router-outlet></router-outlet>
  `,
  styles: [
`
h2 {
    font-size: 29px;
    font-weight: lighter;
    display: inline-block;
    font-family:'Open Sans', sans-serif;
    margin:0;
    margin-right: 42px;
}

.flex-container {
    display: flex;
}

.flex-child {
    margin-right: 20px;
    margin-top: 20px;
    column-width: 500px;
    /* flex: 1; */
    /* border: 5px solid rgb(252, 7, 7); */
}  

.flex-child-Inactive {
    margin-right: 20px;
    margin-top: 20px;
    column-width: 500px;
    color: grey;
    /* flex: 1; */
    /* border: 5px solid rgb(252, 7, 7); */
}  

.flex-child:first-child {
    margin-right: 20px;
} 

.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  vertical-align:top;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

`
  ]
})
export class ListsComponent implements OnInit, OnDestroy {
  user : any;
  // offers:any[]=[]
  openOffers:any[]= []
  closedOffers:any[]= []
  requests:any[]=[]
  openRequests:any[]= []
  closedRequests:any[]= []
  
  private subscription : Subscription [] = [];

  constructor(private router : Router,
    private offerService : OfferService,
    private requestService : RequestService
    ){ 
    const navigationState :any = this.router.getCurrentNavigation()?.extras.state
      this.user = navigationState.user
  }

  ngOnInit(): void {
    this.subscription[0] = this.offerService.searchOpenoffers().subscribe((result:any)=>{
      // console.log(result)
      this.openOffers = result
    })

    this.subscription[1] = this.offerService.searchClosedoffers().subscribe((result:any)=>{
      // console.log(result)
      this.closedOffers = result
    })

    this.subscription[2] = this.requestService.searchOpenrequests().subscribe((result:any)=>{
      // console.log(result)
      this.openRequests = result
    })
    
    this.subscription[3] = this.requestService.searchClosedrequests().subscribe((result:any)=>{
      // console.log(result)
      this.closedRequests = result
    })
    
  }

  goToAddOffer(){
    this.router.navigate(['/','addoffer'],{state:{user:this.user}})
  }

  goToAddRequest(){
    this.router.navigate(['/','addrequest'],{state:{user:this.user}})
  }

  seeAllUsers(){
    this.router.navigate(['/','users'],{state:{user:this.user}})
  }

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }

  

}
