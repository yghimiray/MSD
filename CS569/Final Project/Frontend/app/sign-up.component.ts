import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-sign-up',
  template: `
  
     <div class="flex-container">

<div class="flex-child">
<h2>Sign Up Form </h2>
<form [formGroup]="signUpForm" >
  
  <div class = "form-group">
    <label for = "username" >Username: </label>
    <input type = "text" class ="form-control" id ="username" formControlName = "username" placeholder="Username">
  </div>
  <br/>
  <div class = "form-group">
    <label for = "password" >Password: </label>
    <input type = "password" class ="form-control" id ="password" formControlName = "password" placeholder="Password">
  </div>
  <br/>
 
  <div class = "form-group">
  <label for = "name" >Name: </label>
    <input type = "text" class ="form-control" id ="name" formControlName = "name" placeholder="Name">
  
  </div>
  <br/>
  <div class = "form-group">
    <label for = "email" >Email: </label>
    <input type = "text" class ="form-control" id ="email" formControlName = "email" placeholder="Email">
  </div>
  <br/>
  <div class = "form-group">
    <label for = "phone" >Phone: </label>
    <input type = "text" class ="form-control" id ="phone" formControlName = "phone" placeholder="Phone">
  </div>
  <br/>
  
</form>


<form [formGroup]="addressForm" (ngSubmit)="onSubmit()">
  
  <div class = "form-group">
    <label for = "street" >Street: </label>
    <input type = "text" class ="form-control" id ="street" formControlName = "street" placeholder="Street">
  </div>
  <br/>
  <div class = "form-group">
    <label for = "apt" >Apt # : </label>
    <input type = "text" class ="form-control" id ="apt" formControlName = "apt" placeholder="Apt #">
  </div>
  <br/>
 
  <div class = "form-group">
  <label for = "city" >City: </label>
    <input type = "text" class ="form-control" id ="city" formControlName = "city" placeholder="City">
  </div>
  <br/>
  <div class = "form-group">
    <label for = "state" >State: </label>
    <input type = "text" class ="form-control" id ="state" formControlName = "state" placeholder="state">
  </div>
  <br/>
  <div class = "form-group">
    <label for = "zip" >Zip Code: </label>
    <input type = "text" class ="form-control" id ="zip" formControlName = "zip" placeholder="zip">
  </div>
  <br/>
</form>
</div>

<div class="flex-child">
<button (click)="onSubmit()" class="button" >Sign Up</button>
</div>

</div>



<router-outlet></router-outlet>
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

input{
  position: fixed;
  left: 200px;
  width: 20%;
}


.button {
  margin-top: 350px;
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


`  ]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  addressForm: FormGroup;
  users:any[]= []

  private subscription: Subscription[] = []


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.addressForm = formBuilder.group({
      street: [''],
      apt: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
    this.subscription[0] = this.addressForm?.valueChanges.subscribe((result: any) => {
      // console.log(result)
    })

    this.signUpForm = formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      username: [''],
      password: [''],
      address: ['']
    })
    this.subscription[1] = this.signUpForm?.valueChanges.subscribe((result: any) => {
      // console.log(result)
    })
  }

  ngOnInit(): void {
  this.subscription[2]= this.userService.searchAllusers().subscribe((result:any)=>{
    this.users= result
  })
  }

  onSubmit() {
    const signUpUser = this.signUpForm.value
    const address = this.addressForm.value
    const finalUser = {...signUpUser, address}
    console.log(finalUser)
    this.subscription[3] = this.userService.signUp(finalUser).subscribe((result:any)=>{
      console.log(result)
      localStorage.setItem('token', result.token)
      this.router.navigate(['/','lists'], {state:{user: result}})
    })
    // window.location.reload;
  }
  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }
}
