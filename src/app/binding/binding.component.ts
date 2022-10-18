import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
public test: string="hello this is first value"
public test2:number=100
public alink:string="https://mail.google.com"
public Fname:string="Aparna"
// public age :any="";
// linked :any="";
// fname:any;

  constructor() { }

  ngOnInit(): void {
    this.test2=280;
    // this.age=22;
    // this .linked="https://www.ggogle.com";
    // this.fname="Ap"
  }
  Onclick(){
    console.log("hello this is event data binding");
  }
  // onSubmit(){
  //   console.log("hi!!");
  // }
}
