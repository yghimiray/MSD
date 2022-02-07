import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  template: `
    <button (click)="seeServiceList()" class="button" > Service List </button> 
    &nbsp;
    <button (click)="seeAllUsers()" class="button" > See All Users </button> 
    <h2>Basic</h2>
    <p>Name: {{user.name}}</p>
    <p>Email: {{user.email}}</p>
    <p>Phone: {{user.phone}}</p>
    <h2>Address</h2>
    <p>Street: {{user.address.street}}</p>
    <p>Apt: {{user.address.apt}}</p>
    <p>City: {{user.address.city}}</p>
    <p>State: {{user.address.state}}</p>
    <p>Zip Code: {{user.address.zip}}</p>
  `,
  styles: [
    `
    .flex-container {
      display: flex;
  }
  
  .flex-child {
      margin-right: 20px;
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
export class UserDetailComponent implements OnInit {
  user : any;
  

  constructor(private router : Router  ){ 
    const navigationState :any = this.router.getCurrentNavigation()?.extras.state
      this.user = navigationState.user
  }

  ngOnInit(): void {
  }

  seeServiceList(){
    this.router.navigate(['/','lists'], {state:{user: this.user}})
  }

  seeAllUsers(){
    this.router.navigate(['/','users'],{state:{user:this.user}})
  }


}
