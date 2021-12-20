import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  template: `
    <p>
    This is a Child Two Component.
    </p>
  `,
  styles: [
    `
    p{
      color:purple;
      font-size: 15px
    }
    `
  ],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class ChildTwoComponent {

}
