import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OfferService } from './offer.service';


@Component({
  selector: 'app-offer-detail',
  template: `

<h1>Service Information Page </h1>
<button (click)="goToLists()" class="button">Close </button>
<br/>

        <div class="flex-container">

<div class="flex-child">
<h2>Service Provider</h2>
<h4>Basic</h4>
<p> Name:{{offer.offeringMember.name}} </p>
<p> Email:{{offer.offeringMember.email}} </p>
<p> Phone:{{offer.offeringMember.phone}} </p>
<h4>Address</h4>
<p> Street:{{offer.offeringMember.address.street}} </p>
<p> City:{{offer.offeringMember.address.city}} </p>
<p> State:{{offer.offeringMember.address.state}} </p>
<p> Zip:{{offer.offeringMember.address.zip}} </p>

</div>

<div class="flex-child">
<h2>Offer's Information</h2>
<p>Content: {{offer.content}}</p>
<p>Description: {{offer.description}}</p>
<p>Posted On: {{offer.postedTime | date: 'MM/dd/YYYY'}}</p>
<p>Status: {{offer.status}}</p>
<p>Price: {{offer.price}}</p>

</div>

<div class="flex-child-comment">
<h2>Comments</h2>

<nav>
   <form [formGroup]="offerCommentForm" (ngSubmit)="onSubmit()" >
  <div class = "form-group">
    <label for = "offercomment" > </label>
    <input type = "text" class ="form-control" id ="offercomment" formControlName = "comment" placeholder="Comment Here">
    <button type="submit"  >>></button>  
  </div>
  
</form>
</nav>

<div *ngFor="let comment of offer.comments">
<ul>{{comment.user.name}} >>{{comment.comment}}</ul>
</div>
</div>

</div>

<router-outlet></router-outlet>

  `,
  styles: [
`
h1 {
    font-size: 29px;
    font-weight: lighter;
    display: inline-block;
    font-family:'Open Sans', sans-serif;
    margin:0;
    margin-right: 42px;
}

.flex-container {
    display: flex;
    margin-top:20px;
  }

.flex-child {
    margin-right: 20px;
    column-width: 300px;
    /* flex: 1; */
    /* border: 5px solid rgb(252, 7, 7); */
}  

.flex-child-comment {
    margin-right: 20px;
    column-width: 550px;
    /* flex: 1; */
    /* border: 5px solid rgb(252, 7, 7); */
}  
.flex-child:first-child {
    margin-right: 20px;
} 

input {
  width: 80%;
}


.button {
  display: inline-block;
  padding: 10px 25px;
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
export class OfferDetailComponent implements OnInit {
  offer:any;
  user:any;
  offerCommentForm: FormGroup;
  private subscription: Subscription[] = []


  constructor(private formBuilder : FormBuilder,
    private router :Router,
    private offerService : OfferService
    ) {
    const result :any = this.router.getCurrentNavigation()?.extras
    const finalState:any = result.state
    console.log(finalState)
    this.offer = finalState.offer
    this.user= finalState.user

    this.offerCommentForm = formBuilder.group({
      comment: [''],
    })
    this.subscription[0] = this.offerCommentForm?.valueChanges.subscribe((result:any)=>{
    console.log(result)
})


   }

  ngOnInit(): void {
  }



  onSubmit(){
    const rawComment = this.offerCommentForm.value;
    const user : any = this.user
    const finalComment = {...rawComment, user}
    console.log(finalComment)
    this.subscription[1] = this.offerService.addComment(this.offer._id, finalComment)
    .subscribe((result:any)=>{
      // console.log(result)
      // this.reloadCurrentRoute()
      this.router.navigate(['/','offercomment'],{state:{offer:this.offer, user:this.user}})
    })
    
  }


  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl],{state:{offer: this.offer, user: this.user}});
    });
}


goToLists(){
  this.router.navigate(['/','lists'],{state:{user:this.user}})
}

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }

}
