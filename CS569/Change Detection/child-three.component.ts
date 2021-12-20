import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  template: `
    <p>
      child-three works!
    </p>
  `,
  styles: [
  ],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildThreeComponent  {

  constructor() { }

  ngOnInit(){
    console.log("Child-Three OnInit")
  }

ngDoCheck(){
  console.log("Child-Three DoCheck")
}

ngOnChanges(){
  console.log("Child-Three OnChanges")
}

ngAfterContentInit(){
  console.log("Child-Three ngAfterContentInit")
}

ngAfterContentChecked(){
  console.log("Child-Three ngAfterContentChecked")
}

ngAfterViewInit(){
  console.log("Child-Three ngAfterViewInit")
}

ngAfterViewChecked(){
  console.log("Child-Three ngAfterViewChecked")
}


}
