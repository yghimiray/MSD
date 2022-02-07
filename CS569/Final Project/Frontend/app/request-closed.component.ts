import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-closed',
  template: `
  <div class="flex-container">

  <div class="flex-child">
<h3>{{request.content}} Request's Information</h3>
<p>Content: {{request.content}}</p>
<p>Description: {{request.description}}</p>
<p>Posted On: {{request.postedTime | date: 'MM/dd/YYYY'}}</p>
<p>Status: {{request.status}}</p>
<p>Agreed Price: $ {{request.price}}</p>

</div>

<div class="flex-child">
<h3>Accepted By </h3>
<div *ngIf="request.EngagedMember._id ; else noEngagedMember ">
<p>Name: {{request.EngagedMember.name}} </p>
<p>Email: {{request.EngagedMember.email}} </p>
<p>Phone: {{request.EngagedMember.phone}} </p>
<h5>Address </h5>
<p>Street: {{request.EngagedMember.address.street}} </p>
<p>Apt: {{request.EngagedMember.address.apt}} </p>
<p>City: {{request.EngagedMember.address.city}} </p>
<p>State: {{request.EngagedMember.address.state}} </p>
<p>Zip Code: {{request.EngagedMember.address.zip}} </p>
</div>
<ng-template #noEngagedMember>
  <p>This request has expired before someone has accepted it. </p>
</ng-template>
</div>
<div class="flex-child">
<button (click)="goToLists()" class="button" >Close </button>
</div>

</div>

  `,
  styles: [
    `
    .flex-container {
        display: flex;
    }
    
    .flex-child {
        margin-left: 100px;
        column-width: 500px;
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
export class RequestClosedComponent implements OnInit {

  request:any;
  user:any;

  constructor(  private router :Router) {
    const result :any = this.router.getCurrentNavigation()?.extras
    const finalState:any = result.state
    console.log(finalState)
    this.request = finalState.request
    this.user= finalState.user
    
   }

  ngOnInit(): void {
  }

  goToLists(){
    this.router.navigate(['/','lists'],{state:{user:this.user}})
  }

}
