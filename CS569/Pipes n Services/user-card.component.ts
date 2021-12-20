import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-user-card',
  template: `
    
    <div [ngClass]="['card', 'card:hover', 'container']" >
    <h4>{{item.name.first}} {{item.name.last}} </h4>
    <p>{{item.dob.date | date:"MMM dd, yyyy"}}</p>
    <p>{{item.location.street.number}} {{item.location.street.name}}, {{item.location.city}}
      , {{item.location.state}} {{item.location.postcode}}
    </p>
    <p>{{item.phone | phonepipe : "+1" }}</p>
  </div>
  `,
   styles: [
    `
    .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  margin: 10px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
  padding: 2px 16px;
}
  `
  ]
})
export class UserCardComponent implements OnDestroy {
  private subscription !:Subscription
  value : any[] = []
  item :any;
  email:string=''

  constructor(private activatedRoute: ActivatedRoute,
    private router : Router
    // private location: Location
    ) {  
      const state = history.state;
    this.value = state.value;
    // console.log(this.value)

    this.subscription = this.activatedRoute.paramMap
    .subscribe(params=>{
      this.email = params.get('email') as string;
      this.item = this.value.find(data=>data.email === this.email)
    })
    
     }

  ngOnInit(){
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
