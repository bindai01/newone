import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  // state:any="";
  // fn:any="Aparna";


  constructor() { }

  ngOnInit(): void {
    // this.state=['WB','AP','MH','GJ'];
  }
  // onlineSubmit(frm:any){
  //   console.log("Hi!! your form is submitted");
  //   console.log(frm.value);
  // }
  submitForm(frm:any){
console.log("event fire");
console.log(frm.value);
  }
}
