import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  UserData : any;
  

  constructor() {}
  
  setData(data :any){
    this.UserData=data;
  }
  getData(){
    return this.UserData;
  }
}
