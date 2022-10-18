import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
sample='Aparna pradhan';
date2:any="";
amount=1250000;
arr=['ap','aj','ak','ao'];
vall=100;
data=[
  {fname:'ap',age:28},
  {fname:'puja',age:26},
  {fname:'him',age:20},
  {fname:'rupa',age:24},
]

  constructor() { }

  ngOnInit(): void {
    this.date2= new Date();
  }

}
