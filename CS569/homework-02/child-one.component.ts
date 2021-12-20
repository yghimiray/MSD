// import { ViewEncapsulation } from '@angular/compiler';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    <p>
     This is a Child One Component.
    </p>
  `,
  styles: [
    `
    p{
      color:#037d50;
      font-size: 32px
    }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildOneComponent {

}
