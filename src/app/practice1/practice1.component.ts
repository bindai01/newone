import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
data:any=[];
Showdata:boolean=false;
i:any;
fn:any;
ln:any;
mail:any;
pass:any;
cpass:any;
showUpdate:boolean=false;

  constructor() { }

  ngOnInit(): void {
   
}

onSubmitForm(frm:any){
  console.log("template Form works");
  this.data.push(frm.value);
if(this.data.length>0){
  this.Showdata=true;
}
  
console.log(this.data);
  }

onDelete(dlt:any){
 
  this.data.forEach((element:any)=>{
    if(dlt.password == element.password){
      this.i=this.data.indexof(dlt)
      this.data.splice((this.i),1);
    }
  });

}

onEdit(edit:any){
  this.fn= edit.fname;
  this.ln= edit.lname;
  this.mail= edit.email;
  this.pass= edit.password;
  this.cpass= edit.cpassword;
  this.i=this.data.indexOf(edit);
  this.showUpdate=true;

}
OnUpdate(frm:any){
  //  console.log(frm.value);
  this.data.splice(this.i,1,frm.value);
  this.showUpdate=false;

}



}

