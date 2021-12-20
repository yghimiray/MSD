// import { Component, OnInit,OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { RandomUserService } from './random-user.service';


// @Component({
//   selector: 'app-user',
//   template: `
//     <p>
//       ----------------------user Component-------------------------
//     </p>
//     <div [ngClass]="['card', 'card:hover', 'container']" *ngFor="let item of value">
//     <h4>{{item.name.first}} {{item.name.last}}</h4>
//     <p>{{item.dob.date | date:"MMM dd, yyyy"}}</p>
//     <p>{{item.location.street.number}} {{item.location.street.name}}, {{item.location.city}}
//       , {{item.location.state}} {{item.location.postcode}}
//     </p>
//     <p>{{item.phone | phonepipe : "+1" }}</p>
//   </div>
//   `,
//   styles: [
//     `
//     .card {
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//   transition: 0.3s;
//   width: 40%;
//   margin: 10px;
// }
// .card:hover {
//   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
// }
// .container {
//   padding: 2px 16px;
// }
//   `
//   ]
// })
// export class UserComponent implements OnInit , OnDestroy {
//   key:string = "yogesh"
//   value:any[]= []
//   subscription !: Subscription

//   constructor(private service: RandomUserService) { }

//   ngOnInit(): void {
//   this.subscription = this.service.getCachedData(this.key)
//   .subscribe((data:any)=>{
//     this.value = JSON.parse(data)
//   })
//   }

//   ngOnDestroy(){
//     this.subscription.unsubscribe()
//   }

// }
