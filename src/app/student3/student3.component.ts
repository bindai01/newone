import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-student3',
  templateUrl: './student3.component.html',
  styleUrls: ['./student3.component.css']
})
export class Student3Component implements OnInit {
// num:any;
// empname:any=['Arpita','Riya','Aparna','Nisha'];
age=19;
arr=['ap','wb','gj','mh'];
no="0";
test:any="";
data:boolean=false;
l1={ 'color':'red'};
l2={'color':'brown'};




  constructor() { }

  ngOnInit(): void {
    // this.num=19;
    this.test='test1';
  }

}
