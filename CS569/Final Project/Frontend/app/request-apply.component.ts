import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from './request.service';

@Component({
  selector: 'app-request-apply',
  template: `
  <h1> Service Application Confirmation Page</h1>
  <br/>

       <form [formGroup]="applyForm" (ngSubmit)="onSubmit()" >
  
  <div class = "form-group">
    <label for = "requestprice" >What is the agreed price: </label>
    <input type = "text" class ="form-control" id ="requestprice" formControlName = "price" placeholder="Enter Agreed Price">
  </div>
  <!-- <br/>
  <div class = "form-group">
    <label for = "requestdescription" >Description: </label>
    <input type = "text" class ="form-control" id ="requestdescription" formControlName = "description" placeholder="Request Description">
  </div>
  <br/> -->
 
  <br/>

  <button type="submit" class="button" >Confirm</button> 
  &nbsp; 
  <button (click)="goToLists()" class="button" >Cancel </button>
</form>

  `,
  styles: [
    `
    input{
  position: fixed;
  left: 200px;
  width: 20%;
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
export class RequestApplyComponent implements OnInit, OnDestroy{
  applyForm: FormGroup;
  private subscription: Subscription[] = []
  request:any;
  user:any;

  constructor(private formBuilder : FormBuilder,
    private router :Router,
    private requestService : RequestService
    ) {
    const result :any = this.router.getCurrentNavigation()?.extras
    const finalState:any = result.state
    console.log(finalState)
    this.request = finalState.request
    this.user= finalState.user

    this.applyForm = formBuilder.group({
      price: [''],
    })
    this.subscription[0] = this.applyForm?.valueChanges.subscribe((result:any)=>{
    console.log(result)
})
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const price : String = this.applyForm.value;
    const status : string = "Accepted";
    const EngagedMember : any = this.user;
    const changes : any ={...price, status, EngagedMember}
    this.subscription[0]= this.requestService.changeStatus(this.request._id, changes)
    .subscribe((result:any)=>{
      // console.log(result)
      this.router.navigate(['/','requestclosed'],{
        state:{
          request:this.request,
          user:this.user,
          // changes:changes
        }})
    })

  }

  goToLists(){
    this.router.navigate(['/','lists'],{state:{user:this.user}})
  }


  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }

}
