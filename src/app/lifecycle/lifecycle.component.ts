import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck {

  constructor() { }

  ngOnInit(): void {
    console.log("This is OnInit Method");
  }
  ngOnChanges(): void {
    console.log("This is Onchange Method");
    
  }
 ngDoCheck(): void {
   console.log("This is DoCheck method");
 }
}
