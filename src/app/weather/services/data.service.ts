import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { DDList , Weather, Settings } from '../../types'
import { Observable, Subscription } from 'rxjs';

//TODO: change injectable
//  @Injectable({
//   providedIn: 'root'
//  })
 @Injectable()
export class DataService {

  readonly cityList: DDList[] = [{id:'293397' ,name:'Tel-Aviv'},{id:'281184' ,name:'Jerusalem'},{id:'293703' ,name:'Rishon Leziyyon'}];
  readonly tempUnitsList: DDList[] = [{id:'metric',name:'Celsius'},{id:'Imperial',name:'Fahrenheit'}];

  settData: Settings; 
  data:Weather;

  constructor(private http: HttpClient) { 
  }

  init(){
    let subscription: Subscription;
    // set defualt values
    this.settData = {
      city: {
        id: "281184",
        name: "Jerusalem"
      },
      tempUnit: {
        id: "metric",
        name: "Celsius"
      }
    }
    subscription = this.getDetails().subscribe(
      (data: Weather) => {
        console.log('@@@@@@@@@@@@@@@@@ data in init func @@@@@', data);
        this.data = data;
        subscription.unsubscribe();

      }
    );
  }
 
  getDetails(): Observable <Weather> {

    let url = `/api/data/2.5/weather?id=${this.settData.city.id}&units=${this.settData.tempUnit.id}&appId=4d123267c556a96c4b25845875c2199b`;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                    //  .set('Access-Control-Allow-Origin','*')
                    //  .set('Access-Control-Allow-Methods','DELETE, POST, GET, OPTIONS')
                    //  .set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

   return this.http.get<Weather>(url,{headers})
    .pipe(
      map((data)=>{
        data.main = data.main;
        data.weather = data.weather;
        data.name = data.name;
        return data;
      }));
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
