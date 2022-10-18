import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  state:any="";
  myForm:any;
  isFormSubmitted:boolean= false;
  // myForm:any;
  // isFormSubmitted:boolean= false;

  constructor( private fb: FormBuilder) { }
  ngOnInit(): void {
    this.state=['WB','AP','MH','GJ'];
    this.myForm=this.fb.group({
      fname:['', [Validators.required]],
      lname:['', [Validators.required, Validators.maxLength(5)]],
      mail:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      // password:[],
      // cpassword:[],
      // State:[],
      // gender:[]


    })



  // this.myForm = this.fb.group({
  //   fname:['Suraj', [Validators.required]],
  //   lname:['', [Validators.required, Validators.maxLength(5)]],
  //   email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
  //   pass:[''],
  //   cpass:['']
  // })

    
}
  get f(){
    return this.myForm.controls;
  }
  onLineSubmit(){
    console.log("Reactive forms event started");
    console.log(this.myForm.value);
    // console.log(this.myform);
    this.isFormSubmitted = true;
  }



  // get f(){
  //   return this.myForm.controls;
  // }

  // onSubmitReactiveForm(){
  //   console.log("Hello");
  //   // console.log(this.myForm);
  //   console.log(this.myForm.value);
  //   this.isFormSubmitted = true;
  // }


}

