import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective implements OnInit{
currentSize: number = 20
@Input() increment:number = 0

@HostBinding('style.font-size') hostSize !:string

@HostListener('dblclick',['$event']) makeBigger(){
  this.currentSize = (this.currentSize + this.increment)
  this.hostSize = this.currentSize +'px'
}

  constructor() { }

  ngOnInit(){
    this.hostSize = this.currentSize +'px'
  }

}
