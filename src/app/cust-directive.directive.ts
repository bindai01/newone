import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustDirective]'
})
export class CustDirectiveDirective {

  constructor(private eler : ElementRef) { 
       console.log(this.eler.nativeElement);
    
    // this.eler.nativeElement.style.background="yellow";
    // this.eler.nativeElement.style.color="blue";
    // this.eler.nativeElement.style.fontWeight="bold";
   
this.eler.nativeElement.style.background="yellow";

}
}
