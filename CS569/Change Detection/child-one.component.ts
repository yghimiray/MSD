import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    <p>
    Child-one value is {{childOne.one}}
    </p>
  `,
  styles: [
  ],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildOneComponent  {
  @Input('childOne') childOne: {one: number} = {one:0};
  
  constructor() { }
  
  
  ngOnInit(){
    console.log("Child-One OnInit")
  }

ngDoCheck(){
  console.log("Child-One DoCheck")
}

ngOnChanges(){
  console.log("Child-One OnChanges")
}

ngAfterContentInit(){
  console.log("Child-One ngAfterContentInit")
}

ngAfterContentChecked(){
  console.log("Child-One ngAfterContentChecked")
}

ngAfterViewInit(){
  console.log("Child-One ngAfterViewInit")
}

ngAfterViewChecked(){
  console.log("Child-One ngAfterViewChecked")
}

}
