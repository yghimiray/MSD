import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <p>App component </p>
  <app-child-one [childOne]="childOne"></app-child-one>
  <app-child-two [childTwo]="childTwo"></app-child-two>
  <button (click)="mutateOne()" >ChildOne Mutable</button>
  <button (click)="immutateOne()" >ChildOne Immutable</button>
  <button (click)="mutateTwo()">ChildTwo Mutable</button>
  <button (click)="immutateTwo()" >ChildTwo Immutable</button>
  
  `,
  styles: [


  ]
})
export class AppComponent {
  title = 'changeDetection';
  childOne:{one: number} = {one: 0};
  childTwo: {two: number} = {two: 0 };

  mutateOne(){
    this.childOne.one = this.childOne.one + 1;
  }

  immutateOne(){
    this.childOne = {one: this.childOne.one + 1 };
  }



  mutateTwo(){
    this.childTwo.two = this.childTwo.two + 1;
  }

  immutateTwo(){
    this.childTwo = {two : this.childTwo.two + 1};
  }

//   ngOnInit(){
//     console.log("App OnInit")
//   }

// ngDoCheck(){
//   console.log("App DoCheck")
// }

// ngOnChanges(){
//   console.log("App OnChanges")
// }

// ngAfterContentInit(){
//   console.log("App ngAfterContentInit")
// }

// ngAfterContentChecked(){
//   console.log("App ngAfterContentChecked")
// }

// ngAfterViewInit(){
//   console.log("App ngAfterViewInit")
// }

// ngAfterViewChecked(){
//   console.log("App ngAfterViewChecked")
// }

}
