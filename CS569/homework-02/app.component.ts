import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> This is my App Component </h1>
  <app-child-one></app-child-one>
  <app-child-two></app-child-two>
  `,
  styles: [
   `
   h1{
      color: red;
  }`
  ]
})
export class AppComponent {
  title = 'hw2App';
}
