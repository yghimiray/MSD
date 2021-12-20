import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  template: `
    <p>
      Child-two value is {{childTwo.two}}
    </p>
    <app-child-three></app-child-three>
  `,
  styles: [
  ],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildTwoComponent  {
  @Input('childTwo') childTwo: {two: number} = {two:0};

  constructor() { }


  
  ngOnInit(){
    console.log("Child-Two OnInit")
  }

ngDoCheck(){
  console.log("Child-Two DoCheck")
}

ngOnChanges(){
  console.log("Child-Two OnChanges")
}

ngAfterContentInit(){
  console.log("Child-Two ngAfterContentInit")
}

ngAfterContentChecked(){
  console.log("Child-Two ngAfterContentChecked")
}

ngAfterViewInit(){
  console.log("Child-Two ngAfterViewInit")
}

ngAfterViewChecked(){
  console.log("Child-Two ngAfterViewChecked")
}

}
