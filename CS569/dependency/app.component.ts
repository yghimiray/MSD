import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RandomUserService } from './random-user.service';


@Component({
  selector: 'app-root',
  template:`
  <!-- <button (click)="showHide()">Show/Hide Users</button>
  <app-user *ngIf="show"></app-user> -->
  <!-- <p>This is an App Component</p> -->
  <router-outlet></router-outlet>
  `,
  styles: [
    `
  body {
	display: flex;
}
  `]
})

export class AppComponent implements OnInit, OnDestroy{
  key:string = "yogesh"
  show : boolean = false;
  subscription !:Subscription

  constructor(private service: RandomUserService) {}

  ngOnInit(){
    this.subscription = this.service.getData()
    .subscribe((data:any)=>{
      this.service.saveLocally(this.key, JSON.stringify(data.results))
    })
  }

  showHide() {
    this.show = !this.show
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
