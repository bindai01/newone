import { Component, OnInit } from '@angular/core';
import { from, of, map, filter } from 'rxjs';



@Component({
  selector: 'app-rsjx-operator',
  templateUrl: './rsjx-operator.component.html',
  styleUrls: ['./rsjx-operator.component.css']
})
export class RsjxOperatorComponent implements OnInit {
arr:any=[1,2,3,4,5,6]
test:any;
test1:any;
  constructor() { 
    this.test1=of(1,2,3,4,5,6,7);
    // console.log(this.test1);
    this.test1.subscribe(
      (res:any)=>{console.log(res)},
      (err:any)=>{console.log(err)} 
    )

  }

  ngOnInit(): void {
    this.test=from(this.arr);
    console.log(this.test);
    this.test.subscribe(
      (res:any)=>{console.log(res)},
      (err:any)=>{console.log(err)}
    );

    this.test.pipe(
      map((x:any)=>x*5),
      filter((y:any)=> y%2 == 0)
     ).subscribe(
      (res:any)=>{console.log(res)},
        (err:any)=>{console.log(err)}
      );
  }

  
  

  
}


