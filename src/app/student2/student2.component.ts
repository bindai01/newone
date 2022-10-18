import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css']
})
export class Student2Component implements OnInit {
no=4;
data=true;
test:any="";
test1:any="";
style1:any="";
style2:any="";
  constructor() { }

  ngOnInit(): void {
    this.test= 'cl1';
    this.test1= 'cl2';
    this.style1={'background-color':'grey','color':'blue','font-weight':'bold'};
    this.style2={'background-color':'yellow','color':'brown'};
  }

}
