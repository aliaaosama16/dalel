import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
 
  constructor() { }
 
  setData(id, data) {
    console.log(JSON.stringify(data))
    this.data[id] = data;
  }
 
  getData(id) {
    return this.data[id];
  }
}
