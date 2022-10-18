import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public  test1="hi this is sample text";
  test2="hi second test";
  constructor(private http : HttpClient) { 
    console.log("hi service");
  }
  getData(){
  // return this.test2;
  return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}

