import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCust2dDirective]'
})
export class Cust2dDirectiveDirective {

  constructor( private ele : ElementRef) { 
      this.ele.nativeElement.style.background="skyblue";
    // this.ele.nativeElement.style.background="yellow";
     this.ele.nativeElement.style.color="brown";
    
  }

}
