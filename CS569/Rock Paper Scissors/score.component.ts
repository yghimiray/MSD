import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  template: `
    <!-- <p>
      Score: Won / Lost / Tie
    </p> -->
    <ng-content></ng-content>
  `,
  styles: [
    `
    p{
      text-align:center 
   }`
  ]
})
export class ScoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
