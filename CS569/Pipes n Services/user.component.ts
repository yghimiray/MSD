import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RandomUserService } from './random-user.service';


@Component({
  selector: 'app-user',
  template: `
    <p>
      ----------------------user Component-------------------------
    </p>
  <nav>
    <div *ngFor="let item of value" > 
    <a [routerLink]="['/', item.email]" [state]="{value:value}"> {{item.name.first}} {{item.name.last}}
    <!-- <button (click)="showDetails()"> Show Details </button>     -->
  </a>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `

})
export class UserComponent implements OnInit , OnDestroy {
  key:string = "yogesh"
  value:any[]= []
  subscription !: Subscription

  constructor(private service: RandomUserService,
    private router : Router
    ) { }

  ngOnInit(): void {
  this.subscription = this.service.getCachedData(this.key)
  .subscribe((data:any)=>{
    this.value = JSON.parse(data)
  })
  }

  showDetails(){
    this.router.navigate(['/',':email'])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
