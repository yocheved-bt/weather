import { Injectable } from '@angular/core';
import { DDList } from '../../types'

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  readonly cityList: DDList[] = [{id:'281184' ,name:'Jerusalem'},{id:'293397' ,name:'Tel-Aviv'},{id:'293703' ,name:'Rishon Leziyyon'}];
  readonly tempUnitsList: DDList[] = [{id:'1',name:'metric'},{id:'2',name:'Imperial'}];


  constructor() { }

  init(){
    console.log('initail')
  }
}


// import {Http} from 'angular2/http';
// import {Injectable} from 'angular2/angular2';

// interface CustomerName {
//   first: string;
//   last: string;
// }

// export class Customer {
//   id: string;
//   name: CustomerName;
//   email: string;
  
//   static create(data){
//     return new Customer(data);
//   }
  
//   constructor(data){
//     this.id = data._id;
//     this.email = data.email;
//     this.name = data.name;
//   }
// }


// @Injectable()
// export class CustomerData {
//   constructor(private http: Http){
//     this.customers = http.get('http://beta.json-generator.com/api/json/get/VkCoTefEg')
//       .map(res => res.json())
//       .map(rawCustomers => rawCustomers.map(Customer.create));
//   }
// }
