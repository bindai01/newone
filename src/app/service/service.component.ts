import { Component, OnInit } from '@angular/core';
import { DataService } from 'service/data.service';
import { Data2serviceService } from 'service/data2service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
htmldata:any;
  constructor( private mysr : DataService , private mysr2 :Data2serviceService) 
  {
    // console.log( this.mysr.test1);
   
   }

  ngOnInit(): void {
    // this.dataFormService();
    this.dataFromService2();
  }
// dataFormService(){
//   this.mysr.getData();
//  console.log(this.mysr.getData());
// this.mysr.getData().subscribe(
//   (res:any)=>{
//     console.log(res);
//   },
//   (err:any)=>{
// console.log(err);
//   }
// )

dataFromService2(){
  this.mysr2.getDataFromBackend().subscribe(
    (res:any)=>{
      console.log(res);
      this.htmldata=res.slice(0,15);
    },
    (err:any)=>{
console.log(err);
    }
  )
  // console.log(this.mysr2.getDataFromBackend());
}
 }

