import { Component, OnInit } from '@angular/core';
import { PracticeDataService } from 'service/practice-data.service';

@Component({
  selector: 'app-practice-service',
  templateUrl: './practice-service.component.html',
  styleUrls: ['./practice-service.component.css']
})
export class PracticeServiceComponent implements OnInit {
public data:any;
  constructor(private myd : PracticeDataService) { }

  ngOnInit(): void {
    this.dataFrom();
  }
  dataFrom(){
    this.myd.getData().subscribe(
      (res:any)=>{
        console.log(res);
        this.data=res;
        this.data=this.data.products;
        console.log(this.data);
        this.data.map((x:any)=>{
          console.log(x);
          x.year=2007;
        })
        console.log(this.data);
      },
      (err:any)=>{
        console.log(err);
      }
    )
    
  }
}

