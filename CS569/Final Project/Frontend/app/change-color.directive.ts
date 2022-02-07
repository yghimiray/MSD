import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  expiredColor : string = 'grey'
  @HostBinding('style.color') hostColor !:string

  constructor() { 
    this.hostColor = this.expiredColor;  
  }

}
