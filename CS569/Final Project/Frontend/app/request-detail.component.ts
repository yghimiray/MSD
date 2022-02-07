import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RequestService } from './request.service';

@Component({
  selector: 'app-request-detail',
  template: `
<h1>Service Information Page </h1>
<button (click)="apply()" class="button">Apply </button>
&nbsp;
<button (click)="goToLists()" class="button">Close </button>
<br/>
<h3>{{message}}</h3>
<div class="flex-container">

<div class="flex-child">
<!-- <button (click)="goToAddOffer()" class="btn btn-primary" >Add Offer </button> -->
<h2>Service Requester</h2>
<h4>Basic</h4>
<p> Name:{{request.requestingMember.name}} </p>
<p> Email:{{request.requestingMember.email}} </p>
<p> Phone:{{request.requestingMember.phone}} </p>
<h4>Address</h4>
<p> Street:{{request.requestingMember.address.street}} </p>
<p> City:{{request.requestingMember.address.city}} </p>
<p> State:{{request.requestingMember.address.state}} </p>
<p> Zip:{{request.requestingMember.address.zip}} </p>

</div>

<div class="flex-child">
<!-- <button (click)="goToAddRequest()" class="btn btn-primary" >Add Request </button> -->
<h2>Request's Information</h2>
<p>Content: {{request.content}}</p>
<p>Description: {{request.description}}</p>
<p>Posted On: {{request.postedTime | date: 'MM/dd/YYYY'}}</p>
<p>Status: {{request.status}}</p>

</div>

<div class="flex-child-comment">
<h2>Comments</h2>

<nav>
   <form [formGroup]="requestCommentForm" (ngSubmit)="onSubmit()" >
  <div class = "form-group">
    <label for = "requestcomment" > </label>
    <input type = "text" class ="form-control" id ="requestcomment" formControlName = "comment" placeholder="Comment Here">
    <button type="submit"  >>></button>  
  </div>
  
</form>
</nav>
<div *ngFor="let comment of request.comments">
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

h3 {
    color: red;
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
export class RequestDetailComponent implements OnInit {
  message:string = ""
  request:any;
  user:any;
  requestCommentForm: FormGroup;
  private subscription: Subscription[] = []


  constructor(private router :Router,
    private formBuilder : FormBuilder,
    private requestService : RequestService
    ) {
    const result :any = this.router.getCurrentNavigation()?.extras
    const finalState:any = result.state
      // const result = history.state
    console.log(finalState)
    this.request = finalState.request
    this.user= finalState.user

    this.requestCommentForm = formBuilder.group({
      comment: [''],
    })
    this.subscription[0] = this.requestCommentForm?.valueChanges.subscribe((result:any)=>{
    console.log(result)
})


   }

   apply(){
    if(this.request.requestingMember._id=== this.user._id){
      this.message = "The person who posted the service cannot apply."
    }else{
    this.router.navigate(['/','applytorequest'],{state:{request:this.request, user: this.user}})
   }
  }


  ngOnInit(): void {
  }

  onSubmit(){
    const rawComment = this.requestCommentForm.value;
    const user : any = this.user
    const finalComment = {...rawComment, user}
    console.log(finalComment)
    this.subscription[1] = this.requestService.addComment(this.request._id ,finalComment)
    .subscribe((result:any)=>{
      // console.log(result)
      // this.reloadCurrentRoute()
      this.router.navigate(['/','requestcomment'],{state:{request:this.request, user:this.user}})
    })
  }

  
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl],{state:{request: this.request, user: this.user}});
    });
}

goToLists(){
  this.router.navigate(['/','lists'],{state:{user:this.user}})
}

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }

}
