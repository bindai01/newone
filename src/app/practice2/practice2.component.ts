import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {
myForm:any;
arr:any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm=this.fb.group({
      fname:[],
      lname:[],
      email:[],
      password:[],
      
      

    })
  }
  
onSubmit(){
  console.log("reactive work start")
  console.log(this.myForm.value);

}
}
