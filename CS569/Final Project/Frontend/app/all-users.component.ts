import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-all-users',
  template: `
    <button (click)="onSubmit()" class="button" > Service List </button> 

<nav>
<h2>List of Users</h2>
<div *ngFor="let user of allUsers">
<a [routerLink]="['/','userdetail']" [state]="{user:user}"> 
  <li>{{user.name}}</li>
</a>
</div>
</nav>

<router-outlet></router-outlet>

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
  left: 50%;
  position: absolute;
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
export class AllUsersComponent implements OnInit {
  user:any
  allUsers:any[]= []
  private subscription: Subscription[] = []


  constructor(    private userService: UserService,
    private router: Router
    ) {
      const navigationState :any = this.router.getCurrentNavigation()?.extras.state
        this.user = navigationState.user;
        console.log(this.user)
     }

ngOnInit(): void {
  this.subscription[0]= this.userService.searchAllusers().subscribe((result:any)=>{
    this.allUsers= result
  })
  }

  onSubmit(){
    this.router.navigate(['/','lists'], {state:{user: this.user}})
  }

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }


}
