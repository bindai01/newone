import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2serviceService {
hi='hello';
  constructor( private backendData : HttpClient ) { }
  getDataFromBackend(){
    return this.backendData.get('https://jsonplaceholder.typicode.com/posts');
   }
   getDataFromBackend2(){
    return this.backendData.get('https://jsonplaceholder.typicode.com/posts').toPromise();
   }
}
 