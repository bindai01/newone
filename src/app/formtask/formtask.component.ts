import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtask',
  templateUrl: './formtask.component.html',
  styleUrls: ['./formtask.component.css']
})
export class FormtaskComponent implements OnInit {
arrdata:any=[];
isshowdata:boolean=false;
i:any;
fn:any;
ln:any;
mail:any;
showUpdate:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onlineSubmit(frm:any){
    this.arrdata.push(frm.value);
    if(this.arrdata.length > 0){
      this.isshowdata=true
    }
 }
 onDelete(dlt:any){
  this.arrdata.forEach((element:any)=>{
    if(dlt.fname == element.fname){
      this.i=this.arrdata.indexOf(dlt);
      this.arrdata.splice((this.i),1)
    }

  })
  

 }
 onEdit(edt:any){
  this.fn=edt.fname;
  this.ln=edt.lname;
  this.mail=edt.email;
  this.i=this.arrdata.indexOf(edt);
  this.showUpdate=true;
}
onUpdate(frm:any){
  console.log(frm.value);
  this.arrdata.splice(this.i,1,frm.value);
  this.showUpdate=false;
}
}
