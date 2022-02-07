import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from './request.service';


@Component({
  selector: 'app-add-request',
  template: `
<nav>
   <form [formGroup]="addRequestForm" (ngSubmit)="onSubmit()" >
  
  <div class = "form-group">
    <label for = "requestcontent" >Content: </label>
    <input type = "text" class ="form-control" id ="requestcontent" formControlName = "content" placeholder="Request Content">
  </div>
  <br/>
  <div class = "form-group">
    <label for = "requestdescription" >Description: </label>
    <input type = "text" class ="form-control" id ="requestdescription" formControlName = "description" placeholder="Request Description">
  </div>
  <br/>
 
  <br/>

  <button type="submit" class="button" >Add Request</button>  
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
export class AddRequestComponent implements OnInit {
  user:any;
  addRequestForm: FormGroup;
  private subscription: Subscription[] = []

  constructor(private formBuilder : FormBuilder,
    private router :Router,
    private requestService : RequestService
    ) { 
      const navigationState :any = this.router.getCurrentNavigation()?.extras.state
      const extraState:any = navigationState.user
        this.user = extraState
        // console.log(this.user)


      this.addRequestForm = formBuilder.group({
        content: [''],
        description: [''],
        longitude: [''],
        latitude: [''],
        postedTime: [''],
        status: [''],
        comments: [''],
        requestingMember: [''],
      })
      this.subscription[0] = this.addRequestForm?.valueChanges.subscribe((result:any)=>{
      console.log(result)
})
    }

  ngOnInit(): void {
  }

  onSubmit(){
    const rawRequest = this.addRequestForm.value;
    const postedTime : any = new Date();
    const status : string = "Pending";
    const comments : any []= [];
    const requestingMember : any = this.user
    const finalRequest = {...rawRequest, postedTime, status, comments, requestingMember}
    this.subscription[1] = this.requestService.addrequest(finalRequest).subscribe((result:any)=>{
      // console.log(result)
      this.router.navigate(['/','lists'],{state:{user:this.user}})
    })
  }
  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }

}
