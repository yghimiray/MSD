import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  template: `
<h2> Welcome to the Service Pool </h2>
<form [formGroup]="signInForm" >
  <div class = "form-group">
    <label for = "loginUsername" >Username: </label>
    <input type = "text" class ="form-control" id ="loginUsername" formControlName = "username" placeholder="Username">
  
  </div>
  <br/>
  <div class = "form-group">
    <label for = "LoginPassword" >Password: </label>
    <input type = "password" class ="form-control" id ="LoginPassword" formControlName = "password" placeholder="Password">
  </div>

  <!-- <button type="submit" class="button" >Login </button> -->
</form>
<br/>
<nav>
  <!-- <a [routerLink]="['/','lists']" [state]="{user:loggedUser}">  -->
    <!-- <a> -->
  <button (click)="onSubmit()" class="button" >Login </button>
<!-- </a> -->
</nav>


<nav>
<h3>Are you not registered yet? </h3>
<a [routerLink]="['/','signup']" > 
<button  class="button" >Sign Up</button>
  <!-- <h3>Sign Up</h3> -->
</a>
</nav>


<router-outlet></router-outlet>
  `,
  styles: [
`

input{
  position: fixed;
  left: 200px;
  width: 20%;
}


 .button {
  left:30%;
  position:relative;
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
export class HomeComponent implements OnInit, OnDestroy{
  loggedUser:any;
  signInForm:FormGroup;
  private subscription : Subscription [] = [];

  constructor(private formBuilder : FormBuilder,
    private userService : UserService,
    private router : Router
    ){
    this.signInForm = formBuilder.group({
      'username':[''],
      'password':['']
    })
    this.subscription[0]= this.signInForm?.valueChanges.subscribe((result:any)=>{
      // console.log(result)
    })

  }

  ngOnInit(){

  }
  
  
  onSubmit(){
    this.subscription[1] = this.userService.login(this.signInForm.value).subscribe((result:any)=>{
      // console.log(result)
      this.loggedUser= result.user
      localStorage.setItem('token', result.token)
      // console.log(this.loggedUser)
      this.router.navigate(['/','lists'], {state:{user: this.loggedUser}})
    })
  }

ngOnDestroy(){
this.subscription.forEach(item=> item.unsubscribe())
}

}
