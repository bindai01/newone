import { Component, OnInit } from '@angular/core';
import { Data2serviceService } from 'service/data2service.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {



  constructor( private prom : Data2serviceService) {
    console.log(this.prom.hi);
   this.getdatainpromise()
   }

  ngOnInit(): void {
    const test= new Promise(function(resolve, reject) {
      setTimeout(()=>{
        resolve("resolved case");
        reject("Reject case");
      },3000);
      
    })
    test.then((value:any)=>{
      console.log("promise exexuted"+ " " + value);
    })
    test.catch((value:any)=>{
      console.log("promise rejected"+ " " + value);
    });

  }
getdatainpromise(){
this.prom.getDataFromBackend2().
then((res:any)=>{
  console.log(res);
})
.catch((err:any)=>{
  console.log(err);
})
}
}
