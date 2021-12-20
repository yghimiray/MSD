import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div appColorize appMakeBigger [increment]="incrementSize"> {{text | swapLetter:"i":"#"}} </div>
  
  `,
  styles: [

  ]

})
export class AppComponent {
  title = 'directivesApp';
  incrementSize:number = 5  
  text : string = "This is an App Component to be colorized"
}
