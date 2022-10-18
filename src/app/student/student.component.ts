import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public abc: string=""
  public linking: string=""
  public Studentdata: string=""

  constructor() { }

  ngOnInit(): void {
    this.abc=" Hi!! This is second variable"
    this.linking="https://mail.google.com/"
  }
  Clickdata(){
    console.log("his this is second event");
  }
}
