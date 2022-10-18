import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit {
myForm:any;
isFormSubmitted:boolean= false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group ({
      fname:['Aparna', [Validators.required]],
      lname:['', [Validators.required , Validators.minLength(6)]],
      email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]]
    })
  }
  get f(){
    return this.myForm.controls;
  }
  onlineSubmitForm(){
console.log('Reactive form Wroks');
console.log(this.myForm.value);
this.isFormSubmitted= true;
  }
  
}
