import { Component } from '@angular/core';

enum  choice {
  Rock= "Rock",
  Paper = "Paper", 
  Scissors= "Scissors"
};


@Component({
  selector: 'app-root',
  template:`
  <h1>Rock Paper Scissors </h1>
  <app-score>
  <p>
      Score: Won {{win}}/ Lost {{lost}}/ Tie {{tie}}
    </p>
  </app-score>
      
  <app-button >
    <button (click)= "handleRock()" > Rock </button>
    <button (click)= "handlePaper()"> Paper </button>
    <button (click)= "handleScissors()"> Scissors </button>
    <!-- <p>{{myChoice}}</p> -->
  </app-button>
  <h2>Computer choice was {{computerChoice}} </h2>
  `,
  styles: [
   `
   h1,h2{
     text-align:center 
  }

  button{
      margin: 0;
      position: relative;
      left:40%;
      height: 50px;
      width: 100px;
    }
    p{
      text-align:center;
      color:red;
      font-size:25px
       }
  `
  ]
})
export class AppComponent {
  title = 'rock-paper-scissors';
  win:number = 0;
  lost:number = 0;
  tie:number = 0;
  
  myChoice :string = ''

  myArray = [ "Rock", "Paper", "Scissors" ];
  
  computerChoice: string = ""


  handleRock(){
    this.myChoice = choice.Rock
    this.computerChoice = this.myArray[Math.floor(Math.random()*this.myArray.length)];
    this.compare()
  }
  handlePaper(){
    this.myChoice = choice.Paper
    this.computerChoice = this.myArray[Math.floor(Math.random()*this.myArray.length)];
    this.compare()
  }
  handleScissors(){
    this.myChoice = choice.Scissors
    this.computerChoice = this.myArray[Math.floor(Math.random()*this.myArray.length)];
    this.compare()
  }
  compare(){
    if(this.myChoice === this.computerChoice){
      this.tie = this.tie + 1
    }else if(this.myChoice===choice.Paper && this.computerChoice === choice.Rock){
      this.win = this.win + 1;
    }else if(this.myChoice===choice.Scissors && this.computerChoice === choice.Paper){
      this.win = this.win + 1;
    }else if(this.myChoice===choice.Rock && this.computerChoice === choice.Scissors){
      this.win = this.win + 1;
    }else{
      this.lost = this.lost +1;
    }
  }

}
