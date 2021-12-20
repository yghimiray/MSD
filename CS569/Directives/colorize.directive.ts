import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorize]'
})

export class ColorizeDirective implements OnInit{
  allColors : string[] = ['red', 'blue', 'green', 'yellow', 'maroon']
  currentColor : string = ''
  @HostBinding('style.color') hostColor !:string

  // constructor(private elementRef : ElementRef, private renderer2 : Renderer2) { }

  intervalId = setInterval(()=>{
    this.currentColor = this.allColors[Math.floor(Math.random()*this.allColors.length)];  
    this.hostColor = this.currentColor  
  },1000)

  

  ngOnInit(){
    // this.renderer2.setStyle(this.elementRef.nativeElement,'color','yellow')
  }

ngOnDestroy(){
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
}


}
