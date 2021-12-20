import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <!-- <button (click)= "handleRock()" > Rock </button>
    <button (click)= "handlePaper()"> Paper </button>
    <button (click)= "handleScissors()"> Scissors </button>
    <p>{{mychoice}}</p> -->
    <ng-content></ng-content>
  `,
  styles: [
    `
    button{
      margin: 0;
      position: relative;
      left:40%;
      height: 50px;
      width: 100px;
    }
    `
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }
  // @Input('myChoice') myChoice :string = ''
  // @Input('choice') choice :string = ''
  // @Input('computerChoice') computerChoice :string = ''
  // @Input('myArray') myArray :string = ''
  // @Input('compare') compare :string = ''
  
  
  // handleRock(){
  //   this.myChoice = choice.Rock
  //   this.computerChoice = this.myArray[Math.floor(Math.random()*this.myArray.length)];
  //   this.compare()
  // }
  // handlePaper(){
  //   this.myChoice = choice.Paper
  //   this.computerChoice = this.myArray[Math.floor(Math.random()*this.myArray.length)];
  //   this.compare()
  // }
  // handleScissors(){
  //   this.myChoice = choice.Scissors
  //   this.computerChoice = this.myArray[Math.floor(Math.random()*this.myArray.length)];
  //   this.compare()
  // }

  ngOnInit(): void {

  }

}
