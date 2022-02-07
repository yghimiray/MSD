import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `

<!-- this.router.navigateByUrl('/SampleComponent', { skipLocationChange: true });
this.router.navigate(["yourLandingComponent"]); -->

<!-- <app-home></app-home> -->
<button (click)="LogOut()" class="button"> Logout</button>
<router-outlet></router-outlet>

`,
  styles: [
`

.button {
  left:90%;
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
export class AppComponent implements OnInit, OnDestroy{

  constructor(private router:Router){

  }
  ngOnInit(){

  }
  
  LogOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/','home'])

  }
ngOnDestroy(){
}

}
